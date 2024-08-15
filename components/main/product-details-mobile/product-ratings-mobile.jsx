import { getProductReview } from "@/hooks/frontend/productApi";
import { Avatar } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useQuery } from "react-query";
import { Rate } from "rsuite";

const ProductRatingsMobile = ({ id }) => {
  const { data } = useQuery("get_product_review", () => getProductReview(id));

  return (
    <div className="bg-white p-2">
      <div className="border-b p-2">
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm text-gray-700">Product Ratings</p>
            <div className="flex items-center gap-2 my-2 text-xs">
              <Rate
                id="ratings"
                value={4.5}
                readOnly
                allowHalf
                color="orange"
                size="xs"
              />
              <span className="text-orange-600">4.4/5</span>
              <span className="text-gray-400">(18.2k reviews)</span>
            </div>
          </div>
          <Link href="/" className="flex items-center text-orange-600 text-xs">
            See All
            <FaChevronRight />
          </Link>
        </div>
        <div className="flex gap-2 text-xs flex-wrap">
          <button className="bg-gray-100 text-gray-600 px-2 py-1">
            Quality Material (6)
          </button>
          <button className="bg-gray-100 text-gray-600 px-2 py-1">
            Good Quality (4)
          </button>
          <button className="bg-gray-100 text-gray-600 px-2 py-1">
            Love the color (5)
          </button>
        </div>
      </div>
      <div className="my-3">
        <ReviewItem />
        <ReviewItem />
      </div>
      <div className="p-1 text-center">
        <Link href={`/products/1/ratings`} className="text-orange-600">
          See All Reviews (1.5k) {">"}
        </Link>
      </div>
    </div>
  );
};

const ReviewItem = () => {
  return (
    <div className="flex gap-2 border-b py-3">
      <div className="lg:hidden">
        <Avatar size="sm" />
      </div>
      <div className="lg:block hidden">
        <Avatar size="xl" />
      </div>
      <div>
        <p className="text-sm lg:text-lexnl">John Doe</p>
        <Rate
          id="ratings-user"
          value={4.5}
          readOnly
          allowHalf
          color="orange"
          size="xs"
        />
        <p className="text-xs text-gray-400">Variations: c4-TEA</p>
        <p className="text-sm text-gray-400">
          Material Quality: <strong className="text-gray-700">Good</strong>
        </p>
        <p className="my-2 text-gray-600 text-sm">
          {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sint repellendus est ullam accusamus beatae obcaecati quae earum, debitis quos!".slice(
            0,
            45
          )}{" "}
          ...{" "}
          <span className="cursor-pointer" onClick={() => setShowDetails(true)}>
            See More
          </span>
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Image
            src="/image/product/shoe1.jpeg"
            alt=""
            width={200}
            height={200}
            className="h-26 w-full object-cover"
          />
          <Image
            src="/image/product/shoe4.jpeg"
            alt=""
            width={200}
            height={200}
            className="h-26 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductRatingsMobile;
