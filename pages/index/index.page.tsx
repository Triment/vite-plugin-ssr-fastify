import { graphql } from '#root/helpers/gql'
import { token } from '#root/renderer/recoil/atoms/token'
import React from 'react'
import { useRecoilState } from 'recoil'
import { useQuery } from 'urql'
import { navigate } from 'vite-plugin-ssr/client/router'
export { Page }

const getUser = graphql(`query MyQuery {
  signIn(email: "", password: "") {
    token
  }
}`)

function Page() {
  const [state, setUserState] = useRecoilState(token)
  const [result] = useQuery({ query: getUser })
  if (result.fetching) return <div suppressHydrationWarning> 加载中 </div>
  return (
    <div suppressHydrationWarning>
      <h1>{result.data?.signIn?.token}</h1>
      This page is:
      <ul>
        <li
          role="author"
          onClick={(e) => {
            console.log(e)
          }}
        >
          {state}
        </li>
        <input
          type="button"
          role="changeuser"
          value="test"
          onClick={() => {
            setUserState('huhuhunew token')
            navigate('/about')
          }}
        />
      </ul>
    </div>
  )
}
