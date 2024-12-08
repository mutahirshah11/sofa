import React from 'react'
import Image from 'next/image'
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

const TopPickups = () => {
  return (
    <div className='bg-[FFFFFF] w-[auto] h-[auto]'>
           {/* Text */}
        <div className='flex flex-col justify-center items-center text-center pt-20  px-[10px]'>
            <h1 className='font-bold text-[25px] md:text-[30px] xl:text-[33px] mb-3'>Top Picks For You</h1>
            <p className='text-[15px] xl:text-[16px] text-gray-400 mb-5'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
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
  )
}

export default TopPickups