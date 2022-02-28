import React from 'react'

export default function Friend({value, onClick}) {
    return (
        <div id={value.id} className="flex items-center cursor-pointer my-4" onClick={onClick}>
            <img src={value.avatar} className="w-20 h-20 rounded-full after:content-['*'] after:ml-0.5 after:text-red-500 after:top-0"/>
            <div>
                <h4 className="mx-4 text-2xl font-bold">{value.name}</h4>
                <h5 className="mx-4 text-xs">{value.offline} minutes ago</h5>
            </div>
        </div>
    )
}
