// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import styles from '../../Styles/styles'
// import { AiFillHeart, AiOutlineEye, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
// import './productcard.css'
// import ProductDetailsCard from '../../ProductDetailsCard/ProductDetailsCard'
// import { backend_url, imgdburl } from '@/server'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToWishlist, removeFromWishlist } from '@/redux/actions/wishlist'
// import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share"
// import { EmailShareButton, FacebookShareButton } from "react-share"
// import { FaInstagram } from 'react-icons/fa'

// function ProductCard({ data ,selectedEnamelColorimg}) {
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   const { wishlist } = useSelector((state) => state.wishlist)
//   const [click, setClick] = useState(false)
//   const [open, setOpen] = useState(false)
//   const [showShareIcons, setShowShareIcons] = useState(false)
//   const dispatch = useDispatch()
//   const d = data.name
//   const product_name = d.replace(/\s+/g, "-")
//   const navigate = useNavigate()
//   const { currency, conversionRates } = useSelector((state) => state.currency); // Accessing currency state and conversion rates
//   // console.log(conversionRates,"conversion rates ----")


//   useEffect(() => {
//     if (wishlist && wishlist.find((i) => i._id === data._id)) {
//       setClick(true)
//     } else {
//       setClick(false)
//     }
//   }, [wishlist])

//   const removeFromWishlistHandler = (data) => {
//     setClick(!click)
//     dispatch(removeFromWishlist(data))
//   }
//   const addToWishlistHandler = (data) => {
//     setClick(!click)
//     dispatch(addToWishlist(data))
//   }

//   const toggleShareIcons = () => {
//     setShowShareIcons(!showShareIcons)
//   }

//   const closeShareIcons = () => {
//     setShowShareIcons(false)
//   }

//   const handleMouseLeave = () => {
//     setShowShareIcons(false)
//   }

//   const shareOnInstagram = (product) => {
//     const url = `https://www.instagram.com/?url=https://www.tinytiaraa.com/product/${product_name}`
//     window.open(url, '_blank')
//   }

//   const handleWhatsappShare = () => {
//     const productLink = `https://www.tinytiaraa.com/product/${product_name}`
//     const message = `Check out this amazing product: ${productLink}`

//     // Try to open WhatsApp Desktop App URI
//     const whatsappAppURI = `whatsapp://send?text=${encodeURIComponent(message)}`

//     window.location.href = whatsappAppURI

//     // Fallback to WhatsApp Web
//     setTimeout(() => {
//       window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank')
//     }, 1000)
//   }

//   const enamelColorImages = data.enamelColors[selectedEnamelColorimg]
//     ? Object.values(data.enamelColors[selectedEnamelColorimg]).flat()
//     : [];

//     const formatPrice = (price) => {
//       return new Intl.NumberFormat('en-IN').format(price); // 'en-IN' for Indian style
//   };

//     const convertedOriginalPrice = formatPrice((data.originalPrice * (conversionRates[currency] || 1)).toFixed(0));
//     const convertedDiscountPrice = formatPrice((data.discountPrice * (conversionRates[currency] || 1)).toFixed(0));

   
  
//   return (
//     <div className='parentsinglecrd'>
//       <div className="parentproductcard w-full h-[314px] pb-4 bg-white rounded-[15px] shadow-lg  p-3 relative cursor-pointer overflow-hidden " onMouseLeave={handleMouseLeave}>
//         <div className="flex justify-end "></div>

//         <div className='w-full h-[150px] overflow-hidden'>
//           <Link to={`/product/${product_name}`}>
//           <img
//               // src={enamelColorImages.length > 0 ? enamelColorImages[0]?.url : data.images && data.images[1]?.url}
//               src={
//                 enamelColorImages.length > 0 
//                     ? (
//                         enamelColorImages[0].url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) 
//                             ? enamelColorImages[0].url.replace(
//                                 /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, 
//                                 `${imgdburl}/uploads/images`
//                             ) 
//                             : `${imgdburl}${enamelColorImages[0].url}`
//                       )
//                     : (
//                         data?.images && data?.images[1]?.url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) 
//                             ? data?.images[1]?.url.replace(
//                                 /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, 
//                                 `${imgdburl}/uploads/images`
//                             ) 
//                             : `${imgdburl}${data?.images && data?.images[1]?.url}`
//                       )
//             }
//               alt=""
//               className=' parentproductimg w-full h-[150px] object-contain'
//             />
//           </Link>
//         </div>
//         <div className='w-full h-[auto] overflow-hidden ' title={data.name}>
//           <Link to={`/product/${product_name}`}>
//             <h4 className='pb-1 font-[500] text-[14px] text-center !line-clamp-1'>{data.name.length > 28 ? data.name.slice(0, 28) + "..." : data.name}</h4>
//           </Link>
//           <p className={`${styles.skuid}`}>{data.skuid}</p>
//           <div className=" mt-2 flex items-center justify-center">
//             <div className="flex pricebraekdownadjust">
//             {/* {data.originalPrice > 0 && (
//                 <h4 className={`${styles.price} line-through`}>
//                    {currency} {convertedOriginalPrice}
//                 </h4>
//               )} */}
//               <h5 className={`${styles.productDiscountPrice} pl-2`}>
//               {currency} {convertedDiscountPrice}
//               </h5>
//               <span>
              
