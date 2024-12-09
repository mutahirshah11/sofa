import React from 'react'
import Image from 'next/image'
import pic1 from "../../../public/images/pickup1.png"
import pic2 from "../../../public/images/pickup2.png"
import pic3 from "../../../public/images/pickup3.png"
import pic4 from "../../../public/images/pickup4.png"
import pic5 from "../../../public/images/shop1.png"
import pic6 from "../../../public/images/shop2.png"
import pic7 from "../../../public/images/shop3.png"
import pic8 from "../../../public/images/shop4.png"
import pic9 from "../../../public/images/shop5.png"
import pic10 from "../../../public/images/shop6.png"
import pic11 from "../../../public/images/shop7.png"
import pic12 from "../../../public/images/shop8.png"
import pic13 from "../../../public/images/shop9.png"
import pic14 from "../../../public/images/shop10.png"
import pic15 from "../../../public/images/shop11.png"
import pic16 from "../../../public/images/shop12.png"
import Link from 'next/link'
import FreeDelivery from './freeDelivery'
const page = [

    {name : "1"},
    {name : "2"},
    {name : "3"},
    {name : "Next"},
]

const Topitems = [
    {Image : pic1, name : "Trenton modular sofa_3" , price : "Rs. 25,000.00"},
    {Image : pic2, name : "Granite dining table with dining chair" , price : "Rs. 25,000.00"},
    {Image : pic3, name : "Outdoor bar table and stool" , price : "Rs. 25,000.00"},
    {Image : pic4, name : "Plain console with teak mirror" , price : "Rs. 25,000.00"},
    {Image : pic5, name : "Grain coffee table" , price : "Rs.15,000.00"},
    {Image : pic6, name : "Kent coffee table" , price : "Rs. 225,000.00 "},
    {Image : pic7, name : "Round coffee table_color 2" , price : "Rs. 251,000.00"},
    {Image : pic8, name : "Reclaimed teak coffee table" , price : "Rs.25,200.00"},
    {Image : pic9, name : "Plain console_" , price : "Rs. 258,200.00"},
    {Image : pic10, name : "Reclaimed teak Sideboard" , price : "Rs. 20,000.00"},
    {Image : pic11, name : "SJP_0825 " , price : "Rs. 200,000.00"},
    {Image : pic12, name : "Bella chair and table" , price : "Rs. 100,000.00"},
    {Image : pic13, name : "Granite square side table" , price : "Rs. 280,800.00"},
    {Image : pic14, name : "Asgaard sofa" , price : "Rs. 250,000.00"},
    {Image : pic15, name : "Maya sofa three seater" , price : "Rs. 115,000.00"},
    {Image : pic16, name : "Outdoor sofa set" , price : "Rs. 244,000.00"},
]

const Shopitems = () => {
  return (
    <div className='bg-[FFFFFF] w-[auto] h-[auto]'>
          
          {/* cards */}

        <div>
             <div className='flex justify-center items-center lg:px-2 pb-5' >
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-3'>
                   {Topitems.map((items , index)=>(
                    <Link href={"../ProductDetails"} key={index} className=''>
                        <Image src={items.Image} alt={items.name}/>
                        <p className='font-sans font-semibold w-[70%] mb-2 '>{items.name}</p>
                        <p className='font-bold'>{items.price}</p>

                    </Link>
                   ))}
                 </div>
             </div>
        </div>

        {/* pages button */}

        <div className='flex justify-center items-center py-12 xl:py-20 xl:pb-24 gap-5 md:gap-10'>
             {page.map((items , index)=>(
                <div key={index}>
                    <div className=' bg-[#FFF9E5] py-3 px-5 md:py-4 md:px-6  font-[400] rounded-xl hover:bg-[#FBEBB5]'>
                       {items.name}
                    </div>
                </div>
             ))}
        </div>

        <FreeDelivery/>


        
        


    </div>
  )
}

export default Shopitems