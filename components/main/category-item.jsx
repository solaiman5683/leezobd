"use client";
import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ image, text, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center lg:justify-center lg:border lg:p-4"
    >
      <div className="w-[100px] h-[100px] p-1 border rounded-full overflow-hidden">
        <Image
          src={image}
          alt=""
          width={110}
          height={500}
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-center text-xs lg:text-sm mt-1">{text}</p>
    </Link>
  );
};

export default CategoryItem;
