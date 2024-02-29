"use client";
import React, { useState } from "react";
import { modalCloseBtn } from "../../../public/assets/Icons";
const formDivCss =
  "mb-4 form-control bg-transparent border border-[#eeeeee] px-6 py-2 rounded-[16px] w-full font-sora ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color ";

const RequirePasswordModalSeeDetails = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="modal">
      <div className="modal-box bg_modal max-w-[670px] h-[365px] rounded-3xl">
        <div className="p-4 font-sora h-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="text-[24px]">See Details</p>
            <div className="modal-action mt-0">
              <label htmlFor="rpmsd" className="cursor-pointer rounded-full">
                {modalCloseBtn}
              </label>
            </div>
          </div>

          <div>
            <div className={formDivCss}>
              <label className="label">
                <span className={formInputLabelCss}>Enter Password</span>
              </label>
              <input
                type="password"
                placeholder=""
                name="password"
                className={formInputCss}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <span className={formInputWarningCss}></span>
              </label>
            </div>

            <button
              type="submit"
              className="primary_text_color  bg-primary font-sora rounded-2xl  py-6 w-full "
              // onClick={() => handleVerification()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirePasswordModalSeeDetails;
