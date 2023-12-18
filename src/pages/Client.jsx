import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MdErrorOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import client from '../images/clients.jpg'
import '../App.css'
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";



const Client = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setPasswordVisible(!passwordVisible);
        } else if (field === 'confirm') {
            setConfirmVisible(!confirmVisible);
        }
    };


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const passReg = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/
const Schema = yup.object().shape({
    Name: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Email: yup.string().email('Invalid email format').required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> ),
    Phone: yup.string().required(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span>).matches(phoneRegExp, 'Invalid phone').min(11),
    password: yup.string().required(<span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span>).matches(/^(?=.*[0-9])/, 'Password must contain at least one digit').matches(/^(?=.*[a-zA-Z])/, 'Password must contain at least one letter').min(8, 'Password must be at least 8 characters long'),
    confirm: yup.string().required( <span className='flex'><span className='mt-1 me-1'><MdErrorOutline /></span> <span>Field is Required</span></span> )
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
            <section className='flex border-2 sm:shadow'>
                <div className='p-20 lg:w-1/2 md:w-1/2 w-full jaja  overflow-hidden overflow-y-scroll lg:h-[500px]'>
                    <h1 className='font-bold text-2xl text-center'>Create a Client Account</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">Full Name</label><br />
                        <input {...register("Name")} type="text" pattern="[A-Za-z]+" title="Only alphabetic characters are allowed" placeholder='John Doe' className={`h-[30px] rounded w-full mt-3 focus:border-black focus:ring-0 caret-red-700`}/>
                        <p className='text-red-600'>{errors.Name?.message}</p>
                    </div>

                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Email Address</label><br />
                        <input {...register("Email")} type="text" placeholder='johndoe@gmail.com' className={`border border-black h-[30px] mt-3 rounded w-full focus:ring-0 focus:border-black caret-red-700`}/>
                        <p className='text-red-600'>{errors.Email?.message}</p>
                    </div>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Phone</label><br />
                        <input {...register("Phone")} type="number" placeholder='08012345678' className={`border border-black h-[30px] mt-3 rounded w-full focus:ring-0 focus:border-black caret-red-700`} />
                        <p className='text-red-600'>{errors.Phone?.message}</p>
                    <div className='my-2 relative'>
                         <label className='font-bold' htmlFor="">Password</label><br />
                        <input {...register("password")}  type={passwordVisible ? 'text' : 'password'} className={`border border-black h-[30px] rounded w-full mt-3 focus:ring-0 focus:border-black caret-red-700`}/>
                        <span onClick={() => togglePasswordVisibility('password')} className='absolute top-[40px] right-1'>{!passwordVisible ? <BsEyeSlashFill /> : <IoEyeSharp />}</span>
                        <p className='text-red-600'>{errors.password?.message}</p>
                    </div>
                    <div className='my-2 relative'>
                         <label className='font-bold' htmlFor="">confirm</label><br />
                        <input {...register("confirm")}  type={confirmVisible ? 'text' : 'password'} className={`border border-black h-[30px] rounded w-full mt-3 focus:ring-0 focus:border-black caret-red-700`}/>
                        <span onClick={() => togglePasswordVisibility('confirm')} className='absolute top-[40px] right-1'>{!confirmVisible ? <BsEyeSlashFill /> : <IoEyeSharp />}</span>
                        <p className='text-red-600'>{errors.confirm?.message}</p>
                    </div>
                    </div>

                <div className='flex'>
                    <input type="checkbox"  className='mt-1 me-1'/>
                    <p>Creating an account means you agreed with our <Link className='underline text-red-500' to="">Terms of Services</Link> and <Link className='underline text-red-500' to="">Private Policy</Link> Settings</p>
                </div>
                    <button type='submit' className=' bg-red-500 w-full text-white py-1 px-3 my-4 font-bold rounded'>Create Account</button>
                </form>
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