import React from 'react'
import {  RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex item-center gap-10'>
        <div className='flex item-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img className='w-8' src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="gmail-logo" />
          <h1 className='text-2xl text-gray-500 font-medium mt-1'>Gmail</h1>
        </div>
      </div>
      <div className='md:block hidden w-[50%] mr-40'>
        <div className='flex item-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
          <IoIosSearch size={"24px"} className='text-gray-700' />
          <input type="text" placeholder="Search Mail" className='rounded-full w-full bg-transparent outline-none px-1' />
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='flex item-center gap-2'>
          <div className='p-3 rounded hover:bg-gray-100 cursor-pointer'>
            <CiCircleQuestion size={"24px"} />
          </div>
          <div className='p-3 rounded hover:bg-gray-100 cursor-pointer'>
            <CiSettings size={"24px"} />
          </div>
          <div className='p-3 rounded hover:bg-gray-100 cursor-pointer'>
            <PiDotsNineBold size={"24px"} />
          </div>
          <div className='cursor-pointer mt-1'>
          <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' size='40px' round={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar