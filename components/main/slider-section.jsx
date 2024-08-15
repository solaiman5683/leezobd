"use client";
import Image from "next/image";
import Slider from "react-slick";

import Link from "next/link";
import banner1 from "/public/banner1.png";
import image2 from "/public/banner2.png";
import image3 from "/public/banner3.png";
import image1 from "/public/banner4.png";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    draggable: true,
    arrows: true,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Autoplay interval in milliseconds
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
          <Slider {...settings}>
            <Image
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
            />
          </Slider>
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
          <Slider {...settings}>
            <div className="w-full h-[150px]">
              <Image
                src={image1}
                alt="img"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>

            <div className="w-full h-[150px]">
              <Image
                src={image2}
                alt="img"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-[150px]">
              <Image
                src={image3}
                alt="img"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
          </Slider>
        </div>
        <div className="w-full h-[40px] col-span-5 px-2">
          <Link href={"/top-products"}>
            <Image
              src={banner1}
              alt="img"
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
