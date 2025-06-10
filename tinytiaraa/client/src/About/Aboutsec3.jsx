"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useRef } from "react"

export default function Aboutsec3() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Use transformed scroll progress for smoother effects
  const smoothScrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: false
  })

  const SparkleEffect = () => {
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
                ease: "easeInOut"
              }}
            >
              <Sparkles className="text-amber-300 w-4 h-4" />
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <SparkleEffect />

      {/* Founder Section with Parallax */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              className="lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-[#B67F6D]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Rashmi Jain - Founder
              </motion.h2>

              <div className="space-y-6 text-gray-700">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  As a mother, I've always cherished the pure joy and innocence that children bring into our lives. When
                  I started Tiny Tiaraa, it was with a simple yet profound vision: to create a line of jewelry that
                  would capture the magic of childhood.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                  But equally important was our commitment to ensuring the highest standards of safety and quality for
                  our little ones. I wanted to offer parents like myself a collection of exquisite jewelry that not only
                  complements the beauty of our children but also stands up to the rigors of everyday wear.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  We understand that children's jewelry should be more than just an accessory; it should reflect their
                  unique spirit and personality. I hope our jewelry adds a touch of sparkle to your child's journey and
                  becomes a keepsake you'll cherish forever.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="font-medium text-[#B67F6D] italic"
                >
                  With love and gratitude
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-[40%] order-1 lg:order-2 relative"
              style={{
                maxWidth: "500px",
                maxHeight: "500px",
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Decorative elements - positioned with negative z-index to stay behind */}
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#D8B4A0]/20 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 10,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#D7A295]/20 z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 12,
                  ease: "easeInOut",
                }}
              />

              {/* Additional decorative elements for enhanced visual effect */}
              <motion.div
                className="absolute top-1/4 -right-5 w-20 h-20 rounded-full bg-[#F3E6E2]/40 z-0"
                animate={floatingAnimation}
              />
              <motion.div
                className="absolute bottom-1/4 -left-5 w-16 h-16 rounded-full bg-[#B67F6D]/20 z-0"
                animate={{
                  ...floatingAnimation,
                  y: [0, -8, 0],
                }}
              />

              {/* Image container with proper z-index and responsive handling */}
              <motion.div
                className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-[#F3E6E2] z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src="https://admin.tinytiaraa.com/uploads/images/products/ul1cjxxwycebfjbz61np.webp"
                  alt="Rashmi Jain - Founder of Tiny Tiaraa"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=500&width=400"
                    e.currentTarget.alt = "Image failed to load"
                  }}
                />

                {/* Overlay gradient for better image visibility */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#D7A295]/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Subtle shimmer effect across the image */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2.5,
                    ease: "linear",
                    repeatDelay: 3,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}