// "use client"
// import { useRef, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules"
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
// import home1banner from './homebanner/1img.webp'

// import home2banner from './homebanner/2img.webp'
// import home3banner from './homebanner/3img.webp'
// import home4banner from './homebanner/4img.webp'


// import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import "swiper/css/effect-fade"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// const sliderData = [
//   {
//     id: 1,
//     title: "Precious  Treasures",
//     description:
//       "Delicate and beautiful jewelry designed specifically for your little ones. Our baby collection features safe materials and adorable designs.",
//     image: home1banner,
//     buttonText: "Explore Collection",
//     color: "from-[#ffe4e6] to-[#fbcfe8]",
//     textColor: "text-[#881337]",
//   },
//   {
//     id: 2,
//     title: "Sparkling Memories",
//     description:
//       "Create lasting memories with our special occasion jewelry for kids. Perfect for birthdays, christenings, and other milestone celebrations.",
//     image: home2banner,
//     buttonText: "View Special Pieces",
//     color: "from-purple-100 to-indigo-200",
//     textColor: "text-purple-900",
//   },
//   {
//     id: 3,
//     title: "Playful Elegance",
//     description:
//       "Colorful and playful designs that children love to wear. Our kids jewelry collection combines fun elements with quality craftsmanship.",
//     image: home3banner,
//     buttonText: "Discover More",
//     color: "from-amber-100 to-yellow-200",
//     textColor: "text-amber-900",
//   },
//   {
//     id: 4,
//     title: "Heirloom Quality",
//     description:
//       "Timeless pieces crafted to be passed down through generations. Our premium baby jewelry makes the perfect gift for welcoming a new family member.",
//     image: home4banner,
//     buttonText: "Shop Heirlooms",
//     color: "from-teal-100 to-emerald-200",
//     textColor: "text-teal-900",
//   },
// ]

// const HomeSec1 = () => {
//   const swiperRef = useRef(null)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isBeginning, setIsBeginning] = useState(true)
//   const [isEnd, setIsEnd] = useState(false)

//   const handlePrev = () => {
//     swiperRef.current?.slidePrev()
//   }

//   const handleNext = () => {
//     swiperRef.current?.slideNext()
//   }

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex)
//     setIsBeginning(swiper.isBeginning)
//     setIsEnd(swiper.isEnd)
//   }

//   return (
//     <div className="relative w-full overflow-hidden">
//       <Swiper
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper
//         }}
//         modules={[Pagination, Navigation, Autoplay, EffectFade]}
//         effect="fade"
//         speed={1000}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             return `<span class="${className} w-3 h-3 bg-gray-300 opacity-70 transition-all duration-300 hover:bg-gray-800"></span>`
//           },
//         }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop={true}
//         className="w-full jewelry-slider"
//         onSlideChange={handleSlideChange}
//       >
//         {sliderData.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[780px] w-full flex items-center overflow-hidden">
//               <div className={cn("absolute inset-0 z-0 bg-gradient-to-r transition-opacity duration-1000", slide.color)} />
//               <motion.div
//                 initial={{ scale: 1.1, opacity: 0.7 }}
//                 animate={{
//                   scale: 1,
//                   opacity: 0.9,
//                   transition: { duration: 8, ease: "easeOut" },
//                 }}
//                 className="absolute inset-0 z-0"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent z-10" />
//               <div className="container mx-auto px-4 md:px-6 z-20">
//                 <div className="max-w-xl md:max-w-2xl">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={`content-${activeIndex}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <motion.span
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium mb-4"
//                       >
//                         Collection {index + 1}
//                       </motion.span>

//                       <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className={cn("text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight", slide.textColor)}
//                       >
//                         {slide.title}
//                       </motion.h2>

//                       <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                         className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"
//                       >
//                         {slide.description}
//                       </motion.p>

//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.4 }}
//                       >
//                         <Button
//                           size="lg"
//                           className={cn(
//                             "bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 group shadow-lg rounded-md",
//                             "transition-all duration-300 hover:shadow-xl"
//                           )}
//                         >
//                           {slide.buttonText}
//                           <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                         </Button>
//                       </motion.div>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 0.7, scale: 1 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20 backdrop-blur-md hidden md:block"
//               />
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 0.5, scale: 1 }}
//                 transition={{ duration: 1, delay: 0.7 }}
//                 className="absolute top-20 right-20 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm hidden md:block"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="container mx-auto px-4 md:px-6">
//         <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handlePrev}
//             className={cn(
//               "flex items-center justify-center w-12 h-12 rounded-full",
//               "bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300",
//               "hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
//             )}
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-800" />
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleNext}
//             className={cn(
//               "flex items-center justify-center w-12 h-12 rounded-full",
//               "bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300",
//               "hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
//             )}
//             aria-label="Next slide"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-800" />
//           </motion.button>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-8 z-30 hidden md:flex items-center space-x-2">
//         {sliderData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => swiperRef.current?.slideTo(index)}
//             className={cn(
//               "w-10 h-2 rounded-full transition-all duration-300",
//               activeIndex === index ? "bg-[#D7A295] w-16" : "bg-gray-300 hover:bg-gray-400"
//             )}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default HomeSec1



"use client"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import home1banner from './homebanner/1img.webp'

import home2banner from './homebanner/2img.webp'
import home3banner from './homebanner/3img.webp'
import home4banner from './homebanner/4img.webp'


