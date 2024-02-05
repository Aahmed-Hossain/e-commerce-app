'use client'
import React ,{ useState }  from 'react'
import Link from "next/link";
import Menu from './Menu';
import  { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider';
const Navbar = () => {
  const {setUser,user} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="hidden md:flex gap-4 items-center ">
      {
        user ? 
        <button
        onClick={() => setIsOpen(!isOpen)}
         className='uppercase bg-fuchsia-200 cursor-pointer px-2 py-1 rounded-md hover:shadow-xl'>
        {user?.data?.name}
        </button> : <Link href={"/login"}>Login</Link>
      } 

{isOpen && (
  <div className="absolute rounded-md shadow-md w-[40vw] md:w-[10vw] bg-gray-700 overflow-hidden right-0 top-12 text-sm p-2 text-white">
    <div className="flex flex-col cursor-pointer">
      
      {user?.data?.isAdmin === false && (
        <>
          <Link className='hover:text-red-500 font-bold' href={"/orders"}>Orders
          </Link>
          <Link className='hover:text-red-500 my-2 font-bold' href={"/"}>Home
          </Link>
          <button className='hover:text-red-500 text-start font-bold'>Logout
          </button>
        </>
      )}

      {user?.data?.isAdmin === true && (
        <>
          <Link href={"/orders"}>Orders</Link>
          <Link href={"/users"}>Users</Link>
          <Link href={"/addedProducts"}>Added_Products</Link>
          <Link href={"/addProducts"}>Add_Products</Link>
        </>
      )}

    </div>
  </div>
)}

    
    </div>
 
  </div>
  )
}

export default Navbar