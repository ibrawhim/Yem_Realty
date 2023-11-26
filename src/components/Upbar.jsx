import React from 'react'
import logo from '../images/ylogo.png'
import { IoMdClose } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Upbar = () => {
  return (
    <>
        <div className='m-2'>
            <div className='flex justify-between'>
                <img className='mx-2' src={logo} width={40} alt="Yem realty logo"/>
                <span className='text-3xl m-2'><IoMdClose /></span>
            </div>
            <div>
                <div className='flex'>
                <span className='mt-1 text-red-500'><FaHouse /></span><span>Properties</span>
                </div>
                <div className='flex'>
                <span className='mt-1 text-red-500'><MdOutlineRealEstateAgent /></span><span>Estates</span>
                </div>
            </div>
            <section>
                <div className='grid grid-cols-2'>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Docs</a>
                    <a href="">Help Center</a>
                    <a href="">Send Request</a>
                </div>
                <div className='flex justify-center items-center text-white bg-black py-1 rounded'>
                    <a href="">Join</a>
                </div>
            </section>
        </div>
    </>
  )
}

export default Upbar