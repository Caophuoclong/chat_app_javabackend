import React, { useEffect, useRef } from 'react';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import { FiFile } from 'react-icons/fi';
import { IoMdImages } from 'react-icons/io';
import Picker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../../slices/message.slice';
import { formatName } from '../../../../utils/hashName';
import clsx from 'clsx';
import RenderFile from './renderFIle';
import RenderImage from './renderImage';

export default function InputChat() {
  const [text, setText] = React.useState('');
  const [imagesArray, setImagesArray] = React.useState([]);
  const [fileArray, setFileArray] = React.useState([]);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const friend = useSelector((state) => state.message);
  const onSendText = () => {
    const message = {
      source: user.id,
      destination: friend.choosing,
      content: text,
      time: new Date().getTime(),
      type: 'text',
    };
    text && dispatch(sendMessage(message));
    setText('');
  };
  const onSendImages = () => {
    imagesArray.forEach((file) => {
      const message = {
        source: user.id,
        destination: friend.choosing,
        content: file,
        time: new Date().getTime(),
        type: 'image',
      };
      // after send image to server, remove image from local
      dispatch(sendMessage(message));
    });
    setImagesArray([]);
  };
  const onSendLike = () => {
    const message = {
      source: user.id,
      destination: friend.choosing,
      content: "<AiFillLike size='3rem'/>",
      time: new Date().getTime(),
      type: 'like',
    };
    dispatch(sendMessage(message));
  };
  const onSendFiles = () => {
    fileArray.forEach(file => {
      const message = {
        source: user.id,
        destination: friend.choosing,
        content: file,
        time: new Date().getTime(),
        type: 'file',
      };
      console.log(message);
      dispatch(sendMessage(message));

    })
    setFileArray([]);
  }
  const handleButtonSend = () => {
    text && onSendText();
    imagesArray && onSendImages();
    fileArray && onSendFiles();
  };
  const handleEnter = (event) => {
    if (event.which === 13) {
      onSendText();
      imagesArray && onSendImages();
    }
  };
  const showEmojiPicker = (event) => {
    if (
      document.querySelectorAll('aside.emoji-picker-react')[0].style
        .visibility === 'hidden'
    ) {
      document.querySelectorAll(
        'aside.emoji-picker-react'
      )[0].style.visibility = 'visible';
    } else {
      document.querySelectorAll(
        'aside.emoji-picker-react'
      )[0].style.visibility = 'hidden';
    }
  };
  const onEmojiClick = (event, emojiObject) => {
    setText(text + emojiObject.emoji);
  };
  const onUploadPhotos = (event) => {
    const files = event.target.files;
    const filesList = [];
    for (let i = 0; i < files.length; i++) {
      filesList.push({
        name: files[i].name,
        type: files[i].type,
        url: URL.createObjectURL(files[i]),
      });
    }
    setImagesArray(filesList);
    setFileArray([]);
  };
  const onUploadFile = async (event) => {
    const fileUpload = event.target.files;
    const listFile = Array.from(fileUpload);
    let lisstFile = [...fileArray];
    listFile.forEach((value) => {
      if (value.size > 512000000) {
      } else {
        lisstFile.push({
          name: value.name,
          type: value.type,
          size: value.size,
        });
      }
    });
    setFileArray([...lisstFile]);
    setImagesArray([]);
  };
  const handleRemoveFile = (id) => {
    const fileList = [...fileArray];
    fileList.splice(id, 1);
    setFileArray(fileList);
  };
  const handleRemoveImage = (id) => {
    const fileList = [...imagesArray];
    fileList.splice(id, 1);
    setImagesArray(fileList);
  }
  const style = clsx(
    'p-2 px-4 gap-x-4 w-full h-40 overflow-x-auto border-t-2 flex-wrap overflow-y-auto',
    {
      hidden: fileArray.length === 0 && imagesArray.length === 0,
    },
    {
      flex: fileArray.length > 0 || imagesArray.length > 0,
    }
  );

  return (
    <div className="border-y border-black flex flex-col gap-y-2 justify-start pt-2">
      <div className="tool-bar flex gap-x-4 border-gray-300 px-4 border-b-2">
        <input
          onChange={onUploadFile}
          multiple
          type="file"
          id="input-file"
          hidden
        />
        <label htmlFor="input-file" className="cursor-pointer">
          <FiFile size="2rem" />
        </label>
        <input
          onChange={onUploadPhotos}
          type="file"
          multiple
          accept="image/png, image/jpeg"
          id="input-file-image"
          hidden
        />
        <label htmlFor="input-file-image" className="cursor-pointer">
          <IoMdImages size="2rem" />
        </label>
      </div>
      <div className="flex items-center gap-x-4 justify-between px-4 py-4 ">
        <div className="w-full bg-gray-600 rounded-3xl  ">
          <div className="flex items-center bg-gray-600 gap-x-4 rounded-3xl px-4" style={{
            maxWidth: "100%"
          }}>
            <input
              onKeyPress={handleEnter}
              onChange={(event) => {
                setText(event.target.value);
              }}
              type="text"
              value={text}
              rows="1"
              className="text-2xl outline-none w-full p-2 bg-transparent text-white"
              placeholder="Enter your message"
            />
            <div className="relative">
              <BsFillEmojiSmileFill
                onClick={showEmojiPicker}
                size="2rem"
                color="yellow"
                className="cursor-pointer"
              />
              <Picker
                onEmojiClick={onEmojiClick}
                pickerStyle={{
                  position: 'absolute',
                  bottom: '4rem',
                  right: '0px',
                  visibility: 'hidden',
                }}
              />
            </div>

            {text.length > 0 ||
              imagesArray.length > 0 ||
              fileArray.length > 0 ? (
              <FaPaperPlane
                onClick={handleButtonSend}
                size="2rem"
                color="yellow"
                className="cursor-pointer"
              />
            ) : (
              <AiFillLike
                onClick={onSendLike}
                size="2rem"
                color="yellow"
                className="cursor-pointer"
              />
            )}
          </div>
          <div id="showFiles" className={style}>
            {fileArray.length > 0 &&
              fileArray.map((file, index) => (
                <RenderFile
                  key={index}
                  index={index}
                  type={file.type}
                  name={formatName(file)}
                  onRemoveFile={handleRemoveFile}
                />
              ))}
            {imagesArray.length > 0 &&
              imagesArray.map((image, index) => (
                <RenderImage key={index} index={index} url={image.url} onRemoveImage={handleRemoveImage} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
