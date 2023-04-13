import { token } from '#root/renderer/recoil/atoms/token'
import React from 'react'
import { useRecoilState } from 'recoil'
import './code.css'

export { Page }

export const meta = {
  title: 'title',
  description: 'desc',
}

function Page() {
  const [state] = useRecoilState(token)
  return (
    <>
      <h1>{state}</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
