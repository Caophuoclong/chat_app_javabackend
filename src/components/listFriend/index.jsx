import React from 'react'
import { useSelector } from 'react-redux'
import Friend from './friend';
import SearchBar from './searchBar'

export default function ListFriend() {
    const listFriends = useSelector(state => state.user.listFriends);
    console.log(listFriends)
    return (
        <div className="border-2 border-red-200 w-2/5 mr-4 p-4 rounded-3xl">
            <SearchBar/>
            {listFriends.map((value, index)=> <Friend key={index} value={value}/>)}

        </div>
    )
}
