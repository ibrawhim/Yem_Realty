import React from 'react'
import { handleNextStep } from '../redux/admin'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Address = () => {
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
                    <div className='my-2 w-full'>
                    <label for="lgas" className='font-bold'>Local Government Area</label>
                    <select id="lgas" name="lgas" className='w-full rounded my-1'  {...register("localGovernment")}>
                        <option value="0">Select an LGA</option>
                        <option value="afijio">Afijio</option>
                        <option value="akinyele">Akinyele</option>
                        <option value="atiba">Atiba</option>
                        <option value="atigbo">Atigbo</option>
                        <option value="egbeda">Egbeda</option>
                        <option value="ibadan-north">Ibadan North</option>
                        <option value="ibadan-north-east">Ibadan North-East</option>
                        <option value="ibadan-north-west">Ibadan North-West</option>
                        <option value="ibadan-south-east">Ibadan South-East</option>
                        <option value="ibadan-south-west">Ibadan South-West</option>
                        <option value="ibarapa-central">Ibarapa Central</option>
                        <option value="ibarapa-east">Ibarapa East</option>
                        <option value="ibarapa-north">Ibarapa North</option>
                        <option value="ido">Ido</option>
                        <option value="irepo">Irepo</option>
                        <option value="iseyin">Iseyin</option>
                        <option value="itesiwaju">Itesiwaju</option>
                        <option value="iwajowa">Iwajowa</option>
                        <option value="kajola">Kajola</option>
                        <option value="lagelu">Lagelu</option>
                        <option value="ogbomosho-north">Ogbomosho North</option>
                        <option value="ogbomosho-south">Ogbomosho South</option>
                        <option value="ogo-oluwa">Ogo Oluwa</option>
                        <option value="olorunsogo">Olorunsogo</option>
                        <option value="oluyole">Oluyole</option>
                        <option value="ona-ara">Ona Ara</option>
                        <option value="orelope">Orelope</option>
                        <option value="ori-ire">Ori Ire</option>
                        <option value="oyo-east">Oyo East</option>
                        <option value="oyo-west">Oyo West</option>
                        <option value="saki-east">Saki East</option>
                        <option value="saki-west">Saki West</option>
                        <option value="surulere">Surulere</option>
                    </select>

                    </div>
                    <div className='my-2'>
                         <label className='font-bold' htmlFor="">State</label>
                        <input placeholder='Oyo State' disabled type="text" className={`border border-black h-[40px] font-bold rounded w-full my-1`}/>
                        <p className='text-red-600'></p>
                    </div>

                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Nationality</label>
                        <input {...register("nationality")} type="text" className={`border border-black h-[40px] my-1 rounded w-full`}/>
                        <p className='text-red-600'></p>
                    </div>
                    <div className='my-2'>
                        <label className='font-bold' htmlFor="">Address</label>
                        <input {...register("address")} type="text" className={`border border-black h-[40px] my-1 rounded w-full`} />
                        <p className='text-red-600'></p>
                    </div>
                    <button className=' bg-black text-white rounded p-2'>Previous</button>
                    <button type='submit' className='float-right bg-black text-white rounded p-2'>Submit</button>
                </form>

        </div>
    </>
  )
}

export default Address