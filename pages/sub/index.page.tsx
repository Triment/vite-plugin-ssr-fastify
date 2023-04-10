import { useSubscription } from 'graphql-hooks'
import React from 'react'



export function Page(){

  useSubscription({ 
    query: `
    subscription MySubscription {
      greetings
    }`
  }, ({ data }) => {
    console.log(data)
  })
  return <div>
        hello
  </div>
}