/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { Message } from './room/resolvers/Message'
import { genUser as Mutation_genUser } from './user/resolvers/Mutation/genUser'
import { getPost as Mutation_getPost } from './post/resolvers/Mutation/getPost'
import { Post } from './post/resolvers/Post'
import { getUser as Query_getUser } from './user/resolvers/Query/getUser'
import { newMessage as Subscription_newMessage } from './room/resolvers/Subscription/newMessage'
import { User } from './user/resolvers/User'
export const resolvers: Resolvers = {
  Query: { getUser: Query_getUser },
  Mutation: { genUser: Mutation_genUser, getPost: Mutation_getPost },
  Subscription: { newMessage: Subscription_newMessage },
  Message: Message,
  Post: Post,
  User: User,
}
