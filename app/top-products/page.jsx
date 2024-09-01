/* eslint-disable @next/next/no-img-element */
"use client";
import FlashCategoryTabMobile from "@/components/flash-sale/flash-category-mobile";
import FlashProductContainer from "@/components/flash-sale/flash-product-container";
import { Breadcrumb } from "keep-react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiShoppingBagOpen } from "react-icons/pi";

const TopProductsPage = () => {
  return (
    <>
      <div className="hidden sm:block">
        <div className="bg-gray-100 relative space-y-6 py-6">
          {/* <FlashCategoryTab /> */}
          <p className="container text-3xl font-semibold pl-4">Top Products</p>
          <FlashProductContainer />
        </div>
        {/* <div className="bg-white border-t-4 border-orange-500">
          <div className="container py-8">
            <Breadcrumb
              icon={
                <Link href="/" className="text-xs underline">
                  Homepage
                </Link>
              }
              className="max-w-full flex-wrap gap-0.5"
            >
              <Breadcrumb.Item className="min-w-max text-xs">
                Flash Sale
              </Breadcrumb.Item>
            </Breadcrumb>

            
          </div>
        </div> */}
      </div>

      <div className="lg:hidden bg-gray-100 min-h-screen space-y-3">
        <div className="sticky top-0 left-0 w-full bg-white border-b text-orange-600 p-4 z-10">
          <div className="flex justify-between">
            <Link href="/">
              <FaArrowLeftLong />
            </Link>
            <p className="font-bold tracking-wide">Top Products</p>
            {/* <img src="/image/flash.png" className="w-28" alt="" /> */}
            <div></div>
          </div>
        </div>
        {/* <PromotionTabMobile /> */}
        <FlashCategoryTabMobile />

        <FlashProductContainer />

        <div className="py-8"></div>
        <div className="fixed bottom-0 left-0 w-full bg-white p-2 border-t">
          <div className="flex justify-around">
            <Link
              href="/top-products"
              className="w-full flex flex-col items-center gap-1"
            >
              <img
                src={`/image/icon/flash-sale/1.png`}
                className="h-5 w-auto"
                alt=""
              />
              <p className="text-xs text-orange-600">Top Products</p>
            </Link>
            <Link
              href="/flash-sale"
              className="w-full flex flex-col items-center gap-1"
            >
              <PiShoppingBagOpen size={22} />
              <p className="text-xs">Flash Deals</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProductsPage;
