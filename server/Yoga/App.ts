import { createYoga } from 'graphql-yoga'
import { pubSub, schema } from './Schema'

export const YogaApp = createYoga({
  graphiql: {
    subscriptionsProtocol: 'WS'
  },
  schema: schema,
  context: {
    pubSub,
  }
})