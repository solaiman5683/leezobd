import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChatSquare } from "react-icons/bs";
import { HiHome } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";

const FooterMobile = () => {
  const pathname = usePathname();
  const validPaths = [
    "/",
    "/about",
    "/privacy-policy",
    "/term-and-condition",
    "/contact-us",
  ];
  return (
    <div>
      {validPaths.includes(pathname) && (
        <div className="lg:hidden">
          <div className="p-3 shadow-2xl bg-[#4F97A5] text-white fixed bottom-0 w-full z-50">
            <ul className="flex justify-between items-center">
              <Link href={"/"}>
                <li className="flex-1 flex items-center justify-center flex-col">
                  <HiHome size={25} />
                  Home
                </li>
              </Link>
              <p className="border h-[40px]" />
              <Link href={"/top-products"}>
                <li className="flex-1 flex items-center justify-center flex-col">
                  <PiShoppingCart size={25} />
                  Shop
                </li>
              </Link>
              <p className="border h-[40px]" />
              <Link href={"/category/1"}>
                <li className="flex-1 flex items-center justify-center flex-col">
                  <MdOutlineCategory size={27} />
                  Category
                </li>
              </Link>
              <p className="border h-[40px]" />
              <a target="_blank" href="https://wa.me/8801938111138">
                <li className="flex-1 flex items-center justify-center flex-col">
                  <BsChatSquare size={20} />
                  Live Chat
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterMobile;
