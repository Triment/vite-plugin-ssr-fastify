import { createYoga } from 'graphql-yoga'
import { schema } from './Schema'

export const yogaApp = createYoga({
  graphiql: {
    subscriptionsProtocol: 'WS'
  },
  schema: schema
})