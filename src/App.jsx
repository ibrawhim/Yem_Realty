import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import logo from '../src/images/ylogo.png'
import Landing from "./pages/Landing";
import Upbar from "./components/Upbar";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSectionVisible, setSectionVisibility] = useState(true);
  

  const toggleIsOpen = () => {
    setIsOpen(true)
    console.log(isOpen);
  }
  const handleBodyClick = () => {
     if (isSectionVisible==true){
      setSectionVisibility(!isSectionVisible)
     }
     
  };

  return (
    <>
    <Navbar isSectionVisible={isSectionVisible}/>
    {/* <div className={isOpen?'block': 'hidden'}><Upbar/></div> */}
    <div className="font-[Quicksand]" onClick={handleBodyClick}>
    <ul className='md:hidden shadow block w-screen px-5 flex justify-between  z-[10000] '>
          <li><img src={logo} width={40} className='h-[40px] my-2' alt="" /></li>
          <li className='text-black my-6'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
    <div className=" fixed top-0"><Upbar/></div>
      <Routes>
        <Route path="/"  element={<Landing/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
