"use client";
import React, { useEffect, useState } from "react";
import { mc, pp, ae, visa } from "../../../../public/assets/images";
import Image from "next/image";
import ReactModal from "react-modal";
import { StripeGatewayForAddPayment } from "@components/payment-options/Stripe";
import axiosInstance from "@app/redux/helpers/axios";
import Swal from "sweetalert2";
import { closeBtn } from "../../../../public/assets/Icons";
import withAuth from "@components/withAuth";

const PaymentMethod = ({ po }) => {
  return (
    <div className="rounded-xl bg_sec h-[220px] lg:w-[400px] sm:w-full py-6 px-8">
      <div className="flex justify-between items-start mb-3  ">
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

        <button className="btn btn-circle p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
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

const PaymentOptionsPage = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

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

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // backgroundColor: "#1A1A1A",
      backgroundColor: "#fff",
      padding: 0,
      borderRadius: 16,
      border: "none",
      height: "auto",
      width: "360px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  };

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Payment Methods</p>

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
      <ReactModal
        isOpen={show}
        style={customStyles}
        onRequestClose={() => setShow(false)}
      >
        <div className="px-6 pt-4 flex justify-between items-center">
          <div>
            <p className="primary_text_color font-bold font-sora">Add Card</p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="p-0.5 bg-[#000] rounded-full hover:scale-90 hover:bg-primary transition-all ease-in-out"
          >
            {closeBtn}
          </button>
        </div>
        <StripeGatewayForAddPayment />
      </ReactModal>
    </div>
  );
};

export default withAuth(PaymentOptionsPage);
