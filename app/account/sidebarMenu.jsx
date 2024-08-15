"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegBell, FaRegUser } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";

const sidebarItems = [
  {
    title: "My Account",
    link: "/account/my-account",
    icon: <FaRegUser />,
    subItem: [
      {
        title: "Profile",
        link: "/account/my-account/edit-profile",
      },
      // {
      //     title: 'Bank & Cards',
      //     link: '/account/my-account/bank-and-cards'
      // },
      {
        title: "Addresses",
        link: "/account/my-account/addresses",
      },
      {
        title: "Change Password",
        link: "/account/my-account/change-password",
      },
      // {
      //     title: 'Notification Settings',
      //     link: '/account/my-account/notification-settings'
      // },
      // {
      //   title: "Privacy Settings",
      //   link: "/account/my-account/privacy-settings",
      // },
    ],
  },
  {
    title: "My Purchase",
    link: "/account/my-purchase",
    icon: (
      <span className="text-blue-500">
        <HiOutlineDocumentText />
      </span>
    ),
  },
  // {
  //   title: "Notifications",
  //   link: "/account/my-account",
  //   icon: (
  //     <span className="text-[#F4580E]">
  //       <FaRegBell />
  //     </span>
  //   ),
  // },
];

function SidebarMenu() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-4">
      {sidebarItems.map((item, i) => (
        <li key={i}>
          <Link
            href={item.link}
            className="flex p-2 gap-2 items-center font-semibold"
          >
            {item.icon}
            {item.title}
          </Link>
          {pathname.includes(item.link) && (
            <ul className="pl-6 space-y-2">
              {item?.subItem?.map((subItem, i) => (
                <li key={i}>
                  <Link
                    href={subItem.link}
                    className={`py-4 px-2 text-gray-600 text-sm ${
                      pathname === subItem.link &&
                      "text-gray-900 font-semibold "
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SidebarMenu;
