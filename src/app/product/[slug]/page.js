"use client";
import React, { useState } from "react";
import Image from "next/image";

const data = {
  item_id: 557883836009,
  title:
    "Large birthday pull flag birthday letter banner hot stamping fishtail bunting happy birthday pull flag party decoration latte art",
  category_id: 1715,
  root_category_id: "67",
  currency: "CNY",
  offer_unit: "pieces",
  product_props: [
    {
      材质: "White card",
    },
    {
      货号: "002",
    },
    {
      品牌: "Occasionally",
    },
    {
      类别: "Other paper crafts",
    },
    {
      是否专利货源: "no",
    },
    {
      颜色: "Pink, white, black, color, rose pink white, pink white green, light blue, dark blue, macaron, dark blue light blue, unicorn, light purple, rose gold flag",
    },
    {
      尺寸: "Large pull flag, small pull flag",
    },
    {
      是否属于礼品: "no",
    },
    {
      是否IP授权: "no",
    },
    {
      风格: "Modern and simple",
    },
    {
      道具种类: "scene decoration",
    },
    {
      产品编号: "OD01",
    },
    {
      产品类别: "Venue layout props",
    },
  ],
  main_imgs: [
    "https://cbu01.alicdn.com/img/ibank/14803681255_1193312263.jpg",
    "https://cbu01.alicdn.com/img/ibank/14762451694_1193312263.jpg",
    "https://cbu01.alicdn.com/img/ibank/14803696685_1193312263.jpg",
    "https://cbu01.alicdn.com/img/ibank/14762403936_1193312263.jpg",
    "https://cbu01.alicdn.com/img/ibank/22085856925_1193312263.jpg",
  ],
  video_url:
    "https://cloud.video.taobao.com/play/u/2794449307/p/2/e/6/t/1/364168415189.mp4",
  detail_url:
    "https://itemcdn.tmall.com/1688offer/icoss38986441177968a54c44babeea",
  sale_count: "94975",
  shop_info: {
    shop_name: "Yiwu Ode Christmas Crafts",
    shop_url:
      "https://winport.m.1688.com/page/index.html?memberId=b2b-2794449307b2cf6",
    seller_login_id: "",
    seller_user_id: "2794449307",
    seller_member_id: "b2b-2794449307b2cf6",
  },
  delivery_info: {
    unit_weight: 0.12,
  },
  sku_price_scale: "￥1.1-￥1.1",
  sku_price_scale_original: "￥1.1-￥1.1",
  sku_price_range: {
    begin_num: "2",
    stock: 1482883,
    sell_unit: "pieces",
    sku_param: [
      {
        beginAmount: "2",
        price: 1.1,
      },
    ],
    mix_param: {
      mixAmount: "1000",
      mixBegin: "0",
      mixNum: "200",
      shopMixNum: "2147483647",
      supportMix: "true",
    },
  },
  sku_props: [
    {
      prop_name: "color",
      pid: "38128",
      values: [
        {
          name: "pink",
          vid: "18869",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/14803678170_1193312263.jpg",
        },
        {
          name: "White",
          vid: "31263",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/14857928661_1193312263.jpg",
        },
        {
          name: "black",
          vid: "15252",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/14803753275_1193312263.jpg",
        },
        {
          name: "color",
          vid: "11424",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/14803741799_1193312263.jpg",
        },
        {
          name: "rose pink white",
          vid: "14870",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/14803732422_1193312263.jpg",
        },
        {
          name: "pink white green",
          vid: "87826",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN01IbnXYU2IcerQpdVfV_!!2794449307-0-cib.jpg",
        },
        {
          name: "light blue",
          vid: "10625",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/14803696685_1193312263.jpg",
        },
        {
          name: "dark blue",
          vid: "14243",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN012HB5DF2Icerfxq98p_!!2794449307-0-cib.jpg",
        },
        {
          name: "Macaron",
          vid: "19292",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN01U9W2zp2IcerjYL5s7_!!2794449307-0-cib.jpg",
        },
        {
          name: "dark blue light blue",
          vid: "17326",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN01sAVJSn2IcerfPit7o_!!2794449307-0-cib.jpg",
        },
        {
          name: "unicorn",
          vid: "12507",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN01CrQUzz2IcersPajYk_!!2794449307-0-cib.jpg",
        },
        {
          name: "light purple",
          vid: "18867",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN01sQhPfY2Icf00qNH4g_!!2794449307-0-cib.jpg",
        },
        {
          name: "rose gold pull flag",
          vid: "13299",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/O1CN01ilgUUi2Icf3nbm8NA_!!2794449307-0-cib.jpg",
        },
      ],
    },
    {
      prop_name: "size",
      pid: "16437",
      values: [
        {
          name: "Large pull flag",
          vid: "13650",
        },
        {
          name: "trumpet pull flag",
          vid: "41716",
        },
      ],
    },
  ],
  skus: [
    {
      skuid: "4825548678594",
      specid: "1a8621a23cc26ff985ef69bd3fa82051",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 48275,
      sale_count: 0,
      props_ids: "38128:18869;16437:13650",
      props_names: "Color: pink; size: large flag",
    },
    {
      skuid: "4825548678584",
      specid: "d14f933b6f5c056af3068c288fb5ddd7",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 50337,
      sale_count: 0,
      props_ids: "38128:18869;16437:41716",
      props_names: "Color: pink; size: small flag",
    },
    {
      skuid: "4825548678593",
      specid: "ce55d06da0855db114c8498eaa3b76db",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 88989,
      sale_count: 0,
      props_ids: "38128:31263;16437:13650",
      props_names: "Color: White; Size: Large flag",
    },
    {
      skuid: "4825548678583",
      specid: "0ed98b639761e60b3982ec09521ecab0",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 52079,
      sale_count: 0,
      props_ids: "38128:31263;16437:41716",
      props_names: "Color: White; Size: Small pull flag",
    },
    {
      skuid: "4825548678595",
      specid: "8248390a62f7096450959e0fc4bf2b39",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 39784,
      sale_count: 0,
      props_ids: "38128:15252;16437:13650",
      props_names: "Color: black; size: large flag",
    },
    {
      skuid: "4825548678585",
      specid: "3487ed337e00634163e898f549f6e75e",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 36858,
      sale_count: 0,
      props_ids: "38128:15252;16437:41716",
      props_names: "Color: black; size: small flag",
    },
    {
      skuid: "4825548678598",
      specid: "6e4c848acaa0ef0d9082dddd800bba1b",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 80650,
      sale_count: 0,
      props_ids: "38128:11424;16437:13650",
      props_names: "Color: colorful; size: large flag",
    },
    {
      skuid: "4825548678588",
      specid: "713def12a898af3c27c92564cae047a0",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 93637,
      sale_count: 0,
      props_ids: "38128:11424;16437:41716",
      props_names: "Color: colorful; size: small flag",
    },
    {
      skuid: "4825548678599",
      specid: "b005f0c094b3697e795310480da6f712",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 97217,
      sale_count: 0,
      props_ids: "38128:14870;16437:13650",
      props_names: "Color: rose pink and white; size: large flag",
    },
    {
      skuid: "4825548678589",
      specid: "55ecf3c13f635122c193f7b4e22c6935",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 94883,
      sale_count: 0,
      props_ids: "38128:14870;16437:41716",
      props_names: "Color: rose pink and white; size: small flag",
    },
    {
      skuid: "4834371434491",
      specid: "3c9d4a6087a171725d81d33329220dee",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 97429,
      sale_count: 0,
      props_ids: "38128:87826;16437:13650",
      props_names: "Color: pink, white and green; size: large flag",
    },
    {
      skuid: "4825548678596",
      specid: "17d52c0fcfdaebb70e5e82822d5c38f6",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 92527,
      sale_count: 0,
      props_ids: "38128:10625;16437:13650",
      props_names: "Color: light blue; size: large flag",
    },
    {
      skuid: "4825548678586",
      specid: "df086c231e3ef8cf779fd09fb05cb19a",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 92823,
      sale_count: 0,
      props_ids: "38128:10625;16437:41716",
      props_names: "Color: light blue; size: small flag",
    },
    {
      skuid: "4825548678592",
      specid: "2fbc7e1ee94be894e916ac9c583b7198",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 85519,
      sale_count: 0,
      props_ids: "38128:14243;16437:13650",
      props_names: "Color: dark blue; size: large flag",
    },
    {
      skuid: "4825548678582",
      specid: "d3b2aeeaf4716e5d7c0265db85f95783",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 80776,
      sale_count: 0,
      props_ids: "38128:14243;16437:41716",
      props_names: "Color: dark blue; size: small flag",
    },
    {
      skuid: "4825548678600",
      specid: "62674c206bab129e1a8362d5344b3d6c",
      sale_price: "2.0",
      origin_price: "2.0",
      stock: 95665,
      sale_count: 0,
      props_ids: "38128:19292;16437:13650",
      props_names: "Color: Macaron; Size: Large flag",
    },
    {
      skuid: "4652132684564",
      specid: "00bc9cba700d1470b08a574b60e5e471",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 95503,
      sale_count: 0,
      props_ids: "38128:17326;16437:13650",
      props_names: "Color: dark blue light blue; size: large flag",
    },
    {
      skuid: "4652132684562",
      specid: "7ec618fdeef981091ba3660bba8b7cc2",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 53985,
      sale_count: 0,
      props_ids: "38128:17326;16437:41716",
      props_names: "Color: dark blue light blue; size: small pull flag",
    },
    {
      skuid: "4834371434490",
      specid: "6a68a77cc4c396735f544f8966a0f268",
      sale_price: "2.4",
      origin_price: "2.4",
      stock: 96327,
      sale_count: 0,
      props_ids: "38128:12507;16437:13650",
      props_names: "Color: Unicorn; Size: Large flag",
    },
    {
      skuid: "5128295522509",
      specid: "4a40aaa7f3a7874df2a9108fada37843",
      sale_price: "1.7",
      origin_price: "1.7",
      stock: 9280,
      sale_count: 0,
      props_ids: "38128:18867;16437:13650",
      props_names: "Color: light purple; size: large flag",
    },
    {
      skuid: "5266741131715",
      specid: "84faea795949a2a7995ea96eac0e2107",
      sale_price: "1.1",
      origin_price: "1.1",
      stock: 340,
      sale_count: 0,
      props_ids: "38128:13299;16437:41716",
      props_names: "Color: rose gold pull flag; size: small pull flag",
    },
  ],
};

