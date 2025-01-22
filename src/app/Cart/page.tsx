"use client"

import React, { useEffect, useState } from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";
import Image from "next/image";
import Dustbin from "../../../public/images/dustbin.png";
import { useCart } from "./../components/Provider";
import Link from "next/link";

const CartPage = () => {
  const { cart: cartItems, removeFromCart } = useCart();
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  return (
    <div>
      <Navbar1 />
      <Banner title="Cart" subtitle="Home" breadcrumb="Cart" />

      <div className="py-8 flex flex-col justify-center items-center xl:ml-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <div>
              <div className="bg-[#FFF9E5] p-4">
                <div className="grid grid-cols-5 text-[10px] md:text-[14px] font-bold ml-5">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                </div>
              </div>
              <div className="bg-white p-4 mt-2">
                {cartItems.length > 0 ? (
                  cartItems.map((product) => (
                    <div
                      key={product.id}
                      className="grid grid-cols-5 items-center text-[8px] md:text-[14px] py-3"
                    >
                      <div className="flex flex-col lg:flex-row items-center gap-4">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={50}
                          height={60}
                          className="w-12 h-12 lg:w-16 lg:h-16 object-cover"
                        />
                        <span className="text-gray-400 font-[500] md:text-[13px]">
                          {product.name}
                        </span>
                      </div>
                      <div className="text-gray-400 font-[500]">
                        Rs.{product.price?.toFixed(2)}
                      </div>
                      <div>
                        <input
                          type="text"
                          value={product.quantity}
                          className="w-8 h-8 ml-2 border border-gray-300 text-center rounded"
                          readOnly
                        />
                      </div>
                      <div className="text-black font-[600]">
                        Rs.{(product.price * product.quantity).toFixed(2)}
                      </div>
                      <div className="flex justify-center">
                        <Image
                          src={Dustbin}
                          alt="remove"
                          className="cursor-pointer size-3 md:size-5"
                          onClick={() => removeFromCart(product.id)}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-5">No products in cart.</p>
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#FFF9E5] w-[320px] p-10 rounded-lg flex flex-col justify-center items-center text-center gap-3 ml-6 md:ml-16 lg:ml-0">
            <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between items-center gap-10 mt-5">
              <span className="text-sm font-semibold">Subtotal</span>
              <span className="text-sm">Rs.{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center gap-10 mb-5">
              <span className="text-sm font-semibold">Delivery Charges</span>
              <span className="text-sm">Free</span>
            </div>
            <div className="flex justify-between items-center gap-9 mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-md font-bold text-[#B88E2F]">Rs.{subtotal.toFixed(2)}</span>
            </div>
           <Link href="../Checkout">
           <button className="w-[150px] h-[42px] lg:w-[200px] lg:h-[50px] bg-transparent border-gray-900 border-[1px] text-gray-900 font-[500] mb-5 rounded-xl hover:bg-black hover:text-white transition">
              Check Out
            </button>
          </Link>
          </div>
        </div>
      </div>
      <FreeDelivery />
    </div>
  );
};

export default CartPage;
