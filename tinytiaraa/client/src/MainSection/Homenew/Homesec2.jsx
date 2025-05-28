"use client"

import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "./custom.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useInView } from "framer-motion"
import axios from "axios"
import { server,imgdburl } from "@/server"
import { useNavigate } from "react-router-dom"


const Homesec2 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedType, setSelectedType] = useState("gold")
    const [loading, setLoading] = useState(true);
  
  // const [isInView, setIsInView] = useState(false)
   const navigate = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

   useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get(`${server}/get-allcategories`);
          const filteredAndSortedCategories = response.data.categories
          
          .sort((a, b) => a.order - b.order); 
          // console.log(filteredAndSortedCategories,"filtered sort category")
          setCategories(filteredAndSortedCategories);
        } catch (error) {
          console.error('Error fetching categories:', error);
          alert('Failed to fetch categories');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);

   const handleViewProducts = (categoryTitle) => {
    navigate(`/products?category=${categoryTitle}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Set isInView to true after component mounts to trigger animations
  // useEffect(() => {
  //   setIsInView(true)
  // }, [])

 

  const filteredCategories = categories.filter((cat) => cat.type === selectedType)

  // Split into chunks of 4
  const chunks = []
  for (let i = 0; i < filteredCategories.length; i += 4) {
    chunks.push(filteredCategories.slice(i, i + 4))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.2,
      },
    },
  }

  const slideInVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.4,
      },
    },
  }

  const slideInRightVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.6,
      },
    },
  }

  return (
    <motion.div
      className="bg h-auto min-h-[85vh] py-14 flex justify-center items-center px-4 overflow-hidden"
      
      variants={fadeInVariants}
     
    >
      <motion.div
        className="h-auto min-h-[65vh] w-full max-w-7xl flex flex-wrap justify-center items-stretch gap-4 bg-[#ffffffdc] p-3 sm:p-8 rounded-xl shadow-lg"
        
        ref={ref}
        variants={scaleUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Column 1 */}
        <motion.div
          className="relative w-full h-full xl:h-[350px] xl:w-[200px] flex flex-col justify-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm"
          variants={slideInVariants}
        >
          {/* Optional content placeholder */}
          <motion.h2
        className="text-xl md:text-2xl font-bold leading-tight bg-gradient-to-r from-[#D8B4A0] to-[#B67F6D] bg-clip-text text-transparent"

        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        {"Kids & InfantsJewlery".split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.05 * index,
                  duration: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              },
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
            className="w-16 h-1 bg-gradient-to-r  from-[#D8B4A0] to-[#B67F6D] mt-1.5 rounded-full"
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "4rem",
                transition: { delay: 0.8, duration: 0.8 },
              },
            }}
          />
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="h-[350px] w-full md:w-[250px] flex items-center justify-center rounded-lg bg-[#F4E7E2] border border-gray-100 shadow-sm overflow-hidden"
          variants={slideInVariants}
        
        >
          <motion.img
            className="w-full h-full rounded-lg object-cover"
            src="https://i.pinimg.com/736x/99/c6/ab/99c6ab77c9c136b403aae270ae8c3eb2.jpg"
            alt="Jewelry showcase"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />
        </motion.div>

        {/* Column 3 - Adjusted to match Column 4 */}
        <motion.div
          className="h-auto xl:h-[350px] w-full md:w-[350px] grid grid-cols-2 grid-rows-2 gap-4 px-2"
          variants={containerVariants}
        >
          {/* Box 1 */}
          <motion.div
            className="bg-white flex items-center justify-center rounded-lg border border-gray-100 shadow-sm overflow-hidden"
            variants={itemVariants}
           
          >
            <motion.img
              className="w-full h-full rounded-lg object-cover"
              src={
              selectedType === "gold" ? 
              "https://i.pinimg.com/736x/cd/df/22/cddf228c201a446720f41bf912689c3e.jpg"
              :
              "https://i.pinimg.com/736x/46/80/b1/4680b18ccd08f0244580fe6ac4c728e5.jpg"
              }
                
              alt="Jewelry item"
                initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            />
          </motion.div>

          {/* Box 2 */}
          <motion.div
            className="bg-white flex items-center justify-center rounded-lg border border-gray-100 shadow-sm overflow-hidden"
            variants={itemVariants}
            
           
          >
            <motion.img
              className="w-full h-full rounded-lg object-cover"
               src={
                selectedType === "gold" ? 
              "https://i.pinimg.com/736x/0e/d6/a4/0ed6a42a9e60cb7ab47252605db8f1d6.jpg"
              :
              "https://i.pinimg.com/736x/c4/e7/27/c4e7271a7b8d148ae905dc2514d25b72.jpg"
               }
              alt="Jewelry item"
               initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            />
          </motion.div>

          <motion.div
            className="col-span-2 h-[230px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            variants={itemVariants}
          
          >
            {/* Tabs Controller */}
            <Tabs value={selectedType} onValueChange={(value) => setSelectedType(value)} className="w-full h-full ">
              {/* Tab Contents */}
              <div className="flex-1 overflow-hidden">
                <TabsContent value="gold" className="h-full !mt-0">
                  <motion.div
                    className="h-full w-full overflow-hidden rounded-b-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      className="w-full max-h-[193px] object-cover"
                      src="https://i.pinimg.com/736x/3d/76/74/3d76748b167171309cc2b94de26ef305.jpg"
                      alt="Gold Product"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                      }}
                    />
                  </motion.div>
                </TabsContent>
                <TabsContent value="silver" className="h-full !mt-0">
                  <motion.div
                    className="h-full w-full overflow-hidden rounded-b-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      className="w-full max-h-[193px] object-cover"
                      src="https://i.pinimg.com/736x/2c/84/c9/2c84c9c4c7d04084d9e25c6451df4c00.jpg"
                      alt="Silver Product"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                      }}
                    />
                  </motion.div>
                </TabsContent>
              </div>

              <TabsList className="w-full flex justify-center gap-1 p-1 bg-gray-50 border-b border-gray-200">
                <TabsTrigger
                  value="gold"
                  className="!cursor-pointer w-full text-xs px-3 py-1.5 rounded-md data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700 data-[state=active]:border data-[state=active]:border-yellow-200 data-[state=active]:shadow-sm transition-all flex items-center gap-1"
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-yellow-400"
                    animate={{ scale: selectedType === "gold" ? [1, 1.2, 1] : 1 }}
                    transition={{
                      repeat: selectedType === "gold" ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 2,
                      duration: 0.5,
                    }}
                  ></motion.span>
                  Gold
                </TabsTrigger>
                <TabsTrigger
                  value="silver"
                  className="!cursor-pointer  w-full text-xs px-3 py-1.5 rounded-md data-[state=active]:bg-gray-50 data-[state=active]:text-gray-700 data-[state=active]:border data-[state=active]:border-gray-200 data-[state=active]:shadow-sm transition-all flex items-center gap-1"
                >
                  <motion.span
                    className="w-2 h-2 rounded-full bg-gray-400"
                    animate={{ scale: selectedType === "silver" ? [1, 1.2, 1] : 1 }}
                    transition={{
                      repeat: selectedType === "silver" ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 2,
                      duration: 0.5,
                    }}
                  ></motion.span>
                  Silver
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </motion.div>

        {/* Column 4 - Matched to Column 3 */}
        <motion.div className="h-auto sm:h-[420px]  w-full md:w-[350px] flex flex-col" variants={slideInRightVariants}>
          <motion.div
            className="h-auto sm:h-[490px] relative rounded-lg overflow-hidden mb-1"
           
          >
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              className="h-full w-full"
            >
              {chunks.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="h-full w-full grid grid-cols-2 grid-rows-2 gap-4 px-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={selectedType + index} // Force re-animation when type changes
                  >
                    {chunk.map((category, idx) => (
                      <motion.div
                        key={idx}
                        className="cursor-pointer bg-[#F4E7E2] flex flex-col items-center justify-start rounded-lg border border-gray-100 transition-colors overflow-hidden"
                        variants={itemVariants}
                        onClick={() => handleViewProducts(category?.title)}
                      >
                        <motion.img
                          src={`${imgdburl}${category.bannerimg.url}`}
                          alt={category.title}
                          className="w-full h-[180px] object-cover"
                          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                        />

                        <motion.div
                          className="w-full p-2 text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                        >
                          <h5 className="text-xs font-medium text-[#B67F6D] leading-tight truncate">{category.title}</h5>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            className="custom-pagination flex justify-center gap-1 mt-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Homesec2
