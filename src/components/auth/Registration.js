"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PasswordInput from "./PasswordInput";
import { register } from "@app/redux/actions";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_exlg primary_text_color w-full ";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };
    dispatch(register(data));
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            className={formInputCss}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className={formInputCss}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="label lg:block sm:hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Phone</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            name="last_name"
            className={formInputCss}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="label lg:block sm:hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className={formInputCss}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label lg:block sm:hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <PasswordInput
          name={"password"}
          placeholder={"Your Password"}
          labelText={"Password"}
          errorText={""}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="font-sora flex justify-between items-center mt-4">
          <div></div>
          <button
            type="submit"
            className="primary_text_color rounded-2xl prim_text_lg bg_prim lg:py-5 sm:py-4 w-4/12  "
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
