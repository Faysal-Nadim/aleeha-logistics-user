"use client";
import React, { useState } from "react";
import { ticketBg3, ticketBg_white } from "../../../public/assets/cardBg";
import { calenderSvg } from "../../../public/assets/Icons";
import Image from "next/image";
import UpcomingCampignDetailsModule from "@components/landing-page/shared/UpcomingCampignDetailsModule";

const TicketCard = ({ ticket }) => {
  const D = new Date(ticket?.campaign?.drawDate);
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        // backgroundImage: `url("https://i.ibb.co/fMb9qxt/Subtract-1.png")`,
        backgroundImage: `url("https://i.ibb.co/n0NXwQ0/tickets-bg-white.png")`,
        // backgroundImage: `${ticketBg_white}`,
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" lg:min-h-[217px] md:min-h-[217px] sm:min-h-[95px] h-full max-w-[776px] flex justify-center items-center"
    >
      <div className=" lg:max-w-[531px] md:max-w-[531px] sm:max-w-[260px] w-full border-r border-r-info border-dashed    ">
        <p className="text-primary text-sora font-bold lg:text-[28px] md:text-[28px] sm:text-[16px] lg:block md:block sm:hidden">
          WIN
        </p>

        <div className="my-3 flex gap-3  primary_text_color lg:text-[18px] md:text-[18px]  sm:text-[14px] font-semibold font-mr">
          <p className="lg:block md:block sm:hidden ">
            {ticket?.campaign?.title} |
          </p>
          <p> Ticket Number: {ticket?.ticketNumber}</p>
        </div>

        <div className=" flex lg:gap-4 sm:gap-2 items-center ">
          <button
            onClick={() => setShow(true)}
            className="primary_text_color lg:min-h-[40px] md:min-h-[40px] sm:min-h-[26px] lg:text-[12px] md:text-[12px] sm:text-[8px] font-sora px-[12px] rounded-[10px] bg-info   "
          >
            Campaign details
          </button>

          <div className="flex lg:gap-2 md:gap-2 sm:gap-1 justify-center items-center border border-info primary_text_color lg:min-h-[40px] md:min-h-[40px] sm:min-h-[26px] lg:text-[12px] md:text-[12px] sm:text-[8px]  font-sora px-[12px] rounded-[10px] bg-[#2e2d36]   ">
            <span className="lg:block md:block sm:hidden">{calenderSvg} </span>{" "}
            <p className="secondary_text_color">Max Draw Date: </p>{" "}
            <p className="secondary_text_color">
              {ticket?.campaign?.displayStatus[0].status === "Upcoming" ||
              ticket?.campaign?.displayStatus[0].status === "Selling Fast"
                ? "Once Sold Out"
                : `${ticket?.campaign?.drawDate} `}
            </p>
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

export default TicketCard;
