import React from 'react'
import { handleNextStep } from '../redux/admin'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const AdminSignUp = () => {
  let dispatch = useDispatch()
  const store = useSelector((state)=> state.adminReducer.adminSign)
  // console.log(store);



  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
  const Schema = yup.object().shape({
    Phone: yup.string().matches(phoneRegExp, 'Invalid phone').required(),
    Email: yup.string().email('Invalid email format').required(),
    Name: yup.string().required()
})

  const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
    resolver: yupResolver(Schema)
})

const onSubmit = (data) => {
  let form = {...store, ...data}
  // console.log(form);
  dispatch(handleNextStep(form))
}

  
  return (
    <>
        <div className='lg:w-[300px] md:w-[300px] w-[250px]'>
            {/* <button onClick={()=> dispatch(handleNextStep())}>Next</button> */}
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">First Name</label><br />
                        <input {...register("Name")} type="text" className={`border border-black h-[40px] rounded w-full mt-3`}/>
                        <p className='text-red-600'></p>
                    </div>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">Last Name</label><br />
                        <input {...register("Lastname")} type="text" className={`border border-black h-[40px] rounded w-full mt-3`}/>
                        <p className='text-red-600'></p>
                    </div>

                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Email Address</label><br />
                        <input {...register("Email")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`}/>
                        <p className='text-red-600'></p>
                    </div>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Phone</label><br />
                        <input {...register("Phone")} type="text" className={`border border-black h-[40px] mt-3 rounded w-full`} />
                        <p className='text-red-600'></p>
                    </div>

                    <button type='submit' className='float-right bg-black text-white p-2 rounded'>Next</button>
                </form>

        </div>
    </>
  )
}

export default AdminSignUp