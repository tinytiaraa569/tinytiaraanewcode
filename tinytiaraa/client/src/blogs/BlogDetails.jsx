import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { imgdburl, server } from "@/server";
import { FaArrowLeft, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdAccessTime, MdArticle } from "react-icons/md";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
    window.scrollTo(0, 0);
  }, []);

  const fetchBlogDetails = async () => {
    try {
      const { data } = await axios.get(`${server}/get-blog/${id}`);
      setBlog(data.blog);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold text-gray-600">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center mt-10 text-lg text-red-500 font-semibold">Blog not found!</div>;
  }

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text?.split(" ").length || 0;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const shareUrl = window.location.href;
  const encodedTitle = encodeURIComponent(blog.title);

  console.log(blog,"blog details")

  return (
    <div className="py-8 bg-gradient-to-b from-[white] to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-6  rounded-xl border border-gray-100 shadow-sm">
        {/* Back Button */}
        <button 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={16} />
          <span className="text-sm font-medium">Back to Blogs</span>
        </button>
        

        {/* Blog Title */}
        <div className="mt-3 flex items-center gap-3">
          <MdArticle className="text-slate-700" size={28} />
          <h1 className="text-3xl font-bold text-slate-700 tracking-wide">{blog.title}</h1>
        </div>

        {/* Blog Date & Read Time */}
        <div className="text-gray-500 text-sm mt-2 flex items-center gap-4">
          <span>{new Date(blog.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</span>
          <div className="flex items-center gap-1">
            <MdAccessTime size={15} />
            <span>{calculateReadTime(blog.desc)} min read</span>
          </div>
        </div>

        {/* Blog Image */}
        <div
  className={`w-full h-[400px] mt-5 overflow-hidden rounded-lg shadow-md ${
    blog.link && blog.link.trim() !== "" && blog.link !== "/" ? "cursor-pointer" : "cursor-default"
  }`}
  onClick={() => {
    if (blog.link && blog.link.trim() !== "" && blog.link !== "/") {
      navigate(blog.link); // Navigate only if link is NOT "/"
    }
  }}
>
          <img
            src={`${imgdburl}${blog.bannerimg?.url}`}
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Blog Description */}
        <p className="text-gray-700 leading-relaxed text-lg mt-6 text-justify">{blog.desc}</p>

        {/* Share Buttons */}
        <div className="mt-6 flex items-center gap-4">
            <span className="text-slate-700 font-medium">Share this:</span>

            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300"
            >
                <FaFacebookF size={16} />
            </a>

           

            <a
                href={`https://api.whatsapp.com/send?text=${encodedTitle} - ${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all duration-300"
            >
                <FaWhatsapp size={16} />
            </a>

            <a
                href={`https://www.instagram.com/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
            >
               <i className="fa-brands fa-square-instagram instasty " style={{ cursor: 'pointer' }}></i>
            </a>
            </div>



        {/* Back Button at Bottom */}
        <div className="flex justify-center mt-8">
          <button 
            className="flex items-center gap-2 px-5 py-2.5 text-white rounded-[6px] shadow-md 
                    bg-gradient-to-r from-green-500 to-green-700
                    hover:from-green-600 hover:to-green-800 
                    transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft size={16} /> Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
