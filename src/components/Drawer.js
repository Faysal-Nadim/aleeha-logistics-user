"use client";
import Nav from "./Nav";
import { closeBtn } from "../../public/assets/Icons";
import logo from "../../public/assets/logo/Winly-Logo-1.png";
import Image from "next/image";
import PrimaryLinks from "./navbar/PrimaryLinks";
import CartComponent from "./navbar/CartComponent";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "@app/redux/actions";
import AccountBalance from "./navbar/AccountBalance";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ClientNavMobile from "./navbar/ClientNavMobile";
import AleehaLogisticssvg from "../../public/assets/logo/logo";
const Drawer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  const router = useRouter();

  return (
    <>
      <div className="drawer drawer-end w-full ">
        <input id="navbarToggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div id="navSticky" className="w-full  ">
            <Nav />
          </div>
          {/* <!-- Page content here --> */}
          <div className="w-full min-h-fit ">{children}</div>

          <Footer />
        </div>
        <div className="drawer-side ">
          <label htmlFor="navbarToggle" className="drawer-overlay"></label>
          <ul className="nav_menu bg_prim p-10 md:w-7/12 sm:w-10/12 lg:overflow-hidden md:overflow-y-auto sm:overflow-y-auto">
            {/* <!-- Sidebar content here --> */}
            <li className="flex justify-between items-center">
              <Image
                className="lg:h-[43px] lg:w-[110px] sm:h-[23px] sm:w-[60px] mb-2"
                src={AleehaLogisticssvg}
                alt="Picture of the lgoo"
              />
              <label
                htmlFor="navbarToggle"
                className="drawer-overlay cursor-pointer bg-[#eeeeee] rounded-full p-1"
              >
                {closeBtn}
              </label>
            </li>

            <>
              <PrimaryLinks />
            </>
            {/* <li>
            <CurrencyDropdown />
          </li> */}

            {!auth.authenticate ? (
              <>
                <li>
                  <label
                    htmlFor="navbarToggle"
                    onClick={() => {
                      router.push("/login");
                    }}
                    className="primary_text_color prim_text_lg_reg "
                  >
                    Login
                  </label>
                </li>
              </>
            ) : (
              <>
                {/* <li className="">
              

                <label
                  htmlFor="navbarToggle"
                  onClick={() => {
                    router.push("/cart");
                  }}
                  className="primary_text_color"
                >
                  <CartComponent />
                </label>
              </li> */}
                <li className="">
                  {/* <Link href="/profile">
                    <AccountBalance />
                 </Link> */}

                  <label
                    htmlFor="navbarToggle"
                    onClick={() => {
                      router.push("/profile");
                    }}
                    className="primary_text_color"
                  >
                    <AccountBalance />
                  </label>
                </li>

                <li>
                  {/* <ClientDashboardNav /> */}
                  <ClientNavMobile />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
