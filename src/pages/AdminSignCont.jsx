import React from 'react'
import { handleNextStep, handlePreviousStep } from '../redux/admin'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const AdminSignUp = () => {

  let dispatch = useDispatch()
  const store = useSelector((state)=> state.adminReducer.adminSign)
  // console.log(store);



  const Schema = yup.object().shape({
    dob: yup.string().required(),
    gender: yup.string().required()
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
        {/* <button onClick={()=>dispatch(handleNextStep())}>Here</button> */}
        <div className='lg:w-[300px] md:w-[300px] w-[250px]'>
            {/* <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-5'>
                        <label className='font-bold' htmlFor="">Age</label><br />
                        <input {...register("Dob")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`} />
                        <p className='text-red-600'></p>
                    </div>
                    <label className='font-bold' htmlFor="">Gender</label><br />
                        <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                  <button type='submit' className=''>Next</button>
            </form> */}
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Age</label><br />
                        <input {...register("dob")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`}/>
                        <p className='text-red-600'></p>
                    </div>
                    <div className='mt-2 mb-5'>
                        <label className='font-bold' htmlFor="">Gender</label><br />
                        <select {...register("gender")} className='w-full'>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    </div>
                    <button onClick={()=>dispatch(handlePreviousStep())} className=' bg-black text-white rounded p-2'>Previous</button>
                    <button type='submit' className='float-right bg-black text-white rounded p-2'>Next</button>
                </form>
        </div>
    </>
  )
}

export default AdminSignUp