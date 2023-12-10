import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNextStep } from '../redux/admin';
import AdminSignUp from '../pages/AdminSignUp';
import AdminSignCont from '../pages/AdminSignCont';


const Steppers = ({currentIndex}) => {
  // console.log(currentIndex);

  const steps = [
    "Your Info",
    "Address",
    "Summary"
]
  
  return (
    <>
       <div className='w-full'>
            <section className='flex flex-row justify-center '>
                <div className=' px-4 shadow'>
                   {
                    steps.map((items,i)=>(
                      <div key={i} className='flex py-5 lg:w-40 mt-4'>
                                <div className={`${currentIndex === i && 'bg-black text-white' } w-[35px] text-center font-bold flex sm justify-center items-center mt-4 border h-[35px] rounded-full lg:me-2 me-0`}>{i + 1}</div>
                                <div className='hidden lg:block text-center'>
                                <div className='step1 font-bold text-white'>STEP{i + 1}</div>
                                <div className='text-black'>{items}</div>
                                </div>
                      </div>
                    ))
                   }
                </div>
                <div className='shadow p-5'>
                {currentIndex===0 && <AdminSignUp/>}
                {currentIndex===1 && <AdminSignCont/>}
                </div>
            </section>
       </div>
    </>
  )
}

export default Steppers