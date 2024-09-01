"use client";
// import { Avatar, Carousel } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import CartContainer from "./cart-container";
import SearchBox from "./search-box";
import { GrClose, GrContactInfo } from "react-icons/gr";
import TopNavigation from "./top-navigation";
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
import { setToken } from "@/hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import { Avatar } from "keep-react";
import NavigationMobile from "./navigation-mobile";

const Navigation = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
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

  return (
    <>
      {!(pathname === "/auth/login" || pathname === "/auth/register") && (
        <div className="hidden sm:block sticky top-0 z-50 bg-white shadow-md">
          <div
            className={`${
              isFlashSale
                ? "bg-[#2646e7]"
                : "bg-nav-background-gradient bg-[#4F97A5]"
            } text-white ${pathname === "/" && ""} shadow py-2 `}
          >
            <div className="container">
              <TopNavigation session={session} />
            </div>
          </div>
          {/* Main Nav */}
          <div className="flex justify-between items-center container py-3">
            <Link href="/" className="text-[35px] font-bold">
              <Image
                src="/image/logo-white.png"
                alt=""
                width={150}
                height={50}
              />
            </Link>
            <SearchBox />
            <CartContainer />
          </div>
        </div>
      )}

      <NavigationMobile />
    </>
  );
};

export default Navigation;
