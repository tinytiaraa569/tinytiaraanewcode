import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../Styles/styles';
import ProductCard from '../MainSection/Productcard/ProductCard';
import { motion } from "framer-motion"

function SuggestedProduct({ data }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const { products } = useSelector((state) => state.products);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (products && data) {
      // Filter products by both category and subcategory
      const filteredProducts = products.filter((product) => {
        return (
          product.category === data.category &&
          product.subcategory === data.subcategory
        );
      });

      // Limit to 5 products
      setProductData(filteredProducts.slice(0, 5));
    }
  }, [products, data]); // Re-run when products or data changes

  return (
    <div className="bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white !pt-8  !pb-10 relative overflow-hidden">
       <motion.div
        className="absolute z-0 top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute z-0 top-40 right-20 w-16 h-16 bg-pink-200/30 rotate-45"
        animate={{
          y: [10, -10, 10],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {data && (
        <div className={`relative z-10 !pt-6 p-4 w-full sm:w-11/12 mx-auto `}>
          <h2 className={` !text-[#D7A295] text-[22px] font-[500] font-Poppins `}>
            You may also like
          </h2>
          <div className="border-b border-[#E8D5CE]  !my-4"></div>
           <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 mt-2"
            >
            {productData &&
              productData.map((product, index) => (
                <ProductCard data={product} key={index} />
              ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default SuggestedProduct;
