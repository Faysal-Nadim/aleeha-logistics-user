"use client";

import { useEffect, useState } from "react";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import UpcomingCampignDetailsModule from "../shared/UpcomingCampignDetailsModule";

const UpcomingCampigns = () => {
  const [show, setShow] = useState(false);
  const [priceDetails, setPriceDetails] = useState(null);
  const [isPDSeleceted, setIsPDSeleceted] = useState(true);

  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);
  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  const [data, setData] = useState(campaign?.campaigns?.upcoming || null);

  // campaign?.campaigns?.hero?.length > 0

  const [startFrom, setStartFrom] = useState(0);
  const [endAt, setEndAt] = useState(-1);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    let d = campaign?.campaigns?.explore;
    setData(d);
    setStartFrom(0);
    setEndAt(d?.length >= 3 ? 2 : d?.length == 0 ? -1 : d?.length - 1);
  }, [campaign]);

  useEffect(() => {
    let temItemData = [];

    for (let i = startFrom; i <= endAt; i++) {
      temItemData.push(data[i]);
    }
    setDisplayItems(temItemData);
  }, [startFrom, endAt]);

  const handleRightClick = () => {
    let dataLen = data.length;
    if (endAt + 1 >= dataLen) {
      //no updates
    } else {
      setStartFrom((currentValue) => currentValue + 1);
      setEndAt((currentValue) => currentValue + 1);
    }
  };
  const handleLeftClick = () => {
    if (startFrom - 1 < 0) {
      //no updates
    } else {
      setStartFrom((currentValue) => currentValue - 1);
      setEndAt((currentValue) => currentValue - 1);
    }
  };

  let widthForSM = data?.length * 158 + (data?.length - 1) * 8;
  let widthForMD = data?.length * 384 + (data?.length - 1) * 8;
  return (
    <>
      {/* FOR LARGE SCREEN */}
      <div className="lg:block md:hidden sm:hidden">
        <div className="rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[16px] bg_sec px-2 pt-3 pb-2">
          {/* TOGGLE BUTTONS */}
          <div className="pr-2 pb-4 flex justify-between items-center">
            <p className=" ml-2 text-[18px] font-bold">Campaigns</p>

            <div className="flex gap-2">
              <button onClick={handleLeftClick} className="nav_btn">
                {LeftArrowWhite}
              </button>
              <button onClick={handleRightClick} className="nav_btn">
                {RightArrowWhite}
              </button>
            </div>
          </div>
          {/* PRODUCTS */}
          <div
            // min-h-[344px]
            className="grid lg:grid-cols-3 gap-2 w-full  "
          >
            <div
              className="relative max-w-[243px] w-full cursor-pointer"
              onClick={() => {
                setPriceDetails(displayItems[1]);
                setShow(true);
              }}
            >
              <div className="h-[200px]">
                <Image
                  src={displayItems[1]?.img?.prize}
                  height={344}
                  width={243}
                  alt={displayItems[1]?.productTitle || "upcoming products"}
                  className={
                    // w-[243px] h-[344px]
                    "h-[160px] w-full rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] opacity-0 transition-opacity duration-1000"
                  }
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255, 0.6)",
                }}
                className="absolute bottom-0 w-full max-h-[82px] px-2 py-2 rounded-bl-[12px] rounded-br-[12px]"
              >
                {/* SELLING INFO */}
                <p className="prim_text_sm primary_text_color">
                  Get A Chance To Win
                </p>
                <p className="prim_text_lg primary_text_color">
                  {displayItems[1]?.title}
                </p>
              </div>
            </div>
            <div
              className="relative max-w-[243px] w-full cursor-pointer"
              onClick={() => {
                setPriceDetails(displayItems[0]);
                setShow(true);
              }}
            >
              <div className="h-[200px]">
                <Image
                  src={displayItems[0]?.img?.prize}
                  height={344}
                  width={243}
                  alt={displayItems[0]?.productTitle || "upcoming products"}
                  className={
                    // w-[243px] h-[344px]
                    "h-[160px] w-full rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] opacity-0 transition-opacity duration-1000"
                  }
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255, 0.6)",
                }}
                className="absolute bottom-0 w-full max-h-[82px] px-2 py-2 rounded-bl-[12px] rounded-br-[12px]"
              >
                {/* SELLING INFO */}
                <p className="prim_text_sm primary_text_color">
                  Get A Chance To Win
                </p>
                <p className="prim_text_lg primary_text_color">
                  {displayItems[0]?.title}
                </p>
              </div>
            </div>
            <div
              className="relative max-w-[243px] w-full cursor-pointer"
              onClick={() => {
                setPriceDetails(displayItems[2]);
                setShow(true);
              }}
            >
              <div className="h-[200px]">
                <Image
                  src={displayItems[2]?.img?.prize}
                  height={344}
                  width={243}
                  alt={displayItems[2]?.productTitle || "upcoming products"}
                  className={
                    // w-[243px] h-[344px]
                    "h-[160px] w-full rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] opacity-0 transition-opacity duration-1000"
                  }
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
                className="absolute bottom-0 w-full max-h-[82px] px-2 py-2 rounded-bl-[12px] rounded-br-[12px]"
              >
                {/* SELLING INFO */}
                <p className="prim_text_sm primary_text_color">
                  Get A Chance To Win
                </p>
                <p className="prim_text_lg primary_text_color">
                  {displayItems[2]?.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOR SMALL SCREEN */}
      <div className="lg:hidden md:block sm:block">
        <div className="">
          {/* TITLE */}
          <p className=" md:text-[22px] sm:text-[16px] font-semibold  font-sora mb-4">
            Campaigns
          </p>

          {/* PRODUCTS */}
          <div className="overflow-x-auto">
            <div
              style={{
                width: `${widthForSM}px`,
              }}
              className="flex gap-2"
            >
              <div
                className="relative md:w-[384px] sm:w-[158px] cursor-pointer"
                onClick={() => {
                  setPriceDetails(displayItems[1]);
                  setShow(true);
                }}
              >
                <Image
                  src={displayItems[1]?.img?.prize}
                  height={222}
                  width={158}
                  alt={displayItems[1]?.title}
                  className="rounded-[14px] h-[200px] w-[158px] opacity-0 transition-opacity duration-1000"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />

                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                  }}
                  className="bg_prim absolute flex flex-col p-2 justify-between bottom-0 rounded-bl-[12px] rounded-br-[12px] w-full min-h-[54px] px-2"
                >
                  <div></div>

                  {/* SELLING INFO */}
                  <div>
                    <p className="md:text-[12px] sm:text-[8px] primary_text_color font-sora">
                      {displayItems[1]?.productTitle}
                    </p>
                    <p className="md:text-[14px] sm:text-[10px] mb-2 primary_text_color font-sora">
                      {" "}
                      {displayItems[1]?.title}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative md:w-[384px] sm:w-[158px] cursor-pointer"
                onClick={() => {
                  setPriceDetails(displayItems[0]);
                  setShow(true);
                }}
              >
                <Image
                  src={displayItems[0]?.img?.prize}
                  height={222}
                  width={158}
                  alt={displayItems[0]?.title}
                  className="rounded-[14px] h-[200px] w-[158px] opacity-0 transition-opacity duration-1000"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />

                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                  }}
                  className="bg_prim absolute flex flex-col p-2 justify-between bottom-0 rounded-bl-[12px] rounded-br-[12px] w-full min-h-[54px] px-2"
                >
                  <div></div>

                  {/* SELLING INFO */}
                  <div>
                    <p className="md:text-[12px] sm:text-[8px] primary_text_color font-sora">
                      {displayItems[0]?.productTitle}
                    </p>
                    <p className="md:text-[14px] sm:text-[10px] mb-2 primary_text_color font-sora">
                      {" "}
                      {displayItems[0]?.title}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative md:w-[384px] sm:w-[158px] cursor-pointer"
                onClick={() => {
                  setPriceDetails(displayItems[2]);
                  setShow(true);
                }}
              >
                <Image
                  src={displayItems[2]?.img?.prize}
                  height={222}
                  width={158}
                  alt={displayItems[2]?.title}
                  className="rounded-[14px] h-[200px] w-[158px] opacity-0 transition-opacity duration-1000"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />

                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                  }}
                  className="bg_prim absolute flex flex-col p-2 justify-between bottom-0 rounded-bl-[12px] rounded-br-[12px] w-full min-h-[54px] px-2"
                >
                  <div></div>

                  {/* SELLING INFO */}
                  <div>
                    <p className="md:text-[12px] sm:text-[8px] primary_text_color font-sora">
                      {displayItems[2]?.productTitle}
                    </p>
                    <p className="md:text-[14px] sm:text-[10px] mb-2 primary_text_color font-sora">
                      {" "}
                      {displayItems[2]?.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <UpcomingCampignDetailsModule
          show={show}
          setShow={setShow}
          priceDetails={priceDetails}
        />
      }
    </>
  );
};

export default UpcomingCampigns;
