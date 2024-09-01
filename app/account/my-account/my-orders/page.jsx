"use client";
import { purchaseHistory } from "@/hooks/auth/purchaseApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { useQuery } from "react-query";

const navItems = [
  {
    title: "All",
    href: "all",
  },
  {
    title: "Pending",
    href: "pending",
  },
  {
    title: "Confirmed",
    href: "confirmed",
  },
  {
    title: "Picked Up",
    href: "picked-up",
  },
  {
    title: "On The Way",
    href: "on-the-way",
  },
];

function MyOrdersPage() {
  const [activeNav, setActiveNav] = useState(navItems[0]);
  const params = useSearchParams().get("type");
  const { push } = useRouter();

  const { data: orders } = useQuery("purchase_history", () =>
    purchaseHistory()
  );

  const pending_orders =
    orders?.data?.data?.length != 0
      ? orders?.data?.data?.filter((item) => item.delivery_status == "Pending")
      : [];

  const confirmed_orders =
    orders?.data?.data?.length != 0
      ? orders?.data?.data?.filter(
          (item) => item.delivery_status == "Confirmed"
        )
      : [];

  const picked_up_orders =
    orders?.data?.data?.length != 0
      ? orders?.data?.data?.filter(
          (item) => item.delivery_status == "Picked Up"
        )
      : [];

  const on_the_way_orders =
    orders?.data?.data?.length != 0
      ? orders?.data?.data?.filter(
          (item) => item.delivery_status == "On The Way"
        )
      : [];

  useEffect(() => {
    if (params) {
      setActiveNav(navItems.find((item) => item.href === params));
    }
  }, [params]);

  useEffect(() => {
    push(`/account/my-account/my-orders?type=${activeNav?.href}`);
  }, [activeNav, push]);

  return (
    <div>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="bg-white p-3">
          <div className="flex items-center gap-2">
            <Link href="/account/my-account">
              <FiArrowLeft size={20} />
            </Link>
            <span className="text-lg font-semibold">My Orders</span>
          </div>
        </div>
        {/* <div>
          <div className="flex gap-2 overflow-scroll p-2">
            {navItems?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveNav(item);
                }}
                className={`p-1 px-2 text-sm border-b-4 min-w-max ${
                  activeNav?.href === item.href
                    ? "border-orange-500 text-orange-600 font-semibold"
                    : "border-transparent"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div> */}

        <div className="flex-grow overflow-auto">
          {params === "all" && (
            <div className="py-2 space-y-3">
              {orders?.data?.data?.length === 0 && (
                <div className="py-20 px-2 h-full flex flex-col items-center justify-center">
                  There are no orders placed yet.
                </div>
              )}
              {orders?.data?.data?.map((order, index) => (
                <MyOrderItem key={order} order={order} />
              ))}
            </div>
          )}

          {params === "pending" && (
            <div className="py-2 space-y-3">
              {pending_orders?.length === 0 && (
                <div className="py-20 px-2 h-full flex flex-col items-center justify-center">
                  There are no orders placed yet.
                </div>
              )}
              {pending_orders?.map((order, index) => (
                <MyOrderItem key={order} order={order} />
              ))}
            </div>
          )}

          {params === "confirmed" && (
            <div className="py-2 space-y-3">
              {confirmed_orders?.length === 0 && (
                <div className="py-20 px-2 h-full flex flex-col items-center justify-center">
                  There are no orders placed yet.
                </div>
              )}
              {confirmed_orders?.map((order, index) => (
                <MyOrderItem key={order} order={order} />
              ))}
            </div>
          )}

          {params === "picked-up" && (
            <div className="py-2 space-y-3">
              {picked_up_orders?.length === 0 && (
                <div className="py-20 px-2 h-full flex flex-col items-center justify-center">
                  There are no orders placed yet.
                </div>
              )}
              {picked_up_orders?.map((order, index) => (
                <MyOrderItem key={order} order={order} />
              ))}
            </div>
          )}

          {params === "on-the-way" && (
            <div className="py-2 space-y-3">
              {on_the_way_orders?.length === 0 && (
                <div className="py-20 px-2 h-full flex flex-col items-center justify-center">
                  There are no orders placed yet.
                </div>
              )}
              {on_the_way_orders?.map((order, index) => (
                <MyOrderItem key={order} order={order} />
              ))}
            </div>
          )}

          {/* {activeNav?.href !== "all" && (
            <div className="py-20 px-2 h-full flex flex-col items-center justify-center">
              There are no orders placed yet.
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export const MyOrderItem = ({ order }) => {
  return (
    <div className="bg-white p-3 shadow-sm space-y-1">
      <p className="flex items-center gap-1.5">
        <span>Order # {order?.code}</span>
        <FaAngleRight size={12} color="#333333" />
      </p>

      <p className="text-xs text-gray-400">Placed on {order?.date}</p>
      <p className="flex justify-between text-xs text-gray-400">
        {order?.payment_status == "Paid" ? (
          <span>Paid on 11 May 2024 11:03 AM</span>
        ) : (
          <span></span>
        )}
        <span className="italic">{order?.payment_status}</span>
      </p>
      <div className="flex gap-3 items-center w-full pt-3">
        <div className="min-w-max">
          <Image
            src={order?.thumbnail_image}
            alt="product"
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
          />
        </div>

        <div className="w-full">
          <p className="text-xs">
            {order?.product_name} - {order?.variation}
          </p>
          <p className="text-xs">{order?.product_price}</p>
          <div className="flex justify-between items-center w-fullmb-1">
            <p className="text-[11px] text-gray-400">Qty: {order?.quantity}</p>
            <p className="bg-orange-500 text-[11px] px-2 py-0.5 text-white italic rounded-full">
              {order?.delivery_status_string}
            </p>
          </div>
        </div>
      </div>
      <p className="text-right text-sm pb-3">
        {order?.product_count} {order?.product_count == 1 ? "item" : "items"},
        Total:{" "}
        <span className="text-[#4F97A5] font-semibold">
          {" "}
          {order?.grand_total}
        </span>
      </p>
      {/* <div className="text-right">
        <button className="text-white bg-orange-500 p-2 px-4 rounded-md text-xs">
          Buy Again
        </button>
      </div> */}
    </div>
  );
};

export default MyOrdersPage;
