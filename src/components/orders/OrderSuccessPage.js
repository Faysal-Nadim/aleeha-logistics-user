"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { OrderSuccess } from "../../../public/assets/images";

const OrderSuccessPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-[514px] flex flex-col justify-center items-center w-full lg:p-10 sm:p-6 mx-auto rounded-2xl box-shadow ">
        <Image
          src={OrderSuccess}
          height={240}
          width={240}
          alt="order success"
          className="mx-auto"
        />

        <h1 className="font-sora font-bold primary_text_color text-center prim_text_2xl">
          Your order is confirmed
        </h1>
        <p className="font-sora text-[12px] text-center">
          You will receive a confirmation email soon.
        </p>

        <button
          onClick={() => router.push("/profile/active-tickets")}
          className="rounded-full mt-12 secondary_text_color max-w-[140px] px-6 py-3 bg-primary font-sora text-[12px] font-semibold "
        >
          See tickets
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
