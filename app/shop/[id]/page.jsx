"use client";
import ProductItem from "@/components/main/product-item";
import { getShopDetails, getShopTopProducts } from "@/hooks/frontend/shopApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { GoPlus } from "react-icons/go";
import { useQuery } from "react-query";

const ShopDetails = () => {
  const { id } = useParams();
  const { data: shop, isLoading } = useQuery(`shop_details_${id}`, () =>
    getShopDetails(id)
  );

  const { data: top_products, isLoading: isLoading2 } = useQuery(
    `shop_products_${id}`,
    () => getShopTopProducts(id)
  );

  return (
    <div className="bg-gray-100 space-y-6">
      <div className="shadow bg-white border-b">
        <div className="container pt-6 space-y-6">
          <div className="block md:flex items-center gap-8">
            <div className="w-[500px] border rounded p-3 mb-3 md:mb-0">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={shop?.data?.data?.logo}
                    width={100}
                    height={100}
                    className="object-contain border h-[80px] w-[80px] rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h5>{shop?.data?.data?.name}</h5>
                  <p className="text-xs text-gray-500">
                    {shop?.data?.data?.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                {/* <button className="border w-full p-1 text-sm flex items-center justify-center gap-1">
                  <GoPlus />
                  Follow
                </button> */}
                {/* <button className="border w-full p-1 text-sm flex items-center justify-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="size-3"
                  >
                    <g fillRule="evenodd">
                      <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                    </g>
                  </svg>
                  Chat Now
                </button> */}
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p>
                  Products:{" "}
                  <span className="text-[#0F4E97]">
                    {shop?.data?.data?.products}
                  </span>
                </p>
              </div>
              {/* <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <p>
                  Followers: <span className="text-[#0F4E97]">2k</span>
                </p>
              </div> */}
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p>
                  Orders:{" "}
                  <span className="text-[#0F4E97]">
                    {shop?.data?.data?.orders}
                  </span>
                </p>
              </div>
              {/* <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p>
                  Following: <span className="text-[#0F4E97]">5</span>
                </p>
              </div> */}
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p>
                  Ratings:{" "}
                  <span className="text-[#0F4E97]">
                    {shop?.data?.data?.rating}
                  </span>
                </p>
              </div>
              {/* <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                <p>
                  Chat Performance:{" "}
                  <span className="text-[#0F4E97]">69% (Within Hours)</span>
                </p>
              </div> */}
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
                <p>
                  Joined:{" "}
                  <span className="text-[#0F4E97]">
                    {shop?.data?.data?.join_date}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <ul className="flex w-full items-center gap-6">
              <li className="text-[#0F4E97] border-b-2 border-[#0F4E97] py-2 px-8 text-center">
                Home
              </li>
              {/* <li className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer">
                All Products
              </li>
              <li className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer">
                Big Sale
              </li>
              <li className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer">
                New Arrival
              </li>
              <li className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer">
                iPhone
              </li>
              <li className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer">
                Samsung
              </li>
              <li className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer">
                Phone Cover
              </li> */}
            </ul>
            {/* <button className="text-gray-600 hover:text-[#0F4E97] py-2 px-8 text-center cursor-pointer min-w-max border-l border-gray-30 flex items-center gap-1">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
      <div className="container pb-6 space-y-6">
        {/* <div className="bg-white p-6">
          <p>Voucher</p>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="border border-dashed border-[#0F4E97A5] bg-[#0f4e9715] px-3 py-6 flex items-center justify-between">
              <div>
                <h4 className="text-[#0F4E97] font-bold">$0.1 off</h4>
                <p className="text-[#0F4E97] text-sm">Min. Spend $1</p>
                <p className="text-gray-400 text-xs">Valid Till: 22.11.2024</p>
              </div>
              <button className="px-4 py-2 bg-[#0F4E97A5] text-white text-sm">
                Claim
              </button>
            </div>
            <div className="border border-dashed border-[#0F4E97A5] bg-[#0f4e9715] px-3 py-6 flex items-center justify-between">
              <div>
                <h4 className="text-[#0F4E97] font-bold">$0.4 off</h4>
                <p className="text-[#0F4E97] text-sm">Min. Spend $6</p>
                <p className="text-gray-400 text-xs">Valid Till: 22.11.2024</p>
              </div>
              <button className="px-4 py-2 bg-[#0F4E97A5] text-white text-sm">
                Claim
              </button>
            </div>
          </div>
        </div> */}
        <div>
          <p className="mb-3">Recommended For You</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {top_products?.data?.data?.length != 0 &&
              top_products?.data?.data.map((item, index) => (
                <ProductItem
                  id={item?.id}
                  key={index}
                  title={item?.name}
                  link={`/products/${item?.id}`}
                  image={item?.thumbnail_image}
                  discount={item?.discount}
                  cashback={10}
                  price={item?.stroked_price}
                  salePrice={item?.main_price}
                  sold={item?.sales}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
