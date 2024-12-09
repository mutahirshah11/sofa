import React from 'react'

// components/Features.js
const features = [
    {
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipim scing elit.",
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipim scing elit.",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipim scing elit.",
    },
  ];
  

  
  
  const FreeDelivery = () => {
    return (
        <div className='flex justify-center items-center '>
        <div className="flex flex-col md:flex-row justify-center items-center bg-[#FAF4F4] lg:h-[250px]  py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col ml-10 md:ml-14 xl:ml-16 mb-10 md:mb-0"
          >
            <h3 className="text-lg xl:text-2xl font-semibold text-black">{feature.title}</h3>
            <p className="text-md xl:text-md text-gray-500 mt-2 w-[80%] xl:w-[full] ">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
      
    )
  }
  
  export default FreeDelivery