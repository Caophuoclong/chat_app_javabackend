import React from 'react'
import { FaSearch } from "react-icons/fa"
import FriendAndGroup from '../friendNgroup'
export default function SearchBar({handleSearch, onSearchFocus, onSearchBlur}) {

    return (
        <div id="searchBar" className= "mb-8 flex justify-between">
            <div className="flex justify-between items-center border-black rounded-2xl px-4  bg-black opacity-70">
                <input type="text" className=" p-2 text-2xl outline-none bg-transparent italic w-11/12 text-white" placeholder="Search..." onChange={handleSearch} onFocus={onSearchFocus} onBlur={onSearchBlur} />
                <FaSearch size="2rem" className="text-white" />
            </div>
            <FriendAndGroup/>

        </div>
    )
}
