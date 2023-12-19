import React from 'react'
import about from '../images/about.jpg'

const About = () => {
  return (
    <>
        <div>
            <h1 className='font-bold mx-auto text-2xl'>We are on a mission to make real estate investment easy & accessible.</h1>
            <img src={about} alt="" />
        </div>
    </>
  )
}

export default About