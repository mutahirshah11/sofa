import React from 'react';
import instabg from '../../../public/images/insta.png';
import Image from 'next/image';

const Insta = () => {
  return (
    <div>
      <div>
        {/* bg image */}
        <div className='relative'>
          <Image src={instabg} alt='insta-bg' className='mt-10 w-full md:max-h-[320px] lg:h-[auto] max-h-[200px]' />

          {/* text */}
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center '>
            <div className='flex flex-col justify-center items-center gap-[2px] md:gap-2 lg:gap-3 '>
              <p className='font-extrabold text-[25px] md:text-[40px] xl:text-[50px]'>Our Instagram</p>
              <p className='text-[10px] md:text-[15px] xl:text-[18px]'>Follow our store on Instagram</p>
              <button className=' text-[10px] md:text-[15px] bg-[#FAF4F4] w-[80px] md:w-[140px] h-[30px] md:h-[40px] xl:w-[180px] xl:h-[48px] rounded-full border-[1px] shadow-black/30 shadow-md shadow-bottom '>Follow us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insta;
