"use client";
import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { orderPlace } from "@app/redux/actions";

/**
 * @author
 * @function CheckOutForm
 **/

export const CheckOutFormForAddPayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return null;
    }

    setIsProcessing(true);
    Swal.showLoading();

    const { error, setupIntent } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order/success`,
      },
      redirect: "if_required",
    });

    if (setupIntent && setupIntent.status === "succeeded") {
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "Card Authorized & Saved To Your Account!",
        showConfirmButton: true,
        iconColor: "#000",
      }).then(() => {
        window.location.reload();
      });
    }

    if (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Card Validation Failed!",
        text: `${error.message}`,
        iconColor: "#000",
      }).then(() => {
        window.location.reload();
      });
    }
    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <div className="">
        <button
          type=""
          className="mt-4 border-0 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora secondary_text_color"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Save Card"}
          </span>
        </button>
      </div>
      <button
        disabled={isProcessing || !stripe || !elements}
        id="submit"
      ></button>
      {/* Show any error or success messages */}
      {message && (
        <div className="prim_text_lg font-sora primary_text_color">
          {message}
        </div>
      )}
    </form>
  );
};
