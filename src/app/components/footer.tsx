import React from "react";


export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-wrap justify-between">
          {/* Address Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <p className="text-sm">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-1/4">
            <h3 className="font-bold mb-4">Newsletter</h3>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t pt-4">
          <p className="text-sm text-gray-500">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
