import Image from "next/image";
import { MyOrderItem } from "../my-account/my-orders/page";

function PurchasePage() {
  return (
    <div className="space-y-6">
      {/* <div className="text-gray-600 bg-white">
        <div className="flex gap-3">
          <div className="w-full  font-semibold cursor-pointer text-center p-3 text-[#F4580E] border-b-2 border-orange-500">
            ALL
          </div>

          <div className="w-full  font-semibold cursor-pointer text-center p-3 hover:text-[#F4580E] border-b-2 border-transparent hover:border-orange-500">
            To Pay
          </div>
          <div className="w-full  font-semibold cursor-pointer text-center p-3 hover:text-[#F4580E] border-b-2 border-transparent hover:border-orange-500">
            To Ship
          </div>
          <div className="w-full  font-semibold cursor-pointer text-center p-3 hover:text-[#F4580E] border-b-2 border-transparent hover:border-orange-500">
            To Receive
          </div>
          <div className="w-full  font-semibold cursor-pointer text-center p-3 hover:text-[#F4580E] border-b-2 border-transparent hover:border-orange-500">
            Completed
          </div>
          <div className="w-full  font-semibold cursor-pointer text-center p-3 hover:text-[#F4580E] border-b-2 border-transparent hover:border-orange-500">
            Cancelled
          </div>
          <div className="w-full  font-semibold cursor-pointer text-center p-3 hover:text-[#F4580E] border-b-2 border-transparent hover:border-orange-500">
            Return Refund
          </div>
        </div>
      </div> */}
      <div className="text-gray-600 bg-white p-6 min-h-[500px] flex flex-col gap-4 justify-center items-center">
        <Image src="/image/no-order.png" alt="" width={100} height={100} />
        {/* <p className="text-center">No orders yet</p> */}
        <MyOrderItem />
      </div>
    </div>
  );
}

export default PurchasePage;
