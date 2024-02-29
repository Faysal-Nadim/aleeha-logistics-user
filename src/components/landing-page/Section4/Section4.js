"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/logo/lww.svg";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import sec4flash from "../../../../public/assets/landingPage/section4/g10.png";
import Winniers from "./Winniers";

const Section4 = () => {
  const [startAt, setStartAt] = useState(0);
  const [data, setData] = useState([]);

  const handleLeftClick = () => {
    if (startAt > 0) {
      setStartAt((value) => value - 1);
    }
  };
  const handleRightClick = () => {
    if (startAt < data.length) {
      setStartAt((value) => value + 1);
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto lg:px-4 sm:px-4  lg:py-0 sm:py-4">
      <div className="max-w-[1280px] mx-auto sm:min-h-[632px] relative bg_sec_light lg:rounded-[37px] sm:rounded-none lg:p-0 lg:pl-28 lg:py-28 sm:p-4 flex lg:justify-between sm:justify-center lg:flex-row sm:flex-col lg:gap-8 sm:gap-2">
        <div className="lg:w-4/12 sm:w-full h-full">
          <div className="flex gap-1 justify-start lg:items-center sm:items-center">
            <Image
              className="lg:block sm:hidden mb-3"
              src={logo}
              alt="AleehaLogistics logo"
              height={36}
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
              Winners
            </p>
          </div>
          <p className="lg:text-[14px] sm:text-[12px]  font-sora mt-4 mb-8">
            Join the ranks of our esteemed winners by shopping at
            AleehaLogistics, and you might be the next one to experience the
            exhilaration of claiming a grand prize. Your journey towards winning
            starts here!
          </p>

          <div className="gap-4 lg:flex sm:hidden">
            <button onClick={handleLeftClick} className="white_btn_outline_lg ">
              {LeftArrowWhite}
            </button>
            <button
              onClick={handleRightClick}
              className="white_btn_outline_lg "
            >
              {RightArrowWhite}
            </button>
          </div>
          {/* <Image
            src={sec4flash}
            height={370}
            width={380}
            alt=""
            className="absolute bottom-0 "
          /> */}
        </div>
        <div className="lg:w-7/12 sm:w-full h-full lg:overflow-x-hidden sm:overflow-x-auto relative">
          <Winniers data={data} startAt={startAt} />
        </div>
      </div>
    </section>
  );
};

export default Section4;
