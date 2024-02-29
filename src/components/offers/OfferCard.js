import React from "react";
import ProductCard from "./ProductCard";

const OfferCard = ({ offer }) => {
  return (
    <div className="rounded-[36px] bg-primary-red p-4 max-w-[924px]">
      <div className="flex justify-between items-center mb-4 px-6">
        <div>
          <p style={{ color: "white" }} className=" sec_text_md ">
            {offer?.motive}
          </p>
          <p style={{ color: "white" }} className="prim_text_2xl font-bold ">
            {offer?.title}
          </p>
        </div>
        <button type="" className="btn_prim_user_db ">
          Avail Offer
        </button>
      </div>

      <div className="p-4 bg_prim rounded-[29px] grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {offer?.productsData?.map((pd, index) => {
          return <ProductCard pd={pd} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OfferCard;
