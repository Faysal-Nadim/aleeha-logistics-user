"use client";
import "@styles/globals.css";
import Image from "next/image";
import logo from "../../public/assets/logo/lww.svg";
import Link from "next/link";
import { navToggleSvg } from "../../public/assets/Icons";
import { useEffect } from "react";
import CartComponent from "./navbar/CartComponent";
import CurrencyDropdown from "./navbar/CurrencyDropdown";
import AccountBalance from "./navbar/AccountBalance";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "@app/redux/actions";
import { useRouter } from "next/navigation";
import { alLogo } from "../../public/assets/images";

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <>
      {/* BEFORE NAV BAR SPACE */}
      <div className="py-5 w-full bg-[#F8F8F8] relative"></div>
      <div className="max-w-[1280px] mx-auto w-full  px-4  mb-2  relative top-[-16px] ">
        <div className=""></div>
        {/* bg-[#EEEEEE] */}
        <div className="flex justify-between items-center lg:h-[70px] sm:h-[48px] rounded-[16px] bg-white shadow-lg w-full lg:px-6 sm:px-4 ">
          {/* LOGO, NAV LINKS */}
          <div className="flex lg:justify-center sm:justify-between lg:w-auto sm:w-full items-center lg:gap-4 sm:gap-4">
            <Image
              className="lg:block sm:hidden mb-2 cursor-pointer"
              src={alLogo}
              alt="AleehaLogistics logo"
              height={110}
              width={110}
              onClick={() => router.push("/")}
            />
            <Image
              className="lg:hidden sm:block mb-2 cursor-pointer"
              src={alLogo}
              alt="AleehaLogistics logo"
              height={23}
              width={60}
              onClick={() => router.push("/")}
            />
            {/* TOGGLE SM */}
            <div className="lg:hidden sm:flex md:flex gap-2 items-center">
              {!auth.authenticate && (
                <>
                  <Link rel="canonical" href="/login">
                    {/* <div className="prim_text_lg_reg">Login</div> */}
                    <div className="btn_outline_sm primary_text_color text-[12px] uppercase font-semibold">
                      Login
                    </div>
                  </Link>
                </>
              )}

              {auth.authenticate && (
                <>
                  <Link rel="canonical" href="/cart">
                    <CartComponent />
                  </Link>
                </>
              )}
              <label
                htmlFor="navbarToggle"
                className="h-[30px] w-[32px] flex justify-center items-center bg-neutral rounded"
              >
                {navToggleSvg}
              </label>
            </div>
            {/* LEFT SIDE NAV ITEMS */}
            <div className="prim_text_lg_reg justify-center items-center gap-4  hidden lg:flex">
              {/* <Link href={"/product"}> Products</Link> */}
              <Link rel="canonical" href={"/helpcenter"}>
                {" "}
                Contact Us
              </Link>
              <Link rel="canonical" href={"/about-us"}>
                {" "}
                About Us
              </Link>
              <Link rel="canonical" href={"/product"}>
                {" "}
                Product
              </Link>
            </div>
          </div>
          {/* CURRENCY, PERSONAL DETAILTS, REG LOGIN, CART */}
          <div className="lg:flex md:hidden sm:hidden justify-center items-center ">
            <ul className="flex justify-center items-center gap-6">
              {/* <li>{<CurrencyDropdown />}</li> */}

              {!auth.authenticate ? (
                <>
                  <li>
                    <Link rel="canonical" href="/login">
                      {/* <div className="prim_text_lg_reg">Login</div> */}
                      <div className="btn_outline prim_text_lg_reg">Login</div>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    {
                      <Link rel="canonical" href="/cart">
                        <CartComponent />
                      </Link>
                    }
                  </li>
                  <li className="">
                    {
                      <Link rel="canonical" href="/profile">
                        <AccountBalance />
                      </Link>
                    }
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
