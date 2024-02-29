"use client";
import { addToCart, getCampaign } from "@app/redux/actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { shareSvg } from "../../public/assets/Icons";
import ProductsDetails from "@components/Depricited/ProductsDetails";
import { useRouter } from "next/navigation";

const products = [
  // Product 3
  {
    title: "Product 3",
    productTitle: "Latest Salwar Suit Design",
    validity: 7,
    img: {
      prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
      product: "https://i.ibb.co/7jfQBnw/designer-patiala-salwar-suit.jpg",
    },
    ticketQty: 200,
    price: 2499,
    stockQty: 100,
    orderCount: 25,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Published",
    displayStatus: "Explore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
  // Product 4
  {
    title: "Product 4",
    productTitle: "Faux Georgette Festival Patiala Salwar Suit",
    validity: 30,
    img: {
      prize:
        "https://i.ibb.co/TqcpYxf/faux-georgette-festival-patiala-salwar-suit-230548-1000x1375-1.jpg",
      product: "https://i.ibb.co/NFmj956/Latest-Salwar-Suit-Design.jpg",
    },
    ticketQty: 150,
    price: 3499,
    stockQty: 75,
    orderCount: 35,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Drafted",
    displayStatus: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
  // Product 20
  {
    title: "Product 20",
    productTitle: "Digital Printed Art Silk Punjabi Suit",
    validity: 30,
    img: {
      prize: "https://i.ibb.co/b385PCL/154542.jpg",
      product:
        "https://i.ibb.co/r3J9BQn/digital-printed-art-silk-punjabi-suit-in-multicolor-v1-kpv1092.webp",
    },
    ticketQty: 100,
    price: 2999,
    stockQty: 50,
    orderCount: 10,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Published",
    displayStatus: "Upcoming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
  // Product 6
  {
    title: "Product 6",
    productTitle: "Koskii Mustard Printed Georgette Designer Salwar Suit",
    validity: 35,
    img: {
      prize: "https://i.ibb.co/NKxHhYC/3308-1200x1200.webp",
      product:
        " https://i.ibb.co/f4c3mWn/koskii-mustard-printed-georgette-designer-salwar-suit-ssrm0030074-mustard-20-large.webp",
    },
    ticketQty: 50,
    price: 1999,
    stockQty: 20,
    orderCount: 20,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Expired",
    displayStatus: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
  // Product 7
  {
    title: "Product 7",
    productTitle: "Latest Salwar Suit Design",
    validity: 7,
    img: {
      prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
      product: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
    },
    ticketQty: 200,
    price: 2499,
    stockQty: 100,
    orderCount: 25,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Published",
    displayStatus: "Explore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
  // Product 8
  {
    title: "Product 8",
    productTitle: "Faux Georgette Festival Patiala Salwar Suit",
    validity: 30,
    img: {
      prize: "https://i.ibb.co/4dzrdhc/8b82579e521eda3dbbe2cd5521362bc4.jpg",
      product:
        "https://i.ibb.co/TqcpYxf/faux-georgette-festival-patiala-salwar-suit-230548-1000x1375-1.jpg",
    },
    ticketQty: 150,
    price: 2499,
    stockQty: 100,
    orderCount: 25,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Published",
    displayStatus: "Explore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
  // Product 9
  {
    title: "Product 9",
    productTitle: "Salwar Suit French Blue",
    validity: 30,
    img: {
      prize:
        "https://i.ibb.co/99kpYSf/salwar-suit-french-blue-salwar-suit-silk-saree-online-32477002793153.jpg",
      product:
        "https://i.ibb.co/99kpYSf/salwar-suit-french-blue-salwar-suit-silk-saree-online-32477002793153.jpg",
    },
    ticketQty: 100,
    price: 2999,
    stockQty: 50,
    orderCount: 10,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Published",
    displayStatus: "Upcoming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },

  {
    title: "Product 21",
    productTitle: "Digital Printed Crepe Punjabi Suit",
    validity: 35,
    img: {
      prize:
        "https://i.ibb.co/3R2jwS3/digital-printed-crepe-punjabi-suit-in-dark-beige-v1-kpv1102.webp",
      product:
        "https://i.ibb.co/3R2jwS3/digital-printed-crepe-punjabi-suit-in-dark-beige-v1-kpv1102.webp",
    },
    ticketQty: 50,
    price: 1999,
    stockQty: 20,
    orderCount: 20,
    winner: {
      ticketNumber: null,
      userName: null,
    },
    drawDate: null,
    status: "Expired",
    displayStatus: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketQtyGen: 1,
  },
];
const carousolData = [
  {
    id: "slide1",
    img: "https://i.ibb.co/bFS35cf/ibiza-palak-catalog-in-wholesale-rate-3-2021-07-26-13-14-17.jpg",
    next_id: "slide2",
    previous_id: "slide8",
  },
  {
    id: "slide2",
    img: "https://i.ibb.co/sHyd7D4/478091-viona-adaa-wholesale-salwar-kameez-suit-catalog-1.jpg",
    next_id: "slide3",
    previous_id: "slide1",
  },
  {
    id: "slide3",
    img: "https://i.ibb.co/t8nXb7k/hurr-by-amirah-7-500x500.webp",
    next_id: "slide4",
    previous_id: "slide2",
  },
  {
    id: "slide4",
    img: "https://i.ibb.co/6ZbDqsw/teal-green-brasso-500x500.webp",
    next_id: "slide5",
    previous_id: "slide3",
  },
  {
    id: "slide5",
    img: "https://i.ibb.co/t8j6yxp/cotton-salwar-kameez.jpg",
    next_id: "slide6",
    previous_id: "slide4",
  },
  {
    id: "slide6",
    img: "https://i.ibb.co/Sf4Jbd9/exclusive-readymade-salwar-kameez-500x500.webp",
    next_id: "slide7",
    previous_id: "slide5",
  },
  {
    id: "slide7",
    img: "https://i.ibb.co/Gnm6GLM/Salwar-Kameez.jpg",
    next_id: "slide8",
    previous_id: "slide6",
  },
  {
    id: "slide8",
    img: "https://i.ibb.co/4ZRrtZ7/istockphoto-691374228-612x612.jpg",
    next_id: "slide1",
    previous_id: "slide7",
  },
];
const ProductHome = () => {
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

  useEffect(() => {
    dispatch(getCampaign());
  }, []);

  const router = useRouter();

  return (
    <div className=" lg:py-0 md:py-0 w-full  ">
      <section className="max-w-[1300px] mx-auto mb-8">
        <div className="carousel w-full max-w-[1300px] max-h-[720px] mx-auto">
          {carousolData?.map((x, index) => {
            return (
              <>
                <div
                  id={x?.id}
                  className="carousel-item relative w-full rounded-2xl"
                >
                  <img src={x?.img} className="w-full  rounded-2xl my-10" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={"#" + x?.previous_id} className="btn btn-circle">
                      ❮
                    </a>
                    <a href={"#" + x?.next_id} className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto mt-6">
        <p className="text-[24px] font-sora font-semibold primary_text_color mb-6 text-center">
          Explore our Products
        </p>
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
                        backgroundColor: "rgba(0,0,0,0.8)",
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
                        <button
                          onClick={() => {
                            setPriceDetails(item);
                            setShow(true);
                          }}
                          type=""
                          className="lg:text-[10px] sm:text-[10px] bg-[#202020] px-4 lg:py-2 sm:py-2 rounded-[14px] text-[16px] font-semibold primary_text_color "
                        >
                          Prize Details
                        </button>
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

            <div className="mx-auto max-w-[200px] w-full mt-8">
              <button
                onClick={() => router.push("/product")}
                type=""
                className="w-full py-3 bg-primary mx-auto primary_text_color rounded-lg"
              >
                See More
              </button>
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
};

export default ProductHome;
