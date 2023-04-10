import { globalConfig } from '#root/global.config'
import { GraphQLClient, Headers } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import fetch from 'isomorphic-unfetch'
import { createClient } from 'graphql-ws'

export const QlClient = ({ initialState, headers  }: { initialState?: object, headers?: Headers }) => new GraphQLClient({
  url: globalConfig.GRAPHQL_PATH,
  headers,
  cache: memCache({ initialState }),
  fetch: typeof window !== 'undefined' ? window.fetch : fetch,
  subscriptionClient: ()=>createClient({
    url: globalConfig.GRAPHQL_WS_PATH
  }),
})