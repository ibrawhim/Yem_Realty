import React from 'react'
import logo from '../images/ylogo.png'
import { IoMdClose } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Upbar = ({onClickHandler}) => {
  return (
    <>
        <div className={!onClickHandler? 'hidden bg-white': 'md:hidden bg-white p-5 rounded'}>
            <div className='flex justify-between'>
                <img className='' src={logo} width={35} alt="Yem realty logo"/>
                <span className='text-3xl m-2' onClick={onClickHandler}><IoMdClose /></span>
                {/* <button></button> */}
            </div>
            <div className=' my-5 mx-1'>
                <div className='flex my-2'>
                <span className='mt-1 text-red-500 me-4'><FaHouse /></span><span>Properties</span>
                </div>
                <div className='flex my-2'>
                <span className='mt-1 text-red-500 me-4'><MdOutlineRealEstateAgent /></span><span>Estates</span>
                </div>
            </div>
            <section className='mx-1'>
                <div className='grid grid-cols-2 gap-2'>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Docs</a>
                    <a href="">Help Center</a>
                    <a href="">Send Request</a>
                </div>
                <div className='flex justify-center items-center text-white bg-black py-1 rounded my-2'>
                    <a href="">Join</a>
                </div>
            </section>
        </div>
    </>
  )
}

export default Upbar