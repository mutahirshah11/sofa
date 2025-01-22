"use client";
import React from 'react';
import { useCart } from './Provider';

type Props = {
  productId: string;
  initialStock: number;
};

const StockDisplay: React.FC<Props> = ({ productId, initialStock }) => {
  const { getStock } = useCart();
  const currentStock = getStock(productId) || initialStock;

  return (
    <p className="text-sm text-gray-600 ml-10">
      Stock: {currentStock}
    </p>
  );
};

export default StockDisplay;

