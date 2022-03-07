import React from 'react'
import { TiDelete } from 'react-icons/ti';

export default function RenderImage({ index, url, onRemoveImage }) {
    const handleMouseEnter = (event) => {
        const icon = event.currentTarget.childNodes[0];
        icon.style.color = '#3482F6';
    };
    const handleMouseLeave = (event) => {
        const icon = event.currentTarget.childNodes[0];
        icon.style.color = 'gray';
    };
    return (
        <div className="relative my-2">
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    onRemoveImage(index);
                }}
                className="absolute right-0 top-0"
            >
                <TiDelete color="gray" size="30px" />
            </button>
            <img src={url} alt="Picture123" style={{
                width: "20rem",
                height: "20rem"
            }}
            />
        </div>
    )
}
