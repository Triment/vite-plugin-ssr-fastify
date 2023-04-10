import { globalConfig } from '#root/global.config'
import { GraphQLClient, Headers } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import { createClient } from 'graphql-ws'
import fetch from 'isomorphic-unfetch'
import { WebSocket } from 'ws'

export const QlClient = ({ initialState, headers  }: { initialState?: object, headers?: Headers }) => new GraphQLClient({
  url: globalConfig.GRAPHQL_PATH,
  headers,
  cache: memCache({ initialState }),
  fetch: typeof window === 'undefined' ? fetch : window.fetch.bind(window),
  subscriptionClient: createClient({
    url: globalConfig.GRAPHQL_WS_PATH,
    webSocketImpl: WebSocket
  }),
})