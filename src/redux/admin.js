import {createSlice} from '@reduxjs/toolkit'

const initialData =()=>   {

    const item = window.localStorage.getItem('adminSignUp')
    
    return item ? JSON.parse(item) : {
            currentStep: 0,
            
            Name: '',
            Lastname: '',
            Dob: '',
            gender: '',
            Email: '',
            Phone: '',
            localGovernment: '',
            state: 'Oyo',
            Nationality: '',
            Address: '' 
        }
    
    }

    export const slice = createSlice({
        name: 'adminSignUp',
        initialState: {
            adminSign: initialData()
        },
        reducers: {
            handleNextStep: (state)=> {
                state.adminSign.currentStep++
            }
        }
    })
    export default slice.reducer    
    export const {handleNextStep} = slice.actions