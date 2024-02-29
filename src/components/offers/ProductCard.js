import Image from "next/image";
import React from "react";

const ProductCard = ({ pd }) => {
  return (
    <div className="bg_sec rounded-[20px] p-4 flex justify-start items-start gap-10">
      <Image
        className="rounded-xl"
        src={pd?.image}
        height={98}
        width={103}
        alt={pd?.title + " image"}
      />
      <div>
        <p className="prim_text_lg ">{pd?.title}</p>
        <p className="sec_text_md">{pd?.prize}</p>
        <p className="mt-3 text-primary-red text-[14px] font-bold font-sora">
          {pd?.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
