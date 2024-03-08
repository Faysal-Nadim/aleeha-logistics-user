"use client";

import {
  requestCode,
  sendVerificationCodeByEmail,
  verifyCode,
  verifyCodeForPassword,
} from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_exlg primary_text_color w-full";
const formInputWarningCss = "sec_text_md_reg text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const Verification = () => {
  const [vc, setVC] = useState("");
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const email = searchParams.get("email");
    dispatch(sendVerificationCodeByEmail({ email: email }));
    setEmail(email);
  }, [searchParams]);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleVerification = () => {
    const data = {
      code: parseInt(vc),
      email: email,
    };
    dispatch(verifyCodeForPassword(data));
  };

  useEffect(() => {
    if (auth.verified === true) {
      router.push(`/login/set-new-password?email=${email}`);
    }
  }, [auth]);

  //   if (auth.loading === true) {
  //     Swal.showLoading();
  //   }

  return (
    <section className="max-w-[1280px] mx-auto lg:px-6 sm:p-4">
      <div className="max-w-[620px] mx-auto bg_sec rounded-3xl shadow-xl pt-8 pb-8 lg:px-12 sm:px-6">
        <p className="mb-4 text-[16px] font-sora font-bold">
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

export default Verification;
