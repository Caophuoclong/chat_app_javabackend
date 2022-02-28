import React from 'react'
import { IoPersonAddSharp } from 'react-icons/io5'
import {AiOutlineUsergroupAdd} from "react-icons/ai"

export default function FriendAndGroup() {
  return (
    <div id="friendAndGroup" className="mr-auto ml-2 flex items-center gap-x-4">
      <button className="hover:bg-gray-700 hover:text-white rounded-md ">
        <IoPersonAddSharp size="2rem"/>
      </button>
      <button className="hover:bg-gray-700 hover:text-white rounded-md" >
        <AiOutlineUsergroupAdd size="2rem"/>
      </button>
    </div>
  )
}
