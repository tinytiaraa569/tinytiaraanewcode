// import { motion, useScroll, useTransform } from "framer-motion"
// import { Upload, Calculator, Hammer, Gift } from "lucide-react"
// import { useRef } from "react"

// const customizationSteps = [
//   {
//     number: 1,
//     title: "Upload Your Design",
//     icon: <Upload size={24} className="text-white" />,
//     desc: "Share your unique design ideas with us! Simply upload your sketches, images, or inspirations, and our expert team will work with you to bring your vision to life.",
//     img: "https://tiny-tiaraanew.vercel.app/assets/custom1-jdw046Gz.png",
//   },
//   {
//     number: 2,
//     title: "Get the Costing",
//     icon: <Calculator size={24} className="text-white" />,
//     desc: "Once we have your design, we'll provide a clear and transparent estimate based on your preferences. You'll know the full cost upfront, so you can plan with confidence.",
//     img: "https://tiny-tiaraanew.vercel.app/assets/custom2-DvBWwcFP.png",
//   },
//   {
//     number: 3,
//     title: "Jewelry Manufacturing",
//     icon: <Hammer size={24} className="text-white" />,
//     desc: "Our expert artisans will handcraft your design with the finest materials, ensuring it's safe, hypoallergenic, and perfect for your little one's daily wear. Watch your creation come to life!",
//     img: "https://tiny-tiaraanew.vercel.app/assets/custom3-3JRh4BJb.png",
//   },
//   {
//     number: 4,
//     title: "Receive Your Jewelry",
//     icon: <Gift size={24} className="text-white" />,
//     desc: "Once your jewelry is ready and any outstanding issues are resolved, we'll complete quality checks and deliver it to your address.",
//     img: "https://tiny-tiaraanew.vercel.app/assets/custom4-CCQqaQLS.png",
//   },
// ]

// const Homesec10 = () => {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   })

//   const timelineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])
//   const containerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
//   const containerScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  

//   return (
//     <div
//       ref={containerRef}
//       className="w-full py-16 px-4 bg-gradient-to-t from-[white] via-[#F9F6F4] to-white relative overflow-hidden min-h-screen"
//     >
//       <div className="max-w-5xl mx-auto relative z-10">
//         {/* Title */}
//         <motion.div style={{ opacity: containerOpacity }} className="text-center mb-12">
//           <span className="inline-block bg-[#F4E7E2] text-[#9A7B74] text-xs font-semibold px-3 py-1 rounded-full mb-4">
//             SCROLL TO DISCOVER
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#9A7B74]">Customization Journey</h2>
//           <p className="text-[#9A7B74] max-w-2xl mx-auto">
//             Scroll down to explore our step-by-step customization process
//           </p>
//         </motion.div>

//         {/* Steps */}
//         <div className="space-y-16 md:space-y-24 relative">
//           {customizationSteps.map((step, index) => {
//             const start = 0.1 + index * 0.15
//             const end = start + 0.2
//             const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
//             const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])
//             const x = useTransform(scrollYProgress, [start, end], [index % 2 === 0 ? -50 : 50, 0])

//             return (
//               <motion.div
//                 key={step.number}
//                 style={{ opacity, scale, x }}
//                 className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center relative`}
//               >
//                 {/* Step Content */}
//                 <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
//                   <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#F4E7E2] p-5">
//                     <div className="flex items-center mb-3">
//                       <motion.div
//                         whileHover={{ rotate: 360 }}
//                         transition={{ duration: 0.5 }}
//                         className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center mr-3"
//                       >
//                         {step.icon}
//                       </motion.div>
//                       <div>
//                         <span className="text-2xl font-bold text-[#D8B4A0]">{step.number}</span>
//                         <h3 className="text-lg font-bold text-[#9A7B74]">{step.title}</h3>
//                       </div>
//                     </div>
//                     <p className="text-[#9A7B74] text-sm">{step.desc}</p>
//                   </div>
//                 </div>

//                 {/* Step Image */}
//                 <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} mt-4 md:mt-0`}>
//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ duration: 0.3 }}
//                     className="rounded-xl overflow-hidden shadow-md"
//                   >
//                     <img src={step.img} alt={step.title} className="w-full h-auto object-cover" />
//                   </motion.div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* Call to action */}
// {/* CTA Button at the end */}
// <motion.div
//   style={{ opacity: containerOpacity, scale: containerScale }}
//   className="flex justify-center mt-24"
// >
//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="cursor-pointer bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white px-6 md:px-8 py-3 text-sm md:text-base rounded-full font-medium shadow-lg transition-all duration-300"
//   >
//     Start Your Custom Design
//   </motion.button>
// </motion.div>

//       </div>
//     </div>
//   )
// }

// export default Homesec10

"use client"

