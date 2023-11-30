import React from 'react'
import nupo from '../images/nupo.jpg'
import iyin from '../images/iyin.jpg'
import nup from '../images/temi.jpg'
import town from '../images/TownHall.jpg'
import tixel from '../images/tixel.jpg'
import uni from '../images/uni.jpg'
import cocoa from '../images/cocoa.jpg'
import bungalow from '../images/ti.jpg'
import { IoLocationOutline } from "react-icons/io5";
import kolapo from '../images/kolapo.jpg'
import jericho from '../images/jericho.jpg'
import legacy from '../images/legacy4.webp'
import aero from '../images/Aerodrome.jpg'
import Carousel from './Carousel'
import Carousell from './Carousell'
import newImage from '../images/work.webp'
import adult from '../images/adult.webp'

const Landing = () => {

  let myStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
  }

  const estates = [
    {
      name: 'Kolapo Ishola',
      location: 'Akobo/Ibadan',
      img: kolapo
    },
    {
      name: 'Jericho',
      location: 'Jericho/Ibadan',
      img: jericho
    },
    {
      name: 'Aerodrome',
      location: 'Samonda/Ibadan',
      img: aero
    },
    {
      name: 'Legacy',
      location: 'Akobo/Ibadan',
      img: legacy
    },
  ]

  return (
    <>
        <div className='w-full my-20'>
            <h1 className='text-center text-3xl md:text-4xl font-bold'>Discover the Most Profitable <br /> Properties in Ibadan</h1>
            <p className='text-center my-5 justify '>Get exclusive access to premium and affordable real estate properties with secured <br /> lucrative investments. Don't miss out on the chance to make well-informed <br /> decisions and enjoy maximum returns.</p>
            <div className='flex md:flex-row md:flex-row flex-col justify-center items-center gap-2'>
              <a className='border p-2 rounded bg-black text-white ' href="">Get Started</a>
              <a className='border p-2 rounded bg-white' href="">Explore Properties</a>
            </div>
            <section className='my-10 md:mx-5 mx-2'>
              <h1 className='text-center mx-5 font-bold text-xl mt-20 mb-5'>Several Places in Ibadan City, Oyo State</h1>
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
            <section>
              <h1 className='text-center text-2xl font-bold my-6'>Featured Estates</h1>
              <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-5 mx-5'>
              {
                estates.map((item, index)=>(
                  <div key={index} className='border border-black rounded relative  shadow-xl' style={myStyle}>
                    <img src={item.img} className='w-[100%] hover:scale-105  opacity-70 block h-full' alt="" />
                    <div className='text-center absolute top-[50%] left-[50%]' style={{transform: 'translate(-50%, -50%)'}}>
                    <div className='font-bold text-2xl text-white'>{item.name}</div>
                    <div className='flex font-bold gap-1 text-white'><span className='mt-1'><IoLocationOutline /></span><span>{item.location}</span></div>
                    </div>
                  </div>
                ))
              }
              </div>
            </section>
            <section className='my-10'>
              <h1 className='text-center font-bold text-2xl my-5'>Explore Trending Places</h1>
              <Carousell/>
              <a href="" className='text-center bg-black my-5 text-white flex justify-center'>View more</a>
            </section>
            <section className='mx-5 relative border'>
              <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                <div>
                  <p>Want to buy a property?</p>
                  <p>Buy a dream home for your family</p>
                  <p>The all-in-one commerce platform to buy, rent, and sell a property.</p>
                  <a href="">Get Started</a>
                </div>
                <div>
                  <img src={newImage} alt="" />
                </div>
              </div>
              <img src={adult} width={80} className='rounded-full h-[80px] absolute top-[30%] left-[46%] border border-4 border-red-500 hidden md:block' alt="" />
            </section>
        </div>
    </>
  )
}

export default Landing 
