"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const BlogCard = ({ blog }) => {
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname.includes("blog"));
  return (
    <div
      className={
        pathname.includes("blog")
          ? "cursor-pointer bg-white  lg:rounded-3xl sm:rounded-[17px]  hover:scale-95  transition-all ease-in-out"
          : "bg_prim cursor-pointer bg-white  lg:rounded-3xl sm:rounded-[17px]  hover:scale-95 transition-all ease-in-out"
      }
      onClick={() => router.push(`/blog/${blog?.link}`)}
    >
      <Image
        src={blog?.coverImg?.url}
        height={273}
        width={453}
        alt=""
        className="w-full lg:rounded-tl-3xl lg:rounded-tr-3xl sm:rounded-tl-xl sm:rounded-tr-xl "
      />
      <div className="lg:px-6 sm:px-4 py-4 grid grid-cols-1 lg:gap-4 sm:gap-2">
        <h2 className=" lg:text-[14px] sm:text-[14px] text-primary-red font-sora font-[600]">
          {blog?.title}
        </h2>

        <p className=" lg:text-[12px] sm:text-[12px] text-black font-sora">
          {blog?.intro?.slice(0, 240)}..
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
