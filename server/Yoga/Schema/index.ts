import { PubSub, createPubSub, createSchema } from 'graphql-yoga'
export const pubSub = createPubSub<{
  newMessage: [payload: { from: string; body: string }]
}>()

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      room(id: ID!): [Message!]!
    }

    type Mutation {
      send(input: SendMessageInput!): Message!
    }

    type Subscription {
      newMessage(roomId: ID!): Message!
    }

    type Message {
      from: String
      body: String
    }

    input SendMessageInput {
      roomId: ID!
      from: String!
      body: String!
    }
  `,
  resolvers: {
    Query: {
      room: () => [],
    },
    Mutation: {
      send: (_, { input }, { pubSub }: { pubSub: PubSub<any> }) => {
        const { roomId, ...newMessage } = input

        pubSub.publish('newMessage', roomId, newMessage)

        return newMessage
      },
    },
    Subscription: {
      newMessage: {
        subscribe: (_, { roomId }, { pubSub }) => pubSub.subscribe('newMessage', roomId),
        resolve: (payload) => payload,
      },
    },
  },
})
