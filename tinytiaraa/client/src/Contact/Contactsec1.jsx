"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"

const ContactSec1 = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const titleText = "Magical Jewelry"
  const subtitleText = "for Tiny Dreamers"

  return (
    <div ref={ref}>
      <motion.section
        className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[780px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background image - Fixed to be 80% visible */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://media.istockphoto.com/id/610576802/photo/newborn-baby-girl-sleeping.jpg?s=1024x1024&w=is&k=20&c=v4hlmHNBFlfLzEE6OchzI4Ag2hnql5xinvk2w0POn_k=')` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Overlay with 20% opacity to make background 80% visible */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Dynamic text mask effect */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <defs>
              <mask id="textMask35">
                <rect width="100%" height="100%" fill="white" />
                <motion.text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#B67F6D"
                  fontSize="180"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  TIARAA
                </motion.text>
              </mask>
              <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#F4E7E2" stopOpacity="1" />
              </linearGradient>
            </defs>

            <motion.rect
              width="100%"
              height="100%"
              fill="url(#imageGradient)"
              mask="url(#textMask35)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </svg>
        </div>

        {/* Animated text overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  className="mb-6 flex justify-center"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white font-medium">Handcrafted with Love</span>
                  </div>
                </motion.div>

                {/* Animated title text */}
                <motion.div className="mb-2 overflow-hidden" variants={textVariants}>
                  <div className="flex justify-center">
                    {titleText.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold text-white inline-block"
                        style={{
                          display: char === " " ? "inline" : "inline-block",
                          marginRight: char === " " ? "0.5em" : "0.02em",
                          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Animated subtitle text */}
                <motion.div className="mb-4 sm:mb-8 overflow-hidden" variants={textVariants}>
                  <div className="flex justify-center">
                    {subtitleText.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="text-xl sm:text-3xl md:text-5xl font-bold text-white/90 inline-block"
                        style={{
                          display: char === " " ? "inline" : "inline-block",
                          marginRight: char === " " ? "0.5em" : "0.02em",
                          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  className="text-lg mb-8 text-white/90 max-w-2xl mx-auto"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  At Tiny Tiaraa, we craft enchanting jewelry that captures the wonder and joy of childhood, creating
                  treasured keepsakes for your little ones.
                </motion.p>

                <motion.div
                  className="flex justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  <Button
                    className="bg-white text-[#B67F6D] hover:bg-white/90 px-8 py-6 rounded-full text-lg shadow-md transition-all hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discover Our Story
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Floating shapes */}
          <motion.div
            className="absolute top-[15%] left-[10%] w-16 h-16"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] right-[15%] w-20 h-20"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 7,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-[40%] right-[10%] w-12 h-12"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,50 50,90 10,50" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactSec1
