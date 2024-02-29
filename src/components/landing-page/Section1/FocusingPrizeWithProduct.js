"use client";
import { useEffect, useRef, useState } from "react";
// import {
//   LeftArrowWhite,
//   RightArrowWhite,
//   LeftArrowBlack,
//   RightArrowBlack,
// } from "../../../../public/assets/Icons";
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

  // const handleRightClick = () => {
  //   let len = campaign?.campaigns?.hero?.length;

  //   if (selectedItem + 1 > len - 1) setSelectedItem(0);
  //   else setSelectedItem((currentValue) => currentValue + 1);
  // };
  // const handleLeftClick = () => {
  //   let len = campaign?.campaigns?.hero?.length;

  //   if (selectedItem - 1 < 0) setSelectedItem(len - 1);
  //   else setSelectedItem((currentValue) => currentValue - 1);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (selectedItem === 2) {
  //       setSelectedItem(0);
  //     } else {
  //       setSelectedItem((currentValue) => currentValue + 1);
  //     }
  //   }, 3000);
  // }, [selectedItem]);

  // let curIndex = 1;
  // let imgDuration = 3000;

  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  let h_sm_device = `w-full lg:hidden md:hidden sm:block h-[${h}px]`;

  return (
    // campaign?.campaigns?.hero?.length > 0 &&
    <>
      {/* FOR LARGE+SM+MD SCREEN */}
      <div className="w-full  lg:h-full md:h-[588px] sm:h-[400px] ">
        {
          <div
            id="slider"
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
                      <p className="lg:text-[44px] md:text-[34px] sm:text-[24px] primary_text_color font-extrabold">
                        Win{" "}
                      </p>
                      <p className="lg:text-[24px] md:text-[24px] sm:text-[18px] primary_text_color mt-[-8px] font-extrabold">
                        {campaign?.campaigns?.hero
                          ? campaign?.campaigns?.hero[selectedItem]?.title
                          : ""}
                      </p>
                      <p className="lg:text-[14px] md:text-[12px] sm:text-[10px] primary_text_color my-2 font-medium">
                        {campaign?.campaigns?.hero
                          ? campaign?.campaigns?.hero[selectedItem]
                              ?.productTitle
                          : ""}
                      </p>
                    </div>
                    <button
                      className="btn secondary_text_color bg-primary lg:text-[14px] md:text-[12px] sm:text-[10px] w-fit"
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
                      className="cursor-pointer opacity-0 transition-opacity duration-1000 lg:h-[105px] lg:w-[110px] md:h-[95px] md:w-[100px] sm:h-[85px] sm:w-[90px] rounded-xl border-2 border-black"
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
