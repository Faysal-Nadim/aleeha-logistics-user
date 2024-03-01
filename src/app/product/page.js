"use client";

// export const metadata = {
//   title: "AleehaLogistics | Products",
//   description: "AleehaLogistics prize campaign win",
// };
import { addToCart } from "@app/redux/actions";
import Image from "next/image";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { shareSvg } from "../../../public/assets/Icons";
import ProductsDetails from "@components/Depricited/ProductsDetails";
import Link from "next/link";

const products = [
  {
    img: {
      prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
      product: "https://i.ibb.co/7jfQBnw/designer-patiala-salwar-suit.jpg",
    },
    winner: {
      ticketNumber: null,
      userName: null,
    },
    offer: {
      validity: 0,
      percentage: 0,
      minAmount: 0,
    },
    _id: "64c1551d88f9f11b32a526e2",
    title: "Product 3",
    productTitle: "Latest Salwar Suit Design",
    validity: 7,
    ticketQty: 200,
    price: 30,
    stockQty: 100,
    orderCount: 0,
    drawDate: "Sun Jul 30 2023",
    status: "Drafted",
    displayStatus: [],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
    createdAt: "2023-07-26T17:17:17.200Z",
    updatedAt: "2023-07-26T17:17:17.200Z",
    __v: 0,
  },
  {
    img: {
      prize:
        "https://i.ibb.co/TqcpYxf/faux-georgette-festival-patiala-salwar-suit-230548-1000x1375-1.jpg",
      product: "https://i.ibb.co/NFmj956/Latest-Salwar-Suit-Design.jpg",
    },
    winner: {
      ticketNumber: null,
      userName: null,
    },
    offer: {
      validity: 0,
      percentage: 0,
      minAmount: 0,
    },
    _id: "64c1554288f9f11b32a526e4",
    title: "Product 4",
    productTitle: "Latest Salwar Suit Design",
    validity: 7,
    ticketQty: 200,
    price: 35,
    stockQty: 100,
    orderCount: 0,
    drawDate: "Sun Jul 30 2023",
    status: "Drafted",
    displayStatus: [],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
    createdAt: "2023-07-26T17:17:54.940Z",
    updatedAt: "2023-07-26T17:17:54.940Z",
    __v: 0,
  },
  {
    img: {
      prize: "https://i.ibb.co/b385PCL/154542.jpg",
      product:
        "https://i.ibb.co/r3J9BQn/digital-printed-art-silk-punjabi-suit-in-multicolor-v1-kpv1092.webp",
    },
    winner: {
      ticketNumber: null,
      userName: null,
    },
    offer: {
      validity: 0,
      percentage: 0,
      minAmount: 0,
    },
    _id: "64c1556488f9f11b32a526e6",
    title: "Product 4",
    productTitle: "Latest Salwar Suit Design",
    validity: 7,
    ticketQty: 200,
    price: 50,
    stockQty: 100,
    orderCount: 0,
    drawDate: "Sun Jul 30 2023",
    status: "Drafted",
    displayStatus: [],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
    createdAt: "2023-07-26T17:18:28.119Z",
    updatedAt: "2023-07-26T17:18:28.119Z",
    __v: 0,
  },
  {
    img: {
      prize: "https://i.ibb.co/b385PCL/154542.jpg",
      product:
        "https://i.ibb.co/r3J9BQn/digital-printed-art-silk-punjabi-suit-in-multicolor-v1-kpv1092.webp",
    },
    winner: {
      ticketNumber: null,
      userName: null,
    },
    offer: {
      validity: 0,
      percentage: 0,
      minAmount: 0,
    },
    _id: "64c1556f88f9f11b32a526e8",
    title: "Product 4",
    productTitle: "Latest Salwar Suit Design",
    validity: 7,
    ticketQty: 200,
    price: 100,
    stockQty: 100,
    orderCount: 0,
    drawDate: "Sun Jul 30 2023",
    status: "Drafted",
    displayStatus: [],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
    createdAt: "2023-07-26T17:18:39.396Z",
    updatedAt: "2023-07-26T17:18:39.396Z",
    __v: 0,
  },
];
// const products = [
//   {
//     title: "Product 1",
//     productTitle: "Digital Printed Art Silk Punjabi Suit",
//     validity: 30,
//     img: {
//       prize:
//         "https://i.ibb.co/r3J9BQn/digital-printed-art-silk-punjabi-suit-in-multicolor-v1-kpv1092.webp",
//       product: "https://i.ibb.co/b385PCL/154542.jpg",
//     },
//     ticketQty: 100,
//     price: 2999,
//     stockQty: 50,
//     orderCount: 10,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: "Hero",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 2
//   {
//     title: "Product 2",
//     productTitle: "Koskii Mustard Printed Georgette Designer Salwar Suit",
//     validity: 35,
//     img: {
//       prize:
//         "https://i.ibb.co/f4c3mWn/koskii-mustard-printed-georgette-designer-salwar-suit-ssrm0030074-mustard-20-large.webp",
//       product: "https://i.ibb.co/NKxHhYC/3308-1200x1200.webp",
//     },
//     ticketQty: 50,
//     price: 1999,
//     stockQty: 20,
//     orderCount: 20,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Selling Fast",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 3
//   {
//     title: "Product 3",
//     productTitle: "Latest Salwar Suit Design",
//     validity: 7,
//     img: {
//       prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
//       product: "https://i.ibb.co/7jfQBnw/designer-patiala-salwar-suit.jpg",
//     },
//     ticketQty: 200,
//     price: 2499,
//     stockQty: 100,
//     orderCount: 25,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Explore",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 4
//   {
//     title: "Product 4",
//     productTitle: "Faux Georgette Festival Patiala Salwar Suit",
//     validity: 30,
//     img: {
//       prize:
//         "https://i.ibb.co/TqcpYxf/faux-georgette-festival-patiala-salwar-suit-230548-1000x1375-1.jpg",
//       product: "https://i.ibb.co/NFmj956/Latest-Salwar-Suit-Design.jpg",
//     },
//     ticketQty: 150,
//     price: 3499,
//     stockQty: 75,
//     orderCount: 35,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 20
//   {
//     title: "Product 20",
//     productTitle: "Digital Printed Art Silk Punjabi Suit",
//     validity: 30,
//     img: {
//       prize: "https://i.ibb.co/b385PCL/154542.jpg",
//       product:
//         "https://i.ibb.co/r3J9BQn/digital-printed-art-silk-punjabi-suit-in-multicolor-v1-kpv1092.webp",
//     },
//     ticketQty: 100,
//     price: 2999,
//     stockQty: 50,
//     orderCount: 10,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Upcoming",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 6
//   {
//     title: "Product 6",
//     productTitle: "Koskii Mustard Printed Georgette Designer Salwar Suit",
//     validity: 35,
//     img: {
//       prize: "https://i.ibb.co/NKxHhYC/3308-1200x1200.webp",
//       product:
//         " https://i.ibb.co/f4c3mWn/koskii-mustard-printed-georgette-designer-salwar-suit-ssrm0030074-mustard-20-large.webp",
//     },
//     ticketQty: 50,
//     price: 1999,
//     stockQty: 20,
//     orderCount: 20,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Expired",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 7
//   {
//     title: "Product 7",
//     productTitle: "Latest Salwar Suit Design",
//     validity: 7,
//     img: {
//       prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
//       product: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
//     },
//     ticketQty: 200,
//     price: 2499,
//     stockQty: 100,
//     orderCount: 25,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Explore",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 8
//   {
//     title: "Product 8",
//     productTitle: "Faux Georgette Festival Patiala Salwar Suit",
//     validity: 30,
//     img: {
//       prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
//       product:
//         "https://i.ibb.co/TqcpYxf/faux-georgette-festival-patiala-salwar-suit-230548-1000x1375-1.jpg",
//     },
//     ticketQty: 150,
//     price: 2499,
//     stockQty: 100,
//     orderCount: 25,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Explore",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 9
//   {
//     title: "Product 9",
//     productTitle: "Salwar Suit French Blue",
//     validity: 30,
//     img: {
//       prize:
//         "https://i.ibb.co/99kpYSf/salwar-suit-french-blue-salwar-suit-silk-saree-online-32477002793153.jpg",
//       product:
//         "https://i.ibb.co/99kpYSf/salwar-suit-french-blue-salwar-suit-silk-saree-online-32477002793153.jpg",
//     },
//     ticketQty: 100,
//     price: 2999,
//     stockQty: 50,
//     orderCount: 10,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Upcoming",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 10
//   {
//     title: "Product 10",
//     productTitle: "Salwar Suit Dark Green",
//     validity: 35,
//     img: {
//       prize:
//         "https://i.ibb.co/Z6Mz8Mj/salwar-suit-dark-green-salwar-suit-silk-saree-online-32477077078209.jpg",
//       product:
//         "https://i.ibb.co/Z6Mz8Mj/salwar-suit-dark-green-salwar-suit-silk-saree-online-32477077078209.jpg",
//     },
//     ticketQty: 50,
//     price: 1999,
//     stockQty: 20,
//     orderCount: 20,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 11
//   {
//     title: "Product 11",
//     productTitle: "Digital Printed Muslin Cotton Pakistani Suit",
//     validity: 7,
//     img: {
//       prize:
//         "https://i.ibb.co/JFH27Mn/digital-printed-muslin-cotton-pakistani-suit-in-light-green-v1-kch6747.webp",
//       product:
//         "https://i.ibb.co/JFH27Mn/digital-printed-muslin-cotton-pakistani-suit-in-light-green-v1-kch6747.webp",
//     },
//     ticketQty: 200,
//     price: 2499,
//     stockQty: 100,
//     orderCount: 25,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Explore",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 12
//   {
//     title: "Product 12",
//     productTitle: "Cotton Salwar Kameez",
//     validity: 30,
//     img: {
//       prize:
//         "https://i.ibb.co/G2KV9Qs/cotton-salwar-kameez-226105-1000x1375.webp",
//       product:
//         "https://i.ibb.co/G2KV9Qs/cotton-salwar-kameez-226105-1000x1375.webp",
//     },
//     ticketQty: 150,
//     price: 3499,
//     stockQty: 75,
//     orderCount: 35,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 13
//   {
//     title: "Product 13",
//     productTitle: "Fancy Salwar Kameez",
//     validity: 30,
//     img: {
//       prize: "https://i.ibb.co/VYjN717/il-fullxfull-4687850593-fg8t.jpg",
//       product: "https://i.ibb.co/VYjN717/il-fullxfull-4687850593-fg8t.jpg",
//     },
//     ticketQty: 100,
//     price: 2999,
//     stockQty: 50,
//     orderCount: 10,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Upcoming",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 14
//   {
//     title: "Product 14",
//     productTitle: "Salwar Suit",
//     validity: 35,
//     img: {
//       prize: "https://i.ibb.co/jrt8ZrZ/images.jpg",
//       product: "https://i.ibb.co/jrt8ZrZ/images.jpg",
//     },
//     ticketQty: 50,
//     price: 1999,
//     stockQty: 20,
//     orderCount: 20,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 35
//   {
//     title: "Product 35",
//     productTitle: "Vaani Vol 23 Net Salwar Suit",
//     validity: 7,
//     img: {
//       prize:
//         "https://i.ibb.co/dthbsd4/vaani-vol-23-net-salwar-suit-500x500.webp",
//       product:
//         "https://i.ibb.co/dthbsd4/vaani-vol-23-net-salwar-suit-500x500.webp",
//     },
//     ticketQty: 200,
//     price: 2499,
//     stockQty: 100,
//     orderCount: 25,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Explore",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },

//   // Product 16
//   {
//     title: "Product 16",
//     productTitle: "Dusty Rose Rayon Thread and Sequence Work Salwar Suit",
//     validity: 30,
//     img: {
//       prize:
//         "https://i.ibb.co/3MmfZfF/dusty-rose-rayon-thread-and-sequence-work-salwar-suit-8353-600x800h.jpg",
//       product:
//         "https://i.ibb.co/3MmfZfF/dusty-rose-rayon-thread-and-sequence-work-salwar-suit-8353-600x800h.jpg",
//     },
//     ticketQty: 100,
//     price: 2999,
//     stockQty: 50,
//     orderCount: 10,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 17
//   {
//     title: "Product 17",
//     productTitle: "Salwar Suit",
//     validity: 35,
//     img: {
//       prize: "https://i.ibb.co/zrGsv9w/fc11c223a5884b18d07b4c42f1bb11b6.png",
//       product: "https://i.ibb.co/zrGsv9w/fc11c223a5884b18d07b4c42f1bb11b6.png",
//     },
//     ticketQty: 50,
//     price: 1999,
//     stockQty: 20,
//     orderCount: 20,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 18
//   {
//     title: "Product 18",
//     productTitle: "Party Wear Black Net Salwar Suit",
//     validity: 7,
//     img: {
//       prize:
//         "https://i.ibb.co/42K3g3V/party-wear-black-net-salwar-suit-design-images.jpg",
//       product:
//         "https://i.ibb.co/42K3g3V/party-wear-black-net-salwar-suit-design-images.jpg",
//     },
//     ticketQty: 200,
//     price: 2499,
//     stockQty: 100,
//     orderCount: 25,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Explore",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 19
//   {
//     title: "Product 19",
//     productTitle: "Churidar Salwar Suit",
//     validity: 30,
//     img: {
//       prize: "https://i.ibb.co/gv9T0nj/Churidar-Salwar-Suit1.jpg",
//       product: "https://i.ibb.co/gv9T0nj/Churidar-Salwar-Suit1.jpg",
//     },
//     ticketQty: 150,
//     price: 3499,
//     stockQty: 75,
//     orderCount: 35,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Drafted",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 20
//   {
//     title: "Product 20",
//     productTitle: "Salwar Suit",
//     validity: 30,
//     img: {
//       prize: "https://i.ibb.co/SKpQx6D/c6ddec6006ed0c37f53aaafc34d6553c.jpg",
//       product: "https://i.ibb.co/SKpQx6D/c6ddec6006ed0c37f53aaafc34d6553c.jpg",
//     },
//     ticketQty: 100,
//     price: 2999,
//     stockQty: 50,
//     orderCount: 10,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Published",
//     displayStatus: "Upcoming",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
//   // Product 21
//   {
//     title: "Product 21",
//     productTitle: "Digital Printed Crepe Punjabi Suit",
//     validity: 35,
//     img: {
//       prize:
//         "https://i.ibb.co/3R2jwS3/digital-printed-crepe-punjabi-suit-in-dark-beige-v1-kpv1102.webp",
//       product:
//         "https://i.ibb.co/3R2jwS3/digital-printed-crepe-punjabi-suit-in-dark-beige-v1-kpv1102.webp",
//     },
//     ticketQty: 50,
//     price: 1999,
//     stockQty: 20,
//     orderCount: 20,
//     winner: {
//       ticketNumber: null,
//       userName: null,
//     },
//     drawDate: null,
//     status: "Expired",
//     displayStatus: null,
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     ticketQtyGen: 1,
//   },
// ];

