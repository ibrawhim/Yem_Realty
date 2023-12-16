import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocation } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import contact from '../images/contact.png'


const Contact = () => {
  return (
    <>
        <div>
            <section className='flex justify-center gap-20 items-center'>
                <div>
                    <div>
                    <h1 className='font-bold text-2xl'>Contact Us</h1>
                    <p className='my-3'>You can reach out to us using the following means below or sign up to monitor your requests.</p>
                    <Link className='text-white p-2 rounded font-bold bg-red-500' to=""> Sign Up</Link>
                    </div>
                    <div>
                        <h1>Contact Information</h1>
                        <p>You can also reach us via any of the channels below.</p>
                        <p><span><IoLocation /></span> <span>231 Abiola Street, Moniya, Ibadan, Oyo State</span></p>
                        <p><span><FaEnvelope /></span> <span>ibrawhim@gmail.com</span></p>
                        <p><span><MdAddCall /></span><span>08111111111</span></p>
                    </div>
                </div>
                <div className='m-5 sm:hidden lg:block'>
                    <img src={contact} alt="" className='rounded'  width={600}/>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact