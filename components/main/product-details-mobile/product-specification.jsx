"use client";

import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const ProductSpecificationMobile = ({ product }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggleContent = () => setShowFullContent((prev) => !prev);

  return (
    <div className="bg-white p-2 space-y-3">
      <div className="flex items-center justify-between py-2 border-b">
        <p className="text-sm text-gray-700">Specification</p>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-600">Stock</p>
            <p className="col-span-5 text-sm">{product?.current_stock}</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-600">Ships</p>
            <p className="col-span-5 text-sm uppercase">
              {product?.shipping_type}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`relative ${
          !showFullContent && "h-[200px]"
        } overflow-hidden`}
      >
        <h3 className="mb-2">Description</h3>

        <p
          className="px-2"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />

        {!showFullContent && (
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-white/0" />
        )}
      </div>

      <button
        onClick={handleToggleContent}
        className="w-full bg-white p-2 flex justify-center items-center gap-2 border-t text-sm text-[#F4580E]"
      >
        {showFullContent ? (
          <>
            <span>See Less</span>
            <IoChevronUp size={20} />
          </>
        ) : (
          <>
            <span>See More</span>
            <IoChevronDown size={20} />
          </>
        )}
      </button>
    </div>
  );
};

export default ProductSpecificationMobile;
