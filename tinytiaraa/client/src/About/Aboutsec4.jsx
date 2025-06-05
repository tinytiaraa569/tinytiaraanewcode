"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Aboutsec4() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
     

      {/* Vision & Story Section */}
      <section className="py-24 relative px-6 md:px-12  overflow-hidden bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white">
        <div className="container sm:mx-auto px-0 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-[#FDF8F6] relative z-10 p-6 sm:p-10 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-[#B67F6D]">Our Vision</h3>
                <p className="text-gray-700">
                  Our vision at Tiny Tiaraa is to be the beacon of childhood magic, where every piece of jewelry becomes
                  a cherished memory. We believe in nurturing a sense of wonder and individuality in children by
                  offering jewelry that resonates with their dreams and aspirations. Our pieces are more than
                  accessories; they're tiny companions on a child's journey of self-discovery and imagination.
                </p>
              </div>
              <motion.div
                className="absolute z-0 -top-5 -right-5 w-20 h-20 rounded-full bg-[#D7A295]/20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              className="relative "
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-[#FDF8F6] p-6 sm:p-10 rounded-2xl relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-[#B67F6D]">Our Story</h3>
                <p className="text-gray-700">
                  Tiny Tiaraa is a jewelry brand that believes in the power of the five elements of nature to bring joy
                  and wonder to children. Our jewelry is handcrafted with love and care using only the finest materials,
                  and it is inspired by the natural world. We believe that every child deserves to feel special, and our
                  jewelry is designed to help them do just that.
                </p>
              </div>
              <motion.div
                className="absolute z-0 -bottom-5 -left-5 w-20 h-20 rounded-full bg-[#D8B4A0]/20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Association Section */}
      <section className="py-24 bg-gradient-to-b  from-[#F9F6F4] to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold mb-4 text-[#B67F6D]">Our Associations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with these esteemed organizations that share our commitment to quality,
              craftsmanship, and ethical practices in children's jewelry design.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
            >
           {/* Properly centered wrapper */}
    <div className="relative mb-6 flex items-center justify-center w-[130px] h-[130px]">
      <motion.div
        className="absolute -z-10 w-32 h-32 rounded-full bg-[#D7A295]/10"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="https://www.tinytiaraa.com/assets/first-Dsg0_80p.svg"
        alt="Association 1"
        width={120}
        height={120}
        className="drop-shadow-md relative z-10"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      />
    </div>
             
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.1 },
                },
              }}
            >
              <div className="relative mb-6  flex items-center justify-center w-[130px] h-[130px]">
                <motion.div
                  className="absolute -z-10 w-32 h-32 rounded-full bg-[#D7A295]/10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.img
                  src="https://www.tinytiaraa.com/assets/third-CBytz535.svg"
                  alt="Association 2"
                  width={120}
                  height={120}
                  className="drop-shadow-md relative z-10"
                  whileHover={{
                    scale: 1.1,
                    
                    transition: { duration: 0.3 },
                  }}
                />
              </div>
              
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              <div className="relative mb-6  flex items-center justify-center w-[130px] h-[130px]">
                <motion.div
                  className="absolute -z-10 w-32 h-32 rounded-full bg-[#D7A295]/10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.img
                  src="https://www.tinytiaraa.com/assets/fourth-BinWpgKg.svg"
                  alt="Association 3"
                  width={120}
                  height={120}
                  className="drop-shadow-md relative z-10"
                  whileHover={{
                    scale: 1.1,
                    
                    transition: { duration: 0.3 },
                  }}
                />
              </div>
             
            </motion.div>
          </motion.div>

          
        </div>
      </section>
    </div>
  )
}
