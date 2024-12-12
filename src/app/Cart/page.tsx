import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";



const CartPage = () => {
  return (
    <div>
          <Navbar1 />
          <Banner title="My Account" subtitle="Home" breadcrumb="My account" />
          <FreeDelivery />
    </div>
  )
}

export default CartPage