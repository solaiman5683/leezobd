"use client";
import { getCartCount } from "@/hooks/frontend/cartApi";
import { getCartHash } from "@/hooks/frontend/useCart";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { useQuery } from "react-query";

const ProductNavbarMobile = ({ product }) => {
  const [scrolled, setScrolled] = useState(false);

  const { data: cart } = useQuery("cart_count", () =>
    getCartCount({
      temp_user_id: getCartHash(),
    })
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full ${
        scrolled ? "bg-white" : "bg-transparent"
      } transition ease-in-out duration-500 z-[999999] px-4 py-2`}
    >
      <div
        className={`flex items-center justify-between ${scrolled && "hidden"}`}
      >
        <Link href={"/"}>
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-900/90 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 flex gap-3 items-center justify-center rounded-full bg-gray-900/90 text-white">
            <Link href="/cart">
              <div
                className="py-4 px-1 relative border-2 border-transparent rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute top-0 -right-2">
                  <div className="inline-flex bg-white items-center p-1 h-5 w-5 rounded-full text-base font-semibold leading-2 text-[#F4580E]">
                    {cart?.data?.count}
                  </div>
                </span>
              </div>
            </Link>
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-900/90 text-white">
            <PiDotsThreeOutlineLight size={20} />
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-between ${!scrolled && "hidden"}`}
      >
        <div className="flex items-center gap-4">
         <Link href={'/'}>
         <div className="text-[#F4580E]">
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
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </div>
         </Link>

       
        </div>

        <div className="flex items-center gap-3">
          <Link href="/cart">
            <div className="text-[#F4580E]">
              <div
                className="py-4 px-1 relative border-2 border-transparent rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Cart"
              >
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute inset-0 top-0 ml-4">
                  <div className="inline-flex items-center  border-2 border-white rounded-full text-base font-semibold leading-2 text-[#F4580E]">
                    {cart?.data?.count}
                  </div>
                </span>
              </div>
            </div>
          </Link>
          <div className="text-[#F4580E]">
            <PiDotsThreeOutlineLight size={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavbarMobile;
