import React from 'react'
import { handleNextStep } from '../redux/admin'
import { useDispatch } from 'react-redux'


const AdminSignCont = () => {
  return (
    <>
    <div>
        <button onClick={()=> dispatch(handleNextStep())}>Nexto</button>
    </div>
    </>
  )
}

export default AdminSignCont