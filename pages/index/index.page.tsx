import React from 'react'
import { useRecoilState } from 'recoil'
import { user } from '#root/renderer/recoil/atoms/user'
export { Page }

function Page() {
  const [state, setUserState] = useRecoilState(user)
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li role='author'>{state.username}</li>
        <input type='button' role='changeuser' value="test" onClick={()=>setUserState({ username: 'newuser'})}/>
      </ul>
    </>
  )
}
