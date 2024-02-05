'use client'
import React from 'react'
import Link from "next/link";
import Menu from './Menu';
import  { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider';
const Navbar = () => {
  const {setUser,user} = useContext(AuthContext);
  console.log(user?.data?.isAdmin);
  return (
    <div className="text-red-500 h-12 px-6 flex justify-between items-center border-b border-b-red-500 font-semibold text-xl ">
       {/* left logo */}
    <div>
      <Link href={"/"} className="text-2xl font-semibold">
      Bucket<span className='text-gray-700'>BD</span>
      </Link>
    </div>
    {/* middle navlinks */}
    <div className="hidden md:flex gap-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/orders"}>Orders</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/addedProducts"}>Added_Products</Link>
      <Link href={"/addProducts"}>Add_Products</Link>
    </div>
   
    {/* mobile menu */}
    <div className="md:hidden">
      <Menu></Menu>
    </div>
    {/* Right navlinks */}
    <div className="hidden md:flex gap-4 items-center ">
      {
        user ? 
        <button>
        {user?.data?.name}
        </button> : <Link href={"/login"}>Login</Link>
      }
    
    </div>
 
  </div>
  )
}

export default Navbar