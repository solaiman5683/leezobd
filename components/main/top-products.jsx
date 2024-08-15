/* eslint-disable @next/next/no-img-element */
"use client";
import { getBestSellingProducts } from "@/hooks/frontend/productApi";
import Image from "next/image";
import Link from "next/link";
import { FcRating } from "react-icons/fc";
import { useQuery } from "react-query";
import Slider from "react-slick";

const TopProducts = () => {
  const { data: top_products, isLoading } = useQuery(
    "best_selling_products",
    () => getBestSellingProducts()
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    rows: 1,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:my-8 my-3 bg-white">
      <div className="lg:p-6 p-3 text-gray-700 border flex items-center justify-between">
        {/* <p className="lg:px-4 lg:text-lg font-bold text-red-500 hover:underline flex items-center gap-1">
          Top Product
        </p> */}
         <p className="text-gray-700 flex items-center gap-2">
          <FcRating size={22} />
          Top Product
        </p>
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
      <div>
        {/* <Slider {...settings}> */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-1 bg-[#F5F5F5] md:bg-white p-2">
          {top_products?.data?.data?.map((product) => (
            <TopProduct
              key={product?.id}
              image={product?.thumbnail_image}
              title={product?.name}
              totalSale={product?.sales}
              link={`/products/${product?.id}`}
            />
          ))}
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

const TopProduct = ({ image, title, totalSale, link }) => {
  return (
    <Link href={link} className="lg:px-4 lg:pt-4 border m-1  rounded-md overflow-hidden">
      <div className="relative">
        <div className="h-[180px]">
          <img src={image}  alt={title} className="w-full h-full object-center" />
        </div>
        <div className="absolute top-0 left-0 lg:p-2">
          <Image
            src="/image/badge/top.png"
            alt=""
            width={30}
            height={30}
            className="lg:w-[30px] lg:h-auto w-[20px] h-auto"
          />
        </div>
        <p className="absolute bottom-0 left-0 p-3 bg-gray-200 text-gray-600 bg-opacity-50 w-full text-center lg:block hidden">
          Monthly Sale {totalSale}
        </p>
      </div>
      <div className="lg:bg-white bg-white px-3 pt-3 h-[80px]">
        <p className=" text-gray-700 line-clamp-2 lg:font-bold sm:text-base text-sm bg-opacity-50 w-full">
          {title}
        </p>
        <p className=" text-gray-600 lg:hidden text-[10px]">
          Monthly Sale {totalSale}
        </p>
      </div>
    </Link>
  );
};

export default TopProducts;
