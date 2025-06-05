import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { imgdburl, server } from "@/server";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence,useInView } from "framer-motion"


// Sparkle effect component that can be reused across variations
export const SparkleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100
        const top = Math.random() * 100
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="text-amber-300 w-4 h-4" />
          </motion.div>
        )
      })}
    </div>
  )
}

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
    <div className="pb-10 relative overflow-hidden">
            <SparkleEffect />
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E8C4B8] opacity-15 blur-3xl dark:opacity-8"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D5B3A5] opacity-15 blur-3xl dark:opacity-8"></div>

      {/* Decorative geometric shapes */}
      <svg
        className="absolute top-20 left-20 text-[#E8C4B8] opacity-20 dark:opacity-10 w-24 h-24"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,10 90,90 10,90" />
      </svg>
      <svg
        className="absolute bottom-20 right-20 text-[#D5B3A5] opacity-20 dark:opacity-10 w-32 h-32"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <rect x="20" y="20" width="60" height="60" rx="10" />
      </svg>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_70%_30%,rgba(232,196,184,0.3),transparent_70%)] -z-10"></div>
      <div className="relative z-20 text-center mt-6 py-3">
        <h1 className="text-lg sm:text-3xl font-bold text-[#B67F6D]">
          Tiny Tiaraa{" "}
          <span className="text-[#C8A79B]">
            Blog
          </span>
        </h1>
        <p className="text-[#8A6D63]/80 text-md mt-1 px-4 text-center leading-relaxed max-w-4xl mx-auto">
          Your go-to destination for the latest trends, expert insights, and timeless inspirations
          in fashion, jewelry, and e-commerce. Stay stylish, stay informed!
        </p>
        <div className="lineafterblog"></div>
      </div>

      <div className="relative z-20 container mx-auto mt-6 px-8 sm:px-10 md:px-16 lg:px-20">
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
                <div className="w-full aspect-[16/9]">
                  <img src={`${imgdburl}${blog.bannerimg?.url}`} alt={blog.title} className="w-full h-full object-cover " />
                </div>
                <div className="px-5 pt-5">
                  <p className="text-gray-500 text-sm">{formatDate(blog.date)}</p>
                  <h2 className="text-lg font-semibold mt-1 hover:text-[#C8A79B]">{blog.title}</h2>
                  <p className="text-gray-700 mt-1 line-clamp-3">{blog?.desc?.replace(/##([^#]+)##/g, "$1")}</p>
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
