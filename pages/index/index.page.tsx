import { graphql } from '#root/helpers/gql'
import { user } from '#root/renderer/recoil/atoms/user'
import React from 'react'
import { useRecoilState } from 'recoil'
import { useQuery } from 'urql'
import { navigate } from 'vite-plugin-ssr/client/router'
export { Page }

const getUser = graphql(`
  query User {
    getUser(id: "") {
      id
      name
    }
  }
`)

function Page() {
  const [state, setUserState] = useRecoilState(user)
  const [result] = useQuery({ query: getUser })
  if (result.fetching) return <div suppressHydrationWarning> 加载中 </div>
  return (
    <div suppressHydrationWarning>
      <h1>{result.data?.getUser}</h1>
      This page is:
      <ul>
        <li role="author" onClick={(e) => {}}>
          {state.username}
        </li>
        <input
          type="button"
          role="changeuser"
          value="test"
          onClick={() => {
            setUserState({ username: 'newuser' })
            navigate('/about')
          }}
        />
      </ul>
    </div>
  )
}
