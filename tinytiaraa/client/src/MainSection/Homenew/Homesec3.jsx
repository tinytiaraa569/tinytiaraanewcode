"use client"

import React, { useEffect, useMemo, useState, useCallback } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import axios from "axios"
import { server } from "@/server"
import ProductCard from "../Productcard/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "@/redux/actions/product"

// Memoized SparkleEffect component to prevent unnecessary re-renders
const SparkleEffect = React.memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
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
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="text-amber-300 w-3 h-3" />
          </motion.div>
        );
      })}
    </div>
  );
});

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ITEMS_PER_PAGE = 20

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const slideIn = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const tabFade = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
}

// Memoized TypeSelector component
const TypeSelector = React.memo(({ activeType, setActiveType }) => (
  <Tabs
    value={activeType}
    onValueChange={setActiveType}
    className="flex justify-center mb-8"
  >
    <TabsList className="h-9 rounded-full p-1 bg-white border border-gray-200">
      <TabsTrigger
        value="gold"
        className="cursor-pointer rounded-full px-4 py-1 text-sm transition-all
                   data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700
                   data-[state=active]:shadow-sm data-[state=active]:shadow-amber-100"
      >
        Gold
      </TabsTrigger>
      <TabsTrigger
        value="silver"
        className="cursor-pointer rounded-full px-4 py-1 text-sm transition-all
                   data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700
                   data-[state=active]:shadow-sm data-[state=active]:shadow-blue-100"
      >
        Silver
      </TabsTrigger>
    </TabsList>
  </Tabs>
))

// Memoized NavigationButton component
const NavigationButton = React.memo(({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full ${
      disabled
        ? "bg-stone-100 text-stone-300 cursor-not-allowed"
        : "bg-white text-stone-600 shadow-md hover:bg-stone-50"
    } ${direction === "prev" ? "left-0" : "right-0"}`}
  >
    {direction === "prev" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
  </button>
))

// Memoized ViewMoreButton component
const ViewMoreButton = React.memo(({ onClick, hasMore }) => (
  <motion.button
    onClick={onClick}
    disabled={!hasMore}
    whileHover={{ scale: hasMore ? 1.04 : 1 }}
    whileTap={{ scale: hasMore ? 0.96 : 1 }}
    className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
      ${hasMore
        ? "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
        : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
      }`}
  >
    {hasMore ? (
      <>
        View More 
        <ArrowRight className="w-4 h-4" />
      </>
    ) : (
      "No More Items"
    )}
  </motion.button>
));

const PendantsCategory = ["Religious Collections", "Diamond Pendants","Pearl Collection", "Tabeez Collection"];
const EarringsCategory = ["Diamond Earrings", "Silver Earrings"];
const BraceletsCategory = [
  "Diamond Bracelets",
  "Diamond Black Bead Bracelets",
  "Silver Bangles",
  "Nazariya",
];
const Pendant_SetsCatgeory =["Sets" ,"Pearl Collection" ]
const Traditional_JewelryCatgeory =["Traditional Silver Jewelry", "Kids Accessories" ,"Tabeez Collection" ]


