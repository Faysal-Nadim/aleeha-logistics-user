"use client";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useEffect, useRef, useState } from "react";
import blogs from "../../../../public/blogs";
import useWindowDimensions from "@utils/hooks/useWindowDimensions";

const BlogCarousol = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const w = windowSize?.current[0];

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 480) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
      setCellSpacing(2);
    } else if (width > 480 && width < 1024) {
      setSlidesToShow(2);
      setSlidesToScroll(1);
      setCellSpacing(2);
    }
  }, [width]);

  console.log(width);

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        cellAlign="left"
        cellSpacing={cellSpacing}
        wrapAround={true}
        autoplay={true}
        zoomScale={0.8}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className="p-1 border rounded-full"
            onClick={previousSlide}
            aria-label="click left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            className="p-1 border rounded-full"
            onClick={nextSlide}
            aria-label="click right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      >
        {blogs?.map((blog, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer  bg_prim lg:rounded-3xl sm:rounded-[17px]"
              onClick={() => router(`${blog?.link}`)}
            >
              <Image
                src={blog?.coverImg?.url}
                height={273}
                width={453}
                alt=""
                className="w-full rounded-tl-3xl rounded-tr-3xl  lg:block sm:hidden"
              />
              <Image
                src={blog?.coverImg?.url}
                height={193}
                width={320}
                alt=""
                className="w-full rounded-tl-[17px] rounded-tr-[17px] lg:hidden sm:block"
              />
              <div className="px-6 py-4 grid grid-cols-1 lg:gap-4 sm:gap-2">
                <p className=" lg:text-[14px] sm:text-[10px] text-primary-red font-sora font-[600]">
                  {blog?.title}
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className=" lg:text-[12px] sm:text-[10px] text-black font-sora mt-2">
                      {blog?.intro}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default BlogCarousol;
