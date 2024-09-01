import Image from "next/image";
import Link from "next/link";

const ProductItem = ({
  image,
  discount,
  id,
  title,
  price,
  salePrice,
  sold,
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="border rounded-md border-transparent overflow-hidden hover:border-red-500 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div className="relative">
        <div className="h-[220px]">
          <Image
            src={image}
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-center object-contain"
          />
        </div>
        {discount && (
          <div className="absolute top-0 right-0">
            <div className="bg-orange-400 lg:px-4 lg:py-2 px-2 lg:text-base text-xs py-1">
              {discount}
            </div>
          </div>
        )}
      </div>

      <div className="lg:p-4 p-1">
        <p className="text-gray-700 lg:font-bold line-clamp-2 lg:text-base text-sm bg-opacity-50 w-full">
          {title}
        </p>
        {/* 
        {cashback && (
          <div className="flex my-2">
            <span className="px-3 py-1 bg-orange-200 text-orange-600 lg:text-xs text-[10px] font-semibold">
              {cashback}% Cashback
            </span>
          </div>
        )} */}

        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center gap-2">
            {salePrice && (
              <p className="text-lg line-through text-gray-500">{price}</p>
            )}
            {price && (
              <p className="text-red-500">
                {salePrice || price}
              </p>
            )}
          </div>

          {sold && <p className="text-gray-500 text-xs">{sold} sold</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
