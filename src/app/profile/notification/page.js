"use client";
import { updateNotification } from "@app/redux/actions";
import withAuth from "@components/withAuth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user?.notification?.email);
  const [sms, setSms] = useState(user?.notification?.sms);
  const [wp, setWP] = useState(user?.notification?.wp);
  const [pn, setPN] = useState(user?.notification?.pn);
  const [click, setClick] = useState(false);

  // const handleNotification = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: email,
  //     sms: sms,
  //     wp: wp,
  //     pn: pn,
  //   };
  //   console.log(data);
  //   // dispatch(updateNotification(data));
  // };

  useEffect(() => {
    const data = {
      email: email,
      sms: sms,
      wp: wp,
      pn: pn,
    };
    dispatch(updateNotification(data));
  }, [click]);

  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Notification preferences</p>
        <div className="lg:w-[520px] sm:w-auto rounded-xl bg_sec">
          <div className="p-6">
            <p className="prim_text_xl">Promotional Emails</p>
            <p className="prim_text_md_reg ">
              Includes campaign, launch, offers and newsletter
            </p>
          </div>
          {/* BORDER */}
          <div className="border-b border-b-neutral w-full" />

          <div className="p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">Email</p>
              <input
                type="checkbox"
                className={
                  email
                    ? "toggle toggle-green bg-[#FF3624]  border border-[#FF3624] "
                    : "toggle toggle-green"
                }
                checked={email}
                onClick={(e) => {
                  setEmail(!email);
                  setClick(!click);
                  // handleNotification(e);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">SMS</p>
              <input
                type="checkbox"
                className={
                  sms
                    ? "toggle toggle-green bg-[#FF3624]  border border-[#FF3624] "
                    : "toggle toggle-green"
                }
                checked={sms}
                onClick={() => {
                  setSms(!sms);
                  // handleNotification;
                  setClick(!click);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">Whatsapp</p>
              <input
                type="checkbox"
                className={
                  wp
                    ? "toggle toggle-green bg-[#FF3624]  border border-[#FF3624] "
                    : "toggle toggle-green"
                }
                checked={wp}
                onClick={() => {
                  setWP(!wp);
                  // handleNotification;
                  setClick(!click);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="prim_text_lg_reg">Push Notifications</p>
              <input
                type="checkbox"
                className={
                  pn
                    ? "toggle toggle-green bg-[#FF3624]  border border-[#FF3624] "
                    : "toggle toggle-green"
                }
                checked={pn}
                onClick={() => {
                  setPN(!pn);
                  // handleNotification;
                  setClick(!click);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(page);
