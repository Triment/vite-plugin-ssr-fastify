import React, { useState } from 'react'
import { useMutation, useSubscription, gql } from 'urql'

export function Page() {

  const sub = gql`subscription MySubscription($roomId: ID) {
    newMessage(roomId: $roomId) {
      body
      from
    }
  }`

  const sendMutation = `mutation MyMutation($body: String, $from: String, $roomId: ID) {
    send(input: {roomId: $roomId, from: $from, body: $body}) {
      body
      from
    }
  }`

  const [send, updateSend] = useMutation(gql`mutation MyMutation($roomId: ID = "1", $from: String = "3", $body: String = "1") {
    send(input: {roomId: $roomId, from: $from, body: $body}) {
      body
      from
    }
  }`)
  const [roomId, setRoomId] = useState('')
  const [messages, setMsg] = useState<{ body: string, from: string }[]>([])
  const [payload, setPayload] = useState({ body: '', from: '' })
  const [res] = useSubscription({ query: gql`subscription MySubscription($roomId: ID = "1") {
    newMessage(roomId: $roomId) {
      body
      from
    }
  }`, variables: { roomId: '1' } }, (msg, response) => {
    return response.newMessage
  })

  return <div className='flex flex-col'>
    <input placeholder='roomid' onChange={e => setRoomId(e.currentTarget.value)}></input>
    {res.data && (<div className='flex flex-col'><span>{res.data.from}</span><p>{res.data.body}</p></div>)}
    <div className='flex'>
      <input className='inline' onChange={e => setPayload({ body: e.currentTarget.value, from: 'test' })} /> <button
        onClick={() => {
          console.log(payload, roomId)
          updateSend({
            variables: {
              roomId: '1',
              from: 'test',
              to: 'test1'
            }
          })
        }}
      >发送</button>
    </div>
  </div>
}