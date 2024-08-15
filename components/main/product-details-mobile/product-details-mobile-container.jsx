"use client";
import FlipCountdown from "@rumess/react-flip-countdown";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ProductDetailsMobileImageSlider from "./product-details-mobile-image-silder";
import ProductInfo from "./product-info";
import ShopVouchers from "./shop-vouchers";

const ProductDetailsMobileContainer = ({ product }) => {
  const params = useSearchParams();
  const isFlashSale = Boolean(params.get("flashSale"));
  return (
    <div className="space-y-3 mb-3">
      <ProductDetailsMobileImageSlider photos={product?.photos} />
      {isFlashSale && (
        <div className="bg-orange-500 p-2 space-y-2">
          <div className="flex justify-between text-xs text-white">
            <div className="flex border border-yellow-400 text-white">
              <div className="bg-yellow-400 flex items-center justify-center w-[20px]">
                <Image
                  src="/image/icon/flash-sale/1.png"
                  width={15}
                  height={12}
                  alt=""
                />
              </div>
              <p className="p-0.5 text-[10px]">
                <strong>FLASH </strong>
                DEALS
              </p>
            </div>
            <p>1 Sold</p>
          </div>
          <div className="flex justify-between text-xs text-white">
            <p>
              <small className="line-through">$12.50</small>{" "}
              <span className="text-sm">$8.12</span>
            </p>
            <div className="flex items-center justify-end gap-2">
              <p className="text-xs">Ends in</p>
              <div>
                <FlipCountdown
                  endAt={"2024-12-12 01:26:58"} // Date/Time
                  theme="light"
                  titlePosition="bottom"
                  size="extra-small"
                  endAtZero
                  hideYear
                  hideMonth
                  hideDay
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <ProductInfo product={product} />
      <ShopVouchers />
    </div>
  );
};

export default ProductDetailsMobileContainer;
