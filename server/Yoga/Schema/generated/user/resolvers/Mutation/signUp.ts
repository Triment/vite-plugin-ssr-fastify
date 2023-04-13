import { globalConfig } from '#root/global.config'
import { createHash } from 'crypto'
import type { MutationResolvers } from './../../../types.generated'
export const signUp: NonNullable<MutationResolvers['signUp']> = async (_parent, _arg, _ctx) => {
  /* Implement Mutation.signUp resolver logic here */
  const { email, password } = _arg
  const findOneUser = await _ctx.prisma.user.findFirst({
    where: {
      email,
    },
  })
  /**
   * nickName       String
  active         Boolean
  email          String
  password       String
  avatarUrl String
   */
  if (findOneUser) return null
  const user = await _ctx.prisma.user.create({
    data: {
      email,
    },
  })
  return user
}
