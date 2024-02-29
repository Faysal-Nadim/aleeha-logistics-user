"use client";
import React, { useState } from "react";
import { ticketBg3 } from "../../../public/assets/cardBg";
import { calenderSvg } from "../../../public/assets/Icons";
import Image from "next/image";
import UpcomingCampignDetailsModule from "@components/landing-page/shared/UpcomingCampignDetailsModule";

const TicketsCard = ({ ticket }) => {
  const D = new Date(ticket?.campaign?.drawDate);
  const [show, setShow] = useState(false);

  return (
    <div className="relative lg:min-h-[217px] sm:min-h-[95px] h-full max-w-[776px] flex justify-center items-center">
      <Image
        src={ticketBg3}
        height={217}
        width={222}
        alt="ticket"
        className="absolute top-0  w-full"
      />
      <div className="z-10 h-full lg:max-w-[531px] sm:max-w-[260px] w-full border-r border-r-info border-dashed  ">
        <p className="text-primary text-sora font-bold lg:text-[28px] sm:text-[16px] lg:block sm:hidden">
          WIN
        </p>

        <div className="my-3 flex gap-3  primary_text_color lg:text-[18px] sm:text-[14px] font-semibold font-mr">
          <p className="lg:block sm:hidden ">{ticket?.campaign?.title} |</p>
          <p> Ticket Number: {ticket?.ticketNumber}</p>
        </div>

        <div className=" flex lg:gap-4 sm:gap-2 items-center ">
          <button
            onClick={() => setShow(true)}
            className="primary_text_color lg:min-h-[40px] sm:min-h-[26px] lg:text-[12px] sm:text-[8px] font-sora px-[12px] rounded-[14px] bg-info   "
          >
            Campaign details
          </button>

          <div className="lg:flex sm:hidden gap-2 justify-center items-center border border-info primary_text_color min-h-[40px] text-[12px]  font-sora px-[12px] rounded-[14px] bg-[#2e2d36]   ">
            <span>{calenderSvg} </span> <span>Max Draw Date: </span>{" "}
            <span>{D?.toDateString()}</span>
          </div>
        </div>
      </div>
      <UpcomingCampignDetailsModule
        priceDetails={ticket?.campaign}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default TicketsCard;
