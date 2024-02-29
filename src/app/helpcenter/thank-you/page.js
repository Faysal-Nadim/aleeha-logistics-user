"use client";
import React from "react";
import Image from "next/image";
import { email } from "../../../../public/assets/images";
import { emailSVG } from "../../../../public/assets/Icons";
import Script from "next/script";
import { useRouter } from "next/navigation";

/**
 * @author
 * @function page
 **/

const page = (props) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center lg:py-0 md:py-0 w-full  ">
      <div className="flex flex-col gap-6 justify-center items-center primary_text_color">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-48 h-48"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div>
          <p className="text-xl font-semibold font-sora text-center">
            Thank You For Your Message.
            <br /> We Will Get Back To You As Soon As Possible.
          </p>
        </div>
        <button
          className="btn btn-primary mt-5"
          onClick={() => router.push("/")}
        >
          Back To Home
        </button>
      </div>
      <Script>
        {`gtag('event', 'conversion', {'send_to': 'AW-11280973564/4XbrCIvoytAYEPz9l4Mq'});`}
      </Script>
    </div>
  );
};

export default page;
