import React from "react";
import Image from "next/image";
import Link from "next/link";
const Product = ({ title, src, price, id }) => {
  return (
    <Link
      href={"/product/" + id}
      className="bg-white max-w-[10rem] sm:max-w-[12rem] p-2  shadow-md  rounded"
    >
      <div className="relative w-full   aspect-[3/4]">
        <Image src={src} className="object-cover rounded" alt={title} fill />
      </div>
      <div className=" mt-2 border-t-[1px]">
        <p className="truncate text-sm font-medium sm:text-base">{title}</p>
        <h4 className="text-sm">Rs {price}</h4>
      </div>
    </Link>
  );
};

export default Product;