import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { imgdburl, server } from "@/server"
import axios from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const sliderData = [
  {
    id: 1,
    title: "Precious  Treasures",
    description:
      "Delicate and beautiful jewelry designed specifically for your little ones. Our baby collection features safe materials and adorable designs.",
    image: home1banner,
    buttonText: "Explore Collection",
    color: "from-[#ffe4e6] to-[#fbcfe8]",
    textColor: "text-[#881337]",
  },
  {
    id: 2,
    title: "Sparkling Memories",
    description:
      "Create lasting memories with our special occasion jewelry for kids. Perfect for birthdays, christenings, and other milestone celebrations.",
    image: home2banner,
    buttonText: "View Special Pieces",
    // color: "from-purple-100 to-indigo-200",
    // textColor: "text-purple-900",
    color: "from-[#f3e8ff] to-[#c7d2fe]",
    textColor: "text-[#581c87]",
  },
  {
    id: 3,
    title: "Playful Elegance",
    description:
      "Colorful and playful designs that children love to wear. Our kids jewelry collection combines fun elements with quality craftsmanship.",
    image: home3banner,
    buttonText: "Discover More",
    // color: "from-amber-100 to-yellow-200",
    // textColor: "text-amber-900",
    color: "from-[#fef3c7] to-[#fef08a]",
    textColor: "text-[#78350f]",
  },
  {
    id: 4,
    title: "Heirloom Quality",
    description:
      "Timeless pieces crafted to be passed down through generations. Our premium baby jewelry makes the perfect gift for welcoming a new family member.",
    image: home4banner,
    buttonText: "Shop Heirlooms",
    // color: "from-teal-100 to-emerald-200",
    // textColor: "text-teal-900",
    color: "from-[#ccfbf1] to-[#a7f3d0]",
    textColor: "text-[#134e4a]",
  },
]



const HomeSec1 = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const navigate = useNavigate()

   const { data: banners, isLoading } = useQuery(
    'banners',
    async () => {
      const response = await axios.get(`${server}/get-allbanners`)
      if (response.data.success) {
        return response.data.banners
          .filter((banner) => banner.live)
          .sort((a, b) => a.order - b.order)
      }
      throw new Error('Failed to fetch banners')
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    }
  )

  console.log(banners,'banners')

  const handlePrev = () => {
    swiperRef.current?.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.slideNext()
  }

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex)
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  // Render nothing until data is fetched
  if (isLoading) {
    return (
     <div className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[780px] w-full flex items-center overflow-hidden">
              <div className={cn("absolute inset-0 z-0 bg-gradient-to-r transition-opacity duration-1000", 'from-[#ffe4e6] to-[#fbcfe8]')} />
              <motion.div
                initial={{ scale: 1.1, opacity: 0.7 }}
                animate={{
                  scale: 1,
                  opacity: 0.9,
                  transition: { duration: 8, ease: "easeOut" },
                }}
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(https://admin.tinytiaraa.com/uploads/images/banners/f572290b87c4d97a9257.webp)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent z-10" />
              <div className="container mx-auto px-4 md:px-6 z-20">
                <div className="max-w-xl md:max-w-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium mb-4"
                      >
                       Bracelet Collection
                      </motion.span>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={cn("text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight", 'text-[#881337]')}
                      >
                        Precious Treasures
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"
                      >
                        Delicate and beautiful jewelry designed specifically for your little ones. Our baby collection features safe materials and adorable designs.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Button
                          size="lg"
                          className={cn(
                            "bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 group shadow-lg rounded-md",
                            "transition-all duration-300 hover:shadow-xl"
                          )}
                        >
                          Explore Collection
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20 backdrop-blur-md hidden md:block"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-20 right-20 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm hidden md:block"
              />
            </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-gray-300 opacity-70 transition-all duration-300 hover:bg-gray-800"></span>`
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full jewelry-slider"
        onSlideChange={handleSlideChange}
      >
        {banners?.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[780px] w-full flex items-center overflow-hidden">
              <div className={cn("absolute inset-0 z-0 bg-gradient-to-r transition-opacity duration-1000", slide.color)} />
              <motion.div
                initial={{ scale: 1.1, opacity: 0.7 }}
                animate={{
                  scale: 1,
                  opacity: 0.9,
                  transition: { duration: 8, ease: "easeOut" },
                }}
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${imgdburl}${slide?.images[0]?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent z-10" />
              <div className="container mx-auto px-4 md:px-6 z-20">
                <div className="max-w-xl md:max-w-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium mb-4"
                      >
                       {slide?.collectionname}
                      </motion.span>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={cn("text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight", slide.textColor)}
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"
                      >
                        {slide.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Button
                          size="lg"
                          className={cn(
                            "cursor-pointer bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 group shadow-lg rounded-md",
                            "transition-all duration-300 hover:shadow-xl"
                          )}
                           onClick={() => slide?.link && navigate(`/${slide?.link}`)}
                        >
                          {slide.btntext}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20 backdrop-blur-md hidden md:block"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-20 right-20 w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm hidden md:block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container mx-auto px-4 md:px-6">
        <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full",
              "bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300",
              "hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full",
              "bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300",
              "hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-30 hidden md:flex items-center space-x-2">
        {banners?.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={cn(
              "w-10 h-2 rounded-full transition-all duration-300",
              activeIndex === index ? "bg-[#D7A295] w-16" : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeSec1



