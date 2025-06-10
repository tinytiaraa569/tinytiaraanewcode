"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Share2, X } from "lucide-react"
import React from "react"
import { useState } from "react"
import { FaGift, FaInstagram, FaPinterest, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { SiFacebook } from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/tiny_tiaraa",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    hoverColor: "bg-gradient-to-br from-purple-600 to-pink-600",
    tooltip: "Follow us on Instagram"
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://www.facebook.com/people/Tiny-Tiaraa/61551799145871",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    hoverColor: "bg-gradient-to-br from-blue-700 to-blue-900",
    tooltip: "Like our Facebook page"
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@TinyTiaraa",
    color: "bg-gradient-to-br from-red-500 to-red-700",
    hoverColor: "bg-gradient-to-br from-red-600 to-red-800",
    tooltip: "Subscribe to our YouTube"
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://web.whatsapp.com/send?phone=+918657062511",
    color: "bg-gradient-to-br from-green-500 to-green-700",
    hoverColor: "bg-gradient-to-br from-green-600 to-green-800",
    tooltip: "Chat with us on WhatsApp"
  },
  {
    name: "Pinterest",
    icon: FaPinterest,
    url: "https://www.pinterest.com/tiny_tiaraa657",
    color: "bg-gradient-to-br from-red-600 to-red-800",
    hoverColor: "bg-gradient-to-br from-red-700 to-red-900",
    tooltip: "Follow us on Pinterest"
  },
  {
    name: "Spin & Win",
    icon: FaGift, // Consider replacing with a game icon
    url: "/spinandwin",
    color: "bg-gradient-to-br from-amber-500 to-amber-700",
    hoverColor: "bg-gradient-to-br from-amber-600 to-amber-800",
    tooltip: "Try your luck with Spin & Win"
  },
]

const FloatingSocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="fixed left-6 bottom-4 z-50">
      {/* Social Media Icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col space-y-3 mb-4 items-start"
          >
            {socialLinks.map((social) => (
              <TooltipProvider key={social.name} delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 ${social.color} hover:${social.hoverColor} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative group`}
                      style={{
                        originY: 1,
                        originX: 0,
                      }}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                      
                      {/* Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: 1.5,
                          opacity: [0, 0.5, 0],
                          transition: { duration: 0.6 },
                        }}
                      />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-gray-800 text-white text-xs">
                    <p>{social.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={toggleOpen}
              className="w-12 h-12 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:from-[#BF9283] hover:to-[#7D6259] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: isOpen ? 45 : 0,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Icon */}
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-gray-800 text-white text-xs">
            {isOpen ? "Close menu" : "Share with us"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Connection Lines */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-12 left-6 pointer-events-none"
          >
            {socialLinks.map((_, index) => (
              <motion.div
                key={index}
                className="absolute -z-10 w-px bg-gradient-to-b from-[#F4E7E2]/20 to-transparent"
                style={{
                  height: `${(index + 1) * 48}px`,
                  bottom: 0,
                  left: "50%",
                  transformOrigin: "bottom",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingSocialMedia