/* eslint-disable @next/next/no-img-element */
import { LineProgress } from "keep-react";
import Image from "next/image";
import Link from "next/link";

const FlashSaleProduct = ({ flash }) => {

  return (
    <div className="flex lg:flex-col gap-2 p-2 bg-white ">
      <div className="relative min-w-max z-1">
        <Image
          src={flash?.thumbnail_image}
          alt=""
          width={200}
          height={200}
          className="lg:w-full w-32 h-auto object-cover"
        />
        {/* <p className="absolute top-0 right-0 px-2 bg-orange-200 font-bold text-red-600 text-xs">
                    {flash?.discount}
                </p> */}
      </div>
      <div className="p-4 lg:space-y-2 w-full ">
        <Link href={`/products/${flash?.id}`}>
          <p className="lg:text-xl text-sm lg:mb-4 mb-1 hover:underline">
            {flash?.name}
          </p>
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-xs line-through text-gray-500">
            {flash?.stroked_price
            }
          </p>

          <p className="px-3 relative bg-orange-200 text-orange-600 py-0">
            <svg
              width="10"
              height="16"
              className="absolute h-full scale-150 -left-1 top-0"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z"
                fill="url(#paint0_linear_2216_10611)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2216_10611"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F97A5"></stop>
                  <stop offset="1" stopColor="#FF7337"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs">{flash?.discount}</span>
          </p>
        </div>
        <div className="flex items-end gap-2">
          <div className="w-full">
            <p className="lg:text-lg font-semibold text-red-500">
              {flash?.main_price}
            </p>

            <div className="relative z-1 mt-2">
              <LineProgress
                linebg="bg-error-100"
                progress={55}
                size="2xl"
                className="bg-gradient-to-r from-orange-400 to-red-500"
              ></LineProgress>
              <div className="absolute w-full top-0 left-0 h-full flex items-center justify-center">
                <p className="uppercase text-xs text-center text-white lg:font-bold">
                  Only 7 left
                </p>
              </div>
              {/* <div className="absolute -top-2 left-0">
                <img src="/image/icon/fire.png" className="w-6 h-7" alt="" />
              </div> */}
            </div>
          </div>
          <div className="min-w-max mb-2">
            <Link href="/cart" className="bg-orange-500 text-white rounded p-2">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProduct;
