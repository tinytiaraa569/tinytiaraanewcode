import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { imgdburl, server } from "@/server";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuGlobe } from "react-icons/lu";
import { Link, useSearchParams } from "react-router-dom";

const LinksComponent = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  
  const categoryname = searchParams.get("category"); 
  // let categoryname = "Tabeez Collection"; // Category name to match

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/get-allcategories`);
        setCategoriesData(response.data.categories);
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  const filteredProducts = products
    .filter((product) => product.category === categoryname)
    .slice(0, 3); // Show only first 3 products

  return (
    <div className="!mb-0 flex flex-col rounded-[10px] p-4">
      {/* Product Image List */}
      <div className="py-2 m-auto w-full overflow-hidden cursor-pointer">
        <ul className="flex justify-center gap-4 md:gap-6  md:flex-nowrap flex-wrap">
          
          
          {isLoading ? (
            // Skeleton Loader
            Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse flex flex-col items-center overflow-hidden rounded-[18px] bg-gray-200 px-3 py-2 shadow-sm md:w-[170px] md:px-3 md:py-3 w-[110px]"
                >
                  <div className="w-full h-[120px] md:h-[160px] bg-gray-300 rounded-[18px]"></div>
                  <div className="mt-2 h-4 w-3/4 bg-gray-300 rounded"></div>
                  <div className="mt-1 h-4 w-1/2 bg-gray-300 rounded"></div>
                </div>
              ))
          )
          : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group flex flex-col items-center overflow-hidden rounded-[18px] bg-white px-3 py-2 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md 
                md:w-[170px] md:px-3 md:py-3 w-[110px] " // Adjust for large and small screens
              >
                {/* Product Image */}
                <li className="relative w-full flex justify-center overflow-hidden rounded-[18px]">
                  <img
                    alt={product.name}
                    src={
                      product.images &&
                      product.images[1]?.url?.match(
                        /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/
                      )
                        ? product.images[1].url.replace(
                            /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                            `${imgdburl}/uploads/images`
                          )
                        : `${imgdburl}${product.images && product.images[1]?.url}` ||
                          "/placeholder.jpg"
                    }
                    loading="lazy"
                    className="object-cover  transition-transform duration-300 group-hover:scale-110   
                    md:h-[160px] h-[120px]" // Larger on bigger screens, smaller on mobile
                  />
                </li>

                {/* Product Details */}
                <h1 className=" text-sm font-medium text-gray-700 md:text-base">
                  {product.skuid}
                </h1>
                <p className="text-sm font-[600] text-gray-600 md:text-sm">
                ₹{product?.discountPrice.toLocaleString("en-IN")}
              </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available</p>
          )}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="flex w-full flex-col items-center justify-center pt-[1.1rem] text-center">
        <div className="relative flex flex-col pb-2 text-center text-linkText font-semibold">
          See Full Shop
          <span className="font-normal text-sm opacity-50">
            {filteredProducts.length} Products
          </span>
        </div>
      </div>

    {/* link section */}
    <div className="flex justify-center gap-4 mt-4">
        <Link to="https://www.facebook.com/profile.php?id=61551799145871" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full  text-gray-600 transition-transform duration-200 hover:scale-110 hover:border-blue-600 hover:text-blue-600">
            <FaFacebookF size={20} />
        </Link>

        <Link to="https://www.instagram.com/tiny_tiaraa/" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full  text-gray-600 transition-transform duration-200 hover:scale-110 hover:border-pink-500 hover:text-pink-500">
            <FaInstagram size={20} />
        </Link>

        <Link to="https://www.linkedin.com/company/tiny-tiaraa" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full  text-gray-600 transition-transform duration-200 hover:scale-110 hover:border-blue-700 hover:text-blue-700">
            <FaLinkedinIn size={20} />
        </Link>

        <Link to="mailto:care@tinytiaraa.com"
            className="flex items-center justify-center h-10 w-10 rounded-full  text-gray-600 transition-transform duration-200 hover:scale-110 hover:border-red-500 hover:text-red-500">
            <MdEmail size={22} />
        </Link>

        <Link to="https://www.tinytiaraa.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full  text-gray-600 transition-transform duration-200 hover:scale-110 hover:border-green-600 hover:text-green-600">
            <LuGlobe size={22} />
        </Link>

        <Link to="https://www.pinterest.com/tiny_tiaraa657" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full  text-gray-600 transition-transform duration-200 hover:scale-110 hover:border-red-600 hover:text-red-600">
            <FaPinterestP size={20} />
        </Link>
        </div>

        <div className="flex justify-center mt-4">
        <Link to="https://www.tinytiaraa.com" target="_blank" rel="noopener noreferrer"
            className="text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600">
            www.tinytiaraa.com
        </Link>
        </div>


    </div>
  );
};

export default LinksComponent;
