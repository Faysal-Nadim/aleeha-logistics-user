"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartItems,
  orderPlace,
  removeCart,
  updateCart,
} from "@app/redux/actions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from "sweetalert2";
import { api } from "@app/redux/helpers/urlConfig";
import axiosInstance from "@app/redux/helpers/axios";
import { CheckOutForm } from "@components/CheckOutForm";
import ReactModal from "react-modal";
import { StripeGateway } from "@components/Stripe";
import { useRouter } from "next/navigation";
import withAuth from "@components/withAuth";

const addCardImageClass =
  "cursor-pointer bg-white hover:border-2 hover:border-blue-500 hover:scale-95 rounded-lg transition-all ease-in-out";
const addCardImageClassActive =
  "cursor-pointer bg-white border-2 border-blue-500 scale-95 rounded-lg";

const cardInputCss =
  "input input-bordered input-info w-full  bg_sec primary_text_color mb-2 text-[14px]";
const addressInputCss =
  "textarea textarea-info w-full bg_sec primary_text_color mb-2 text-[14px] h-32 primary_text_color";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "#1A1A1A",
    backgroundColor: "#eeeeee",
    padding: 50,
    borderRadius: 20,
    border: "none",
    height: 500,
    width: 500,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const CartPage = () => {
  const [exchangeProductWithTickets, setExchangeProductWithTickets] =
    useState(true);
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [show, setShow] = useState(false);
  const [methods, setMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  const userData = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    Swal.showLoading();
    const data = { customer: userData.stripe_id };
    axiosInstance
      .post(`/payment/stripe/get-payment-methods`, data)
      .then(async (res) => {
        setMethods(res.data.methods);
      })
      .catch((error) => {
        console.log(error);
      });
    Swal.close();
  }, []);

  const handleCart = ({ productData, qty }) => {
    const item = {
      _id: productData.campaign._id,
      price: productData.price,
    };
    dispatch(updateCart(item, qty));
  };

  let totalItem = cart.cartItems
    ? Object.keys(cart.cartItems).reduce(function (qty, key) {
        return qty + cart.cartItems[key].qty;
      }, 0)
    : 0;

  let productTotal = cart.cartItems
    ? Object.keys(cart.cartItems).reduce((totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      }, 0)
    : 0;

  let totalPrice =
    (cart.cartItems
      ? Object.keys(cart.cartItems).reduce((totalPrice, key) => {
          const { price, qty } = cart.cartItems[key];
          return totalPrice + price * qty;
        }, 0)
      : 0) + +(exchangeProductWithTickets === true ? 0 : 35);

  let vat = 0.0;

  const handleOrder = async (cart, trxID) => {
    const order = {
      orderItems: cart.map((item) => {
        return {
          price: item.price,
          qty: item.qty,
          ticketQty:
            exchangeProductWithTickets === true
              ? item?.campaign?.ticketQty
              : item?.campaign?.ticketQtyGen,
          campaign_id: item.campaign._id,
        };
      }),
      orderTotal: totalPrice,
      orderID: Math.floor(100000 + Math.random() * 900000),
      address: `${apartment}, ${detailAddress}, ${city} ${zipCode}`,
      trxID: trxID,
      email: userData.email,
    };
    dispatch(orderPlace(order));
  };

  // useEffect(() => {
  //   axiosInstance.get(`/payment/stripe/get-key`).then(async (res) => {
  //     const { publishableKey } = await res.data;
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);

  // useEffect(() => {
  //   const data = { amount: totalPrice };
  //   axiosInstance
  //     .post(`/payment/stripe/create-intent`, data)
  //     .then(async (res) => {
  //       const { clientSecret } = await res.data;
  //       setClientSecret(clientSecret);
  //     });
  // }, []);

  const handleCartCount = (item) => {
    const data = {
      _id: item._id,
    };
    dispatch(removeCart(data));
  };

  // const createOrder = (data) => {
  //   // Order is created on the server and the order id is returned
  //   return fetch(`${api}/payment/paypal/create-order`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // use the "body" param to optionally pass additional order information
  //     // like product skus and quantities
  //     body: JSON.stringify({
  //       amount: totalPrice,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((order) => order.id);
  // };
  // const onApprove = (data) => {
  //   // Order is captured on the server and the response is returned to the browser
  //   return fetch(`${api}/payment/paypal/capture-order`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       orderID: data.orderID,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.status === "COMPLETED") {
  //         Swal.showLoading();
  //         handleOrder(cart.cartItems);
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           text: "Payment Was Not Completed",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     });
  // };
  const router = useRouter();

  const handlePaymentMethod = (paymentMethod) => {
    if (paymentMethod && paymentMethod === "NewCard") {
      setShow(true);
    } else if (paymentMethod && paymentMethod !== null) {
      const data = {
        customer_id: userData.stripe_id,
        payment_id: paymentMethod,
        amount: totalPrice,
        email: userData.email,
      };
      Swal.showLoading();
      axiosInstance
        .post(`/payment/stripe/charge-saved-card`, data)
        .then(async (res) => {
          await handleOrder(cart.cartItems, res.data.id);
        })
        .catch((error) => {
          const { data } = error.response;
          Swal.fire({
            icon: "error",
            title: "Card Validation Failed!",
            text: `${data.msg}`,
            iconColor: "#000",
          }).then(() => {
            window.location.reload();
          });
        });
    }
  };

  return (
    <div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-4">
        <div className="  max-w-[936px] lg:w-8/12 sm:w-full mx-auto">
          <p className="prim_text_2xl mb-8">Cart</p>
          {/* PRODUCT */}
          <div className="lg:p-6 sm:p-4 shadow-lg rounded-[24px] grid grid-cols-1 gap-8 bg_sec max-w-[936px]">
            {cart?.cartItems && cart?.cartItems.length > 0 ? (
              cart?.cartItems?.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="flex lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-6"
                    >
                      {/* INFO */}
                      <div className="flex gap-6 justify-start items-center rounded-2xl">
                        <Image
                          src={
                            item?.campaign?.img?.product !== null
                              ? item?.campaign?.img?.product
                              : "https://i.ibb.co/fFnnXLZ/shopping-cart.png"
                          }
                          height={127}
                          width={137}
                          alt={item?.campaign?.product + " image"}
                          className="rounded-3xl"
                        />

                        <div>
                          <p className="prim_text_lg">
                            {" "}
                            {item?.campaign?.productTitle}{" "}
                          </p>
                          <p className="sec_text_md_reg">
                            Win {item?.campaign?.title}
                          </p>
                          <p className="font-bold text-[20px] font-sora text-primary-red mt-1 lg:mb-4 sm:mb-1">
                            AED {item?.price}
                          </p>
                          {/* <p className="">
                            You Will Get{" "}
                            <span className="text-success">
                              {exchangeProductWithTickets === true
                                ? item?.campaign?.ticketQty
                                : item?.campaign?.ticketQtyGen}{" "}
                              Tickets
                            </span>
                          </p> */}
                        </div>
                      </div>
                      {/* COUNT */}
                      <div className="flex lg:gap-2 sm:gap-2 justify-center items-center ">
                        <button
                          type=""
                          className="btn_gray_update bg-info  "
                          onClick={() =>
                            item.qty <= 1
                              ? handleCartCount(item)
                              : handleCart({ productData: item, qty: -1 })
                          }
                        >
                          <p className="text-black">-</p>
                        </button>
                        <button type="" className="btn_gray_update bg-neutral">
                          <p className="text-black">{item?.qty}</p>
                        </button>
                        <button
                          type=""
                          className="btn_gray_update bg-info"
                          onClick={() =>
                            handleCart({ productData: item, qty: 1 })
                          }
                        >
                          <p className="text-black">+</p>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              // <p className="prim_text_lg text-center">This cart is empty!</p>
              <div className="min-h-[183px] p-6 flex flex-col justify-center items-center">
                <p className="prim_text_lg_reg mb-3">Cart is empty!</p>
                <button
                  onClick={() => router.push("/")}
                  className="btn_primary w-full max-w-[280px]"
                >
                  Start Shopping
                </button>
              </div>
            )}
            {/* EXCHANGE WITH WXTRA PRODUCT */}
            {cart?.cartItems && cart?.cartItems?.length > 0 && (
              <div className="flex justify-start items-center gap-2 mt-8">
                <input
                  id="exeProductWithTkt"
                  type="checkbox"
                  checked={exchangeProductWithTickets}
                  // value={exchangeProductWithTickets}
                  onClick={() =>
                    setExchangeProductWithTickets(!exchangeProductWithTickets)
                  }
                  className="checkbox checkbox-success"
                />
                <label
                  htmlFor="exeProductWithTkt"
                  className="prim_text_lg primary_text_color cursor-pointer select-none "
                >
                  Exchange your product with a Ticket
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="lg:max-w-[391px] lg:w-4/12 sm:w-full mx-auto">
          {/*TOTAL  */}
          <div className="bg_sec rounded-xl shadow-lg">
            <div className="flex justify-between items-center p-6 border-b border-b-neutral">
              <div className="">
                <p className="prim_text_2xl font-bold  ">Total</p>
                <p className="sec_text_md ">Including VAT</p>
              </div>
              <p className="text-primary-red text-[32px] font-bold">
                AED {totalPrice <= 0 ? 0 : totalPrice + vat}
              </p>
            </div>

            <div className="p-6 ">
              <p className="mb-2 flex justify-between items-center sec_text_md_reg">
                <span>Sub Total</span>
                <span>+ AED {productTotal}</span>
              </p>
              {exchangeProductWithTickets === true ? (
                ""
              ) : (
                <p className="mb-2  flex justify-between items-center sec_text_md_reg">
                  <span>Delivery Charge</span>
                  <span>+ AED 35</span>
                </p>
              )}
              <p className="mb-2  flex justify-between items-center sec_text_md_reg">
                <span>VAT</span>
                <span>+ AED {vat}</span>
              </p>
              <p className="mb-2  flex justify-between items-center sec_text_md_reg">
                <span>Wallet Balance</span>
                <span>- AED {}</span>
              </p>
            </div>
            <div></div>
          </div>

          {/* ADDRESS */}

          {exchangeProductWithTickets === false ? (
            <div className="bg_sec rounded-xl shadow-lg mt-6 p-6">
              <p className="prim_text_2xl font-bold mb-4">Address</p>

              <input
                type="text"
                placeholder="Apartment"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className={cardInputCss}
              />

              <div className="flex lg:flex-row sm:flex-col gap-2">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={cardInputCss}
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className={cardInputCss}
                />
              </div>

              <textarea
                className={addressInputCss}
                // className="textarea textarea-bordered"
                placeholder="Detailed Address"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              ></textarea>
            </div>
          ) : (
            ""
          )}

          <div className="bg_sec rounded-xl shadow-lg mt-6 p-6">
            <p className="prim_text_2xl font-bold mb-4">Saved Cards</p>
            {methods?.map((card) => (
              <button
                key={card.id}
                className={
                  "mt-4 border-0 normal-case btn flex justify-center items-center bg-[#1a1a1a] w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
                }
                onClick={() => setPaymentMethod(card.id)}
              >
                <span className="flex gap-2 items-center">
                  {paymentMethod === card.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        fill="#fff"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <div className="w-6 h-6"></div>
                  )}
                  <p className="secondary_text_color">
                    **** **** **** {card?.card?.last4}
                  </p>

                  {/* {isProcessing ? "Processing ... " : "Pay now"} */}
                </span>
              </button>
            ))}
            <button
              className={
                "mt-4 border-0 normal-case btn flex justify-center items-center bg-[#1a1a1a] w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
              }
              onClick={() => setPaymentMethod("NewCard")}
            >
              <div className="flex gap-2 items-center">
                {paymentMethod === "NewCard" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      fill="#fff"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <div className="w-6 h-6"></div>
                )}
                <p className="secondary_text_color">
                  {" "}
                  Continue With A New Card
                </p>
                {/* {isProcessing ? "Processing ... " : "Pay now"} */}
              </div>
            </button>
          </div>
          {/* PLACE ORDER BTN */}
          <button
            type=""
            className={
              "mt-4 border-0 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
            }
            disabled={
              cart?.cartItems?.length > 0 && paymentMethod !== null
                ? false
                : true
            }
            onClick={() => handlePaymentMethod(paymentMethod)}
          >
            <span
              id="button-text"
              className={
                cart?.cartItems?.length > 0 && paymentMethod !== null
                  ? "secondary_text_color"
                  : "hidden"
              }
            >
              Place Order
              {/* {isProcessing ? "Processing ... " : "Pay now"} */}
            </span>
          </button>

          {/* <div className="border-t mt-6 bg-white p-6 rounded-xl"> */}
          {/* {stripePromise && clientSecret && (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret: clientSecret }}
              >
                <CheckOutForm exchage={exchangeProductWithTickets} />
              </Elements>
            )} */}
          {/* <PayPalScriptProvider
              options={{
                clientId:
                  "AcPVGkuznKPH6ieoGq4iOLnLnq1IXGDs04c6ePFlKsACcipfTZLcb1lmanOhE8YRw8wYeVYOjTaYoQLV",
              }}
            >
              <PayPalButtons
                forceReRender={[totalPrice]}
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
              />
            </PayPalScriptProvider> */}
          {/* </div> */}
          {/* <div>
            <button
              onClick={() => handleOrder(cart.cartItems)}
              type=""
              className="mt-4 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
            >
              Place Order
            </button>
          </div> */}
        </div>
      </div>

      <ReactModal
        isOpen={show}
        style={customStyles}
        onRequestClose={() => setShow(false)}
      >
        <StripeGateway
          totalPrice={totalPrice}
          exchangeProductWithTickets={exchangeProductWithTickets}
          address={`${apartment}, ${detailAddress}, ${city} ${zipCode}`}
        />
      </ReactModal>
    </div>
  );
};

export default withAuth(CartPage);
