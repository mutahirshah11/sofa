"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import QuantityControl from "@/app/components/PlusMinus";
import { useCart } from "./Provider";

const CartSlider: React.FC = () => {
  const { cart: cartItems, addToCart, decreaseFromCart, removeFromCart, getStock } = useCart();
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  const updateQuantity = (id: string, operation: "increase" | "decrease") => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      if (operation === "increase" && getStock(id) > 0) {
        addToCart({ ...item, quantity: item.quantity + 1 });
      } else if (operation === "decrease") {
        if (item.quantity > 1) {
          decreaseFromCart(id);
        } else {
          removeFromCart(id);
        }
      }
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex gap-1 lg:gap-1.5 mt-2.5 items-center">
            <Image
              src="/images/cart.png"
              alt="cart icon"
              width={30}
              height={30}
              className="cursor-pointer w-[20px] md:w-[25px] lg:w-[30px]"
            />
            <p className="bg-red-400 rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-[10px] lg:text-[12px] text-white">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </p>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-white w-[300px] sm:w-[400px] p-5 flex flex-col">
          <h2 className="text-2xl font-bold mb-5">Shopping Cart</h2>
          <hr className="w-full mb-4" />

          {/* Scrollable area for cart items */}
          <div className="flex-1 overflow-y-auto max-h-[400px] pr-2">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="flex items-center gap-4 pb-4" key={item.id}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p>
                      {item.quantity} x{" "}
                      <span className="text-yellow-600 font-semibold text-sm">
                        ${item.price?.toFixed(2) || "0.00"}
                      </span>
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <QuantityControl
                      quantity={item.quantity}
                      onIncrease={() => updateQuantity(item.id, "increase")}
                      onDecrease={() => updateQuantity(item.id, "decrease")}
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-gray-500 hover:text-red-500"
                    >
                      ✖
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">You have no items in your Cart.</p>
            )}
          </div>

          {/* Subtotal and buttons */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4 text-lg font-bold">
              <span>Subtotal</span>
              <span className="text-yellow-600">Rs.{subtotal.toFixed(2)}</span>
            </div>
            <hr className="w-full mb-4" />

            <div className="flex justify-center items-center gap-3">
              <Link
                href="/Cart"
                className="w-[145px] h-[36px] border text-center text-[15px] border-gray-400 text-gray-400 rounded-xl hover:bg-gray-100"
              >
                <p className="mt-1.5">View Cart</p>
              </Link>
              <Link
                href="/Checkout"
                className="w-[145px] h-[36px] border text-center text-[15px] border-gray-400 text-gray-400 rounded-xl hover:bg-gray-100"
              >
                <p className="mt-1.5">Checkout</p>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSlider;