export default function page() {
  const [show, setShow] = useState(false);
  const [priceDetails, setPriceDetails] = useState(null);
  const [isPDSeleceted, setIsPDSeleceted] = useState(true);

  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);

  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  const handleLinkCopied = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Campaign link copied",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#000",
    });
  };

  return (
    <div className=" lg:py-0 md:py-0 w-full  ">
      <div>
        <div className="">
          {/* PRODUCTS */}
          <div className=" ">
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3">
              {products?.map((item, index) => {
                return (
                  <div key={index} className="relative w-[300px] ">
                    <Image
                      src={item?.img?.product}
                      height={420}
                      width={300}
                      alt={item?.title}
                      className="rounded-[14px] relative h-[420px] w-[300px] opacity-0 transition-opacity duration-1000"
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                    />

                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                      }}
                      className="bg_prim absolute bottom-0 rounded-bl-[12px] rounded-br-[12px] w-full min-h-[140px] p-6"
                    >
                      <p className="md:text-[14px] sm:text-[10px]   font-sora">
                        {item?.productTitle?.slice(0, 30)}
                      </p>
                      <p className="md:text-[12px] sm:text-[10px]  font-sora">
                        {"Price: AED "} {item?.price}
                      </p>

                      <div className="flex lg:my-0 sm:my-auto gap-2 absolute bottom-6">
                        <Link
                          href={`/product/${item?._id}`}
                          className="lg:text-[10px] sm:text-[10px] bg-[#202020] px-4 lg:py-2 sm:py-2 rounded-[14px] text-[16px] font-semibold primary_text_color "
                        >
                          Prize Details
                        </Link>
                        {/* <button
                          onClick={() => {
                            setPriceDetails(item);
                            setShow(true);
                          }}
                          type=""
                          className="lg:text-[10px] sm:text-[10px] bg-[#202020] px-4 lg:py-2 sm:py-2 rounded-[14px] text-[16px] font-semibold primary_text_color "
                        >
                          Prize Details
                        </button> */}
                        <button
                          type=""
                          className="lg:text-[10px] sm:text-[10px] bg-primary px-4 lg:py-2 sm:py-2 rounded-[14px] font-semibold primary_text_color"
                          onClick={() => handleCart(item)}
                        >
                          Add to Cart
                        </button>

                        <CopyToClipboard text="AleehaLogistics.net/products">
                          <button
                            onClick={handleLinkCopied}
                            className="bg-[#202020] px-4 py-2 rounded-[14px] text-[10px] font-semibold primary_text_color "
                          >
                            {shareSvg}{" "}
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ProductsDetails
        show={show}
        setShow={setShow}
        priceDetails={priceDetails}
        handleCart={handleCart}
      />
    </div>
  );
}
