import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import logo from '../src/images/ylogo.png'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className="font-[Quicksand]">
    <Navbar/>
    <ul className='md:hidden shadow block w-screen px-5 flex justify-between fixed top-0 z-[10000] '>
          <li><img src={logo} width={40} className='h-[40px] my-2' alt="" /></li>
          <li className='text-black my-6'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
    </div>
    </>
  )
}

export default App
