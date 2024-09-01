/* eslint-disable @next/next/no-img-element */
"use client";
import { getAllFlashDeals } from "@/hooks/frontend/productApi";
import FlipCountdown from "@rumess/react-flip-countdown";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

const tabs = [
  {
    title: "Top Picks",
  },
  {
    title: "50% off Flash Deals",
  },
  {
    title: "$2 Shop",
  },
  {
    title: "Electronics",
  },
  {
    title: "Home Appliances",
  },
  {
    title: "Food & Beverages",
  },
  {
    title: "$2 Shop",
  },
  {
    title: "Electronics",
  },
];

const FlashCategoryTabMobile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { id } = useParams();

  const { data: flash_deals, isLoading } = useQuery("getAllFlashDeals", () =>
    getAllFlashDeals()
  );

  const current_flash_deal = flash_deals?.data?.data?.filter(
    (flash) => flash?.id == id
  );

  return (
    <>
      <div className="overflow-x-auto bg-white border p-2 mt-2 sticky top-[50px] z-10">
        <div className="flex gap-2 flex-nowrap">
          {flash_deals?.data?.data.map((item, i) => (
            <Link
              href={`/flash-sale/${item?.id}`}
              key={i}
              onClick={() => setActiveTab(i)}
              className={`p-2 text-center cursor-pointer w-[500px] border ${
                item?.id == id
                  ? "border-orange-600 text-orange-600 font-bold"
                  : "border-white"
              } text-gray-500 flex flex-col items-center justify-center gap-2`}
            >
              <img src={item?.banner} className="h-10 w-auto" alt="" />
              <p className="text-xs w-[80px]">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {current_flash_deal?.[0] && (
        <div className="flex items-center justify-end gap-2 p-2">
          <p className="text-xs">Ends in</p>
          <div>
            <FlipCountdown
              endAt={new Date(current_flash_deal[0]?.date)} // Date/Time
              theme="dark"
              titlePosition="bottom"
              size="extra-small"
              endAtZero
              hideYear
              hideMonth
              hideDay
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FlashCategoryTabMobile;
