import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";



const Sidebar = () => {
    const SidebarItems = [
        {
            id: 1,
            name: 'Home',
            icon: <GoHome/>
        },
        {
            id: 2,
            name: 'Shorts',
            icon: <SiYoutubeshorts/>
        },
        {
            id: 2,
            name: 'Shorts',
            icon: <MdOutlineSubscriptions/>
        }
    ]



  return (
    <div className='px-6  w-[15%]'>
            
            {
                SidebarItems.map((items) => {
                    return (
                        <div className='flex  items-center space-x-6 hover:bg-gray-300 p-2 duration-100 rounded-xl cursor-pointer'>
                            <div className='text-xl'>
                                {items.icon}
                            </div>
                            <span>{items.name}</span>
                        </div>
                    )
                })
            }
            <hr className='mb-3 mt-3'/>


        





















































































    </div>
  )
}

export default Sidebar