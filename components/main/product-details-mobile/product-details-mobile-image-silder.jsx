/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

const images = ["/image/product/shoe1.jpeg", "/image/product/shoe2.jpeg"];

const ProductDetailsMobileImageSlider = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };
  
  const variationSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
  };

  return (
    <div>
      <div className="relative">
        {photos?.length === 1 ? (
          <>
            {photos?.map((item, i) => (
              <div className="h-[400px]" key={i}>
                <img
                  src={item?.path}
                  className="w-full h-full object-center"
                  alt={`Product image ${i + 1}`}
                />
              </div>
            ))}
          </>
        ) : (
          <Slider {...settings} ref={sliderRef}>
            {photos?.map((item, i) => (
              <div className="h-[400px]" key={i}>
                <img
                  src={item?.path}
                  className="w-full h-full object-cover"
                  alt={`Product image ${i + 1}`}
                />
              </div>
            ))}
          </Slider>
        )}
        <p className="absolute bottom-4 right-4 text-xs px-3 py-1 bg-white/75 rounded-full flex items-center justify-center">
          ({activeIndex + 1}/{photos.length})
        </p>
      </div>
      <div className="p-2 space-y-3">
        <p>{photos.length} Variations Available</p>
        <Slider {...variationSettings}>
          {photos.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                sliderRef.current.slickGoTo(i);
                setActiveIndex(i);
              }}
              className={`px-2 cursor-pointer group focus:outline-none`}
            >
              <Image
                src={item?.path}
                alt=""
                width={200}
                height={200}
                className={`border-2 group-hover:border-red-500 h-20 w-full object-cover ${
                  activeIndex === i ? "border-red-500" : "border-transparent"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailsMobileImageSlider;
