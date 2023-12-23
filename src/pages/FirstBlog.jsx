import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import img1 from '../images/new1.jpg'

const FirstBlog = () => {
  return (
    <>
        <div>
            <p className='flex'>
            <span className='mt-1'><CiCalendarDate /></span>
            <p>Dec 22, 2023</p>
            </p>
            <h1>The Ultimate Guide to Buying Real Estate</h1>
            <section>
                <img src={img1} alt="" />
                <h1>Defining your Objective</h1>
                <p>In today's ever-changing market, purchasing real estate remains a solid investment choice. Whether you seek a dream home or a profitable asset, here's a concise guide to navigating the process:</p>
            </section>
        </div>
    </>
  )
}

export default FirstBlog