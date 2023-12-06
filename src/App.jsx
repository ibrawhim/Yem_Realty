import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import logo from '../src/images/ylogo.png'
import Landing from "./pages/Landing";
import Upbar from "./components/Upbar";
import Map from "./pages/Map";
import Carousel from "./pages/Carousel";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Estates from "./pages/Estates";
import JoinUs from "./pages/JoinUs";



function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSectionVisible, setSectionVisibility] = useState(false);
  

  const toggleIsOpen = () => {
    setIsOpen(true)
    // console.log(isOpen);
  }
  const handleClick = () => {
    // console.log('Button clicked!')
    setIsOpen(false)
  };

  const handleBodyClick = () => {
    setSectionVisibility(!isSectionVisible)
    //  if (!isSectionVisible){
    //   setSectionVisibility(isSectionVisible == true)
    // }
    
  };

  return (
    <>
    <Navbar isSectionVisible={isSectionVisible}/>
    <div className={isOpen?'block fixed w-full': 'hidden'}><Upbar onClickHandler={handleClick} /></div>
    <div className="font-[Quicksand] lg:mx-10 sm:mx-0" onClick={handleBodyClick}>
    <ul className='md:hidden shadow px-5 flex justify-between '>
          <li><img src={logo} width={40} className='h-[40px] my-2' alt="" /></li>
          <li className='text-black my-6'>
              <FaBars onClick={toggleIsOpen}/>
          </li>
      </ul>
    {/* <div><Upbar/></div> */}
      <Routes>
        <Route path="/"  element={<Landing/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
        <Route path="*"  element={<Error/>}/>
        <Route path='/estates' element={<Estates/>}/>
        <Route path="/joinus"  element={<JoinUs/>}/>
        {/* <Route path="/card"  element={<Carousel/>}/> */}
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
