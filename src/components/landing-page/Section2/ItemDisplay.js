"use client";
import { addToCart } from "@app/redux/actions";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrizeDetailsModule from "../shared/PrizeDetailsModule";
import ExploreCampigns from "./ExploreCampigns";
import AddToCartDetailsModule from "../shared/AddToCartDetailsModule";

const ItemDisplay = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [priceDetails, setPriceDetails] = useState(null);

  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);

  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  // console.log(campaign?.campaigns?.allCampaigns);

  return (
    <div className="lg:pt-0 sm:pt-3">
      <div className="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 lg:px-2 sm:px-0 ">
        {/* {
          // campaign?.campaigns?.explore?.length > 0 &&
          // ?.slice()
          // ?.reverse()
          campaign?.campaigns?.explore
            ?.slice()
            .reverse()
            .map((item, index) => {
              return ( */}
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[8]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[7]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[6]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />

        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[5]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />

        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[2]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[3]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[4]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[1]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />
        <ExploreCampigns
          // key={index}
          handleCart={handleCart}
          item={campaign?.campaigns?.allCampaigns?.[0]}
          setShow={setShow}
          setView={setView}
          setPriceDetails={setPriceDetails}
        />

        {/* );
            })
        } */}
      </div>
      {
        <>
          <PrizeDetailsModule
            show={show}
            setShow={setShow}
            priceDetails={priceDetails}
            handleCart={handleCart}
          />
          <AddToCartDetailsModule
            show={view}
            setShow={setView}
            priceDetails={priceDetails}
            handleCart={handleCart}
          />
        </>
      }
    </div>
  );
};

export default ItemDisplay;
