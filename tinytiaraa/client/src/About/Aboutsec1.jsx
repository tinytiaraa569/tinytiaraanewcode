"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import aboutimg from './about.webp'

const Aboutsec1 = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref}>
      <motion.section
        className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[780px] overflow-hidden bg-[#FDF8F6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D8B4A0]/80 to-transparent z-10" />

          {/* Background circles */}
          <motion.div
            className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-[#D7A295]/20"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 20,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-[#D8B4A0]/30"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {/* Floating diamond shapes */}
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-white/10 backdrop-blur-sm border border-white/20"
              style={{
                width: Math.random() * 60 + 40,
                height: Math.random() * 60 + 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: "50% 50% 50% 0",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [
                  `${Math.random() * 360}deg`,
                  `${Math.random() * 360 + 180}deg`,
                  `${Math.random() * 360 + 360}deg`,
                ],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="!container mx-auto px-4 z-20 relative h-full">
          <div className="h-full flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="max-w-xl pt-20 md:pt-0"
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
                className="mb-6"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <div className="px-4 py-1.5 rounded-full bg-[#D7A295]/50 border border-[#D7A295]/10 inline-block">
                  <span className="text-[#997367] font-medium text-sm">Handcrafted with Love</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-[#B67F6D]"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                Magical Jewelry for Little Dreamers
              </motion.h1>

              <motion.p
                className="text-md sm:text-lg mb-8 text-gray-600 max-w-lg"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
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
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <Button
                  className="bg-[#B67F6D] text-white hover:bg-[#D7A295] px-8 py-6 rounded-full text-lg shadow-md transition-all hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover Our Story
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block relative w-[450px] h-[450px]"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl"
               
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${aboutimg})` }}
                />
              </motion.div>

              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-[#D7A295]/40"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 180,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Aboutsec1
