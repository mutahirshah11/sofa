import React from "react";
import Image from "next/image";
import cart from "../../../public/images/cart.png";
import user from "../../../public/images/user.png";
import search from "../../../public/images/search.png";
import heart from "../../../public/images/heart.png";
import Link from "next/link";
import cartimage from "../../../public/images/cartsofa1.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navicons = [
  { icon: user, href: "../Login" },
  { icon: search, href: "../" },
  { icon: heart, href: "../" },
];

const navpages = [
  { name: "Home", href: "../" },
  { name: "Shop", href: "../Shop" },
  { name: "About", href: "" },
  { name: "Contact", href: "../Contact" },
];

const Navbar1 = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-center lg:justify-end items-center gap-6 md:gap-24 lg:gap-32 xl:gap-40 w-full h-[80px] lg:h-[100px] bg-[#FBEBB5] relative">
        {/* Navigation Pages */}
        <div className="flex gap-3 md:gap-10 lg:gap-16 mt-2 md:mt-2 lg:mt-1">
          {navpages.map((items, index) => (
            <div
              key={index}
              className="text-[10px] font-semibold md:text-[17px]"
            >
              <Link href={items.href}>
                <p>{items.name}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Icons */}
        <div className="flex gap-3 md:gap-5 mt-2 lg:mt-[-1px] lg:mr-10 xl:mr-24 lg:gap-10">
          {navicons.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className="size-4 md:size-5 lg:size-[25px]"
            >
              <Image src={items.icon} alt="icons" />
            </Link>
          ))}

          {/* Cart Icon with Side Sheet */}
          <Sheet>
            <SheetTrigger>
              <Image
                src={cart}
                alt="cart icon"
                className="cursor-pointer size-[16px] md:size-[20px] lg:size-[25px]"
              />
            </SheetTrigger>
            <SheetContent className="bg-white w-[300px] sm:w-[400px] p-5">
              <div className="flex flex-col">
                <h2 className="text-2xl font-[700] mb-5">Shopping Cart</h2>
                <hr className="w-[300px] mb-12" />

                {/* Cart Items */}
                <div className="flex items-center gap-4  pb-4">
                  <Image
                    src={cartimage}
                    alt="cartsofa"
                    className="w-[80px] h-[80px]"
                  />

                  <div className="flex flex-col  gap-4">
                    <h3 className="text-sm font-semibold">Asgaard Sofa</h3>
                    <p className="space-x-10">
                      1 x{" "}
                      <span className="text-yellow-600 font-semibold text-sm ">
                        Rs. 250,000.00
                      </span>
                    </p>
                  </div>
                  <button className="ml-auto text-gray-500 hover:text-red-500">
                    ✖
                  </button>
                </div>

                <div className=" mt-[200px]">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center mb-10  text-lg font-bold">
                    <span>Subtotal</span>
                    <span className="text-yellow-600">Rs. 250,000.00</span>
                  </div>

                  <hr className="w-[350px] mb-10 " />

                  {/* Actions */}
                  <div className="  flex justify-center items-center gap-3">
                    <Link
                      href={"../Cart"}
                      className="w-[135px] h-[32px] border text-center text-[15px] border-gray-400 text-gray-400 rounded-xl  hover:bg-gray-100"
                    >
                      <p className="mt-1">View Cart</p>
                    </Link>
                    <Link
                      href={"../Checkout"}
                      className="w-[135px] h-[32px] border text-center text-[15px] border-gray-400 text-gray-400 rounded-xl  hover:bg-gray-100"
                    >
                      <p className="mt-1">Checkout</p>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
