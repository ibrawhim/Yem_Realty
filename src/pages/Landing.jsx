import React from 'react'
import nupo from '../images/nupo.jpg'
import iyin from '../images/iyin.jpg'
import nup from '../images/nupo.jpg'
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
            <div className='flex justify-center items-center gap-2'>
              <a className='border p-2 rounded bg-black text-white' href="">Get Started</a>
              <a className='border p-2 rounded bg-white' href="">Explore Properties</a>
            </div>
            <section>
              <div>
                <img src={cocoa} alt="" />
                <img src={bungalow} alt="" />
                <img src={uni} alt="" />
                <img src={tixel} alt="" />
                <img src={iyin} alt="" />
                <img src={town} alt="" />
                <img src={nupo} alt="" />
                <img src={nup} alt="" />
              </div>
            </section>
        </div>
    </>
  )
}

export default Landing