//               </span>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className=' flex justify-center mt-1' onClick={() => { navigate(`/product/${product_name}`) }}>
//             <button className={`ajustphonebt buynowtbn ${styles.cart_button} ${styles.cart_button_text}`}>Buy Now</button>
//           </div>
//         </div>

//         <div className='childcard' >
//           {
//             click ?
//               <AiFillHeart
//                 size={22}
//                 className='cursor-pointer absolute right-2 top-5'
//                 color={click ? "red" : "#333"}
//                 onClick={() => removeFromWishlistHandler(data)}
//                 title='Remove from wishlist'
//               />
//               :
//               <AiOutlineHeart
//                 size={22}
//                 className='cursor-pointer absolute right-2 top-5'
//                 color={click ? "red" : "#333"}
//                 onClick={() => addToWishlistHandler(data)}
//                 title='Add to wishlist'
//               />
//           }

//           {/* <AiOutlineEye
//             size={22}
//             className='cursor-pointer absolute right-2 top-14'
//             color='#333'
//             title='Quick View'
//             onClick={() => setOpen(!open)}
//           /> */}

//           <AiOutlineShareAlt
//             size={23}
//             className='cursor-pointer absolute right-2 top-14'
//             color='#444'
//             title='Share'
//             onClick={toggleShareIcons}
//           />

//           <div className=''>
//             {showShareIcons && (
//               <div className="share-icons absolute top-28 right-0 mt-4 flex gap-[4px] p-2  rounded-md z-10">
//                 <FacebookShareButton url={`https://www.tinytiaraa.com/product/${product_name}`} onClick={closeShareIcons} >
//                   <FacebookIcon size={32} round={true} />
//                 </FacebookShareButton>

//                 <div onClick={handleWhatsappShare}>
//                   <WhatsappIcon size={32} round={true} />
//                 </div>

//                 <EmailShareButton url={`https://www.tinytiaraa.com/product/${product_name}`} onClick={closeShareIcons} >
//                   <EmailIcon size={32} round={true} />
//                 </EmailShareButton>

//                 <div onClick={() => { shareOnInstagram(data) }}>
//                   <i className="fa-brands fa-square-instagram instasty" style={{ cursor: 'pointer' }}></i>
//                 </div>
//               </div>
//             )}
//           </div>

//           {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductCard


"use client"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingBag, Star, StarHalf } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { backend_url, imgdburl } from '@/server'
import { useSelector } from "react-redux"
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { addToWishlist, removeFromWishlist } from "@/redux/actions/wishlist"
 import { EmailIcon, FacebookIcon, WhatsappIcon } from "react-share"
 import { EmailShareButton, FacebookShareButton } from "react-share"
 import { FaInstagram } from 'react-icons/fa'


