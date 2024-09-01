/* eslint-disable @next/next/no-img-element */
"use client";
// import { Avatar, Carousel } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import CartContainer from "./cart-container";
import SearchBox from "./search-box";
import { GrClose, GrContactInfo } from "react-icons/gr";
import { TiMinus, TiPlus } from "react-icons/ti";

import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";

import {
  MdContactSupport,
  MdLogin,
  MdLogout,
  MdPersonAddAlt1,
  MdPrivacyTip,
} from "react-icons/md";
import { RiChatPrivateFill } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";
import { removeToken, setToken } from "@/hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import { Avatar } from "keep-react";
import { BiSolidContact } from "react-icons/bi";

const NavigationMobile = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const params = useSearchParams();
  const isFlashSale = Boolean(params.get("flashSale"));
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data) {
      setToken(session.data.access_token);
    }
  }, [session.data]);

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
        <div className="sm:hidden">
          <div className="w-full p-4 pt-0 z-10 mb-2">
            <div className="flex items-center justify-between pb-2">
              <FaBars
                onClick={() => setIsSidebarMenuOpen(true)}
                fontSize={28}
                className="cursor-pointer"
              />
              <Link href="/" className="text-[28px] font-bold pl-10">
                <Image
                  src="/image/logo-white.png"
                  alt=""
                  width={150}
                  height={50}
                />
              </Link>
              <div className="flex items-center justify-center">
                <CartContainer />
                {session?.status === "authenticated" ? (
                  <Link href="/account/my-account">
                    {/* <Avatar
                      size="lg"
                      shape="circle"
                      img={session?.data?.user?.avatar_original}
                    /> */}
                    <div className="h-12 w-12 rounded-full">
                      <img
                        src={session?.data?.user?.avatar_original}
                        className="w-full h-full object-center overflow-hidden rounded-full"
                        alt=""
                      />
                    </div>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <MdLogin fontSize={28} className="cursor-pointer" />
                  </Link>
                )}
              </div>
            </div>
            <SearchBox />
            <div
              className={`fixed h-full bg-black/60 top-0 right-0 left-0 z-[9999999999999999] -translate-x-[110%] transition-transform ${
                isSidebarMenuOpen && "!translate-x-0"
              }`}
            >
              <div className="text-black bg-white flex-col absolute left-0 top-0 h-full p-6 gap-4 z-[9999999999999] min-w-[70%] flex overflow-y-scroll">
                <div className="flex items-center gap-1">
                  <GrClose
                    onClick={() => setIsSidebarMenuOpen(false)}
                    fontSize={35}
                    className="font-bold primary-color cursor-pointer "
                  />
                  <div className="bg-gray-300 h-1 w-full"></div>
                </div>

                <Link href="/" className="text-[28px] font-bold">
                  <h1>LeezoBD</h1>
                </Link>

                <ul className="shadow-md flex flex-col gap-3">
                  <Link onClick={() => setIsSidebarMenuOpen(false)} href={"/"}>
                    <li className="flex-1 px-3 flex items-center gap-2">
                      <HiHome size={22} />
                      Home
                    </li>
                  </Link>
                  <Link
                    onClick={() => setIsSidebarMenuOpen(false)}
                    href={"/about"}
                  >
                    <li className="flex-1 px-3 flex items-center gap-2">
                      <MdContactSupport size={22} />
                      About Us
                    </li>
                  </Link>
                  <Link href="/privacy-policy">
                    <li
                      onClick={() => setIsSidebarMenuOpen(false)}
                      className="flex-1 px-3 flex items-center gap-2"
                    >
                      <RiChatPrivateFill size={22} />
                      Privacy policy
                    </li>
                  </Link>
                  <Link href="/term-and-condition">
                    <li
                      onClick={() => setIsSidebarMenuOpen(false)}
                      className="flex-1 px-3 flex items-center gap-2"
                    >
                      <MdPrivacyTip size={22} />
                      Term and Condition
                    </li>
                  </Link>
                  <Link href={"/contact-us"}>
                    <li
                      onClick={() => setIsSidebarMenuOpen(false)}
                      className="flex-1 px-3 flex items-center gap-2"
                    >
                      <BiSolidContact size={22} />
                      Contact Us
                    </li>
                  </Link>

                  <li
                    onClick={() => setToggle(!toggle)}
                    className="flex-1 px-3 flex items-center gap-2 transition-all duration-300"
                  >
                    {toggle ? <TiMinus size={22} /> : <TiPlus size={22} />}
                    Seller Zone
                  </li>
                  {toggle && (
                    <div className="bg-[#212129e1]  text-gray-300 transition-all duration-300">
                      <Link
                        onClick={() => setIsSidebarMenuOpen(false)}
                        href={"https://app.leezobd.com/shops/create"}
                      >
                        <li className="border-b py-2 text-center">
                          Become a Seller
                          <span className="text-[#1ac584] ml-1">Apply Now</span>
                        </li>
                      </Link>
                      <Link
                        onClick={() => setIsSidebarMenuOpen(false)}
                        href={"https://app.leezobd.com/seller/login"}
                      >
                        <li className="flex-1 flex justify-center pb-2 items-center gap-2 mt-1.5">
                          <MdLogin size={19} />
                          Login to Seller Panel
                        </li>
                      </Link>
                    </div>
                  )}

                  {session?.status == "authenticated" ? (
                    <li>
                      <button
                        onClick={() => {
                          signOut({
                            redirect: false,
                          });
                          removeToken();
                          router.push("/auth/login");
                        }}
                        className="font-semibold mx-3 border flex items-center justify-center gap-2 py-2 mb-5 mt-3 text-sm rounded-md bottom-5 left-6 w-[150px]"
                      >
                        Log out <MdLogout size={22} />
                      </button>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Link
                          href="/auth/login"
                          className="font-semibold mx-3 border flex items-center justify-center gap-2 py-2 mt-3 text-sm rounded-md bottom-5 left-6 w-[150px]"
                        >
                          Login <MdLogin size={22} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/auth/register"
                          className="font-semibold mx-3 border flex items-center justify-center gap-2 py-2 mb-5 mt-3 text-sm rounded-md bottom-5 left-6 w-[150px]"
                        >
                          Register <MdPersonAddAlt1 size={22} />
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationMobile;
