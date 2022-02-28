import React from 'react'
import clsx from "clsx";

export default function Friend({value, onClick}) {
    const style = clsx({
        "relative test": true,
        "offline": !!value.offline,
        "online": !!!value.offline,
    })
    return (
        <div id={value.id} className="flex items-center cursor-pointer my-4 " onClick={onClick}>
            <div className={style}>
                <img src={value.avatar} className="w-20 h-20 rounded-full" />
            </div>
            <div>
                <h4 className="mx-4 text-2xl font-bold">{value.name}</h4>
                <h5 className="mx-4 text-xs">{!!!value.offline ? "Online" : `${value.offline} minutes ago`}</h5>
            </div>
        </div>
    )
}
