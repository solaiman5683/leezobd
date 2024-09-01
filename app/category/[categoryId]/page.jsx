"use client";

import ChatBox from "@/components/common/chatbox";
import CategoriesListing from "@/components/main/categories-listing";
import ProductItem from "@/components/main/product-item";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsCart2 } from "react-icons/bs";
import CategoryProducts from "../components/category-products";
import GadgetsBestsellers from "../components/gadgets-bestseller";
import MallSection from "../components/mall-section";
import ShopByBrandSection from "../components/shop-by-brands";
import {
  getCategories,
  getSpecificCategories,
} from "@/hooks/frontend/categoryApi";
import { useQuery } from "react-query";
import { getAllProduct } from "@/hooks/frontend/productApi";

const Category = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const { data: get_specific_categories } = useQuery(
    `get_specific_categories_${categoryId}`,
    () => getSpecificCategories(Number(categoryId))
  );

  console.log(get_specific_categories);

  const { data: categories, isLoading } = useQuery("categories", () =>
    getCategories()
  );

  const { data: all_product, isLoading: loading } = useQuery(
    "all_product",
    () => getAllProduct()
  );

  return (
    <>
      <div className="hidden sm:block">
        <div className="container p-6 space-y-6">
          {/* <MallSection /> */}
          {/* <ShopByBrandSection /> */}
          <CategoryProducts id={categoryId} />
        </div>
        {/* <CategoriesListing /> */}
        <ChatBox />
      </div>

      <div className="sm:hidden space-y-3">
        <div className="bg-white flex justify-between items-center gap-5 py-3 px-4 shadow text-[#4F97A5]">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <div className="text-orange-400 w-full text-center p-1 px-2 gap-2 flex items-center justify-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Category"
              className="outline-none text-[#4F97A5] text-sm placeholder:text-orange-400"
            /> */}
            All Category
          </div>
          <Link className="text-[#4F97A5]" href="/cart">
            <BsCart2 />
          </Link>
        </div>
        <ul className="flex items-center gap-5 mx-auto overflow-hidden overflow-x-visible py-3">
          {categories?.data?.data?.map((category) => (
            <li
              key={category?.id}
              className={`${
                category?.id === Number(categoryId) ? "text-[#4F97A5]" : ""
              } flex-shrink-0`}
            >
              <Link
                href={`/category/${category?.id}`}
                className="ml-3 py-3 font-bold"
              >
                {category?.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* <MallSection />
        <GadgetsBestsellers />
        <ShopByBrandSection /> */}
        {/* <CategoryProducts /> */}
        <div className="">
          <div>
            {get_specific_categories?.data?.data.length === 0 ? (
              <h1 className="text-center text-xl">No Product found!</h1>
            ) : (
              <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-6 gap-4 bg-slate-100 px-2 py-3">
                {get_specific_categories?.data?.data.map((product) => (
                  <ProductItem
                    key={product?.id}
                    id={product?.id}
                    title={product?.name}
                    link={product?.links?.details}
                    image={product?.thumbnail_image}
                    discount={product?.discount}
                    cashback={10}
                    price={product?.main_price}
                    sold={product?.sales}
                  />
                ))}
              </div>
            )}
          </div>
          {get_specific_categories?.data?.data.length === 0 ? (
            " "
          ) : (
            <div className="flex justify-center py-8">
              <button className="bg-white py-4 px-8 border">Load More</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
