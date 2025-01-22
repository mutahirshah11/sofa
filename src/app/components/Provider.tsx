"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define types for Cart and Product
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  stockInHand: number;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  decreaseFromCart: (id: string) => void;
  updateStock: (id: string, newStock: number) => void;
  getStock: (id: string) => number;
  getTotal: () => number; // ✅ Added getTotal
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [stockMap, setStockMap] = useState<{ [key: string]: number }>({});

  // **Load cart from localStorage on mount**
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // **Save cart to localStorage whenever it updates**
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    updateStock(product.id, (stockMap[product.id] || product.stockInHand) - 1);
  };

  const removeFromCart = (id: string) => {
    const removedItem = cart.find(item => item.id === id);
    if (removedItem) {
      updateStock(id, (stockMap[id] || removedItem.stockInHand) + removedItem.quantity);
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const decreaseFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: Math.max(0, cartItem.quantity - 1) } : cartItem
      ).filter(item => item.quantity > 0)
    );
    updateStock(id, (stockMap[id] || 0) + 1);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const currentItem = cart.find(item => item.id === id);
    if (currentItem) {
      const stockDifference = currentItem.quantity - quantity;
      updateStock(id, (stockMap[id] || currentItem.stockInHand) + stockDifference);
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const updateStock = (id: string, newStock: number) => {
    setStockMap(prevStockMap => ({
      ...prevStockMap,
      [id]: Math.max(0, newStock)
    }));
  };

  const getStock = (id: string) => {
    return stockMap[id] !== undefined ? stockMap[id] : 0;
  };

  // ✅ Added getTotal function
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, decreaseFromCart, updateStock, getStock, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