const ProductCard = ({ data, selectedEnamelColorimg }) => {

 const { currency, conversionRates } = useSelector((state) => state.currency); // Accessing currency state and conversion rates
  const { wishlist } = useSelector((state) => state.wishlist)

  const dispatch = useDispatch()
  const navigate = useNavigate()
 const [showShareIcons, setShowShareIcons] = useState(false)
  const [click, setClick] = useState(false)
  const d = data?.name || ""
  const product_name = d.replace(/\s+/g, "-")

  const [isHovered, setIsHovered] = useState(false)

        const formatPrice = (price) => {
       return new Intl.NumberFormat('en-IN').format(price);  'en-IN' 
   };

     const convertedOriginalPrice = formatPrice((data.originalPrice * (conversionRates[currency] || 1)).toFixed(0));
     const convertedDiscountPrice = formatPrice((data.discountPrice * (conversionRates[currency] || 1)).toFixed(0));

const totalReviews = data.reviews?.length || 0;

const averageRating = totalReviews
  ? data.reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
  : 0;


  // const processImageUrl = (url) => {
  //   if (!url) return "/placeholder.svg"
  //   if (url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)) {
  //     return url.replace(
  //       /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
  //       `${imgdburl}/uploads/images`
  //     )
  //   }
  //   return `${imgdburl}${url}`
  // }

  // // Get all available images
  // const allImages = []

  // // Add enamel color images if available
  // const enamelColorImages = data?.enamelColors?.[selectedEnamelColorimg]
  //   ? Object.values(data.enamelColors[selectedEnamelColorimg]).flat()
  //   : []

  // if (enamelColorImages.length > 0) {
  //   enamelColorImages.forEach(img => allImages.push(img.url))
  // }

  // // Add regular images if available
  // if (data?.images) {
  //   data.images.forEach(img => allImages.push(img.url))
  // }

  // // Process image URLs and ensure at least one image
  // const processedImages = allImages.length > 0 
  //   ? allImages.map(processImageUrl) 
  //   : [processImageUrl(null)]

  // const primaryImage = processedImages[1]

  const enamelColorImages = data.enamelColors[selectedEnamelColorimg]
  ? Object.values(data.enamelColors[selectedEnamelColorimg]).flat()
  : [];
  // const secondaryImage = processedImages.length > 1 ? processedImages[2] : primaryImage

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    
  }

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }


     useEffect(() => {
     if (wishlist && wishlist.find((i) => i._id === data._id)) {
       setClick(true)
     } else {
       setClick(false)
     }
   }, [wishlist])

   const removeFromWishlistHandler = (data) => {
     setClick(!click)
     dispatch(removeFromWishlist(data))
   }
   const addToWishlistHandler = (data) => {
     setClick(!click)
     dispatch(addToWishlist(data))
   }
 

  //  Reusable rating component
