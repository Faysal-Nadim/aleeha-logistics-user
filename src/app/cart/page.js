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
import Swal from "sweetalert2";
import axiosInstance from "@app/redux/helpers/axios";
import ReactModal from "react-modal";
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

  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  const handleCart = ({ productData, qty }) => {
    const item = {
      _id: productData.campaign._id,
      price: productData.price,
    };
    dispatch(updateCart(item, qty));
  };

  function calculateTotal(cart) {
    let totalQty = 0;
    let totalPrice = 0;

    // Iterate through each item in the cart
    cart?.length > 0 &&
      cart?.forEach((item) => {
        // Iterate through each variation of the item
        item.variations.forEach((variation) => {
          // Add the quantity of this variation to the total quantity
          totalQty += variation.qty;
          // Add the total price of this variation to the total price
          totalPrice += variation.payable * variation.qty;
        });
      });

    // Return an object containing the total quantity and total price
    return {
      totalQty: totalQty,
      totalPrice: totalPrice.toFixed(2),
    };
  }

  useEffect(() => {
    const total = calculateTotal(cart);
    setTotalQty(total.totalQty);
    setTotalPrice(total.totalPrice);
  }, [cart]);

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

  const handleCartCount = (item) => {
    const data = {
      _id: item._id,
    };
    dispatch(removeCart(data));
  };

  const router = useRouter();

  return (
    <div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-start gap-4">
        <div className="lg:w-12/12 sm:w-full mx-auto">
          <p className="prim_text_2xl mb-8">Cart</p>

          {/* PRODUCT */}
          <div className="lg:p-5 sm:p-3 shadow-lg rounded-[24px] grid grid-cols-1 gap-8 bg_sec">
            <div className="lg:flex sm:hidden lg:flex-row md:flex-row sm:flex-col justify-between items-start gap-8 font-bold ">
              <p>Product Details</p>
              <div className="flex gap-8">
                <p className="lg:min-w-[210px] md:min-w-[130px] sm:min-w-[80px]">
                  Meta
                </p>
                <p className="lg:min-w-[150px] md:min-w-[120px] sm:min-w-[80px]">
                  Quantity
                </p>
                <p className="lg:min-w-[100px] md:min-w-[80px] sm:min-w-[50px]">
                  Unit Price
                </p>
                <p className="lg:min-w-[100px] md:min-w-[80px] sm:min-w-[50px]">
                  Total Price
                </p>
              </div>
            </div>
            {cart && cart?.length > 0 ? (
              cart?.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="flex lg:flex-row md:flex-row sm:flex-col justify-between items-start gap-8"
                    >
                      {/* INFO */}
                      <div className="flex gap-4 justify-start items-center rounded-xl">
                        <Image
                          src={item?.image}
                          height={100}
                          width={100}
                          alt={item?.title}
                          className="rounded-xl"
                        />

                        <div>
                          <p className="prim_text_exlg lg:text-[16px] md:text-[14px] sm:text-[13px]  max-w-[350px]">
                            {item?.title}
                          </p>
                          <p className="sec_text_md_reg">
                            {item?.shippingCategory}, BDT {item?.shippingRate}
                            /KG
                          </p>
                          <p className="font-bold text-[12px] font-sora text-primary-red mt-1 lg:mb-4 sm:mb-1">
                            Domestic Delivery: BDT {item?.ddc}*
                          </p>
                        </div>
                      </div>
                      {/* COUNT */}
                      <div className="flex flex-col gap-8 lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        {item?.variations.map((meta, index) => (
                          <div className="flex lg:gap-8 md:gap-4 sm:gap-2 lg:items-center md:items-start sm:items-start">
                            <div className="flex flex-col gap-4 ">
                              {meta?.meta.map((m, i) => (
                                <p className="font-sora lg:w-[210px] md:w-[130px] sm:w-[80px]">
                                  <span className="font-semibold">
                                    {m?.name?.toUpperCase()}:
                                  </span>{" "}
                                  {m?.value}
                                </p>
                              ))}
                            </div>

                            <div className="lg:min-w-[150px] md:min-w-[120px] sm:min-w-[80px] max-h-[40px] flex border border-slate-300 rounded-[4px]">
                              <button className="w-3/12 p-1 border-r border-r-slate-300 text-[#F79602] font-bold text-[16px]">
                                -
                              </button>
                              <p className="w-6/12 p-1 flex justify-center items-center text-center">
                                {meta?.qty}
                              </p>
                              <button className="w-3/12 p-1  border-l border-l-slate-300 text-[#F79602] font-bold text-[16px]">
                                +
                              </button>
                            </div>

                            <div className="lg:min-w-[100px] md:min-w-[80px] sm:min-w-[50px] font-semibold">
                              <p className="lg:block md:block sm:hidden">
                                BDT {meta?.payable}
                              </p>
                              <p className="lg:hidden md:hidden sm:block">
                                {meta?.payable}
                              </p>
                            </div>
                            <div className="lg:min-w-[100px] md:min-w-[80px] sm:min-w-[50px] font-semibold">
                              <p className="lg:block md:block sm:hidden">
                                BDT {meta?.payable * meta?.qty}
                              </p>
                              <p className="lg:hidden md:hidden sm:block">
                                {meta?.payable * meta?.qty}
                              </p>
                            </div>
                          </div>
                        ))}
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
          </div>
        </div>
      </div>

      <div className="w-full mx-auto">
        {/*TOTAL  */}
        <div className="bg_sec rounded-xl shadow-lg">
          <div className="flex justify-between items-center p-6 border-b border-b-neutral">
            <div className="">
              <p className="prim_text_2xl font-bold  ">Total</p>
              <p className="sec_text_md_reg">{totalQty} Items</p>
            </div>
            <div className="flex flex-col  items-end">
              <p className="text-primary-red text-[20px] font-bold">
                BDT {totalPrice <= 0 ? 0 : totalPrice}
              </p>
              <p className="sec_text_md_reg ">
                <span className="text-primary-red text-[20px]">*</span>
                Shipping & Customs Charge Is Not Included
              </p>
            </div>
          </div>

          <div className="p-6 ">
            <p className="mb-2  flex justify-between items-center sec_text_md_reg">
              <span>VAT</span>
              <span>+ BDT 0.00</span>
            </p>
          </div>
          <div></div>
        </div>

        {/* ADDRESS */}

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
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
        </div>

        {/* PLACE ORDER BTN */}
        <button
          type=""
          className={
            "mt-4 border-0 normal-case btn flex justify-center items-center bg-primary w-full  rounded-xl text-[14px] font-semibold font-sora primary_text_color"
          }
          disabled={
            cart?.cartItems?.length > 0 && paymentMethod !== null ? false : true
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
      </div>
      <ReactModal
        isOpen={show}
        style={customStyles}
        onRequestClose={() => setShow(false)}
      >
        {/* <StripeGateway
          totalPrice={totalPrice}
          exchangeProductWithTickets={exchangeProductWithTickets}
          address={`${apartment}, ${detailAddress}, ${city} ${zipCode}`}
        /> */}
      </ReactModal>
    </div>
  );
};

export default withAuth(CartPage);
