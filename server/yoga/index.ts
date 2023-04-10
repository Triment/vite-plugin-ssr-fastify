import { createSchema } from 'graphql-yoga'

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
          type Query {
            hello: String!
          }
          type Mutation {
            dontChange: String!
          }
          type Subscription {
            greetings: String!
          }
        `,
  resolvers: {
    Query: {
      hello() {
        return 'world'
      },
    },
    Mutation: {
      dontChange() {
        return 'didntChange'
      },
    },
    Subscription: {
      greetings: {
        async *subscribe() {
          for (const hi of ['Hi', 'Bonjour', 'Hola', 'Ciao', 'Zdravo']) {
            yield { greetings: hi }
          }
        },
      },
    },
  },
})