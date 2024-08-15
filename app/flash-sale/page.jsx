/* eslint-disable @next/next/no-img-element */
"use client";
import FlashCategoryTab from "@/components/flash-sale/flash-category";
import FlashCategoryTabMobile from "@/components/flash-sale/flash-category-mobile";
import FlashProductContainer from "@/components/flash-sale/flash-product-container";
import FlashSaleHeader from "@/components/flash-sale/flash-sale-header";
import PromotionTab from "@/components/flash-sale/promotion-tab";
import PromotionTabMobile from "@/components/flash-sale/promotion-tab-mobile";
import FlipCountdown from "@rumess/react-flip-countdown";
import { Breadcrumb } from "keep-react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiShoppingBagOpen } from "react-icons/pi";

const FlashSalePage = () => {
  return (
    <>
      <div className="hidden sm:block -z-10 ">
        <div className="bg-gray-100 space-y-6 pb-6">
          <FlashSaleHeader />
          <PromotionTab />
          <FlashCategoryTab />
          <FlashProductContainer />
        </div>
        <div className="bg-white border-t-4 border-orange-500 z-10">
          <div className="container py-8">
            <Breadcrumb
              icon={
                <Link href="/" className="text-xs underline">
                  Homepage
                </Link>
              }
              className="max-w-full flex-wrap gap-0.5"
            >
              <Breadcrumb.Item className="min-w-max text-xs">
                Flash Sale
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className="mt-6 px-4">
              <h4 className="mb-2 text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
                necessitatibus!
              </h4>
              <p className="text-gray-400 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                officiis deserunt numquam maiores, tenetur perspiciatis non
                repellendus repudiandae voluptas rerum? Assumenda, eum cum
                expedita similique eos culpa nam repellendus officiis tenetur
                recusandae optio nemo dicta reprehenderit, quam libero fugit
                suscipit blanditiis corrupti amet nisi, nulla possimus. Beatae
                qui vel exercitationem, minus magni consectetur omnis
                repudiandae. Similique soluta voluptate esse atque ipsam unde
                aliquam placeat! Nobis, labore! Hic, suscipit voluptas fugiat
                dolores earum voluptates error provident illum culpa saepe
                praesentium adipisci porro eligendi omnis distinctio mollitia
                corporis sapiente ab cumque maiores fuga repellendus veniam!
                Blanditiis asperiores rem cum praesentium, ut dignissimos.
              </p>
            </div>
            <div className="mt-6 px-4">
              <h4 className="mb-2 text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
                necessitatibus!
              </h4>
              <p className="text-gray-400 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                officiis deserunt numquam maiores, tenetur perspiciatis non
                repellendus repudiandae voluptas rerum? Assumenda, eum cum
                expedita similique eos culpa nam repellendus officiis tenetur
                recusandae optio nemo dicta reprehenderit, quam libero fugit
                suscipit blanditiis corrupti amet nisi, nulla possimus. Beatae
                qui vel exercitationem, minus magni consectetur omnis
                repudiandae. Similique soluta voluptate esse atque ipsam unde
                aliquam placeat! Nobis, labore! Hic, suscipit voluptas fugiat
                dolores earum voluptates error provident illum culpa saepe
                praesentium adipisci porro eligendi omnis distinctio mollitia
                corporis sapiente ab cumque maiores fuga repellendus veniam!
                Blanditiis asperiores rem cum praesentium, ut dignissimos.
              </p>
            </div>
            <div className="mt-6 px-4">
              <h4 className="mb-2 text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
                necessitatibus!
              </h4>
              <p className="text-gray-400 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                officiis deserunt numquam maiores, tenetur perspiciatis non
                repellendus repudiandae voluptas rerum? Assumenda, eum cum
                expedita similique eos culpa nam repellendus officiis tenetur
                recusandae optio nemo dicta reprehenderit, quam libero fugit
                suscipit blanditiis corrupti amet nisi, nulla possimus. Beatae
                qui vel exercitationem, minus magni consectetur omnis
                repudiandae. Similique soluta voluptate esse atque ipsam unde
                aliquam placeat! Nobis, labore! Hic, suscipit voluptas fugiat
                dolores earum voluptates error provident illum culpa saepe
                praesentium adipisci porro eligendi omnis distinctio mollitia
                corporis sapiente ab cumque maiores fuga repellendus veniam!
                Blanditiis asperiores rem cum praesentium, ut dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-gray-100 min-h-screen">
        <div className="sticky top-0 left-0 w-full bg-white border-b text-orange-600 p-4 z-10">
          <div className="flex justify-between">
            <Link href="/">
              <FaArrowLeftLong />
            </Link>
            <img src="/image/flash.png" className="w-28" alt="" />
            <div></div>
          </div>
        </div>
        <PromotionTabMobile />
        <FlashCategoryTabMobile />
        <div className="flex items-center justify-end gap-2 p-2">
          <p className="text-xs">Ends in</p>
          <div>
            <FlipCountdown
              endAt={"2024-12-12 01:26:58"} // Date/Time
              theme="dark"
              titlePosition="bottom"
              size="extra-small"
              endAtZero
              hideYear
              hideMonth
              hideDay
            />
          </div>
        </div>
        <FlashProductContainer />

        <div className="my-16"></div>
        <div className="fixed bottom-0 left-0 w-full bg-white p-2 border-t">
          <div className="flex justify-around">
            <Link
              href="/flash-sale"
              className="w-full flex flex-col items-center gap-1"
            >
              <img
                src={`/image/icon/flash-sale/1.png`}
                className="h-5 w-auto"
                alt=""
              />
              <p className="text-xs text-orange-600">Flash Deals</p>
            </Link>
            <Link
              href="/flash-sale"
              className="w-full flex flex-col items-center gap-1"
            >
              <PiShoppingBagOpen size={22} />
              <p className="text-xs">Mall Flash Deals</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSalePage;
