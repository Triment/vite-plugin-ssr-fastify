
import { user } from '#root/renderer/recoil/atoms/user'
import { gql, useQuery } from 'urql'
import React from 'react'
import { useRecoilState } from 'recoil'
export { Page }

function Page() {
  const [state, setUserState] = useRecoilState(user)
  const [result, reQuery] = useQuery({
    query: gql`query MyQuery($id: ID = "1") {
    room(id: $id) {
      body
      from
    }
  }`})
  if (result.fetching)
    return <div suppressHydrationWarning> 加载中 </div>
  return (
    <div suppressHydrationWarning>
      <h1>{result.data.room.length}</h1>
      This page is:
      <ul>
        <li role='author'>{state.username}</li>
        <input type='button' role='changeuser' value="test" onClick={() => setUserState({ username: 'newuser' })} />
      </ul>
    </div>
  )
}
