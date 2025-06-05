import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../Productcard/ProductCard";

const CHUNK_SIZE = 20;

const Homesec4 = ({ products }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const filtered = products
      ?.filter((product) => product?.isLive === undefined || product?.isLive)
      ?.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt)) || [];
    setFilteredData(filtered);
  }, [products]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + CHUNK_SIZE);
  };

  const visibleProducts = filteredData.slice(0, visibleCount);

  return (
    <div className="py-10 px-4 lg:px-16">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#9A7B74]">New Arrivals</h1>
          <p className="text-stone-500 text-sm">Discover the latest additions</p>
        </div>

        {visibleProducts.length > 0 && (
          <div className="flex gap-2 py-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          transition={{ delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            onSwiper={setSwiper}
            className="w-full pb-12"
            observer={true}
            observeParents={true}
          >
            {visibleProducts.map((product, idx) => (
              <SwiperSlide key={ idx} style={{ width: "265px", height: "auto" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  className="h-full select-none"
                >
                  <ProductCard data={product} />
                </motion.div>
              </SwiperSlide>
            ))}

            {visibleCount < filteredData.length && (
              <SwiperSlide style={{ width: "265px" }}>
                <div className="flex items-center justify-center h-[330px] border border-dashed rounded-lg p-4">
                  <button
                    onClick={handleViewMore}
                    className="text-sm px-4 py-2 rounded-sm bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:opacity-90 text-white border-0"
                  >
                    View More
                  </button>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-stone-400 py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          No products found.
        </motion.p>
      )}
    </div>
  );
};

export default Homesec4;
