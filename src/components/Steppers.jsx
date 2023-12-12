import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep } from '../redux/admin';
import AdminSignUp from '../pages/AdminSignUp';
import AdminSignCont from '../pages/AdminSignCont';
import Summary from '../pages/Summary';
import Address from '../pages/Address';


const Steppers = ({currentIndex}) => {
  // console.log(currentIndex);

  const steps = [
    "Your Info",
    "info cont",
    "Address",
    "Summary"
]
  
  return (
    <>
       <div className='w-full'>
            <section className=' lg:my-[25px] md:my-[20%] my-[30%] rounded-xl'>
              <div className='flex flex-row  justify-center rounded-xl'>
                <div className='px-4 shadow-xl'>
                   {
                    steps.map((items,i)=>(
                      <div key={i} className='flex py-2 lg:w-40 mt-4'>
                                <div className={`${currentIndex === i && 'bg-red-700 text-white' } w-[35px] text-center font-bold flex sm justify-center items-center mt-4 border h-[35px] rounded-full lg:me-2 me-0`}>{i + 1}</div>
                                <div className='hidden lg:block text-center'>
                                <div className='step1 font-bold text-white'>STEP{i + 1}</div>
                                <div className='text-black'>{items}</div>
                                </div>
                      </div>
                    ))
                   }
                </div>
                <div className='shadow-xl p-5 lg:h-full'>
                {currentIndex===0 && <AdminSignUp/>}
                {currentIndex===1 && <AdminSignCont/>}
                {currentIndex===2 && <Address/>}
                {currentIndex > 2 && <Summary/>}
                </div>
              </div>
            </section>
       </div>
    </>
  )
}

export default Steppers