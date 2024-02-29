import blogs from "../../../../public/blogs";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {blogs?.map((blog, index) => {
        return <BlogCard blog={blog} key={index} />;
      })}
    </div>
  );
};

export default BlogGrid;
