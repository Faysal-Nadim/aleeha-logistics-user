"use client";

import axiosInstance from "@app/redux/helpers/axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleMessage = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      topic: topic,
      msg: msg,
    };
    const res = await axiosInstance.post(`/query/submit`, data);

    if (res.status === 201) {
      setName("");
      setEmail("");
      setTopic("");
      setMsg("");
      router.push("/helpcenter/thank-you");
    } else {
      Swal.fire({
        icon: "error",
        title: res.data.msg,
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#000",
      });
    }
  };

  return (
    <div className=" lg:py-0 md:py-0 w-full  ">
      <div className="flex justify-between lg:flex-row sm:flex-col  lg:gap-10 sm:gap-6">
        {/* SEND MESSAGE */}
        <div className="font-sora  max-w-[560px] w-full mx-auto">
          <p className="prim_text_2xl mb-8">Contact</p>
          <p className="text-[12px]">
            Please fill in the form below and a dedicated member of our team
            will be in touch within 24 hours
          </p>

          <form className="mt-8" onSubmit={handleMessage}>
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="input input-bordered text-md primary_text_color w-full max-w-[560px] min-h-[57px] bg_sec"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="input input-bordered text-md primary_text_color w-full max-w-[560px] min-h-[57px] bg_sec"
              />

              <select
                onChange={(e) => setTopic(e.target.value)}
                className="select select-bordered primary_text_color w-full max-w-[560px] min-h-[57px] bg_sec"
              >
                <option
                  value={""}
                  className="primary_text_color text-md py-4 border-b"
                >
                  Select Topic
                </option>
                <option
                  value={"General"}
                  className="primary_text_color py-4 border-b"
                >
                  General Enquiries
                </option>
                <option
                  value={"Technical"}
                  className="primary_text_color py-4 border-b"
                >
                  Technical Issues
                </option>
                <option
                  value={"Payment"}
                  className="primary_text_color py-4 border-b"
                >
                  Payment Issues
                </option>
              </select>

              <textarea
                onChange={(e) => setMsg(e.target.value)}
                className="textarea textarea-bordered text-md primary_text_color min-h-[160px] max-w-[560px] bg_sec"
                placeholder="Message"
              ></textarea>

              <p className="text-[10px] text-primary">
                * Make sure all the fields are filled
              </p>

              <input
                type="submit"
                name=""
                value="Send Message"
                className={
                  name !== "" && email !== "" && topic !== "" && msg !== ""
                    ? " btn rounded-xl btn-primary  lg:w-4/12 sm:w-full "
                    : "btn btn-disabled bg_sec  primary_text_color rounded-xl lg:w-4/12 sm:w-full"
                }
              />
            </div>
          </form>
        </div>
        {/* MAP AND CALL */}
        <div className="font-sora shadow-xl rounded-xl bg_sec max-w-[560px] w-full mx-auto">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.911790707525!2d55.14353289999999!3d25.0709787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cae62b2630d%3A0xc3b17478e61f959a!2sJumeirah%20Business%20Center%201%20-%20Jumeirah%20Lake%20Towers%20-%20Dubai!5e0!3m2!1sen!2sae!4v1689765880796!5m2!1sen!2sae"
            // width="600"
            height="280"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-tl-xl rounded-tr-xl w-full"
          ></iframe> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9295162303056!2d114.15450497547565!3d22.280659643606622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064ddb485b7%3A0xfbbee070a9d6123c!2sNew%20World%20Tower%20I!5e0!3m2!1sen!2sbd!4v1698010832822!5m2!1sen!2sbd"
            height="280"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-tl-xl rounded-tr-xl w-full"
          ></iframe>

          <div className="p-10">
            <p className="lg:text-[18px] sm:text-[16px] font-bold">
              AleehaLogistics Headquarters
            </p>

            <div className=" border-b border-[#1A1A1A] pb-6 pt-3 my-2 text-[14px] font-mr">
              <p></p>
              <p>New World Tower 1</p>
              <p>Hong Kong</p>
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
              {/* <div>
                <p className="text-xs ">Call us now</p>
                <a
                  href="tel:+97144562309"
                  className="lg:text-[18px] sm:text-xl font-bold font-mr "
                >
                  +971 44 562 309
                </a>
              </div> */}
              <div>
                <p className="text-xs">Write us an email</p>
                <a
                  href="mailto:info@AleehaLogistics.ae"
                  className="lg:text-[18px] sm:text-xl font-bold font-mr "
                >
                  info@AleehaLogistics.ae
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
