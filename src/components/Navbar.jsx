import React from 'react'
import logo from '../images/ylogo.png'
import { FaHouse } from "react-icons/fa6";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { TbHelpHexagon } from "react-icons/tb";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";

const Navbar = () => {

  const upOne = () => {
      document.getElementById('upOne').style.display = 'none'
      document.getElementById('downOne').style.display = 'block'
      document.getElementById('firstSection').style.display = 'block'
      document.getElementById('secondSection').style.display = 'none'
  }
  const downOne = () => {
    // alert('herre')
        document.getElementById('upOne').style.display = 'block'
        document.getElementById('downOne').style.display = 'none'
        document.getElementById('firstSection').style.display = 'none'
    }
    const upTwo = () => {
      document.getElementById('upTwo').style.display = 'none'
      document.getElementById('downTwo').style.display = 'block'
      document.getElementById('secondSection').style.display = 'block'
      document.getElementById('firstSection').style.display = 'none'
  }
  const downTwo = () => {
    // alert('herre')
        document.getElementById('upTwo').style.display = 'block'
        document.getElementById('downTwo').style.display = 'none'
        document.getElementById('secondSection').style.display = 'none'
    }
  return (
    <>
    <div className='hidden md:block bg-white'>
        <nav className='flex justify-between px-5 md:px-20 border w-full shadow'>
            <img src={logo} width={40} className='h-[40px] my-4' alt="" />
            <div className=' block flex gap-8 my-6 '>
                <div className='flex gap-2'>
                    <p>Explore</p>
                    <p className='mt-[3px]'>
                      <button onClick={upOne} id='upOne'><IoChevronDownOutline /></button>
                      <button onClick={downOne} id='downOne' className='hidden'><IoChevronUp /></button>
                    </p>
                </div>
                <div>About</div>
                <div>Contact</div>
                <div>Blog</div>
                <div className='flex gap-2'>
                    <p>More</p>
                    <p className='mt-[3px]'>
                      <button onClick={upTwo} id='upTwo'><IoChevronDownOutline /></button>
                      <button onClick={downTwo} id='downTwo' className='hidden'><IoChevronUp /></button>
                    </p>
                </div>
            </div>
            <a className='hidden md:block bg-red-500 px-2 my-6 h-[25px] rounded font-semibold' href="">Join Us</a>
            {/* <div className='md:hidden my-7'><FaBars /></div> */}
        </nav>
        <section className='absolute top-[50px] hidden' id='firstSection'>
          <div className='border flex p-5 mx-80 gap-20 justify-center items-center bg-white rounded z-[2] relative'>
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
        <section className='absolute top-[50px] left-[580px] border p-5 bg-white rounded hidden' id='secondSection'>
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
    </div>
    </>
  )
}

export default Navbar