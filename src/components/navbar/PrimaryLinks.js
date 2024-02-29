"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const PrimaryLinks = () => {
  const router = useRouter();

  return (
    <>
      {/* <li>
        <Link href={"/"}>Home</Link>
      </li>

      <li>
        <Link href={"/product"}> Products</Link>
      </li>
      <li>
        <Link href={"/helpcenter"}> Contact us</Link>
      </li> */}

      <li>
        <label
          htmlFor="navbarToggle"
          onClick={() => {
            router.push("/");
          }}
          className="primary_text_color prim_text_lg_reg"
        >
          Home
        </label>
      </li>
      <li>
        <label
          htmlFor="navbarToggle"
          onClick={() => {
            router.push("/winners");
          }}
          className="primary_text_color prim_text_lg_reg"
        >
          Winners
        </label>
      </li>

      {/* <li>
        <label
          htmlFor="navbarToggle"
          onClick={() => {
            router.push("/product");
          }}
          className="primary_text_color prim_text_lg_reg"
        >
          Products
        </label>
      </li> */}

      <li>
        <label
          htmlFor="navbarToggle"
          onClick={() => {
            router.push("/helpcenter");
          }}
          className="primary_text_color prim_text_lg_reg"
        >
          Contact Us
        </label>
      </li>
      <li>
        <label
          htmlFor="navbarToggle"
          onClick={() => {
            router.push("/about-us");
          }}
          className="primary_text_color prim_text_lg_reg"
        >
          About Us
        </label>
      </li>
    </>
  );
};

export default PrimaryLinks;
