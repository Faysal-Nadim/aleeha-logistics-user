"use client";
import React from "react";
import Script from "next/script";
import OrderSuccessPage from "@components/orders/OrderSuccessPage";
import withAuth from "@components/withAuth";

const page = () => {
  return (
    <div className=" lg:px-8 md:px-6 sm:px-4  w-full  font-sora">
      <OrderSuccessPage />
      <Script>
        {`gtag('event', 'conversion', {
          'send_to': 'AW-11280973564/9LC4CIr_ytAYEPz9l4Mq',
          'transaction_id': ''});`}
      </Script>
    </div>
  );
};

export default withAuth(page);
