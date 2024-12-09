import React from 'react'
import Image from 'next/image'
import cart from "../../../public/images/cart.png"
import user from "../../../public/images/user.png"
import search from "../../../public/images/search.png"
import heart from "../../../public/images/heart.png"
import Link from 'next/link'

const navicons = [ 
    {icon :user , href:"../Login"},
    {icon :search , href:"../"},
    {icon :heart , href:"../"},
    {icon :cart , href:"../"},
]

const navpages = [
    {name : "Home" , href:"../"},
    {name : "Shop" , href:"../Shop"},
    {name : "About", href:""},
    {name : "Contact", href:""},
]


const Navbar1 = () => {
  return (
    <div>
        <div className='flex justify-center lg:justify-end items-center gap-6 md:gap-24 lg:gap-32 xl:gap-40   w-[full] h-[80px] lg:h-[100px] bg-[#FFFFFF] relative'> 
            {/* navpages */}
             <div className='flex gap-3 md:gap-10 lg:gap-16 mt-2 md:mt-2 lg:mt-1 '>
                {navpages.map((items , index)=>(
                    <div key={index} className='text-[10px] font-semibold md:text-[17px] '>
                       <Link href={items.href}> <p>{items.name}</p></Link>
                    </div>
                ))}
             </div>

             {/* navIcons */}
             <div className='flex gap-3 md:gap-5 mt-2 lg:mt-[-1px] lg:mr-10 xl:mr-24 lg:gap-10'>
                {navicons.map((items, index)=>(
                    <Link key={index} href={items.href} className=' size-4 md:size-5 lg:size-[25px] '>
                        <Image src={items.icon} alt="icons"/> 
                    </Link>
                ))}
             </div>
        </div>

    </div>
  )
}

export default Navbar1