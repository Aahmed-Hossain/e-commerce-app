"use client"
import React, { useContext, useState} from 'react'
import Link from "next/link";
import Lottie from "lottie-react";
import lottie from '../../public/singing-contract.json'
import { AuthContext } from '@/providers/AuthProvider';
import { useRouter} from 'next/navigation';
import { toast } from 'react-toastify';
const Login = () => {
  const router = useRouter();
  const {setUser,user} = useContext(AuthContext);
  const [autoFillCredentials, setAutoFillCredentials] = useState({
    number: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const password = form.password.value;
    try {
      const response = await fetch("https://e-commerce-app-server.vercel.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number, password }),
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem("token", result.token);
          console.log("Login successful");
          toast.success('User Logged In Successfuly')
          router.push('/');
          setUser(result)
      } else {
        console.error(result.error);
        toast.success(result.error)
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.success(error)
    }
  };
  const handleAutoFill = (number, password) => {
    setAutoFillCredentials({
      number: number,
      password: password,
    });
  };
  
  return (
    <div className="w-11/12  mx-auto text-red-500 flex flex-col md:flex-row lg:flex-row ">
      <div className="w-full md:w-1/2 lg:w-1/2 ">
          <Lottie  animationData={lottie}></Lottie>
        </div>
    <div className='w-full md:w-1/2 lg:w-1/2 m-4 md:m-8 lg:m-12 px-4 md:px-8 lg:px-24 bg-fuchsia-50 rounded shadow-xl'>
   <h3 className='text-center font-bold text-2xl m-12'>Login Please!</h3>
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
        defaultValue={autoFillCredentials.number}
      name="number"
      className="border-b border-red-500 w-full p-1 focus:outline-none bg-transparent"
      placeholder="01789 950153"
       required
       />
      </div>
     </div>
    {/* password input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Password:
      </label>
      <input
      defaultValue={autoFillCredentials.password}
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
            value="Login"
                />
              </div>
              
     </form>
     <button
        className="font-semibold hover:bg-gray-200 px-3 py-2 border border-red-500 flex justify-around items-center mb-2 w-full"
        onClick={() => handleAutoFill('01789950153', '01789950153')}
      >
        Login as Admin
      </button>
      <div className="text-center pb-6 font-semibold text-gray-700">New to BucketBD? <Link className='text-red-500 hover:underline' href={'/register'} >Register</Link> </div>
   </div>
    </div>
  )
}

export default Login;