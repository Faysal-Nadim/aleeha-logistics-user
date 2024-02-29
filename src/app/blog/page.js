export const metadata = {
  title: " Emirates Lottery Blog - AleehaLogistics",
  description:
    "Looking for info related to Emirates lottery? Read more in AleehaLogistics blog posts updated with new articles",
};

import BlogGrid from "@components/landing-page/BlogSection/BlogGrid";

const page = () => {
  return (
    <div className="  w-full  font-sora">
      <div className="flex flex-col gap-10">
        <h1 className="prim_text_2xl font-sora mb-0">Blogs</h1>

        <div className="">
          <BlogGrid />
        </div>
      </div>
    </div>
  );
};

export default page;
