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

const sliderData = [
  {
    id: 1,
    title: "Precious  Treasures",
    description:
      "Delicate and beautiful jewelry designed specifically for your little ones. Our baby collection features safe materials and adorable designs.",
    image: home1banner,
    buttonText: "Explore Collection",
    color: "from-rose-100 to-pink-200",
    textColor: "text-rose-900",
  },
  {
    id: 2,
    title: "Sparkling Memories",
    description:
      "Create lasting memories with our special occasion jewelry for kids. Perfect for birthdays, christenings, and other milestone celebrations.",
    image: home2banner,
    buttonText: "View Special Pieces",
    color: "from-purple-100 to-indigo-200",
    textColor: "text-purple-900",
  },
  {
    id: 3,
    title: "Playful Elegance",
    description:
      "Colorful and playful designs that children love to wear. Our kids jewelry collection combines fun elements with quality craftsmanship.",
    image: home3banner,
    buttonText: "Discover More",
    color: "from-amber-100 to-yellow-200",
    textColor: "text-amber-900",
  },
  {
    id: 4,
    title: "Heirloom Quality",
    description:
      "Timeless pieces crafted to be passed down through generations. Our premium baby jewelry makes the perfect gift for welcoming a new family member.",
    image: home4banner,
    buttonText: "Shop Heirlooms",
    color: "from-teal-100 to-emerald-200",
    textColor: "text-teal-900",
  },
]

