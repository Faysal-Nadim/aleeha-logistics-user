export const metadata = {
  title: "Monthly Draw Winners List - AleehaLogistics",
  description:
    "See AleehaLogistics list of Winners, ur draws are affordable, ensuring that everyone has a shot at taking home incredible prizes",
};

import { Winner } from "@components/winner";

const page = () => {
  return (
    <div className=" lg:px-8 md:px-6 sm:px-4  w-full  font-sora">
      <div className="flex flex-col gap-10">
        <p className="prim_text_2xl mb-0">Our Winners</p>
        {/* <div className="mt-2 mb-6">
          <div className="mt-4">
            <p className="text-[16px] font-medium"></p>
            <p className="text-[14px] mt-2 "></p>
          </div>
        </div> */}
        <Winner />
      </div>
    </div>
  );
};

export default page;
