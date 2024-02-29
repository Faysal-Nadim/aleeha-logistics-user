"use client";

import { getTicket } from "@app/redux/actions";
import TicketCard from "@components/active-tickets/TicketCard";
import withAuth from "@components/withAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ActiveTicketsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket());
  }, []);
  const tickets = useSelector((state) => state.ticket.tickets);
  const router = useRouter();

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Active Tickets</p>
        {tickets?.length === 0 ? (
          <div className="max-w-[480px] min-h-[183px] p-6 bg_sec rounded-xl flex flex-col justify-center items-center">
            <p className="prim_text_lg_reg mb-3">
              Start Shopping to win tickets
            </p>
            <button
              onClick={() => router.push("/")}
              className="btn_primary w-full max-w-[300px]"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className=" w-full grid grid-cols-1 gap-6">
            {tickets?.length > 0 &&
              tickets.map((ticket, index) => {
                return <TicketCard key={index} ticket={ticket} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(ActiveTicketsPage);
