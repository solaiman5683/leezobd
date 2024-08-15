"use client";

import { Avatar } from "keep-react";
import Link from "next/link";
import { MdOutlineEdit } from "react-icons/md";
import SidebarMenu from "./sidebarMenu";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { setToken } from "@/hooks/auth/useAuth";

const Layout = ({ children }) => {
  const session = useSession();

  useEffect(() => {
    if (session.data) {
      setToken(session.data.access_token);
    }
  }, [session.data]);

 
  return (
    <main className="bg-gray-100">
      <div className="container p-8 hidden lg:block">
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2 ">
              <Avatar
                size="xl"
                shape="circle"
                img={session?.data?.user?.avatar_original}
              />
              <div>
                <span className="font-bold">{session?.data?.user?.name}</span>
                <Link
                  href="/account/my-account/edit-profile"
                  className="flex items-center text-gray-500"
                >
                  <MdOutlineEdit /> edit profile
                </Link>
              </div>
            </div>

            <SidebarMenu />
          </div>
          <div className="col-span-5">{children}</div>
        </div>
      </div>
      <div className="lg:hidden">{children}</div>
    </main>
  );
};

export default Layout;
