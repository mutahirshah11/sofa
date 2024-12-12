import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";
import Image from "next/image";
import sofaimg from "../../../public/images/cartsofa1.png";

const products = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: "Rs. 250,000.00",
    quantity: 1,
    subtotal: "Rs. 250,000.00",
  },
];

const CartPage = () => {
  return (
    <div>
      <Navbar1 />
      <Banner title="Cart" subtitle="Home" breadcrumb="Cart" />

      <div className=" py-8 flex flex-col justify-center items-center ">
        {/* Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          {/* Product Section */}

          <div className="lg:col-span-2">
            <div>
              {/* Yellow Headings */}
              <div className="bg-[#FFF9E5]  p-4">
                <div className="grid grid-cols-4 text-sm font-bold">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                </div>
              </div>

              {/* White Product Rows */}
              <div className="bg-white  p-4 mt-2 ">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-4 items-center text-[8px] md:text-[14px]  py-3 "
                  >
                    {/* Product Info */}
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <Image
                        src={sofaimg}
                        alt="sofaimg"
                        className=" w-12 h-12 lg:w-16 lg:h-16 "
                      />

                      <span className="text-gray-400 font-[500]">
                        {product.name}
                      </span>
                    </div>
                    {/* Price */}
                    <div className="text-gray-400 font-[500]">
                      {product.price}
                    </div>
                    {/* Quantity */}
                    <div>
                      <input
                        type="text"
                        value={product.quantity}
                        className="w-8 h-8 ml-2 border border-gray-300 text-center rounded"
                        readOnly
                      />
                    </div>
                    {/* Subtotal */}
                    <div className="text-black font-[600]">
                      {product.subtotal}
                    </div>

                    {/* dustbin  */}
                    <div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Totals Section */}
          <div className="bg-[#FFF9E5] w-[320px]  p-10 rounded-lg flex flex-col justify-center items-center text-center gap-3 md:ml-16 lg:ml-0 ">
            <h2 className="text-2xl font-bold mb-4 ">Cart Totals</h2>
            <div className="flex justify-between items-center gap-10 my-5">
              <span className="text-sm font-semibold">Subtotal</span>
              <span className="text-sm">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center gap-9 mb-6">
              <span className="text-sm font-bold">Total</span>
              <span className="text-md font-bold text-[#B88E2F]">
                Rs. 250,000.00
              </span>
            </div>
            <button className="w-[150px] h-[42px] lg:w-[200px] lg:h-[50px] bg-transparent  border-gray-900 border-[1px]  text-gray-900 font-[500] mb-5 rounded-xl  hover:bg-black hover:text-white transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <FreeDelivery />
    </div>
  );
};

export default CartPage;
