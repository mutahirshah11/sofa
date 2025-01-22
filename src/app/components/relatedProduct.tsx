"use client";
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import ShopitemsProps from './shopItemsprops';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface Product {
  id:string
  name: string;
  price: string;
  image: string;
}

export default function ProductDetails() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && isFeaturedProduct == true]{
        id,
        name,
        price,
        "image": image.asset->url,
      }`;
      
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className='flex justify-center flex-col items-center lg:px-10 pb-5'>

          {/* Text */}
          <div className='flex flex-col justify-center items-center text-center pt-20  px-[10px]'>
            <h1 className='font-bold text-[25px] md:text-[30px] xl:text-[33px] mb-3'>Related Products You May Like</h1>
            <p className='text-[15px] xl:text-[16px] text-gray-400 mb-5'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5'>
          {products.map((item, index) => (
            <div key={index}>
              <ShopitemsProps
                id={`./MainPage/${item.id}`}
                name={item.name}
                price={item.price}
                image={urlFor(item.image).url()}
              />
            </div>
          ))}

          
        </div>

        {/* {view more } */}

        <Link href='../Shop'>
       <div className='flex justify-center items-center py-12 xl:py-20 xl:pb-24'>
            <p className='text-[18px] font-semibold underline  underline-offset-[14px] decoration-[2px] hover:opacity-75 cursor-pointer  '>View More</p>
        </div>
      </Link>
      
      </div>
    </div>
  );
}
