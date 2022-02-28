import React from 'react'
import { useSelector } from 'react-redux';
import {HiOutlineChatAlt} from "react-icons/hi";
import {IoSettingsSharp, IoSettingsOutline} from "react-icons/io5";

export default function LeftBar() {
    const user = useSelector(state => state.user);
    const handleClick =(event)=>{
        document.querySelectorAll(".fn").forEach(item =>{
            item && item.classList.remove("fn-active");
        })
        event.currentTarget.classList.add("fn-active");
    }
  return (
    <div className="border border-black flex flex-col items-center py-4 justify-between " >
        <div className="w-full flex flex-col items-center gap-y-4">
        <img title={user.username} src={user.avatar} className="w-20 h-20 rounded-full mx-4"/>
        <button title="Tin nhan" onClick={handleClick} className="hover:text-white hover:bg-gray-700 w-full fn fn-active">
            <HiOutlineChatAlt size="2rem" className="mx-auto"/>
                <span className="ml-2">Tin nhắn</span>
        </button>
        </div>
        <div className="w-full">
            <button className="w-full fn" onClick={handleClick}>
                <IoSettingsSharp size="1.5rem" className="mx-auto"/>
                <span className="ml-2">Settings</span>
            </button>

        </div>
    </div>
  )
}
