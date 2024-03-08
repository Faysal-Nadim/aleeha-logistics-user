"use client";
import React from "react";
import withAuth from "@components/withAuth";

const WalletPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Wallet</p>
        <div className=" min-h-[183px] bg_sec rounded-xl flex flex-col justify-center items-center">
          <p className="prim_text_lg_reg">Available balance </p>
          <p className="font-sora primary_text_color text-[40px]">
            AED {user?.wallet?.available > 0 ? user?.wallet?.available : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withAuth(WalletPage);
