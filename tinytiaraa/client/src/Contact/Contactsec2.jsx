"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { MapPin, ExternalLink, Phone, Mail, Clock, Sparkles } from 'lucide-react'

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

const ContactSec2 = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-[#F9F6F4] to-[#F4E7E2]">
        <SparkleEffect />
      {/* Simple and light background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient background */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(200,167,155,0.2),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_30%_70%,rgba(200,167,155,0.2),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#F4E7E2] opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#C8A79B] opacity-20 blur-3xl"></div>

        {/* Simple geometric shapes */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-[200px] h-[200px] opacity-5"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#B67F6D" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" stroke="#B67F6D" strokeWidth="1" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[15%] left-[5%] w-[150px] h-[150px] opacity-5"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 80,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" stroke="#D8A99D" strokeWidth="1" />
            <rect x="35" y="35" width="30" height="30" stroke="#D8A99D" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Subtle floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#F4E7E2]"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
         
          
           initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-[#B67F6D] mb-1">Visit Us</h2>
          <p className="text-[#B67F6D]/70 max-w-xl mx-auto">
            Experience our exquisite jewelry collection in person at our Mumbai location.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            animate={controls}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#F4E7E2]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Store image and info */}
              <div className="relative h-[300px] md:h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://tiny-tiaraanew.vercel.app/assets/office-BNYsVGP5.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[black]/80 via-[#B67F6D]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
                    }}
                  >
                    <div className="inline-flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                        <img
                          src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
                          alt="Tiny Tiaraa Logo"
                          className="h-5 w-5 object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">Tiny Tiaraa</h3>
                    </div>

                    <p className="text-white/90 mb-4">Mumbai Flagship Store</p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Office MIDC, Mumbai, Maharashtra</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>+91 98765 43210</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right side - Map and contact */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
                  }}
                >
                  <h3 className="text-xl font-semibold text-[#B67F6D] mb-6">Find Us On The Map</h3>

                  <div className="rounded-lg overflow-hidden shadow-sm mb-6 h-[200px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.227470998889!2d72.86813600017196!3d19.124594023259718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90071c06cc9%3A0x301cff455d8de28f!2sOffice%20MIDC!5e0!3m2!1sen!2sin!4v1718170611759!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#F4E7E2]/20 p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <Mail className="h-4 w-4 text-[#B67F6D] mr-2" />
                        <h4 className="font-medium text-[#B67F6D] text-sm">Email</h4>
                      </div>
                      <p className="text-[#B67F6D]/70 text-xs">contact@tinytiaraa.com</p>
                    </div>
                    <div className="bg-[#F4E7E2]/20 p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <Clock className="h-4 w-4 text-[#B67F6D] mr-2" />
                        <h4 className="font-medium text-[#B67F6D] text-sm">Hours</h4>
                      </div>
                      <p className="text-[#B67F6D]/70 text-xs">Mon-Sat: 10AM-7PM</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#B67F6D] hover:bg-[#B67F6D]/90 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-all"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/Office+MIDC/@19.124594,72.868136,15z/data=!4m5!3m4!1s0x3be7c90071c06cc9:0x301cff455d8de28f!8m2!3d19.124594!4d72.868136",
                        "_blank",
                      )
                    }
                  >
                    <span className="mr-2">Get Directions</span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactSec2
