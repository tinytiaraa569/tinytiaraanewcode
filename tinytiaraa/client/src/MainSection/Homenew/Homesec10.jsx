import { motion, useScroll, useTransform } from "framer-motion"
import { Upload, Calculator, Hammer, Gift } from "lucide-react"
import { useRef } from "react"

const customizationSteps = [
  {
    number: 1,
    title: "Upload Your Design",
    icon: <Upload size={24} className="text-white" />,
    desc: "Share your unique design ideas with us! Simply upload your sketches, images, or inspirations, and our expert team will work with you to bring your vision to life.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom1-jdw046Gz.png",
  },
  {
    number: 2,
    title: "Get the Costing",
    icon: <Calculator size={24} className="text-white" />,
    desc: "Once we have your design, we'll provide a clear and transparent estimate based on your preferences. You'll know the full cost upfront, so you can plan with confidence.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom2-DvBWwcFP.png",
  },
  {
    number: 3,
    title: "Jewelry Manufacturing",
    icon: <Hammer size={24} className="text-white" />,
    desc: "Our expert artisans will handcraft your design with the finest materials, ensuring it's safe, hypoallergenic, and perfect for your little one's daily wear. Watch your creation come to life!",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom3-3JRh4BJb.png",
  },
  {
    number: 4,
    title: "Receive Your Jewelry",
    icon: <Gift size={24} className="text-white" />,
    desc: "Once your jewelry is ready and any outstanding issues are resolved, we'll complete quality checks and deliver it to your address.",
    img: "https://tiny-tiaraanew.vercel.app/assets/custom4-CCQqaQLS.png",
  },
]

const Homesec10 = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const timelineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])
  const containerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const containerScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  

  return (
    <div
      ref={containerRef}
      className="w-full py-16 px-4 bg-gradient-to-t from-[white] via-[#F9F6F4] to-white relative overflow-hidden min-h-screen"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.div style={{ opacity: containerOpacity }} className="text-center mb-12">
          <span className="inline-block bg-[#F4E7E2] text-[#9A7B74] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            SCROLL TO DISCOVER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#9A7B74]">Customization Journey</h2>
          <p className="text-[#9A7B74] max-w-2xl mx-auto">
            Scroll down to explore our step-by-step customization process
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24 relative">
          {customizationSteps.map((step, index) => {
            const start = 0.1 + index * 0.15
            const end = start + 0.2
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
            const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])
            const x = useTransform(scrollYProgress, [start, end], [index % 2 === 0 ? -50 : 50, 0])

            return (
              <motion.div
                key={step.number}
                style={{ opacity, scale, x }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center relative`}
              >
                {/* Step Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#F4E7E2] p-5">
                    <div className="flex items-center mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] flex items-center justify-center mr-3"
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <span className="text-2xl font-bold text-[#D8B4A0]">{step.number}</span>
                        <h3 className="text-lg font-bold text-[#9A7B74]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#9A7B74] text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Step Image */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} mt-4 md:mt-0`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl overflow-hidden shadow-md"
                  >
                    <img src={step.img} alt={step.title} className="w-full h-auto object-cover" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
{/* CTA Button at the end */}
<motion.div
  style={{ opacity: containerOpacity, scale: containerScale }}
  className="flex justify-center mt-24"
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="cursor-pointer bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white px-6 md:px-8 py-3 text-sm md:text-base rounded-full font-medium shadow-lg transition-all duration-300"
  >
    Start Your Custom Design
  </motion.button>
</motion.div>

      </div>
    </div>
  )
}

export default Homesec10
