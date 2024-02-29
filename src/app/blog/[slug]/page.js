"use client";

import BlogComponent1 from "@components/blog/BlogComponent1";
import blogs from "../../../../public/blogs";
import { useState } from "react";
import { useEffect } from "react";

const page = ({ params }) => {
  const blogLink = params.slug;

  console.log(blogLink);
  const [data, setData] = useState([]);
  const [suggestedBlog, setSuggestedBlog] = useState([]);

  useEffect(() => {
    let temBlog = blogs?.find((x) => {
      return x?.link == blogLink;
    });
    let temSuggestedBlog = blogs?.filter((x) => {
      return x?.link != blogLink;
    });
    setData(temBlog?.data);
    setSuggestedBlog(temSuggestedBlog);
  }, [blogLink]);

  return <BlogComponent1 blogData={data} suggestedBlog={suggestedBlog} />;
};

export default page;
