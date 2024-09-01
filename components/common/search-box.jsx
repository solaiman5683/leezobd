import { getSearchProducts } from "@/hooks/frontend/productApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useQuery } from "react-query";
import { AutoComplete } from "rsuite";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const router = useRouter();
  const { data: products, refetch } = useQuery(
    `products_${debouncedSearch}`,
    () => getSearchProducts({ query: `name=${debouncedSearch}` }),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch != "") {
      refetch();
    }
  }, [debouncedSearch, refetch]);

  return (
    <>
      <div className="hidden lg:flex w-[70%] flex-col gap-2 items-center">
        <div className="bg-white w-full flex items-center rounded-lg border hover:border-[#4F97A5] transition-all duration-300">
          <AutoComplete
            data={
              products?.data?.data?.length > 0
                ? products?.data?.data?.map((item) => item?.name)
                : []
            }
            onSelect={(item) =>
              router.push(
                `/products/${
                  products?.data?.data?.find(
                    (product) => product?.name === item
                  )?.id
                }`
              )
            }
            placeholder="Search in LeezoBD"
            className="border-0 shadow-none z-[999999999999] h-auto"
            style={{ width: "100%" }}
            onChange={(e) => setSearch(e)}
          />
          <button className="bg-black border-2 border-black text-white p-2 rounded-r-lg overflow-hidden px-8">
            Search
          </button>
        </div>
      </div>

      <div className="lg:hidden bg-white w-full py-1 flex items-center">
        <div className="bg-white w-full group flex items-center rounded-lg border hover:border-[#4F97A5] transition-all duration-300">
          <AutoComplete
            data={
              products?.data?.data?.length > 0
                ? products?.data?.data?.map((item) => item?.name)
                : []
            }
            onSelect={(item) =>
              router.push(
                `/products/${
                  products?.data?.data?.find(
                    (product) => product?.name === item
                  )?.id
                }`
              )
            }
            placeholder="Search in LeezoBD"
            className="border-0 shadow-none z-[999999999999] h-auto"
            style={{ width: "100%" }}
            onChange={(e) => setSearch(e)}
          />
          <button className="bg-black border-2 border-black text-white p-2 rounded-r-lg overflow-hidden px-8 group-hover:border-[#000000] transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
