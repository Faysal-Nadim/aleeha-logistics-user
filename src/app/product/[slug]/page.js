"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MultiSku } from "@components/product/multisku";
import { SingleSku } from "@components/product/singlesku";
import axios from "axios";
import Swal from "sweetalert2";

const page = ({ params }) => {
  const slug = params?.slug;
  const productUrl = decodeURIComponent(slug);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState();
  useEffect(() => {
    axios
      .post(
        "https://inventory.aleeha.com.bd/api/v1/product/get-product-by-url",
        {
          url: productUrl,
        }
      )
      .then((res) => {
        console.log(res.data);
        setData(res?.data);
        setDisplayImage(res?.data?.main_imgs[0]);
        setSelectedProductColor(res.data?.sku_props[0]?.values[0]);
        setLoading(false);
      });
  }, []);

  const [displayImage, setDisplayImage] = useState(data?.main_imgs[0]);
  const [detailSelected, setDetailSelected] = useState(1);
  const [selectedProductColor, setSelectedProductColor] = useState(
    (data?.sku_props &&
      data?.sku_props[0]?.values &&
      data?.sku_props[0]?.values[0]) ||
      null
  );
  const [selectedProductSKU, setSelectedProductSKU] = useState();

  // console.log(slug);
  // console.log("after decode", decodeURIComponent(slug));

  return (
    <>
      {loading ? (
        Swal.showLoading()
      ) : (
        <main>
          {Swal.close()}
          {loading === false && data?.sku_props?.length > 1 ? (
            <MultiSku
              displayImage={displayImage}
              setDisplayImage={setDisplayImage}
              selectedProductColor={selectedProductColor}
              setSelectedProductColor={setSelectedProductColor}
              selectedProductSKU={selectedProductSKU}
              setSelectedProductSKU={setSelectedProductSKU}
              data={data}
            />
          ) : (
            loading === false && (
              <SingleSku
                displayImage={displayImage}
                setDisplayImage={setDisplayImage}
                selectedProductColor={selectedProductColor}
                setSelectedProductColor={setSelectedProductColor}
                selectedProductSKU={selectedProductSKU}
                setSelectedProductSKU={setSelectedProductSKU}
                data={data}
              />
            )
          )}

          {/* PRODUCT DESCRIPTION */}
          <div className="max-w-[1080px] mx-auto">
            <div className="flex gap-4 border-b border-b-[#ECECEC] mb-4">
              <button
                onClick={() => setDetailSelected(1)}
                className={
                  detailSelected === 1
                    ? "border-b-4 border-b-[#F79602] p-2.5 w-[140px]"
                    : " w-[140px]"
                }
              >
                Specification
              </button>
              <button
                onClick={() => setDetailSelected(2)}
                className={
                  detailSelected === 2
                    ? "border-b-4 border-b-[#F79602] p-2.5 w-[160px]"
                    : " w-[160px]"
                }
              >
                Product Details
              </button>
              <button
                onClick={() => setDetailSelected(3)}
                className={
                  detailSelected === 3
                    ? "border-b-4 border-b-[#F79602] p-2.5 w-[140px]"
                    : " w-[140px]"
                }
              >
                Review
              </button>
            </div>

            {detailSelected === 1 && (
              <div>
                {loading === false &&
                  data?.product_props?.map((val, ind) => {
                    return (
                      <div className="flex border border-[#ECECEC]" key={ind}>
                        <p className="w-4/12 p-2 border-r border-r-[#ECECEC] ">
                          {Object.keys(val)}
                        </p>
                        <p className="w-8/12 p-2">{val[Object.keys(val)]}</p>
                      </div>
                    );
                  })}
              </div>
            )}

            {detailSelected === 2 && (
              <div className=" text-[#5D6154] ">
                <p className="mb-4">Product Name: {data?.title}</p>
                <p className="mb-4">Offer Unit: {data?.offer_unit}</p>
                {loading === false && data?.video_url && (
                  <div className="mb-4">
                    <p> Product Video: </p>
                    <iframe
                      src={data?.video_url}
                      width={720}
                      height={480}
                      frameborder="0"
                      allowfullscreen
                      className="mb-4"
                    />
                  </div>
                )}
                {data?.main_imgs && (
                  <div className="mb-4">
                    <p> Product Details: </p>
                    {data?.main_imgs?.map((img, ind) => {
                      return (
                        <Image
                          key={ind}
                          src={img}
                          height={480}
                          width={720}
                          alt=""
                          className="mb-4"
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {detailSelected === 3 && <div></div>}
          </div>
        </main>
      )}
    </>
  );
};

export default page;
