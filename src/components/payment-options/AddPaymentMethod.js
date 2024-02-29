"use client";
import React, { useState } from "react";
import { modalCloseBtn } from "../../../public/assets/Icons";
import { cc, mc, pp, visa } from "../../../public/assets/images";
import Image from "next/image";
const formDivCss =
  "mb-4 form-control bg-transparent border border-[#eeeeee] px-6 py-2 rounded-[16px] w-full font-sora ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color ";

// CARD CSS
const addCardImageClass =
  "cursor-pointer bg-white hover:border-2 hover:border-blue-500 hover:scale-95 rounded-lg transition-all ease-in-out";
const addCardImageClassActive =
  "cursor-pointer bg-white border-2 border-blue-500 scale-95 rounded-lg";

const AddPaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState(-1);

  // const [nameOnCard, setNameOnCard] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cardExpiary, setCardExpiary] = useState("");
  const [cardVcc, setCardVcc] = useState("");
  //min-h-[692px]
  return (
    <div className="modal">
      <div className="modal-box bg_modal max-w-[620px]  rounded-3xl">
        <div className="p-4 font-sora">
          <div className="flex justify-between items-center">
            <p className="text-[24px]">Add Payment Method</p>
            <div className="modal-action mt-0">
              <label
                htmlFor="add_payment_method"
                className="cursor-pointer rounded-full"
              >
                {modalCloseBtn}
              </label>
            </div>
          </div>

          {/* SELECT CARD */}
          <div className="mt-6">
            <span className={formInputLabelCss}>Select method</span>
            <div className="grid grid-cols-4 justify-start items-center gap-0 my-2">
              <Image
                src={pp}
                width={124}
                height={124}
                alt={""}
                className={
                  paymentMethod === 1
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(1)}
              />
              <Image
                src={visa}
                width={124}
                height={124}
                alt={""}
                className={
                  paymentMethod === 2
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(2)}
              />
              <Image
                src={mc}
                width={124}
                height={124}
                alt={""}
                className={
                  paymentMethod === 3
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(3)}
              />
              <Image
                src={cc}
                width={124}
                height={124}
                alt={""}
                className={
                  paymentMethod === 4
                    ? addCardImageClassActive
                    : addCardImageClass
                }
                onClick={() => setPaymentMethod(4)}
              />
            </div>
          </div>

          {/* CARD DETAILS */}
          <div className="mt-6 grid grid-cols-1 gap-1">
            <div className={formDivCss}>
              <label className="label">
                <span className={formInputLabelCss}>Card Number</span>
              </label>
              <input
                type="text"
                placeholder="**** **** **** ****"
                name="cn"
                className={formInputCss}
                value={cardNo}
                onChange={(e) => setCardNo(e.target.value)}
              />
              <label className="label">
                <span className={formInputWarningCss}></span>
              </label>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div className={formDivCss}>
                <label className="label">
                  <span className={formInputLabelCss}>Expiry Date</span>
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  name="ed"
                  className={formInputCss}
                  value={cardExpiary}
                  onChange={(e) => setCardExpiary(e.target.value)}
                />
                <label className="label">
                  <span className={formInputWarningCss}></span>
                </label>
              </div>
              <div className={formDivCss}>
                <label className="label">
                  <span className={formInputLabelCss}>Security Code</span>
                </label>
                <input
                  type="text"
                  placeholder="***"
                  name="cvv"
                  className={formInputCss}
                  value={cardVcc}
                  onChange={(e) => setCardVcc(e.target.value)}
                />
                <label className="label">
                  <span className={formInputWarningCss}></span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="primary_text_color  bg-primary font-sora rounded-2xl  py-6 w-full "
            // onClick={() => handleVerification()}
          >
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
