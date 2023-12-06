import React from 'react'
import iyin from '../images/iyin.jpg'
import ylogo from '../images/ylogo.png'


const JoinUs = () => {
  return (
    <>
        <div>
            <section className='flex w-full justify-between border'>
                <div className='flex flex-col justify-center items-center lg:w-1/2 w-full h-screen border border-red-500'>
                    <img src={ylogo}  width={40} alt="" />
                    <h1 className='text-2xl font-bold'>Get started with Win Realty</h1>
                    <p className='text-xl'>Are you looking to buy or sell a property?</p>
                </div>
                <div className='border border-yellow-400 border-2 w-1/2 hidden lg:block'>
                    <img src={iyin} className='w-full h-screen' alt="" />
                </div>
            </section>
        </div>
    </>
  )
}

export default JoinUs