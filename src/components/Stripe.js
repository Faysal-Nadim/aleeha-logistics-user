"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axiosInstance from "@app/redux/helpers/axios";
import { CheckOutForm } from "./CheckOutForm";

/**
 * @author
 * @function StripeGateway
 **/

export const StripeGateway = ({
  totalPrice,
  exchangeProductWithTickets,
  address,
}) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    axiosInstance.get(`/payment/stripe/get-key`).then(async (res) => {
      const { publishableKey } = await res.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    const data = {
      amount: totalPrice,
      customer: user.stripe_id,
      email: user.email,
    };
    axiosInstance
      .post(`/payment/stripe/create-intent`, data)
      .then(async (res) => {
        const { clientSecret } = await res.data;
        setClientSecret(clientSecret);
      });
  }, []);
  return (
    <div className="border-t mt-6 bg-white p-6 rounded-xl">
      {stripePromise && clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <CheckOutForm
            exchange={exchangeProductWithTickets}
            address={address}
            totalPrice={totalPrice}
          />
        </Elements>
      )}
    </div>
  );
};
