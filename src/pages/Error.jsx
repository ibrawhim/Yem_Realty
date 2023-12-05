import React from 'react'
import erro from '../images/erro.png'
import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Error = () => {

  return (
    <>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
            <img src={erro} width={400} alt="" />
            <div className='flex flex-col items-center justify-center'>
                <p className='font-bold text-2xl'>Oops, Something Went Wrong</p>
                <Link to="/home" className='flex'><span className='m-1'><FaHome /></span><span>Home Page</span></Link>
            </div>
        </div>
    </>
  )
}

export default Error