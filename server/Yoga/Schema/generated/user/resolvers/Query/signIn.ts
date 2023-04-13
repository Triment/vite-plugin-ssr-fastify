import { globalConfig } from '#root/global.config'
import { createHash } from 'crypto'
import { sign } from 'jsonwebtoken'
import type { QueryResolvers } from './../../../types.generated'
export const signIn: NonNullable<QueryResolvers['signIn']> = async (_parent, _arg, _ctx) => {
  /* Implement Query.signIn resolver logic here */
  const { email, password } = _arg
  const findOneUser = await _ctx.prisma.user.findFirst({
    where: {
      email,
    },
  })
  if (findOneUser) {
    if (
      createHash('sha1')
        .update(`${globalConfig.TOKEN_SERCERT[0]}${password}${globalConfig.TOKEN_SERCERT.slice(3)}`)
        .digest('hex') === findOneUser.password
    ) {
      return {
        token: sign({ ...findOneUser, password: null }, globalConfig.TOKEN_SERCERT, {
          expiresIn: '10h',
        }),
        __typename: 'SignResponse',
      }
    }
    return { token: null, __typename: 'SignResponse' }
  }
  return { token: null, __typename: 'SignResponse' }
}