import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Upload, Calculator, Hammer, Gift, Play, Pause, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const customizationSteps = [
  {
    number: 1,
    title: "Upload Your Design",
    icon: <Upload size={18} className="text-white" />,
    desc: "Share your unique design ideas with us! Simply upload your sketches, images, or inspirations.",
    detailedDesc:
      "Upload your design files in various formats including JPG, PNG, PDF, or AI. Our design team will review your submission within 24 hours and provide professional feedback and suggestions to optimize your design for manufacturing.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom1-jdw046Gz.png",
    angle: 0,
  },
  {
    number: 2,
    title: "Get the Costing",
    icon: <Calculator size={18} className="text-white" />,
    desc: "We'll provide a clear and transparent estimate based on your preferences.",
    detailedDesc:
      "Receive a detailed breakdown of costs including materials, labor, and finishing. Our transparent pricing ensures no hidden fees, and we offer flexible payment plans for orders above $500.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom2-DvBWwcFP.png",
    angle: 90,
  },
  {
    number: 3,
    title: "Jewelry Manufacturing",
    icon: <Hammer size={18} className="text-white" />,
    desc: "Our expert artisans will handcraft your design with the finest materials.",
    detailedDesc:
      "Your jewelry is handcrafted by certified artisans using ethically sourced materials. Each piece undergoes rigorous quality control and is made to be hypoallergenic and safe for daily wear.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom3-3JRh4BJb.png",
    angle: 180,
    
  },
  {
    number: 4,
    title: "Receive Your Jewelry",
    icon: <Gift size={18} className="text-white" />,
    desc: "Quality checks completed and delivered to your address with care.",
    detailedDesc:
      "Your finished jewelry undergoes final quality inspection before being carefully packaged and shipped. Includes worldwide shipping, 1-year warranty, and 30-day satisfaction guarantee.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom4-CCQqaQLS.png",
    angle: 270,
  },
]

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
              }}
            >
              <Sparkles className="text-amber-300 w-4 h-4" />
            </motion.div>
          )
        })}
      </div>
    )
  }

