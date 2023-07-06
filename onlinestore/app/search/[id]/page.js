import Product from "@/app/Product";
import React from "react";
const getProducts = async (searchTerm) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].title.toUpperCase().search(searchTerm.toUpperCase()) !== -1) {
      arr.push(data[i]);
    }
  }
  if (arr.length === 0) {
    return {
      status: false,
    };
  } else {
    return {
      status: true,
      data: arr,
    };
  }
};
const Page = async ({ params }) => {
  const data = await getProducts(params.id);
  console.log(data);
  if (!data.status) {
    return (
      <div className="sm:p-8 p-2 bg-stone-200 min-h-[37rem] text-center">
        No Results
      </div>
    );
  }
  return (
    <div className="sm:p-8 p-2 bg-stone-200 min-h-[37rem]">
      <div className="text-center my-4">Results ({data.data.length})</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4 ">
        {data.data.map((s) => {
          return (
            <Product
              key={s.id}
              title={s.title}
              src={s.image}
              price={s.price}
              id={s.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
