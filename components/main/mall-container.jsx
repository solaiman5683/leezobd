/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Slider from "react-slick";
// import { Carousel } from 'keep-react';
import { Carousel as MobileCarousel } from "keep-react";
import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Carousel } from "rsuite";
import { getTopBrands } from "@/hooks/frontend/brandApi";
import { useQuery } from "react-query";
import { PiStorefrontThin } from "react-icons/pi";

const MallContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: brands, isLoading } = useQuery("brands", () => getTopBrands());

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    rows: 2,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 1,
          arrows: false,
        },
      },
    ],
  };
  
  return (
    <div className="w-full lg:my-8 my-3 bg-white">
      {brands?.data?.data?.length > 0 && (
        <p className="lg:p-6 p-3 lg:text-lg text-gray-700 border flex items-center gap-1">
          <PiStorefrontThin size={22} />
          Top Brands
        </p>
        // <p className="text-gray-700 flex items-center gap-2">
        //     <PiStorefrontThin size={22} />
        //     Top Brands
        //   </p>
      )}
      {brands?.data?.data?.map((brand, index) => (
        <div key={brand.id}>
          <div className="lg:p-6 p-3 text-gray-700 border flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <p className="lg:px-4 border-r lg:text-lg font-bold text-red-500 hover:underline flex items-center gap-1">
                {brand?.name}
              </p>
              <div className="lg:flex hidden gap-4">
                <p className="lg:text-sm text-xs text-red-500">
                  15-Day Return*
                </p>
                <p className="lg:text-sm text-xs text-red-500">
                  100% Authentic
                </p>
                <p className="lg:text-sm text-xs text-red-500">Free Shipping</p>
              </div>
            </div>
            <div>
              <Link
                href="/top-products"
                className="text-red-500 hover:underline flex items-center gap-1"
              >
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:hidden flex justify-between gap-4 p-2">
            <p className="lg:text-sm text-xs text-red-500">15-Day Return*</p>
            <p className="lg:text-sm text-xs text-red-500">100% Authentic</p>
            <p className="lg:text-sm text-xs text-red-500">Free Shipping</p>
          </div>
          <div className="grid lg:grid-cols-7 grid-cols-1 items-center lg:p-4 p-2">
            <div className="lg:col-span-2 relative group lg:block hidden">
              <Carousel
                autoplay
                autoplayInterval={3000}
                activeIndex={activeIndex}
                shape="bar"
                onSelect={(index) => {
                  setActiveIndex(index);
                }}
                className="h-full "
              >
                <Image
                  width={1000}
                  height={1000}
                  src={brand?.logo}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* <Image
                  width={1000}
                  height={1000}
                  src="/image/mall/2.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="/image/mall/3.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                /> */}
              </Carousel>

              <div className="absolute h-full w-full top-0 left-0 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-gray-400 bg-opacity-50 py-4 px-2"
                  onClick={() =>
                    setActiveIndex(activeIndex !== 0 ? activeIndex - 1 : 2)
                  }
                >
                  <FaAngleLeft size={25} />
                </button>
                <button
                  className="bg-gray-400 bg-opacity-50 py-4 px-2"
                  onClick={() =>
                    setActiveIndex(activeIndex !== 2 ? activeIndex + 1 : 0)
                  }
                >
                  <FaAngleRight size={25} />
                </button>
              </div>
            </div>
            <div className="block lg:hidden">
              {/* <MobileCarousel
                slideInterval={5000}
                showControls={false}
                indicators={true}
                className="h-[120px]"
              > */}
              {/* <Image
                  width={1000}
                  height={1000}
                  src={brand?.logo}
                  alt=""
                  className="w-full h-full"
                /> */}
              {/* <Image
                  width={1000}
                  height={1000}
                  src="/image/mall/phone/2.jpg"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="/image/mall/phone/3.jpg"
                  alt=""
                  className="w-full h-full"
                /> */}
              {/* </MobileCarousel> */}
            </div>
            <div className="lg:col-span-5">
              {/* <Slider {...settings}> */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
                {brand?.products?.data?.map((product) => (
                  <MallItem
                    image={product?.image}
                    discount={product?.discount_percentage}
                    link={`/products/${product?.id}`}
                    key={product?.id}
                  />
                ))}
              </div>
              {/* </Slider> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const MallItem = ({ image, discount, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col gap-2 lg:p-4 my-2 mx-1 p-2 border"
    >
      <div className="h-[150px]">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-center"
        />
      </div>
      <p className="text-center lg:font-bold text-red-600 lg:text-base text-xs">
        UP TO {discount}% OFF
      </p>
    </Link>
  );
};

export default MallContainer;
