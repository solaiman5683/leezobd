"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

const ProductGallery = ({ images, activeImage, setActiveImage }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number + 1,
    });
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="space-y-6">
      <Image
        src={
          (images?.[activeImage]?.path
            ? images[activeImage]?.path
            : images?.[activeImage]) ||
          '/'
        }
        onClick={() => openLightboxOnSlide(activeImage)}
        alt=""
        width={1000}
        height={1000}
        className="h-[500px] w-full object-cover cursor-pointer"
      />

      {images && images?.length != 0 && (
        <Slider {...settings}>
          {images.map((item, i) => (
            <div
              key={i}
              onMouseOver={() => setActiveImage(i)}
              onClick={() => {
                setActiveImage(i);
                openLightboxOnSlide(i);
              }}
              className={`px-2 cursor-pointer group focus:outline-none`}
            >
              <Image
                src={item?.path ? item?.path : item}
                alt=""
                width={1000}
                height={1000}
                className={`border-2 group-hover:border-red-500 h-24 w-full object-cover ${
                  activeImage === i ? "border-red-500" : "border-transparent"
                }`}
              />
            </div>
          ))}
        </Slider>
      )}

      {images && images?.length != 0 && (
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images.map((item, i) => (
            <div
              key={i}
              className={`px-2 cursor-pointer group focus:outline-none`}
            >
              <Image
                src={item?.path ? item?.path : item}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          slide={lightboxController.slide}
        />
      )}
    </div>
  );
};

export default ProductGallery;
