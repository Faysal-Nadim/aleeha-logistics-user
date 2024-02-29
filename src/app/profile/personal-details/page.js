"use client";
import { updateProfile } from "@app/redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ReactModal from "react-modal";
import PasswordInput from "@components/auth/PasswordInput";
import withAuth from "@components/withAuth";

const formDivCss =
  "form-control bg-info px-6 py-2 rounded-[16px] w-full max-width-className";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full max-width-className";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg offset_color";
// const formDivCss =
//   "form-control bg-info px-6 py-2 rounded-[16px] w-full max-width-className";
// const formInputCss =
//   "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full max-width-className";
// const formInputWarningCss = "sec_text_sm text-red-500";
// const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const countryData = require("../../../../public/CountryCodes.json");
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
    backgroundColor: "#f8f8f8",
    padding: 50,
    borderRadius: 20,
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const PersoalDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState(user?.gender);
  const [country, setCountry] = useState(user?.country);
  const [nationality, setNationality] = useState(user?.nationality);
  const [dob, setDob] = useState(user?.dob);
  const [phone, setPhone] = useState(user?.phone);
  const [dialCode, setDialCode] = useState(user?.dialCode);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [disableUpdateBtn, setDisableUpdateBtn] = useState(true);

  const handleProfileUpdate = (e) => {
    const data = {
      firstName,
      lastName,
      gender,
      country,
      dob,
      phone,
      dialCode,
      password,
      nationality,
    };
    dispatch(updateProfile(data));
    e.preventDefault();
    setShow(false);
    setDisableUpdateBtn(true);
  };

  useEffect(() => {
    if (
      user?.firstName !== firstName ||
      user?.lastName !== lastName ||
      user?.phone !== phone ||
      user?.gender !== gender ||
      user?.country !== country ||
      user?.nationality !== nationality ||
      user?.dob !== dob ||
      user?.dialCode !== dialCode
    )
      setDisableUpdateBtn((state) => {
        !state;
      });
  }, [firstName, lastName, gender, country, dob, phone, dialCode, nationality]);

  if (auth.loading === true) {
    Swal.showLoading();
  }

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Personal Details</p>

        <form className=" grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-6 sm:gap-4">
          <div className={formDivCss}>
            <label className="label lg:py-[8px] sm:py-[4px] px-[4px]">
              <span className={formInputLabelCss}>First Name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className={formInputCss}
              value={firstName?.toUpperCase()}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
          <div className={formDivCss}>
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
              <span className={formInputLabelCss}>Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className={formInputCss}
              value={lastName?.toUpperCase()}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>

          <div className={formDivCss}>
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
              <span className={formInputLabelCss}>Email</span>
            </label>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className={formInputCss}
              name="dob"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={true}
            />
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
          <div
            className={
              "bg-info px-6 py-2 rounded-[16px] w-full max-width-className flex gap-4"
            }
          >
            <div className="w-1/4">
              <label className="label  lg:pt-[6px] sm:py-[4px] px-[4px] ">
                <span className={formInputLabelCss}>Code</span>
              </label>
              <select
                type="select"
                className={
                  "select border-info ml-[-12px] sec_text_xl primary_text_color bg-info"
                }
                value={dialCode}
                onChange={(e) => setDialCode(e.target.value)}
              >
                {countryData.map((country) => (
                  <option
                    className="bg-info text-[14px] max-w-[80px]"
                    value={country.dial_code}
                  >
                    {country.dial_code}
                  </option>
                ))}
              </select>
              {/* <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
                <span className={formInputWarningCss}></span>
              </label> */}
            </div>

            <div className="w-3/4 border-l pl-3 h-full border-slate-200">
              <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
                <span className={formInputLabelCss}>Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="********"
                className={formInputCss}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
                <span className={formInputWarningCss}></span>
              </label>
            </div>
          </div>
          <div className={formDivCss}>
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
              <span className={formInputLabelCss}>Birth of Date</span>
            </label>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className={formInputCss}
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
          <div className={formDivCss}>
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
              <span className={formInputLabelCss}>Gender</span>
            </label>
            <select
              type="select"
              className={
                "select  lg:px-1 sm:px-0  border-info primary_text_color bg-info"
              }
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option className="bg-info max-w-[300px]" value={"Male"}>
                Male
              </option>
              <option className="bg-info max-w-[300px]" value={"Female"}>
                Female
              </option>
              <option className="bg-info max-w-[300px]" value={"Others"}>
                Others
              </option>
            </select>
            {/* <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label> */}
          </div>

          <div className={formDivCss}>
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
              <span className={formInputLabelCss}>Country</span>
            </label>
            <select
              type="select"
              className={
                "select lg:px-1 sm:px-0 border-info primary_text_color bg-info"
              }
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryData.map((country) => (
                <option className="bg-info max-w-[300px]" value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
          <div className={formDivCss}>
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px] ">
              <span className={formInputLabelCss}>Nationality</span>
            </label>
            <select
              type="select"
              className={
                "select lg:px-1 sm:px-0 border-info primary_text_color bg-info"
              }
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option className="bg-info max-w-[300px]" value={" "}>
                Select Your Nationality
              </option>
              {countryData.map((country) => (
                <option className="bg-info max-w-[300px]" value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
          {/* 
          <input
            id="profileImage"
            type="file"
            name="img"
            className="hidden"
            onChange={(e) => setImage(e.target.value)}
          /> */}

          <input
            type="submit"
            name="update"
            value="Update"
            className={disableUpdateBtn === true ? "hidden" : "btn_gray btn"}
            onClick={(e) => {
              setShow(true), e.preventDefault();
            }}
          />
        </form>
      </div>
      <ReactModal
        isOpen={show}
        style={customStyles}
        onRequestClose={() => setShow(false)}
      >
        <form>
          <PasswordInput
            name={"password"}
            placeholder={"Your Password"}
            labelText={"Password"}
            errorText={""}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="font-sora flex justify-between items-center mt-4">
            <button
              type="submit"
              className="mt-4 normal-case secondary_text_color btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
              onClick={handleProfileUpdate}
            >
              Confirm Update
            </button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default withAuth(PersoalDetails);
