"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "../Productcard/ProductCard"
import axios from "axios"
import { server } from "@/server"

const CHUNK_SIZE = 20

const Homesec4 = ({ products = [] }) => {
  const [categories, setCategories] = useState([])
  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE)
  const [goldVisibleCount, setGoldVisibleCount] = useState(CHUNK_SIZE)
  const [silverVisibleCount, setSilverVisibleCount] = useState(CHUNK_SIZE)
  const [swiper, setSwiper] = useState(null)
  const [goldSwiper, setGoldSwiper] = useState(null)
  const [silverSwiper, setSilverSwiper] = useState(null)
  const [activeTab, setActiveTab] = useState("all")

  // Fetch categories only once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/get-allcategories`)
        setCategories(response.data.categories || [])
      } catch (error) {
        console.error("Error fetching categories:", error)
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  // Memoize filtered data to prevent infinite loops
  const filteredData = useMemo(() => {
    if (!products || !Array.isArray(products)) return []

    return products
      .filter((product) => product?.isLive === undefined || product?.isLive)
      .sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt))
  }, [products])

  // Memoize category titles to prevent recalculation
  const categoryTitles = useMemo(() => {
    if (!categories.length) return { gold: [], silver: [] }

    return {
      gold: categories.filter((cat) => cat.type === "gold").map((cat) => cat.title),
      silver: categories.filter((cat) => cat.type === "silver").map((cat) => cat.title),
    }
  }, [categories])

  // Memoize filtered products by type
  const goldProducts = useMemo(() => {
    if (!categoryTitles.gold.length || !filteredData.length) return []
    return filteredData.filter((product) => categoryTitles.gold.includes(product.category))
  }, [filteredData, categoryTitles.gold])

  const silverProducts = useMemo(() => {
    if (!categoryTitles.silver.length || !filteredData.length) return []
    return filteredData.filter((product) => categoryTitles.silver.includes(product.category))
  }, [filteredData, categoryTitles.silver])

  // Memoize visible products
  const visibleProducts = useMemo(() => filteredData.slice(0, visibleCount), [filteredData, visibleCount])
  const visibleGoldProducts = useMemo(() => goldProducts.slice(0, goldVisibleCount), [goldProducts, goldVisibleCount])
  const visibleSilverProducts = useMemo(
    () => silverProducts.slice(0, silverVisibleCount),
    [silverProducts, silverVisibleCount],
  )

  // Memoize handlers
  const handleViewMore = useCallback(() => {
    setVisibleCount((prev) => prev + CHUNK_SIZE)
  }, [])

  const handleGoldViewMore = useCallback(() => {
    setGoldVisibleCount((prev) => prev + CHUNK_SIZE)
  }, [])

  const handleSilverViewMore = useCallback(() => {
    setSilverVisibleCount((prev) => prev + CHUNK_SIZE)
  }, [])

  // Get active swiper based on current tab
  const getActiveSwiper = () => {
    switch (activeTab) {
      case "gold":
        return goldSwiper
      case "silver":
        return silverSwiper
      default:
        return swiper
    }
  }

  // Memoize ProductSection to prevent unnecessary re-renders
  const ProductSection = useCallback(
    ({ visibleProducts, filteredProducts, visibleCount, swiper, setSwiper, handleViewMore }) => (
      <>
        {visibleProducts.length > 0 ? (
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
            transition={{ delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView="auto"
              onSwiper={setSwiper}
              className="w-full pb-12"
              observer={true}
              observeParents={true}
            >
              {visibleProducts.map((product, idx) => (
                <SwiperSlide key={product._id || idx} style={{ width: "265px", height: "auto" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="h-full select-none"
                  >
                    <ProductCard data={product} />
                  </motion.div>
                </SwiperSlide>
              ))}

              {visibleCount < filteredProducts.length && (
                <SwiperSlide style={{ width: "265px" }}>
                  <div className="flex items-center justify-center h-[330px] border border-dashed rounded-lg p-4">
                    <button
                      onClick={handleViewMore}
                      className="text-sm px-4 py-2 rounded-sm bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:opacity-90 text-white border-0"
                      type="button"
                    >
                      View More
                    </button>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </motion.div>
        ) : (
          <motion.p
            className="text-center text-stone-400 py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            No products found.
          </motion.p>
        )}
      </>
    ),
    [],
  )

  return (
    <div className="py-10 px-4 lg:px-14">
      {/* Main Heading with Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
         <div>
          <h1 className="text-2xl font-bold text-[#9A7B74]">New Arrivals</h1>
          <p className="text-stone-500 text-sm">Discover the latest additions</p>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => getActiveSwiper()?.slidePrev()}
            className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
            type="button"
          >
            <ChevronLeft size={18} className="text-[#9A7B74] font-bold" />
          </button>
          <button
            onClick={() => getActiveSwiper()?.slideNext()}
            className="p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
            type="button"
          >
            <ChevronRight size={18} className="text-[#9A7B74] font-bold" />
          </button>
        </div>
      </div>

      <Tabs 
        defaultValue="all" 
        className="w-full"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList className="grid w-full max-w-sm mx-auto grid-cols-3 mb-8 bg-[#F4E7E2]/70 p-1 rounded-lg">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D8B4A0] data-[state=active]:to-[#D7A295] data-[state=active]:text-white text-[#9A7B74] font-medium transition-all duration-300"
          >
            All Products
          </TabsTrigger>
          <TabsTrigger
            value="gold"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D8B4A0] data-[state=active]:to-[#D7A295] data-[state=active]:text-white text-[#9A7B74] font-medium transition-all duration-300"
          >
             Gold
          </TabsTrigger>
          <TabsTrigger
            value="silver"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D8B4A0] data-[state=active]:to-[#D7A295] data-[state=active]:text-white text-[#9A7B74] font-medium transition-all duration-300"
          >
             Silver
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="all" className="mt-0">
            <ProductSection
              visibleProducts={visibleProducts}
              filteredProducts={filteredData}
              visibleCount={visibleCount}
              swiper={swiper}
              setSwiper={setSwiper}
              handleViewMore={handleViewMore}
            />
          </TabsContent>

          <TabsContent value="gold" className="mt-0">
            <ProductSection
              visibleProducts={visibleGoldProducts}
              filteredProducts={goldProducts}
              visibleCount={goldVisibleCount}
              swiper={goldSwiper}
              setSwiper={setGoldSwiper}
              handleViewMore={handleGoldViewMore}
            />
          </TabsContent>

          <TabsContent value="silver" className="mt-0">
            <ProductSection
              visibleProducts={visibleSilverProducts}
              filteredProducts={silverProducts}
              visibleCount={silverVisibleCount}
              swiper={silverSwiper}
              setSwiper={setSilverSwiper}
              handleViewMore={handleSilverViewMore}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Homesec4
