/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { genUser as Mutation_genUser } from './user/resolvers/Mutation/genUser';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      
      Mutation: { genUser: Mutation_genUser },
      
      User: User
    }