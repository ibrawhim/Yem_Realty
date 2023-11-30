import React from 'react'
import { carouselList } from './CarouselList'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Carousell = () => {
    console.log(carouselList);
  return (
    <>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-5 border'>
            {
                carouselList.map((item,index)=>(
                    <div key={index} className='border rounded relative'>
                        {/* <div style={{backgroundImage: `url(${item.images[0]})`}} className='w-full h-full bg-center bg-cover duration-500'></div> */}
                        <img src={item.images[0]} className='w-full h-2/3' alt="" />
                        <div className='bg-red-500 w-1/2 md:w-2/3 my-2 rounded px-2 text-white font-bold'>{item.type}</div>
                        <div className='text-xl font-bold my-2'> ₦{item.price}</div>
                        <div className='flex my-2'><span className='mt-1'><IoLocationOutline /></span>{item.area}</div>
                        <button className='absolute top-[50%] '><MdOutlineChevronLeft /></button>
                        <button className='absolute top-[50%] '><MdChevronRight /></button>
                        {/* <div>{item.images}</div> */}
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Carousell