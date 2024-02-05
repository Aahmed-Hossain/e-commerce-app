'use client'
import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '@/utils/getSingleProduct';
import { toast } from 'react-toastify';
import  axios from 'axios';
import { useRouter} from 'next/navigation';
const metadata = {
  title: 'BucketBD || Product Details',
}
const ProductDetailsPage = ({params}) => {
  const router = useRouter();
  const [singleProduct, setSingleProduct]  =  useState();
  useEffect(() => {
      const fetchData = async () => {
          try {
              const result = await getSingleProduct(params.productId);
              setSingleProduct(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, [params.productId]);
    const {_id, product_title, price, image, description, origin,quantity} = singleProduct || {};
    const order = {product_title, price, image, origin, quantity};
   const handleOrder = async () => {
   await axios.post(`https://e-commerce-app-server.vercel.app/orders`,order).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
            toast.success(`${product_title} ordered successfully!`)
            router.push('/orders');
        }
      })
      .catch((error) => console.log(error));
   }
  return (
    <div className=" flex gap-4 w-10/12 mx-auto mt-4">
        {/* left div */}
        <div className="w-4/6 ">
          <h2 className="font-extrabold text-4xl mb-2 ">
            {product_title}
          </h2>
          <div className="relative">
            <img
              className="rounded-xl h-[23rem] w-full border border-red-500 shadow-lg"
              src={image}
              alt=""
            />
            <span className="absolute top-4 font-bold right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
              Price:$ {price}
            </span>
          </div>
        </div>
        {/* right div */}
        <div className="w-2/6 mx-auto space-y-3">
          <h3 className="text-3xl font-bold mb-2">Details:</h3>
          <p className="text-[#33333380]">
            {description}
          </p>
          <h4 className="text-md font-semibold">
            Mady By:
            <span className="text-red-500 font-bold text-xl">
              {origin}
            </span>
          </h4>
          <h5 className="text-md font-semibold">
            
            Originated From:
            <span className="tex-xl text-[#FF3811]">
              {origin}
            </span>
          </h5>
          <h6 className="font-semibold">
            Available Quantity:
            <span className="text-red-500 font-bold text-xl">
              {quantity}
            </span>
          </h6>
          <div className=" flex mx-auto">
            <button
              onClick={handleOrder}
              className="mt-6 px-16 mx-auto py-2 font-bold border-2 border-gray-600 bg-[#FF3811] rounded-md cursor-pointer text-xl text-white hover:bg-red-600 hover:shadow-xl"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetailsPage;
