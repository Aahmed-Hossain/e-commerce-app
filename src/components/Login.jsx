"use client"
import React from 'react'
import { Link } from 'next/link';
import Lottie from "lottie-react";
import lottie from '../../public/singing-contract.json'
const Login = () => {
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  // };
  return (
    <div className="w-11/12  mx-auto text-red-500 flex flex-row ">
      <div className="w-1/2 ">
          <Lottie  animationData={lottie}></Lottie>
        </div>
    <div className='w-1/2 border border-red-500 m-12 px-24'>
   <h3 className='text-center font-bold text-2xl m-12'>Login Please!</h3>
     <form className="w-full ">
    {/* name input */}
    <div className="mt-4">
     <label className="text-sm font-bold"> Register Number:
      </label>
      <input  
      type="number" 
      className="border-b border-red-500 w-full p-1 focus:outline-none bg-transparent"
      placeholder="Your Registration number Please."
       required
       />
     </div>
    {/* name input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Password:
      </label>
      <input  
      type="password" 
      className="border-b border-red-500 w-full p-1 focus:outline-none bg-transparent"
      placeholder="Your Registration number Please."
       required
       />
     </div>
     </form>
   </div>
    </div>
  )
}

export default Login