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
    return (
        <div className="mx-4 p-4 rounded-3xl bg-gray-600 opacity-90">
            <SearchBar handleSearch={onSearch}/>
            <div id="friend"className="overflow-y-auto rounded-3xl" style={{
                height: "calc(100vh - 10rem)"
            }}>
                {list && list.map((value, index)=> <Friend key={index} onClick={onChoosing} value={value}/>)}
            </div>

        </div>
    )
}
