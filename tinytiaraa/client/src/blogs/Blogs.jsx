import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { imgdburl, server } from "@/server";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogsdata, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 6;

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`${server}/get-allblog`);
      const liveBlogs = data.blog
      .filter((blog) => blog.isLive) // Filter only live blogs
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (latest first)
      
      setBlogData(liveBlogs);
    } catch (error) {
      console.error("Error fetching Blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(blogsdata.length / blogsPerPage);
  const currentBlogs = blogsdata.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const navigate = useNavigate();

  return (
    <div className="pb-10">
      <div className="text-center mt-6 py-3">
        <h1 className="text-3xl font-bold">
          Tiny Tiaraa{" "}
          <span className="bg-gradient-to-r from-[#34A853] to-[#1E7D32] text-transparent bg-clip-text">
            Blog
          </span>
        </h1>
        <p className="text-gray-600 text-md mt-1 px-4 text-center leading-relaxed max-w-4xl mx-auto">
          Your go-to destination for the latest trends, expert insights, and timeless inspirations
          in fashion, jewelry, and e-commerce. Stay stylish, stay informed!
        </p>
        <div className="lineafterblog"></div>
      </div>

      <div className="container mx-auto mt-6 px-8 sm:px-10 md:px-16 lg:px-20">
        {loading ? (
          // Skeleton Loader while fetching data
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse p-4 border rounded-[8px] shadow-md bg-white">
                <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : blogsdata.length === 0 ? (
          // No blogs available message
          <div className="text-center text-gray-600 mt-5 text-lg">
            No blogs available at the moment. Please check back later.
          </div>
        ) : (
          // Display Blogs after data is fetched
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
            {currentBlogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-[8px] shadow-lg overflow-hidden cursor-pointer" onClick={() => navigate(`/blog/${blog._id}`)}>
                <div className="w-full h-64">
                  <img src={`${imgdburl}${blog.bannerimg?.url}`} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-5 pt-5">
                  <p className="text-gray-500 text-sm">{formatDate(blog.date)}</p>
                  <h2 className="text-lg font-semibold mt-1 hover:text-[#49a9dd]">{blog.title}</h2>
                  <p className="text-gray-700 mt-1 line-clamp-3">{blog.desc}</p>
                </div>
                <div className="px-5 pt-3 pb-5">
                  <button
                    onClick={() => navigate(`/blog/${blog._id}`)}
                    className="text-gray-500 text-sm font-medium hover:text-gray-700 transition-all duration-300"
                  >
                    Read More <span className="pl-1">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages  && blogsdata.length > 0 && (
        <div className="flex justify-center mt-8">
          <Stack spacing={2}>
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" size="large" />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Blogs;
