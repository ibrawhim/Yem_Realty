import React, { useEffect } from 'react'
import { handleNextStep, handlePreviousStep } from '../redux/admin'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MdErrorOutline } from "react-icons/md";


const Password = () => {

  let dispatch = useDispatch()
  const store = useSelector((state)=> state.adminReducer.adminSign)
  // console.log(store);
  useEffect(() => {
    if (store) {
        setValue("password", store.password)
        // setValue("gender", store.gender)
    }
  }, [])


  const Schema = yup.object().shape({
    password: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Please Enter a Password</span></span>),
    confirm: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>confirm your Password</span></span>),
    
  })
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
    resolver: yupResolver(Schema)
  })
  


const onSubmit = (myData) => {
  // console.log(data.gender);
  let form = {...store, ...myData}
  dispatch(handleNextStep(form))
}

  
  return (
    <>
        <div className='lg:w-[300px] md:w-[300px] w-[250px] h-[340px]'>
          {/* <h1 className='text-center text-xl font-bold text-red-700'>Your Info (Contd.)</h1> */}
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Password</label><br />
                        <input {...register("password")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`}/>
                        <p className='text-red-600'>{errors.password?.message}</p>
                    </div>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Confirm</label><br />
                        <input  {...register("password")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`}/>
                        <p className='text-red-600'>{errors.confirm?.message}</p>
                    </div> 
                    <button onClick={()=>dispatch(handlePreviousStep())} className=' bg-red-700 text-white rounded p-2 mt-[35%]'>Previous</button>
                    <button type='submit' className='float-right bg-red-700 text-white rounded p-2 mt-[35%]'>Next</button>
                </form>
        </div>
    </>
  )
}

export default Password