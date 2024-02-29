"use client";
import React, { useState } from "react";
import ItemDisplay from "./ItemDisplay";
import { current } from "@reduxjs/toolkit";

const ecText =
  "AleehaLogistics is a cutting-edge online store that provides customers with a   one-of-a-kind shopping experience. What sets AleehaLogistics apart is its remarkable offering: with each purchase, customers receive a complimentary Prize Draw ticket, granting them the chance to win extravagant prizes. This unique feature adds an exciting element to the shopping journey, making AleehaLogistics a captivating destination for those seeking not only quality products but also the possibility of winning luxurious rewards. All draws are regulated by the Dubai Economy & Tourism. ";

const Section2 = () => {
  const [isSeeMoreOpen, setSeeMoreOpen] = useState(false);
  return (
    <section className="max-w-[1280px] mx-auto lg:px-4 sm:px-4  lg:py-0 sm:py-4">
      <div className="max-w-[1280px] mx-auto">
        {/* HEADING */}

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-10 sm:px-2 justify-between items-center lg:gap-20 sm:gap-4">
          <p className="lg:text-[36px] sm:text-[16px] font-bold  font-sora">
            Explore campaigns
          </p>
          <p className="lg:text-[12px] sm:text-[10px] lg:block font-sora pr-2">
            {isSeeMoreOpen ? ecText : ecText?.slice(0, 150) + ".. "}
            <span
              onClick={() => setSeeMoreOpen((current) => !current)}
              className="text-primary cursor-pointer"
            >
              {isSeeMoreOpen ? "See less" : " See more"}
            </span>
          </p>
        </div>
        {/* <div className="w-full border border-b-[#E3E1E5] lg:mt-[18px] lg:mb-[28px] sm:mt-8 sm:mb-8 " /> */}

        <div className="max-w-[1280px] mx-auto mt-6">
          <ItemDisplay />
        </div>
      </div>
    </section>
  );
};

export default Section2;
