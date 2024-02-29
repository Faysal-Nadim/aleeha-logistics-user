"use client";
import Image from "next/image";
import { clock, trofy, winnerTicket } from "../../../../public/assets/Icons";
import { useEffect, useState } from "react";

const Winniers = ({ data, startAt }) => {
  const [widthSize, setWidthSize] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  useEffect(() => {
    let temData = [];
    let len = data.length;
    let screenWidth = screen.width;

    if (screenWidth >= 1024) {
      if (len >= 1) {
        if (startAt + 1 < len) {
          temData.push(data[startAt]);
          temData.push(data[startAt + 1]);

          setWidthSize(453 * 2 + 16);
          screenWidth;
        } else {
          temData.push(data[startAt]);
          setWidthSize(453);
        }
      }
    } else {
      temData = data;
      setWidthSize(320 * len + 16 * (len - 1));
    }

    setVisibleData(temData);
  }, [data, startAt]);

  return (
    <div
      style={{
        width: `${widthSize}px`,
      }}
      className="flex gap-4 lg:overflow-x-hidden sm:overflow-x-auto"
    >
      {visibleData?.map((winner, index) => {
        return (
          <div
            key={index}
            className="shadow-lg bg_prim lg:rounded-3xl sm:rounded-[17px] lg:h-[545px] lg:w-[453px] sm:h-auto sm:w-[320px]"
          >
            <Image
              src={winner?.prizeImage}
              height={273}
              width={453}
              alt=""
              className="w-full rounded-tl-3xl rounded-tr-3xl  lg:block sm:hidden"
            />
            <Image
              src={winner?.prizeImage}
              height={193}
              width={320}
              alt=""
              className="w-full rounded-tl-[17px] rounded-tr-[17px] lg:hidden sm:block"
            />
            <div className="px-6 py-4 grid grid-cols-1 lg:gap-4 sm:gap-2">
              <p className="text-primary-red lg:text-[24px] sm:text-[16px] font-sora">
                Congratulations!
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg_sec_light rounded-full flex justify-center items-center">
                  {trofy}
                </div>
                <div>
                  <p className=" lg:text-[16px] sm:text-[12px] font-sora font-[800]">
                    {winner?.name}
                  </p>
                  <p className=" lg:text-[16px] sm:text-[12px] font-sora font-[400]">
                    {" "}
                    On winning{" "}
                    <span className="lg:text-[16px] sm:text-[12px] font-sora font-[800]">
                      {winner?.winningOn}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg_sec_light rounded-full flex justify-center items-center">
                  {clock}
                </div>
                <p className="lg:text-[16px] sm:text-[12px] font-sora font-[400]">
                  Announced on : <span className="">{winner?.announce}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg_sec_light rounded-full flex justify-center items-center">
                  {winnerTicket}
                </div>
                <p className="lg:text-[16px] sm:text-[12px] font-sora font-[400]">
                  Ticket no : <span className="">{winner?.ticketNo}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Winniers;
