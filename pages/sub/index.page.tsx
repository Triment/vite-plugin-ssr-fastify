import { useSubscription } from 'graphql-hooks'
import React from 'react'



export function Page(){

  useSubscription({ 
    query: `subscription mysub {
            greetings
          }`
  }, ({ data }) => {
    console.log(data)
  })
  return <div>
        hello
  </div>
}