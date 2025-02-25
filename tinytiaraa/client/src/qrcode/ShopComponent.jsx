import React, { useEffect, useState } from "react";
import axios from "axios";
import { imgdburl, server } from "@/server"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

function ShopComponent() {
  const [categoriesData, setCategoriesData] = useState([]);
  const navigate = useNavigate()
  const handleViewProducts = (categoryTitle) => {
    const url = `/products?category=${categoryTitle}`;
    window.open(url, "_blank"); // Opens in a new tab
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls current page to top
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/get-allcategories`);
        setCategoriesData(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  console.log(categoriesData, "categories data");

  return (
    <div className="max-w-5xl mx-auto pt-4 pb-8 px-4">
      <h2 className="text-md font-semibold text-center mb-4">Shop Categories</h2>
      {categoriesData.length > 0 ? (
        <div className="grid grid-cols-2 lg:px-4 gap-4 lg:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {categoriesData.map((category) => (
            <div
              key={category._id}
              data-testid="StyledContainer"
              onClick={() => handleViewProducts(category.title)}
              className="group flex flex-col items-center border cursor-pointer rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div
                
                className="w-full h-48 sm:h-56 overflow-hidden rounded-t-xl"
              >
                <img
                  alt={category?.title || "Category Image"}
                  src={`${imgdburl}${category?.bannerimg?.url}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center w-full  transition-all duration-300">
              <h3 className="text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors truncate whitespace-nowrap overflow-hidden">
                {category?.title?.length > 20 ? category.title.slice(0, 20) + "..." : category.title}
                </h3>

                </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No categories available</p>
      )}
    </div>
  );
}

export default ShopComponent;
