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
        <p className=' switch hover:text-white p-3 bg-gray-500 hover:bg-blue-500'>h</p>
      </ul>
    </>
  )
}
