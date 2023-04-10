import React from 'react'
import { useRecoilState } from 'recoil'
import { user } from '#root/renderer/recoil/atoms/user'
import { useQuery } from 'graphql-hooks'
export { Page }

function Page() {
  const [state, setUserState] = useRecoilState(user)
  const {data, loading, error } = useQuery(`query MyQuery {
    hello
  }`)
  if(loading&&!data)
    return <div suppressHydrationWarning> 加载中 </div>
  return (
    <>
      <h1>{data.hello}</h1>
      This page is:
      <ul>
        <li role='author'>{state.username}</li>
        <input type='button' role='changeuser' value="test" onClick={()=>setUserState({ username: 'newuser'})}/>
      </ul>
    </>
  )
}
