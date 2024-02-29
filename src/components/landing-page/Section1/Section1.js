import FocusingPrizeWithProduct from "@components/landing-page/Section1/FocusingPrizeWithProduct";
import WinnerPrizeDisplay from "@components/landing-page/Section1/WinnerPrizeDisplay";
import UpcomingCampigns from "./UpcomingCampigns";
import CampaignCarousol from "./CampaignCarousol";
import useWindowDimensions from "@utils/hooks/useWindowDimensions";

const Section1 = () => {
  const { width } = useWindowDimensions();
  return (
    <section className="max-w-[1280px] mx-auto lg:px-4 sm:px-4  lg:py-4 sm:py-4">
      <div
        // flex lg:flex-row sm:flex-col
        // className="h-full grid lg:grid-cols-LS1 md:grid-cols-1 sm:grid-cols-1 justify-between items-start lg:gap-3 sm:gap-6"
        className="h-full flex lg:flex-row sm:flex-col justify-between items-start lg:gap-3 sm:gap-6"
      >
        {/* BIG POSTER PRIZE + PRODUCT */}
        <div
          style={{ width: `${width < 1024 ? 100 : 55}%` }}
          className="sm:w-full md:w-full h-full"
        >
          {/* <FocusingPrizeWithProduct /> */}
          <CampaignCarousol />
        </div>
        {/* BIG POSTER PRIZE + PRODUCT */}
        <div className=" sm:w-full md:w-full flex flex-col lg:gap-3 sm:gap-6 ">
          <div className="">
            <WinnerPrizeDisplay />
          </div>
          <div>
            <UpcomingCampigns />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
