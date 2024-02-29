"use client";
import React, { useState } from "react";
import { aed } from "../../../public/assets/countryFlags";
import { arrowDown } from "../../../public/assets/Icons";
import Image from "next/image";

const CurrencyDropdown = () => {
  const currencyData = [
    {
      name: "AED",
      icon: aed,
    },
  ];
  const [currencySelected, setCurrencySelected] = useState(0);
  return (
    <div className="dropdown dropdown-end prim_text_lg_reg">
      <label
        tabIndex={0}
        className="flex cursor-pointer justify-center items-center gap-2"
      >
        <Image
          src={currencyData[currencySelected]?.icon}
          alt={currencyData[currencySelected]?.name}
          height={24}
          width={32}
          className="rounded"
        ></Image>
        <p className="">{currencyData[currencySelected]?.name}</p>
        {arrowDown}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg_sec rounded-box mt-2"
      >
        {currencyData.map((x, index) => {
          return (
            <li key={index}>
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={x?.icon}
                  alt={x?.name}
                  height={24}
                  width={32}
                  className="rounded"
                ></Image>
                <p className="">{x?.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;
