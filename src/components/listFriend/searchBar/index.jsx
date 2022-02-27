import React from 'react'
import { FaSearch } from "react-icons/fa"
export default function SearchBar() {
    return (
        <div className= "p-4 mb-4">
            <div className="flex justify-between items-center border-2 border-black rounded-2xl px-4">
                <input type="text" className=" p-2 text-2xl outline-none bg-transparent italic w-11/12" placeholder="Search..." />
                <FaSearch size="2rem" />
            </div>
        </div>
    )
}
