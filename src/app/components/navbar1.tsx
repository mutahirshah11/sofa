"use client";
import React from "react";
import Image from "next/image";
import search from "../../../public/images/search.png";
import heart from "../../../public/images/heart.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./hamburger";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import CartSlider from "./cartSlider";

const navicons = [
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
  const { isSignedIn } = useUser(); // Clerk hook to check sign-in status

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-evenly xl:justify-between  items-center gap-12 md:gap-24 lg:gap-32 xl:gap-44 h-[80px] lg:h-[100px] bg-[#FFFFFF] shadow-md">
        <div className="lg:pb-0 mt-2">
          {/* SignIn and User Button */}
          <SignedOut>
            <SignInButton>
              <button className="flex gap-1 xl:ml-20 mt-2 md:mt-0  ">
                <FontAwesomeIcon icon={faUser} className="md:size-5  " />
                <p className="text-[12px] md:text-[15px] xl:text-[17px]">
                  Login/Signup
                </p>
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="mt-1 pl-10 ">

              {/* Increase width and height */}
              <UserButton/>
            </div>
          </SignedIn>
        </div>

        {/* Navigation Pages */}
        <div className="hidden md:block">
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
        </div>

        {/* Navigation Icons */}
        <div className="flex gap-5 md:gap-5 mt-3 lg:mt-[-1px] lg:mr-10 xl:mr-24 lg:gap-10">
          <div className="mt-3 flex gap-5">
            {navicons.map((items, index) => (
              <Link
                key={index}
                href={items.href}
                className="size-4 md:size-5 lg:size-[25px]"
              >
                <Image src={items.icon} alt="icons" />
              </Link>
            ))}
          </div>

          <CartSlider />
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#000010" }}
                className="size-8 mr-6 mt-3"
              />
            </SheetTrigger>
            <SheetContent className="bg-[#FBEBB5] border-[0px]">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <div className="text-left pt-20">
                  {navpages.map((items, index) => (
                    <div
                      key={index}
                      className="font-semibold text-[30px] mt-5 ml-[5%] text-[black]"
                    >
                      <Link href={items.href}>{items.name}</Link>
                    </div>
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Extra padding to prevent content from going behind navbar */}
      <div className="h-[80px] lg:h-[100px]"></div>
    </>
  );
};

export default Navbar1;