export default function CircularImprovedProfessional() {
  const [selectedStep, setSelectedStep] = useState(1)
  const [hoveredStep, setHoveredStep] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [radius, setRadius] = useState(120)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const controls = useAnimation()
  const navigate = useNavigate()

  // Responsive radius adjustment and mobile detection
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)

      if (containerRef.current && !isMobileView) {
        const containerWidth = containerRef.current.offsetWidth
        const newRadius = Math.min(containerWidth / 2.5, 120)
        setRadius(newRadius)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    let interval

    if (isPlaying) {
      interval = setInterval(() => {
        setSelectedStep((prev) => (prev % customizationSteps.length) + 1)
      }, 7000)
    }

    return () => clearInterval(interval)
  }, [isPlaying])

  // Animation for rotation
  useEffect(() => {
    if (!isMobile) {
      controls.start({
        rotate: (selectedStep - 1) * 90,
        transition: { duration: 0.8, ease: "easeInOut" },
      })
    }
  }, [selectedStep, controls, isMobile])

  const getPosition = (angle) => {
    const radian = (angle * Math.PI) / 180
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    }
  }

  const handleStepClick = (stepNumber) => {
    setSelectedStep(stepNumber)
    setIsPlaying(false)
  }

  const handlePrevStep = () => {
    const prevStep = selectedStep === 1 ? customizationSteps.length : selectedStep - 1
    setSelectedStep(prevStep)
    setIsPlaying(false)
  }

  const handleNextStep = () => {
    const nextStep = selectedStep === customizationSteps.length ? 1 : selectedStep + 1
    setSelectedStep(nextStep)
    setIsPlaying(false)
  }

  const selectedStepData = customizationSteps.find((step) => step.number === selectedStep)
  const hoveredStepData = customizationSteps.find((step) => step.number === hoveredStep)

  return (
    <div className="w-full  py-12 px-4 bg-gradient-to-br from-[#F9F6F4] to-white relative overflow-hidden">
      <SparkleEffect />

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
          className="absolute top-10 right-10 w-32 h-32 border border-[#F4E7E2] rounded-full opacity-30"
        />
        <motion.div
          animate={{
            rotate: -360,
            transition: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-[#D8B4A0]/10 to-[#D7A295]/10 rounded-lg"
        />
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#F4E7E2]/20 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-[#D8B4A0]/20 rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#F4E7E2] text-[#9A7B74] text-xs font-semibold px-3 py-1 rounded-full mb-3"
          >
            customization JOURNEY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-[#9A7B74]"
          >
            step-by-step customization process
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Mobile Navigation */}
          {isMobile ? (
            <div className="w-full flex items-center justify-center gap-4">
              <motion.button
                onClick={handlePrevStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#F4E7E2] hover:bg-[#F9F6F4] transition-colors"
              >
                <ChevronLeft size={20} className="text-[#9A7B74]" />
              </motion.button>

              <div className="flex-1 max-w-xs">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 20px rgba(216, 180, 160, 0.3)",
                        "0 0 30px rgba(216, 180, 160, 0.5)",
                        "0 0 20px rgba(216, 180, 160, 0.3)",
                      ],
                      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center shadow-lg"
                  >
                    {selectedStepData?.icon}
                  </motion.div>
                </div>

                {/* Step indicators */}
                <div className="flex justify-center gap-2">
                  {customizationSteps.map((step) => (
                    <button
                      key={step.number}
                      onClick={() => handleStepClick(step.number)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        step.number === selectedStep ? "bg-[#D8B4A0]" : "bg-[#F4E7E2]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.button
                onClick={handleNextStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#F4E7E2] hover:bg-[#F9F6F4] transition-colors"
              >
                <ChevronRight size={20} className="text-[#9A7B74]" />
              </motion.button>
            </div>
          ) : (
            /* Desktop Circular Navigation */
            <div ref={containerRef} className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mx-auto">
              {/* Rotating Circle */}
              <motion.div
                animate={controls}
                className="absolute inset-0 w-full h-full"
                style={{ transformOrigin: "center center" }}
              >
                {/* Step Circles */}
                {customizationSteps.map((step) => {
                  const position = getPosition(step.angle)
                  const isSelected = step.number === selectedStep
                  const isHovered = step.number === hoveredStep

                  return (
                    <motion.button
                      key={step.number}
                      onClick={() => handleStepClick(step.number)}
                      onHoverStart={() => setHoveredStep(step.number)}
                      onHoverEnd={() => setHoveredStep(null)}
                      className="absolute !z-50 rounded-full flex items-center justify-center shadow-lg cursor-pointer group"
                      style={{
                        left: `calc(50% + ${position.x}px - ${radius / 5}px)`,
                        top: `calc(50% + ${position.y}px - ${radius / 5}px)`,
                        width: isHovered ? "4rem" : "3rem",
                        height: isHovered ? "4rem" : "3rem",
                      }}
                      animate={{
                        scale: isSelected ? 1.3 : isHovered ? 1.2 : 1,
                        backgroundColor: isSelected ? "#D8B4A0" : isHovered ? "#D7A295" : "#F4E7E2",
                        boxShadow: isSelected
                          ? "0 10px 30px rgba(216, 180, 160, 0.4)"
                          : isHovered
                            ? "0 8px 25px rgba(215, 162, 149, 0.3)"
                            : "0 4px 15px rgba(0, 0, 0, 0.1)",
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`${isSelected || isHovered ? "text-white" : "text-[#9A7B74]"}`}>{step.icon}</div>

                      {/* Ripple Effect */}
                      {isHovered && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute inset-0 rounded-full border-2 border-[#D8B4A0]"
                        />
                      )}
                    </motion.button>
                  )
                })}

                {/* Connecting Lines with Gradient */}
                <svg className="z-0 absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F4E7E2" />
                      <stop offset="50%" stopColor="#D8B4A0" />
                      <stop offset="100%" stopColor="#F4E7E2" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    stroke="url(#circleGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>

              {/* Center Circle with Pulse Animation */}
              <div className="absolute -z-10 inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(216, 180, 160, 0.3)",
                      "0 0 30px rgba(216, 180, 160, 0.5)",
                      "0 0 20px rgba(216, 180, 160, 0.3)",
                    ],
                    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-base md:text-lg">Step {selectedStep}</span>
                </motion.div>
              </div>

              {/* Play/Pause Button */}
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#F4E7E2] hover:bg-[#F9F6F4] transition-colors"
              >
                {isPlaying ? (
                  <Pause size={18} className="text-[#9A7B74]" />
                ) : (
                  <Play size={18} className="text-[#9A7B74]" />
                )}
              </motion.button>
            </div>
          )}

          {/* Content Panel */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              {selectedStepData && (
                <motion.div
                  key={selectedStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl border border-[#F4E7E2] p-6 relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F4E7E2]/20 to-transparent rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center mr-4 shadow-md"
                      >
                        {selectedStepData.icon}
                      </motion.div>
                      <div>
                        <span className="text-2xl font-bold text-[#D8B4A0]">{selectedStepData.number}</span>
                        <h3 className="text-xl font-bold text-[#9A7B74]">{selectedStepData.title}</h3>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <p className="text-[#9A7B74] text-sm leading-relaxed mb-4">{selectedStepData.desc}</p>
                        <p className="text-[#9A7B74] text-xs leading-relaxed mb-4 opacity-80">
                          {selectedStepData.detailedDesc}
                        </p>

                       
                      </div>
                      <div className="md:w-48">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={selectedStepData.img || "/placeholder.svg"}
                          alt={selectedStepData.title}
                          className={`w-full object-cover rounded-lg shadow-md ${isMobile ? "h-48" : "h-32"}`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Preview for Desktop */}
            {!isMobile && (
              <AnimatePresence>
                {hoveredStepData && hoveredStep !== selectedStep && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 bg-gradient-to-r from-[#F4E7E2]/50 to-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#F4E7E2]"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center mr-3">
                        {hoveredStepData.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#9A7B74] text-sm">{hoveredStepData.title}</h4>
                        <p className="text-xs text-[#9A7B74]/70">Click to explore this step</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-12">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(216, 180, 160, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white px-8 py-4 rounded-full font-medium shadow-lg relative overflow-hidden group"
            onClick={()=>{
              navigate("/personalised-prosperity")
            }}
          >
            <span className="relative z-10">Start Your Journey</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/10"
            />
          </motion.button>
        </div>
      </div>
    </div>
  )
}
