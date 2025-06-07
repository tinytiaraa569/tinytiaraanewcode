"use client"

import { motion } from "framer-motion"
import loaderimg from './loader.webp'

export default function LoadingOverlay({ isVisible }) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          {/* Main logo with multiple loading effects */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ 
              scale: [0.95, 1, 0.95],
              opacity: [0.8, 1, 0.8],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 2.0,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img 
              src={loaderimg} 
              alt="Loading"
              className="w-20 h-20 object-contain"
              initial={{ filter: 'grayscale(20%)' }}
              animate={{
                filter: ['grayscale(20%)', 'grayscale(0%)', 'grayscale(20%)'],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Circular loading indicator around image */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent border-t-[#D7A295] rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          {/* Subtle pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#D7A295]/10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading text with smooth animation */}
        <motion.p 
          className="mt-6 text-[#6d4c3d] font-medium text-sm tracking-wider"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.4 }}
        >
          <motion.span
            className="inline-block"
            animate={{ 
              opacity: [0.8, 1, 0.8],
              letterSpacing: ['0.1em', '0.15em', '0.1em']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading Your Collection
          </motion.span>
        </motion.p>

        {/* Minimal progress bar */}
        <motion.div 
          className="mt-4 w-36 h-0.5 bg-[#e8dcd5] overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#D7A295] to-[#b3887a]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.65, 0, 0.35, 1]
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}