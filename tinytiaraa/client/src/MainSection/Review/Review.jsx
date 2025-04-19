import React, { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoStarSharp, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { imgdburl } from "@/server";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Review = () => {
  const { products = [] } = useSelector((state) => state.products);
  const swiperRef = useRef(null);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const uniqueFiveStarReviews = useMemo(() => {
    const seenProductIds = new Set();
    const uniqueReviews = [];

    for (const product of products) {
      if (!product?.reviews) continue;

      const review = product.reviews.find(
        (r) =>
          r.rating === 5 &&
          r.images &&
          r.images.length > 0 &&
          !seenProductIds.has(product._id)
      );

      if (review) {
        seenProductIds.add(product._id);
        uniqueReviews.push({
          ...review,
          productId: product._id,
          product,
        });
      }
    }

    return shuffleArray(uniqueReviews).slice(0, 6);
  }, [products]);

  const getInitials = (name = "") => {
    const names = name.trim().split(" ");
    return names.length === 1
      ? names[0][0].toUpperCase()
      : (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-10 px-4 md:px-10 font-poppins bg-white"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold text-center mb-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent"
      >
        What Our Customers Say
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-4xl mx-auto mb-6 text-md"
      >
        Hear from our happy customers who have experienced the beauty, elegance,
        and craftsmanship of our jewelry. Their words reflect the love and trust
        they have in us!
      </motion.p>

      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Navigation Arrows */}
        <button
          className="swiper-button-prev-custom absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 border border-gray-100 bg-white shadow-md hover:bg-gray-100 rounded-full p-1.5 flex items-center justify-center"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <IoChevronBack size={15} />
        </button>

        <button
          className="swiper-button-next-custom absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 border border-gray-100 bg-white shadow-md hover:bg-gray-100 rounded-full p-1.5 flex items-center justify-center"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IoChevronForward size={15} />
        </button>

        {uniqueFiveStarReviews.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 3500, disableOnInteraction: true }}
              loop={uniqueFiveStarReviews.length > 3}
              speed={700}
              spaceBetween={12}
              slidesPerView={1}
              grabCursor
              pagination={{
                clickable: true,
                el: ".review-pagination",
                bulletClass: "review-bullet",
                bulletActiveClass: "review-bullet-active",
              }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-8"
            >
              {uniqueFiveStarReviews.map((review, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  <motion.div
                    className="my-2 bg-white w-[300px] sm:w-[310px] md:w-[320px] lg:w-[340px] h-[360px] rounded-2xl border border-gray-200 shadow-lg px-5 py-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.12 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                  >
                    <div className="flex flex-col items-center mb-2">
                      {review.user?.avatar ? (
                        <img
                          src={`${imgdburl}${review.user.avatar}`}
                          alt={review.user.name}
                          className="w-14 h-14 rounded-full object-cover shadow mb-2"
                        />
                      ) : (
                        <div className="w-14 h-14 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                          {getInitials(review.user?.name)}
                        </div>
                      )}
                      <span className="text-lg font-semibold text-gray-800">
                        {review.user?.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-[2px] text-yellow-500 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <IoStarSharp className="w-4 h-4" />
                        </motion.div>
                      ))}
                    </div>

                    {review.images?.length > 0 && (
                      <div className="flex gap-2 mb-3 justify-center">
                        {review.images.slice(0, 2).map((img, i) => (
                          <Zoom key={i} zoomMargin={40}>
                            <motion.img
                              src={`${imgdburl}${img.url}`}
                              alt="Review"
                              className="w-20 h-20 object-cover rounded-[5px] shadow-sm !cursor-grab"
                              whileHover={{ scale: 1.05 }}
                            />
                          </Zoom>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-gray-700 italic leading-relaxed px-2 max-w-full line-clamp-3">
                      "{review.comment}"
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom pagination with Rolex green */}
            <div className="review-pagination flex justify-center gap-1.5 !h-3"></div>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12">No reviews to show yet.</p>
        )}
      </div>

      <style jsx global>{`
        .review-bullet {
          width: 8px;
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.8;
        }
        .review-bullet-active {
          width: 24px;
          height: 8px;
          background: #006241; /* Rolex green color */
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
    </motion.div>
  );
};

export default Review;
