import React from 'react'
import main from '../images/1/main.png'
import one from '../images/1/one.png'
import two from '../images/1/two.png'
import three from '../images/1/three.png'
import four from '../images/1/four.png'
import five from '../images/1/five.png'

const Carousel = () => {

    let slides = [
        one,two,four,five
    ]

  return (
    <>
        <div className='flex overflow-hidden'>
            {
                slides.map((item)=>(
                     <Carousel className='w-full'>
                        <img src={item} className='w-[100%]' alt="" />
                    </Carousel>
                ))
            }
        </div>
    </>
  )
}

export default Carousel