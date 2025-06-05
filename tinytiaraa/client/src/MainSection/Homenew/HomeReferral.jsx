"use client"
import { motion } from "framer-motion"
import { UserPlus, Link, Share2, Gift, ArrowRight, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HomeReferral = () => {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Sign Up",
      description: "Create an account on our platform to get started & Earn.",
    },
    {
      id: 2,
      icon: Link,
      title: "Generate Link",
      description: "Generate your unique referral link from your dashboard.",
    },
    {
      id: 3,
      icon: Share2,
      title: "Share",
      description: "Share your referral link with your friends and family & Earn.",
    },
    {
      id: 4,
      icon: Gift,
      title: "Get Reward",
      description: "Get 5% for every order; rewards will be credited 7 days after acceptance.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const floatingShapes = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full opacity-20 hidden sm:block"
      style={{
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        background: `linear-gradient(45deg, #F4E7E2, #E8D5CE)`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  ))

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#F9F6F4] to-white">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">{floatingShapes}</div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-10 lg:gap-12 items-center mb-12 md:mb-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              >
                <span className="text-[#8A6D63]">Referral <span className="text-[#C8A79B]">Program</span></span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg text-[#8A6D63]/80 leading-relaxed mb-6 md:mb-8"
              >
                Invite your friends to shop at Tiny Tiaraa and give them a special 5% discount on their first purchase. As a thank you, you'll earn rewards up to 5% off.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
            >
              {["Easy Setup", "Instant Rewards", "Track Progress", "Share Anywhere"].map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#C8A79B]" />
                  <span className="text-[#8A6D63] font-medium text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-2"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C0ADA2] to-[#A89688] hover:from-[#A89688] hover:to-[#8B7355] text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl shadow-lg w-full sm:w-auto"
              >
                Start Earning Today
              </Button>
            </motion.div> */}
          </motion.div>

          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-video h-auto sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#E8D5CE] to-[#D4C1B8] rounded-xl md:rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-[#8B7355] ml-1" />
                  </motion.button>
                </div>

                {/* Video overlay info */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2">
                  <span className="text-white text-xs md:text-sm font-medium">2:30 Demo</span>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 md:w-4 md:h-4 bg-white/40 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-4 h-4 md:w-6 md:h-6 bg-white/30 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              {/* Decorative elements around video */}
              <motion.div
                className="absolute -z-10 -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-[#F4E7E2] rounded-full hidden sm:block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -z-10 -bottom-2 -left-2 w-5 h-5 md:w-6 md:h-6 bg-[#E8D5CE] rounded-full hidden sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>

        {/* Steps Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16"
        >
          {steps.map((step, index) => (
            <motion.div key={step.id} variants={itemVariants}>
              <Card className="cursor-pointer relative h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center relative z-10">
                  <motion.div
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-[#C8A79B]/20"
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {`0${step.id}`}
                  </motion.div>

                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#E8D5CE] to-[#D4C1B8] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#8A6D63] mb-2 sm:mb-4">{step.title}</h3>
                  <p className="text-[#8A6D63]/70 text-sm sm:text-base leading-relaxed">{step.description}</p>

                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute -right-0 top-1/2 transform -translate-y-1/2 z-20 opacity-75"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#C8A79B]" />
                    </motion.div>
                  )}
                </CardContent>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C8A79B]/5 to-[#C8A79B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:opacity-90 text-white px-8 py-5 sm:px-12 sm:py-6 text-lg sm:text-xl rounded-lg sm:rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Us Today
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HomeReferral