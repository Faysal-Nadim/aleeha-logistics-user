"use client";
import React, { useEffect, useState } from "react";
import { visa, wcc, mc, cc, pp1 } from "../../../../public/assets/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import withAuth from "@components/withAuth";
import Swal from "sweetalert2";
import axiosInstance from "@app/redux/helpers/axios";

const addCardImageClass =
  "cursor-pointer bg-white hover:border hover:border-blue-500 rounded-lg";

const PaymentMethod = ({ po }) => {
  return (
    <div className="rounded-xl bg_sec h-[220px] lg:w-[400px] sm:w-full py-6 px-10">
      <div className="flex justify-between items-start mb-3  h-[71px] w-[71px]">
        <Image
          src={
            po?.card?.brand === "mastercard"
              ? mc
              : po?.card?.brand === "amex"
              ? ae
              : po?.card?.brand === "visa"
              ? visa
              : pp
          }
          height={71}
          width={71}
          alt={po?.card?.brand}
        />
      </div>
      <p className="prim_text_xl">{po?.card?.funding.toUpperCase()}</p>
      <p className="prim_text_xl">**** **** **** {po?.card?.last4}</p>
      <p className="sec_text_lg">
        {po?.card?.exp_month <= 9
          ? `0${po?.card?.exp_month}`
          : po?.card?.exp_month}{" "}
        / {po?.card?.exp_year}
      </p>
      <p className="prim_text_lg">{po?.card?.country}</p>
    </div>
  );
};

const WalletPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    Swal.showLoading();
    const data = { customer: user.stripe_id };
    axiosInstance
      .post(`/payment/stripe/get-payment-methods`, data)
      .then(async (res) => {
        setMethods(res.data.methods);
      });
    Swal.close();
  }, []);
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

        <p className="mt-10 mb-4 prim_text_lg">Select Top-up Method</p>

        <div>
          <div className=" flex flex-wrap gap-4">
            {methods?.map((po, index) => {
              return <PaymentMethod po={po} key={index} />;
            })}

            <div className="lg:max-w-[400px] w-full min-h-[183px] p-6 bg_sec rounded-xl flex flex-col justify-center items-center">
              <p className="prim_text_lg_reg mb-3">Add more payment method</p>
              <label
                onClick={() => setShow(true)}
                htmlFor="add_payment_method"
                className="btn_primary flex justify-center items-center cursor-pointer lg:max-w-[130px] w-full lg:min-w-[300px]"
              >
                Add Payment Method
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(WalletPage);
