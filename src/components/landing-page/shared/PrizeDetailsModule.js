"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
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
    // backgroundColor: "#1A1A1A",
    backgroundColor: "#eeeeee",
    padding: 0,
    borderRadius: 20,
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const PrizeDetailsModule = ({ priceDetails, show, setShow, handleCart }) => {
  const [isPDSeleceted, setIsPDSeleceted] = useState(true);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let h = windowSize.current[1] - 40;
  let w = windowSize.current[0];

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
              src={priceDetails?.img?.prize}
              height={680}
              width={560}
              alt="product image"
              className="rounded-xl "
            />

            <Image
              className="lg:block sm:hidden h-[85px] w-[90px] rounded-xl mt-[-89px] ml-auto mr-[5px]"
              src={priceDetails?.img?.product}
              height={85}
              width={90}
              alt={priceDetails?.img?.product + " image"}
            />

            <Image
              className="lg:hidden sm:block  h-[60px] w-[65px] rounded-xl  mt-[-65px] ml-auto mr-[5px]"
              src={priceDetails?.img?.product}
              height={60}
              width={65}
              alt={priceDetails?.img?.product + " image"}
            />
          </div>

          <p className="lg:text-[20px] sm:text-[16px] font-bold mt-6">
            {priceDetails?.productTitle?.replace(".", " ")}{" "}
            {priceDetails?.title}
          </p>

          <p className="text-left text-[12px] my-1 text-primary">
            Closing Date{": "}
            {new Date(priceDetails?.validity || 0).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>

          {/*
          <div className="flex justify-between items-start   gap-2 mt-3 mb-8">
            <div className="w-8/12 lg:text-[14px] sm:text-[12px]  font-medium">
              <p className="text-left my-1 text-primary">
                Closing Date{": "}
                {new Date(priceDetails?.validity || 0).toLocaleDateString(
                  "en-us",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </p>
            </div>{" "}
           
            <div className="w-4/12 flex justify-end">
             <Image
                className="lg:block sm:hidden cursor-pointer opacity-0 transition-opacity duration-1000 h-[105px] w-[110px] rounded-xl border-2 border-white"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                src={priceDetails?.img?.product}
                height={125}
                width={130}
                alt={priceDetails?.img?.product + " image"}
              />
              <Image
                className="lg:hidden sm:block cursor-pointer opacity-0 transition-opacity duration-1000 h-[90px] w-[95px] rounded-xl border-2 border-white"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                src={priceDetails?.img?.product}
                height={90}
                width={95}
                alt={priceDetails?.img?.product + " image"}
              />
            </div> 
          </div>*/}

          <div>
            <div className="flex justify-center lg:text-[14px] sm:text-[10px] my-6">
              <button
                onClick={() => setIsPDSeleceted(true)}
                className={
                  isPDSeleceted
                    ? "shadow-lg px-4 py-2 bg-nutral rounded-tl-full rounded-bl-full"
                    : "shadow-lg px-4 py-2 bg_sec primary_text_color rounded-tl-full rounded-bl-full"
                }
              >
                Campaign details
              </button>

              <button
                onClick={() => setIsPDSeleceted(false)}
                className={
                  isPDSeleceted
                    ? "shadow-lg px-4 py-2 bg_sec primary_text_color rounded-tr-full rounded-br-full"
                    : "shadow-lg px-4 py-2 bg-nutral rounded-tr-full rounded-br-full"
                }
              >
                Product details
              </button>
            </div>

            <p className="lg:text-[12px] sm:text-[10px]">
              {isPDSeleceted ? (
                priceDetails?.description
              ) : (
                <>
                  {priceDetails?.prizeDiscription.split("</br>")[0]}
                  <br />
                  {priceDetails?.prizeDiscription.split("</br>")[1]}
                </>
              )}
            </p>
          </div>
        </div>

        {/* BUTON THINGS */}
        <div className="grid grid-cols-2 justify-between items-center gap-4 bg_sec px-2 py-4 shadow-inner">
          <div className=" p-2 ">
            <p className="lg:text-[10px] sm:text-[8px] font-semibold">
              Draw Date{": "}
              {new Date(priceDetails?.drawDate || 0).toLocaleDateString(
                "en-us",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              )}{" "}
              or earlier if the campaign is sold out.
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
            {/* <button
              onClick={() => handleCart(priceDetails)}
              type=""
              className="shadow-lg secondary_text_color lg:text-[12px] sm:text-[10px] rounded-lg bg-primary py-2 px-4 font-mr font-bold"
            >
              Add to cart
            </button> */}
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default PrizeDetailsModule;
