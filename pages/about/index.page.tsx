import React from 'react'
import './code.css'
import { user } from '#root/renderer/recoil/atoms/user'
import { useRecoilState } from 'recoil'

export { Page }

export const meta = {
  title: 'title',
  description: 'desc',
}

function Page() {
  window.__vite_plugin_ssr__pageFiles
  const [state] = useRecoilState(user)
  return (
    <>
      <h1>{state.username}</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
