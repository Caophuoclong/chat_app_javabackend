import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { choose } from '../../reducers/message.slice';
import Friend from './friend';
import SearchBar from './searchBar'

export default function ListFriend() {
    const listFriends = useSelector(state => state.user.listFriends);
    const [list, setList] = useState([...listFriends]);
    const dispatch = useDispatch();
    const onChoosing = (event)=>{
        document.querySelectorAll(".active").forEach(item => {
            item && item.classList.remove("active");
        })
        event.currentTarget.classList.add("active");
        dispatch(choose({
            id: event.currentTarget.id,
            name: event.currentTarget.querySelector("h4").innerText,
            avatar: event.currentTarget.querySelector("img").src,
            offline: event.currentTarget.querySelector("h5").innerText && event.currentTarget.querySelector("h5").innerText.split(" ")[0]
        }));
    }
    let x = [];
    const onSearch =(event)=>{
        const value = event.target.value;
        listFriends.forEach(item=>{
            if(item.name.toLowerCase().includes(value.toLowerCase())){
                if(!x.includes(item)){
                    x.push(item);
                }
            }
        })
        setList(x);
    }
    const onSearchFocus = (event)=>{
        const searchBar = document.getElementById("searchBar");
        const friendAndGroup = document.getElementById("friendAndGroup");
        searchBar.classList.add("w-full");
        friendAndGroup.classList.add("hidden");
    }
    const onSearchBlur = ()=>{
        const searchBar = document.getElementById("searchBar");
        const friendAndGroup = document.getElementById("friendAndGroup");
        searchBar.classList.remove("w-full");
        friendAndGroup.classList.remove("hidden");
    }
    return (
        <div className="border border-black p-4 bg-gray-600 opacity-90 w-3/12">
            <SearchBar handleSearch={onSearch} onSearchFocus={onSearchFocus} onSearchBlur={onSearchBlur} />
            <div id="friend"className="overflow-y-auto rounded-3xl" style={{
                height: "calc(100vh - 10rem)"
            }}>
                {list && list.map((value, index)=> <Friend key={index} onClick={onChoosing} value={value}/>)}
            </div>

        </div>
    )
}
