import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { HiShieldCheck } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { Divider, Rate, Tooltip, Whisper } from "rsuite";

const ProductInfo = ({ product }) => {
  const params = useSearchParams();
  const isFlashSale = Boolean(params.get("flashSale"));
  return (
    <div className="bg-white">
      <div className="p-2">
        {isFlashSale && (
          <h4 className="text-sm py-2">
            <Image
              src="/image/icon/mall.svg"
              width={22}
              height={8}
              alt=""
              className="inline-block h-auto -mt-1"
            />{" "}
            {product?.name}
          </h4>
        )}

        {!isFlashSale && (
          <div className="flex justify-between">
            <div className="inline-flex items-center gap-3">
              <div className="bg-orange-500 text-white font-semibold text-xs flex items-center px-2 py-1 gap-1">
                <GiCheckMark /> Choice
              </div>
              <h4 className="text-sm">{product?.name}</h4>
            </div>
            <div className="relative">
              <Image
                src="/image/offer-badge.svg"
                width={35}
                height={35}
                alt=""
              />
              <p className="absolute top-[-3px] left-0 w-full h-full flex items-center justify-center text-white text-[8px] text-center">
                {product?.discount}%
                <br />
                Off
              </p>
            </div>
          </div>
        )}
        {!isFlashSale && (
          <div>
            <div className="flex gap-4 items-center">
              <h3 className="text-orange-600 min-w-max">
                {product?.price_high_low}
              </h3>

              <button className="px-1 py-0.5 border border-orange-500 text-[#4F97A5] text-[8px] min-w-max">
                Any 2 enjoy $0.20 off
              </button>
            </div>
            <p className="line-through text-gray-500 text-xs">
              {product?.stroked_price}
            </p>
          </div>
        )}
      </div>
      <Link
        href="/"
        className="flex gap-2 justify-between items-center bg-orange-100 p-2"
      >
        {isFlashSale && (
          <div className="flex items-center text-orange-600 gap-3">
            <HiShieldCheck size={24} />
            <div>
              <h6 className="text-xs">LeezoBD Mall | 100% Authentic</h6>
              <p className="text-gray-500 text-[9px]">
                Guaranteed Authentic or 2x Money Back
              </p>
            </div>
          </div>
        )}
        {!isFlashSale && (
          <div className="flex items-center text-orange-600 gap-3">
            <GiCheckMark size={24} />
            <div>
              <h6 className="text-xs">Choice LeezoBD</h6>
              <p className="text-gray-500 text-[9px]">
                15-Days Free Return - 100% Authentic - Free Shipping
              </p>
            </div>
          </div>
        )}

        <div className="text-gray-400">
          <FaChevronRight />
        </div>
      </Link>

      <div className="flex justify-between items-center p-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rate
              value={product?.rating}
              readOnly
              allowHalf
              color="orange"
              size="xs"
            />
            <span className="text-orange-600">{product?.rating}</span>
          </div>
          <Divider vertical />
          <div className="flex items-center text-gray-600 text-xs gap-2">
            <span className="">{product?.sales}</span>
            Sold
            <Whisper
              placement="auto"
              controlId="control-id-hover"
              trigger="hover"
              speaker={
                <Tooltip>
                  245 sold in Singapore <br />
                  288 sold globally* <br />
                  *This product is also sold in other regions on{" "}
                  <strong>LeezoBD</strong> platform
                </Tooltip>
              }
            >
              {/* <Button>Hover</Button> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </Whisper>
          </div>
        </div>
        <Link href="/" className="text-gray-500 hover:text-gray-600">
          <IoIosHeartEmpty />
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
