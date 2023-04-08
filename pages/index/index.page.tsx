import React from 'react'
import { useRecoilState } from 'recoil'
import { user } from '#root/renderer/recoil/atoms/user'
import { useQuery } from 'graphql-hooks'
export { Page }

function Page() {
  const [state, ] = useRecoilState(user)
  useQuery('', {variables: { id : 1 }})
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li role='author'>{state.username}</li>
        
      </ul>
    </>
  )
}
