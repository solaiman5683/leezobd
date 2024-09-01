import { FaChevronRight } from "react-icons/fa6";
import ProductItem from "./product-item";
import Link from "next/link";
import { getBundleDeals } from "@/hooks/frontend/productApi";
import { useQuery } from "react-query";

const BundleDeals = () => {
  const { data: bundle_deals, isLoading } = useQuery("bundle_deals", () =>
    getBundleDeals()
  );


  return (
    <div className="bg-white shadow lg:p-6 p-2 rounded space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <h4 className="text-lg lg:font-semibold">Bundle Deals</h4>
          <button className="lg:px-4 lg:py-1 p-1 border border-orange-500 text-[#4F97A5] lg:text-sm text-[8px]">
            Any 2 enjoy $0.20 off
          </button>
        </div>

        <Link
          href="/"
          className="flex lg:hidden items-center text-orange-600 text-xs"
        >
          See All
          <FaChevronRight />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
        {bundle_deals?.data?.data?.map((bundle) => (
          <ProductItem
            key={bundle?.id}
            id= {bundle?.id}
            title={bundle?.name}
            image={bundle?.thumbnail_image}
            salePrice={bundle?.main_price}
            price={bundle?.stroked_price}
          />
        ))}
      </div>
      {/* <div className="lg:hidden grid grid-cols-3 gap-2">
        <ProductItem image="/image/product/shoe5.jpeg" title="" />
        <ProductItem image="/image/product/2.jpeg" title="" />
        <ProductItem image="/image/product/3.jpeg" title="" />
        <ProductItem image="/image/product/4.jpeg" title="" />
        <ProductItem image="/image/product/5.jpeg" title="" />
        <ProductItem image="/image/product/1.jpeg" title="" />
      </div> */}
    </div>
  );
};

export default BundleDeals;
