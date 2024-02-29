"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PasswordInput from "@components/auth/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "@app/redux/actions";
const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full";
const formInputWarningCss = "sec_text_sm text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const email = searchParams.get("email");
    setEmail(email);
  }, [searchParams]);

  useEffect(() => {
    if (password !== confirmPassword || confirmPassword !== password) {
      setError(true);
    } else {
      setError(false);
    }
  }, [password, confirmPassword]);

  const handleResetPassword = (e) => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(resetPassword(data));
    e.preventDefault();
  };
  return (
    <section className="max-w-[1280px] mx-auto lg:px-6 sm:p-4">
      <div className="lg:max-w-[620px] sm:mx-w-full ">
        <div className="bg_sec rounded-3xl shadow-xl pt-10 pb-6 lg:px-10 sm:px-6">
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <PasswordInput
              name={"password"}
              placeholder={"Set new password"}
              labelText={"New Password"}
              errorText={""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              name={"confirmPassword"}
              placeholder={"Confirm password"}
              labelText={"Confirm Password"}
              errorText={error ? "Password Doesn't Match" : ""}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="font-sora flex justify-between items-center mt-4">
              <div />
              <button
                type="submit"
                className="primary_text_color lg:rounded-2xl sm:rounded-xl bg_prim lg:py-4 sm:py-2 w-4/12 "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
