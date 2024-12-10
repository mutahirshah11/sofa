import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";
import blogpic1 from "../../../public/images/blogsection1.png";
import blogpic2 from "../../../public/images/blogsection2.png";
import blogpic3 from "../../../public/images/blogsection3.png";
import icon1 from "../../../public/images/user copy.png";
import icon2 from "../../../public/images/calender (2).png";
import icon3 from "../../../public/images/tag.png";
import Image from "next/image";
import subimage1 from "../../../public/images/sideblog1 (1).png"
import subimage2 from "../../../public/images/sideblog1 (2).png"
import subimage3 from "../../../public/images/sideblog1 (3).png"
import subimage4 from "../../../public/images/sideblog1 (4).png"
import subimage5 from "../../../public/images/sideblog1 (5).png"

const blogitems = [
  {
    picture: blogpic1,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icontext1: "Admin",
    icontext2: "14 Oct 2022",
    icontext3: "Wood",
    Heading: "Going all-in with millennial Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    ReadMore: "Read More ",
  },

  {
    picture: blogpic2,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icontext1: "Admin",
    icontext2: "14 Oct 2022",
    icontext3: "handmade",
    Heading: "Exploring new ways of decorating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    ReadMore: "Read More ",
  },

  {
    picture: blogpic3,
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icontext1: "Admin",
    icontext2: "14 Oct 2022",
    icontext3: "Wood",
    Heading: "Hand Made pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    ReadMore: "ReadMore ",
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

// Recent Posts Data
const posts = [
  { title: "Going all-in with millennial design", date: "14 Aug 2022" , image:subimage2 },
  { title: "Exploring new ways of decorating", date: "13 Aug 2022" , image:subimage3 },
  { title: "Handmade pieces that took time", date: "12 Aug 2022" , image:subimage4 },
  { title: "Modern home in Milan", date: "11 Aug 2022", image:subimage5 },
  { title: "Colorful office redesign", date: "10 Aug 2022" , image:subimage1 },
];







const Blog = () => {
  return (
    <div>
      <Navbar1 />
      <Banner title="Blog" subtitle="Home" breadcrumb="Blog" />
      
      <div className="flex flex-col xl:flex-row items-center justify-center xl:ml-20 ">
      <div className="grid lg:grid-cols-2 ">
      <div className="">
        {/* Blog posts */}
        <div className="grid grid-cols-1 gap-14  my-20 xl:my-28  ">
          {blogitems.map((item, index) => (
            <div
              key={index}
              className=""
            >
              <Image
                src={item.picture}
                alt={item.Heading}
                className="w-[500px] md:w-[600px] xl:w-[800px]"
                width={500}
                height={300}
              />
              <div className="p-4">
                <div className="flex items-center space-x-3 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Image src={item.icon1} alt="user" width={16} height={16} className=" xl:size-5  "/>
                    <span className="ml-1 xl:text-[15px] xl:mt-1 xl:mr-3 ">{item.icontext1}</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={item.icon2}
                      alt="calendar"
                      width={16}
                      height={16}
                      className=" xl:size-5 "
                    />
                    <span className="ml-1 xl:text-[15px] xl:mt-1 xl:mr-3 ">{item.icontext2}</span>
                  </div>
                  <div className="flex items-center">
                    <Image src={item.icon3} alt="tag" width={16} height={16} className=" xl:size-5 " />
                    <span className="ml-1 xl:text-[15px] xl:mt-1 xl:mr-3 ">{item.icontext3}</span>
                  </div>
                </div>
                <h3 className="text-[18px] md:text-[22px] xl:text-[27px] font-[600] mt-3 text-black">
                  {item.Heading}
                </h3>
                <p className="text-gray-400 text-sm mt-2 md:text-[15px] xl:text-[14px]  mb-5 md:w-[600px] xl:w-[700px]">{item.description}</p>
                <a
                  href="#"
                  className="text-black font-[600] text-sm md:text-[17px]  underline underline-offset-[10px] "
                >
                  {item.ReadMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* side bar section */}

      <div className=" bg-white flex flex-col justify-center lg:justify-start lg:mt-24 items-center">
      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder=""
          className="w-[250px] p-2 border border-gray-300 rounded-lg "
        />
      </div>

      {/* Categories Section */}
      <div className="mb-8  ">
        <h3 className="text-lg font-semibold mb-5 mt-5">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between gap-36 text-gray-700">
              <span className="mb-7">{category.name}</span>
              <span className="text-gray-500">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="mb-20">
        <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li key={index} className="flex ">
              <Image src={post.image} alt="image" className="w-[50px] h-[50px]  bg-gray-200 rounded overflow-hidden"/>
                
              
              <div className="ml-4 ">
                <h4 className="text-sm font-medium w-[150px] text-gray-800">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
    
      <FreeDelivery />
    </div>
  );
};

export default Blog;
