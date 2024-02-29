import Head from "next/head";
import React from "react";
import AleehaLogisticssvg from "../../../public/assets/logo/logo";

let title = "AleehaLogistics - Join the Joy of Winnnig!";
let metaArray = [
  {
    name: "keywords",
    content: "AleehaLogistics prize campaign win",
  },
  {
    name: "description",
    content:
      "An online shopping experience like no other. With every purchase, luxury prizes including cars, cash, jewellery and watches could be yours!",
  },
];

const HeadComponent = ({ title, metaArray }) => {
  return (
    <Head>
      <link rel="icon" href={AleehaLogisticssvg} />
      <title>{title}</title>
      {metaArray?.map((x, index) => {
        return <meta key={index} name={x?.name} content={x?.content} />;
      })}
    </Head>
  );
};

export default HeadComponent;
