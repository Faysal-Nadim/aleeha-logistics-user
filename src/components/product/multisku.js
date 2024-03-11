import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * @author
 * @function MultiSku
 **/

export const MultiSku = ({
  selectedProductColor,
  setSelectedProductColor,
  displayImage,
  setDisplayImage,
  data,
  selectedProductSKU,
  setSelectedProductSKU,
}) => {
  let variations = [];

  const [shippingCategory, setShippingCategory] = useState(null);
  const [shippingRate, setShippingRate] = useState(0);
  const [productTotal, setProductTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  const handleProductVariation = (skudata) => {
    window.localStorage.setItem("product", JSON.stringify(variations));
    if (skudata.qty > 0) {
      const vdata = JSON.parse(window.localStorage.getItem("product"));
      vdata.push({
        qty: skudata.qty,
        price: skudata.skuProduct.sale_price,
        payable: skudata.skuProduct.sale_price * 21,
        metaKey: skudata.skuProduct.props_names,
        meta: [
          {
            name: data?.sku_props[0]?.prop_name,
            value: selectedProductColor.name,
            img: selectedProductColor.imageUrl,
          },
        ],
        skuid: skudata.skuProduct.skuid,
      });
      variations = vdata;
      window.localStorage.setItem("product", JSON.stringify(vdata));
    }
  };

  useEffect(() => {
    const totalQty =
      variations.length > 0
        ? Object.keys(variations).reduce(function (qty, key) {
            return qty + variations[key].qty;
          }, 0)
        : 0;
    const total =
      variations.length > 0
        ? Object.keys(variations).reduce((totalPrice, key) => {
            const { payable, qty } = variations[key];
            return totalPrice + payable * qty;
          }, 0)
        : 0;
    setProductTotal(total.toFixed(2));
    setTotalItem(totalQty);
  }, [variations]);

  console.log(variations);

  return (
    <div className="w-full flex lg:flex-row md:flex-row sm:flex-col justify-center items-start gap-10 mb-12">
      <div className="max-w-[340px]">
        <Image
          src={displayImage}
          height={340}
          width={340}
          alt=""
          className="mb-4 p-0.5 rounded-[4px] border border-[#ECECEC]"
        />

        <div className="grid grid-cols-5 gap-2 items-start ">
          {data?.main_imgs?.map((img, key) => {
            return (
              <Image
                onClick={() => {
                  setDisplayImage(data?.main_imgs[key]);
                }}
                src={img}
                height={60}
                width={60}
                alt=""
                className="rounded-lg shadow cursor-pointer border  p-0.5 border-[#ECECEC]"
              />
            );
          })}
        </div>
      </div>

      <div className="max-w-[490px]">
        <p className="mb-6">
          Buying Agent Process?{" "}
          <span className="font-semibold text-[#F79602]">
            3 Must Reads Before Purchase
          </span>{" "}
        </p>
        <p className="text-xl font-medium mb-4">{data?.title}</p>
        <div className="flex justify-between items-center mb-4 font-medium text-[#5D6154]">
          {/* <p className=" font-medium text-[#5D6154]">Rating: {5.0}</p> */}
          <p className=" font-medium text-[#5D6154]">
            {data?.sale_count} Monthly Sales
          </p>
        </div>

        <div className="mb-4">
          <p className="mb-2 font-semibold">
            {data?.sku_props[0].prop_name.toUpperCase()}:{" "}
            <span className="uppercase">{selectedProductColor?.name}</span>
          </p>

          <div className="flex flex-wrap gap-2">
            {data?.sku_props &&
              data?.sku_props[0]?.values?.map((x, i) => (
                <>
                  {x?.imageUrl === null ||
                  x?.imageUrl === undefined ||
                  x?.imageUrl === "" ? (
                    <button
                      onClick={() => {
                        setSelectedProductColor(x);
                        setDisplayImage(
                          x?.imageUrl === null ||
                            x?.imageUrl === undefined ||
                            x?.imageUrl === ""
                            ? data.main_imgs[0]
                            : x?.imageUrl
                        );
                      }}
                      className={
                        selectedProductColor?.vid === x?.vid
                          ? "border-2 border-[#F79602] rounded-[8px] p-1.5 cursor-pointer"
                          : "border border-[#ECECEC] rounded-[8px] p-1.5 cursor-pointer"
                      }
                    >
                      {x?.name}
                    </button>
                  ) : (
                    <Image
                      key={i}
                      onClick={() => {
                        setDisplayImage(
                          x?.imageUrl === null ||
                            x?.imageUrl === undefined ||
                            x?.imageUrl === ""
                            ? data.main_imgs[0]
                            : x?.imageUrl
                        );
                        setSelectedProductColor(x);
                      }}
                      src={x?.imageUrl}
                      height={40}
                      width={40}
                      alt=""
                      className={
                        selectedProductColor?.vid === x?.vid
                          ? "rounded-lg shadow cursor-pointer border-2 p-0.5 border-[#F79602]"
                          : "rounded-lg shadow cursor-pointer border  p-0.5 border-[#ECECEC]"
                      }
                    />
                  )}
                </>
              ))}
          </div>
        </div>

        {/* PRODUCT QUANTITY */}
        <div className="mt-6">
          {/* HEADER */}
          <div className="flex gap-2 uppercase justify-between px-4 py-2 bg-[#ECECEC]  font-bold  rounded-[4px] mb-4">
            <p className="lg:w-[120px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
              {data?.sku_props && data?.sku_props[1].prop_name}
            </p>
            <p className="lg:w-[120px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
              Price
            </p>
            <p className="lg:w-[120px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
              Stock
            </p>
            <p className="lg:w-[150px] md:w-[120px] sm:w-[80px] text-[#5D6154]">
              Quantity
            </p>
          </div>

          {/* BODY */}

          {data?.sku_props &&
            data?.sku_props[1]?.values?.map((x, i) => {
              const [qty, setQty] = useState(0);

              let skuProduct = data?.skus?.find(
                (sku) =>
                  sku.props_ids.includes(`${x?.vid}`) &&
                  sku.props_ids.includes(`${selectedProductColor?.vid}`)
              );
              console.log(skuProduct);

              handleProductVariation({
                qty: qty,
                skuProduct: skuProduct,
              });

              return (
                <div className="flex gap-2  justify-between px-4 mb-4 text-[14px] font-bold ">
                  <p className="lg:w-[120px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                    {x?.imageUrl === null ||
                    x?.imageUrl === undefined ||
                    x?.imageUrl === "" ? (
                      x?.name
                    ) : (
                      <Image
                        key={i}
                        onClick={() => {
                          setDisplayImage(
                            x?.imageUrl === null ||
                              x?.imageUrl === undefined ||
                              x?.imageUrl === ""
                              ? data.main_imgs[0]
                              : x?.imageUrl
                          );
                          setSelectedProductSKU(x);
                        }}
                        src={x?.imageUrl}
                        height={50}
                        width={50}
                        alt=""
                        className={
                          selectedProductColor?.vid === x?.vid
                            ? "rounded-lg shadow cursor-pointer border-2 p-0.5 border-[#F79602]"
                            : "rounded-lg shadow cursor-pointer border  p-0.5 border-[#ECECEC]"
                        }
                      />
                    )}
                  </p>

                  <p className="lg:w-[120px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                    {(skuProduct?.sale_price * 21).toFixed(2)}
                  </p>
                  <p className="lg:w-[120px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                    {skuProduct?.stock === undefined || skuProduct?.stock <= 0
                      ? 0
                      : skuProduct?.stock}
                  </p>
                  {skuProduct?.stock === undefined || skuProduct?.stock <= 0 ? (
                    <div className="lg:w-[120px] md:w-[120px] sm:w-[80px] flex">
                      Out Of Stock
                    </div>
                  ) : (
                    <div
                      id={x?.vid}
                      className="lg:w-[150px] md:w-[120px] sm:w-[80px] max-h-[40px] flex border border-slate-300 rounded-[4px]"
                    >
                      <button
                        className="w-3/12 p-1 border-r border-r-slate-300"
                        disabled={qty === 0 ? true : false}
                        onClick={() => {
                          setQty(qty - 1);
                          setSelectedProductSKU(x);
                        }}
                      >
                        -
                      </button>
                      {/* <div className="w-6/12 p-1 flex justify-center items-center"> */}
                      <input
                        className="w-6/12 p-1 flex justify-center items-center text-center"
                        value={qty}
                        onChange={(e) => {
                          setQty(Number(e.target.value));
                          setSelectedProductSKU(x);
                        }}
                      />
                      {/* </div> */}
                      <button
                        className="w-3/12 p-1  border-l border-l-slate-300"
                        disabled={qty === x?.stock ? true : false}
                        onClick={() => {
                          setQty(qty + 1);
                          setSelectedProductSKU(x);
                        }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      <div className="lg:max-w-[270px] md:max-w-[270px] sm:w-full">
        <div className="bg-[#F9F9F9] rounded-lg p-4 mb-8">
          <div className="flex justify-between gap-1.5   font-semibold  mb-3">
            <p>{totalItem} Pieces</p>
            <p>BDT 0 </p>
          </div>
          <div className="flex justify-between gap-1.5   font-semibold  mb-6">
            <p className=" text-sm">Domestic Shipping Charge</p>
            <p>BDT 0 </p>
          </div>
          <div className="flex justify-between gap-1.5  font-semibold text-[#5D6154] border-t border-dashed border-t-[#5D6154] pt-4 mb-2.5">
            <p>Total</p>
            <p>BDT 485.17 * </p>
          </div>
          <p className="text-xs text-red-500 text-right mb-8">
            *Shipping Charge will be include later
          </p>

          <button
            type=""
            className="bg-[#F79602] py-2 w-full text-white rounded font-semibold mb-4"
          >
            BUY NOW
          </button>
          <button
            type=""
            className="bg-[#F79602] py-2 w-full text-white  rounded font-semibold mb-4"
          >
            ADD TO CART
          </button>
        </div>

        {/* Seller Details */}
        <div className="bg-[#F9F9F9]  rounded-lg p-4 mb-8">
          <p className="font-semibold mb-2.5">Seller Details</p>

          <p className="font-semibold  mb-6">
            Name:{data?.shop_info?.shop_name}
          </p>

          <button
            type=""
            className="bg-[#F79602] py-2 w-full rounded-full text-white mb-4"
          >
            View Store
          </button>
        </div>

        <div className="bg-[#F9F9F9]  rounded-lg p-4 mb-8">
          <p className="font-semibold mb-2.5"> Guarantee</p>
          <p className="font-semibold  mb-1.5"> ✔ 100% Refund</p>
          <p className="font-semibold   mb-1.5"> ✔ Detailed Inspection</p>
          <p className="font-semibold   mb-1.5"> ✔ Handle with care</p>
          <p className="font-semibold   mb-1.5"> ✔ Lower exchange loss</p>
        </div>
      </div>
    </div>
  );
};
