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

export const CheckOutForm = ({ exchange, address }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const user = JSON.parse(window.localStorage.getItem("user"));

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const totalItem = cart.cartItems
    ? Object.keys(cart.cartItems).reduce(function (qty, key) {
        return qty + cart.cartItems[key].qty;
      }, 0)
    : 0;

  const totalPrice = cart.cartItems
    ? Object.keys(cart.cartItems).reduce((totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      }, 0)
    : 0;

  const handleOrder = (cart, trxID) => {
    const order = {
      orderItems: cart.map((item) => {
        return {
          price: item.price,
          qty: item.qty,
          ticketQty:
            exchange === true
              ? item?.campaign?.ticketQty
              : item?.campaign?.ticketQtyGen,
          campaign_id: item.campaign._id,
        };
      }),
      orderTotal: totalPrice,
      orderID: Math.floor(100000 + Math.random() * 900000),
      address: address,
      trxID: trxID,
      email: user.email,
    };
    dispatch(orderPlace(order));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order/success`,
      },
      redirect: "if_required",
    });

    if (paymentIntent && paymentIntent.status === "succeeded") {
      Swal.showLoading();
      handleOrder(cart.cartItems, paymentIntent.id);
    }

    if (
      (error && error.type === "card_error") ||
      (error && error.type === "validation_error")
    ) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed!",
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
          className="mt-4 border-0 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
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
