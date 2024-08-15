/* eslint-disable @next/next/no-img-element */
"use client";

import FlipCountdown from "@rumess/react-flip-countdown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import FlashSaleItem from "./flash-sale-item";
import { getFlashDeals } from "@/hooks/frontend/productApi";
import { useQuery } from "react-query";
import { RiLightbulbFlashLine } from "react-icons/ri";
import ProductItem from "./product-item";

const FlashSale = () => {
  const { push } = useRouter();

  const { data: flash_deals, isLoading } = useQuery("flash_deals", () =>
    getFlashDeals()
  );

  // console.log(flash_deals?.data?.data);
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
    <div className="w-full lg:my-8 my-3 bg-white md:shadow">
      <div className="lg:p-6 p-3 text-lg text-gray-700 md:border flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-gray-700 flex items-center gap-2">
            <RiLightbulbFlashLine size={22} />
            Flash Deals
          </p>
          <FlipCountdown
            endAt={"2024-12-12 01:26:58"} // Date/Time
            theme="dark"
            titlePosition="bottom"
            size="extra-small"
            endAtZero
            hideYear
            hideMonth
            hideDay
          />
        </div>
        <Link
          href="/flash-sale"
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
      <div className="cursor-pointer bg-[#F5F5F5] md:bg-white" onClick={() => push("/flash-sale")}>
        {/* {flash_deals?.data?.data?.map((item, i) => (
          <div key={item?.id}>
            <div>
              <h1 className="p-3 text-lg font-medium">{item?.title}</h1>
            </div>
            {/* <Slider {...settings}> */}
        {/* <div className="p-3 grid grid-cols-2 md:grid-cols-6 gap-3">
              {flash_deals?.data?.data?.map((flash) => (
                <ProductItem
                  key={flash?.id}
                  id={flash?.id}
                  title={flash?.name}
                  image={flash?.thumbnail_image}
                  salePrice={flash?.main_price}
                  price={flash?.stroked_price}
                />
              ))}
            </div> */}
        {/* </Slider> */}
        {/* </div> */}
        {/* ))} */}
        <div className="p-3 grid grid-cols-2 md:grid-cols-6 gap-3">
          {flash_deals?.data?.data?.map((flash) => (
            <ProductItem
              key={flash?.id}
              id={flash?.id}
              title={flash?.name}
              image={flash?.thumbnail_image}
              salePrice={flash?.main_price}
              price={flash?.stroked_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
