'use client'
import React from 'react'
import { toast } from 'react-toastify';
import axios  from 'axios';
import { useRouter} from 'next/navigation';

const AddProduct = () => {
    const router = useRouter();
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const product_title = form.product_title.value;
        const image = form.image.value;
        const origin = form.origin.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
    
        const addFood = {
          product_title,
          image,
          price,
          origin,
          quantity,
          description
        };
        axios.post("https://e-commerce-app-server.vercel.app/addProducts", addFood).then((res) => {
          if (res.data.insertedId) {
            toast.success(`${product_title} Added successfully!`)
            router.push('/addedProducts');
          }
        }).catch((error) => console.log(error));
      };
  return (
    <div className='w-full md:w-9/12 lg:w-8/12 mx-auto px-8 py-3 my-6 bg-white rounded shadow-2xl border text-gray-700'>
   <h3 className='text-center font-bold text-2xl'>Add Product</h3>
     <form
    onSubmit={handleAddProduct}
     className="w-full ">
    {/* product title input */}
    <div className="mt-4">
     <label className="text-sm font-bold">Product Title:
      </label>
        <input  
      name="product_title"
      className="border border-red-500 w-full focus:outline-none focus:border-2 focus:border-orange-500 p-2 rounded"
      placeholder="Product Title..."
       required
       />
     </div>
     {/* image  and origin*/}
  <div className='mt-4 flex justify-between items-center gap-3'>
    {/* image input */}
    <div className='w-1/2'>
     <label className="text-sm font-bold">Image:
     </label>
      <input
      type="text" 
      className="border border-red-500 w-full focus:outline-none focus:border-2 focus:border-orange-500 p-2 rounded"
      placeholder="Image URL..."
      name="image"
       required
       />
     </div>
           {/* Origin input */}
           <div className='w-1/2'>
     <label className="text-sm font-bold">Origin:
      </label>
      <input
      type="text" 
      className="border border-red-500 w-full focus:outline-none focus:border-2 focus:border-orange-500 p-2 rounded"
      placeholder="Origin..."
      name="origin"
       required
       />
     </div>
  </div>
     {/* price and quantity */}
    <div className="mt-4 flex justify-between items-center gap-3">
        {/* price  */}
    <div className='w-1/2'>
    <label className="text-sm font-bold">Price:
     </label>
      <input
      type="number" 
      className="border border-red-500 w-full focus:outline-none focus:border-2 focus:border-orange-500 p-2 rounded"
      placeholder="Price..."
      name="price"
      min="10"
       required
       />
    </div>
{/* quantity */}
    <div className='w-1/2'>
    <label className="text-sm font-bold">Quantity:
     </label>
      <input
      type="number" 
      className="border border-red-500 w-full focus:outline-none focus:border-2 focus:border-orange-500 p-2 rounded"
      placeholder="Quantity..."
      name="quantity"
      min="5"
      required
       />
    </div>
     </div>
     {/* description */}
     <div className="mt-4">
     <label className="text-sm font-bold">Description:
     </label>
      <textarea
      rows="4"
      type="text" 
      className="border border-red-500 w-full focus:outline-none focus:border-2 focus:border-orange-500 p-2 rounded"
      placeholder="Description..,."
      name="description"
       required
       />
     </div>

     <div className="my-3">
           <input
            className="hover:bg-[#dc2626] bg-red-500 rounded text-white font-bold py-2 px-4 w-full cursor-pointer hover:shadow-2xl "
            type="submit"
            value="Add Product"
                />
              </div>
     </form>
     
   </div>
  )
}
export default AddProduct;
