"use client";

import { requestCode, verifyCode } from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams, useRouter } from "next/navigation";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full font-sora";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const VerifyEmail = () => {
  const [vc, setVC] = useState("");
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = searchParams.get("email");
    dispatch(requestCode({ email: email }));
    setEmail(email);
  }, [searchParams]);

  const dispatch = useDispatch();

  const handleVerification = () => {
    const data = {
      code: parseInt(vc),
      email: email,
    };
    dispatch(verifyCode(data));
  };

  return (
    <section className="max-w-[1280px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[620px] mx-auto bg_sec rounded-3xl shadow-xl pt-8 pb-4 lg:px-12 sm:px-6">
        <p className="mb-4 ml-2 text-[16px] font-sora font-bold">
          Email Verification
        </p>
        <div className={formDivCss}>
          <label className="label">
            <span className={formInputLabelCss}>Verification Code</span>
          </label>
          <input
            type="text"
            placeholder="XXXX"
            name="vc"
            className={formInputCss}
            value={vc}
            onChange={(e) => setVC(e.target.value)}
          />
          <label className="label">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-sora text-[12px] primary_text_color font-medium flex justify-start items-center ">
            {/* <span>Didn't recieve verification code?</span>{" "}
            <a href="" className="text-primary">
              Resend
            </a> */}
          </div>
          <button
            type="submit"
            className="primary_text_color lg:rounded-2xl sm:rounded-xl bg_prim lg:py-4 sm:py-2 w-4/12  "
            onClick={() => handleVerification()}
          >
            Verify Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
