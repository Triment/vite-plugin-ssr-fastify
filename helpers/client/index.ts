import { Client, cacheExchange, fetchExchange, subscriptionExchange, ssrExchange, SSRExchange } from 'urql'
import { createClient as createWSClient } from 'graphql-ws'
import { globalConfig } from '#root/global.config'
import WebSocket from 'ws'

const wsClient = createWSClient({
  url: globalConfig.GRAPHQL_WS_PATH,
  webSocketImpl: WebSocket.WebSocket
})

/**
 * 
 * @param param0 { headers: Headers fetch头信息, ssrExc?: SSRExchange 服务端渲染数据交换器 }
 * @returns 
 */
export const QlClient = (
  { 
    headers,
    ssrExc
  }: 
  {  
    headers?: Headers,
    ssrExc?: SSRExchange
  }) => {
  const isServerSide = typeof window === 'undefined'
  const ssr = ssrExc || ssrExchange({
    isClient: !isServerSide,
    initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
  })
  return new Client({
    url: globalConfig.GRAPHQL_PATH,
    suspense: !isServerSide,
    exchanges: [
      cacheExchange,
      ssr,
      fetchExchange,
      subscriptionExchange({
        forwardSubscription(request) {
          const input = { ...request, query: request.query || '' }
          return {
            subscribe(sink) {
              const unsubscribe = wsClient.subscribe(input, sink)
              return { unsubscribe }
            },
          }
        },
      }),
    ],
    fetchOptions: () => {
      return {
        headers: headers
      }
    }
  })
}