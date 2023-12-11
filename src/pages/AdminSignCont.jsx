import React from 'react'
import { handleNextStep } from '../redux/admin'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const AdminSignUp = () => {
  let dispatch = useDispatch()
  const store = useSelector((state)=> state.adminReducer.adminSign)
  console.log(store);



  


//   const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
//     resolver: yupResolver(Schema)
// })

const onSubmit = (data) => {
  console.log(data);
  // let form = {...store, ...data}
  // console.log(form);
  // dispatch(handleNextStep(form))
}

  
  return (
    <>
        <div className='lg:w-[300px] md:w-[300px] w-[250px]'>
            {/* <button onClick={()=> dispatch(handleNextStep())}>Next</button> */}
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className='my-5'>
                        <label className='font-bold' htmlFor="">Age</label><br />
                        <input {...register("Dob")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`} />
                        <p className='text-red-600'></p>
                    </div>
                    <div className='my-5'>
                        <label className='font-bold' htmlFor="">Gender</label><br />
                        <input {...register("Gender")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`} />
                        <p className='text-red-600'></p>
                    </div> */}
                    <div className='my-5'>
                        <label className='font-bold' htmlFor="">Age</label><br />
                        <input {...register("Age")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`} />
                        <p className='text-red-600'></p>
                    </div>

                
                    {/* <label className='font-bold' htmlFor="">Gender</label><br />
                        <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select> */}
                  
                    <button type='submit' className=''>CONFIRM</button>
                </form>

        </div>
    </>
  )
}

export default AdminSignUp