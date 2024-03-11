"use client";

// export const metadata = {
//   title: "AleehaLogistics | Products",
//   description: "AleehaLogistics prize campaign win",
// };
import { addToCart } from "@app/redux/actions";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsDetails from "@components/Depricited/ProductsDetails";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = {
  page: 1,
  page_size: 20,
  total_count: 6002,
  keyword: "Jewelry",
  sort: "default",
  price_start: "",
  price_end: "",
  items: [
    {
      item_id: 760689176126,
      product_url: "https://detail.1688.com/offer/760689176126.html",
      title:
        "Chenmo new Chinese style retro red agate chalcedony necklace literary niche beaded 925 sterling silver clavicle chain jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01PIzLf81i1izTncTkO_!!4134104353-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "34.60",
      price_info: {
        drop_ship_price: "54.60",
        wholesale_price: "34.60",
        origin_price: "34.60",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "",
          price: "34.60",
        },
      ],
      sale_info: {
        gmv_30days: "40,000+",
        gmv_30days_cb: 0,
        sale_quantity: 3092,
        orders_count: 271,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["", "Xiqing District, Tianjin"],
        weight: 0.02,
        suttle_weight: 0,
        free_postage: false,
      },
      item_repurchase_rate: "0.1648",
      goods_score: 4,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 86,
      shop_info: {
        login_id: "Chenmo jewelry brand",
        member_id: "b2b-41341043535bf2b",
        biz_type: "Production and processing",
        company_name: "Chenmo (Tianjin) Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 6,
        factory_inspection: true,
        shop_repurchase_rate: "13.4%",
        sore_info: {
          composite_new_score: "5.0",
          composite_score: 0,
          consultation_score: 4.5,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 3,
        },
      },
    },
    {
      item_id: 732866422686,
      product_url: "https://detail.1688.com/offer/732866422686.html",
      title:
        "French elegant cool freshwater irregular baroque pearl brass gold-plated commuting stackable fashion versatile necklace",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN018RS7He21RLnk8M0DP_!!4218476981-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "40.00",
      price_info: {
        drop_ship_price: "40.00",
        wholesale_price: "40.00",
        origin_price: "40.00",
      },
      quantity_begin: 1,
      quantity_prices: [
        {
          begin_num: "1",
          end_num: "",
          price: "40.00",
        },
      ],
      sale_info: {
        gmv_30days: "1000+",
        gmv_30days_cb: 0,
        sale_quantity: 357,
        orders_count: 211,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Shandong", "Chengyang District, Qingdao City"],
        weight: 0.01,
        suttle_weight: 0,
        free_postage: false,
      },
      item_repurchase_rate: "0.1091",
      goods_score: 4,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 16,
      shop_info: {
        login_id: "Maya Jewelry",
        member_id: "b2b-421847698126e5c",
        biz_type: "Wholesale distribution",
        company_name: "Qingdao Meiya Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 6,
        factory_inspection: false,
        shop_repurchase_rate: "18.4%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 3,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 3.5,
        },
      },
    },
    {
      item_id: 724503660976,
      product_url: "https://detail.1688.com/offer/724503660976.html",
      title:
        "Pearl multi-layer necklace French light luxury elegant niche design clavicle chain personality versatile high-end jewelry for women",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01KntjGv1U8DvTdXNLO_!!2206791332472-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "10.40",
      price_info: {
        drop_ship_price: "10.40",
        wholesale_price: "10.40",
        origin_price: "10.40",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "11",
          price: "10.40",
        },
        {
          begin_num: "12",
          end_num: "59",
          price: "10.10",
        },
        {
          begin_num: "60",
          end_num: "",
          price: "9.40",
        },
      ],
      sale_info: {
        gmv_30days: "1000+",
        gmv_30days_cb: 0,
        sale_quantity: 570,
        orders_count: 119,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.0209,
        suttle_weight: 0.03,
        free_postage: false,
      },
      item_repurchase_rate: "0.1607",
      goods_score: 3,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 7,
      shop_info: {
        login_id: "Boyue Powerful Store",
        member_id: "b2b-22067913324721f17d",
        biz_type: "Production and processing",
        company_name: "Yiwu Boyue E-Commerce Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 5,
        factory_inspection: false,
        shop_repurchase_rate: "25.3%",
        sore_info: {
          composite_new_score: "4.0",
          composite_score: 0,
          consultation_score: 3.5,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 2.5,
        },
      },
    },
    {
      item_id: 690481563628,
      product_url: "https://detail.1688.com/offer/690481563628.html",
      title:
        "Thunder Fire Order sterling silver gourd pendant beads sterling silver 999 pendant Qiankun Bagua flame silver necklace pendant lanyard",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01Du1Gmz2Fnhg3N7ybf_!!2200627758925-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "9.00",
      price_info: {
        drop_ship_price: "9.00",
        wholesale_price: "9.00",
        origin_price: "9.00",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "49",
          price: "9.00",
        },
        {
          begin_num: "50",
          end_num: "99",
          price: "8.80",
        },
        {
          begin_num: "100",
          end_num: "",
          price: "8.60",
        },
      ],
      sale_info: {
        gmv_30days: "100+",
        gmv_30days_cb: 0,
        sale_quantity: 289,
        orders_count: 91,
      },
      type: "normal",
      unit: "pieces",
      delivery_info: {
        area_from: ["Guangdong", "Shanwei City"],
        weight: 0.05,
        suttle_weight: 0.05,
        free_postage: false,
      },
      item_repurchase_rate: "0.3333",
      goods_score: 4,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 3,
      shop_info: {
        login_id: "Xinqin jewelry store",
        member_id: "b2b-2200627758925a02a3",
        biz_type: "Production and processing",
        company_name:
          "Xinqin Jewelry Store, Longgang District, Shenzhen City (individual industrial and commercial households)",
        service_tags: null,
        tp_member: true,
        tp_year: 6,
        factory_inspection: false,
        shop_repurchase_rate: "38.5%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 3.5,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 3,
        },
      },
    },
    {
      item_id: 660101602186,
      product_url: "https://detail.1688.com/offer/660101602186.html",
      title:
        "12 constellations stainless steel necklace 12 constellations golden titanium steel necklace vacuum electroplating color-preserving necklace manufacturer",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN018Z3BcO1ygVv5ul3S4_!!2201281856608-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "1.90",
      price_info: {
        drop_ship_price: "1.90",
        wholesale_price: "1.90",
        origin_price: "1.90",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "",
          price: "1.90",
        },
      ],
      sale_info: {
        gmv_30days: "60+",
        gmv_30days_cb: 0,
        sale_quantity: 24491,
        orders_count: 121,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.02,
        suttle_weight: 0.03,
        free_postage: false,
      },
      item_repurchase_rate: "0.2",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 2,
      shop_info: {
        login_id: "Yiwu half hole jewelry factory",
        member_id: "b2b-22012818566085385b",
        biz_type: "Production and processing",
        company_name: "Yiwu Half Hole Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 5,
        factory_inspection: false,
        shop_repurchase_rate: "30.6%",
        sore_info: {
          composite_new_score: "3.5",
          composite_score: 0,
          consultation_score: 2,
          dispute_score: 5,
          logistics_score: 2,
          return_score: 2.5,
        },
      },
    },
    {
      item_id: 672375890662,
      product_url: "https://detail.1688.com/offer/672375890662.html",
      title:
        "Amazon's popular retro hip-hop European and American Pan Shen Sheep head design Taigang jewelery necklace men's trend",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01n53VEV21yKCTXQIKP_!!2595027053-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "2.50",
      price_info: {
        drop_ship_price: "2.50",
        wholesale_price: "2.50",
        origin_price: "2.50",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "99",
          price: "2.50",
        },
        {
          begin_num: "100",
          end_num: "119999",
          price: "2.40",
        },
        {
          begin_num: "120000",
          end_num: "",
          price: "1.90",
        },
      ],
      sale_info: {
        gmv_30days: "10+",
        gmv_30days_cb: 0,
        sale_quantity: 298,
        orders_count: 75,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.03,
        suttle_weight: 0.03,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 3,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 0,
      shop_info: {
        login_id: "Yiwu Panci E-Commerce Firm",
        member_id: "b2b-2595027053a91e0",
        biz_type: "Production and processing",
        company_name: "Yiwu Panci E-Commerce Firm",
        service_tags: null,
        tp_member: true,
        tp_year: 9,
        factory_inspection: false,
        shop_repurchase_rate: "44.9%",
        sore_info: {
          composite_new_score: "4.0",
          composite_score: 0,
          consultation_score: 2,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 3,
        },
      },
    },
    {
      item_id: 606729096126,
      product_url: "https://detail.1688.com/offer/606729096126.html",
      title:
        "Factory price direct sales European and American hip-hop retro jewelry titanium steel men's trendy brand devil's eye necklace accessories jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01K6dfHK1SeA7Nt0CKK_!!4268162271-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "18.00",
      price_info: {
        drop_ship_price: "18.00",
        wholesale_price: "18.00",
        origin_price: "18.00",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "9",
          price: "18.00",
        },
        {
          begin_num: "10",
          end_num: "99",
          price: "16.00",
        },
        {
          begin_num: "100",
          end_num: "",
          price: "13.00",
        },
      ],
      sale_info: {
        gmv_30days: "10+",
        gmv_30days_cb: 0,
        sale_quantity: 271,
        orders_count: 11,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Guangdong", "Shanwei City"],
        weight: 0.0317,
        suttle_weight: 0.0317,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 0,
      shop_info: {
        login_id: "haoxing jewelry factory",
        member_id: "b2b-4268162271b353d",
        biz_type: "Production and processing",
        company_name: "Haifeng County Meilong Haoxing Jewelry Factory",
        service_tags: null,
        tp_member: true,
        tp_year: 6,
        factory_inspection: false,
        shop_repurchase_rate: "46.5%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 3,
          dispute_score: 4,
          logistics_score: 4,
          return_score: 3.5,
        },
      },
    },
    {
      item_id: 723119715229,
      product_url: "https://detail.1688.com/offer/723119715229.html",
      title:
        "Black stainless steel necklace men's and women's twist bracelet simple clavicle chain multi-size hip hop twisted rope chain",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01NbLlaX1EdKybLJATf_!!2201206520374-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "2.48",
      price_info: {
        drop_ship_price: "2.48",
        wholesale_price: "2.48",
        origin_price: "2.48",
      },
      quantity_begin: 2,
      quantity_prices: [],
      sale_info: {
        gmv_30days: "30+",
        gmv_30days_cb: 0,
        sale_quantity: 56,
        orders_count: 7,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Henan", "Nanyang City"],
        weight: 0.046,
        suttle_weight: 0.046,
        free_postage: false,
      },
      item_repurchase_rate: "0.3333",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 0,
      shop_info: {
        login_id: "BOYA TRADING CO., LTD.",
        member_id: "b2b-2201206520374af9c4",
        biz_type: "Production and processing",
        company_name: "Nanyang Boya Trading Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 5,
        factory_inspection: false,
        shop_repurchase_rate: "40.5%",
        sore_info: {
          composite_new_score: "4.0",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 2.5,
        },
      },
    },
    {
      item_id: 692703620468,
      product_url: "https://detail.1688.com/offer/692703620468.html",
      title:
        "European and American cross-border new sequined love-shaped best friend children's necklace versatile epoxy cartoon alloy jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01bZIyDD2DTQwIEgB5G_!!2212459228610-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "5.50",
      price_info: {
        drop_ship_price: "9.50",
        wholesale_price: "5.50",
        origin_price: "5.50",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "59",
          price: "5.50",
        },
        {
          begin_num: "60",
          end_num: "9999",
          price: "5.00",
        },
        {
          begin_num: "10000",
          end_num: "",
          price: "3.80",
        },
      ],
      sale_info: {
        gmv_30days: "40+",
        gmv_30days_cb: 0,
        sale_quantity: 405,
        orders_count: 49,
      },
      type: "normal",
      unit: "set",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.015,
        suttle_weight: 0.015,
        free_postage: false,
      },
      item_repurchase_rate: "0.6667",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 2,
      shop_info: {
        login_id: "Yiwu Qinfei jewelry source factory",
        member_id: "b2b-2212459228610bc671",
        biz_type: "Production and processing",
        company_name: "Yiwu Qinfei Daily Necessities Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 3,
        factory_inspection: false,
        shop_repurchase_rate: "17.8%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4,
        },
      },
    },
    {
      item_id: 630632886141,
      product_url: "https://detail.1688.com/offer/630632886141.html",
      title:
        "English letter necklace pendant earrings stainless steel jewelry jewelry wholesale Necklace model Jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01ChQZkF1gPsQ6TLH4e_!!2208422214135-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "2.99",
      price_info: {
        drop_ship_price: "10.00",
        wholesale_price: "2.99",
        origin_price: "2.99",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "",
          price: "1.80",
        },
      ],
      sale_info: {
        gmv_30days: null,
        gmv_30days_cb: 0,
        sale_quantity: 9436,
        orders_count: 64,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Guangdong", "Dongguan city"],
        weight: 0.007,
        suttle_weight: 0.007,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 1,
      shop_info: {
        login_id: "Fatinha 2020",
        member_id: "b2b-2208422214135e6625",
        biz_type: "Production and processing",
        company_name: "Shenzhen Fatiniya Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 4,
        factory_inspection: true,
        shop_repurchase_rate: "32.3%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 5,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4,
        },
      },
    },
    {
      item_id: 742246516739,
      product_url: "https://detail.1688.com/offer/742246516739.html",
      title:
        "Irregular rhombus necklace jewelry for women light luxury crystal diamond clavicle chain simple high-end jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01xWU9vX2DS3pCg1zJH_!!2215522268607-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "13.00",
      price_info: {
        drop_ship_price: "13.00",
        wholesale_price: "13.00",
        origin_price: "13.00",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "11",
          price: "13.00",
        },
        {
          begin_num: "12",
          end_num: "119",
          price: "12.50",
        },
        {
          begin_num: "120",
          end_num: "",
          price: "12.00",
        },
      ],
      sale_info: {
        gmv_30days: "60+",
        gmv_30days_cb: 0,
        sale_quantity: 5,
        orders_count: 1,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Zhejiang", "Jinhua City"],
        weight: 0.01,
        suttle_weight: 0.01,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 2,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 0,
      shop_info: {
        login_id: "Qihui jewelry source factory",
        member_id: "b2b-2215522268607391be",
        biz_type: "Production and processing",
        company_name: "Yiwu Qizhi Huihui Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 2,
        factory_inspection: false,
        shop_repurchase_rate: "24.5%",
        sore_info: {
          composite_new_score: "4.0",
          composite_score: 0,
          consultation_score: 5,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 4,
        },
      },
    },
    {
      item_id: 723316026457,
      product_url: "https://detail.1688.com/offer/723316026457.html",
      title:
        "Fashionable rhinestone necklace, simple and versatile, double row diamond tassel necklace, cross-border popular women's accessories jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN014Cmigb1DfL5luTyCH_!!3898910243-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "18.00",
      price_info: {
        drop_ship_price: "18.00",
        wholesale_price: "18.00",
        origin_price: "18.00",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "11",
          price: "18.00",
        },
        {
          begin_num: "12",
          end_num: "119",
          price: "17.50",
        },
        {
          begin_num: "120",
          end_num: "",
          price: "17.00",
        },
      ],
      sale_info: {
        gmv_30days: null,
        gmv_30days_cb: 0,
        sale_quantity: 4,
        orders_count: 2,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.06,
        suttle_weight: 0.06,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 2,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 0,
      shop_info: {
        login_id: "Yiwu heart jewelry",
        member_id: "b2b-3898910243c179b",
        biz_type: "Production and processing",
        company_name: "Yiwu Xinshi Trading Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 6,
        factory_inspection: true,
        shop_repurchase_rate: "37.9%",
        sore_info: {
          composite_new_score: "4.0",
          composite_score: 0,
          consultation_score: 3.5,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 3.5,
        },
      },
    },
    {
      item_id: 615268570160,
      product_url: "https://detail.1688.com/offer/615268570160.html",
      title:
        "European and American cross-border necklace jewelry jewelry multi-layer necklace ins style alloy lock heart versatile safety lock necklace for women",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01lXYqta1VD5aZxCHe5_!!2466522618-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "3.98",
      price_info: {
        drop_ship_price: "3.98",
        wholesale_price: "3.98",
        origin_price: "3.98",
      },
      quantity_begin: 2,
      quantity_prices: [],
      sale_info: {
        gmv_30days: "3",
        gmv_30days_cb: 0,
        sale_quantity: 342074,
        orders_count: 1408,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.03,
        suttle_weight: 0.04,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 1,
      shop_info: {
        login_id: "Overflowing accessories 168",
        member_id: "b2b-2466522618",
        biz_type: "Production and processing",
        company_name: "Yiwu Manyi Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 9,
        factory_inspection: false,
        shop_repurchase_rate: "34.1%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4,
        },
      },
    },
    {
      item_id: 590663158085,
      product_url: "https://detail.1688.com/offer/590663158085.html",
      title:
        "Couple animal zodiac pendant necklace natural crystal stone Chinese dragon short necklace mixed color wholesale jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/2019/444/559/10750955444_950170408.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "8.00",
      price_info: {
        drop_ship_price: "5.90",
        wholesale_price: "8.00",
        origin_price: "8.00",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "9",
          price: "8.00",
        },
        {
          begin_num: "10",
          end_num: "499",
          price: "7.80",
        },
        {
          begin_num: "500",
          end_num: "",
          price: "7.50",
        },
      ],
      sale_info: {
        gmv_30days: "90+",
        gmv_30days_cb: 0,
        sale_quantity: 1350,
        orders_count: 405,
      },
      type: "normal",
      unit: "strip",
      delivery_info: {
        area_from: ["Guangdong", "Foshan City"],
        weight: 0.019,
        suttle_weight: 0.019,
        free_postage: false,
      },
      item_repurchase_rate: "0.1818",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 2,
      shop_info: {
        login_id: "Huai She Trading",
        member_id: "b2b-41206074333a4e4",
        biz_type: "Production and processing",
        company_name: "Foshan Huaishe Trading Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 6,
        factory_inspection: false,
        shop_repurchase_rate: "43.4%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4,
        },
      },
    },
    {
      item_id: 670944303540,
      product_url: "https://detail.1688.com/offer/670944303540.html",
      title:
        "2023 cross-border Amazon wish versatile popular ins dragonfly necklace insect pendant alloy jewelry jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN015ijRgs1Oo0FtyuDrv_!!2999571751-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "2.20",
      price_info: {
        drop_ship_price: "6.20",
        wholesale_price: "2.20",
        origin_price: "2.20",
      },
      quantity_begin: 3,
      quantity_prices: [
        {
          begin_num: "3",
          end_num: "11",
          price: "2.20",
        },
        {
          begin_num: "12",
          end_num: "299",
          price: "1.90",
        },
        {
          begin_num: "300",
          end_num: "",
          price: "1.60",
        },
      ],
      sale_info: {
        gmv_30days: "300+",
        gmv_30days_cb: 0,
        sale_quantity: 1179,
        orders_count: 45,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.02,
        suttle_weight: 0.03,
        free_postage: false,
      },
      item_repurchase_rate: "0.4",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 1,
      shop_info: {
        login_id: "New selling point accessories 4828",
        member_id: "b2b-2999571751cf646",
        biz_type: "Production and processing",
        company_name: "Jinhua New Selling Point Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 8,
        factory_inspection: false,
        shop_repurchase_rate: "34.6%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4,
        },
      },
    },
    {
      item_id: 642147699719,
      product_url: "https://detail.1688.com/offer/642147699719.html",
      title:
        "ins European and American style 4mm wide titanium steel flat snake chain necklace Kendou same style necklace silver flat chain jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN011kx5Q52J013EtRUsq_!!2207716349358-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "9.00",
      price_info: {
        drop_ship_price: "15.00",
        wholesale_price: "9.00",
        origin_price: "9.00",
      },
      quantity_begin: 3,
      quantity_prices: [
        {
          begin_num: "3",
          end_num: "",
          price: "9.00",
        },
      ],
      sale_info: {
        gmv_30days: null,
        gmv_30days_cb: 0,
        sale_quantity: 3803,
        orders_count: 189,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Guangdong", "Shenzhen"],
        weight: 0,
        suttle_weight: 0,
        free_postage: false,
      },
      item_repurchase_rate: "0.3333",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 2,
      shop_info: {
        login_id: "Xiaolin fashion fashion",
        member_id: "b2b-22077163493586382b",
        biz_type: "Production and processing",
        company_name: "Shenzhen Xiaolin Fashion Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 4,
        factory_inspection: false,
        shop_repurchase_rate: "39.8%",
        sore_info: {
          composite_new_score: "5.0",
          composite_score: 0,
          consultation_score: 5,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 4,
        },
      },
    },
    {
      item_id: 652659706136,
      product_url: "https://detail.1688.com/offer/652659706136.html",
      title:
        "Sterling Silver S925 Love Hot Girl Zircon Necklace Women's Necklace Hot Selling Jewelry Pendant Versatile and High-end",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01vCeZzd1nMrBtLMDIA_!!2208607655076-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "34.00",
      price_info: {
        drop_ship_price: "34.00",
        wholesale_price: "34.00",
        origin_price: "34.00",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "9",
          price: "34.00",
        },
        {
          begin_num: "10",
          end_num: "",
          price: "33.00",
        },
      ],
      sale_info: {
        gmv_30days: "3000+",
        gmv_30days_cb: 0,
        sale_quantity: 19616,
        orders_count: 290,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Guangdong", "Guangzhou City"],
        weight: 0.005,
        suttle_weight: 0.005,
        free_postage: false,
      },
      item_repurchase_rate: "0.4",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 1,
      shop_info: {
        login_id: "Guangzhou Yien Jewelry Co., Ltd.",
        member_id: "b2b-22086076550769cbae",
        biz_type: "Production and processing",
        company_name: "Guangzhou Yien Jewelry Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 4,
        factory_inspection: false,
        shop_repurchase_rate: "32.1%",
        sore_info: {
          composite_new_score: "5.0",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 5,
          logistics_score: 4,
          return_score: 4,
        },
      },
    },
    {
      item_id: 739661902970,
      product_url: "https://detail.1688.com/offer/739661902970.html",
      title:
        "European and American cross-border jewelry men's five-pointed star braided bracelet necklace set versatile niche high-end jewelryry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN011dSMYN2CWoJDegLCH_!!2206374998482-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "5.61",
      price_info: {
        drop_ship_price: "5.90",
        wholesale_price: "5.61",
        origin_price: "5.90",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "119",
          price: "5.90",
        },
        {
          begin_num: "120",
          end_num: "",
          price: "5.70",
        },
      ],
      sale_info: {
        gmv_30days: "300+",
        gmv_30days_cb: 0,
        sale_quantity: 692,
        orders_count: 33,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.0132,
        suttle_weight: 0,
        free_postage: false,
      },
      item_repurchase_rate: "0.3077",
      goods_score: 5,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 3,
      shop_info: {
        login_id: "Park Xin 2019",
        member_id: "b2b-2206374998482bffbb",
        biz_type: "Production and processing",
        company_name: "Yiwu Puxin E-Commerce Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 5,
        factory_inspection: false,
        shop_repurchase_rate: "23.8%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 4.5,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4,
        },
      },
    },
    {
      item_id: 599940863840,
      product_url: "https://detail.1688.com/offer/599940863840.html",
      title:
        "Sun shape necklace women's star clavicle chain cross-border new European and American style jewelry",
      img: "https://cbu01.alicdn.com/img/ibank/2019/494/975/11657579494_416258445.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "1.50",
      price_info: {
        drop_ship_price: "1.50",
        wholesale_price: "1.50",
        origin_price: "1.50",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "49",
          price: "1.50",
        },
        {
          begin_num: "50",
          end_num: "99",
          price: "1.30",
        },
        {
          begin_num: "100",
          end_num: "",
          price: "1.20",
        },
      ],
      sale_info: {
        gmv_30days: null,
        gmv_30days_cb: 0,
        sale_quantity: 101,
        orders_count: 47,
      },
      type: "normal",
      unit: "PCS",
      delivery_info: {
        area_from: ["Zhejiang", "Jinhua City"],
        weight: 0.01,
        suttle_weight: 0.01,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 3,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 2,
      shop_info: {
        login_id: "Chaishuang e-commerce",
        member_id: "b2b-25831888491f371",
        biz_type: "Production and processing",
        company_name: "Yiwu Zhuishuang E-Commerce Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 9,
        factory_inspection: false,
        shop_repurchase_rate: "30.2%",
        sore_info: {
          composite_new_score: "4.0",
          composite_score: 0,
          consultation_score: 4,
          dispute_score: 4,
          logistics_score: 3,
          return_score: 2.5,
        },
      },
    },
    {
      item_id: 672333818940,
      product_url: "https://detail.1688.com/offer/672333818940.html",
      title:
        "necklace retro large pendant necklace student jewelry wholesale cross-border hot selling street necklace jewelryry",
      img: "https://cbu01.alicdn.com/img/ibank/O1CN01PdC1lS1MP9XOFQXNF_!!2213147401426-0-cib.jpg",
      category_path: ["1037275", "122322005", "54"],
      price: "1.95",
      price_info: {
        drop_ship_price: "2.01",
        wholesale_price: "1.95",
        origin_price: "1.95",
      },
      quantity_begin: 2,
      quantity_prices: [
        {
          begin_num: "2",
          end_num: "35",
          price: "1.95",
        },
        {
          begin_num: "36",
          end_num: "1999",
          price: "1.75",
        },
        {
          begin_num: "2000",
          end_num: "",
          price: "1.46",
        },
      ],
      sale_info: {
        gmv_30days: null,
        gmv_30days_cb: 0,
        sale_quantity: 86,
        orders_count: 31,
      },
      type: "normal",
      unit: "pieces",
      delivery_info: {
        area_from: ["Zhejiang", "Yiwu City"],
        weight: 0.02,
        suttle_weight: 0.02,
        free_postage: false,
      },
      item_repurchase_rate: "0.0",
      goods_score: 3,
      image_dsm_score: 0,
      primary_rank_score: 0,
      buyer_protections: null,
      super_new_product: false,
      byr_inquiry_uv: 0,
      shop_info: {
        login_id: "Beta 3376",
        member_id: "b2b-221314740142624a58",
        biz_type: "Wholesale distribution",
        company_name: "Yiwu Faxin E-Commerce Co., Ltd.",
        service_tags: null,
        tp_member: true,
        tp_year: 3,
        factory_inspection: false,
        shop_repurchase_rate: "37%",
        sore_info: {
          composite_new_score: "4.5",
          composite_score: 0,
          consultation_score: 5,
          dispute_score: 5,
          logistics_score: 3,
          return_score: 4.5,
        },
      },
    },
  ],
};
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

  const router = useRouter();

  return (
    <div className=" lg:py-0 md:py-0 w-full  ">
      <div>
        <div className="">
          {/* PRODUCTS */}
          <div className=" ">
            <div className="flex flex-wrap justify-center items-center gap-x-2 lg:gap-y-3">
              {products?.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" rounded-[8px] relative lg:h-[410px] lg:w-[280px] sm:h-[300px] sm:w-[140px] lg:mb-5 sm:mb-2 cursor-pointer"
                    onClick={() =>
                      window.open(
                        `/product/${encodeURIComponent(item?.product_url)}`
                      )
                    }
                  >
                    <Image
                      src={item?.img}
                      height={280}
                      width={280}
                      alt={item?.title}
                      className="opacity-0 rounded-t-[8px] lg:h-[280px] lg:w-[280px] sm:h-[140px] sm:w-[140px] transition-opacity duration-1000"
                      onLoadingComplete={(img) =>
                        img.classList.remove("opacity-0")
                      }
                    />

                    <div
                      style={{
                        backgroundColor: "#F3F4F6",
                      }}
                      className="bg_prim bottom-0 rounded-bl-[8px] rounded-br-[8px] w-full min-h-[140px] p-3"
                    >
                      <p className="md:text-[14px] sm:text-[10px]   font-sora">
                        {item?.title?.slice(0, 30)}...
                      </p>
                      <p className="md:text-[16px] sm:text-[14px] text-[#F79602] font-bold  font-sora">
                        {"BDT "} {(item?.price * 21).toFixed(2)}
                      </p>
                      <p className="md:text-[14px] sm:text-[10px]   font-sora  border-b border-b-black mb-3">
                        {item?.sale_info?.sale_quantity} Sold
                      </p>
                      <div className="flex lg:my-0 sm:my-auto gap-2 justify-between items-center">
                        <p className="sm:text-[11px] lg:text-[13px]">
                          Seller: {item?.shop_info?.company_name.slice(0, 10)}..
                        </p>
                        <Link
                          href={`/product/${encodeURIComponent(
                            item?.product_url
                          )}`}
                          target="_blank"
                          className="lg:text-[16px] sm:text-[10px] bg-[#fff] px-4 lg:py-2 sm:py-2 rounded-[6px] text-[16px] font-semibold primary_text_color "
                        >
                          View Seller
                        </Link>
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
