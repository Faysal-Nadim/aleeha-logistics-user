"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSvg } from "../../../public/assets/Icons";

const SearchComponent = () => {
  return (
    <div className="prim_text_md_reg flex  items-center gap-2">
      <label className="input input-sm  input-bordered  flex items-center gap-2">
        <input type="text" className="grow text-[12px]" placeholder="Search" />
        {searchSvg}
      </label>
    </div>
  );
};

export default SearchComponent;
