import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";

function MyReturns() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div>
        <div className="bg-white p-3">
          <div className="flex items-center gap-2">
            <Link href="/account/my-account">
              <FiArrowLeft size={20} />
            </Link>
            <span className="text-lg font-semibold">My Cancellations</span>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        {/* <div className="h-full flex flex-col justify-center items-center p-12">
                    <p className="text-center">
                        You have no returns yet.
                    </p>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        Not satisfied with your purchase? You can initiate return request from my orders page.
                    </p>

                    <Link href='/account/my-account/my-orders' className="border border-orange-500 w-full mt-6 text-sm p-2 rounded-md text-center text-[#4F97A5] ">
                        Check My Orders
                    </Link>
                </div> */}
        <div className="space-y-3">
          {/* <MyOrderItem />
                    <MyOrderItem />
                    <MyOrderItem /> */}
          <p>No Cancellations...</p>
        </div>
      </div>
    </div>
  );
}

const MyOrderItem = () => {
  return (
    <div className="bg-white p-3 shadow-sm space-y-1">
      <p className="flex items-center gap-1.5">
        <span>Order #123456</span>
        <FaAngleRight size={12} color="#333333" />
      </p>

      <p className="text-xs text-gray-500">Placed on 11 May 2024 11:00 AM</p>
      <p className="flex justify-between text-xs text-gray-400">
        <span>Requested on 11 May 2024 11:03 AM</span>
      </p>
      <div className="flex gap-3 items-center w-full pt-3">
        <div className="min-w-max">
          <Image
            src="/image/product/1.jpeg"
            alt="product"
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
          />
        </div>

        <div className="w-full">
          <p className="text-xs">Product Name</p>
          <p className="text-xs">$100</p>
          <div className="flex justify-between items-center w-fullmb-1">
            <p className="text-[11px] text-gray-400">Qty: 1</p>
            <p className="bg-orange-500 text-[11px] px-2 py-0.5 text-white italic rounded-full">
              Cancelled
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 pt-3">
        Reason: System Default Reason
      </p>
    </div>
  );
};

export default MyReturns;
