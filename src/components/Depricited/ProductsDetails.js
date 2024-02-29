"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";

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
    backgroundColor: "#1A1A1A",
    padding: 0,
    borderRadius: 20,
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const ProductsDetails = ({ priceDetails, show, setShow, handleCart }) => {
  const [isPDSeleceted, setIsPDSeleceted] = useState(true);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let h = windowSize.current[1] - 40;
  let w = windowSize.current[0];

  if (w < 480) {
    // w = w - 25;
    w = Math.ceil(w * (4.5 / 5));
    // h = "auto";
    h = Math.ceil(h * (3.5 / 4)) + "px";
  } else {
    w = 520;
    // h = h + "px";
    h = Math.ceil(h * (3 / 4)) + "px";
  }

  const [pImg, setPImg] = useState(priceDetails?.img?.product);
  const [p1Img, setP1Img] = useState(priceDetails?.img?.prize);
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    setPImg(priceDetails?.img?.product);
    setP1Img(priceDetails?.img?.prize);
  }, [priceDetails]);

  const handleSwap = () => {
    setPImg(p1Img);
    setP1Img(pImg);
  };

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
              src={pImg}
              height={680}
              width={560}
              alt="product image"
              className="rounded-xl "
            />

            <Image
              onClick={handleSwap}
              className="lg:block sm:hidden w-[90px] rounded-xl mt-[-140px] ml-auto mr-[5px] cursor-pointer"
              src={p1Img}
              height={85}
              width={90}
              alt={priceDetails?.title + " image"}
            />

            <Image
              onClick={handleSwap}
              className="lg:hidden sm:block w-[65px] rounded-xl  mt-[-98px] ml-auto mr-[5px] cursor-pointer"
              src={p1Img}
              height={60}
              width={65}
              alt={priceDetails?.title + " image"}
            />
          </div>

          <p className="lg:text-[20px] sm:text-[16px] font-bold mt-6">
            {priceDetails?.productTitle}
          </p>

          <div>
            <p className="lg:text-[12px] sm:text-[10px] mt-4">
              {"Product description: "}
              {priceDetails?.description}
            </p>
          </div>
        </div>

        {/* BUTON THINGS */}
        <div className="grid grid-cols-2 justify-between items-center gap-4 bg_sec px-2 py-4 shadow-inner">
          <div className=" p-2 ">
            <p className="lg:text-[14px] sm:text-[12px] font-semibold">
              Price {": AED "} {priceDetails?.price}
            </p>
          </div>
          <div className="gap-2 flex justify-end">
            <button
              onClick={() => setShow(false)}
              type=""
              className="shadow-lg primary_text_color lg:text-[12px] sm:text-[10px] rounded-lg bg-neutral py-2 px-4 font-mr font-bold"
            >
              Close
            </button>
            <button
              onClick={() => handleCart(priceDetails)}
              type=""
              className="shadow-lg primary_text_color lg:text-[12px] sm:text-[10px] rounded-lg bg-primary py-2 px-4 font-mr font-bold"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ProductsDetails;
