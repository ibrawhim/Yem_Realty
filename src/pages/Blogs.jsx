import React from 'react'
import { blogList } from './BlogList'


const Blogs = () => {
  return (
    <>
        <div className='mx-24'>
            <h1>News Room</h1>
            <p>Read insightful stories about Real Estate and housing in Nigeria.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    blogList.map((items,index)=>(
                        <div key={index} className='border-2 overflow-hidden border-red-400'>
                            <img src={items.img} className='h-1/2 w-full' alt="" />
                            <div>{items.headline}</div>
                            <div>{items.paragraph}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Blogs