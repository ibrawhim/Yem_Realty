import React from 'react'
import nupo from '../images/nupo.jpg'
import iyin from '../images/iyin.jpg'
import nup from '../images/temi.jpg'
import town from '../images/TownHall.jpg'
import tixel from '../images/tixel.jpg'
import uni from '../images/uni.jpg'
import cocoa from '../images/cocoa.jpg'
import bungalow from '../images/ti.jpg'

const Landing = () => {
  return (
    <>
        <div className='w-full my-20'>
            <h1 className='text-center text-3xl md:text-4xl font-bold'>Discover the Most Profitable <br /> Properties in Ibadan</h1>
            <p className='text-center my-5 justify '>Get exclusive access to premium and affordable real estate properties with secured <br /> lucrative investments. Don't miss out on the chance to make well-informed <br /> decisions and enjoy maximum returns.</p>
            <div className='flex md:flex-row md:flex-row flex-col justify-center items-center gap-2'>
              <a className='border p-2 rounded bg-black text-white ' href="">Get Started</a>
              <a className='border p-2 rounded bg-white' href="">Explore Properties</a>
            </div>
            <section className='my-10 mx-2'>
              <div className='grid grid-cols-4 gap-2'>
                <div className=''>
                  <img src={cocoa} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={bungalow} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={uni} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={tixel} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={iyin} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={town} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={nupo} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                  <img src={nup} className='w-full h-full' alt="" />
                </div>
              </div>
            </section>
        </div>
    </>
  )
}

export default Landing