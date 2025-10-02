import React from 'react'
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import {data, useNavigate} from "react-router-dom";

const Message = ({email}) => {
const navigate = useNavigate();
const OpenMail=()=>{
navigate(`/mail/${email}`)
}

    return (
        <div onClick={OpenMail} className='flex items-start justify-between border-b border-gray-200 px-4 p-2 text-sm hover:cursor-pointer hover:shadow-md'>
            <div className='flex items-center gap-3'>
                <div className='flex-none text-gray-300'>
                    <MdCropSquare className='w-5 h-5' />
                </div>
                <div className='flex-none text-gray-300'>
                    <RiStarLine className='w-5 h-5' />
                </div>
            </div>
            <div className='flex-1 ml-4'>
                <p className='text-gray-600 truncate inline-block max-w-full'>{email?.message}</p>
            </div>
            <div className='text-gray-400 flex-none text-sm'>
               <p>{new Date(email?.createdAt?.seconds*1000).toUTCString()}</p>
            </div>
        </div>
    )
}

export default Message