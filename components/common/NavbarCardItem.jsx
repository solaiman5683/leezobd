import Image from "next/image";

import { Button } from "keep-react";
import Link from "next/link";
import img from "/public/image/product/2.jpeg";

import img2 from "/public/image/product/5.jpeg";

const CardContent = ({ cartItems }) => {
  return (
    <div className="group-hover:block border transition-all hidden w-[400px] absolute z-10 -right-3 rounded-lg top-[30px] bg-white text-gray-800 shadow-2xl clip-path-custom px-2 pt-2">
      <p className="pt-14 pb-4 px-4 text-gray-400">Recently Added Products</p>
      <div className="overflow-y-auto h-[200px]">
        {cartItems &&
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-2 hover:bg-gray-100 transition-all px-4 py-2"
            >
              {/* <div className="min-w-12 h-12 border">
                <Image
                  className="w-full h-full object-cover"
                  src={item?.product?.}
                  alt="img"
                />
              </div> */}
              <h2 className="h-[30px] truncate font-semibold">
                {item?.product?.name}
              </h2>
              <p className="text-primaryColor font-medium pl-6">$40.20</p>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <p className="text-sm">2 More Products In Cart</p>
        <Link href="/cart">
          <Button size="xs" color="error" className="bg-primaryColor">
            View My Shopping Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardContent;
