
/* eslint-disable react/prop-types */
import React from 'react';
// import { useRouter } from 'next/router';
import Link from "next/link";
const MenuList = ({ label, address, icon: Icon }) => {
    // const router = useRouter();
  return (
    <Link
      href={address}
      end
      className='flex items-center px-4 py-2 my-5  hover:bg-gray-300   hover:text-gray-700'
    >
      <Icon className='w-5 h-5' />
      <span className='mx-4 font-medium'>{label}</span>
    </Link>
  )
}

export default MenuList;