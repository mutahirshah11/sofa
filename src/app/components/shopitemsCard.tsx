"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import ShopitemsProps from "./shopItemsprops";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function ShopitemsCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        id ,
        name,
        price,
        "image": image.asset->url,
      }`;
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center lg:px-10 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
          {products.map((item, index) => (
            <div key={index}>
              <ShopitemsProps
                id={`./MainPage/${item.id}`}
                name={item.name}
                price={item.price}
                image={urlFor(item.image).url()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
