"use client";
import { getAllFlashDeals } from "@/hooks/frontend/productApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";
import { Divider } from "rsuite";

const tabs = [
  {
    title: "Top Picks",
  },
  {
    title: "Raya Deals",
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
];

const FlashCategoryTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { id } = useParams();

  const { data: flash_deals, isLoading } = useQuery("getAllFlashDeals", () =>
    getAllFlashDeals()
  );

  return (
    <div className="container flex bg-white">
      {flash_deals?.data?.data.map((item, i) => (
        <Link
          href={`/flash-sale/${item?.id}`}
          key={i}
          className={`p-3 text-center cursor-pointer w-full border-b-4 ${
            item?.id == id
              ? "border-orange-600 text-orange-600 font-bold"
              : "border-white"
          } text-gray-500`}
        >
          <div>
            <p className="text-sm">{item.title}</p>
          </div>
        </Link>
      ))}
      <div
        className={`p-3 text-center cursor-pointer w-full text-gray-500 border-l-2 border-dotted`}
      >
        <p className="text-sm">More</p>
      </div>
    </div>
  );
};

export default FlashCategoryTab;
