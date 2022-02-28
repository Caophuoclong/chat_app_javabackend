import React from 'react'
import { useSelector } from 'react-redux'
import Header from "./header"
import Chat from "./chat"
export default function Main() {
  const {avatar, name, offline} = useSelector(state => state.message);
  
  return (
    <div className="border-2 border-red-200 w-3/5 ml-4" style={{
      height: "calc(100vh - 1rem)"
    }}>
      <Header avatar={avatar} name={name} offline={offline}/>
      <Chat/>
    </div>
  )
}
