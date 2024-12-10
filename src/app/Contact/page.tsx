import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";
import Image from "next/image";
import location from "../../../public/images/location.png"
import phone from "../../../public/images/phone.png"
import clock from "../../../public/images/clock (2).png"

const contactInfo = [
    {
      title: "Address",
      description: "236 5th SE Avenue, New York NY10000, United States",
      iconPlaceholder: location,
    },
    {
      title: "Phone",
      description: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
      iconPlaceholder: phone,
    },
    {
      title: "Working Time",
      description: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
      iconPlaceholder: clock,
    },
  ];

  const input = [ 
    
        { id: "name", label: "Your name", placeholder: "Abc" },
        { id: "email", label: "Email address", placeholder: "Abc@def.com" },
        { id: "subject", label: "Subject", placeholder: "This is an optional" },
      
  ]

const Contact = () => {
  return (
    <div>
    <Navbar1 />
    <Banner title="Contact" subtitle="Home" breadcrumb="Contact" />

    {/* Contact page */} 
     
    <div className="flex flex-col items-center justify-center px-4 py-8  sm:px-8 lg:px-10">
      {/* Heading Section */}
      <div className="text-center my-16">
        <h1 className="text-2xl font-bold sm:text-3xl w-[300px] md:w-[500px] lg:w-[600px] mb-5 ">Get In Touch With Us</h1>
        <p className="text-gray-500 mt-2 w-[300px] md:w-[500px] lg:w-[600px]">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 xl:gap-16 md:py-20">
        {/* Left Section */}
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex  items-start space-x-4">
              <Image src={item.iconPlaceholder} alt={item.title} className=""/>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 w-[70%] lg:w-[50%]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-4">
         {input.map((input, index) => (
            <div key={index}>
              <label htmlFor={input.id} className="block text-sm font-semibold mb-4">
                {input.label}
              </label>
              <input
                type="text"
                id={input.id}
                placeholder={input.placeholder}
                className="w-[300px] h-[55px] lg:w-[500px] lg:h-[65px] border-gray-300 border-[1px] rounded-lg p-3 mt-1 "
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Hi! Id like to ask about"
              
              className="w-[300px] h-[100px] lg:w-[500px] lg:h-[100px] border-gray-300 border-[1px] rounded-lg p-2 mt-1"
            ></textarea>
          </div>
          <button className="w-[150px] h-[50px] lg:w-[220px] lg:h-[45px] lg:mt-5   text-gray-900 font-[500] py-2 rounded-xl border-[1px] border-gray-900 hover:bg-gray-100">
            Submit
          </button>
        </div>
      </div>
    </div>

    <FreeDelivery />
    </div>
  )
}

export default Contact