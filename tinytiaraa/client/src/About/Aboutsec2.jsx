"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { forwardRef, useRef, useImperativeHandle } from "react"
import { Sparkles, GalleryThumbnailsIcon as Gallery, Shield, Hammer } from "lucide-react"

const Aboutsec2 = forwardRef((props, ref) => {
  const containerRef = useRef(null)
    useImperativeHandle(ref, () => containerRef.current)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div className="w-full  overflow-hidden"  ref={containerRef}>
      {/* Strengths Section */}
      <section className="py-20 relative px-6 md:px-12 overflow-hidden bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#B67F6D] mb-4">Our Strengths</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes Tiny Tiaraa special is our dedication to quality, safety, and the magical experience we create
              for children.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-shrink-0 mt-1 flex justify-center sm:justify-start">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#B67F6D] shadow-sm border border-[#F4E7E2]">
                  <Sparkles size={32} />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#B67F6D]">Join the Magic</h3>
                <p className="text-gray-600">
                  At Tiny Tiaraa, discover magical jewelry that lights up children's eyes and creates cherished,
                  unforgettable moments—perfect for gifts and keepsakes.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex-shrink-0 mt-1 flex justify-center sm:justify-start">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#B67F6D] shadow-sm border border-[#F4E7E2]">
                  <Gallery size={32} />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#B67F6D]">Collections</h3>
                <p className="text-gray-600">
                  Our jewelry collections offer whimsical charms and elegant pieces, ensuring every child finds
                  something that matches their unique style.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex-shrink-0 mt-1 flex justify-center sm:justify-start">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#B67F6D] shadow-sm border border-[#F4E7E2]">
                  <Shield size={32} />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#B67F6D]">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize safety by using hypoallergenic materials and strict quality checks, ensuring jewelry
                  that parents trust and kids enjoy worry-free.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex-shrink-0 mt-1 flex justify-center sm:justify-start">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#B67F6D] shadow-sm border border-[#F4E7E2]">
                  <Hammer size={32} />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#B67F6D]">Craftsmanship</h3>
                <p className="text-gray-600">
                  Craftsmanship is our core. Every piece is meticulously handcrafted with quality materials, ensuring
                  beauty, safety, and comfort for children.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
})

export default Aboutsec2
