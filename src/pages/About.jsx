import React, { useEffect } from 'react'
import about from '../images/about.jpg'
import { IoHomeSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";



const About = () => {
    useEffect(() => {
      document.title = 'About Us | Yem Realty'
    }, [])
    
  return (
    <>
        <div className='mx-10'>
            <h1 className='font-bold mx-auto text-2xl text-center lg:w-[400px] md:w-[400px] w-300px'>We are on a mission to make real estate investment easy & accessible.</h1>
            <img src={about} alt="" width={400}  className='w-screen rounded' />

            <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-14 mt-20'>
                <div>
                    <h1 className='text-2xl font-bold'>Our Vision</h1>
                    <p className='font-semibold my-2'>To give 1 million people access to profitable and safe real estate investments before 2030.</p>
                    <p>
                    With the global vision in sight, we've been able to help more 1500 individuals and corporate bodies gain access to safe, profitable and scalable real estate investments in and around Port Harcourt, Nigeria.
                    </p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Our Mission</h1>
                    <p className='font-semibold my-2'>To make real estate investment easy & accessible.</p>
                    <p>A customer-centric real estate firm with more than 6 years experience in residential real estate, commercial real estate, construction, project management and REITs.</p>
                </div>
            </section>
            <section className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-20'>
                <div className='flex justify-center my-4 items-center flex-col'>
                    <span className='text-2xl text-red-700 mb-2'><IoHomeSharp /></span>
                    <h1 className='font-bold text-xl'>₦894,000,000</h1>
                    <p>Property Sales</p>
                </div>
                <div className='flex justify-center my-4 items-center flex-col'>
                    <span className='text-2xl text-red-700 mb-2'><BsPeopleFill /></span>
                    <h1 className='font-bold text-xl'>1230+</h1>
                    <p>Clients Till Date</p>
                </div>
                <div className='flex justify-center my-4 items-center flex-col'>
                    <span className='text-2xl text-red-700 mb-2'><AiOutlineDollar /></span>
                    <h1 className='font-bold text-xl'>₦225,000,000</h1>
                    <p>Property Returns</p>
                </div>
            </section>
        </div>
    </>
  )
}

export default About