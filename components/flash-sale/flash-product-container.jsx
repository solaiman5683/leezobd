import React from "react";
import { useQuery } from "react-query";
import { getBestSellingProducts } from "@/hooks/frontend/productApi";
import ProductItem from "../main/product-item";

const FlashProductContainer = () => {
  const { data: flash_deals, isLoading } = useQuery(
    "getBestSellingProducts",
    () => getBestSellingProducts()
  );
  return (
    <div className="container lg:bg-transparent">
      <div className="grid lg:grid-cols-6 grid-cols-2 lg:gap-6 gap-2">
        {flash_deals?.data?.data?.map((flash) => (
          <ProductItem
            key={flash?.id}
            id={flash?.id}
            title={flash?.name}
            image={flash?.thumbnail_image}
            salePrice={flash?.main_price}
            price={flash?.stroked_price}
          />
          // <FlashSaleProduct key={flash?.id} flash={flash} />
        ))}
      </div>
    </div>
  );
};

export default FlashProductContainer;
