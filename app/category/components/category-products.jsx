import ProductItem from "@/components/main/product-item";
import { Pagination } from "keep-react";
import Link from "next/link";
import { CaretLeft, CaretRight, DotsThree } from "phosphor-react";
import { useQuery } from "react-query";
import {
  getCategories,
  getSpecificCategories,
} from "@/hooks/frontend/categoryApi";

const CategoryProducts = ({ id }) => {
  const { data: get_specific_categories } = useQuery(
    "get_specific_categories",
    () => getSpecificCategories(Number(id))
  );

  const { data: categories, isLoading } = useQuery("categories", () =>
    getCategories()
  );

  return (
    <div className="grid grid-cols-5 gap-6 py-6">
      <div className="space-y-3">
        <div>
          <p className="flex items-center gap-2 border-b p-3 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
            <span>All Category</span>
          </p>

          <ul className="px-3 text-sm mt-2 space-y-2">
            {categories?.data?.data?.map((category) => (
              <li
                key={category?.id}
                className={`${
                  category?.id === Number(id) ? "text-[#F4580E]" : ""
                }`}
              >
                <Link
                  href={`/category/${category?.id}`}
                  className="ml-3 py-3 font-bold"
                >
                  {category?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="space-y-3">
          <p className="flex items-center gap-2 border-b p-3 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            <span>Search Filter</span>
          </p>

          <p className="text-sm">Shipped From</p>
          <ul className="px-3 text-sm space-y-3">
            <li>
              <label htmlFor="1">
                <input
                  type="checkbox"
                  id="1"
                  name="filter-1"
                  className="mr-2"
                />
                Test Filter
              </label>
            </li>
            <li>
              <label htmlFor="2">
                <input
                  type="checkbox"
                  id="2"
                  name="filter-1"
                  className="mr-2"
                />
                Test Filter
              </label>
            </li>
            <li>
              <label htmlFor="3">
                <input
                  type="checkbox"
                  id="3"
                  name="filter-1"
                  className="mr-2"
                />
                Test Filter
              </label>
            </li>
            <li>
              <label htmlFor="4">
                <input
                  type="checkbox"
                  id="4"
                  name="filter-1"
                  className="mr-2"
                />
                Test Filter
              </label>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="col-span-4 space-y-6">
        {/* <Sort /> */}

        {get_specific_categories?.data?.data.length === 0 ? (
          <h1 className="text-center text-xl">No Product found!</h1>
        ) : (
          <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-6 gap-4">
            {get_specific_categories?.data?.data.map((product) => (
              <ProductItem
                key={product?.id}
                id={product?.id}
                title={product?.name}
                link={product?.links?.details}
                image={product?.thumbnail_image}
                discount={product?.discount}
                cashback={10}
                price={product?.main_price}
                sold={product?.sales}
              />
            ))}
          </div>
        )}
        {/* <Pagination shape="circle" className="justify-center">
          <Pagination.Navigator shape="circle">
            <CaretLeft size={18} />
          </Pagination.Navigator>
          <Pagination.List>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item active>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>
              <DotsThree size={20} />
            </Pagination.Item>
            <Pagination.Item>10</Pagination.Item>
          </Pagination.List>
          <Pagination.Navigator shape="circle">
            <CaretRight size={18} />
          </Pagination.Navigator>
        </Pagination> */}
      </div>
    </div>
  );
};

export default CategoryProducts;
