import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import logo from '../assets/logo.png';
import pp from '../assets/pp.png';


const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-2 '>



        <div className='flex items-center  space-x-4 '>
            <AiOutlineMenu className='text-xl cursor-pointer' />
            <img src={logo} alt="" className='w-28 cursor-pointer'/>
        </div>



        <div className=' flex w-[45%]  '>
            <div className='w-[100%] px-4 py-2 rounded-l-full border border-gray-300'>
                <input type="text" placeholder='Search' className='outline-none'/>
            </div>
            <button className='px-4 py-2 rounded-r-full border bg-gray-100 border-gray-200'>
                <CiSearch size={'27px'} />
            </button>
            <button  >
                <IoMdMic 
                size={'47px'} 
                className='ml-3 border rounded-full p-2 cursor-pointer border-gray-300 bg-gray-100 hover:bg-gray-300 duration-100'/>
            </button>
        </div>



        <div className='flex space-x-6 items-center '>
            <RiVideoAddLine  size={'30px'} />
            <AiOutlineBell size={'30px'} />
            <div className='w-10'>
                <img src={pp}  alt="" />
            </div>


        </div>
    </div>
  )
}

export default Navbar