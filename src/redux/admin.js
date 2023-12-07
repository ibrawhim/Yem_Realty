import {createSlice} from '@reduxjs/toolkit'

const initialData =()=>   {

    const item = window.localStorage.getItem('adminSignUp')
    
    return item ? JSON.parse(item) : {
            currentStep: 0,
            
            fullName: '',
            Email: '',
            Phone: '',
            
            whatAreYouSelling: '',
            LGA: '',
            planAmount: 0,
            
            addOnTypes: [],
            addOnTotalAmount: 0
        }
    
    }
    