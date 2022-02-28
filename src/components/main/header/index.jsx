import clsx from 'clsx'
import React from 'react'
import { BsFillCameraVideoFill, BsFillTelephoneFill } from 'react-icons/bs'

export default function Header({avatar, name, offline}) {
    const style = clsx({
        "relative test": true,
        "offline": offline.toLowerCase() !== "online",
        "online": offline.toLowerCase() === "online",
    })
  return (
    <div className="p-4 flex items-center justify-between bg-gray-300 border-b border-b-black">
        <div className="flex items-center">
            <div className={style}>
                <img className="w-20 h-20 rounded-full mx-4" src={avatar} alt="" />
            </div>
            <div>
                <h3 className="text-2xl font-bold">{name}</h3>
                <h5 className="text-xs">{offline.toLowerCase() === "online"? "Online"  : `${offline} minutes ago`}</h5>
            </div>
        </div>
        <div>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                <BsFillCameraVideoFill size="1.5rem"/>

            </button>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-4">
                <BsFillTelephoneFill size="1.5rem"/>

            </button>

        </div>
    </div>
  )
}
