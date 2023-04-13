/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { signUp as Mutation_signUp } from './user/resolvers/Mutation/signUp'
import { signIn as Query_signIn } from './user/resolvers/Query/signIn'
import { SignResponse } from './user/resolvers/SignResponse'
import { User } from './user/resolvers/User'
export const resolvers: Resolvers = {
  Query: { signIn: Query_signIn },
  Mutation: { signUp: Mutation_signUp },

  SignResponse: SignResponse,
  User: User,
}
