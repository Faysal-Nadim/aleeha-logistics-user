"use client";
import { signUp } from "@app/redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PasswordInput from "./PasswordInput";
// const formDivCss =
//   "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
// const formInputCss =
//   "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full";
// const formInputWarningCss = "sec_text_sm text-red-500";
// const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_exlg primary_text_color w-full ";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const countryData = require("../../../public/CountryCodes.json");

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState(countryData[0].name);
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [nationality, setNationality] = useState(countryData[0].name);

  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    const data = {
      firstName,
      lastName,
      email,
      gender,
      country,
      dob,
      phone,
      password,
      dialCode: countryCode,
      nationality,
    };
    dispatch(signUp(data));
    e.preventDefault();
  };

  useEffect(() => {
    const data = countryData.filter((data) => data.name === country);
    setCountryCode(data[0].dial_code);
  }, [country]);

  function checkValue(str, max) {
    if (str.charAt(0) !== "0" || str == "00") {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? "0" + num
          : num.toString();
    }
    return str;
  }

  useEffect(() => {
    var input = dob;
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split("/").map(function (v) {
      return v.replace(/\D/g, "");
    });
    if (values[0]) values[0] = checkValue(values[0], 31);
    if (values[1]) values[1] = checkValue(values[1], 12);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + " / " : v;
    });
    setDob(output.join("").substr(0, 14));
  }, [dob]);

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
            <span className={formInputLabelCss}>Gender</span>
          </label>
          <select
            type="select"
            className={"select primary_text_color bg_sec ml-[-12px] font-sora"}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option className="bg-info  primary_text_color" value={"Male"}>
              Male
            </option>
            <option className="bg-info primary_text_color" value={"Female"}>
              Female
            </option>
            <option className="bg-info primary_text_color" value={"Others"}>
              Others
            </option>
          </select>

          <label className="label hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>
        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Country</span>
          </label>
          <select
            type="select"
            className={
              "select primary_text_color bg_sec scrollable_element ml-[-12px]   font-sora"
            }
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {countryData.map((country) => (
              <option
                className="bg-info   primary_text_color"
                value={country.name}
              >
                {country.name}
              </option>
            ))}
          </select>

          <label className="label hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>
        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Nationality</span>
          </label>
          <select
            type="select"
            className={
              "select primary_text_color bg_sec scrollable_element ml-[-12px]   font-sora"
            }
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            {countryData.map((country) => (
              <option
                className="bg-info   primary_text_color"
                value={country.name}
              >
                {country.name}
              </option>
            ))}
          </select>

          <label className="label hidden">
            <span className={formInputWarningCss}></span>
          </label>
        </div>

        <div className={formDivCss}>
          <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
            <span className={formInputLabelCss}>Birth of Date</span>
          </label>
          <input
            id="date"
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
        <div
          className={
            "border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full max-width-className flex items-center gap-4 mb-4"
          }
        >
          <div className="w-4/12">
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
              <span className={formInputLabelCss}> Code</span>
            </label>
            <select
              type="select"
              className={
                "select primary_text_color bg_sec ml-[-12px] scrollable_element lg:text-  font-sora"
              }
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {countryData.map((country) => (
                <option
                  className="bg-info  primary_text_color"
                  value={country.dial_code}
                >
                  {country.dial_code}
                </option>
              ))}
            </select>
            <label className="hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>

          <div className="w-8/12 border-l pl-3 h-full border-slate-200 ">
            <label className="label  lg:py-[8px] sm:py-[4px] px-[4px]">
              <span className={formInputLabelCss}>Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="********"
              className={formInputCss}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="label lg:block sm:hidden">
              <span className={formInputWarningCss}></span>
            </label>
          </div>
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
