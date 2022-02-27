import React from 'react'

export default function Friend({value}) {
    return (
        <div className="flex items-center cursor-pointer">
            <img id="img-friend" src={value.avatar} className="w-20 h-20 rounded-full after:content-['*'] after:ml-0.5 after:text-red-500 after:top-0"/>
            <div>
                <h4 className="mx-4 text-2xl font-bold">{value.name}</h4>
                <h5 className="mx-4 text-xs">3 minutes ago</h5>
            </div>
        </div>
    )
}