const page = ({ params }) => {
  const slug = params?.slug;
  const [displayImage, setDisplayImage] = useState(
    (data?.sku_props &&
      data?.sku_props[0]?.values &&
      data?.sku_props[0]?.values[0]?.imageUrl) ||
      null
  );
  const [detailSelected, setDetailSelected] = useState(1);
  const [selectedProductColor, setSelectedProductColor] = useState(
    (data?.sku_props &&
      data?.sku_props[0]?.values &&
      data?.sku_props[0]?.values[0]) ||
      null
  );
  const [selectedProductSKU, setSelectedProductSKU] = useState(null);

  return (
    <main>
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
          <p className="text-xl font-medium mb-4">{data?.title}</p>
          <div className="flex justify-between items-center mb-4 font-medium text-[#5D6154]">
            <p className=" font-medium text-[#5D6154]">Rating: {5.0}</p>
            <p className=" font-medium text-[#5D6154]">
              {data?.sale_count} Monthly Sales
            </p>
          </div>

          <div className="mb-4">
            <p className="mb-2 font-semibold">
              Color:{" "}
              <span className="uppercase">{selectedProductColor?.name}</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {data?.sku_props &&
                data?.sku_props[0]?.values?.map((x, i) => {
                  return (
                    <Image
                      key={i}
                      onClick={() => {
                        setDisplayImage(x?.imageUrl);
                        setSelectedProductColor(x);
                      }}
                      src={x?.imageUrl}
                      height={40}
                      width={40}
                      alt=""
                      className={
                        selectedProductColor?.vid === x?.vid
                          ? "rounded-lg shadow cursor-pointer border p-0.5 border-[#F79602]"
                          : "rounded-lg shadow cursor-pointer border  p-0.5 border-[#ECECEC]"
                      }
                    />
                  );
                })}
            </div>
          </div>

          {/* PRODUCT QUANTITY */}
          <div>
            {/* HEADER */}
            <div className="flex gap-2 uppercase justify-between px-4 py-2 bg-[#ECECEC]  font-bold  rounded-[4px] mb-4">
              <p className="lg:w-[100px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                {data?.sku_props && data?.sku_props[1].prop_name}
              </p>
              <p className="lg:w-[100px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                Price
              </p>
              <p className="lg:w-[100px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                Stock
              </p>
              <p className="lg:w-[200px] md:w-[120px] sm:w-[80px] text-[#5D6154]">
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

                return (
                  <div className="flex gap-2  justify-between px-4 mb-4 text-[14px] font-bold ">
                    <p className="lg:w-[100px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                      {x?.name}
                    </p>

                    <p className="lg:w-[100px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                      {skuProduct?.sale_price}
                    </p>
                    <p className="lg:w-[100px] md:w-[60px] sm:w-[40px] text-[#5D6154]">
                      {skuProduct?.stock}
                    </p>

                    <div className="lg:w-[200px] md:w-[120px] sm:w-[80px] flex border border-slate-300 rounded-[4px]">
                      {x?.stock !== 0 ? (
                        <>
                          <button
                            className="w-2/12 p-1 border-r border-r-slate-300"
                            disabled={qty === 0 ? true : false}
                            onClick={() => setQty((v) => v - 1)}
                          >
                            -
                          </button>
                          <div className="w-8/12 p-1 flex justify-center items-center">
                            <span className="">{qty}</span>
                          </div>
                          <button
                            className="w-2/12 p-1  border-l border-l-slate-300"
                            disabled={qty === x?.stock ? true : false}
                            onClick={() => setQty((v) => v + 1)}
                          >
                            +
                          </button>
                        </>
                      ) : (
                        <p>Out of stock</p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="min-w-[270px]">
          <div className="bg-[#F9F9F9]"></div>
        </div>
      </div>

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
            {data?.product_props?.map((val, ind) => {
              return (
                <div className="flex border border-[#ECECEC]">
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
            {data?.video_url && (
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
  );
};

export default page;
