"use client";
import React, { useState } from "react";
import { eyeSvg } from "../../public/assets/Icons";

const formDivCss =
  "form-control bg-info px-6 py-2 rounded-[16px] w-full max-width-className";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full max-width-className";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const ProfileInputDiv = ({
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
      <label className="label relative">
        <span className={formInputLabelCss}>{labelText}</span>
        <span
          onClick={() => {
            setIsOpen((current) => !current);
          }}
          className="cursor-pointer absolute  right-0 top-10"
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
      <label className="label">
        <span className={formInputWarningCss}>{errorText}</span>
      </label>
    </div>
  );
};
export default ProfileInputDiv;
