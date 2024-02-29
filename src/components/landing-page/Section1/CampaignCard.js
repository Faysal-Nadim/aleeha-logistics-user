import Image from "next/image";
import React from "react";

const CampaignCard = ({ campaignData, setPriceDetails, setShow }) => {
  return (
    <div className="w-full  lg:h-full md:h-[588px] sm:h-[400px] ">
      <div
        style={{
          backgroundImage: `url(${campaignData?.img?.prize})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" max-h-[588px] h-full flex flex-col justify-between rounded-[16px]"
      >
        <div className="lg:min-h-[269px] md:min-h-[200px]  sm:min-h-[180px] " />

        <div className="p-2  w-full">
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
                  {campaignData?.title}
                </p>
                <p className="lg:text-[14px] md:text-[12px] sm:text-[10px] primary_text_color my-2 font-medium">
                  {campaignData?.productTitle}
                </p>
              </div>
              <button
                className="btn secondary_text_color bg-primary lg:text-[14px] md:text-[12px] sm:text-[10px] w-fit"
                onClick={() => {
                  setPriceDetails(campaignData);
                  setShow(true);
                }}
              >
                {" "}
                Prize Details
              </button>
            </div>

            <div className="min-h-[183px] h-full flex flex-col justify-between items-end">
              <div className="flex gap-2"></div>
              <Image
                className="cursor-pointer opacity-0 transition-opacity duration-1000 lg:h-[105px] lg:w-[110px] md:h-[95px] md:w-[100px] sm:h-[85px] sm:w-[90px] rounded-xl border-2 border-black"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                src={campaignData?.img?.product}
                height={105}
                width={110}
                alt={campaignData?.img?.product + " image"}
                onClick={() => {
                  setPriceDetails(campaignData);
                  setShow(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
