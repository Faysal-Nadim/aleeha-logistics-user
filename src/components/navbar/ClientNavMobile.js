"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  active_ticket,
  logout,
  notification,
  offer,
  payment_options,
  person,
  settiing,
  wallet,
} from "../../../public/assets/Icons";
import { signout, updateImage } from "@app/redux/actions";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { useRouter } from "next/navigation";

const formInputCss =
  "p-1 focus:outline-none bg-transparent sec_text_xl primary_text_color w-full";

const ClientNavMobile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [show, setShow] = useState(false);
  const [previw, setPreview] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setPreview(reader.result);
    }
  };

  const [navData, setNavData] = useState([
    {
      title: "Personal Details",
      link: "personal-details",
      icon: person,
    },
    {
      title: "Wallet",
      link: "wallet",
      icon: wallet,
    },
    {
      title: "Offer",
      link: "offers",
      icon: offer,
    },
    {
      title: "Active Tickets",
      link: "active-tickets",
      icon: active_ticket,
    },
    {
      title: "Payment Options",
      link: "payment-options",
      icon: payment_options,
    },
    {
      title: "Settings",
      link: "settings",
      icon: settiing,
    },
    {
      title: "Notification Preferences",
      link: "notification",
      icon: notification,
    },
  ]);

  const userData = JSON.parse(localStorage.getItem("user"));

  const profileImg =
    userData?.img?.url === null
      ? "https://AleehaLogistics-storage.s3.me-central-1.amazonaws.com/profileicon.jpeg"
      : userData?.img?.url;

  const handleProfileImage = (e) => {
    const form = new FormData();

    form.append("image", image);

    dispatch(updateImage(form));
    e.preventDefault();
    setShow(false);
  };

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
      backgroundColor: "#eeeeee",
      padding: 50,
      borderRadius: 20,
      border: "none",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  };

  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-6">
      {/* PROFILE NEVIGATION */}
      <div className="bg_sec rounded-[12px]">
        {navData?.map((nav, index) => {
          return (
            <>
              {/* <Link href={"/profile/" + nav?.link} key={index}>
                
                <div className="flex gap-3 p-4">
                  {nav?.icon}{" "}
                  <p className="prim_text_lg_reg">{nav?.title}</p>
                 
                </div>
                <div className="border-b border-b-neutral w-full"></div>
               {" "}
              </Link> */}

              <label
                key={index}
                htmlFor="navbarToggle"
                onClick={() => {
                  router.push("/profile/" + nav?.link);
                }}
                className="primary_text_color prim_text_lg_reg flex gap-3 p-4 border-b border-b-neutral w-full"
              >
                {nav?.icon} {nav?.title}
              </label>
            </>
          );
        })}

        <div
          className="flex gap-3 p-4 cursor-pointer"
          onClick={() => dispatch(signout())}
        >
          {logout} <p className="prim_text_lg_reg">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ClientNavMobile;
