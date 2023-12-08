import React from 'react'
import { handleNextStep } from '../redux/admin'
import { useDispatch } from 'react-redux'


const AdminSignUp = () => {
  let dispatch = useDispatch()
  return (
    <>
        <div>
            <button onClick={()=> dispatch(handleNextStep())}>Next</button>
        </div>
    </>
  )
}

export default AdminSignUp