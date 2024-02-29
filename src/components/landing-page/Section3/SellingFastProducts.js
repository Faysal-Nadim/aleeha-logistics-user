"use client";

import { useEffect, useState } from "react";
import {
  LeftArrowWhite,
  RightArrowWhite,
} from "../../../../public/assets/Icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import FSCampignCard from "./FSCampignCard";
import { addToCart } from "@app/redux/actions";
import PrizeDetailsModule from "../shared/PrizeDetailsModule";

const SellingFastProducts = () => {
  const [show, setShow] = useState(false);
  const [priceDetails, setPriceDetails] = useState(null);

  const [startFrom, setStartFrom] = useState(0);
  const [endAt, setEndAt] = useState(-1);
  const [displayItems, setDisplayItems] = useState([]);

  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);
  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  const [data, setData] = useState(campaign?.campaigns?.sellingFast || null);

  useEffect(() => {
    setStartFrom(0);
    let d = campaign?.campaigns?.sellingFast;
    setData(d);

    let len = d?.length;
    setEndAt(len >= 4 ? 3 : len == 0 ? -1 : len - 1);
  }, [campaign]);

  useEffect(() => {
    let temItemData = [];

    for (let i = startFrom; i <= endAt; i++) {
      temItemData.push(data[i]);
    }
    setDisplayItems(temItemData);
  }, [startFrom, endAt]);

  let widthForSM = data?.length * 158 + (data?.length - 1) * 8;
  let widthForMD = data?.length * 384 + (data?.length - 1) * 8;

  return (
    <div className="">
      {/* FOR LARGE SCREEN */}
      <div className="lg:block md:hidden sm:hidden">
        <div className="max-w-[1280px] mx-auto flex justify-center items-center px-6 gap-4">
          <button
            onClick={() => {
              if (startFrom - 1 >= 0) {
                setStartFrom((currentValue) => currentValue - 1);
                setEndAt((currentValue) => currentValue - 1);
              }
            }}
            className="nav_btn h-[38px]"
            disabled={startFrom - 1 >= 0 ? false : true}
          >
            {LeftArrowWhite}
          </button>
          {/* PRODUCTS */}
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-4 justify-center items-center gap-4 min-h-[344px]">
            {displayItems?.map((item) => {
              return (
                <FSCampignCard
                  handleOnClick={() => {
                    setPriceDetails(item);
                    setShow(true);
                  }}
                  key={item?._id}
                  item={item}
                />
              );
            })}
          </div>

          <button
            onClick={() => {
              let dataLen = data.length;
              if (endAt + 1 < dataLen) {
                setStartFrom((currentValue) => currentValue + 1);
                setEndAt((currentValue) => currentValue + 1);
              }
            }}
            className="nav_btn h-[38px]"
            disabled={endAt + 1 < data?.length ? false : true}
          >
            {RightArrowWhite}
          </button>
        </div>
      </div>
      {/* FOR SMALL SCREEN */}
      <div className="lg:hidden md:block sm:block">
        <div className="">
          {/* PRODUCTS */}
          <div className="overflow-x-auto ">
            <div
              // className={
              //   "flex gap-2 sm:w-[" +
              //   widthForSM +
              //   "] " +
              //   "md:w-[" +
              //   widthForMD +
              //   "] "
              // }
              style={{
                width: `${widthForSM}px`,
              }}
              className="flex gap-2"
            >
              {data?.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setPriceDetails(item);
                      setShow(true);
                    }}
                    key={index}
                    className="relative md:w-[384px] sm:w-[158px] cursor-pointer"
                  >
                    <Image
                      src={item?.img?.product}
                      height={222}
                      width={158}
                      alt={item?.title}
                      className="rounded-[12px] relative h-[222px] w-[158px] opacity-0 transition-opacity duration-1000"
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                    />

                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0.9)",
                      }}
                      className="bg_prim absolute bottom-0 rounded-bl-[12px] rounded-br-[12px] w-full min-h-[54px] px-2"
                    >
                      {/* PROGRESS BAR */}
                      <progress
                        className="progress progress-primary w-full md:h-[5px] sm:h-[2px]"
                        value={item?.orderCount ? item?.orderCount : 0}
                        max={item?.stockQty ? item?.stockQty : 100}
                      />

                      {/* SELLING INFO */}
                      <p className="md:text-[12px] sm:text-[8px] font-sora">
                        {item?.orderCount} {" of "} {item?.stockQty}
                        {" sold"}
                      </p>
                      <p className="md:text-[14px] sm:text-[10px] mb-2  font-sora">
                        {"Win "} {item?.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {
        <PrizeDetailsModule
          show={show}
          setShow={setShow}
          priceDetails={priceDetails}
          handleCart={handleCart}
        />
      }
    </div>
  );
};

export default SellingFastProducts;
