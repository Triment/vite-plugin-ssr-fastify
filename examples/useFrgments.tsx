import React from 'react'
import { graphql, useFragment, FragmentType } from '#root/helpers/gql'
const Avatar_UserFragment = graphql(/* GraphQL */ `
  fragment Avatar_UserFragment on User {
    avatarUrl
  }
`)

type AvatarProps = {
  user: FragmentType<typeof Avatar_UserFragment>
}

export function Avatar(props: AvatarProps) {
  const user = useFragment(Avatar_UserFragment, props.user)
  return <img src={user.avatarUrl} />
}