const Homesec3 = ({products}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [activeTab, setActiveTab] = useState("pendants");
  const [activeType, setActiveType] = useState("gold");
  const [page, setPage] = useState(1);
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [categories, setCategories] = useState([]);
  
  // const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Memoized category data
  const getSelectedCategories = useCallback((type) => {
    switch (type) {
      case "pendants":
        return PendantsCategory;
      case "earrings":
        return EarringsCategory;
      case "bracelets":
        return BraceletsCategory;
      case "pendant sets":
        return Pendant_SetsCatgeory;
      case "traditional jewelry":
        return Traditional_JewelryCatgeory;
      default:
        return [];
    }
  }, []);

  // Fetch categories only once on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/get-allcategories`);
        const filteredAndSortedCategories = response.data.categories;
        setCategories(filteredAndSortedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } 
    };
    fetchCategories();
  }, []);

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Filter products function with useCallback to prevent unnecessary recreations
  const filterProducts = useCallback(() => {
    const selectedCategoryTitles = getSelectedCategories(activeTab);
    const matchedCategoryTitles = categories
      .filter((cat) => selectedCategoryTitles?.includes(cat?.title) && cat?.type === activeType)
      .map((cat) => cat?.title);

    const filtered = products
      ?.filter((product) => matchedCategoryTitles.includes(product?.category))
      ?.filter((product) => product?.isLive === undefined || product?.isLive)
      ?.sort((a, b) => (b?.sold_out || 0) - (a?.sold_out || 0)) || [];

    // Remove duplicate products by _id
    const uniqueProducts = Array.from(new Map(filtered.map(p => [p?._id, p])).values());
    setFilteredData(Array.from(uniqueProducts));
  }, [activeTab, activeType, categories, getSelectedCategories, products]);

  // Update filtered data when dependencies change
  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  // Reset page and swiper position when tab or type changes
  useEffect(() => {
    setPage(1);
    if (swiper) {
      swiper.slideTo(0, 0); // Instant transition without animation
    }
  }, [activeTab, activeType, swiper]);

  // Memoized paginated data
  const paginatedData = useMemo(() => {
    return filteredData.slice(0, page * ITEMS_PER_PAGE);
  }, [filteredData, page]);

  const hasMoreItems = filteredData.length > paginatedData.length;

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

 const handleSlideChange = useCallback((swiperInstance) => {
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  }, []);
  const onSwiperInit = useCallback((swiperInstance) => {
    setSwiper(swiperInstance);
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
    // Force update navigation state
    setTimeout(() => {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }, 100);
  }, []);

  // Update swiper when filtered data changes
  useEffect(() => {
    if (swiper) {
      swiper.update();
      setTimeout(() => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }, 100);
    }
  }, [filteredData, swiper]);

  return (
    <motion.div
      className="relative w-full py-10 px-4 lg:px-12 bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <SparkleEffect />
      <motion.div className="flex flex-col  mb-4" variants={staggerContainer}>
        <motion.h3
          className="pl-3 font-bold text-lg sm:text-xl md:text-xl lg:text-xl tracking-wide text-stone-800"
          variants={slideIn}
        >
          BEST SELLERS
        </motion.h3>

        <Tabs 
          defaultValue="pendants" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <motion.div variants={fadeIn}>
            <TabsList className="mb-2 flex justify-start flex-wrap bg-transparent h-auto p-1 relative text-sm font-medium text-stone-500">
              {["pendants", "earrings", "bracelets" ,"pendant sets" , "traditional jewelry"].map((tab, index, array) => (
                <div key={tab} className="flex items-center space-x-2 my-1 ml-2">
                  <TabsTrigger
                    value={tab}
                    className={cn(
                      "cursor-pointer relative px-2.5 capitalize transition-all duration-300",
                      "hover:text-stone-700",
                    )}
                  >
                    {tab}
                  </TabsTrigger>

                  {index < array.length - 1 && (
                    <div className="h-4 flex items-center">
                      <Separator orientation="vertical" className="bg-stone-400 w-[1px] h-full" />
                    </div>
                  )}
                </div>
              ))}
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {["pendants", "earrings", "bracelets" ,"pendant sets" , "traditional jewelry"].map((tab) => (
              <TabsContent 
                key={tab} 
                value={tab} 
                className="relative"
                forceMount // This keeps the content mounted when switching tabs
                style={{ display: activeTab === tab ? 'block' : 'none' }} // Prevent layout shift
              >
                <motion.div
                  key={`${tab}-${activeType}`}
                  variants={tabFade}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-2"
                >
                  <div className="flex justify-center gap-3 !mb-2">
                    <TypeSelector activeType={activeType} setActiveType={setActiveType} />
                  </div>
                  

                  {filteredData.length > 0 ? (
                    <motion.div
                      className="relative"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                      transition={{ delay: 0.2 }}
                    >
                      <button
                        className={`swiper-button-prev-${activeTab}-${activeType} absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full left-0 ${
                          isBeginning
                            ? "bg-stone-100 text-stone-300 cursor-not-allowed"
                            : "bg-white text-stone-600 shadow-md hover:bg-stone-50 hover:shadow-lg transition-all duration-200"
                        }`}
                        onClick={() => swiper?.slidePrev()}
                        disabled={isBeginning}
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={18}
                        slidesPerView="auto"
                        onSwiper={onSwiperInit}
                        onSlideChange={handleSlideChange}
                        navigation={{
                          prevEl: `.swiper-button-prev-${activeTab}-${activeType}`,
                          nextEl: `.swiper-button-next-${activeTab}-${activeType}`,
                        }}
                        className="w-full pb-12"
                        observer={true}
                        observeParents={true}
                        watchSlidesProgress={true}
                       
                      >
                        {paginatedData.map((product, idx) => (
                          <SwiperSlide key={`product-${idx}`}   className="!w-[240px] sm:!w-[265px] h-auto">
                            <motion.div
                              variants={fadeInUp}
                              custom={idx}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="h-full"
                            >
                              <ProductCard data={product} />
                            </motion.div>
                          </SwiperSlide>
                        ))}

                        {hasMoreItems && (
                          <SwiperSlide style={{ width: "265px", height: "auto" }}>
                            <div className="h-full flex items-center justify-center p-4">
                              <ViewMoreButton onClick={handleLoadMore} hasMore={hasMoreItems} />
                            </div>
                          </SwiperSlide>
                        )}
                      </Swiper>

                     <button
                        className={`swiper-button-next-${activeTab}-${activeType} absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full right-0 ${
                          isEnd
                            ? "bg-stone-100 text-stone-300 cursor-not-allowed"
                            : "bg-white text-stone-600 shadow-md hover:bg-stone-50 hover:shadow-lg transition-all duration-200"
                        }`}
                        onClick={() => swiper?.slideNext()}
                        disabled={isEnd}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.p
                      className="text-center text-stone-400 py-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      No {tab} found in this category.
                    </motion.p>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}

export default Homesec3;