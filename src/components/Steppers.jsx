import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep } from '../redux/admin';
import AdminSignUp from '../pages/AdminSignUp';
import AdminSignCont from '../pages/AdminSignCont';


const Steppers = ({currentIndex}) => {
  console.log(currentIndex);

  const steps = [
    "Your Info",
    "Address",
    "Summary"
]
  
  return (
    <>
       <div className=''>
            <section className='flex flex-col lg:flex-row'>
                <div className='border-4 border-yellow-600'>
                   {
                    steps.map((items,i)=>(
                      <div key={i} className='flex py-5 lg:w-40'>
                                <div className={`${currentIndex === i ? 'bg-black text-white' : ''} w-[35px] text-center font-bold  flex justify-center items-center mt-1 border h-[35px] rounded-full me-2`}>{i + 1}</div>
                                <div className='hidden lg:block text-center'>
                                <div className='step1 font-bold text-white'>STEP{i + 1}</div>
                                <div className='text-black'>{items}</div>
                                </div>
                      </div>
                    ))
                   }
                </div>
                <div className='border-4 border-red-500'>
                {currentIndex===0 && <AdminSignUp/>}
                {currentIndex===1 && <AdminSignCont/>}
                </div>
            </section>
       </div>
    </>
  )
}

export default Steppers