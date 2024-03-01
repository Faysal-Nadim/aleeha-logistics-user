import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/lww.svg";
import Link from "next/link";
import { fb, insta } from "../../public/assets/socialSvg";
import {
  ae,
  dubaided,
  dubaided_black_horizontal,
  dubaided_black_long,
  dubaidedwhite,
  mc,
  pp,
  visa,
  android_icon,
  apple_icon,
} from "../../public/assets/images";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Winners",
      link: "/winners",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    //,
    //{
    // name: "Products",
    // link: "/product",
    // },
    // {
    //   name: "Active Tickets",
    //   link: "/profile/active-tickets",
    // },
    // {
    //   name: "My Account",
    //   link: "/profile",
    // },
    // {
    //   name: "Winners",
    //   link: "/winners",
    // },
  ];

  const quickService = [
    {
      name: "Contact Us",
      link: "/helpcenter",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
  ];

  const socialLinks = [
    {
      icon: fb,
      name: "facebook",
      link: "https://www.facebook.com/AleehaLogistics.net/",
    },
    {
      icon: insta,
      name: "Instagram",
      link: "https://www.instagram.com/AleehaLogistics.ae/",
    },
    // {
    //   icon: li,
    //   name: "LinkedIn",
    //   link: "",
    // },
    // {
    //   icon: tw,
    //   name: "twitter",
    //   link: "",
    // },
  ];
  const getUsOn = [
    {
      icon: apple_icon,
      name: "Apple Store",
      motive: "Download on the",
      link: "https://apps.apple.com/th/app/AleehaLogistics-llc/id6469633086",
    },
    {
      icon: android_icon,
      name: "Android Device",
      motive: "Download apk for",
      link: "https://AleehaLogistics-storage.s3.me-central-1.amazonaws.com/AleehaLogistics+(v1.0.5).apk",
    },
  ];

  const legacy = [
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms of Use",
      link: "/terms-of-use",
    },
    {
      name: "Sales and Refunds",
      link: "/privacy-policy",
    },
    // {
    //   name: "Legal",
    //   link: "/privacy-policy",
    // },
  ];
  return (
    <div className="flex flex-col lg:gap-[22px] max-w-[1280px] mx-auto w-full sm:gap-1 py-6 lg:px-6 sm:px-4 mt-8">
      {/* 1ST PART */}
      <div className="relative flex flex-col justify-center  p-10 bg_sec rounded-[16px]">
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-1 justify-between items-start gap-8">
          <div className="flex flex-col lg:justify-center md:justify-start sm:justify-start items-center">
            <Image
              className="lg:h-[55px] lg:w-[141px] sm:h-[24px] sm:w-[61px] mb-2"
              src={logo}
              alt="Picture of the lgoo"
            />
          </div>

          <div className="flex flex-col lg:mx-auto md:mx-0 sm:mx-0 gap-4">
            <p className="prim_text_exlg">Quick Links</p>
            <div className="flex lg:flex-row sm:flex-col gap-3">
              {quickLinks?.map((x, index) => {
                return (
                  <Link
                    rel="canonical"
                    key={index}
                    className="prim_text_md_reg"
                    href={x?.link}
                  >
                    {x?.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:mx-auto md:mx-0 sm:mx-0 gap-4">
            <p className="prim_text_exlg">Customer service</p>
            <div className="flex lg:flex-row sm:flex-col gap-3">
              {quickService?.map((x, index) => {
                return (
                  <Link
                    key={index}
                    rel="canonical"
                    className="prim_text_md_reg"
                    href={x?.link}
                  >
                    {x?.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex lg:justify-center md:justify-start sm:justify-start gap-6">
              {socialLinks?.map((x, index) => {
                return (
                  <a
                    rel="canonical"
                    key={index}
                    href={x?.link}
                    target="_blank"
                    className="h-[36px] w-[36px] rounded-full bg-black flex justify-center items-center "
                  >
                    {x?.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="p-2 bg_sec absolute  lg:w-11/12 sm:w-full  rounded-[6px] lg:bottom-[-10px] sm:bottom-0" />
        </div>
      </div>

      {/* 2nd PART */}

      <div className="relative w-full flex justify-center items-center p-10 bg_sec rounded-[16px]">
        <div className="p-2 bg_sec absolute  lg:w-11/12 sm:w-full  rounded-[6px] lg:top-[-10px] sm:top-0" />
        <div className=" w-full flex lg:justify-center sm:justify-between gap-10 lg:items-center sm:items-start ">
          <div className="flex lg:flex-row sm:flex-col justify-center sm:items-start lg:items-center gap-3">
            {legacy?.map((x, index) => {
              return (
                <Link
                  key={index}
                  rel="canonical"
                  className="prim_text_md_reg"
                  href={x?.link}
                >
                  {x?.name}
                </Link>
              );
            })}
            <div className="flex flex-wrap  items-center gap-1">
              <p className="prim_text_md_reg"> We Accept</p>
              <div className="flex  justify-center items-center gap-1">
                <Image src={mc} height={10} width={37} alt="mastercard" />
                <Image src={visa} height={25} width={30} alt="visa" />
                <Image src={ae} height={22} width={22} alt="american express" />
              </div>
            </div>
          </div>

          {/* <div className="">
            <Image
              src={dubaided_black_long}
              height={50}
              width={200}
              alt="dubai ded"
              className="lg:block md:block sm:hidden"
            />
            <Image
              src={dubaided_black_horizontal}
              height={50}
              width={160}
              alt="dubai ded"
              className="lg:hidden md:hidden sm:block"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
