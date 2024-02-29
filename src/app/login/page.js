"use client";
import Login from "@components/auth/Login";
import Registration from "@components/auth/Registration";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="max-w-[1280px] mx-auto lg:px-6 sm:p-4">
      <div className="lg:max-w-[620px] sm:mx-w-full mx-auto bg_sec rounded-3xl shadow-xl py-10 lg:px-12 sm:px-6">
        <div className="flex lg:rounded-3xl sm:rounded-xl bg_prim w-full mb-6 font-sora">
          <button
            onClick={() => {
              setIsLogin(true);
            }}
            className={
              isLogin
                ? "primary_text_color bg_sec  lg:rounded-3xl sm:rounded-xl box-shadow lg:py-6 sm:py-4 w-1/2"
                : "primary_text_color  lg:rounded-3xl sm:rounded-xl lg:py-6 sm:py-4 w-1/2"
            }
          >
            Login
          </button>

          <button
            onClick={() => {
              setIsLogin(false);
            }}
            className={
              !isLogin
                ? "primary_text_color bg_sec lg:rounded-3xl sm:rounded-xl box-shadow lg:py-6 sm:py-4 w-1/2"
                : "primary_text_color  lg:rounded-3xl sm:rounded-xl lg:py-6 sm:py-4 w-1/2"
            }
          >
            Register
          </button>
        </div>

        {isLogin ? <Login /> : <Registration />}
      </div>
    </section>
  );
};

export default LoginRegister;
