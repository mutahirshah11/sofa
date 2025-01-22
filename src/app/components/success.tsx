import React from 'react'
import Link from 'next/link'

const SuccessCompo = () => {
  return (
    <div className=' '>
        <div className="bg-gray-100/90 py-10">
      <div className=" p-6  md:mx-auto py-10">
        <svg viewBox="0 0 24 24" className="text-green-500/90 w-16 h-16 lg:w-24 lg:h-24 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-[30px]   text-gray-900 font-semibold text-center">Ordered Placed Succesfully !</h3>
            <p className="text-gray-600 my-3 text-[15px] lg:text-[17px] ">Thank you for placing order your order </p>
            <p className="text-gray-900 my-3 text-[10px] lg:text-[16px] " > It will be shipped soon 😊  </p>
            <div className="py-10 text-center">
                <Link href="./" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </Link>
            </div>
        </div>
    </div>
  </div>
    </div>
  )
}

export default SuccessCompo