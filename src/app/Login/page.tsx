import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";

const Login = () => {
  return (
    <div>
      <Navbar1 />
      <Banner title="My Account" subtitle="Home" breadcrumb="My account" />

      <div className="">
        <div  className="lg:flex lg:justify-center lg:items-center lg:gap-44">
          {/* Login  */}

          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-5 my-10 ">
            <h1 className="font-[600] text-[30px]">Log In</h1>

            <div className="flex flex-col ">
              <label className="text-[10px] font-semibold">
                Username or email address{" "}
              </label>
              <input
                type="email"
                className="px-5 py-3 border-[2px] borde-gray-500 rounded-md mt-4"
              />
            </div>

            <div className="flex flex-col ">
              <label className="text-[10px] font-semibold">Password</label>
              <input
                type="password"
                className="px-5 py-3 border-[2px] borde-gray-500 rounded-md mt-4"
              />
            </div>

            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="size-5"
              />
              <label
                htmlFor="rememberMe"
                className="font-semibold text-[15px] ml-2 mt-[1px]"
              >
                Remember Me
              </label>
            </div>

            <div className="flex ">
              <button className="px-10 py-2 text-[15px] font-[500] border-[1px] border-gray-900 rounded-xl ">
                Log In{" "}
              </button>
              <div className="mt-3 ml-3">
                <p className=" text-[15px] hover:underline underline-black ">
                  Lost Your Password ?
                </p>
              </div>
            </div>
          </div>

          {/* register  */}
          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-7 my-20 md:mt-10 ">
            <h1 className="font-[600] text-[30px]">Register </h1>

            <div className="flex flex-col ">
              <label className="text-[10px] font-semibold">
                Username or email address{" "}
              </label>
              <input
                type="email"
                className="px-5 py-3 border-[2px] borde-gray-500 rounded-md mt-4"
              />
            </div>

            {/* text */}

            <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-5 text-[10px] font-[400] text-gray-900 w-[300px] ml-12">
              <div>
                <p>
                  A link to set a new password will be sent to your email
                  address.
                </p>
              </div>

              <div>
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-bold "> privacy policy</span>.
                </p>
              </div>
            </div>

            <div className="flex ">
              <button className="px-10 py-2 text-[15px] font-[500] border-[1px] border-gray-500 rounded-xl ">
                Register{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <FreeDelivery />
    </div>
  );
};

export default Login;
