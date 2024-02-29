"use client";
import React, { useState } from "react";
import {
  productImage1,
  productImage2,
  productImage3,
  productImage4,
} from "../../../../public/assets/images";
import OfferCard from "@components/offers/OfferCard";
import { useRouter } from "next/navigation";
import withAuth from "@components/withAuth";

const OfferPage = () => {
  const [offers, setOffers] = useState([
    // {
    //   title: "GET 15% OFF",
    //   motive: "Add these items and",
    //   productsData: [
    //     {
    //       image: productImage1,
    //       title: "Escalade Sport Platinum",
    //       prize: "Win macbook pro",
    //       price: "$256",
    //     },
    //     {
    //       image: productImage2,
    //       title: "Escalade Sport Platinum",
    //       prize: "Win macbook pro",
    //       price: "$256",
    //     },
    //   ],
    // },
    // {
    //   title: "GET 45% OFF",
    //   motive: "Add these items and",
    //   productsData: [
    //     {
    //       image: productImage3,
    //       title: "Escalade Sport Platinum",
    //       prize: "Win macbook pro",
    //       price: "$256",
    //     },
    //     {
    //       image: productImage4,
    //       title: "Escalade Sport Platinum",
    //       prize: "Win macbook pro",
    //       price: "$256",
    //     },
    //   ],
    // },
  ]);
  const router = useRouter();
  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Offers</p>
        {offers.length === 0 ? (
          <div className="max-w-[480px] min-h-[183px] p-6 bg_sec rounded-2xl flex flex-col justify-center items-center">
            <p className="prim_text_lg_reg mb-3">
              Start Shopping to avail offers
            </p>
            <button
              onClick={() => router.push("/")}
              className="btn_primary w-full max-w-[300px]"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 ">
            {offers?.map((offer, index) => {
              return <OfferCard offer={offer} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(OfferPage);
