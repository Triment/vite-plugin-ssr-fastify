import React from 'react'
import { useRecoilState } from 'recoil'
import { user } from '#root/renderer/recoil/atoms/user'

export { Page }

function Page() {
  const [state, changeState] = useRecoilState(user)
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li role='author'>{state.username}</li>
        <li role="increse" onClick={()=>changeState({ username: state.username+ 'hello '})}>
          increse 
        </li>
      </ul>
    </>
  )
}
