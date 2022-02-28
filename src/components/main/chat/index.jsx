import React from 'react'
import { useSelector } from 'react-redux'


function Receiver({avatar, text, time}){
  return(
    <div className="mr-4 flex items-center m-4 right relative">
      
     <div>
        <div className="mt-2 ml-auto mr-4 rounded-3xl bg-blue-300 p-4 whitespace-pre-wrap w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error ipsum veritatis doloremque expedita! Pariatur laborum eum fuga odio iure quibusdam libero quisquam, nostrum, et cupiditate eius vel, eos tenetur!</div>
        <div className="w-1/12 ml-auto mr-8 text-xs text-let">{3} minues ago</div>
     </div>
     <img src={avatar} className="w-20 h-20 rounded-full"/>

    </div>
  )
}
function Sender({avatar, text}){
  return(
    <div className="mr-4 flex items-center m-4 right relative">
      <img src={avatar} className="w-20 h-20 rounded-full"/>
     <div>
        <div className="mt-2 mr-auto ml-4 rounded-3xl bg-blue-300 p-4 whitespace-pre-wrap w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error ipsum veritatis doloremque expedita! Pariatur laborum eum fuga odio iure quibusdam libero quisquam, nostrum, et cupiditate eius vel, eos tenetur!</div>
        <div className="w-1/12 mr-auto ml-8 text-xs text-left">{3} minues ago</div>
     </div>
    </div>
  )
}
function InputChat(){
  const handleEnter = (event)=>{
    if(event.keyCode === 13){
      event.preventDefault();
    }
  }
  return(
    <div className="border-2 border-red-300 flex flex-col gap-y-2 px-2" style={{
      height: "17%",
    }}>
      <div className="tool-bar flex gap-x-4 border-2 border-gray-300">
        <div>xinchao</div>
        <div>123</div>
        <div>123123</div>
      </div>
      <div className="flex">
        <textarea onKeyPress={handleEnter} type="text" rows="1" className="text-2xl border border-yellow-300 outline-none w-10/12 p-2" />
        
      </div>
    </div>
  )
}
export default function Chat() {
  const message = useSelector(state => state.message);
  const {id, avatar} = useSelector(state => state.user);
  return (
    <div className="flex flex-col justify-between" style={{
      height: "calc(100% - 7rem)",
    }}>
      <div className="overflow-y-scroll" >
      {message.message.map((value, index) => {
        if(value.receiver === id){
          return <Receiver key={index} avatar={avatar} text={value.content}/>
        }
        else{
          return <Sender key={index} avatar={message.avatar} text={value.content}/>
        }
      }
      )}
    </div>
    <InputChat/>
    </div>
    
  )
}
