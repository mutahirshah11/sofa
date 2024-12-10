import React from "react";
import Image from "next/image";
import pic1 from "../../../public/images/blog.png";
import pic2 from "../../../public/images/blog1.png";
import pic3 from "../../../public/images/blog2.png";
import clock from "../../../public/images/clock.png";
import calender from "../../../public/images/calender.png";
import Link from "next/link";

const Carditems = [
  {
    Image: pic3,
    text: "Going all-in with millennial design",
    Redmore: "Read More",
    clockicon: clock,
    calendericon: calender,
    time: "5 min",
    date: "12th Oct 2022",
  },

  {
    Image: pic1,
    text: "Going all-in with millennial design",
    Redmore: "Read More",
    clockicon: clock,
    calendericon: calender,
    time: "5 min",
    date: "12th Oct 2022",
  },
  {
    Image: pic2,
    text: "Going all-in with millennial design",
    Redmore: "Read More",
    clockicon: clock,
    calendericon: calender,
    time: "5 min",
    date: "12th Oct 2022",
  },
];

const Ourblogs = () => {
  return (
    <div>
      {/* Text */}
      <div className="flex flex-col justify-center items-center text-center pt-20  px-[10px]">
        <h1 className="font-bold text-[25px] md:text-[30px] xl:text-[33px] mb-3">
          Our Blogs
        </h1>
        <p className="text-[15px] xl:text-[16px] text-gray-400 mb-5">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* cards */}
      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-20">
            {Carditems.map((items, index) => (
              <Link
              href={"../Blog"}
                key={index}
                className="flex flex-col justify-center items-center gap-6 "
              >
                <Image
                  src={items.Image}
                  alt={items.text}
                  className="w-[300px] mt-10 xl:w-[330px]"
                />

                {/* text */}
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-[500] lg:text-[17px] ">{items.text}</p>
                  <p className="text-[18px] font-semibold underline mt-3  underline-offset-[14px] decoration-[2px] hover:opacity-75 cursor-pointer  ">
                    {items.Redmore}
                  </p>
                </div>

                {/* icons */}
                <div className="flex gap-5">
                  {/* clock */}
                  <div className="flex gap-2 text-[13px] items-center ">
                    <Image
                      src={items.clockicon}
                      alt="clockicon"
                      className="size-[23px] mt-[5px] "
                    />
                    <p className="">{items.time}</p>
                  </div>

                  <div className="flex gap-2 text-[13px] items-center ">
                    <Image
                      src={items.calendericon}
                      alt="calendericon"
                      className="size-5 "
                    />
                    <p className="mt-[2px]">{items.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* {view more } */}

          <div className="flex justify-center items-center py-14 pt-16">
            <p className="text-[18px] font-semibold underline  underline-offset-[14px] decoration-[2px] hover:opacity-75 cursor-pointer  ">
              View All Post
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourblogs;
