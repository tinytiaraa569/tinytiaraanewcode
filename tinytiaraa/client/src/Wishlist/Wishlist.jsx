import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import styles from '../Styles/styles';
import { IoBagHandleOutline } from 'react-icons/io5';
import { BsCartPlus } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '@/redux/actions/wishlist';
import { backend_url, imgdburl } from '@/server';
import { addToCart } from '@/redux/actions/cart';
import './wishlist.css'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingCart, Sparkles, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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


function Wishlist({ setOpenWishlist , isOpen = true  }) {
  <Helmet>
  <title>Safe, Certified and Registered Natural Diamond & Gold jewellery for infants and Kids</title>
  <meta name="description" content="Certified gold diamond & silver and CZ kid's jewellery at Tiny Tiaraa. Quality & safety-first pieces. Perfect fit for sensitive skin. Free shipping & 48-hour delivery*." />
  <meta name="keywords" content="Infants jewellery kids jewellery children's jewellery infant jewellery gold jewellery for kids silver jewellery for kids Diamond Jewellery for kids and infants natural diamond jewellery for kids CZ diamond jewellery for kids jewellery for kids jewellery for children jewellery for infants fine jewellery for kids dainty jewellery for kids Princess jewellery for kids Birthday jewellery for kids Holiday jewellery for kids Gift jewellery for kids Gift Cards Gold Saving plans" />
  <link rel="canonical" href="/wishlist" />

  </Helmet>

  const { wishlist } = useSelector((state) => state.wishlist)
  
  const dispatch = useDispatch()

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data))

  }
  const addToCartHandler = (data) =>{
    const newData =  {...data ,qty:1}

    dispatch(addToCart(newData))
    setOpenWishlist(false)
  }



  return (
     <AnimatePresence>
       <motion.div
         initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
       className='fixed top-0 left-0 w-full  inset-0 bg-black/20 backdrop-blur-sm z-50 min-h-screen overflow-y-scroll scrollbar-hide'
       >
       
        {/* Wishlist Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 min-h-screen w-full max-w-md bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white shadow-2xl z-50 flex flex-col"
          >
             <SparkleEffect />
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-6 border-b border-[#D8B4A0]/20"
            >
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-[#D7A295]" />
                <h2 className="text-xl font-semibold text-[#B67F6D]">Your Wishlist</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenWishlist(false)}
                className="hover:bg-[#D8B4A0]/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Content */}
            {wishlist.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex-1 flex flex-col items-center justify-center p-8"
              >
                <Heart className="h-16 w-16 text-[#D8B4A0] mb-4" />
                <h3 className="text-lg font-medium text-slate-700 mb-2">Your wishlist is empty</h3>
                <p className="text-slate-500 text-center">Save items you love to view them here later</p>
              </motion.div>
            )
            :
             <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between px-6 border-b border-[#D8B4A0]/20"
            > 
             
             
              
              <div className="flex-1 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="py-4"
                >
                  <Badge variant="secondary" className="mb-4 bg-[#D8B4A0]/20 text-[#8B4513]">
                    {wishlist.length} {wishlist.length === 1 ? "Item" : "Items"}
                  </Badge>

              <div className='w-full border-t'>
                {
                  wishlist && wishlist.map((i, index) => {
                    return (

                      <CartSingle key={index} data={i} removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler} setOpenWishlist={setOpenWishlist} />
                    )

                  })
                }

              </div>

            </motion.div>
            </div>
        </motion.div>


        }

      </motion.div>
    </motion.div>

     </AnimatePresence>
   
  )
}

const CartSingle = ({ data, index, removeFromWishlistHandler, addToCartHandler, setOpenWishlist }) => {
  const navigate = useNavigate()
  const product_name = data.name?.replace(/\s+/g, "-")
    const { currency, conversionRates } = useSelector((state) => state.currency); // Get currency and conversion rates from state


  const imageUrl = data?.images?.[0]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
    ? data.images[0].url.replace(
        /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
        `${imgdburl}/uploads/images`,
      )
    : `${imgdburl}${data?.images?.[0]?.url}`
    const convertedDiscountPrice = (data.discountPrice * (conversionRates[currency] || 1)).toFixed(0);
  const convertedOriginalPrice = (
    (data.originalPrice * (conversionRates[currency] || 1)) 
  ).toFixed(0);

  



  return (
    <motion.div

      className='my-4 !overflow-hidden'
    >
      <Card className="p-4 bg-white/80 backdrop-blur-sm border-[#D8B4A0]/20 hover:shadow-xl transition-all duration-300 rounded-xl !overflow-hidden group">
        <div className="flex gap-4">
          {/* Image Section */}
          <motion.div
            className="relative cursor-pointer"
            
            onClick={() => {
              navigate(`/product/${product_name}`)
              setOpenWishlist(false)
            }}
          >
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-[#F9F6F4] to-[#F4E7E2] p-1">
              <img
                loading="lazy"
                src={imageUrl || "/placeholder.svg"}
                alt={data.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 * index }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#D8B4A0] to-[#D7A295] rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div
            className="flex-1 cursor-pointer"
            onClick={() => {
              navigate(`/product/${product_name}`)
              setOpenWishlist(false)
            }}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-slate-800 text-sm line-clamp-2 group-hover:text-[#8B4513] transition-colors">
                {data.name}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  removeFromWishlistHandler(data)
                }}
                className="p-1 hover:bg-red-50 rounded-full transition-colors"
              >
                <X className="h-3 w-3 text-slate-400 hover:text-red-500" />
              </motion.button>
            </div>

            <p className="text-xs text-slate-500 mb-1">{data.skuid}</p>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {data.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">{currency}{convertedOriginalPrice}</span>
                )}
                <span className="text-sm font-bold text-[#8B4513]">
                  {currency} {convertedDiscountPrice}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-slate-600">{data?.ratings.toFixed(1)}</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/product/${product_name}`)
                setOpenWishlist(false)
                }}

               
                className="w-full bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:from-[#C9A491] hover:to-[#C89386] text-white shadow-lg text-xs"
              >
                <ShoppingCart className="h-3 w-3 mr-1" />
                Add to Cart
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default Wishlist
