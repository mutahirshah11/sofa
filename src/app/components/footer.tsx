import React from "react";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const helpLinks = [
    { name: "Payment Options", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Privacy Policies", href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-20 pb-5 border-t">
      <div className=" flex justify-center items-center ">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-0 px-4 mb-10">
          {/* Address Section */}
          <div className="mb-8 lg:mb-0  lg:ml-5 lg:mt-20">
            <p className="text-sm lg:text-[16px] text-[#9F9F9F]/90 w-[70%]">
              400 University Drive Suite 200
              <br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4 lg:mb-10 text-[#9F9F9F]/90">Links</h3>
            <ul className="space-y-2 lg:space-y-11 text-[black] font-semibold">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold mb-4  lg:mb-10 text-[#9F9F9F]/90">Help</h3>
            <ul className="space-y-2 lg:space-y-11 text-[black] font-semibold">
              {helpLinks.map((helpLink, index) => (
                <li key={index}>
                  <Link href={helpLink.href} className="hover:underline">
                    {helpLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold mb-4 text-[#9F9F9F]/90">Newsletter</h3>
            <form className="  ">
              <input
                type="email"
                placeholder="Enter Email Address"
                className=" text-[15px] py-3 px-1 w-[170px] border-b-[1px] border-black"
              />
              <button
                type="submit"
                className=" ml-3 py-3 px-4 border-b-[1px] border-black text-black hover:bg-gray-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="my-1 flex justify-center items-center text-center border-t border-gray-300 pt-6 lg:bottom-0 lg:left-0 lg:justify-start lg:px-6 w-[85%] mx-auto">
        <p className="text-md lg:text-[16px] text-black mt-3 lg:ml-8">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
}
