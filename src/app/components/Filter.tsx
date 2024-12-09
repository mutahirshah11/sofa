import React from "react";
import filter from "../../../public/images/filter.png";
import filterview from "../../../public/images/filterview.png";
import FourDots from "../../../public/images/4dots.png";
import Image from "next/image";

const Filter = () => {
  return (
    <div className="my-10">
      <div className="flex flex-wrap items-center justify-between bg-[#f9f4f2] p-4 border border-gray-200">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Filter Icon */}
          <button className="flex items-center space-x-1 text-gray-700">
            <Image src={filter} alt="filter icond" className="size-4" />
            <span className="text-sm text-black font-[400]">Filter</span>
          </button>

          {/* Grid View Icon */}
          <button className="flex items-center">
            <Image src={FourDots} alt="filter icond" className="size-4" />
          </button>

          {/* List View Icon */}
          <button className="flex items-center">
            <Image src={filterview} alt="filter icond" className="size-4" />
          </button>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-gray-300"></div>

          {/* Results Text */}
          <p className="text-sm text-black font-[400]">Showing 1–16 of 32 results</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Show Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-black font-[400]">Show</span>
            <input
              type="text"
              className="w-12 px-2 py-1 border border-gray-300 rounded text-sm text-center"
              value="16"
              readOnly
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center ">
            <span className="text-sm text-black font-[400] mr-2">Sort by</span>
            <input
              placeholder="Default"
              className=" border px-4 py-2 border-gray-300 bg-white rounded text-sm text-gray-700 w-[100px]"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
