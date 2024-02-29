"use client";
import { useEffect, useRef, useState } from "react";
import {
  LeftArrowWhite,
  RightArrowWhite,
  LeftArrowBlack,
  RightArrowBlack,
} from "../../../../public/assets/Icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@app/redux/actions";
import PrizeDetailsModule from "../shared/PrizeDetailsModule";

const FocusingPrizeWithProduct = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const w = windowSize.current[0] - (32 + 20);
  const h = Math.ceil(w * (3.5 / 4));

  const [show, setShow] = useState(false);
  const [priceDetails, setPriceDetails] = useState(null);

  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);

  const [selectedItem, setSelectedItem] = useState(1);

  const handleRightClick = () => {
    let len = campaign?.campaigns?.hero?.length;

    if (selectedItem + 1 > len - 1) setSelectedItem(0);
    else setSelectedItem((currentValue) => currentValue + 1);
  };
  const handleLeftClick = () => {
    let len = campaign?.campaigns?.hero?.length;

    if (selectedItem - 1 < 0) setSelectedItem(len - 1);
    else setSelectedItem((currentValue) => currentValue - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      if (selectedItem === 2) {
        setSelectedItem(0);
      } else {
        setSelectedItem((currentValue) => currentValue + 1);
      }
    }, 3000);
  }, [selectedItem]);

  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  return (
    // campaign?.campaigns?.hero?.length > 0 &&
    <>
      {/* FOR LARGE SCREEN */}
      <div className="w-full lg:block md:block sm:hidden lg:h-full md:h-[588px]">
        {
          <div
            style={{
              backgroundImage: `url(${
                campaign?.campaigns?.hero
                  ? campaign?.campaigns?.hero[selectedItem]?.img?.prize
                  : ""
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="relative max-h-[588px] h-full rounded-[16px]"
          >
            <div className="absolute top-0 w-full h-full">
              <div
                className="p-2 absolute bottom-0 w-full"
                // relative w-full lg:min-h-[859px]
              >
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.6)",
                  }}
                  className="  rounded-[12px] lg:min-h-[183px] w-full   py-4 px-6 flex justify-between items-start"
                >
                  <div className="min-h-[183px] h-full font-sora flex flex-col justify-between ">
                    <div>
                      <p className="text-[44px] primary_text_color font-extrabold">
                        Win{" "}
                      </p>
                      <p className="text-[24px] primary_text_color mt-[-8px] font-extrabold">
                        {campaign?.campaigns?.hero
                          ? campaign?.campaigns?.hero[selectedItem]?.title
                          : ""}
                      </p>
                      <p className="text-[14px] primary_text_color my-2 font-medium">
                        {campaign?.campaigns?.hero
                          ? campaign?.campaigns?.hero[selectedItem]
                              ?.productTitle
                          : ""}
                      </p>
                    </div>
                    <button
                      className="btn secondary_text_color bg-primary text-[14px] w-fit"
                      onClick={() => {
                        setPriceDetails(
                          campaign?.campaigns?.hero
                            ? campaign.campaigns.hero[selectedItem]
                            : {}
                        );
                        setShow(true);
                      }}
                    >
                      {" "}
                      Prize Details
                    </button>
                  </div>

                  <div className="min-h-[183px] h-full flex flex-col justify-between items-end">
                    <div className="flex gap-2">
                      {/* <button
                        onClick={handleLeftClick}
                        className="black_btn_outline"
                      >
                        {LeftArrowBlack}
                      </button>
                      <button
                        onClick={handleRightClick}
                        className="black_btn_outline"
                      >
                        {RightArrowBlack}
                      </button> */}
                    </div>
                    <Image
                      className="cursor-pointer opacity-0 transition-opacity duration-1000 h-[105px] w-[110px] rounded-xl border-2 border-black"
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                      src={
                        campaign?.campaigns?.hero
                          ? campaign.campaigns.hero[selectedItem]?.img?.product
                          : ""
                      }
                      height={105}
                      width={110}
                      alt={
                        campaign?.campaigns?.hero
                          ? campaign.campaigns.hero[selectedItem]?.img
                              ?.product + " image"
                          : ""
                      }
                      onClick={() => {
                        setPriceDetails(
                          campaign?.campaigns?.hero
                            ? campaign.campaigns.hero[selectedItem]
                            : {}
                        );
                        setShow(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      {/* FOR SMALL SCREEN */}

      <div
        style={{
          height: `${h}px`,
        }}
        className="w-auto lg:hidden md:hidden sm:block overflow-x-auto "
      >
        <div
          style={{
            width: `${
              campaign?.campaigns?.hero?.length * w +
              (campaign?.campaigns?.hero?.length - 1) * 8
            }px`,
          }}
          className={"flex gap-2 "}
        >
          {campaign?.campaigns?.hero
            ?.slice()
            .reverse()
            .map((x, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: `${w}px`,
                  }}
                  className="cursor-pointer"
                  onClick={() => {
                    setPriceDetails(x);
                    setShow(true);
                  }}
                >
                  <div className="relative">
                    <Image
                      src={x?.img?.prize}
                      height={h}
                      width={w}
                      alt=""
                      className="opacity-0 transition-opacity duration-1000 rounded-[12px]  "
                      style={{
                        width: `${w}px`,
                        height: `${h}px`,
                      }}
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                    />

                    {/* INFO */}

                    <div className="absolute top-0 w-full h-full">
                      <div
                        className="p-1 absolute bottom-0 w-full"
                        // relative w-full lg:min-h-[859px]
                      >
                        <div
                          style={{
                            backgroundColor: "rgba(255,255,255,0.5)",
                          }}
                          className="  rounded-[10px] lg:min-h-[269px] w-full bg-red-300  p-4 flex justify-between items-start"
                        >
                          <div className="font-sora h-full">
                            <p className="prim_text_exlg primary_text_color">
                              Win
                            </p>
                            <p className="prim_text_sm primary_text_color">
                              {x?.title}
                            </p>
                            <p className="prim_text_xs_reg primary_text_color">
                              {x?.productTitle}
                            </p>
                          </div>

                          <div className=" h-full flex flex-col justify-between items-end">
                            <div className="mt-6"></div>
                            <Image
                              className="cursor-pointer opacity-0 transition-opacity duration-1000 h-[50px] w-[52px] rounded-xl border-2 border-black"
                              onLoadingComplete={(img) =>
                                img.classList.remove("opacity-0")
                              }
                              src={x.img.product}
                              height={61}
                              width={63}
                              alt={x.img.product + " image"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
    </>
  );
};

export default FocusingPrizeWithProduct;