const HomeSec1 = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

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
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[760px] w-full flex items-center overflow-hidden">
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
                  backgroundImage: `url(${slide.image})`,
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
                        Collection {index + 1}
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
                        {slide.description}
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
                          {slide.buttonText}
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
        {sliderData.map((_, index) => (
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




// "use client"
// import { useRef, useState, useEffect } from "react"
// import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from "framer-motion"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow } from "swiper/modules"
// import  { Swiper as SwiperType } from "swiper"
// import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import "swiper/css/effect-fade"
// import "swiper/css/effect-coverflow"

// const sliderData = [
//   {
//     id: 1,
//     title: "Precious Little Treasures",
//     description:
//       "Delicate and beautiful jewelry designed specifically for your little ones. Our baby collection features safe materials and adorable designs.",
//     image: "https://media.istockphoto.com/id/1383963893/photo/cute-baby-girl-feeling-happy-trying-on-a-lot-of-finger-rings-and-bracelets-bijou-jewelry.jpg?s=612x612&w=0&k=20&c=X-MdFegJ4g4yzPXzls8855IiwqusfKIphMMgHSgnhtA=",
//     buttonText: "Explore Collection",
//     color: "from-rose-100 to-pink-200",
//     textColor: "text-rose-900",
//     accent: "bg-rose-500",
//   },
//   {
//     id: 2,
//     title: "Sparkling Memories",
//     description:
//       "Create lasting memories with our special occasion jewelry for kids. Perfect for birthdays, christenings, and other milestone celebrations.",
//     image: "/placeholder.svg?height=600&width=800",
//     buttonText: "View Special Pieces",
//     color: "from-purple-100 to-indigo-200",
//     textColor: "text-purple-900",
//     accent: "bg-purple-500",
//   },
//   {
//     id: 3,
//     title: "Playful Elegance",
//     description:
//       "Colorful and playful designs that children love to wear. Our kids jewelry collection combines fun elements with quality craftsmanship.",
//     image: "/placeholder.svg?height=600&width=800",
//     buttonText: "Discover More",
//     color: "from-amber-100 to-yellow-200",
//     textColor: "text-amber-900",
//     accent: "bg-amber-500",
//   },
//   {
//     id: 4,
//     title: "Heirloom Quality",
//     description:
//       "Timeless pieces crafted to be passed down through generations. Our premium baby jewelry makes the perfect gift for welcoming a new family member.",
//     image: "/placeholder.svg?height=600&width=800",
//     buttonText: "Shop Heirlooms",
//     color: "from-teal-100 to-emerald-200",
//     textColor: "text-teal-900",
//     accent: "bg-teal-500",
//   },
// ]

// // Floating particle animation component
// const FloatingParticle = ({ delay = 0, size = 8, color = "bg-white", className = "" }) => {
//   const y = useMotionValue(0)
//   const x = useMotionValue(0)

//   const controls = useAnimation()

//   useEffect(() => {
//     const animateParticle = async () => {
//       await controls.start({
//         y: [-20, -40, -20],
//         x: [0, 10, 0],
//         opacity: [0, 1, 0],
//         scale: [0.8, 1, 0.8],
//         transition: {
//           duration: 4 + Math.random() * 3,
//           repeat: Number.POSITIVE_INFINITY,
//           delay: delay,
//           ease: "easeInOut",
//         },
//       })
//     }

//     animateParticle()
//   }, [controls, delay])

//   return (
//     <motion.div
//       className={cn("rounded-full absolute", color, className)}
//       style={{
//         width: size,
//         height: size,
//         x,
//         y,
//       }}
//       animate={controls}
//     />
//   )
// }

// // Animated decorative element
// const DecorativeElement = ({ className, delay = 0, size = "w-32 h-32" }) => {
//   const controls = useAnimation()

//   useEffect(() => {
//     controls.start({
//       rotate: [0, 360],
//       transition: {
//         duration: 20,
//         repeat: Number.POSITIVE_INFINITY,
//         ease: "linear",
//         delay,
//       },
//     })
//   }, [controls, delay])

//   return (
//     <motion.div className={cn("absolute rounded-full backdrop-blur-md", size, className)} animate={controls}>
//       <motion.div
//         className="absolute inset-0 rounded-full opacity-50"
//         animate={{
//           boxShadow: [
//             "0 0 20px 5px rgba(255,255,255,0.3)",
//             "0 0 30px 8px rgba(255,255,255,0.5)",
//             "0 0 20px 5px rgba(255,255,255,0.3)",
//           ],
//           transition: {
//             duration: 3,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           },
//         }}
//       />
//     </motion.div>
//   )
// }

// // Animated text reveal component
// const AnimatedText = ({ children, delay = 0, className = "" }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   )
// }

// // Animated sparkle effect
// const SparkleEffect = ({ color = "bg-yellow-300" }) => {
//   const controls = useAnimation()
//   const x = useMotionValue(0)
//   const y = useMotionValue(0)
//   const rotate = useMotionValue(0)
//   const scale = useMotionValue(0)

//   useEffect(() => {
//     const randomX = Math.random() * 100 - 50
//     const randomY = Math.random() * 100 - 50
//     const randomRotate = Math.random() * 360

//     x.set(randomX)
//     y.set(randomY)
//     rotate.set(randomRotate)

//     const animateSparkle = async () => {
//       await controls.start({
//         scale: [0, 1, 0],
//         opacity: [0, 1, 0],
//         transition: {
//           duration: 1.5,
//           ease: "easeInOut",
//         },
//       })

//       // Set new random position
//       const newX = Math.random() * 100 - 50
//       const newY = Math.random() * 100 - 50
//       const newRotate = Math.random() * 360

//       x.set(newX)
//       y.set(newY)
//       rotate.set(newRotate)

//       // Repeat animation
//       animateSparkle()
//     }

//     animateSparkle()
//   }, [controls, x, y, rotate])

//   return (
//     <motion.div
//       className={cn("absolute w-3 h-3", color)}
//       style={{
//         x,
//         y,
//         rotate,
//         scale,
//       }}
//       animate={controls}
//     >
//       <Star className="w-full h-full text-yellow-100" />
//     </motion.div>
//   )
// }

// const HomeSec1 = () => {
//    const swiperRef = useRef(null)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isBeginning, setIsBeginning] = useState(true)
//   const [isEnd, setIsEnd] = useState(false)
//   const [effect, setEffect] = useState("fade")
//   const progressValue = useMotionValue(0)
//   const progressWidth = useTransform(progressValue, [0, 100], ["0%", "100%"])

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

//     // Update progress bar
//     const progress = (swiper.realIndex / (sliderData.length - 1)) * 100
//     progressValue.set(progress)
//   }

//   // Toggle effect on click
//   const toggleEffect = () => {
//     setEffect(effect === "fade" ? "coverflow" : "fade")
//   }

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Effect toggle button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={toggleEffect}
//         className="absolute top-4 right-4 z-50 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-sm font-medium"
//       >
//         Switch Effect
//       </motion.button>

//       <Swiper
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper
//         }}
//         modules={[Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow]}
//         effect={effect}
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
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//       >
//         {sliderData.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-[550px] md:h-[650px] lg:h-[700px] w-full flex items-center overflow-hidden">
//               {/* Background gradient with animated transition */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.5 }}
//                 className={cn("absolute inset-0 z-0 bg-gradient-to-r", slide.color)}
//               />

//               {/* Background image with parallax and zoom effect */}
//               <motion.div
//                 initial={{ scale: 1.2, opacity: 0.5 }}
//                 animate={{
//                   scale: 1,
//                   opacity: 0.9,
//                   transition: { duration: 10, ease: "easeOut" },
//                 }}
//                 className="absolute inset-0 z-0"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Animated overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 />
//               </motion.div>

//               {/* Floating particles */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {[...Array(15)].map((_, i) => (
//                   <FloatingParticle
//                     key={i}
//                     delay={i * 0.2}
//                     size={4 + Math.random() * 6}
//                     color={i % 3 === 0 ? slide.accent : "bg-white/60"}
//                     className={`top-[${Math.random() * 100}%] left-[${Math.random() * 100}%]`}
//                   />
//                 ))}
//               </div>

//               {/* Content */}
//               <div className="container mx-auto px-4 md:px-6 z-20">
//                 <div className="max-w-xl relative">
//                   {/* Sparkle effects around content */}
//                   <div className="absolute inset-0 w-full h-full pointer-events-none">
//                     {[...Array(5)].map((_, i) => (
//                       <SparkleEffect key={i} />
//                     ))}
//                   </div>

//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={`content-${activeIndex}`}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -30 }}
//                       transition={{ duration: 0.7 }}
//                       className="relative"
//                     >
//                       {/* Collection badge with shimmer effect */}
//                       <motion.div
//                         className="relative inline-block mb-4 overflow-hidden"
//                         initial={{ x: -50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 0.1 }}
//                       >
//                         <span className="inline-block px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium relative z-10">
//                           Collection {index + 1}
//                         </span>
//                         <motion.div
//                           className="absolute inset-0 bg-white/40"
//                           animate={{
//                             x: ["0%", "100%"],
//                             opacity: [0, 0.5, 0],
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Number.POSITIVE_INFINITY,
//                             repeatDelay: 3,
//                           }}
//                         />
//                       </motion.div>

//                       {/* Title with letter animation */}
//                       <div className="overflow-hidden mb-6">
//                         <motion.h2
//                           className={cn("text-3xl md:text-5xl lg:text-6xl font-bold leading-tight", slide.textColor)}
//                           initial={{ y: 100 }}
//                           animate={{ y: 0 }}
//                           transition={{ duration: 0.8, delay: 0.3 }}
//                         >
//                           {slide.title.split("").map((char, i) => (
//                             <motion.span
//                               key={i}
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
//                               className="inline-block"
//                             >
//                               {char === " " ? "\u00A0" : char}
//                             </motion.span>
//                           ))}
//                         </motion.h2>
//                       </div>

//                       {/* Description with line-by-line reveal */}
//                       <div className="overflow-hidden mb-8">
//                         <motion.p
//                           className="text-base md:text-lg text-gray-700 max-w-md"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           transition={{ duration: 0.8, delay: 0.6 }}
//                         >
//                           {slide.description.split(". ").map((sentence, i) => (
//                             <motion.span
//                               key={i}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
//                               className="block mb-2"
//                             >
//                               {sentence + (i < slide.description.split(". ").length - 1 ? "." : "")}
//                             </motion.span>
//                           ))}
//                         </motion.p>
//                       </div>

//                       {/* Button with hover effect */}
//                       <motion.div
//                         initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         transition={{ duration: 0.6, delay: 0.9 }}
//                       >
//                         <Button
//                           size="lg"
//                           className={cn(
//                             "relative overflow-hidden bg-white text-gray-900 border border-gray-200 group shadow-lg",
//                             "transition-all duration-300 hover:shadow-xl hover:scale-105",
//                           )}
//                         >
//                           <span className="relative z-10 flex items-center">
//                             {slide.buttonText}
//                             <motion.span
//                               animate={{ x: [0, 5, 0] }}
//                               transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
//                             >
//                               <ArrowRight className="ml-2 h-4 w-4" />
//                             </motion.span>
//                           </span>
//                           <motion.div
//                             className={cn("absolute inset-0 opacity-0 group-hover:opacity-20", slide.accent)}
//                             initial={{ x: "-100%" }}
//                             whileHover={{ x: "0%" }}
//                             transition={{ duration: 0.4 }}
//                           />
//                         </Button>
//                       </motion.div>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* Decorative elements with animations */}
//               <DecorativeElement className="bottom-10 right-10 bg-white/20 hidden md:block" delay={0.5} />
//               <DecorativeElement className="top-20 right-20 bg-white/30 hidden md:block" delay={0.7} size="w-16 h-16" />
//               <DecorativeElement
//                 className={cn(
//                   "top-40 left-[10%] hidden lg:block",
//                   slide.accent.replace("bg", "bg").replace("500", "200"),
//                 )}
//                 delay={1.2}
//                 size="w-24 h-24"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom navigation arrows with enhanced animations */}
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.1, rotate: -5 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handlePrev}
//             className={cn(
//               "flex items-center justify-center w-12 h-12 rounded-full",
//               "bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300",
//               "hover:bg-white focus:outline-none",
//             )}
//             aria-label="Previous slide"
//           >
//             <motion.div
//               animate={{ x: [0, -3, 0] }}
//               transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
//             >
//               <ChevronLeft className="h-6 w-6 text-gray-800" />
//             </motion.div>
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.1, rotate: 5 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleNext}
//             className={cn(
//               "flex items-center justify-center w-12 h-12 rounded-full",
//               "bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300",
//               "hover:bg-white focus:outline-none",
//             )}
//             aria-label="Next slide"
//           >
//             <motion.div
//               animate={{ x: [0, 3, 0] }}
//               transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
//             >
//               <ChevronRight className="h-6 w-6 text-gray-800" />
//             </motion.div>
//           </motion.button>
//         </div>
//       </div>

//       {/* Custom progress bar */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/30 z-30">
//         <motion.div className={cn("h-full", sliderData[activeIndex].accent)} style={{ width: progressWidth }} />
//       </div>

//       {/* Custom pagination indicator */}
//       <div className="absolute bottom-8 left-8 z-30 hidden md:flex items-center space-x-2">
//         {sliderData.map((slide, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.2 }}
//             onClick={() => swiperRef.current?.slideTo(index)}
//             className={cn(
//               "h-2 rounded-full transition-all duration-300",
//               activeIndex === index ? cn("w-16", slide.accent) : "w-10 bg-gray-300 hover:bg-gray-400",
//             )}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default HomeSec1
