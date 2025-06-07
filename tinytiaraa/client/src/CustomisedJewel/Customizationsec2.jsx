"use client"
import React ,{ forwardRef, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Diamond } from "lucide-react"

const Customizationsec2 = forwardRef((props,ref) => {
  const containerRef = useRef(null)
  

  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: "https://www.tinytiaraa.com/assets/logo1-DTPHMFep.svg",
      title: "Design Submission",
      description:
        "To build a customized jewelry piece, upload the design along with the exact specifications asked. After filling in all the details, move on to the next step.",
    },
    {
      icon: "https://www.tinytiaraa.com/assets/logo2-9E4o529o.svg",
      title: "Digital Preview",
      description:
        "We'll create a digital format of your jewelry piece for you to review and verify the specifications. We'll also provide an estimated cost at this stage.",
    },
    {
      icon: "https://www.tinytiaraa.com/assets/logo3-Cb01s2eK.svg",
      title: "Production Process",
      description:
        "Once you confirm the design and specifications, we'll await the token amount. After receiving it, we'll begin the jewelry-making process and keep you updated.",
    },
    {
      icon: "https://www.tinytiaraa.com/assets/logo4-D_9ugPnm.svg",
      title: "Quality Check & Delivery",
      description:
        "Once your jewelry is ready and any outstanding issues are resolved, we'll complete quality checks and deliver it to your address.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white dark:from-[#3A322E] dark:via-[#2A2624] dark:to-[#1F1D1B] -z-10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zMCAzMEwwIDYwaDYwTDMwIDMwem0wIDBMMCA2MGgzMHYtMzB6bTAgMGwzMCAzMFYzMEgzMHoiIGZpbGw9IiNFOEM0QjgiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10"></div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(232,196,184,0.2),transparent_50%)] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_30%_70%,rgba(232,196,184,0.2),transparent_50%)] -z-10"></div>

      <div className="container mx-auto md:px-4 px-8 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
         <Badge className="mb-4 bg-[#C8A79B] hover:bg-[#BF9283] text-white">
             Customization Process
           </Badge>
           <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#8A6D63] dark:text-[#F4E7E2]">
             Crafting Your <span className="italic text-[#C8A79B]">Perfect</span> Jewelry
           </h2>
           <p className="text-[#8A6D63]/80 dark:text-[#F4E7E2]/80 max-w-2xl mx-auto">
             Our expert artisans follow a meticulous process to transform your vision into a stunning piece of jewelry.
           </p>

          {/* Decorative diamond icon */}
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="mt-8 inline-block"
          >
            <Diamond className="w-10 h-10 text-[#D0A98F] opacity-70" />
          </motion.div>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <AnimatePresence>
                {isInView && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#D0A98F] text-white flex items-center justify-center font-bold z-10"
                  >
                    {index + 1}
                  </motion.div>
                )}
              </AnimatePresence>

              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-[#2A2624]/90 backdrop-blur-sm h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8C4B8] to-[#D0A98F]"></div>

                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-20 h-20 rounded-full bg-[#F9F6F4] dark:bg-[#3A322E] border border-[#E8C4B8]/50 dark:border-[#8A6D63]/30 flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      <img src={step.icon || "/placeholder.svg"} alt="" className="w-12 h-12 object-contain" />
                    </motion.div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-semibold mb-3 text-[#8A6D63] dark:text-[#F4E7E2]">{step.title}</h3>
                      <p className="text-[#8A6D63]/80 dark:text-[#F4E7E2]/70">{step.description}</p>
                    </div>
                  </div>

                  {/* Decorative corner shape */}
                  <svg
                    className="absolute bottom-0 right-0 w-20 h-20 text-[#F4E7E2] dark:text-[#3A322E] opacity-50"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,100 L100,100 L100,0 Z" />
                  </svg>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-10"
        >
        

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="h-px w-full max-w-md mx-auto mt-12 bg-gradient-to-r from-transparent via-[#D0A98F]/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
)

export default Customizationsec2
