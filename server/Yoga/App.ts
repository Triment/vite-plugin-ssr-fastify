import { PrismaClient } from '@prisma/client'
import { createYoga } from 'graphql-yoga'
import { pubSub, schema } from './Schema'
const prisma = new PrismaClient()

export const YogaApp = createYoga({
  graphiql: {
    subscriptionsProtocol: 'WS',
  },
  schema: schema(),
  context: {
    pubSub,
    prisma
  },
})
