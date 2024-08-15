/* eslint-disable @next/next/no-img-element */
"use client";
import { getTodayDeals } from "@/hooks/frontend/productApi";
import ProductItem from "./product-item";
import { useQuery } from "react-query";
import Link from "next/link";

const DailyDiscover = () => {
  const { data: today_deals, isLoading } = useQuery("today_deals", () =>
    getTodayDeals()
  );

  return (
    <div className="relative bg-white">
      {/* <h2 className="shadow sticky lg:top-[160px] top-0 py-4 px-4 md:px-11 bg-white border-b-2 border-red-500 text-red-500 font-semibold z-10">
        Daily Discover
      </h2> */}
      <p className="text-gray-700 flex items-center gap-2 shadow p-4  border-b-2 border-red-500 ">
        <img src="/image/icon/fire.png" className="w-6 h-7" alt="h" />
        Popular Product
      </p>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 p-4 bg-[#F5F5F5] md:bg-white">
        {today_deals?.data?.data?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.name}
            image={product.thumbnail_image}
            price={product.stroked_price}
            salePrice={product.main_price}
            discount={product.discount}
            link={`/products/${product.id}`}
          />
        ))}
      </div>

      <div className="flex justify-center pb-6 pt-4 bg-[#F5F5F5]">
        <button className="py-4 px-8 border bg-white">Load More</button>
      </div>
    </div>
  );
};

export default DailyDiscover;
