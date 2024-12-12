import React from "react";
import Banner from "@/app/components/banner";
import Navbar1 from "../components/navbar1";
import FreeDelivery from "../components/freeDelivery";



const CheckoutPage = () => {
  return (
    <div>
           <Navbar1 />
          <Banner title="Checkout" subtitle="Home" breadcrumb="Checkout" />
          <FreeDelivery />
        
    </div>
  )
}

export default CheckoutPage