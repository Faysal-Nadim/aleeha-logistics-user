"use client";
import Image from "next/image";
import BlogGrid from "./BlogGrid";
import AleehaLogisticssvg from "../../../../public/assets/logo/logo";

const Section5 = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:px-4 sm:px-4  lg:py-0 sm:py-4">
      <div className="max-w-[1280px] mx-auto sm:min-h-[632px] relative bg_sec_light lg:rounded-[37px] sm:rounded-none lg:p-8 sm:p-2 lg:pt-12 sm:pt-6 ">
        <div className="w-full flex flex-col items-center max-w-[800px] mx-auto">
          <div className="flex gap-1 justify-start lg:items-center sm:items-center mb-4">
            <Image
              className="lg:block sm:hidden mb-3"
              src={AleehaLogisticssvg}
              alt="AleehaLogistics logo"
              height={36}
              width={100}
            />
            <Image
              className="lg:hidden sm:block mb-2"
              src={AleehaLogisticssvg}
              alt="AleehaLogistics logo"
              height={23}
              width={60}
            />
            <p className="lg:text-[36px] sm:text-[20px] font-bold  font-sora">
              Blogs
            </p>
          </div>
          <p className="text-[14px] text-center  font-sora  mb-8">
            Join the ranks of our esteemed winners by shopping at
            AleehaLogistics, and you might be the next one to experience the
            exhilaration of claiming a grand prize. Your journey towards winning
            starts here!
          </p>
        </div>
        <div className="w-full h-full lg:overflow-x-hidden sm:overflow-x-auto relative">
          <BlogGrid />

          {/* <BlogCarousol /> */}

          {/* <div className="flex justify-center">
            <Link href={"/blog"} className="btn">
              Read More Blogs
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Section5;
