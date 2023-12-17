import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MdErrorOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import client from '../images/clients.jpg'
import '../App.css'


const Client = () => {


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const Schema = yup.object().shape({
    Phone: yup.string().matches(phoneRegExp, 'Invalid phone').required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Email: yup.string().email('Invalid email format').required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Name: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Lastname: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> )
})
const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
    resolver: yupResolver(Schema)
})
const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
        <div>
            <section className='flex border-2'>
                <div className='p-20 lg:w-1/2 md:w-1/2 w-full jaja  overflow-hidden overflow-y-scroll lg:h-[500px]'>
                    <h1 className='font-bold text-2xl text-center'>Create a Client Account</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">Full Name</label><br />
                        <input {...register("Name")} type="text" className={`border border-black h-[30px] rounded w-full mt-3 focus:outline-none focus: `}/>
                        <p className='text-red-600'>{errors.Name?.message}</p>
                    </div>

                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Email Address</label><br />
                        <input {...register("Email")} type="text" className={`border border-black h-[30px] mt-3 rounded w-full focus:outline-none`}/>
                        <p className='text-red-600'>{errors.Email?.message}</p>
                    </div>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Phone</label><br />
                        <input {...register("Phone")} type="text" className={`border border-black h-[30px] mt-3 rounded w-full focus:outline-none`} />
                        <p className='text-red-600'>{errors.Phone?.message}</p>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">Password</label><br />
                        <input {...register("password")} type="text" className={`border border-black h-[30px] rounded w-full mt-3 focus:outline-none`}/>
                        <p className='text-red-600'>{errors.password?.message}</p>
                    </div>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">Confirm Password</label><br />
                        <input {...register("confirm")} type="text" className={`border border-black h-[30px] rounded w-full mt-3 focus:outline-none`}/>
                        <p className='text-red-600'>{errors.password?.message}</p>
                    </div>
                    </div>

                </form>
                <div className='flex'>
                    <input type="checkbox"  className='mt-1 me-1'/>
                    <p>Creating an account means you agreed with our <Link className='underline text-red-500' to="">Terms of Services</Link> and <Link className='underline text-red-500' to="">Private Policy</Link> Settings</p>
                </div>
                    <button type='submit' className=' bg-red-500 w-full text-white py-1 px-3 my-4 font-bold rounded'>Create Account</button>
                </div>
                <div className=' hidden lg:block md:block w-1/2  lg:h-[500px] md:h-full'>
                    <img src={client} alt="" className='w-full h-full'/>
                </div>
            </section>
        </div>
    </>
  )
}

export default Client