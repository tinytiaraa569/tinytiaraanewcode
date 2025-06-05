import React from 'react';
import ProductCard from '../MainSection/Productcard/ProductCard';
import styles from '../Styles/styles';
import { motion } from "framer-motion"

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
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }
function RecentlyViewedProducts({ recentlyViewed }) {
  return (
    <div className=' bg-gradient-to-t from-[white] via-[#F9F6F4] to-white !pt-8  !pb-10 relative overflow-hidden'>
      <div className={`p-4 w-full sm:w-11/12 mx-auto`}>
        <h2 className={`!text-[#D7A295] text-[22px] font-[500] font-Poppins`}>
          Recently Viewed Products
        </h2>
        <div className="border-b border-[#E8D5CE]  !my-4"></div>

       <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 mt-2"
            >
          {recentlyViewed && recentlyViewed.length > 0 ? (
            recentlyViewed.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))
          ) : (
            <p className="text-center">No recently viewed products</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default RecentlyViewedProducts;
