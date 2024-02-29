"use client";

import { getCampaign } from "@app/redux/actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Section1 from "@components/landing-page/Section1/Section1";
import Section2 from "@components/landing-page/Section2/Section2";
import Section3 from "@components/landing-page/Section3/Section3";
import Section4 from "@components/landing-page/Section4/Section4";
import Section5 from "@components/landing-page/BlogSection/Section5";

const page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaign());
  }, []);

  return (
    <div className=" lg:py-0 md:py-0 w-full  ">
      <div className="w-full rounded-[16px] ">
        {/* SECTION 1 */}
        <Section1 />

        <div className="lg:py-[51px] sm:py-[30px]" />
        {/* EXPLORE CAMPAIGN 2 */}
        <Section2 />

        {/* SELLING FAST 3 */}
        {/* <div className="lg:py-[51px] sm:py-[30px]" />
        <Section3 /> */}

        {/* WINNERS 4 */}
        {/* <div className="lg:py-[51px] sm:py-[30px]" />
        <Section4 /> */}

        {/* BLOGS 5 */}
        <div className="lg:py-[51px] sm:py-[30px]" />
        <Section5 />
      </div>
    </div>
  );
};

export default page;
