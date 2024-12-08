import React from 'react'
import Image from 'next/image'
import cart from "../../../public/images/cart.png"
import user from "../../../public/images/user.png"
import search from "../../../public/images/search.png"
import heart from "../../../public/images/heart.png"
import Link from 'next/link'

const navicons = [ 
    {icon :user},
    {icon :search},
    {icon :heart},
    {icon :cart},
]

const navpages = [
    {name : "Home"},
    {name : "Shop"},
    {name : "About"},
    {name : "Contact"},
]


const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center lg:justify-end items-center gap-6 md:gap-24 lg:gap-32 xl:gap-40   w-[full] h-[80px] lg:h-[100px] bg-[#FBEBB5]'> 
            {/* navpages */}
             <div className='flex gap-3 md:gap-10 lg:gap-16 mt-2 md:mt-2 lg:mt-1 '>
                {navpages.map((items, index)=>(
                    <div className='text-[10px] font-semibold md:text-[17px] '>
                       <Link href={"#"}> <p>{items.name}</p></Link>
                    </div>
                ))}
             </div>

             {/* navIcons */}
             <div className='flex gap-3 md:gap-5 mt-2 lg:mt-[-1px] lg:mr-10 xl:mr-24 lg:gap-10'>
                {navicons.map((items, index)=>(
                    <Link href={"#"} className=' size-4 md:size-5 lg:size-[25px] '>
                        <Image src={items.icon} alt="icons"/> 
                    </Link>
                ))}
             </div>
        </div>

    </div>
  )
}

export default Navbar