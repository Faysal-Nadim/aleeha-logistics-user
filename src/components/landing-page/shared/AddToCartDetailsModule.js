"use client";

import { addToCart } from "@app/redux/actions";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "#1A1A1A",
    backgroundColor: "#eeeeee",
    padding: 0,
    borderRadius: 20,
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const AddToCartDetailsModule = ({ priceDetails, show, setShow }) => {
  const dispatch = useDispatch();
  const [productQty, setProductQty] = useState(1);
  const [isPDSeleceted, setIsPDSeleceted] = useState(true);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let h = windowSize.current[1] - 40;
  let w = windowSize.current[0];

  const handleCart = () => {
    dispatch(addToCart(priceDetails, productQty));
  };
  if (w < 480) {
    w = Math.ceil(w * (4.5 / 5));
    h = Math.ceil(h * (3.5 / 4));
    if (h > 680) {
      h = 680;
    }
    h = h + "px";
  } else {
    w = 520;
    h = Math.ceil(h * (3.8 / 4));
    if (h > 680) {
      h = 680;
    }

    h = h + "px";
  }

  return (
    <ReactModal
      isOpen={show}
      style={customStyles}
      onRequestClose={() => setShow(false)}
    >
      <div
        style={{
          height: `${h}`,
          width: `${w}px`,
        }}
        className=" w-full flex flex-col justify-between font-sora"
      >
        <div className="lg:mx-4 lg:mt-4 lg:px-0 lg:pt-0 sm:px-2 sm:pt-2 overflow-y-auto rounded-tl-[14px] rounded-tr-[14px] scrollable_element pb-8">
          <div>
            <Image
              src={priceDetails?.img?.product}
              height={680}
              width={560}
              alt="product image"
              className="rounded-xl "
            />
          </div>

          <div className="px-4">
            <p className="lg:text-[20px] sm:text-[16px] font-bold mt-6">
              {priceDetails?.productTitle?.replace(".", " ")}{" "}
            </p>
            <p className="lg:text-[14px] sm:text-[12px] text-primary font-semibold mt-1">
              Price: AED {priceDetails?.price}
            </p>

            <div className="flex justify-center lg:text-[14px] sm:text-[10px] my-6">
              {/* <button
                onClick={() => setIsPDSeleceted(true)}
                className={
                  isPDSeleceted
                    ? "shadow-lg px-4 py-2 bg-nutral rounded-tl-full rounded-bl-full text-xs"
                    : "shadow-lg px-4 py-2 bg_sec primary_text_color rounded-tl-full rounded-bl-full text-xs"
                }
              >
                Product Details
              </button> */}

              <button
                className={"shadow-lg px-4 py-2 bg-nutral rounded-full text-xs"}
              >
                Campaign Details
              </button>
            </div>

            {/* <p className="lg:text-[12px] sm:text-[10px]">Details </p> */}
            <div className="lg:text-[12px] sm:text-[10px] primary_text_color">
              <div className="flex  justify-center items-start">
                <div className="w-1/2 mr-2">
                  <img
                    className="  rounded-xl"
                    src={priceDetails?.img?.prize}
                    alt={priceDetails?.title}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  {" "}
                  <span>Win {priceDetails?.title}</span>
                  <br />
                  <br />
                  <span>
                    {" "}
                    Closing Date{": "}
                    {priceDetails?.displayStatus[0].status === "Selling Fast"
                      ? "Once Sold Out"
                      : new Date(
                          priceDetails?.validity || 0
                        ).toLocaleDateString("en-us", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                  </span>
                  <br />
                  <span>
                    {" "}
                    Draw Date{": "}
                    {priceDetails?.displayStatus[0].status === "Selling Fast"
                      ? "Once Sold Out"
                      : new Date(
                          priceDetails?.drawDate || 0
                        ).toLocaleDateString("en-us", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                  </span>
                  <br />
                  <br />
                  <span>Discription: {priceDetails?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUTON THINGS */}
        <div className="grid grid-cols-2 justify-between items-center gap-4 bg_sec px-6 py-4 shadow-inner">
          <div className="flex lg:gap-1 sm:gap-1 justify-start items-center ">
            <button
              type=""
              className="btn_gray_control_cart_count bg-info "
              //   onClick={() => setProductQty(productQty - 1)}
              disabled={productQty > 1 ? false : true}
              onClick={() => {
                setProductQty(productQty - 1);
              }}
            >
              -
            </button>
            <button type="" className="btn_gray_control_cart_count bg-neutral">
              {productQty}
            </button>
            <button
              type=""
              className="btn_gray_control_cart_count bg-info"
              onClick={() => setProductQty(productQty + 1)}
            >
              +
            </button>
          </div>

          <div className="gap-1 flex justify-end">
            <button
              onClick={() => handleCart()}
              type=""
              className="shadow-lg secondary_text_color lg:text-[12px] sm:text-[10px] rounded-lg bg-primary py-2 px-4 font-mr font-bold"
            >
              Add to cart
            </button>
            <button
              onClick={() => setShow(false)}
              type=""
              className="shadow-lg primary_text_color lg:text-[12px] sm:text-[10px] rounded-lg bg-neutral py-2 px-4 font-mr font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AddToCartDetailsModule;
