import React from 'react'
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


const sideBarItems = [
    {
        icon: <LuPencil size={"24px"} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={"24px"} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={"24px"} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={"24px"} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={"24px"} />,
        text: "Draft"
    },
    {
        icon: <MdKeyboardArrowDown size={"24px"} />,
        text: "More"
    },
]



const SideBar = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>

                <button className='flex item-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'>  <LuPencil size={"24px"} className='mt-1' /> Compose</button>
            </div>
            <div className='text-gray-500'>
                {
                    sideBarItems.map((item, index) => {
                        return (
                            <div key={index} className='flex item-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
                               {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default SideBar