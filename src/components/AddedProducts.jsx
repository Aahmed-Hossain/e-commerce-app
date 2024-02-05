'use client'
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/utils/getProducts';

const AddedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProducts();
                setProducts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  return (
    <div className='w-9/12 mx-auto mt-4'>
    {products.map((product, idx) => (
        <div  
        key={idx}
         className="flex items-center justify-between gap-2  border border-slate-200 rounded-xl mb-4">
            {/* left container */}
            <div className='flex items-center gap-3'>
                <img className="w-[15rem] rounded-l-xl flex items-start" src={product.image} alt="" />
                <div>
                    <p className='text-xl font-semibold text-[#FF3811]'>{product.product_title}</p>
                    <p className='text-[#A2A2A2]'>Price: {product.price}</p>
                    <p className='text-[#A2A2A2]'>Quantity: {product.quantity}</p>
                    <p className='text-[#A2A2A2]'>Origin: {product.origin}</p>
                </div>
            </div>
            {/* right container */}
            <div className='flex items-center gap-4 pr-2'>
            <button 
             className="px-3 py-1 rounded-full opacity-50 ml-2 hover:opacity-70 bg-black text-white">
                    X
                </button>
            </div>
        </div>
    ))}
</div>

  )
}

export default AddedProducts