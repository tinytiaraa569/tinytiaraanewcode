"use client"
import { motion, AnimatePresence,useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Star, Sparkles } from "lucide-react"
import customimg1 from './customsec3img/1img.webp'
import customimg2 from './customsec3img/2img.webp'
import customimg3 from './customsec3img/3img.webp'
import customimg4 from './customsec3img/4img.webp'
import customimg5 from './customsec3img/5img.webp'




// Base showcase data that will be used across all variations
export const showcaseItems = [
  {
    image: customimg1,
    review:
      "Got this tiny gold nazariya customised for my newborn with an evil eye in the centre – super cute & full of positive vibes 😍 Neat finish, soft thread, perfect size! Packaging bhi bohot sundar tha. Thank you Tiny Tiaraa 💛 Will order again!",
    customer: "Anushka",
    rating: 5,
    piece: "Custom Evil Eye Nazariya",
  },
  {
    image: customimg2,
    review:
    "This anchor pendant from Tiny Tiaraa is sooo adorable! ⚓💖 I ordered it for my nephew and he absolutely loved it. Quality is fab, packaging is cute, and delivery was on time. Totally worth it! 🌈✨ Thank u Tiny Tiaraa 💫",
    customer: "Anita Kanade",
    rating: 5,
    piece: "Silver Anchor Pendant",
  },
  {
    image: customimg3,
    review:
      "Loved these tiny gold studs from Tiny Tiaraa! 😍 Perfect fit, super cute & comfy. Packaging was beautiful too 💛💙",
    customer: "Smitha Thakkar",
    rating: 5,
    piece: "Gold Earrings",
  },
  {
    image: customimg4,
    review:
      "Got this customised name neck chain for my baby from Tiny Tiaraa and I’m sooo happy! 💛 It’s beautifully made, exactly how I wanted – neat, elegant, and super cute. Packaging was lovely too. Thank you for making it special! ✨",
    customer: "Rishika Pawar",
    rating: 5,
    piece: "Custom Gold Pendant",
  },
  {
    image: customimg5,
    review:
      "Absolutely loved this customised silver name chain for my daughter Anu 💖 It’s sleek, stylish & just perfect! Great quality and the packaging was super cute too. Thank you Tiny Tiaraa for this beautiful memory! ✨🫶✨",
    customer: "Vanshika Chopra",
    rating: 5,
    piece: "Custom Silver Pendant ",
  },
]



// Sparkle effect component that can be reused across variations
export const SparkleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

// Rating stars component
export const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#C8A79B] text-[#C8A79B]" />
      ))}
    </div>
  )
}

// Custom hook for handling autoplay and slide navigation
export function useShowcaseControls(itemsLength, autoplayInterval = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayTimeRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Function to go to next slide
  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % itemsLength)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Function to go to previous slide
  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Function to go to a specific slide
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Reset autoplay when user interacts
  const resetAutoplay = () => {
    if (autoplayTimeRef.current) {
      clearTimeout(autoplayTimeRef.current)
      autoplayTimeRef.current = null
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (autoplay && isInView && !isTransitioning) {
      resetAutoplay()

      autoplayTimeRef.current = setTimeout(() => {
        nextSlide()
      }, autoplayInterval)
    }

    return () => {
      resetAutoplay()
    }
  }, [currentIndex, autoplay, isInView, isTransitioning, autoplayInterval])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      resetAutoplay()
    }
  }, [])

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
    containerRef,
    isTransitioning,
  }
}


const Customizationsec3 = () => {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
    containerRef,
    isTransitioning,
  } = useShowcaseControls(showcaseItems.length)

  // Handle wheel scroll on image
  const handleWheel = (e) => {
    e.preventDefault()
    if (isTransitioning) return

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    } else {
      if (e.deltaY > 0) {
        nextSlide()
      } else if (e.deltaY < 0) {
        prevSlide()
      }
    }
  }

  return (
    <section className="py-14 relative overflow-hidden">
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

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <Badge className="mb-4 bg-[#C8A79B] hover:bg-[#BF9283] text-white">Featured Creations</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#8A6D63] dark:text-[#F4E7E2]">
            Crafted On <span className="text-[#C8A79B]">Request</span>
          </h2>
          <p className="text-[#8A6D63]/80 dark:text-[#F4E7E2]/80 max-w-2xl mx-auto">
            Discover a curated selection of custom-made designs, each crafted with precision and elegance to bring you
            unmatched quality and sophistication.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Image Section */}
              <div className="relative w-full overflow-hidden" onWheel={handleWheel}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  drag={isTransitioning ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (isTransitioning) return

                    const swipe = Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 300
                    if (swipe) {
                      if (offset.x > 0) {
                        prevSlide()
                      } else {
                        nextSlide()
                      }
                    }
                  }}
                >
                  <img
                    src={showcaseItems[currentIndex].image || "/placeholder.svg"}
                    alt={showcaseItems[currentIndex].piece}
                    className="w-full h-[300px] sm:h-[400px] md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <Badge className="absolute bottom-4 left-4 bg-[#C8A79B] text-white">
                    {showcaseItems[currentIndex].piece}
                  </Badge>

                  
                  {/* Scroll indicator */}
                  <motion.div
                    className="absolute inset-x-0 bottom-16 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                      Swipe left/right to navigate
                    </div>
                  </motion.div>
                  <div className="absolute -inset-4 border-2 border-[#E8C4B8]/30 rounded-3xl -z-10 transform -rotate-2"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E8C4B8]/20 rounded-full blur-xl"></div>

                </motion.div>

                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-[#E8C4B8]/30 dark:border-[#8A6D63]/20 rounded-3xl -z-10"></div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <RatingStars rating={showcaseItems[currentIndex].rating} />

                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#E8C4B8] opacity-30" />
                  <blockquote className="text-xl md:text-xl text-[#8A6D63] dark:text-[#F4E7E2] italic leading-relaxed pl-8">
                    "{showcaseItems[currentIndex].review}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center sm:justify-start space-x-4">
                  <div className="w-14 h-14 rounded-full bg-[#F4E7E2] dark:bg-[#3A322E] flex items-center justify-center">
                    <span className="text-[#C8A79B] font-bold text-lg">
                      {showcaseItems[currentIndex].customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-[#8A6D63] dark:text-[#F4E7E2]">
                      {showcaseItems[currentIndex].customer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#2A2624] border border-[#E8C4B8] dark:border-[#8A6D63]/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-[#C8A79B]" />
            </motion.button>

            <div className="flex space-x-2">
              {showcaseItems.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#C8A79B]" : "bg-[#E8C4B8]/50"
                  } disabled:opacity-50`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-12 h-12 rounded-full bg-white dark:bg-[#2A2624] border border-[#E8C4B8] dark:border-[#8A6D63]/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 text-[#C8A79B]" />
            </motion.button>
          </div>
        </div>

        {/* Side navigation arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 disabled:opacity-50"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 disabled:opacity-50"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </section>
  )
}

export default Customizationsec3
