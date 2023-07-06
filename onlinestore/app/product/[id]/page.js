import React from "react";
import Image from "next/image";
import Star from "../../Star";
import Cart from "../../Cart";
import { notFound } from "next/navigation";
const getProduct = async (id) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/" + id);
    return await res.json();
  } catch (err) {
    notFound();
  }
};

const Page = async ({ params }) => {
  console.log("where");
  const data = await getProduct(params.id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-16 justify-between gap-8">
      <div className="relative w-full aspect-[3/4] items-start justify-self-center shadow-lg min-w-[12rem] max-w-[17rem]">
        <Image
          className="object-cover p-2"
          src={data.image}
          alt={data.title}
          fill
        />
      </div>
      <div className=" max-w-[30rem] col-span-2  self-start mt-4 flex flex-col gap-2 ">
        <p className="text-2xl">{data.title}</p>
        <p className="text-slate-400">Rs. {data.price}</p>
        <div className="flex gap-2">
          <Star number={data.rating.rate} />

          <span className="text-slate-400 text-sm border-l-2 pl-2">
            {data.rating.count} Customer Review
          </span>
        </div>
        <p className="text-sm">{data.description}</p>
        <Cart productData={data} />
      </div>
    </div>
  );
};

export default Page;
