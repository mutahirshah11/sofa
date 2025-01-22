"use client";
import React, { useState } from "react";
import { useCart } from "./Provider";
import NotificationMessage from "./notification";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    stockInHand: number;
  };
};

const AddToCartButton = ({ product }: Props) => {
  const { addToCart, cart } = useCart();
  const [remainingStock, setRemainingStock] = useState(product.stockInHand);
  const [notification, setNotification] = useState<string | null>(null); // New state for notification

  const handleAddToCart = () => {
    // Check if there's enough stock available to add
    if (remainingStock > 0) {
      addToCart({ ...product, quantity: 1 });
      setRemainingStock(remainingStock - 1); // Decrease stock by 1
      setNotification('Product added to cart');
    }
  };

  const itemInCart = cart.find(item => item.id === product.id);

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="ml-4 px-6 py-2 text-black border-[1px] border-black rounded-lg hover:bg-yellow-200 hover:border-yellow-300"
      >
        {itemInCart ? `In Cart (${itemInCart.quantity})` : 'Add to Cart'}
      </button>

      {/* Show notification message */}
      {notification && <NotificationMessage message={notification} onClose={() => setNotification(null)} />}
    </div>
  );
};

export default AddToCartButton;
