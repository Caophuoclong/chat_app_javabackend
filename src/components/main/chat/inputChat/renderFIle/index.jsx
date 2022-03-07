import React, { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import FileIcon from './fileIcon';

export default function RenderFile({ name, size, type, onRemoveFile, index }) {
    const handleMouseEnter = (event) => {
        const icon = event.currentTarget.childNodes[0];
        icon.style.color = '#3482F6';
    };
    const handleMouseLeave = (event) => {
        const icon = event.currentTarget.childNodes[0];
        icon.style.color = 'gray';
    };
    return (
        <div className="bg-transparent border-2 border-gray-400 px-1 rounded-md relative">
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    onRemoveFile(index);
                }}
                className="absolute right-0 top-0"
            >
                <TiDelete color="gray" size="30px" />
            </button>
            <p
                className="absolute text-sm font-medium bottom-0 z-50  left-0 px-2 w-full text-center"
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            >
                <span className="opacity-100 text-gray-400">{name}</span>
            </p>
            <FileIcon fileIcon={type} />
        </div>
    );
}
