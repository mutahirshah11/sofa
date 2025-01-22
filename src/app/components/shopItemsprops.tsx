import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const ShopitemsProps = ({ id, name, price, image }: Product) => {
  return (
    <div className="bg-[FFFFFF] w-[auto] h-[auto]">
      {/* Cards */}
      <div>
        <div>
          <div>
            <Link href={id}>
              <Image src={image} alt={name} width={300} height={300} />
              <p className="font-sans text-[16px] font-semibold w-[70%] mb-2">
                {name}
              </p>
              <p className="font-semibold text-[22px]">Rs. {price}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopitemsProps;
