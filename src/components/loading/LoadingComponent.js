import React from "react";
import { loadingAnimation } from "../../../public/assets/images";
import Image from "next/image";
import AleehaLogisticssvg from "../../../public/assets/logo/logo";

const LoadingComponent = () => {
  // Ripple
  return (
    <div className="w-full h-[500px] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center py-8 max-w-[400px] w-full rounded-2xl shadow-xl">
        <Image
          src={AleehaLogisticssvg}
          alt="AleehaLogistics logo"
          height={43}
          width={110}
        />
        <div className="">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
  // Ellipisis
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 max-w-[400px]  rounded-2xl shadow-xl">
      <Image
        src={loadingAnimation}
        alt="AleehaLogistics logo"
        height={43}
        width={110}
      />
      <div className="">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
  //facebook
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 max-w-[400px]  rounded-2xl shadow-xl">
      <Image
        src={loadingAnimation}
        alt="AleehaLogistics logo"
        height={43}
        width={110}
      />
      <div className="">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
