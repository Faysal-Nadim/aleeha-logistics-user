"use client";
import React, { useState } from "react";
import SellingFastProducts from "./SellingFastProducts";
import logo from "../../../../public/assets/logo/lww.svg";
import Image from "next/image";

let ecText =
  " Don't miss out on these upcoming campaigns that will elevate your lifestyle and make you stand out from the crowd. Shop now and experience the thrill of owning the most in-demand items at AleehaLogistics!";

const Section3 = () => {
  const [isSeeMoreOpen, setSeeMoreOpen] = useState(false);
  return (
    <section className="bg_sec lg:px-0 lg:py-20  sm:p-4">
      <div className="max-w-[1280px] mx-auto lg:px-4 sm:px-4  lg:py-0 sm:py-4">
        {/* HEADING */}

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-10 sm:px-2 justify-between items-center lg:gap-10 sm:gap-4">
          <div className="flex  gap-1 justify-start  lg:items-start sm:items-center">
            <Image
              className="lg:block sm:hidden mb-2"
              src={logo}
              alt="AleehaLogistics logo"
              height={55}
              width={100}
            />
            <Image
              className="lg:hidden sm:block mb-2"
              src={logo}
              alt="AleehaLogistics logo"
              height={23}
              width={60}
            />
            <p className="lg:text-[36px] sm:text-[16px] font-bold  font-sora">
              Upcoming
            </p>
            <p className="lg:text-[36px] sm:text-[16px] font-bold  font-sora">
              Campaigns
            </p>
            {/* <p className="lg:text-[36px] sm:text-[16px] font-bold  font-sora">
              Products
            </p> */}
          </div>
          <p className="lg:text-[14px] sm:text-[12px] lg:block font-sora pr-2">
            {isSeeMoreOpen ? ecText : ecText?.slice(0, 110) + ".. "}
            <span
              onClick={() => setSeeMoreOpen((current) => !current)}
              className="text-primary cursor-pointer"
            >
              {isSeeMoreOpen ? " See less" : " See more"}
            </span>
          </p>
        </div>

        {/* <div className="w-full border border-b-[#E3E1E5] lg:my-[32px] sm:my-8 lg:px-10 sm:px-2 " /> */}
      </div>

      <div className="lg:mt-16 sm:mt-8">
        <SellingFastProducts />
      </div>
    </section>
  );
};

export default Section3;
