import { useMutation, useSubscription } from 'graphql-hooks'
import React, { useState } from 'react'



export function Page() {



  const sub = `subscription MySubscription($roomId: ID) {
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

  const [send] = useMutation(sendMutation)
  const [roomId, setRoomId] = useState('')
  const [messages, setMsg] = useState<{ body: string, from: string }[]>([])
  const [payload, setPayload] = useState({ body: '', from: '' })
  useSubscription({ query: sub, variables: { roomId: '1' }  }, ({data})=>{
    if(data){
      setMsg([...messages, data.newMessage])
    }
  })
  
  return <div className='flex flex-col'>
    <input placeholder='roomid' onChange={e=>setRoomId(e.currentTarget.value)}></input>
    {messages.map((v,i)=>(<div key={i} className='flex flex-col'><span>{v.from}</span><p>{v.body}</p></div>))}
    <div className='flex'>
      <input className='inline' onChange={e=>setPayload({ body: e.currentTarget.value, from: 'test'})} /> <button
        onClick={()=>{
          console.log(payload, roomId)
          send({ variables: {
            roomId: roomId,
            ...payload
          }})
        }}
      >发送</button>
    </div>
  </div>
}