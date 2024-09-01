"use client";
import { getAllFlashDeals } from "@/hooks/frontend/productApi";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import Slider from "react-slick";

const QuickNav = () => {
  const { data: flash_deals, isLoading } = useQuery("getAllFlashDeals", () =>
    getAllFlashDeals()
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 1,
    draggable: true,
    arrows: false,
  };
  return (
    <>
      <div className="hidden lg:flex gap-6 justify-around">
        {!isLoading &&
          flash_deals?.data?.data?.length != 0 &&
          flash_deals?.data?.data?.map((deal) => (
            <QuickNavItem
              link={`/flash-sale/${deal?.id}`}
              key={deal?.id}
              icon={deal?.banner}
              text={deal?.title}
            />
          ))}
      </div>

      {!isLoading && flash_deals?.data?.data?.length != 0 && (
        <div className="lg:hidden my-8">
          <Slider {...settings}>
            {flash_deals?.data?.data?.map((deal) => (
              <QuickNavItem
                link={`/flash-sale/${deal?.id}`}
                key={deal?.id}
                icon={deal?.banner}
                text={deal?.title}
              />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export const QuickNavItem = ({ icon, text, link = "/" }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center gap-3 mx-2 lg:mx-auto"
    >
      <Image
        src={icon}
        alt={text}
        width={60}
        height={60}
        className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]"
      />
      <p className="block text-center sm:w-[120px] text-xs sm:text-base">
        {text}
      </p>
    </Link>
  );
};

export default QuickNav;
