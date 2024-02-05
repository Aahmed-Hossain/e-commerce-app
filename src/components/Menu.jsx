"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {id:1, title: "Home", url: '/'},
  {id:2, title: "Orders", url: '/orders'},
  {id:3, title: "Register", url: '/register'},
]

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div >
      {!open ? (
        <Image onClick={()=> setOpen(true)} src={"/open.png"} width={20} height={20} alt="nav_logo1" ></Image>
      ) : (
        <Image onClick={()=> setOpen(false)} src={"/close.png"} width={20} height={20} alt="nav_logo2"></Image>
      )}
      {
        open &&(
          <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-3 justify-center items-center text-2xl  z-10 border-4 w-full">
        {links.map((item,idx)=>(
          <Link href={item.url} key={idx}>{item.title}</Link>
        ))}
      </div>
        )
      }
    </div>
    
  );
};

export default Menu;
