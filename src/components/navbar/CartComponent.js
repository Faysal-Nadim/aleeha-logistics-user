"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSvg, cartSvgDark, cartSvgRED } from "../../../public/assets/Icons";

const CartComponent = () => {
  const cart = useSelector((state) => state.cart.cart);

  const totalItem = cart.cartItems
    ? Object.keys(cart.cartItems).reduce(function (qty, key) {
        return qty + cart.cartItems[key].qty;
      }, 0)
    : 0;

  return (
    <div className="prim_text_lg_reg flex  items-center gap-2">
      {cartSvgRED}
      <p className="flex gap-1 items-center">
        {/* <span className="lg:block md:hidden sm:hidden">Cart</span> */}
        <span className="">Cart</span>

        <div
          className={
            cart.cartItems && cart.cartItems.length > 0
              ? "bg-primary-red rounded-full h-[25px] w-[25px] flex justify-center items-center"
              : "hidden"
          }
        >
          <span
            className={
              "lg:text-[12px] md:text-[10px] sm:text-[10px] text-white"
            }
          >
            {totalItem}
          </span>
        </div>
      </p>
    </div>
  );
};

export default CartComponent;
