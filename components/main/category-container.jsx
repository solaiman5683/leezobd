"use client";

import Slider from "react-slick";
import CategoryItem from "./category-item";
import { useQuery } from "react-query";
import { getCategories } from "@/hooks/frontend/categoryApi";
import { TbCategory } from "react-icons/tb";

const CategoryContainer = () => {
  const { data: categories, isLoading } = useQuery("categories", () =>
    getCategories()
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    rows: 2,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:my-8 my-3 bg-white">
      <p className="lg:p-4 p-4 lg:text-lg text-gray-700 border flex items-center gap-2">
        <TbCategory size={22} />
        Categories
      </p>{" "}
      {/* {categories?.data?.data?.length > 0 && ( */}
      {/* <Slider {...settings}>
        <CategoryItem
          image="/image/category/1.png"
          text="Women's Apparel"
          link="/category/1"
        />
        {categories?.data?.data?.map((category) => (
          <CategoryItem
            key={category?.id}
            image={category?.icon}
            text={category?.name}
            link={`/category/${category?.id}`}
          />
        ))}
      </Slider> */}
      {/* )} */}
      <div className="flex items-center gap-5 w-[90%] mx-auto overflow-hidden overflow-x-visible py-3">
        {categories?.data?.data?.map((category) => (
          <CategoryItem
            key={category?.id}
            image={category?.icon}
            text={category?.name}
            link={`/category/${category?.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
