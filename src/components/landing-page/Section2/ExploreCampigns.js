import Image from "next/image";
import React, { useEffect, useState } from "react";
import { shareSvg } from "../../../../public/assets/Icons";
import CopyToClipboard from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import CustomProgressBar from "@components/landing-page/Section2/CustomProgressBar";

let shoppingSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z"
      fill="#FF3624"
    />
  </svg>
);
let shoppingSvgWhite = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z"
      fill="white"
    />
  </svg>
);

let shoppingSvgYellow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z"
      fill="#F19C08"
    />
  </svg>
);

const ExploreCampigns = ({
  handleCart,
  item,
  setPriceDetails,
  setShow,
  setView,
}) => {
  let drawDate = new Date(
    item?.drawDate ? item?.drawDate : 0
  ).toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });

  const D = new Date();

  //   const calculateTimeLeft = () => {
  //     const now = new Date().getTime();
  //     const targetTime = new Date(item?.validity ? item?.validity : 0).getTime();
  //     const timeLeft = targetTime - now;
  //     // console.log(targetTime);

  //     if (timeLeft <= 0) {
  //       return {
  //         days: 0,
  //         hours: 0,
  //         minutes: 0,
  //         seconds: 0,
  //       };
  //     }

  //     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //     return {
  //       days,
  //       hours,
  //       minutes,
  //       seconds,
  //     };
  //   };

  //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setTimeLeft(calculateTimeLeft());
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, []);

  const [copyText, setCopyText] = useState("Click To Copy");

  const handleLinkCopied = () => {
    setCopyText("Copied");
  };

  return (
    <div className="transition-all ease-in-out flex lg:flex-row sm:flex-col justify-between items-center lg:gap-6 sm:gap-3 p-3    lg:rounded-[24px] sm:rounded-[12px] bg_sec_light lg:min-h-[340px]">
      <div className="flex lg:gap-10 md:gap-2 sm:gap-2 lg:flex-row md:flex-col sm:flex-col ">
        {/* CAMPIGN IMAGE */}
        <div className="">
          <Image
            src={item?.img?.prize}
            height={330}
            width={420}
            alt={item?.img?.prize + " image"}
            className="lg:block sm:hidden md:hidden lg:rounded-[16px] sm:rounded-[8px] lg:h-[330px] lg:w-[420px] sm:h-[260px] sm:w-[440px]  "
          />

          <Image
            // onClick={() => {
            //   setPriceDetails(item);
            //   setShow(true);
            // }}
            src={item?.img?.prize}
            height={350}
            width={440}
            alt={item?.img?.prize + " image"}
            className="lg:hidden sm:block md:block cursor-pointer lg:rounded-[16px] sm:rounded-[8px] lg:h-[350px] lg:w-[440px] sm:h-[260px] sm:w-[440px]"
          />
        </div>
        {/* CAMPAIGN INFO */}
        <div className="flex lg:flex-col sm:flex-row justify-between items-start">
          {/* WIN, CAMPAIGN TITLE, PRODUCT TITLE */}
          <div>
            <p className="lg:text-[32px] sm:text-[16px] font-sora font-bold text-primary">
              {item?.displayStatus[0]?.status === "Hero"
                ? "Campaign Closed"
                : "Win"}
            </p>
            <p className="lg:text-[32px] sm:text-[16px] font-sora font-bold">
              {item?.title}
            </p>
            <p className=" primary_text_color flex gap-2 items-center lg:text-[14px] sm:text-[14px]">
              <span className="lg:block sm:hidden"> {shoppingSvg} </span>
              <span>{item?.productTitle}</span>
            </p>

            {/* <p
              onClick={() => {
                setPriceDetails(item);
                setShow(true);
              }}
              className="lg:hidden cursor-pointer sm:text-[12px]  text-primary"
              disabled={true}
            >
              Tap to see more info
            </p> */}
          </div>

          {/* PRODUCT IMAGE +  DRAW DATE */}
          <div className="flex gap-4 items-end pt-4 pb-2">
            <Image
              src={item?.img?.product}
              height={93}
              width={100}
              alt={item?.img?.product + " image"}
              className="rounded-[12px] lg:block sm:hidden mt-2 h-[93px] w-[100px] border-2 border-[#eeeeee]"
            />
            <Image
              // onClick={() => {
              //   setPriceDetails(item);
              //   setShow(true);
              // }}
              src={item?.img?.product}
              height={58}
              width={61}
              alt={item?.title + " image"}
              className="rounded-[8px] cursor-pointer border border-[#eeeeee] lg:hidden md:block sm:block mt-1 h-[58px] w-[61px]"
            />
            {/* DRAW DATE */}
            <div className="lg:block md:hidden sm:hidden lg:text-[11px] sm:text-[120x] max-w-[214px] bg-[#f8f8f8] px-4 lg:py-6 sm:py-4 rounded-[10px] font-semibold  primary_text_color">
              <p>
                Draw Date:{" "}
                {item?.displayStatus[0].status === "Upcoming" ||
                item?.displayStatus[0].status === "Selling Fast"
                  ? "Once Sold Out"
                  : `${" " + drawDate} or earlier if the campaign is sold out.`}
              </p>
            </div>
          </div>
        </div>
        {/* DIVIDER  on SMALL SCREEN 1a1a1a*/}
        <div className="w-full border border-[#eeeeee] border-b lg:hidden sm:block " />
      </div>
      {/* PROGRESS BOX,COUNT DOWN ,BUTTONS */}
      <div className="flex lg:flex-row sm:flex-col lg:gap-8 sm:gap-0 md:gap-0 lg:min-h-[340px] lg:py-2 sm:py-2 lg:w-auto sm:w-full">
        {/* BUY INFO */}
        <div className="flex lg:flex-col justify-between lg:gap-2 sm:gap-4 lg:pr-4 sm:pr-0">
          {/* PROGRESSBAR */}
          {/*----------------- SHOULD BE EDITED -----------------------*/}
          <div className="lg:ml-auto sm:ml-0">
            <CustomProgressBar
              sold={
                item?.displayStatus[0]?.status === "Hero"
                  ? item?.stockQty
                  : item?.orderCount
              }
              stock={item?.stockQty}
              status={item?.displayStatus[0]?.status}
            />
          </div>

          <div className="flex flex-col items-end">
            {/* COUNT DOWN */}
            {/* <div className="pb-6 mr-3 lg:block md:hidden sm:hidden">
              <p className="font-sora text-primary text-end font-medium text-[14px] mr-1 mb-2">
                Campaign Closing in:
              </p>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-[9px] z-50 max-w-[252px] primary_text_color font-sora">
                <div className="flex flex-col">
                  <span className="countdown font-mr font-bold text-2xl">
                    <span style={{ "--value": timeLeft.days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mr font-bold text-2xl">
                    <span style={{ "--value": timeLeft.hours }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mr font-bold text-2xl">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mr font-bold text-2xl">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div> */}
            {/* ACTION BTN */}
            <div className="flex lg:my-0 sm:my-auto gap-3">
              {/* <button
                onClick={() => {
                  setPriceDetails(item);
                  setShow(true);
                }}
                type=""
                className="lg:text-[14px] sm:text-[10px] bg-[#202020] px-4 lg:py-2 sm:py-2 rounded-[10px] text-[16px] font-semibold primary_text_color sm:hidden lg:block"
              >
                Campaign Details
              </button> */}
              <button
                type=""
                className="lg:text-[14px] sm:text-[10px] bg-primary px-4 lg:py-2 sm:py-2 rounded-[10px] font-semibold secondary_text_color hover:scale-95 transition-all ease-in-out"
                onClick={() => {
                  setPriceDetails(item);
                  setView(true);
                }}
                disabled={
                  item?.displayStatus[0].status === "Upcoming" ||
                  new Date().getTime() >= item?.validity
                    ? true
                    : false
                }
              >
                {new Date().getTime() >= item?.validity
                  ? "Closed"
                  : "Add to Cart"}
              </button>

              <CopyToClipboard text="AleehaLogistics.net">
                {/* bg-[#202020] */}
                <div className="tooltip" data-tip={copyText}>
                  <button
                    onClick={handleLinkCopied}
                    className="white_btn_bg px-4 py-2 rounded-[10px] text-[16px] font-semibold primary_text_color hover:scale-95 transition-all ease-in-out"
                  >
                    {shareSvg}{" "}
                  </button>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCampigns;
