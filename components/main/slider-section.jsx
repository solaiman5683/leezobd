"use client";
import Image from "next/image";
import Slider from "react-slick";

import image1 from "/public/banner4.png";
import image2 from "/public/banner2.png";
import image3 from "/public/banner3.png";
import banner1 from "/public/banner1.png";
import Link from "next/link";
import { getSliders } from "@/hooks/frontend/frontend";
import { useQuery } from "react-query";

const SliderSection = () => {
  const { data: sliders } = useQuery("sliders", () => getSliders());

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    draggable: true,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <div className="md:grid hidden lg:grid-cols-8 items-center gap-4 w-full">
        <div className="lg:col-span-8" id="top-slider">
          {sliders?.data?.data?.length != 0 && (
            <Slider {...settings}>
              {/* <Image
            width={1000}
            height={1000}
            src="/banner4.png"
            alt=""
            className="w-full h-[450px] object-center rounded-lg"
          />

          <Image
            width={1000}
            height={1000}
            src="/banner3.png"
            alt=""
            className="w-full h-[450px] object-center rounded-lg"
          />

          <Image
            width={1000}
            height={1000}
            src="/banner2.png"
            alt=""
            className="w-full h-[450px] object-center rounded-lg"
          /> */}

              {sliders?.data?.data?.map((slider, key) => (
                <Image
                  key={key}
                  width={1000}
                  height={1000}
                  src={slider?.photo}
                  alt=""
                  className="w-full h-[450px] object-center rounded-lg"
                />
              ))}
            </Slider>
          )}
        </div>
        <div className="lg:col-span-8">
          <Link href={"/top-products"}>
            <Image
              width={1000}
              height={1000}
              src="/banner1.png"
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>

      <div className="grid md:hidden grid-cols-1 items-center gap-4 w-full pb-2">
        <div className="col-span-5 px-2" id="top-slider">
          {sliders?.data?.data?.length != 0 && (
            <Slider {...settings}>
              {/* <div className="w-full h-[225px]">
              <Image
                src={image1}
                alt="img"
                className="w-full h-full object-center rounded-lg"
              />
            </div>

            <div className="!w-[92%] h-[225px] !mx-4 !rounded-[10px] overflow-hidden">
              <Image
                src={image2}
                alt="img"
                className="w-full h-full object-center"
              />
            </div>
            <div className="w-full h-[225px]">
              <Image
                src={image3}
                alt="img"
                className="w-full h-full object-center rounded-lg"
              />
            </div> */}

              {sliders?.data?.data?.map((slider, key) => (
                <div key={key} className="w-full h-[225px]">
                  <Image
                    src={slider?.photo}
                    alt="img"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-center rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        <div className="w-full h-[60px] col-span-5 px-2">
          <Link href={"/top-products"}>
            <Image
              src={banner1}
              alt="img"
              width={1000}
              height={1000}
              className="w-full h-full object-center rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
