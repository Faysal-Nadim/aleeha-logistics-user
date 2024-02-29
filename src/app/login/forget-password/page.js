"use client";

import { requestCode, verifyCode } from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams, useRouter } from "next/navigation";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_exlg primary_text_color w-full";
const formInputWarningCss = "sec_text_md_reg text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const ForgetPasswordEmail = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  return (
    <section className="max-w-[1280px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[620px] mx-auto bg_sec rounded-3xl shadow-xl pt-8 pb-4 lg:px-12 sm:px-6">
        <p className="mb-4 ml-2 text-[16px] font-sora font-bold">
          Forget Password
        </p>
        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Enter Your Email</span>
          </label>
          <input
            type="email"
            placeholder="xxx@email.com"
            name="forgetPasswordEmail"
            className={formInputCss}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label lg:block sm:hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className="flex justify-between">
          <div></div>
          <button
            type="submit"
            className="primary_text_color lg:rounded-2xl sm:rounded-xl bg_prim lg:py-4 sm:py-2 w-4/12  "
            onClick={() => router.push(`/login/verification?email=${email}`)}
          >
            Verify
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordEmail;
