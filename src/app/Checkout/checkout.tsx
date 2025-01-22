"use client"
import React, { useState, type ChangeEvent, type FormEvent } from "react"
import { useCart } from "@/app/components/Provider"


interface BillingField {
  name: string
  label: string
  type: string
  required?: boolean
  options?: string[]
  placeholder?: string
}

const billingFields: BillingField[] = [
  { name: "company", label: "Company Name (Optional)", type: "text", required: false },
  { 
    name: "country", 
    label: "Country / Region", 
    type: "select", 
    options: ["Pakistan", "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "UAE", "Saudi Arabia"],  
    required: true 
  },
  { name: "address", label: "Street Address", type: "text", required: true },
  { name: "city", label: "Town / City", type: "text", required: true },
  { name: "province", label: "Province", type: "text", required: true }, // Changed to text input
  { name: "zipCode", label: "ZIP Code", type: "text", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "additionalInfo", label: "Additional Information", type: "textarea", required: false },
]


interface FormData {
  [key: string]: string
}

export default function CheckoutForm() {
  const { cart: cartItems, getTotal } = useCart()
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    company: "",
    country: "Pakistan",
    address: "",
    city: "",
    province: "Western Province",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const orderData = {
        name: `${formData.first_name} ${formData.last_name}`,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.province}, ${formData.zipCode}, ${formData.country}`,
        company: formData.company || "",
        additionalInfo: formData.additionalInfo || "",
        totalAmount: getTotal(),
        products: cartItems.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      }

      const response = await fetch('/api/checkout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to submit order")
      }

      window.location.href = '../Success';
      // Clear cart and maybe redirect to success page
    } catch (err) {
      console.error("Error submitting order:", err)
      alert("Error placing order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-28 xl:gap-44">
        <div className="flex flex-col justify-center items-start my-20 ">
          <h1 className="text-[30px] font-bold mb-10">Billing details</h1>

          <form id="checkout-form" onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-3 mb-10">
              <div className="flex flex-col">
                <label className="text-[13px] md:text-[15px] font-semibold mb-2">First Name *</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="px-5 py-3 w-[120px] md:w-[175px] lg:h-[60px] border-[2px] border-gray-500 rounded-md mt-4"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] md:text-[15px] font-semibold mb-2">Last Name *</label>
                <input
                  type="text"
                  name="last_name"
                  required
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="px-5 py-3 w-[120px] md:w-[175px] lg:h-[60px] border-[2px] border-gray-500 rounded-md mt-4"
                />
              </div>
            </div>

            <div className="grid gap-10">
              {billingFields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-[13px] lg:text-[15px] font-semibold mb-2">
                    {field.label} {field.required && "*"}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="px-5 py-3 w-[260px] md:w-[350px] lg:h-[60px] border-[2px] border-gray-500 rounded-md mt-4"
                    >
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="px-5 py-3 w-[260px] md:w-[350px] h-[120px] border-[2px] border-gray-500 rounded-md mt-4"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="px-5 py-3 w-[260px] md:w-[350px] lg:h-[60px] border-[2px] border-gray-500 rounded-md mt-4"
                    />
                  )}
                </div>
              ))}
            </div>
          </form>
        </div>

        <div className="max-w-[480px] lg:mt-24 px-4 py-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Product</h1>
            <h1 className="text-lg font-bold">Subtotal</h1>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p className="text-sm">
                {item.name} x {item.quantity}
              </p>
              <p className="text-sm">Rs. {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-6 border-b pb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">Rs. {getTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold text-[#B88E2F]">Rs. {getTotal().toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-bold mb-2 flex items-center">
              <span className="w-3 h-3 rounded-full bg-black inline-block mr-2"></span>
              Cash On Delivery
            </h2>
            <p className="text-sm text-gray-400 mb-4">Pay with cash upon delivery.</p>
            <label className="flex items-center gap-2 mb-3">
              <input
                type="radio"
                name="payment_method"
                value="cod"
                checked
                onChange={handleInputChange}
                className="w-4 h-4 text-gray-400"
              />
              <span className="text-sm text-gray-400">Cash On Delivery</span>
            </label>
          </div>

          <p className="text-sm text-gray-600 mt-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
            <span className="font-semibold text-gray-600">privacy policy</span>.
          </p>

          <div className="mt-6">
            <button
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="bg-yellow-500 px-8 py-3 rounded-md text-white font-semibold w-full disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}