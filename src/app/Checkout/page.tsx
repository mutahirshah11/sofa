import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";

const products = [
    { name: "Asgaard sofa", quantity: 1, price: "Rs. 250,000.00" },
  ];

  const paymentOptions = [
    { label: "Direct Bank Transfer", value: "bank_transfer" },
    { label: "Cash On Delivery", value: "cod" },
  ];


const billingFields = [
    { label: "Company Name (Optional)", type: "text" },
    { label: "Country / Region", type: "select", options: ["Sri Lanka"] },
    { label: "Street Address", type: "text" },
    { label: "Town / City", type: "text" },
    { label: "Province", type: "select", options: ["Western Province"] },
    { label: "ZIP Code", type: "text" },
    { label: "Phone", type: "text" },
    { label: "Email Address", type: "email" },
    { label: "", type: "textarea" , placeholder: "Additional Information" },
  ];



const CheckoutPage = () => {
  return (
    <div>
           <Navbar1 />
          <Banner title="Checkout" subtitle="Home" breadcrumb="Checkout" />

       <div>
           <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-28 xl:gap-44">
           <div className="flex flex-col justify-center items-start  my-20">
      <h1 className="text-[30px] font-bold mb-10 ">Billing details</h1>
      
      {/* Main Form Container */}
      <form className="">
        
        {/* First Name and Last Name Section */}
        <div className="flex gap-3 mb-10">
          <div className=" flex flex-col">
            <label className="text-[13px] md:text-[15px] font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="px-5 py-3  w-[120px] md:w-[175px] lg:h-[60px] border-[2px] borde-gray-500 rounded-md mt-4"
            />
          </div>
          <div className=" flex flex-col">
            <label className="text-[13px] md:text-[15px] font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="px-5 py-3 w-[120px] md:w-[175px] lg:h-[60px] border-[2px] borde-gray-500 rounded-md mt-4"
            />
          </div>
        </div>
        
        {/* Other Fields Section */}
        <div className="grid gap-10">
          {billingFields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-[13px] lg:text-[15px] font-semibold mb-2">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  className="px-5 py-3 w-[260px] md:w-[350px] lg:h-[60px] border-[2px] borde-gray-500 rounded-md mt-4"
                >
                  {field.options?.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  className="px-5 py-3 w-[260px] md:w-[350px] lg:h-[60px] border-[2px] borde-gray-500 rounded-md mt-4"
                  rows={3}
                   placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  className="px-5 py-3 w-[260px] md:w-[350px] lg:h-[60px] border-[2px] borde-gray-500 rounded-md mt-4 text-black"
                
                />
              )}
            </div>
          ))}
        </div>

      </form>
    </div>

     {/* Billing  */}

    <div className="max-w-[480px] max-h-[650px] lg:mt-24  px-4 py-8">
      {/* Product Details */}
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Product</h1>
          <h1 className="text-lg font-bold">Subtotal</h1>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2"
          >
            <p className="text-sm">
              {product.name} x {product.quantity}
            </p>
            <p className="text-sm">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Subtotal and Total */}
      <div className="mt-6 border-b pb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm">Subtotal</p>
          <p className="text-sm">{products[0].price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Total</p>
          <p className="text-lg font-bold text-[#B88E2F]">{products[0].price}</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <h2 className="text-sm font-bold mb-2 flex items-center">
          <span className="w-3 h-3 rounded-full bg-black inline-block mr-2"></span>
          Direct Bank Transfer
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Make your payment directly into our bank account. Please use your Order ID as
          the payment reference. Your order will not be shipped until the funds have cleared
          in our account.
        </p>

        {/* Payment Options */}
        {paymentOptions.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-2 mb-3"
          >
            <input
              type="radio"
              name="payment"
              value={option.value}
              className="w-4 h-4 text-gray-400"
            />
            <span className="text-sm text-gray-400 ">{option.label}</span>
          </label>
        ))}
      </div>

      {/* Privacy Policy */}
      <p className="text-sm text-gray-600 mt-6">
        Your personal data will be used to support your experience throughout this website,
        to manage access to your account, and for other purposes described in our{" "}
        <span className="text-black font-semibold underline">privacy policy</span>.
      </p>

      <div className="flex justify-center items-center my-5">
        {/* Place Order Button */}
      <button className=" w-[180px] h-[40px] lg:w-[280px] lg:h-[55px] text-black  text-sm lg:text-md lg:py-3 mt-6 rounded-xl border-[1px] border-black hover:bg-gray-200 transition">
        Place order
      </button>
      </div>
    </div>
           </div>
       </div>


          <FreeDelivery />
        
    </div>
  )
}

export default CheckoutPage