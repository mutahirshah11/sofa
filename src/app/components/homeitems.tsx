import React from 'react'
import Image from 'next/image'
import sofa1 from "../../../public/images/Group 8.png"
import sofa2 from "../../../public/images/Group 9.png"

const sofas = [
    {name: "Side table", pic :sofa2, viewmore : "View more"}, 
    {name: "Cloud Sofa", pic :sofa1, viewmore : "View more"},
]

const Homeitems = () => {
  return (
    <div >
        <div className='w-[full] bg-[#FAF4F4] h-[auto] pb-14'>
            <div className='flex flex-col md:flex-row md:gap-28 xl:gap-[20%] justify-center items-center py-10 mr-12'>
                {sofas.map((items , index)=>(
                    <div key={index}>
                        <Image src={items.pic} alt={items.name} width={500} height={500} className='w-[280px] h-[200px] lg:w-[380px] lg:h-[290px]  '/>
                        <p className='font-semibold text-[22px] mb-2 lg:mb-3 md:text-[25px]  xl:text-[28px] text-black  cursor-pointer lg:ml-10 '>{items.name}</p>
                        <p className='font-semibold text-[14px] md:text-[17px]   underline underline-offset-[13px] decoration-[2px] text-black hover:opacity-70 cursor-pointer lg:ml-10 '>{items.viewmore}</p>
                    </div >
                ))}
            </div>
        </div>
    </div>
  )
}

export default Homeitems