
import React from 'react'
import Link from "next/link";
import Menu from './Menu';
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="text-red-500 h-12 p-6 flex justify-between items-center border-b border-b-red-500 font-semibold text-xl">
       {/* left logo */}
    <div>
      <Link href={"/"} className="text-2xl font-semibold">
      Bucket<span className='text-gray-700'>BD</span>
      </Link>
    </div>
    {/* middle navlinks */}
    <div className="hidden md:flex gap-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Menu</Link>
      <Link href={"/"}>Login</Link>
    </div>
   
    {/* mobile menu */}
    <div className="md:hidden">
      <Menu></Menu>
    </div>
    {/* Right navlinks */}
    <div className="hidden md:flex gap-4 items-center ">
    <Link href={"/"}>Login</Link>
    </div>
 
  </div>
  )
}

export default Navbar