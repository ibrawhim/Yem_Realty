import React from 'react'
import main from '../images/1/main.png'
import one from '../images/1/one.png'
import two from '../images/1/two.png'
import three from '../images/1/three.png'
import four from '../images/1/four.png'
import five from '../images/1/five.png'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'

const Carousel = () => {

    let slides = [
        one,two,four,five
    ]

  return (
    <>
        <div className='flex max-w-[140px] h-[170px] w-full m-auto relative'>
            <div style={{backgroundImage: `url(${slides[3]})`}} className='w-full h-full bg-center bg-cover duration-500'></div>
            <div><BsChevronCompactLeft/></div>
            <div><BsChevronCompactRight/></div>
        </div>
    </>
  )
}

export default Carousel