"use client";

import { useState } from "react";
// import hero_winner_red from "../../../../public/assets/landingPage/section1/logo_red.png";
import Image from "next/image";
import { hero_winner_red_landing_page } from "../../../../public/assets/images";

const WinnerPrizeDisplay = () => {
  const [data, setData] = useState({
    image: hero_winner_red_landing_page,
  });
  return (
    <div>
      <Image
        src={data?.image}
        height={230}
        width={530}
        alt="AleehaLogistics Banner"
        className="rounded-[16px] lg:w-auto sm:w-full md:w-full opacity-0 transition-opacity duration-1000"
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
      />
    </div>
  );
};

export default WinnerPrizeDisplay;
