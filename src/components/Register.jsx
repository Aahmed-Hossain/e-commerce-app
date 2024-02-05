"use client"
import React from 'react'
import Link from "next/link";
import Lottie from "lottie-react";
import lottie from '../../public/singing-contract.json'
import { toast } from 'react-toastify';
import  axios from 'axios';
import { useRouter} from 'next/navigation'
const Register = () => {
    const router = useRouter();
    const handleLogin = async(event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const name = form.name.value;
    const password = form.password.value;
    const isAdmin = false;
    const user = {number,name, password, isAdmin}
    const isValidFirstThreeDigits = /^(013|014|015|016|017|018|019)/.test(number.substring(0, 3));
    if (typeof number !== 'string') {
        toast.warn('Please enter a valid mobile number!');
      }else if(isNaN(number) || number.length !== 11) {
        toast.warn('Number must be 11 digit!')
      }else if(!isValidFirstThreeDigits){
        toast.warn('Should have bangladeshi phone number! 013||014||015||016||017||018||019')
      }
       else {
        await axios.post('https://e-commerce-app-server.vercel.app/users/register',user)
       .then(res=>{
        // console.log(res.data);
        if(res.data.error){
          toast.error(res.data.error);
        }
        else if(res.data.success === true){
        toast.success('Registration successful');
        router.push('/')
        }
    });
      }
  };
  return (
    <div className="w-11/12  mx-auto text-red-500 flex flex-col md:flex-row lg:flex-row ">
      <div className="w-full md:w-1/2 lg:w-1/2 ">
          <Lottie  animationData={lottie}></Lottie>
        </div>
    <div className='w-full md:w-1/2 lg:w-1/2 m-4 md:m-8 lg:m-12 px-4 md:px-8 lg:px-24 bg-fuchsia-50 rounded shadow-xl'>
   <h3 className='text-center font-bold text-2xl m-12'>Register Please!</h3>
     <form 
    onSubmit={handleLogin}
     className="w-full ">
    {/* Register number input */}
    <div className="mt-4">
     <label className="text-sm font-bold"> Mobile Number:
      </label>
      <div className='flex'>
        <span className='border-b border-red-500 mt-1'>+88</span>
        <input  
      name="number"
      className="border-b border-red-500 w-full p-1 focus:outline-none bg-transparent"
      placeholder="01789 950153"
       required
       />
      </div>
     </div>
    {/* name input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Name:
      </label>
      <input
      type="text" 
      className="border-b border-red-500 w-full p-1 focus:outline-none bg-transparent"
      placeholder="Your Name Please."
      name="name"
       required
       />
     </div>
    {/* password input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Password:
      </label>
      <input
      type="password" 
      className="border-b border-red-500 w-full p-1 focus:outline-none bg-transparent"
      placeholder="Password Please."
      name="password"
       required
       />
     </div>
     <div className=" mt-12 mb-8">
           <input
            className="hover:bg-[#dc2626] bg-red-500 rounded text-white font-bold py-2 px-4 w-full cursor-pointer hover:shadow-2xl "
            type="submit"
            value="REGISTER"
                />
              </div>
              <div className="text-center pb-8 font-semibold text-gray-700">Already have account? <Link className='text-red-500 hover:underline' href={'/login'} >Login</Link> </div>
     </form>
     
   </div>
    </div>
  )
}

export default Register;