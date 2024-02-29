import React from "react";
import "./style.css";

const CustomProgressBar = ({ sold, stock, status }) => {
  // sold = 419;
  let percentage = sold / stock;
  let dashArray = (140 + 54) * 2;

  if (percentage > 0.88 && percentage !== 1) {
    percentage = 0.88;
  }

  let dashOffset = dashArray - dashArray * percentage;
  return (
    <>
      <div className="lg:block md:hidden sm:hidden relative ">
        {/* BLACK VERSION 1A1A1A */}
        <div className="py-2 w-[194px] h-[80px] border-[8px] border-[#eeeeee] bg-transparent rounded-[100px] flex justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[18px] font-semibold">
              {status === "Upcoming" || status === "Hero" ? 0 : sold}
            </p>
            <p className="text-[12px] ">SOLD</p>
          </div>
          {/* 202020 */}
          <div className="h-[40px] border  border-[#eeeeee]" />

          <div className="flex flex-col justify-center items-center">
            <p className="text-[12px] ">OUT OF</p>
            <p className="text-[18px] font-semibold">
              {status === "Upcoming" || status === "Hero" ? 0 : stock}
            </p>
          </div>
        </div>

        <svg
          width="200"
          height="96"
          viewBox="-6 6 150 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top-0 absolute left-[-4px]"
        >
          <rect
            style={{
              strokeDasharray: `${dashArray}`,
              strokeDashoffset: `${dashOffset}`,
            }}
            width="140"
            height="54"
            rx="30"
            className="rect"
          ></rect>
        </svg>
      </div>

      <div className="lg:hidden md:block sm:block relative ">
        <div className="py-2 w-[138px] h-[66px] border-[8px] border-[#eeeeee] bg-transparent rounded-[100px] flex justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[14px] font-semibold">
              {status === "Upcoming" || status === "Hero" ? 0 : sold}
            </p>
            <p className="text-[7px]">SOLD</p>
          </div>

          <div className="h-[40px] border  border-[#eeeeee]" />

          <div className="flex flex-col justify-center items-center">
            <p className="text-[7px]">OUT OF</p>
            <p className="text-[14px] font-semibold">
              {status === "Upcoming" || status === "Hero" ? 0 : stock}
            </p>
          </div>
        </div>

        <svg
          width="141"
          height="69"
          viewBox="-6 6 150 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top-0 absolute left-[-2px]"
        >
          <rect
            style={{
              strokeDasharray: `${dashArray}`,
              strokeDashoffset: `${dashOffset}`,
            }}
            width="139"
            height="63"
            rx="30"
            className="rect"
          ></rect>
        </svg>
      </div>
    </>
  );
};

export default CustomProgressBar;

{
  /* <div className="lg:w-[194px] lg:h-[93px] sm:w-[138px] sm:h-[66px] rounded-[50px] lg:border-[16px] border-[10px] border-[#1A1A1A] ">
              <div className="p-4 bg_sec_light rounded-[35px] h-full flex justify-evenly items-center">
                <div className="flex flex-col justify-center items-center">
                  <p className="lg:text-[22px] sm:text-[15px] font-semibold">
                    {item.orderCount}
                  </p>
                  <p className="lg:text-[11px] sm:text-[7px]">SOLD</p>
                </div>

                <div className="h-[40px] border  border-[#202020]" />

                <div className="flex flex-col justify-center items-center">
                  <p className="lg:text-[11px] sm:text-[7px]">OUT OF</p>
                  <p className="lg:text-[22px] sm:text-[15px] font-semibold">
                    {item?.stockQty}
                  </p>
                </div>
              </div>
            </div> */
}
