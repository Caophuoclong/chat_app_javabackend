import React from 'react'
import { useSelector } from 'react-redux'
import Header from "./header"
import Chat from "./chat"
function Welcome(){
  return(
    <div>Chao mung ban </div>
  )
}
export default function Main() {
  const {avatar, name, offline, choosing} = useSelector(state => state.message);
  console.log(offline)
  
  return (
    <div className="w-full border border-black h-screen" >
      {
        choosing ? <><Header avatar={avatar} name={name} offline={offline}/>
        <Chat/></> : <Welcome/> 
      }
      
    </div>
  )
}
