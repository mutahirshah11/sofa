"use client";
import React from "react";

type QuantityControlProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={onDecrease} className="text-gray-500 hover:text-red-500">-</button>
      <span>{quantity}</span>
      <button onClick={onIncrease} className="text-gray-500 hover:text-red-500">+</button>
    </div>
  );
};

export default QuantityControl;
