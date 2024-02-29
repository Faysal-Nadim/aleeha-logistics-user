"use client";
import { login } from "@app/redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordInput from "./PasswordInput";
import { useRouter } from "next/navigation";
const formDivCss =
  "mb-4 form-control bg-transparent border-4 border-[#EEEEEE] px-6 py-2 rounded-[16px] w-full ";
const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_exlg primary_text_color w-full";
const formInputWarningCss = "sec_text_md_reg text-red-500";
const formInputLabelCss = "prim_text_sm_reg primary_text_color";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    e.preventDefault();
  };

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (
      !auth.authenticate &&
      auth.error !== null &&
      auth.error.status === 403
    ) {
      router.push(`/login/verify-email?email=${email}`);
    }
  }, [auth]);

  return (
    <div>
      <form onSubmit={handleLogin}>
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
          <p
            // href="/login/forget-password"
            onClick={() => router.push("/login/forget-password")}
            className="text-primary cursor-pointer prim_text_lg font-semibold"
          >
            Forget Password?
          </p>
          <button
            disabled={email !== "" && password !== "" ? false : true}
            type="submit"
            className={
              "primary_text_color rounded-2xl prim_text_lg bg_prim lg:py-5 sm:py-4 w-4/12 "
            }
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
