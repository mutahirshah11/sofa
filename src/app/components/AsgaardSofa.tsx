import React from 'react'
import Image from 'next/image'
import ASgaardsofa from "../../../public/images/Asgaard sofa 1.png"

const AsgaardSofa = () => {
  return (
    <div>
        <div className='bg-[#FFF9E5] w-[full] h-[550px] md:h-[600px] lg:h-[550px] flex flex-col lg:flex-row lg:gap-24 justify-center items-center'> 
            {/* Image */}
            <div>
                <Image src={ASgaardsofa} alt='Sofa' className='w-[400px]  md:w-[500px] lg:w-[600px] xl:w-[770px]'/>
                
            </div>
             
             {/* text */}
            <div className='flex flex-col justify-center items-center text-center gap-1'>
                <p className='text-[15px] font-semibold lg:text-[20px] '>New Arrivals</p>
                <p className='text-[30px] font-extrabold lg:text-[40px] mb-2 lg:mb-5 '>Asgaard sofa</p>
                <button className='border-[1px] border-black px-12 py-2.5  text-center font-normal hover:bg-yellow-400 hover:font-bold '>Order now</button>
            </div>

        </div>
    </div>
  )
}

export default AsgaardSofa