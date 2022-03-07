import React, { useEffect, useRef, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { converBytes } from '../../../utils/bytesToMb'
import { formatName } from '../../../utils/hashName'
import { parseTime } from '../../../utils/parseTime'
import { sortMessage } from '../../../utils/sortMessage'
import InputChat from "./inputChat"
import FileIcon from './inputChat/renderFIle/fileIcon'



function FileRender({ file }) {
  const { name, size, type } = file;
  return (
    <div className="flex items-center" title={name}>
      <FileIcon fileIcon={type} />
      <div>
        <p>{formatName(file)}</p>
        <small className="text-sm">{`${converBytes(size).amount} ${converBytes(size).unit}`}</small>
      </div>
    </div>
  )
}


function showMessage(type, message) {
  if (type === "like") {
    return <AiFillLike size="3rem" color="yellow" />
  }
  else if (type === "image") {
    return <img src={message.url} alt="" className="w-full h-full rounded-lg" />
  }
  else if (type === "file") {
    return <FileRender file={message} />
  }
  else {
    return <span className="whitespace-pre-wrap">{message}</span>
  }

}

function Sender({ avatar, text, time, type }) {
  return (
    <div className="m-4 flex justify-end">
      <div className="bg-blue-300 rounded-2xl p-4 mx-4 max-w-3xl">
        <span>
          {
            showMessage(type, text)
          }
        </span>
        <div className="mt-4">
          <div className="flex justify-start">
            <span className="text-xs text-right">{parseTime(time)}</span>
          </div>
        </div>
      </div>
      <img src={avatar} alt="" className="w-16 h-16 rounded-full" />

    </div>
  )
}
function Receiver({ avatar, text, time, type }) {
  return (
    <div className="mr-4 flex m-4 right relative ">
      <img src={avatar} alt="" className="w-16 h-16 rounded-full" />
      <div className="bg-green-300 rounded-2xl p-4 mx-4 max-w-3xl">
        <span>
          {showMessage(type, text)}
        </span>
        <div className="mt-4">
          <div className="flex justify-start">
            <span className="text-xs text-right">{parseTime(time)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Chat() {
  const message = useSelector(state => state.message);
  const { id, avatar } = useSelector(state => state.user);
  const [listMessage, setListMessage] = useState([]);
  const messageRef = useRef(null);
  const scrollToBottom = () => {
    const chat_box = document.getElementById("chat-box");
    if (chat_box) {
      chat_box.scrollTop = 999;
    }
  }
  useEffect(() => {
    const x = sortMessage(message.message);
    setListMessage([...x]);
    scrollToBottom();
  }, [message]);
  useEffect(() => {
    scrollToBottom();
  })


  return (
    <div className="flex flex-col justify-between h-5/6" style={{
      height: "calc(100% - 7rem)",
    }}>
      <div id="chat-box" ref={messageRef} className="overflow-y-scroll border-y border-y-black h-full" >
        {listMessage.map((value, index) => {
          if (value.source === id && value.destination === message.choosing) {
            return <Sender key={index} avatar={avatar} text={value.content} time={value.time} type={value.type} />
          }
          if (value.source === message.choosing)
            return <Receiver key={index} avatar={message.avatar} text={value.content} time={value.time} type={value.type} />
        }
        )}
      </div>
      <InputChat />
    </div>

  )
}
