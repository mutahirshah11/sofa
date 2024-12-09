import React from "react";
import Image from "next/image";
import sofapro from "../../../public/images/sofaProduct.png";
import sofapro1 from "../../../public/images/subpro1.png";
import sofapro2 from "../../../public/images/subpro2.png";
import sofapro3 from "../../../public/images/subpro3.png";
import sofapro4 from "../../../public/images/subpro4.png";
import Link from "next/link";
import facebook from "../../../public/images/facebook icon.png"
import linkdin from "../../../public/images/linkedin icon.png"
import twitter from "../../../public/images/twitter icon.png"
import sofa1 from "../../../public/images/Sofa1.png"
import sofa2 from "../../../public/images/sofa2.png"
import pic1 from "../../../public/images/pickup1.png"
import pic2 from "../../../public/images/pickup2.png"
import pic3 from "../../../public/images/pickup3.png"
import pic4 from "../../../public/images/pickup4.png"

const Topitems = [
    {Image : pic1, name : "Trenton modular sofa_3" , price : "Rs. 25,000.00"},
    {Image : pic2, name : "Granite dining table with dining chair" , price : "Rs. 25,000.00"},
    {Image : pic3, name : "Outdoor bar table and stool" , price : "Rs. 25,000.00"},
    {Image : pic4, name : "Plain console with teak mirror" , price : "Rs. 25,000.00"},
]

const sofa = [ 
  { src: sofa1, alt: "sofa 1" },
  { src: sofa2, alt: "sofa 2" },
]

const productImages = [
  { image: sofapro1 },
  { image: sofapro2 },
  { image: sofapro3 },
  { image: sofapro4 },
];

const ProductDetails = () => {
  return (
    <div>
      {/* names  */}
      <div className="flex justify-start items-start ml-10 lg:ml-20 mt-20 text-gray-600 gap-3">
        {/* Breadcrumb links */}
        <Link href={"#"} className="text-sm md:text-base hover:underline">
          Home
        </Link>
        <span className="mx-2 text-[black]">&gt; </span>
        <Link href={"#"} className="text-sm md:text-base hover:underline">
          Shop
        </Link>
        <span className="mx-2 text-[black] ">&gt; </span>
        <span className="text-sm md:text-base text-black font-medium">
          | Asgaard Sofa
        </span>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main container */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Left Section: Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row  items-center gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col lg:flex-col gap-4">
              {productImages.map((item, index) => (
                <div key={index} className="w-16 h-16 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={sofapro}
                alt="Main Product"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="w-full md:w-1/2 pt-15 ">
            <h1 className="text-[40px] font-bold text-gray-800">
              Asgaard Sofa
            </h1>
            <p className="text-xl lg:text-2xl font-[600] text-[#CFCFCF] mt-2">Rs. 250,000.00</p>

            {/* Ratings */}
            <div className="flex items-center mt-4">
              <div className="flex text-yellow-400 ">
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">★</span>
                <span className="text-[25px]">☆</span>
              </div>
              <p className="text-sm text-gray-600 ml-10 ">
                | 5 Customer Review
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-black mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Size Options */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-800">Size</p>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-[#FBEBB5]">
                  L
                </button>
                <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-[#FBEBB5]">
                  XL
                </button>
                <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-[#FBEBB5]">
                  XS
                </button>
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-800">Color</p>
              <div className="flex gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-purple-500 border"></div>
                <div className="w-6 h-6 rounded-full bg-black border"></div>
                <div className="w-6 h-6 rounded-full bg-[#CDBA7B] border"></div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center mt-6">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button className="px-3 py-2 text-gray-600">-</button>
                <span className="px-4 py-2">1</span>
                <button className="px-3 py-2 text-gray-600">+</button>
              </div>
              <button className="ml-4 px-6 py-2  text-black border-[1px] border-black rounded-lg">
                Add To Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 ">
              <p className="text-md text-gray-600 ">SKU <span className="ml-16">: SS001</span></p>
              <p className="text-md text-gray-600 mt-2">Category<span className="ml-8">: Sofas</span></p>
              <p className="text-md text-gray-600 mt-2">
                Tags<span className="ml-16">: Sofa, Chair, Home, Shop</span>
              </p>
            </div>

            {/* Share and Wishlist */}
            <div className="flex justify-start items-center mt-4 ">

             <div>
             <p className="text-md text-gray-600 ">Share</p>
             </div>
              <div className="flex justify-center items-center ml-14 gap-5 ">
                :

              <Image src={facebook} alt="facebook" className="text-gray-600"/>
              <Image src={linkdin} alt="linkdin" className="text-gray-600"/>
              <Image src={twitter} alt="twitter" className="text-gray-600"/>
              </div>
            </div>
          </div>
        </div>
      </div>


       {/* descriptions and pictures  */}

       <div className="bg-white p-4">
      {/* Section Wrapper */}
      <div className=" ">
        {/* Tabs */}
        <div className="flex justify-center items-center space-x-4 border-t border-gray-300 py-10">
          <button className="text-black font-semibold  border-black">
            Description
          </button>
          <button className="text-gray-400 font-semibold  hover:text-black">
            Additional Information
          </button>
          <button className="text-gray-400 font-semibold  hover:text-black">
            Reviews [5]
          </button>
        </div>

        {/* Description Content */}
        <div className="mt-6 md:px-20">
          <p className="text-gray-400 text-md leading-7">
            Embodying the raw, wayward spirit of rock n roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p className="text-gray-400 text-md mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        {/* Images Section */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10 rounded-md">
      {sofa.map((item, index) => (
        <div
          key={index}
          className=" flex justify-center items-center"
        >
          <Image
            src={item.src}
            alt={item.alt}
            className="w-[300px] h-[175px] xl:w-[490px] xl:h-[275px]"
          />
        </div>
      ))}
    </div>
      </div>
    </div>

         {/* related Products  */}

         <div className='bg-[FFFFFF] w-[auto] h-[auto]'>
           {/* Text */}
        <div className='flex flex-col justify-center items-center text-center pt-20  px-[10px]'>
            <h1 className='font-bold text-[25px] md:text-[30px] xl:text-[33px] mb-3'>Related Products</h1>
            
        </div>
          
          {/* cards */}

        <div>
             <div className='flex justify-center items-center lg:px-2 py-5' >
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                   {Topitems.map((items , index)=>(
                    <div  key={index} className=''>
                        <Image src={items.Image} alt={items.name}/>
                        <p className='font-sans font-semibold w-[70%] mb-2 '>{items.name}</p>
                        <p className='font-bold'>{items.price}</p>

                    </div>
                   ))}
                 </div>
             </div>
        </div>

        {/* {view more } */}

        <div className='flex justify-center items-center py-12 xl:py-20 xl:pb-24'>
            <p className='text-[18px] font-semibold underline  underline-offset-[14px] decoration-[2px] hover:opacity-75 cursor-pointer  '>View More</p>
        </div>


    </div>
             

    </div>
  );
};

export default ProductDetails;
 