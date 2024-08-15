"use client";

import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import NavbarCardItem from "./NavbarCardItem";
import { useQuery } from "react-query";
import { getCartCount } from "@/hooks/frontend/cartApi";
import { getCartHash } from "@/hooks/frontend/useCart";

const CartContainer = () => {
  const { data: cart } = useQuery("cart_count", () =>
    getCartCount({
      temp_user_id: getCartHash(),
    })
  );

  return (
    <div className="relative group transition-all">
      <button className="lg:flex hidden p-4">
        <Link href="/cart">
          <div
            className="py-4 px-1 relative border-2 border-transparent rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Cart"
          >
            <LuShoppingCart size={30} />
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-[1px] border-2 border-white rounded-full text-base font-semibold leading-4 bg-white text-[#F4580E]">
                {cart?.data?.count}
              </div>
            </span>
          </div>
        </Link>
      </button>
      <button className="lg:hidden p-4">
        <Link href="/cart">
          <div
            className="py-4 px-1 relative border-2 border-transparent rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Cart"
          >
            <LuShoppingCart size={18} />
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1 py-[1px] border-2 border-white rounded-full text-base font-semibold leading-2 bg-white text-[#F4580E]">
                {cart?.data?.count}
              </div>
            </span>
          </div>
        </Link>
      </button>
      {/* <NavbarCardItem cartItems={cart?.data?.items} /> */}
    </div>
  );
};

export default CartContainer;
