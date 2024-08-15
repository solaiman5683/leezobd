"use client";
import Image from "next/image";
import Slider from "react-slick";

function TrackPackages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-white rounded-xl p-3 m-3" id="track-package">
      <p className="text-sm mb-3">Track Package</p>
      <Slider {...settings}>
        <div>
          <div className="flex gap-3 items-center w-full">
            <div>
              <Image
                src="/image/product/1.jpeg"
                alt="product"
                width={100}
                height={100}
                className="w-14 h-14 object-cover"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <p className="text-green-400 text-sm">Delivered</p>
                <p className="text-[11px]">5/22/2024 - 7:51:37 AM</p>
              </div>
              <p className="text-xs">
                Your package has been delivered. Tap here to share a review.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center w-full">
            <div>
              <Image
                src="/image/product/2.jpeg"
                alt="product"
                width={100}
                height={100}
                className="w-14 h-14 object-cover"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <p className="text-green-400 text-sm">Delivered</p>
                <p className="text-[11px]">5/22/2024 - 7:51:37 AM</p>
              </div>
              <p className="text-xs">
                Your package has been delivered. Tap here to share a review.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center w-full">
            <div>
              <Image
                src="/image/product/3.jpeg"
                alt="product"
                width={100}
                height={100}
                className="w-14 h-14 object-cover"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <p className="text-green-400 text-sm">Delivered</p>
                <p className="text-[11px]">5/22/2024 - 7:51:37 AM</p>
              </div>
              <p className="text-xs">
                Your package has been delivered. Tap here to share a review.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TrackPackages;
