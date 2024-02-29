import Image from "next/image";
import React from "react";
import "./customStyle.css";

const FSCampignCard = ({ item, handleOnClick }) => {
  return (
    <div
      //relative
      className=" mx-auto w-[243px] "
    >
      <div className="">
        <Image
          src={item?.img?.product}
          height={243}
          width={243}
          alt={item?.productTitle}
          // h-[344px] opacity-0 transition-opacity duration-1000
          className={"rounded-[20px] min-h-[243px] w-[243px]   "}
          onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        />
      </div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.9)",
        }}
        // absolute bottom-0
        className="w-[243px] min-h-[82px] p-4 bg_prim hover:text-red-500 rounded-bl-[16px] rounded-br-[16px]"
      >
        {/* PROGRESS BAR */}
        {/* <progress
          className="progress progress-primary w-full h-[6px]"
          value={item?.orderCount ? item?.product?.orderCount : 0}
          max={item?.stockQty ? item?.stockQty : 100}
        /> */}

        {/* SELLING INFO */}
        <p className="prim_text_lg secondary_text_color mt-1">{item?.title}</p>
        <p className="sec_text_md secondary_text_color">{item?.productTitle}</p>
        <p className="prim_text_sm secondary_text_color mt-1">
          {item?.orderCount} {" of "} {item?.stockQty}
          {" sold"}
        </p>

        {/* <div className="grid grid-cols-2 gap-2 mt-2">
          <button
            onClick={handleOnClick}
            className="primary_text_color text-[12px] py-1 rounded-lg bg_sec"
            type=""
          >
            Prize Details
          </button>
          <button
            className="primary_text_color text-[12px]  py-1 rounded-lg bg-primary"
            type=""
          >
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FSCampignCard;
