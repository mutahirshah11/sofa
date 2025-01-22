import React from 'react'
import FreeDelivery from './freeDelivery';


const OneTwoThree = () => {
  return (
    <div>
         {/* Pagination buttons */}
      <div className='flex justify-center items-center py-12 xl:py-20 xl:pb-24 gap-5 md:gap-10'>
        {[1, 2, 3, 'Next'].map((page, index) => (
          <div key={index}>
            <div className='bg-[#FFF9E5] py-3 px-5 md:py-4 md:px-6  font-[400] rounded-xl hover:bg-[#FBEBB5]'>
              {page}
            </div>
          </div>
        ))}
      </div>
      <FreeDelivery/>
    </div>
  )
}

export default OneTwoThree