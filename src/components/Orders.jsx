'use client'
import React, { useEffect, useState } from 'react';
import { getOrders } from '@/utils/getOrders';
import axios  from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const result = await getOrders();
              setOrders(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, []);
    const handleDelete = (id) => {
        axios.delete(`https://e-commerce-app-server.vercel.app/orders/${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res.data.deletedCount) {
              toast.success(`Deleted successfully`)
              setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
            }
          })
          .catch((error) => {
            console.error('Error deleting:', error);
          });
      };

  return (
    <div className='w-9/12 mx-auto mt-4'>
    {orders.map((order, idx) => (
        <div  
        key={idx}
         className="flex items-center justify-between gap-2  border border-slate-200 rounded-xl mb-4">
            {/* left container */}
            <div className='flex items-center gap-3'>
                <img className="w-[15rem] rounded-l-xl flex items-start" src={order.image} alt="" />
                <div>
                    <p className='text-xl font-semibold text-[#FF3811]'>{order.product_title}</p>
                    <p className='text-[#A2A2A2]'>Price: {order.price}</p>
                    <p className='text-[#A2A2A2]'>Quantity: {order.quantity}</p>
                </div>
            </div>
            {/* right div */}
            <div className='flex items-center gap-4 pr-2'>
            <button 
            onClick={() => handleDelete(order._id)}
             className="px-3 py-1 rounded-full opacity-50 ml-2 hover:opacity-70 bg-black text-white">
                    X
                </button>
            </div>
        </div>
    ))}
</div>

  )
}

export default Orders