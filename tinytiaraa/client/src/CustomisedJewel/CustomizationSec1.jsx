"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import customimg1 from './customsec1img/custom1.webp'
import customimg2 from './customsec1img/custom2.webp'
import customimg3 from './customsec1img/custom3.webp'


const Customizationsec1 = ({onDiscoverClick}) => {
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
        className="relative h-[550px] md:h-[650px] lg:h-[700px] 2xl:h-[780px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background with 3D perspective effect */}
        <div className="absolute inset-0 z-0 perspective-container">
          {/* Background color */}
          <div className="absolute inset-0 bg-[#F9F6F4]" />

          {/* 3D tilted background plane */}
          <motion.div
            className="absolute inset-0 origin-bottom"
            initial={{ rotateX: 30, y: 100, opacity: 0 }}
            animate={{ rotateX: 30, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div
              className="w-full h-[120%] bg-cover bg-center"
              style={{ backgroundImage: `url('/placeholder.svg?height=1080&width=1920')` }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F4] via-[#F9F6F4]/50 to-transparent" />
          </motion.div>

          {/* 3D floating elements */}
          <motion.div
            className="absolute top-[20%] left-[20%] w-32 h-32 bg-[#D7A295]/20 rounded-lg origin-center"
            initial={{ rotateX: 45, rotateY: -15, rotateZ: 5, y: -50, opacity: 0 }}
            animate={{ rotateX: 45, rotateY: -15, rotateZ: 5, y: 0, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />

          <motion.div
            className="absolute bottom-[30%] right-[25%] w-40 h-40 bg-[#B67F6D]/20 rounded-lg origin-center"
            initial={{ rotateX: 45, rotateY: 15, rotateZ: -5, y: 50, opacity: 0 }}
            animate={{ rotateX: 45, rotateY: 15, rotateZ: -5, y: 0, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {/* 3D grid lines */}
          <div className="absolute inset-0 perspective-container">
            <motion.div
              className="absolute inset-0 grid-3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 z-20 relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
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
                className="mb-6"
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
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-[#B67F6D] font-medium">Handcrafted with Love</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#B67F6D]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                Customize <br /> Your Own Masterpiece
              </motion.h1>

              <motion.p
                className="text-md sm:text-lg mb-8 text-gray-600 max-w-lg"
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
                  className="cursor-pointer bg-[#B67F6D] text-white hover:bg-[#D7A295] px-8 py-6 rounded-md text-lg shadow-md transition-all hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onDiscoverClick}
                >
                  Design With Love
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative perspective-container">
                {/* 3D floating image cards */}
                <div className="relative w-full aspect-square">
                  {/* Main image */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-lg shadow-xl overflow-hidden origin-center"
                    initial={{ rotateY: -30, rotateX: 15, z: -100, opacity: 0 }}
                    animate={{ rotateY: -30, rotateX: 15, z: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${customimg1})` }}
                    />
                  </motion.div>

                  {/* Secondary floating images */}
                  <motion.div
                    className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-white rounded-lg shadow-lg overflow-hidden origin-center"
                    initial={{ rotateY: -20, rotateX: 10, z: -50, opacity: 0 }}
                    animate={{ rotateY: -20, rotateX: 10, z: 50, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${customimg2})` }}
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-white rounded-lg shadow-lg overflow-hidden origin-center"
                    initial={{ rotateY: -10, rotateX: 5, z: -30, opacity: 0 }}
                    animate={{ rotateY: -10, rotateX: 5, z: 30, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${customimg3})` }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <style jsx global>{`
        .perspective-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .grid-3d {
          background-image: linear-gradient(to right, rgba(215, 162, 149, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(215, 162, 149, 0.2) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: rotateX(30deg);
          transform-origin: bottom;
        }
      `}</style>
    </div>
  )
}

export default Customizationsec1
