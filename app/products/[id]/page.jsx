"use client";
import BundleDeals from "@/components/main/bundle-deals";
import ProductDetails from "@/components/main/product-details";
import FreeShipping from "@/components/main/product-details-mobile/free-shipping";
import ProductDetailsMobileContainer from "@/components/main/product-details-mobile/product-details-mobile-container";
import ProductNavbarMobile from "@/components/main/product-details-mobile/product-navbar-mobile";
import ProductSpecificationMobile from "@/components/main/product-details-mobile/product-specification";
import SellerProfileIntroMobile from "@/components/main/product-details-mobile/seller-profile-intro-mobile";
import ProductSpecifications from "@/components/main/product-specifications";
import { AddToCartMobile } from "@/components/main/product/product-add-to-cart-mobile";
import SellerProfileIntro from "@/components/main/seller-profile-intro";
import { getSingleProduct } from "@/hooks/frontend/productApi";
import { Breadcrumb } from "keep-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Divider } from "rsuite";

const ProductDetailsPage = () => {
  //get id from param
  const { id } = useParams();

  const { data: product, isLoading } = useQuery(`single_product_${id}`, () =>
    getSingleProduct(id)
  );

  const [showMobileCart, setShowMobileCart] = useState(false);
  const [showMobileBuyNow, setShowMobileBuyNow] = useState(false);
  const [quantity, setQuantity] = useState(0);

  if (!product?.data?.data?.[0] && !isLoading)
    return <div>Product not found</div>;

  return (
    <div className="bg-gray-100 w-full overflow-hidden">
      <div className="hidden sm:block">
        <div className="container px-8 py-4 space-y-4">
          <Breadcrumb
            icon={
              <Link href="/" className="text-sm">
                LeezoBD
              </Link>
            }
            className="max-w-full "
          >
            <Breadcrumb.Item className="min-w-max !text-black">
              {product?.data?.data?.[0]?.name}
            </Breadcrumb.Item>
          </Breadcrumb>
          <ProductDetails product={product?.data?.data?.[0]} />
          <BundleDeals />
          {
            product?.data?.data?.[0] && <SellerProfileIntro product={product?.data?.data?.[0]} />
          }
          
          <ProductSpecifications product={product?.data?.data?.[0]} />
          {/* <ProductRatingsMobile id={id} /> */}
          {/* <SameShopProducts /> */}
          {/* <UserMayLike /> */}
        </div>
        {/* <RelatedProducts /> */}
      </div>

      <div className="block sm:hidden relative mb-3">
        <ProductNavbarMobile product={product?.data?.data?.[0]} />
        <ProductDetailsMobileContainer product={product?.data?.data?.[0]} />
        <div className="space-y-3 mb-20">
          <BundleDeals />
          <FreeShipping product={product?.data?.data?.[0]} />
          <div className="bg-yellow-50 p-2">
            <div className="flex gap-2">
              <span className="text-[#4F97A5] mt-0.5">
                <RiSecurePaymentLine size={18} />
              </span>
              <div>
                <p className="text-green-400 font-semibold text-sm">
                  LeezoBD Guarantee
                </p>
                <p className="text-ray-500  text-xs">
                  Get the items you ordered or get your money back.
                </p>
              </div>
            </div>
          </div>
          {
            product?.data?.data?.[0] && <SellerProfileIntroMobile product={product?.data?.data?.[0]} />
          }
          {/* <SameShopProductsMobile /> */}
          <ProductSpecificationMobile product={product?.data?.data?.[0]} />
          {/* <ProductRatingsMobile /> */}
          {/* <Breadcrumb
            icon={
              <Link href="/" className="text-xs">
                LeezoBD
              </Link>
            }
            className="max-w-full flex-wrap gap-0.5"
          >
            <Breadcrumb.Item className="min-w-max text-xs">
              Computers & Peripherals
            </Breadcrumb.Item>
            <Breadcrumb.Item className="min-w-max text-xs">
              Gaming Laptops
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-xs">
              2023 safety white shoes men insurance shoes men s new autumn
              construction site shoes leisure work non-slip tooling.
            </Breadcrumb.Item>
          </Breadcrumb>
          <hr />
          <RelatedProducts /> */}
        </div>

        <div className="grid grid-cols-2 fixed bottom-0 left-0 z-50 w-full text-sm ">
          <div className="flex bg-emerald-700 justify-around text-white p-2">
            <a target="_blank" href="https://wa.me/8801938111138">
              <button className="flex flex-col items-center">
                <IoLogoWechat size={22} />
                <span>Chat Now</span>
              </button>
            </a>
            <Divider
              vertical
              className="bg-transparent border border-gray-50/50 border-dashed h-full"
            />

            <AddToCartMobile product={product?.data?.data?.[0]} />
          </div>
          <button
            // onClick={() => setShowMobileBuyNow(true)}
            className="bg-orange-500 text-white flex justify-center items-center"
          >
            <AddToCartMobile
              product={product?.data?.data?.[0]}
              redirect={true}
              buttonName="Buy Now"
            />
          </button>
        </div>
      </div>

      {/* <Drawer
        placement="bottom"
        size="md"
        open={showMobileBuyNow}
        onClose={() => setShowMobileBuyNow(false)}
      >
        <Drawer.Body>
          <div className="flex gap-4 items-end pb-4 border-b-2 border-dashed">
            <div>
              <Image
                src="/image/product/shoe1.jpeg"
                alt=""
                width={120}
                height={120}
                className={`object-cover`}
              />
            </div>
            <div>
              <p className="text-orange-600 text-lg">
                <span className="text-gray-500 line-through text-sm">
                  $1.96
                </span>{" "}
                $2.50
              </p>
              <p className="text-gray-600 text-sm">Stock: 1250</p>
            </div>
          </div>
          <div className="py-4 border-b-2 border-dashed">
            <div>
              <p className="text-gray-500">Color</p>
            </div>
            <div className="">
              <div className="flex gap-2 text-sm">
                <button className={`border p-2 flex gap-2`}>
                  <Image
                    width={25}
                    height={25}
                    src="/image/product/shoe2.jpeg"
                    alt=""
                  />
                  Khaki
                </button>
                <button className={`border p-2 flex gap-2`}>
                  <Image
                    width={25}
                    height={25}
                    src="/image/product/shoe3.jpeg"
                    alt=""
                  />
                  Gray
                </button>
                <button className={`border p-2 flex gap-2`}>
                  <Image
                    width={25}
                    height={25}
                    src="/image/product/shoe4.jpeg"
                    alt=""
                  />
                  Black
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 border-b-2 border-dashed">
            <div>
              <p className="text-gray-500">Quantity</p>
            </div>
            <div className="">
              <div className="flex gap-4 items-center text-sm">
                <NumberInput>
                  <NumberInput.Button
                    disabled={quantity === 0}
                    onClick={() => setQuantity((prev) => prev - 1)}
                  >
                    <Minus size={16} color="#455468" />
                  </NumberInput.Button>
                  <NumberInput.Input
                    className="w-16 text-sm"
                    min={0}
                    max={100}
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                  />
                  <NumberInput.Button
                    disabled={quantity === 100}
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <Plus size={16} color="#455468" />
                  </NumberInput.Button>
                </NumberInput>
              </div>
            </div>
          </div>
          <button className="w-full my-4 bg-orange-500 p-2 text-white">
            Buy Now
          </button>
        </Drawer.Body>
      </Drawer> */}
    </div>
  );
};

export default ProductDetailsPage;
