"use client";
import Carousel from "nuka-carousel";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignCard from "./CampaignCard";
import AddToCartDetailsModule from "../shared/AddToCartDetailsModule";

const CampaignCarousol = () => {
  const [show, setShow] = useState(false);
  const [priceDetails, setPriceDetails] = useState(null);

  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);

  //   console.log(heroData);

  //1,2,0

  const handleCart = (item) => {
    const qty = 1;
    dispatch(addToCart(item, qty));
  };

  return (
    <section className="w-full h-full">
      {/* <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        cellAlign="left"
        cellSpacing={0}
        wrapAround={true}
        autoplay={true}
        autoplayInterval={4000}
        zoomScale={0.8}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} aria-label="click left"></button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} aria-label="click right"></button>
        )}
      >
        <CampaignCard
          campaignData={heroData[4]}
          setShow={setShow}
          setPriceDetails={setPriceDetails}
        />
        <CampaignCard
          campaignData={heroData[3]}
          setShow={setShow}
          setPriceDetails={setPriceDetails}
        />
        <CampaignCard
          campaignData={heroData[1]}
          setShow={setShow}
          setPriceDetails={setPriceDetails}
        />
        <CampaignCard
          campaignData={heroData[2]}
          setShow={setShow}
          setPriceDetails={setPriceDetails}
        />
      </Carousel> */}

      {
        <AddToCartDetailsModule
          show={show}
          setShow={setShow}
          priceDetails={priceDetails}
          handleCart={handleCart}
        />
      }
    </section>
  );
};

export default CampaignCarousol;

//  {campaign?.campaigns?.hero && (
//           <CampaignCard
//             campaignData={campaign?.campaigns?.hero[1]}
//             setShow={setShow}
//             setPriceDetails={setPriceDetails}
//           />
//         )}
//         {campaign?.campaigns?.hero && (
//           <CampaignCard
//             campaignData={campaign?.campaigns?.hero[2]}
//             setShow={setShow}
//             setPriceDetails={setPriceDetails}
//           />
//         )}
//         {campaign?.campaigns?.hero && (
//           <CampaignCard
//             campaignData={campaign?.campaigns?.hero[0]}
//             setShow={setShow}
//             setPriceDetails={setPriceDetails}
//           />
//         )}
