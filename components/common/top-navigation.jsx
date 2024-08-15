/* eslint-disable @next/next/no-img-element */
"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineBell } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

const TopNavigation = ({ session }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-3 text-sm bg-[#F4580E]">
      <div className="flex items-center gap-4">
        <ul className="flex items-center ">
          <li className="border-r border-dashed">
            <Link href="/" className="hover:text-gray-200 px-4">
              Seller Center
            </Link>
          </li>
          <li className="border-r border-dashed">
            <Link href="/" className="hover:text-gray-200 px-4">
              Start Selling
            </Link>
          </li>
          <li className="border-r border-dashed">
            <Link href="/" className="hover:text-gray-200 px-4">
              Download
            </Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center text-sm">
          <span>Follow us on </span>
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ul className="flex items-center">
          {session?.status == "authenticated" && (
            <li>
              <Link href="/" className="flex items-center gap-1 px-2">
                <AiOutlineBell size={20} />
                <span>Notification</span>
              </Link>
            </li>
          )}
          <li>
            <Link href="/" className="flex items-center gap-1 px-2">
              <IoIosHelpCircleOutline size={20} />
              <span>Help</span>
            </Link>
          </li>
          {/* <li>
                        <Popover placement="bottom">
                            <Popover.Action className="">
                                <span className="flex items-center gap-1 px-2">
                                    <FiGlobe size={18} />
                                    <span>English</span>
                                </span>
                            </Popover.Action>
                            <Popover.Content className="max-w-xs z-20 rounded-xl bg-white shadow-xl py-2 px-3">
                                <p className="p-2 cursor-pointer">
                                    English
                                </p>
                                <Divider />
                                <p className="p-2 cursor-pointer">
                                    Bangla
                                </p>
                            </Popover.Content>
                        </Popover>
                    </li> */}
        </ul>

        {session?.status != "authenticated" && (
          <ul className="flex items-center">
            <li>
              <Link href="/auth/login" className="flex items-center gap-1 px-2">
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                href="/auth/register"
                className="flex items-center gap-1 px-2"
              >
                <span>Register</span>
              </Link>
            </li>
          </ul>
        )}
        {session?.status == "authenticated" && (
          <div className="relative group">
            <div className="flex items-center gap-2 ">
              {/* <Avatar
                size="md"
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
              <span className="font-bold">{session?.data?.user?.name}</span>
            </div>

            <ul className="absolute top-100 right-0 z-10 min-w-40 bg-white text-gray-500 shadow rounded border hidden group-hover:block">
              <li>
                <Link
                  href="/account/my-account"
                  className="px-4 py-2 block hover:bg-slate-50 hover:text-[#F4580E]"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/account/my-purchase"
                  className="px-4 py-2 block hover:bg-slate-50 hover:text-[#F4580E]"
                >
                  My Purchase
                </Link>
              </li>

              <li>
                <button
                  onClick={() => {
                    signOut({
                      redirect: false,
                    });
                    router.push("/auth/login");
                  }}
                  className="px-4 py-2 block hover:bg-slate-50 hover:text-[#F4580E]"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
