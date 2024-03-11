"use client";
import React from "react";
import { userSvg } from "../../../public/assets/Icons";
import Image from "next/image";

const AccountBalance = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <div className="lg:flex sm:hidden md:hidden justify-center items-center gap-2 font-sora primary_text_color  ">
        <div className="border-l h-[34px] border-slate-100 pl-4"></div>
        <div className="flex flex-col items-end">
          <p className="sec_text_sm offset_color">Available Balance </p>
          <p className="prim_text_md">BDT {user?.wallet?.available || 0.0}</p>
        </div>
        <div
          className={
            user?.img?.url ? " rounded-full" : "bg-nutral p-3  rounded-full"
          }
        >
          {user?.img?.url ? (
            <Image
              src={user?.img?.url}
              height={48}
              width={48}
              className="rounded-full"
              alt="user image"
            />
          ) : (
            userSvg
          )}
        </div>
      </div>

      <div className="lg:hidden sm:flex md:flex  justify-start items-center gap-2 font-sora primary_text_color  ">
        <div
          className={
            user?.img?.url ? " rounded-full" : "bg-nutral p-3  rounded-full"
          }
        >
          {user?.img?.url ? (
            <Image
              src={user?.img?.url}
              height={32}
              width={32}
              className="rounded-full"
              alt="user image"
            />
          ) : (
            userSvg
          )}
        </div>
        <div className="flex flex-col items-start">
          <p className="sec_text_sm">Available Balance </p>
          <p className="prim_text_md">AED {user?.wallet?.available}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
