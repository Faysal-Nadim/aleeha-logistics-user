"use client";
import React, { useState } from "react";
import { eyeSvg } from "../../../public/assets/Icons";

const formDivCss =
  "form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_exlg primary_text_color w-full ";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const PasswordInput = ({
  name,
  placeholder,
  value,
  labelText,
  errorText,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={formDivCss}>
      <label className="label relative  lg:py-[8px] sm:py-[4px] px-[4px]">
        <span className={formInputLabelCss}>{labelText}</span>
        <span
          onClick={() => {
            setIsOpen((current) => !current);
          }}
          className="cursor-pointer absolute  right-0 lg:top-10 sm:top-6"
        >
          {eyeSvg}
        </span>
      </label>
      <input
        type={isOpen ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        value={value}
        className={formInputCss}
        onChange={onChange}
      />
      <label className="label  lg:block sm:hidden">
        <span className={formInputWarningCss}>{errorText}</span>
      </label>
    </div>
  );
};
export default PasswordInput;
