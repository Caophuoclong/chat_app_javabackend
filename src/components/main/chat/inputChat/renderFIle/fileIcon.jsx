import React, { useState } from 'react'
import { AiOutlineFileImage, AiFillFilePdf, AiFillFileUnknown, AiFillFileImage } from 'react-icons/ai';
import { IconExe, IconImage, IconPDF, IconZip } from '../../../../../assets/icons';
import fileType from '../../../../../constants/fileType';

export default function FileIcon({ fileIcon }) {
    const [file, setFile] = useState(fileType[fileIcon]);
    console.log(fileIcon);
    return (
        <div>
            {!!!file && <AiFillFileUnknown size="95px" />}
            {file === "image" && <IconImage />}
            {file === "pdf" && <IconPDF />}
            {file === "zip" && <IconZip />}
            {file === "exe" && <IconExe />}
        </div>
    )
}
