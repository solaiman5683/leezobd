"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import FooterMobile from "./footer-mobile";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden lg:block border-t bg-[#FBFBFB] text-gray-700 text-sm">
        <div className="container pt-10 px-6 space-y-4">
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold uppercase">Customer Service</h4>

              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    How To Buy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    How To Sell
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Payment Methods
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Return & Refund
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Leezo Mall Return & Refund
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase">ABOUT Leezo</h4>

              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Leezo Careers
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Leezo Policies
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Seller Centre
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-gray-700">
                    Leezo Seller Mentors
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-bold uppercase">Payment</h4>

                <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4">
                  <img src="/image/payment/1.jpeg" alt="" />
                  <img src="/image/payment/2.jpeg" alt="" />
                  <img src="/image/payment/3.jpeg" alt="" />
                  <img src="/image/payment/4.jpeg" alt="" />
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold uppercase">Logistics</h4>

                <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4">
                  <img src="/image/logistics/1.png" alt="" />
                  <img src="/image/logistics/2.jpeg" alt="" />
                  <img src="/image/logistics/3.jpeg" alt="" />
                  <img src="/image/logistics/4.png" alt="" />
                  <img src="/image/logistics/5.jpeg" alt="" />
                  <img src="/image/logistics/6.jpeg" alt="" />
                  <img src="/image/logistics/7.jpeg" alt="" />
                  <img src="/image/logistics/8.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase">FOLLOW US</h4>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm group flex items-center gap-2"
                  >
                    <FaFacebook />{" "}
                    <span className="group-hover:text-gray-700">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm group flex items-center gap-2"
                  >
                    <FaInstagram />{" "}
                    <span className="group-hover:text-gray-700">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm group flex items-center gap-2"
                  >
                    <FaLinkedin />{" "}
                    <span className="group-hover:text-gray-700">LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold uppercase">Leezo APP DOWNLOAD</h4>

              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <img src="/image/footer/qr.jpeg" className="w-full" alt="" />
                </div>

                <ul className="space-y-2">
                  <li className="border p-2 flex justify-center">
                    <Link href="/">
                      <img src="/image/footer/app-store.jpeg" alt="" />
                    </Link>
                  </li>
                  <li className="border p-2 flex justify-center">
                    <Link href="/">
                      <img src="/image/footer/play-store.jpeg" alt="" />
                    </Link>
                  </li>
                  <li className="border p-2 flex justify-center">
                    <Link href="/">
                      <img src="/image/footer/app-gellary.jpeg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t-2 p-4">
            <div className="flex justify-between">
              <p>
                © {new Date().getFullYear()} Leezo. All Rights Reserved .
              </p>
              <p className="flex items-center gap-2">
                <span>Country & Region: </span> <Link href="/">Bangladesh</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {pathname === "/" ? (
        <div className="lg:hidden">
          <div className="p-3 shadow-2xl bg-[#F4580E] text-white fixed bottom-0 w-full z-50">
            <ul className="flex justify-between items-center">
              <Link href={"/"}>
                <li className="flex-1 flex items-center justify-center flex-col">
                  <HiHome size={25} />
                  Home
                </li>
              </Link>
              <p className="border h-[40px]" />
              <Link href={'/flash-sale'}><li className="flex-1 flex items-center justify-center flex-col">
                <PiShoppingCart size={25} />
                Shop
              </li></Link>
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
      ) : (
        <div></div>
      )} */}
      <FooterMobile />
    </>
  );
};

export default Footer;
