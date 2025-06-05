"use client"

import { useRef, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import { Star, Heart, Sparkles } from "lucide-react"
import { useSelector } from "react-redux"
import { imgdburl } from "@/server";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const HomeReview = () => {
  const swiperRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const { products = [] } = useSelector((state) => state.products);
  
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
    const names = name.trim().split(" ")
    return names.length === 1 ? names[0][0].toUpperCase() : (names[0][0] + names[names.length - 1][0]).toUpperCase()
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (swiperRef.current) {
      swiperRef.current.autoplay.start()
    }
  }

  return (
    <div className="relative w-full py-10 px-4 md:px-10 font-sans bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparkle Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#E8D5CE]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-radial from-[#F4E7E2]/20 via-[#E8D5CE]/10 to-transparent rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-radial from-[#F9F6F4]/25 via-[#F4E7E2]/15 to-transparent rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <Sparkles className="w-8 h-8 text-[#D4B8A9]" />
            <Heart className="w-10 h-10 text-[#D4B8A9] fill-current" />
            <Sparkles className="w-8 h-8 text-[#D4B8A9]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-1 text-[#8A6D63]"
          >
            Loved by <span className=" text-[#C8A79B]">Thousands</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm sm:text-lg text-[#8A6D63]/80 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of happy customers who have found their perfect piece with us
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true // This helps but we'll handle it manually too
            }}
            loop={true}
            speed={800}
            spaceBetween={30}
            slidesPerView="auto"
            centeredSlides={true}
            grabCursor
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              el: ".review-pagination-3",
              bulletClass: "review-bullet-3",
              bulletActiveClass: "review-bullet-active-3",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="pb-4"
          >
            {uniqueFiveStarReviews?.map((review, idx) => (
              <SwiperSlide
                key={idx}
                className="!w-[350px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  className="relative bg-white w-full h-[400px] rounded-3xl shadow-xl p-8 flex flex-col items-center text-center overflow-hidden border border-[#E8D5CE]/30"
                  // whileHover={{
                  //   y: -15,
                  //   rotateY: 5,
                  //   transition: { duration: 0.4 },
                  // }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#F4E7E2]/70 to-transparent rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#E8D5CE]/60 to-transparent rounded-tl-full" />

                  {/* Floating Sparkles */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 bg-[#D4B8A9] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: idx * 0.3,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-2 h-2 bg-[#D4B8A9] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: idx * 0.2 + 0.5,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center h-full justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative mb-3"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#D4B8A9] to-[#E8D5CE] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg p-1">
                          {review.user?.avatar ? (
                            <img
                              src={`${imgdburl}${review?.user.avatar}`}
                              alt={review.user.name}
                              className="w-14 h-14 rounded-full object-cover shadow"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-[#5D4037] rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {getInitials(review.user?.name)}
                            </div>
                          )}
                        </div>
                        <motion.div
                          className="absolute -inset-2 border-2 border-dashed border-[#E8D5CE]/40 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-md sm:text-xl font-bold text-[#5D4037] mb-1"
                      >
                        {review.user?.name}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1 mb-1"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ delay: i * 0.1 + 0.8 }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-4 h-4 fill-[#FFA000] text-[#FFA000]" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="text-[#5D4037]/90 leading-relaxed text-sm px-2 line-clamp-4 italic"
                    >
                      "{review.comment}"
                    </motion.p>

                    {review.images?.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        viewport={{ once: true }}
                        className="mt-4 flex gap-2"
                      >
                        {review.images.slice(0, 2).map((img, i) => (
                          <div key={i} className="relative group">
                            <Zoom zoomMargin={40}>
                              <motion.img
                                src={`${imgdburl}${img.url}`}
                                alt="Review"
                                className="w-20 h-20 object-cover rounded-lg shadow-md border-2 border-white/80 !cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                              />
                            </Zoom>
                            {/* Persistent overlay fix */}
                            <div className="absolute inset-0 pointer-events-none group-hover:bg-black/5 transition-all duration-300" />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="review-pagination-3 flex justify-center gap-2 mt-8"></div>
        </motion.div>
      </div>

      <style jsx global>{`
        .review-bullet-3 {
          width: 12px;
          height: 12px;
          background: #D4B8A9;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.4s ease;
          opacity: 0.6;
          margin: 0 4px;
        }
        .review-bullet-active-3 {
          background: #5D4037;
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 8px rgba(93, 64, 55, 0.4);
        }
        .swiper-slide {
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .swiper-slide:hover {
          z-index: 10 !important;
        }
      `}</style>
    </div>
  )
}

export default HomeReview