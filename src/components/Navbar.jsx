'use client'
import React ,{ useState }  from 'react'
import Link from "next/link";
import Menu from './Menu';
import  { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider';
const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext);
  return (
    <div className="text-red-500 h-12 px-6 flex justify-between items-center border-b border-b-red-500 font-semibold text-xl ">
       {/* left logo */}
    <div>
      <Link href={"/"} className="text-2xl font-semibold">
      Bucket<span className='text-gray-700'>BD</span>
      </Link>
    </div>
    {/* middle navlinks */}
    <div className="hidden text-md md:flex gap-4 hover:text-red-500">
      <Link href={"/"}>Home</Link>
      <Link href={"/allProducts"}>All Products</Link>
    </div>
    {/* mobile menu */}
    <div className="md:hidden">
      <Menu></Menu>
    </div>
    {/* Right navlinks */}
    <div className="flex gap-4 items-center">
      {
        user && 
        <h3
         className='uppercase text-gray-700'>
        {user?.data?.name}
        </h3>
      }
      {
        <div>
          { (user?.data?.isAdmin === true || user?.data?.isAdmin === false) &&
          <button
          className='bg-fuchsia-200 hover:bg-fuchsia-300 cursor-pointer px-2 py-1 rounded-md hover:shadow-md'
           onClick={logoutUser}>
            Logout
          </button>
        }
        {user?.data?.isAdmin === false && <Link
        className='bg-fuchsia-200 hover:bg-fuchsia-300 cursor-pointer px-2 py-1 rounded-md hover:shadow-md ml-2'
         href={"/orders"}>Orders</Link>}
        {user?.data?.isAdmin === true && <Link className='bg-fuchsia-200 hover:bg-fuchsia-300 cursor-pointer px-2 py-1 rounded-md hover:shadow-md ml-2' href={"/dashboard/users"}>Dashboard</Link>}
        {!user && <Link href={"/login"}>Login</Link>}
      </div>
      }
    </div>
 
  </div>
  )
}

export default Navbar