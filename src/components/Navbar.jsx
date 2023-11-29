import React, { useEffect, useState } from 'react'
import logo from '../images/ylogo.png'
import { FaHouse } from "react-icons/fa6";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { TbHelpHexagon } from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

const Navbar = ({isSectionVisible }) => {
  console.log(isSectionVisible)


  const [chevronOne, setchevronOne] = useState(false)
  const [chevronTwo, setchevronTwo] = useState(false)
  
  // useEffect(() => {
  //   // Reset chevronOne and chevronTwo when isSectionVisible changes
  //   setchevronOne(false);
  //   setchevronTwo(false);
  // }, [isSectionVisible]);

 
  const downOne = () => {
    if(chevronOne==false){
      setchevronTwo(false)
      setchevronOne(true)
    }else {
      setchevronOne(false)
    }
  }
  const downTwo = () => {
    if(chevronTwo==false){
      setchevronTwo(true)
      setchevronOne(false)
    }else {
      setchevronTwo(false)
    }
  }
  

  
  return (
    <>
    <div className='hidden sticky top-0 md:block bg-white'>
        <nav className='flex justify-between px-5 md:px-20 border w-full shadow'>
          <div className='flex my-4'>
            <img src={logo} width={40} className='h-[40px]' alt="" />
            {/* <span className='font-bold'>Yem <br />Realty</span> */}
          </div>
            <div className=' block flex gap-8 my-6 '>
                <div className='flex gap-2'>
                    <p>Explore</p>
                    <p className='mt-[3px]'>
                      <button onClick={downOne}  id='upOne'>{!chevronOne? <IoChevronDownOutline /> : <IoChevronUp />}</button>
                      {/* <button  onClick={upOne} className={chevronOne==false? 'hidden':  '' }><IoChevronUp /></button> */}
                    </p>
                </div>
                <div>About</div>
                <div>Contact</div>
                <div>Blog</div>
                <div className='flex gap-2'>
                    <p>More</p>
                    <p className='mt-[3px]'>
                    <button onClick={downTwo}  id='upOne'>{!chevronTwo? <IoChevronDownOutline /> : <IoChevronUp />}</button>
                      {/* <button onClick={downTwo} className={chevronTwo==true? 'hidden': ''}  id='upOne'><IoChevronDownOutline /></button>
                      <button  onClick={upTwo} className={chevronTwo==false?'hidden': ''}><IoChevronUp /></button> */}
                    </p>
                </div>
            </div>
            <a className= 'hidden md:block bg-red-500 px-2 my-6 h-[25px] rounded font-semibold' href="">Join Us</a>
            {/* <div className='md:hidden my-7'><FaBars /></div> */}
        <section  className={chevronOne==false ? 'hidden' :  'absolute   top-[50px]'} id='firstSection'>
          <div className='border w-[400px] flex p-5 ms-40 me-20 gap-20 justify-center items-center bg-white rounded z-[2] relative'>
            <div>
              <div className='flex gap-2'>
              <span className='mt-1 text-red-500'><FaHouse /></span><span>Properties</span>
              </div>
              <p className='ms-6'>See the list of available properties in Yem Realty</p>
            </div>
            <div>
              <div className='flex gap-2'>
              <span className='mt-1 text-red-500'><MdOutlineRealEstateAgent /></span><span>Estates</span>
              </div>
              <p className='ms-6'>See the list of available estates in Yem Realty</p>
            </div>
          </div>
        </section>
        <section className={chevronTwo==false? 'hidden' : 'absolute w-[200px] top-[50px] left-[530px]  border p-5 bg-white rounded'} id='secondSection'>
          <div className='flex  flex-col'>
          <div className='flex gap-3 mb-5 hover:bg-gray-100 p-1 rounded'>
            <p className='text-red-500 mt-1'><TbHelpHexagon /></p>
            <p>Help Center</p>
          </div>
          <div className='flex gap-3 hover:bg-gray-100 p-1 rounded'>
            <p className='text-red-500 mt-1'><VscGitPullRequestNewChanges /></p>
            <p>Send Request</p>
          </div>
          </div>
        </section>
        </nav>
    </div>
    </>
  )
}

export default Navbar