const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2; // e.g. 3.7 → 3.5
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`star-${i}`} className="w-3 h-3 fill-amber-400 text-amber-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-3 h-3 fill-amber-400 text-amber-400" />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-star-${i}`} className="w-3 h-3 text-gray-300" />
      ))}
      <span className="text-xs text-gray-500">({rating.toFixed(1)})</span>
    </div>
  );
};



// Reusable buy now button
const BuyNowButton = ({ className }) => {
  return (
    <Button
    onClick={() => { navigate(`/product/${product_name}`) }}
      className={cn("bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] hover:opacity-90 text-white border-0", className)}
    >
      Buy Now
    </Button>
  )
}

// Reusable discount badge
const DiscountBadge = ({ originalPrice, discountPrice }) => {
  if (!discountPrice) return null

  const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100)

  return <Badge className="absolute z-10 top-2 left-2 bg-red-500 hover:bg-red-600">{discountPercentage}% OFF</Badge>
}

const PriceDisplay = ({ originalPrice, discountPrice }) => {
  return (
     <div className="flex items-center gap-1  text-[12px]">
      {/* {originalPrice > discountPrice && (
        <span className="text-[10px] text-[#d55b45]  line-through">
          {currency} {convertedOriginalPrice}
        </span>
      )} */}
      <span className="text-[10px] font-semibold text-gray-800">
        {currency} {convertedDiscountPrice}
      </span>
    </div>
  )
}


   const toggleShareIcons = () => {
     setShowShareIcons(!showShareIcons)
   }

   const closeShareIcons = () => {
     setShowShareIcons(false)
   }

   const handleMouseLeave = () => {
     setShowShareIcons(false)
   }

   const shareOnInstagram = (product) => {
     const url = `https://www.instagram.com/?url=https://www.tinytiaraa.com/product/${product_name}`
     window.open(url, '_blank')
   }

   const handleWhatsappShare = () => {
     const productLink = `https://www.tinytiaraa.com/product/${product_name}`
     const message = `Check out this amazing product: ${productLink}`

     // Try to open WhatsApp Desktop App URI
     const whatsappAppURI = `whatsapp://send?text=${encodeURIComponent(message)}`

     window.location.href = whatsappAppURI

     // Fallback to WhatsApp Web
     setTimeout(() => {
       window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank')
     }, 1000)
   }



  return(

    <motion.div
     className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative"
     variants={cardVariants}
     initial="initial"
     animate="animate"
     whileHover="hover"
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
   >
     <Card
      className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md !py-0 !gap-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave()
        setIsHovered(false)
      }}
      
    >
      <div className="relative h-[200px] overflow-hidden cursor-pointer">
        {/* <DiscountBadge originalPrice={data?.originalPrice} discountPrice={data?.discountPrice} /> */}

        <motion.img
            onClick={() => { navigate(`/product/${product_name}`) }}
            src={
              isHovered
                ? // ✅ Hovered image (primary)
                  enamelColorImages.length > 0 
                    ? (
                        enamelColorImages[0].url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) 
                          ? enamelColorImages[0].url.replace(
                              /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, 
                              `${imgdburl}/uploads/images`
                            )
                          : `${imgdburl}${enamelColorImages[0].url}`
                      )
                    : (
                        data?.images?.[2]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) 
                          ? data.images[2].url.replace(
                              /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, 
                              `${imgdburl}/uploads/images`
                            )
                          : `${imgdburl}${data?.images?.[0]?.url}`
                      )
                : // ✅ Default (non-hovered) image (secondary)
                  enamelColorImages.length > 1 
                    ? (
                        enamelColorImages[1].url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) 
                          ? enamelColorImages[1].url.replace(
                              /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, 
                              `${imgdburl}/uploads/images`
                            )
                          : `${imgdburl}${enamelColorImages[1].url}`
                      )
                    : (
                        data?.images?.[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) 
                          ? data.images[1].url.replace(
                              /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, 
                              `${imgdburl}/uploads/images`
                            )
                          : `${imgdburl}${data?.images?.[1]?.url}`
                      )
            }
            alt={data?.name}
            className="absolute z-0 inset-0 w-full h-full object-contain p-2 transition-all duration-500 scale-110"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />

        <div
          className={cn(
            "absolute bottom-2 right-2 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-secondary cursor-pointer">
             {
             click ?
               <AiFillHeart
                 size={18}
                 className='cursor-pointer '
                 color={click ? "red" : "#333"}
                 onClick={() => removeFromWishlistHandler(data)}
                 title='Remove from wishlist'
               />
               :
               <AiOutlineHeart
                 size={18}
                 className='cursor-pointer '
                 color={click ? "red" : "#333"}
                 onClick={() => addToWishlistHandler(data)}
                 title='Add to wishlist'
               />
           }
          </div>
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-secondary cursor-pointer">

            <AiOutlineShareAlt
             size={18}
             className='cursor-pointer '
             color='#444'
             title='Share'
             onClick={toggleShareIcons}
           />
          </div>


          {/* Share Icons Dropdown */}
          {showShareIcons && (
              <div className="absolute mt-2  right-0 flex items-center gap-1 px-2 py-1 bg-white dark:bg-[#2f2b28] border border-gray-200 dark:border-[#44403c] rounded-md shadow-md z-50">
                <FacebookShareButton
                  url={`https://www.tinytiaraa.com/product/${product_name}`}
                  onClick={closeShareIcons}
                  className="hover:scale-105 transition-transform"
                >
                  <FacebookIcon size={24} round />
                </FacebookShareButton>

                <div
                  onClick={handleWhatsappShare}
                  className="hover:scale-105 transition-transform cursor-pointer"
                >
                  <WhatsappIcon size={24} round />
                </div>

                <EmailShareButton
                  url={`https://www.tinytiaraa.com/product/${product_name}`}
                  onClick={closeShareIcons}
                  className="hover:scale-105 transition-transform"
                >
                  <EmailIcon size={24} round />
                </EmailShareButton>

                <div
                  onClick={() => shareOnInstagram(data)}
                  className="hover:scale-105 transition-transform cursor-pointer"
                >
                  <FaInstagram size={20} color="#E1306C" />
                </div>
              </div>
            )}


           
        </div>
      </div>

      <CardContent className="px-4 pb-4" onClick={() => { navigate(`/product/${product_name}`) }}>
        <Link to={`/product/${product_name}`}>
             <h4 className='pb-1 font-[500] text-[14px] text-center !line-clamp-1'>{data.name.length > 28 ? data.name.slice(0, 28) + "..." : data.name}</h4>
           </Link>
        <p className="text-[#727386] text-center text-[11px] ">{data?.skuid}</p>
        <div className="flex items-center justify-between gap-1 mt-2">
          <PriceDisplay originalPrice={data?.originalPrice} discountPrice={data?.discountPrice} />
          {totalReviews > 0 && <RatingStars rating={averageRating} />}
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-3 pt-0">
        <BuyNowButton className="w-full text-sm py-1.5 cursor-pointer"  />
      </CardFooter>
    </Card>
    </motion.div>
  )
}

export default ProductCard
