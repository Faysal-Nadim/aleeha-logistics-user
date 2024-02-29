import BlogCard from "@components/landing-page/BlogSection/BlogCard";
import Image from "next/image";
import Link from "next/link";

let authorSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const BlogComponent1 = ({ blogData, suggestedBlog }) => {
  return (
    <div className="   w-full  font-sora">
      <div className="flex lg:flex-row md:flex-row sm:flex-col gap-10 justify-between items-start">
        <div className="flex flex-col gap-10">
          {blogData?.map((x, index) => {
            return (
              <div key={index}>
                {x?.title && (
                  <h1 className="prim_text_2xl mb-6 font-sora text-primary">
                    {x?.title}
                  </h1>
                )}

                {x?.paragraphs?.map((section, index) => {
                  return (
                    <div>
                      {section?.subtitle && (
                        <h2 className="text-[16px] mb-6 font-mr font-bold ">
                          &emsp; {section?.subtitle}
                        </h2>
                      )}
                      {section?.para?.map((p, index) => {
                        return (
                          <p key={index} className="text-[14px] mb-3 font-mr">
                            &emsp; {p}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}

                {x?.image && (
                  <div className="w-full my-8">
                    <Image
                      src={x?.image}
                      height={280}
                      width={600}
                      alt=""
                      className="rounded-[16px] mx-auto lg:w-auto sm:w-full md:w-full "
                    />
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
              <div className="p-4 bg_sec rounded-full">{authorSVG}</div>
              <div>
                <p className="text-[12px] ">Author: </p>
                <p className="text-[14px] font-semibold">AleehaLogistics.net</p>
              </div>
            </div>
            <div>
              <p className="text-[12px] ">Published </p>
              <p className="text-[14px] font-semibold">09/09/2023</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-10 sticky top-28">
          {/* <div className="px-4 py-2 border ">
            <p>More Blogs</p>
          </div> */}
          {suggestedBlog?.map((x, index) => {
            return <BlogCard blog={x} />;
          })}

          <Link rel="canonical" href={"/blog"} className="btn">
            {" "}
            Read More Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent1;
