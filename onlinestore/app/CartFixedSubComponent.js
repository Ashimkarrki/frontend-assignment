"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const CartFixedSubComponent = ({ setIsClicked }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))
  );
  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 bg-stone-500/[0.5]"
      onClick={() => {
        setIsClicked(false);
      }}
    >
      <div
        className="fixed bottom-0 right-0 w-full sm:max-w-[30rem] max-h-screen overflow-y-scroll   bg-white border-[1px] rounded"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {cart.length !== 0 ? (
          <>
            {" "}
            <p className="text-center mt-2">Shopping Cart</p>
            <div className="flex flex-col gap-4 z-10 ">
              {cart?.map((s) => {
                return (
                  <Link
                    onClick={() => {
                      setIsClicked(false);
                    }}
                    href={"/product/" + s.product.id}
                    key={s.product.id}
                    className="flex items-center gap-4 p-4 "
                  >
                    <div className="relative w-full max-w-[5rem]   aspect-[3/4]">
                      <Image
                        src={s.product.image}
                        className="object-cover rounded"
                        alt={s.product.title}
                        fill
                      />
                    </div>
                    <div>
                      <p className=" w-full">{s.product.title}</p>
                      <p>
                        {s.quantity} x Rs {s.product.price}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center p-2">Cart Is Empty</div>
        )}
      </div>
    </div>
  );
};

export default CartFixedSubComponent;
