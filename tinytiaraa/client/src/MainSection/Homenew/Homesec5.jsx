"use client"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import infantsimg from './homebanner5/infantsimg.webp'
import momandmeimg from './homebanner5/momandmeimg.webp'
import kidsimg from './homebanner5/kidsimg.webp'
import teenimg from './homebanner5/teenimg.webp'



const Agefilterdata = [
  {
    label: "Infants 0-3 YRS",
    key: "infants",
    bg: infantsimg,
  },
  {
    label: "Kids 3-10 YRS",
    key: "kids",
    bg: kidsimg,
  },
  {
    label: "Teen",
    key: "teens",
    bg: teenimg,
  },
  {
    label: "Mom & Me",
    key: "momandme",
    bg: momandmeimg,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const Homesec5 = () => {
  const { products } = useSelector((state) => state.products)
    const navigate = useNavigate()


     const submitHandleagegroup = (ageGroupKey) => {
    if (!products || !ageGroupKey) {
      console.error("Products or ageGroupKey is missing")
      return
    }

    let filteredProducts = []

    if (ageGroupKey === "momandme") {
      filteredProducts = products.filter(
        (product) =>
          product.ageGroup &&
          (product.ageGroup.mom === true ||
            (product.ageGroup.infants === true && product.ageGroup.kids === true))
      )
    } else {
      filteredProducts = products.filter(
        (product) => product.ageGroup && product.ageGroup[ageGroupKey] === true
      )
    }

    // Navigate to the products page, passing filtered products in state
    navigate(`/products?ageGroup=${ageGroupKey}`, { state: { filteredProducts } })
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 overflow-hidden">
      {Agefilterdata.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // runs once, when 30% is visible
        >
          <div onClick={() => submitHandleagegroup(item.key)}>
            <Card className="cursor-pointer relative group h-64 overflow-hidden rounded-2xl shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.bg})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              <CardContent className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                  whileHover={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 border border-white text-white cursor-pointer font-medium"
                >
                  {item.label}
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Homesec5
