import React from "react";
import Image from "next/image";
import Link from "next/link";
import Product from "./Product";
const Category = ({ cat, data }) => {
  return (
    <div className="mb-16">
      <p className="text-center my-4 text-md sm:text-xl font-semibold ">
        {cat.toUpperCase()}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 ">
        {data.map((s) => {
          return (
            <Product
              price={s.price}
              title={s.title}
              src={s.image}
              key={s.id}
              id={s.id}
            />
            // <Link
            //   href={"/product/" + s.id}
            //   key={s.id}
            //   className="bg-white max-w-[10rem] sm:max-w-[12rem] p-2  shadow-md  rounded"
            // >
            //   <div className="relative w-full   aspect-[3/4]">
            //     <Image
            //       src={s.image}
            //       className="object-cover rounded"
            //       alt={s.title}
            //       fill
            //     />
            //   </div>
            //   <div className=" mt-2 border-t-[1px]">
            //     <p className="truncate text-sm font-medium sm:text-base">
            //       {s.title}
            //     </p>
            //     <h4 className="text-sm">Rs {s.price}</h4>
            //   </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
