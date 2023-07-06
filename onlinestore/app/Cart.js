"use client";
import { useEffect, useState } from "react";

const Cart = ({ productData }) => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState(
    localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))
  );
  let present = false;
  cart?.map((s) => {
    if (s?.product?.id === productData.id) {
      present = true;
    }
  });
  const setLocalStorage = (x) => {
    if (localStorage.getItem("cart")) {
      let prev = JSON.parse(localStorage.getItem("cart"));
      let latest = [...prev, x];
      localStorage.setItem("cart", JSON.stringify(latest));
    } else {
      localStorage.setItem("cart", JSON.stringify([x]));
    }
    if (cart) {
      setCart([...cart, x]);
    } else {
      setCart([x]);
    }
  };
  const deleteHandeler = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart?.filter((s) => s.product.id !== productData.id);
    console.log(newCart);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <div className="flex gap-5">
      {present ? (
        <button
          className="py-2  px-4 border-[1px] rounded-md border-black hover:bg-black hover:text-white"
          onClick={deleteHandeler}
        >
          Remove From Cart
        </button>
      ) : (
        <>
          <div className="border-[1px] border-black py-2  px-4 rounded-md">
            <span
              className="hover:cursor-pointer"
              onClick={() => {
                if (quantity >= 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </span>
            <span className="mx-4">{quantity}</span>
            <span
              className="hover:cursor-pointer"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </span>
          </div>
          <button
            className="py-2  px-4 border-[1px] rounded-md border-black hover:bg-black hover:text-white "
            onClick={() => {
              setLocalStorage({
                quantity: quantity,
                product: productData,
              });
            }}
          >
            Add To Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
