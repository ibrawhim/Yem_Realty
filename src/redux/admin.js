import {createSlice} from '@reduxjs/toolkit'

const initialData =()=>   {

    const item = window.localStorage.getItem('adminSignUp')
    
    return item ? JSON.parse(item) : {
            currentStep: 0,
            
            fullName: '',
            Email: '',
            Phone: '',
            Age: '',
            Sex: '',
            
           localGovernment: '',
           state: '',
           Nationality: ''
            
        }
    
    }

    export const slice = createSlice({
        name: 'adminSignUp',
        initialState: {
            adminSign: initialData()
        }
    })
    export default slice.reducer    