"use client";
import Section1 from "@components/landing-page/Section1/Section1";
import Section2 from "@components/landing-page/Section2/Section2";
import Section3 from "@components/landing-page/Section3/Section3";
import Section4 from "@components/landing-page/Section4/Section4";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCampaign } from "./redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaign());
  }, []);
  return (
    <>
      <div className=" lg:py-0 md:py-0    w-full ">
        <div className="w-full  ">
          {/* HERO  */}
          <Section1 />

          {/* EEXPLORE CAMPAIGN */}
          <div className="lg:py-[40px] sm:py-[26px]" />
          <Section2 />

          {/* SELLING FAST */}
          {/* <div className="lg:py-[40px] sm:py-[26px]" />
        <Section3 /> */}

          {/* Winners */}
          {/* <div className="lg:py-[40px] sm:py-[26px]" />
        <Section4 /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
