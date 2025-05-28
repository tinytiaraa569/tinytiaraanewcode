"use client"
import { motion } from "framer-motion"
import { Truck, Clock, Shield, Star, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Customizationsec5 = () => {
  const deliverySteps = [
    {
      icon: Star,
      title: "Order Processing",
      description: "Your custom design is reviewed and approved",
      time: "1-2 days",
    },
    {
      icon: Clock,
      title: "Crafting Period",
      description: "Expert artisans create your unique piece",
      time: "10-11 days",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Thorough inspection and final touches",
      time: "1-2 days",
    },
    {
      icon: Truck,
      title: "Secure Shipping",
      description: "Carefully packaged and shipped to you",
      time: "1-2 days",
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
    <section className="py-14 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0  -z-10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI0IiBmaWxsPSIjRThDNEI4IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] [background-size:40px_40px]"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_70%_30%,rgba(232,196,184,0.3),transparent_70%)] -z-10"></div>
      {/* <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_30%_70%,rgba(232,196,184,0.3),transparent_70%)] -z-10"></div> */}

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <Badge className="mb-4 bg-[#C8A79B] hover:bg-[#BF9283] text-white">Delivery Promise</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#8A6D63]">
            Fast, <span className="italic text-[#C8A79B]">Secure</span> Delivery
          </h2>
          <p className="text-[#8A6D63]/80 max-w-3xl mx-auto text-lg leading-relaxed">
            We understand that you're excited to wear your custom creation, so we've streamlined our production process
            to get your jewelry to you as swiftly as possible.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8C4B8]/10 via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E8C4B8] via-[#D0A98F] to-[#C8A79B]"></div>

            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Promise */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-16 h-16 bg-gradient-to-br from-[#D0A98F] to-[#C8A79B] rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Shield className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-[#8A6D63]">14 Days</h3>
                        <p className="text-[#8A6D63]/70">Guaranteed Delivery</p>
                      </div>
                    </div>

                    <p className="text-[#8A6D63]/80 text-lg leading-relaxed">
                      In just 14 business days, your masterpiece will be delivered securely to your doorstep, ready to
                      adorn your life with elegance and meaning.
                    </p>
                  </motion.div>

                  {/* Features list */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4"
                  >
                    {[
                      "Insured shipping with full tracking",
                      "Secure packaging to protect your jewelry",
                      "Direct doorstep delivery",
                      "Quality guarantee on every piece",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#D0A98F] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#8A6D63]/80">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right side - Process */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-6"
                >
                  {deliverySteps.map((step, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <div className="flex items-center gap-4 p-4 bg-[#F9F6F4] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="w-12 h-12 bg-gradient-to-br from-[#E8C4B8] to-[#D0A98F] rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-[#8A6D63]">{step.title}</h4>
                            <Badge variant="outline" className="border-[#E8C4B8] text-[#8A6D63] text-xs">
                              {step.time}
                            </Badge>
                          </div>
                          <p className="text-sm text-[#8A6D63]/70">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-[#F9F6F4] border-2 border-[#E8C4B8] flex items-center justify-center shadow-lg">
            <Truck className="w-8 h-8 text-[#D0A98F]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Customizationsec5
