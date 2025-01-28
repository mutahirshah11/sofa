import React from 'react';
import Image from 'next/image';
import Sofa from "../../../public/images/mainWhiteSofa.png";

const Hero = () => {
  return (
    <div className="bg-[#FBEBB5] w-[auto] md:h-[450px] lg:h-[510px] h-[530px] xl:h-[600px] xl:px-5 pb-8 flex justify-center items-center    ">
      {/* Wrapper */}
      <div className="flex flex-col md:flex-row items-center  ">
        {/* Text */}
        <div className="w-[300px] xl:w-[400px] ml-10 md:mb-32 mt-10 md:mt-0 xl:ml-36 xl:mb-28  animate-bounceIn ">
          <h1 className="font-[500] text-[#000000] text-[37px] md:text-[42px] xl:text-[52px] mb-3 xl:mb-5 xl:mt-28   ">
            Rocket single seater
          </h1>
          <p className="font-semibold text-[14px] md:text-[17px]  xl:text-[20px] underline underline-offset-[16px] text-black hover:opacity-70 cursor-pointer ">
            Shop Now
          </p>
        </div>

        {/* Picture */}
        <div className="pt-0 md:pt-0  ">
          <Image src={Sofa} alt="sofa"  className="w-[300px] h-[370px] md:w-[350px] md:h-[400px] lg:w-[500px] lg:h-[600px] xl:w-[580px] xl:h-[750px] " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
