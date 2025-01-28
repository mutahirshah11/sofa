import React from "react";
import Image from "next/image";
import banner from "../../../public/images/banner.png";
import Logo from "../../../public/images/icon.png";

interface BannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <div>
      <div>
        <div className="animate-fadeIn">
          {/* Background Image */}
          <div className="relative">
            <Image src={banner} alt="banner" className="w-full" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col justify-center items-center">
                {/* Logo */}
                <Image src={Logo} alt="logo" className="size-6 md:size-8 lg:size-20" />

                {/* Title */}
                <p className="font-semibold text-[15px] md:text-[25px] lg:text-[40px]">
                  {title}
                </p>

                {/* Subtitle */}
                <p className="text-[10px] md:text-[16px] lg:text-[18px] font-[500]">
                  {subtitle} &gt;{" "}
                  <span className="font-[300]">{breadcrumb}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
