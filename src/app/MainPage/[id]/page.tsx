import React from 'react';
import ProductDetails from '@/app/components/relatedProduct';
import Image from 'next/image';
import Navbar1 from '@/app/components/navbar1';
import { client } from '@/sanity/lib/client';
import facebook from "../../../../public/images/facebook icon.png";
import linkdin from "../../../../public/images/linkedin icon.png";
import twitter from "../../../../public/images/twitter icon.png";
import Link from 'next/link';
import Button from '@/app/components/button';
import AddToCartButton from '@/app/components/AddCart';
import StockDisplay from '@/app/components/stockCounter';
import Color from '@/app/components/Color';

type Product = {
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: string;
  reviews: string;
  id: string;
  stockInHand: number;
  size: string[];
};

type Props = {
  params: Promise<{ id: string }>;
};

const MainPage = async ({ params }: Props) => {
  const query = `
    *[_type == "product" && id == $id] {
      _id,
      name,
      price,
      description,
      "image": image.asset->url,
      rating,
      reviews,
      id,
      stockInHand,
      size, 
      color
      
    }
  `;

  const  { id } = await params;
  const products: Product[] = await client.fetch(query, { id });

  if (!products.length) {
    return <div>Product not found</div>;
  }

  const product = products[0];

  return (
    <div>
      <Navbar1 />
      {/* Breadcrumb */}
      <div className="flex justify-start items-start ml-10 lg:ml-20 mt-20 text-gray-600 gap-3">
        <Link href="../" className="text-sm md:text-base hover:underline">
          Home
        </Link>
        <span className="mx-2 text-[black]">&gt;</span>
        <Link href="#" className="text-sm md:text-base hover:underline">
          Shop
        </Link>
        <span className="mx-2 text-[black]">&gt;</span>
        <span className="text-sm md:text-base text-black font-medium">
          | {product.name}
        </span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 ml-[10px]">
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4">
            <div className="rounded-lg overflow-hidden">
              {product.image ? (
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={550}
                  height={550}
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 pt-15">
            <h1 className="text-[40px] font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="text-xl lg:text-2xl font-[600] text-[#CFCFCF] mt-2">
              Rs. {product.price}
            </p>

            {/* Ratings */}
            <div className="flex items-center mt-4">
              <div className="flex text-yellow-400">
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">☆</span>
              </div>
              <p className="text-sm text-gray-600 ml-10">
                | {product.reviews} Customer Review
              </p>

              <StockDisplay productId={product.id} initialStock={product.stockInHand} />
            </div>

            {/* Description */}
            <p className="text-sm text-black mt-4">{product.description}</p>

            {/* Size Options */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-800">Size</p>
              <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-[#FBEBB5]">{product.size[0]}</button>
                <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-[#FBEBB5]">{product.size[1]}</button>
                <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-[#FBEBB5]">{product.size[2]}</button>
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-800">Color</p>

              <Color/>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mt-6">
               <AddToCartButton product={product}/>
              <Button name="Check Out" />
            </div>

            {/* Additional Info */}
            <div className="mt-8">
              <p className="text-md text-gray-600">
                SKU <span className="ml-16">: SS001</span>
              </p>
              <p className="text-md text-gray-600 mt-2">
                Category<span className="ml-8">: {product.category}</span>
              </p>
              <p className="text-md text-gray-600 mt-2">
                Tags<span className="ml-16">: Sofa, Chair, Home, Shop</span>
              </p>
            </div>

            {/* Share and Wishlist */}
            <div className="flex justify-start items-center mt-4">
              <p className="text-md text-gray-600">Share</p>
              <div className="flex justify-center items-center ml-14 gap-5">
                <Image src={facebook || "/placeholder.svg"} alt="facebook" className="text-gray-600" />
                <Image src={linkdin || "/placeholder.svg"} alt="linkdin" className="text-gray-600" />
                <Image src={twitter || "/placeholder.svg"} alt="twitter" className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDetails />
    </div>
  );
};

export default MainPage;

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  const ids = await client.fetch(
    `*[_type == "product"] { "id": id }`
  );

  return ids.map((id: { id: string }) => ({
    id: id.id,
  }));
}

