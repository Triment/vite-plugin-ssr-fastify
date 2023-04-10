import React from 'react'
import { useRecoilState } from 'recoil'
import { user } from '#root/renderer/recoil/atoms/user'
import { useQuery } from 'graphql-hooks'
export { Page }

function Page() {
  const [state, setUserState] = useRecoilState(user)
  const {data } = useQuery(`Query myquery {
    hello
  }`)
  return (
    <>
      <h1>{data.data.hello}</h1>
      This page is:
      <ul>
        <li role='author'>{state.username}</li>
        <input type='button' role='changeuser' value="test" onClick={()=>setUserState({ username: 'newuser'})}/>
      </ul>
    </>
  )
}
