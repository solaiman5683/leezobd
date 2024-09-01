import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

function MyReturns() {
  return (
    <div className="flex flex-col h-screen overflow-hidden space-y-3">
      <div>
        <div className="bg-white p-3">
          <div className="flex items-center gap-2">
            <Link href="/account/my-account">
              <FiArrowLeft size={20} />
            </Link>
            <span className="text-lg font-semibold">My Vouchers</span>
          </div>
        </div>
      </div>
      <div className="flex-grow lg:flex-none p-3">
        <div className="space-y-3">
          {/* <VoucherItem />
                    <VoucherItem />
                    <VoucherItem /> */}
          <p className="px-3">No Vouchers...</p>
        </div>
      </div>
    </div>
  );
}

const VoucherItem = () => {
  return (
    <div className="bg-white shadow-sm space-y-1">
      <div className="flex gap-3 items-center w-full">
        <div className="min-w-max">
          <Image
            src="/image/product/1.jpeg"
            alt="product"
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
          />
        </div>

        <div className="px-4 w-full flex justify-between items-center">
          <div className="space-y-0.5">
            <p className="text-sm">88% Cashback capped at 500 coins</p>
            <p className="text-xs text-gray-600">Min spend $5</p>
            <p className="text-xs text-gray-400">Expiring: 2 days left</p>
          </div>
          <button className="bg-orange-500 text-[11px] px-2 py-1 text-white rounded-full min-w-max mt-2">
            Use
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReturns;
