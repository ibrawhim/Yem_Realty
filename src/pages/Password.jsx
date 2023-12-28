import React, { useEffect, useState } from 'react';
import { handleNextStep, handlePreviousStep } from '../redux/admin';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdErrorOutline } from 'react-icons/md';
import axios from 'axios';

const Password = () => {
  const [match, setMatch] = useState('');
  const [exist, setExist] = useState(false);
  const endpoint = 'http://localhost:4232/signup/';

  let dispatch = useDispatch();
  const store = useSelector((state) => state.adminReducer.adminSign);

  useEffect(() => {
    if (store) {
      setValue('password', store.password);
    }
  }, [store]); // Include 'store' as a dependency for useEffect

  const Schema = yup.object().shape({
    password: yup
      .string()
      .required(
        <span className="flex">
          <span className="mt-1 me-1">
            <MdErrorOutline />
          </span>{' '}
          <span>Please Enter a Password</span>
        </span>
      ),
    confirm: yup
      .string()
      .required(
        <span className="flex">
          <span className="mt-1 me-1">
            <MdErrorOutline />
          </span>{' '}
          <span>Confirm your Password</span>
        </span>
      ),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (myData) => {
    if (myData.password === myData.confirm) {
      // Only store the password in the form data
      let form = { password: myData.password };
      axios.post(endpoint, store)
        .then((result) => {
          if (result.data.status === false && result.data.err.code === 11000) {
            console.log(result);
            setExist(true);
          } else {
            // Only dispatch to the next step when both conditions are met
            if (exist) {
              dispatch(handleNextStep(form));
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMatch('Password do not match');
    }
  };

  return (
    <>
      <div className="lg:w-[300px] md:w-[300px] w-[250px] h-[340px]">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label className="font-bold" htmlFor="">
              Password
            </label>
            <br />
            <input
              {...register('password')}
              type="password"
              className={`border border-black h-[40px] mt-3 rounded w-full`}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <div className="my-2">
            <label className="font-bold" htmlFor="">
              Confirm Password
            </label>
            <br />
            <input
              {...register('confirm')}
              type="password"
              className={`border border-black h-[40px] mt-3 rounded w-full`}
            />
            <p className="text-red-600">{errors.confirm?.message}</p>
            <p className="text-red-600 my-1">
              {exist
                ? 'Email Already Exists, Kindly go back to Previous Pages'
                : match}
            </p>
            <small>{exist}</small>
          </div>
          <button
            onClick={() => dispatch(handlePreviousStep())}
            className="bg-red-700 text-white rounded p-2 mt-[35%]"
          >
            Previous
          </button>
          <button
            type="submit"
            className="float-right bg-red-700 text-white rounded p-2 mt-[35%]"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Password;
