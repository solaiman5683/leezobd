import { LineProgress } from "keep-react";
import Image from "next/image";

const FlashSaleItem = ({ imageSrc, discount, price, progress, itemsLeft }) => {
  return (
    <div className="flex flex-col gap-2 p-4 border hover:border-red-400 transition-all duration-300 ">
      <div className="relative">
        <Image
          src={imageSrc}
          alt=""
          width={200}
          height={200}
          className="w-full h-auto object-cover"
        />
        <p className="absolute top-0 right-0 px-2 bg-orange-200 font-bold text-red-600 lg:text-xs text-[10px]">
          {discount}%
        </p>
      </div>
      <p className="lg:text-lg text-sm text-red-500 text-center">
        {/* <small>$</small> */}
        {price}
      </p>

      <div className="relative">
        <div className="lg:block hidden">
          <LineProgress
            linebg="bg-error-100"
            progress={progress}
            size="2xl"
            className="bg-gradient-to-r from-orange-400 to-red-500"
          />
        </div>
        <div className="lg:hidden">
          <LineProgress
            linebg="bg-error-100"
            progress={progress}
            size="lg"
            className="bg-gradient-to-r from-orange-400 to-red-500"
          />
        </div>
        <div className="absolute w-full top-0 left-0 h-full flex items-center justify-center">
          <p className="uppercase line-through lg:text-xs text-[8px] text-center font-bold">
             {itemsLeft} 
          </p>
        </div>
        {/* <div className="absolute -top-2 left-0 sm:block hidden">
          <img src="/image/icon/fire.png" className="w-6 h-7" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default FlashSaleItem;
