import CheckoutForm from "./checkout"
import Banner from "@/app/components/banner"
import Navbar1 from "@/app/components/navbar1"
import FreeDelivery from "@/app/components/freeDelivery"

export default function CheckoutPage() {
  return (
    <div>
      <Navbar1 />
      <Banner title="Checkout" subtitle="Home" breadcrumb="Checkout" />
      <CheckoutForm />
      <FreeDelivery />
    </div>
  )
}

