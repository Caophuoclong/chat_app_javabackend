import React, { useEffect, useRef } from 'react'
import {BsFillEmojiSmileFill} from "react-icons/bs"
import {AiFillLike} from "react-icons/ai";
import {FaPaperPlane} from "react-icons/fa";
import {FiFile} from "react-icons/fi"
import {IoMdImages} from "react-icons/io"
import Picker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../../reducers/message.slice';
import { hashName } from '../../../../utils/hashName';

export default function InputChat() {
    const [text, setText] = React.useState('');
    const [imagesArray, setImagesArray] = React.useState([]);
    const [file, setFile] = React.useState(null);
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    const friend = useSelector(state => state.message);
    useEffect(()=>{
      imagesArray.forEach((file)=>{
        const showPhotos = document.getElementById("showPhotos");
        const img = document.createElement("img");
        img.src = file.url;
        img.style.width = "20rem";
        img.style.height = "15rem";
        showPhotos.appendChild(img);
      })
    },[imagesArray])
    useEffect(()=>{
      if(file){
        const showPhotos = document.getElementById("showPhotos");
      showPhotos.classList.remove("hidden");
      showPhotos.classList.add("flex");
      const div = document.createElement("div");
      div.classList.add("justify-center");
      div.classList.add("items-center");
      div.classList.add("w-40");
      div.classList.add("h-full");
      div.classList.add("bg-gray-200");
      div.classList.add("rounded-lg");
      div.classList.add("p-4");
      div.classList.add("text-center");
      div.innerHTML = `
        <span>${file && file.name.split(".")[0].substring(0,5) + "..." + file.name.split(".")[0].slice(-3)  + "." + file.name.split(".")[file.name.split(".").length-1]}</span>
      `;
      showPhotos.appendChild(div);
      console.log(file);
      }
    },[file])
    const onSendText = ()=>{
      const message = {
          source: user.id,
          destination: friend.choosing,
          content: text,
          time: new Date().getTime(),
          type: "text",
      }
      text && dispatch(sendMessage(message));
      setText(''); 
    }
    const onSendImages = ()=>{
      const showPhotos = document.getElementById("showPhotos");
          showPhotos.classList.add("hidden");
          showPhotos.classList.remove("flex");
          showPhotos.innerHTML = "";
          imagesArray.forEach(file=>{
            const message = {
                source: user.id,
                destination: friend.choosing,
                content: file,
                time: new Date().getTime(),
                type: "image",
            }
            // after send image to server, remove image from local
            dispatch(sendMessage(message));
          })
          setImagesArray([])
    }
    const onSendLike = ()=>{
      const message = {
          source: user.id,
          destination: friend.choosing,
          content: "<AiFillLike size='3rem'/>",
          time: new Date().getTime(),
          type: "like",
      }
      dispatch(sendMessage(message));
    }
    const handleButtonSend = ()=>{
      text && onSendText();
      imagesArray && onSendImages();

    }
    const handleEnter = (event)=>{
      if(event.which === 13){
        onSendText();
        imagesArray && onSendImages();
      }
    }
    const showEmojiPicker = (event)=>{
      if(document.querySelectorAll('aside.emoji-picker-react')[0].style.visibility === "hidden"){
        document.querySelectorAll("aside.emoji-picker-react")[0].style.visibility = "visible";}
      else{
        document.querySelectorAll("aside.emoji-picker-react")[0].style.visibility = "hidden";
      }
    }
    const onEmojiClick = (event, emojiObject)=>{
      setText(text + emojiObject.emoji);

    }
    const onUploadPhotos = (event)=>{
      const showPhotos = document.getElementById("showPhotos");
      showPhotos.classList.remove("hidden");
      showPhotos.classList.add("flex");
      const files = event.target.files;
      const x = [];
      for(let i = 0; i < files.length; i++){
        console.log(files[i]);
        hashName(files[i].name.split(".")[0]).then(name=>{
          setImagesArray([...imagesArray,{
            name: name + "." + files[i].name.split(".")[1],
            type: files[i].type,
            url: URL.createObjectURL(files[i]),
            // file: files[i]
          }])
        })
      }
    }
    const onUploadFile = (event)=>{
      const fileUpload = event.target.files[0];
      if(fileUpload.size > 512000000){
      }else{
        const extension = [...fileUpload.name.split(".")].slice(1);
        console.log(extension);
        hashName(fileUpload.name.split(".")[0]).then(name=>{
          setFile({
            name: name + "." + fileUpload.name.split(".")[1],
            type: fileUpload.type,
            size: fileUpload.size,
          })
        })
      }
    }
    return(
      <div className="border-y border-black flex flex-col gap-y-2 justify-start pt-2" >
        <div className="tool-bar flex gap-x-4 border-gray-300 px-4 border-b-2">
          <input onChange={onUploadFile} type="file" id="input-file" hidden/>
          <label htmlFor="input-file" className="cursor-pointer">
            <FiFile size="2rem"/>
          </label>
          <input onChange={onUploadPhotos} type="file" multiple accept="image/png, image/jpeg" id="input-file-image" hidden/>
          <label htmlFor="input-file-image" className="cursor-pointer">
            <IoMdImages size="2rem"/>
          </label>
        </div>
        <div className="flex items-center gap-x-4 justify-between px-4 py-4 ">
          <div className="w-full bg-gray-600 rounded-3xl  ">
            <div id="showPhotos" className="p-4 hidden gap-x-4 w-full overflow-x-auto">
            </div>
            <div className="flex items-center w-full bg-gray-600 gap-x-4 rounded-3xl px-4">
            <input onKeyPress={handleEnter} onChange={(event)=>{
              setText(event.target.value);
            }} type="text" value={text} rows="1" className="text-2xl outline-none w-full p-2 bg-transparent text-white" 
            placeholder="Enter your message"
            />
            <div className="relative">
              <BsFillEmojiSmileFill onClick={showEmojiPicker}size="2rem" color="yellow" className="cursor-pointer"/>
              <Picker onEmojiClick={onEmojiClick} pickerStyle={{
                position: "absolute",
                bottom: "4rem",
                right: "0px",      
                visibility: "hidden",
              }}/>
            </div>
            
            {text.length > 0 || imagesArray.length > 0 ? <FaPaperPlane onClick={handleButtonSend}size="2rem" color="yellow" className="cursor-pointer"/> :<AiFillLike onClick={onSendLike} size="2rem" color="yellow" className="cursor-pointer"/>}
            </div>
          </div>
          
        </div>
      </div>
    )
}
