import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";
import blogpic1 from "../../../public/images/blogsection1.png"
import blogpic2 from "../../../public/images/blogsection2.png"
import blogpic3 from "../../../public/images/blogsection3.png"
import icon1 from "../../../public/images/user.png"
import icon2 from "../../../public/images/calender (2).png"
import icon3 from "../../../public/images/tag.png"

import Image from "next/image";

const Blog = () => {
  return (
    <div>
        <Navbar1 />
        <Banner title="Blog" subtitle="Home" breadcrumb="Blog" />

        <FreeDelivery />
    </div>
  )
}

export default Blog