import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const SellerProfileIntroMobile = ({ product }) => {
  return (
    <div className="bg-white shadow p-2 space-y-3">
      <div className="flex items-center gap-2">
        <div>
          <Image src={product?.shop_logo} alt="" width={100} height={100} />
        </div>
        <div className="w-full">
          <p>{product?.shop_name}</p>
          <p className="text-gray-500 text-sm">Active 29 minutes ago</p>
        </div>
        {product?.shop_id !== 0 && (
          <div>
            <Link
              href={`/shop/${product?.shop_id}`}
              className="bg-white min-w-max border border-orange-500 text-[#4F97A5] px-4 py-1 text-xs"
            >
              View Shop
            </Link>
          </div>
        )}
      </div>

      <div className="flex gap-3 text-xs items-center">
        <p>
          <span className="text-[#4F97A5] mr-1">
            {product?.shop_product_count}
          </span>
          Products
        </p>
        <p>
          <span className="text-[#4F97A5] mr-1">{product?.shop_rating}</span>
          Ratings
        </p>
        <p>
          <span className="text-[#4F97A5] mr-1">98%</span>
          Chat Response
        </p>
      </div>

      <div>
        <div className="w-full overflow-x-scroll py-3">
          <div className="flex gap-4 items-center flex-nowrap">
            <div
              className="min-w-[250px] max-w-[300px] p-2 border border-l-2 border-orange-500 bg-orange-50 text-[#4F97A5] flex items-center justify-between"
              style={{
                borderLeftStyle: "dashed",
              }}
            >
              <div>
                <p className="text-sm">30% Off</p>
                <p className="text-xs mb-3">Min Spend $3</p>
                <p className="text-[9px] text-gray-500 mb-3">Min Spend $3</p>
              </div>
              <button className="bg-white border border-orange-500 text-[#4F97A5] px-2 py-1 text-sm">
                Use
              </button>
            </div>
            <div
              className="min-w-[250px] max-w-[300px] p-2 border border-l-2 border-orange-500 bg-orange-50 text-[#4F97A5] flex items-center justify-between"
              style={{
                borderLeftStyle: "dashed",
              }}
            >
              <div>
                <p className="text-sm">30% Off</p>
                <p className="text-xs mb-3">Min Spend $3</p>
                <p className="text-[9px] text-gray-500 mb-3">Min Spend $3</p>
              </div>
              <button className="bg-orange-500 border border-orange-500 text-white px-2 py-1 text-sm">
                Claim
              </button>
            </div>

            <Link
              href="/"
              className="text-[#4F97A5] text-center flex flex-col items-center p-4"
            >
              <IoIosArrowDropright size={35} />
              <p className="text-xs min-w-max">See More</p>
            </Link>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          * Applicable to all products in this shop (excl. shipping fees)
        </p>
      </div>
    </div>
  );
};

export default SellerProfileIntroMobile;
