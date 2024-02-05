"use client";
import React, { useEffect, useState } from "react";
import { getUsers } from "@/utils/getUsers";
import Modal from "react-modal";
import  axios from 'axios';
import { toast } from 'react-toastify';
const Users = () => {
  const [users, setUsers] = useState([]);
  const openModal = () => setModalOpen(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUsers();
        setUsers(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
            closeModal();
            }
        });
      }
  };
  return (
    <div className="w-6/12 mx-auto mt-4">
      {users.map((user, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between gap-2  border border-slate-300 rounded-xl mb-4 text-2xl p-4"
        >
          <div className="flex items-center gap-3">
            <p>{idx + 1}.</p>
            <p className="uppercase text-red-500">{user?.name}</p>
          </div>
          <p>{user?.number}</p>
        </div>
      ))}

      <button
      onClick={openModal}
       className="my-4 px-16 flex  mx-auto py-2 font-bold border-2 border-gray-600 bg-[#FF3811] rounded-md cursor-pointer text-xl text-white hover:bg-red-600 hover:shadow-xl">
        Add Customer
      </button>

       {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add User Modal"
        ariaHideApp={false}
      >

<div className='w-full md:w-1/2 lg:w-1/2 mx-auto px-4 md:px-8 lg:px-24 bg-fuchsia-50 rounded shadow-xl'>
   <h3 className='text-center font-bold text-2xl pt-4'>Register Please!</h3>
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
        type="number"
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
     <div className=" mt-12 mb-8 pb-8">
           <input
            className="hover:bg-[#dc2626] bg-red-500 rounded text-white font-bold py-2 px-4 w-full cursor-pointer hover:shadow-2xl "
            type="submit"
            value="REGISTER"
                />
              </div>
     </form>
     
   </div>
        
      </Modal>
    </div>
  );
};

export default Users;
