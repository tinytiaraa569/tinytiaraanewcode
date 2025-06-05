import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../Styles/styles'
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart, AiOutlineStar  } from 'react-icons/ai';
import { MdOutlineEmail, MdOutlineVerified } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { RiExchangeFundsLine } from "react-icons/ri";
import { CiCalendarDate, CiFacebook } from "react-icons/ci";
import { AiOutlineGold } from "react-icons/ai";
import { IoChevronBackOutline, IoChevronForwardOutline, IoDiamondOutline, IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { FaAngleRight, FaChild, FaFacebook, FaInstagram, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import { TbBrandMinecraft } from "react-icons/tb";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineAppRegistration } from "react-icons/md";
import { GiHeartNecklace } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import ImgZoom from 'react-img-zoom';
// import 'react-img-zoom/dist/index.css';

import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { backend_url, imgdburl, server } from '@/server';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/actions/cart';
import { toast } from 'react-toastify';
import { addToWishlist, removeFromWishlist } from '@/redux/actions/wishlist';
import Ratings from './Ratings';

import axios from 'axios';
import Modal from 'react-modal';
import './productdetails.css'

import withchainimg from './withchain.svg'
import withoutchainimg from './withoutchain.svg'

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { EmailIcon, FacebookIcon, WhatsappIcon, } from "react-share";
import { EmailShareButton, FacebookShareButton, WhatsappShareButton, } from "react-share";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Baby, Calendar, CheckCircle, Crown, Diamond, FileText, Heart, List, MapPin, Minus, Package, Plus, Quote, RotateCcw, Shield, ShoppingCart, Sparkles, Star, Truck, User, UserCheck, Users, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Accordion,AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Animation variants
const imageFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const thumbnailsFadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7, ease: 'easeOut' } }
};

Modal.setAppElement('#root'); // Replace '#root' with the ID of your root element

function ProductDetails({ data }) {

    const { wishlist } = useSelector((state) => state.wishlist)
    const { cart } = useSelector((state) => state.cart)
    const { user, isAuthenticated } = useSelector((state) => state.user)
    const [active, setActive] = useState(1)




    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [count, setCount] = useState(1)
    const [click, setClick] = useState(false)
    const [select, setSelect] = useState(1)


    const [selectedColorIndex, setSelectedColorIndex] = useState(null);
    const [validationError, setValidationError] = useState('');

    const [showGallery, setShowGallery] = useState(false); // State for gallery modal
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index in modal


    const [selectedEnamelColor, setSelectedEnamelColor] = useState(null)


    const [selectedChainSize, setSelectedChainSize] = useState("");
    const createSlug = (name) => {
        return name.toLowerCase().replace(/[\s]+/g, '-').replace(/[^\w-]+/g, '');
    };

    const productSlug = createSlug(data.name);
    const productUrl = `https://www.tinytiaraa.com/product/${productSlug}`;
    const [isExpanded, setIsExpanded] = useState(false);

    const { currency, conversionRates } = useSelector((state) => state.currency); // Access currency state and conversion rates

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    // // console.log(data.withchainimages)
    // const addToCartHandler = (id) => {

    //     const isItemExists = cart && cart.find((i) => i._id === id)

    //     if (isItemExists) {
    //         toast.error("Item Already in cart")
    //     } else {
    //         if (data.stock < count) {
    //             toast.error("Product Stock limited")

    //         } else {
    //             const cartData = { ...data, qty: count }
    //             dispatch(addToCart(cartData))
    //             toast.success("Product Added to cart")
    //         }
    //     }

    // }
    // const addToCartHandler = (id, shouldNavigate = false) => {
    //     console.log("Selected Color:", selectedColor);
    //     console.log("Show With Chain:", showWithChain);
    //     console.log("Selected Enamel Color:", selectedEnamelColor);

    //     if (validateForm()) {
    //         // Check if the item already exists in the cart with the same combination of options
    //         const isItemExists = cart && cart.find((i) =>
    //             i._id === id &&
    //             i.selectedColor === selectedColor &&
    //             i.showWithChain === showWithChain &&
    //             i.selectedEnamelColor === selectedEnamelColor
    //         );

    //         if (isItemExists) {
    //             toast.error("Item Already in cart");
    //         } else {
    //             if (data.stock < count) {
    //                 toast.error("Product Stock limited");
    //             } else {
    //                 const cartData = {
    //                     ...data,
    //                     qty: count,
    //                     selectedColor: selectedColor,
    //                     showWithChain: showWithChain,
    //                     selectedEnamelColor: selectedEnamelColor
    //                 };
    //                 dispatch(addToCart(cartData));
    //                 toast.success("Product Added to cart");

    //                 // Console log the updated cart value
    //                 console.log("Updated Cart:", cart); // Assuming `cart` is from useSelector

    //                 // Optionally, you can also console log the `cartData` if needed
    //                 console.log("Added to Cart:", cartData);
    //                 if (shouldNavigate) {
    //                     navigate('/cart');
    //                 }
    //             }
    //         }
    //     } else {
    //         toast.error("Please select color and chain options.");
    //     }
    // };

    // const addToCartHandler = (id, shouldNavigate = false) => {
    //     console.log("Selected Color:", selectedColor);
    //     console.log("Show With Chain:", showWithChain);
    //     console.log("Selected Enamel Color:", selectedEnamelColor);

    //     if (validateForm()) {
    //         // Check if the item already exists in the cart with the same combination of options
    //         const isItemExists = cart && cart.find((i) =>
    //             i._id === id &&
    //             i.selectedColor === selectedColor &&
    //             i.showWithChain === showWithChain &&
    //             i.selectedEnamelColor === selectedEnamelColor
    //         );

    //         if (isItemExists) {
    //             toast.error("Item Already in cart");
    //             return;
    //         }

    //         // Determine the stock to validate against
    //         let availableStock = data.stock; // Default stock

    //         if (selectedEnamelColor) {
    //             const enamelKey = `${selectedEnamelColor.toLowerCase()}${selectedColor}clrStock`;
    //             availableStock = data.Enamelcolorstock[selectedEnamelColor]?.[enamelKey] || 0;
    //         } else if (selectedColor) {
    //             const metalKey = `${selectedColor}clrStock`;
    //             availableStock = data.Metalcolorstock[metalKey] || 0;
    //         }

    //         // Validate stock
    //         // if (availableStock < count) {
    //         //     toast.error("Product Stock limited");
    //         //     return;
    //         // }

    //         // Proceed with adding to cart
    //         const cartData = {
    //             ...data,
    //             qty: count,
    //             selectedColor: selectedColor,
    //             showWithChain: showWithChain,
    //             selectedEnamelColor: selectedEnamelColor
    //         };
    //         dispatch(addToCart(cartData));
    //         toast.success("Product Added to cart");

    //         // Console log the updated cart value
    //         console.log("Updated Cart:", cart); // Assuming `cart` is from useSelector

    //         // Optionally, you can also console log the `cartData` if needed
    //         console.log("Added to Cart:", cartData);
    //         if (shouldNavigate) {
    //             navigate('/cart');
    //         }
    //     } else {
    //         toast.error("Please select color and chain options.");
    //     }
    // };

    const metalColors = {
        0: "Yellow Gold",
        1: "Rose Gold",
        2: "White Gold",
    };

    const addToCartHandler = (id, shouldNavigate = false) => {
        console.log("Selected Color Index:", selectedColor);
        console.log("Show With Chain:", showWithChain);
        console.log("Selected Enamel Color:", selectedEnamelColor);

        // Convert the selectedColor index to the actual metal color name
        const selectedMetalColor = metalColors[selectedColor];

        if (validateForm()) {
            // Check if the item already exists in the cart with the same combination of options
            const isItemExists = cart && cart.find((i) =>
                i._id === id &&
                i.selectedColor === selectedColor &&
                i.showWithChain === showWithChain &&
                i.selectedEnamelColor === selectedEnamelColor
            );

            if (isItemExists) {
                toast.error("Item already in cart");
                return;
            }

            // Determine the stock to validate against
            let availableStock = data.stock; // Default stock
            let stockMessage = ''; // Message to show stock availability

            if (selectedEnamelColor) {
                // Clean the selectedEnamelColor key to match the data format
                const cleanedEnamelColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');

                // Construct the key to access the specific enamel color stock
                const enamelKey = `${cleanedEnamelColor}${selectedMetalColor.replace(/ /g, '')}clrStock`;

                // Access the stock value for the selected enamel color and metal color
                availableStock = data.Enamelcolorstock[cleanedEnamelColor]?.[enamelKey] || 0;

                if (availableStock === null) {
                    availableStock = 0; // Treat null as zero stock
                }

                stockMessage = `Stock for ${selectedEnamelColor} with ${selectedMetalColor}: ${availableStock}`;
            } else if (selectedCombination) {
                const formattedCombination = selectedCombination
                    .toLowerCase()
                    .replace(/[_+\s]/g, ''); // Normalize combination name
                console.log('Formatted Combination:', formattedCombination);
            
                console.log("Available combination keys:", Object.keys(data?.combinationStocks || {}));
                
                const combinationStock = data?.combinationStocks?.[formattedCombination];
            
                if (!combinationStock) {
                    console.warn(`No stock found for combination: ${formattedCombination}`);
                    return;
                }
            
                console.log('Resolved Combination Stock:', combinationStock);
            
                // Check if selectedMetalColor exists
                if (selectedMetalColor) {
                    const selectedMetalKey = selectedMetalColor.toLowerCase().replace(/\s/g, ''); // Normalize metal key
                    console.log('Selected Metal Key:', selectedMetalKey);
                    console.log("Available metal keys:", Object.keys(combinationStock || {}));
            
                    const yellowGoldStock = combinationStock?.yellowGold ?? 0;
                    const roseGoldStock = combinationStock?.roseGold ?? 0;
                    const whiteGoldStock = combinationStock?.whiteGold ?? 0;
            
                    console.log('Yellow Gold Stock:', yellowGoldStock);
                    console.log('Rose Gold Stock:', roseGoldStock);
                    console.log('White Gold Stock:', whiteGoldStock);
            
                    if (selectedMetalKey === 'yellowgold') {
                        availableStock = yellowGoldStock;
                    } else if (selectedMetalKey === 'rosegold') {
                        availableStock = roseGoldStock;
                    } else if (selectedMetalKey === 'whitegold') {
                        availableStock = whiteGoldStock;
                    }
                } else {
                    // No selected metal color, use total available stock from combination
                    availableStock = (combinationStock?.yellowGold ?? 0) +
                                     (combinationStock?.roseGold ?? 0) +
                                     (combinationStock?.whiteGold ?? 0);
                }
            
                // Check if stock is available
                if (!availableStock) {
                    availableStock = 0;
                    stockMessage = `Stock for ${formattedCombination}: ${availableStock}`;
                    console.warn(stockMessage);
                }
            }
            
            
            else if (selectedMetalColor) {
                // Construct the key to access the specific metal color stock
                const metalKey = `${selectedMetalColor.replace(/ /g, '')}clrStock`;

                // Access the stock value for the selected metal color
                availableStock = data.Metalcolorstock[metalKey] || 0;

                if (availableStock === null) {
                    availableStock = 0; // Treat null as zero stock
                }

                stockMessage = `Stock for ${selectedMetalColor}: ${availableStock}`;
            } else {
                // Default stock message
                stockMessage = `Default stock: ${availableStock}`;
            }

            // Validate stock and show message
            if (availableStock < count) {
                toast.error(`Stock limited. ${stockMessage}`);
                return;
            } else {
                // toast.info(stockMessage); // Inform the user about available stock
            }

            // const chainPrice = selectedChainSize === '13inch' ? 7200 : (selectedChainSize === '18inch' ? 14400 : 0);
            
            const chainPrice = fnchainPrice(selectedChainSize, productType);
            const extraCost = showWithChain 
                ? (productType === 'silver' ? 150 : (selectedChainSize === '13inch' ? 500 : 1000)) 
                : 0;

            // Proceed with adding to cart
            const cartData = {
                ...data,
                qty: count,
                selectedColor: selectedColor,
                showWithChain: showWithChain,
                selectedEnamelColor: selectedEnamelColor,
                selectedChainSize: selectedChainSize, // Add selected chain size,
                selectedCombination: selectedCombination,
                chainPrice: chainPrice,
                extraCost:extraCost
            };
            dispatch(addToCart(cartData));
            toast.success("Product added to cart");

            // Console log the updated cart value
            console.log("Updated Cart:", cart); // Assuming `cart` is from useSelector

            // Optionally, you can also console log the `cartData` if needed
            console.log("Added to Cart:", cartData);
            if (shouldNavigate) {
                navigate('/cart');
            }
        } else {
            // toast.error("Please select color and chain options.");
        }
    };







    



    const shareOnInstagram = (product) => {
        // const caption = `Check out this amazing product: ${product.name}!`;

        console.log(product, "share data")
        const url = `https://www.instagram.com/?url=${productUrl}`;
        window.open(url, '_blank');
    };

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



    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };



    const [selectedColor, setSelectedColor] = useState(null);
    const handleColorChange = (colorIndex) => {
        setSelectedColor(colorIndex); // Update selectedColor state with the index of the color
        setSelect(0); // Reset selected image index to 0 when color changes

        // setShowWithChain(null);
    };
    const [showWithChain, setShowWithChain] = useState(null);

    // const toggleChainOption = (option) => {
    //     if (option === 'with') {
    //         setShowWithChain(true);
    //         setSelectedChainSize('13inch'); // Set default to 13 inches
    //         setFinalPrice(data.discountPrice + 7200);
    //         setFinalOriginalPrice(data.originalPrice + 7200);
    //         setSelect(0); 
    //     } else {
    //         setShowWithChain(false);
    //         setSelectedChainSize(null); // Clear the selection when "Without Chain" is selected
    //         setFinalPrice(data.discountPrice);
    //         setFinalOriginalPrice(data.originalPrice);
    //         setSelect(0); 
    //     }
    //     // setShowWithChain(option === 'with'); // Set showWithChain based on the selected option ('with' or 'without')
    //     // setSelect(0); // Reset selected image index when toggling chain option
    //     // setSelectedColorIndex(null);
    //     if (option === 'without') {
    //         setSelectedChainSize(""); // Reset selected chain size when without chain is chosen
    //     }
    // };

    // const imagesArray =
    // selectedColor === 0
    //     ? data.MetalColor.YellowGoldclr
    //     : selectedColor === 1
    //         ? data.MetalColor.RoseGoldclr
    //         : selectedColor === 2
    //             ? data.MetalColor.WhiteGoldclr

    //             : showWithChain === true
    //                 ? data.withchainimages
    //                 : showWithChain === false
    //                     ? data.withchainoutimages


    //                     : data.images;

    // Function to normalize key format (remove underscores and convert to camel case)






    const renderImages = () => {
        // Determine which array of images to render based on selectedColor


        const displayedImages = imagesArray.slice(0, 4); // Limit to first 4 images
        const remainingImageCount = imagesArray.length - displayedImages.length;

        return (
            <div className='w-full flex  gap-2'>
                {displayedImages &&
                    displayedImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative w-[24%] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                            select === index
                                ? 'border border-[#dcb699] shadow-md'
                                : 'border border-[#f0f0f0]'
                            }`}
                            onClick={() => setSelect(index)}
                        >
                            <img
                                // src={`${image?.url}`}
                                src={
                                    image?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                        ? image.url.replace(
                                            /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                            `${imgdburl}/uploads/images`
                                          )
                                        : `${imgdburl}${image?.url}` // Prepend imgdburl if not a Cloudinary URL
                                }
                                alt=""
                                className='w-[100%] h-auto sm:h-[160px]  object-contain'
                            />
                            {index === 3 && remainingImageCount > 0 && (
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold cursor-pointer"
                                    onClick={() => {
                                        setCurrentImageIndex(3);
                                        setShowGallery(true);
                                    }} // Open gallery modal
                                >
                                    + {remainingImageCount} more
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        );
    };

    const handleMessageSubmit = async () => {

        console.log(data, "checking")

        if (isAuthenticated) {
            const groupTitle = data._id + user._id
            const userId = user._id
            const sellerId = data.shopId
            await axios.post(`${server}/conversation/create-new-conversation`, {
                groupTitle, userId, sellerId
            }).then((res) => {
                navigate(`/conversation/${res.data.conversation._id}`)

            }).catch((error) => {
                toast.error(error.response.data.message)
            })
        } else {
            toast.error("Please Login to create a conversation")
        }

    }

    // const validateForm = () => {
    //     const hasChainOptions = data.withchainimages.length > 0 || data.withchainoutimages.length > 0;
    //     if (!hasChainOptions) {
    //         return selectedColor !== null;
    //     }
    //     return selectedColor !== null && showWithChain !== null;
    // };
    const validateForm = () => {
        const hasChainOptions = data.withchainimages.length > 0 || data.withchainoutimages.length > 0;
        const isEnamelColorRequired = shouldShowEnamel && availableEnamelColors.length > 0;
        const hasMetalColors = availableMetalColors.length > 0;
        if (!hasChainOptions) {
            if (hasMetalColors && selectedColor === null) {
                setValidationError('Please select a metal color..');
                return false;
            }
            if (isEnamelColorRequired && selectedEnamelColor === null) {
                setValidationError('Please select an enamel color.');
                return false;
            }
            return true;
        }

        if (hasMetalColors && selectedColor === null) {
            setValidationError('Please select a metal color.');
            return false;
        }
        if (showWithChain === null) {
            setValidationError('Please select a chain option.');
            return false;
        }
        if (isEnamelColorRequired && selectedEnamelColor === null) {
            setValidationError('Please select an enamel color.');
            return false;
        }

        return true;
    };
    useEffect(() => {
        // Reset validation error on color or chain change

        setValidationError('');
    }, [selectedColorIndex, showWithChain, selectedColor, selectedEnamelColor ]);

    // Determine if chain options should be displayed
    const shouldShowChainOptions = data.withchainimages.length > 0 || data.withchainoutimages.length > 0;

    // const getAvailableEnamelColors = (enamelColors) => {
    //     return Object.entries(enamelColors)
    //         .filter(([color, colorData]) => {
    //             // Format the enamel color part
    //             const baseColor = color.toLowerCase().replace(/_/g, '');

    //             // Construct the correct keys for data access
    //             const yellowGoldKey = `${baseColor}YellowGoldclr`;
    //             const roseGoldKey = `${baseColor}RoseGoldclr`;
    //             const whiteGoldKey = `${baseColor}WhiteGoldclr`;

    //             // Safeguard checks to ensure arrays are defined and not empty
    //             const hasYellowGoldclr = Array.isArray(colorData[yellowGoldKey]) && colorData[yellowGoldKey].length > 0;
    //             const hasRoseGoldclr = Array.isArray(colorData[roseGoldKey]) && colorData[roseGoldKey].length > 0;
    //             const hasWhiteGoldclr = Array.isArray(colorData[whiteGoldKey]) && colorData[whiteGoldKey].length > 0;

    //             // Debug: Log the availability status
    //             console.log(`Color: ${color}, YellowGold: ${hasYellowGoldclr}, RoseGold: ${hasRoseGoldclr}, WhiteGold: ${hasWhiteGoldclr}`);

    //             // Return true if any of the arrays are non-empty
    //             return hasYellowGoldclr || hasRoseGoldclr || hasWhiteGoldclr;
    //         })
    //         .map(([color]) => ({ _id: color, enamelColorName: color.replace(/_/g, ' ') })); // Format color names
    // };

    // Determine if there are any available enamel colors



    // const availableEnamelColors = getAvailableEnamelColors(data.enamelColors || {});
    // const shouldShowEnamel = availableEnamelColors.length > 0;

    // // Debug: Print available enamel colors
    // console.log("Available Enamel Colors:", availableEnamelColors);





    // Gallery Navigation Handlers

    // const getAvailableEnamelColors = (enamelColors, selectedMetalColor) => {
    //     return Object.entries(enamelColors)
    //         .filter(([color, colorData]) => {
    //             // Format the enamel color part
    //             const baseColor = color.toLowerCase().replace(/_/g, '');

    //             // Construct the correct key for the selected metal color
    //             const metalColorKey = `${baseColor}${selectedMetalColor}`;

    //             // Safeguard checks to ensure the array is defined and not empty
    //             const hasMetalColor = Array.isArray(colorData[metalColorKey]) && colorData[metalColorKey].length > 0;

    //             // Debug: Log the availability status
    //             console.log(`Color: ${color}, Metal Color Key: ${metalColorKey}, Has Metal Color: ${hasMetalColor}`);

    //             // Return true if the array for the selected metal color is non-empty
    //             return hasMetalColor;
    //         })
    //         .map(([color]) => ({ _id: color, enamelColorName: color.replace(/_/g, ' ') })); // Format color names
    // };

    // // Call the function with the selected metal color
    // const selectedMetalColorKey = selectedColor === 0 ? "YellowGoldclr" : selectedColor === 1 ? "RoseGoldclr" : "WhiteGoldclr";
    // const availableEnamelColors = getAvailableEnamelColors(data.enamelColors || {}, selectedMetalColorKey);
    // const shouldShowEnamel = availableEnamelColors.length > 0;

    // Debug: Print available enamel colors based on selected metal color
    // console.log("Available Enamel Colors for Selected Metal:", availableEnamelColors);


    const getAvailableEnamelColors = (enamelColors, selectedMetalColor) => {
        return Object.entries(enamelColors)
            .filter(([color, colorData]) => {
                const baseColor = color.toLowerCase().replace(/_/g, '');
                const enamelKeys = [
                    `${baseColor}YellowGoldclr`,
                    `${baseColor}RoseGoldclr`,
                    `${baseColor}WhiteGoldclr`
                ];

                if (selectedMetalColor) {
                    // Filter based on specific metal color
                    const enamelKey = `${baseColor}${selectedMetalColor}clr`;
                    return Array.isArray(colorData[enamelKey]) && colorData[enamelKey].length > 0;
                } else {
                    // Show all colors that have images in any metal color
                    return enamelKeys.some(key => Array.isArray(colorData[key]) && colorData[key].length > 0);
                }
            })
            .map(([color]) => {
                const baseColor = color.toLowerCase().replace(/_/g, '');
                const availableKeys = [
                    `${baseColor}YellowGoldclr`,
                    `${baseColor}RoseGoldclr`,
                    `${baseColor}WhiteGoldclr`
                ].filter(key => Array.isArray(enamelColors[color][key]) && enamelColors[color][key].length > 0);

                return {
                    _id: color,
                    enamelColorName: color.replace(/_/g, ' '),
                    availableKeys
                };
            });
    };



    // In your component, update the code to use the selected metal color when available:
    const availableEnamelColors = getAvailableEnamelColors(
        data.enamelColors || {},
        selectedColor !== null ? ["YellowGold", "RoseGold", "WhiteGold"][selectedColor] : null
    );

    console.log(availableEnamelColors,"see the vaiablae color")
    const shouldShowEnamel = availableEnamelColors.length > 0;
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < imagesArray.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : imagesArray.length - 1
        );
    };

    // --------------------------------

    const [selectedCombination, setSelectedCombination] = useState(null); 

    const getAvailableCombinationImages = (combinationImages, selectedMetalColor) => {
        console.log(combinationImages, "+===================");
    
        return Object.entries(combinationImages)
            .filter(([combination, metalData]) => {
                const baseCombination = combination.toLowerCase().replace(/_/g, '');
    
                // Metal colors for each combination (yellowGold, roseGold, whiteGold)
                const metalKeys = ['yellowGold', 'roseGold', 'whiteGold'];
    
                if (selectedMetalColor) {
                    // If a specific metal color is selected, filter for that metal
                    const metalKey = selectedMetalColor // Convert selected color to lowercase
                    return Array.isArray(metalData[metalKey]) && metalData[metalKey].length > 0;
                } else {
                    // If no specific metal color is selected, show all available metal colors
                    return metalKeys.some(key => Array.isArray(metalData[key]) && metalData[key].length > 0);
                }
            })
            .map(([combination, metalData]) => {
                const baseCombination = combination.toLowerCase().replace(/_/g, '');
    
                // Filter metal colors that have available images
                const availableMetalKeys = ['yellowGold', 'roseGold', 'whiteGold'].filter(key => 
                    Array.isArray(metalData[key]) && metalData[key].length > 0
                );
    
                // Flatten the images of the available metal colors
                const images = availableMetalKeys.map(key => metalData[key]).flat();
    
                return {
                    combinationName: combination.replace(/_/g, ' '), // Format combination name (e.g., blueblack -> Blue Black)
                    availableMetalKeys,
                    images
                };
            });
    };
    
    // In your component, call the function with the appropriate data and selected metal color
    const availableCombinationImages = getAvailableCombinationImages(
        data.combinationmetalImages || {}, // Ensure data is available
        selectedColor !== null ? ["yellowGold", "roseGold", "whiteGold"][selectedColor] : null
    );
    
    console.log(availableCombinationImages, "see the available combination images");
    
    // Check if there are available combinations
    const shouldShowCombinations = availableCombinationImages.length > 0;
    console.log(shouldShowCombinations, "----------------------------");
    



    function getAvailableMetalColors(metalColors) {
        return Object.keys(metalColors)
            .filter((key) => metalColors[key].length > 0)
            .map((key) => {
                return {
                    colorKey: key,
                    colorName: key.replace(/clr$/i, '')
                };
            });
    }
    const availableMetalColors = getAvailableMetalColors(data.MetalColor || {});
    const shouldShowMetalColors = availableMetalColors.length > 0;
    

    // const imagesArray = (() => {
    //     const enamelColorData = data.enamelColors[selectedEnamelColor] || {};
    //     console.log(enamelColorData, "see enamel data");
    //     console.log(selectedEnamelColor, "see enamel color");

    //     if (selectedEnamelColor) {
    //         const formattedColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');

    //         if (selectedColor !== null) {
    //             // Construct the enamel key for the selected metal color
    //             const enamelKey = `${formattedColor}${["YellowGold", "RoseGold", "WhiteGold"][selectedColor]}clr`;
    //             console.log("Enamel Key:", enamelKey);

    //             // Return images for the selected enamel and metal color
    //             const images = enamelColorData[enamelKey] || [];
    //             if (images.length > 0) {
    //                 return images;
    //             } else {
    //                 // Reset selectedEnamelColor if no images are found for the selected metal color
    //                 setSelectedEnamelColor(null);
    //             }
    //         } else {
    //             // Initial state: Show all images for the selected enamel color across all metal colors
    //             const availableKeys = getAvailableEnamelColors(data.enamelColors || {}, null)
    //                 .find(color => color._id === selectedEnamelColor)?.availableKeys || [];

    //             return availableKeys.flatMap(key => enamelColorData[key] || []);
    //         }
    //     }

    //      // Handle selected metal colors when no enamel color is selected
    //      if (selectedColor === 0 ) {
    //         return data.MetalColor.YellowGoldclr || []; // Return Yellow Gold images
            
    //     } else if (selectedColor === 1) {
    //         return data.MetalColor.RoseGoldclr || []; // Return Rose Gold images
    //     } else if (selectedColor === 2) {
    //         return data.MetalColor.WhiteGoldclr || []; // Return White Gold images
    //     }


    //     // Default to metal color images if no enamel color is selected
    //     if (showWithChain === true) {
    //         return data.withchainimages || []; // Return chain images if the chain is selected
    //     } else if (showWithChain === false) {
    //         return data.withchainoutimages || []; // Return non-chain images if the chain is not selected
    //     }
    
       
    

    //     return data.images || [];
    // })();


    const imagesArray = (() => {
        const enamelColorData = data.enamelColors[selectedEnamelColor] || {};
        const combinationData = data.combinationmetalImages || {};
        console.log(enamelColorData, "see enamel data");
        console.log(selectedEnamelColor, "see enamel color");
        
        // Handle Enamel Color and Metal Color Images
        if (selectedEnamelColor) {
            const formattedColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');
            
            if (selectedColor !== null) {
                // Construct the enamel key for the selected metal color
                const enamelKey = `${formattedColor}${["YellowGold", "RoseGold", "WhiteGold"][selectedColor]}clr`;
                console.log("Enamel Key:", enamelKey);
    
                // Return images for the selected enamel and metal color
                const images = enamelColorData[enamelKey] || [];
                if (images.length > 0) {
                    return images;
                } else {
                    // Reset selectedEnamelColor if no images are found for the selected metal color
                    setSelectedEnamelColor(null);
                }
            } else {
                // Initial state: Show all images for the selected enamel color across all metal colors
                const availableKeys = getAvailableEnamelColors(data.enamelColors || {}, null)
                    .find(color => color._id === selectedEnamelColor)?.availableKeys || [];
    
                return availableKeys.flatMap(key => enamelColorData[key] || []);
            }
        }
        // Handle selected combination of metal color and enamel color
                if (selectedCombination) {
                    const formattedCombination = selectedCombination.toLowerCase().replace(/_/g, '');
                    console.log("Formatted Combination:", formattedCombination);

                    const combinationKey = combinationData[formattedCombination];
                    console.log("Combination Key Data:", combinationKey);

                    if (combinationKey) {
                        if (selectedColor !== null) {
                            // Handle specific metal color selection
                            const selectedMetal = ["yellowGold", "roseGold", "whiteGold"][selectedColor]; // Determine the metal color key

                            // Ensure the selectedMetal key exists and contains images
                            if (selectedMetal && Array.isArray(combinationKey[selectedMetal])) {
                                const images = combinationKey[selectedMetal];
                                if (images.length > 0) {
                                    return images; // Return images for the selected combination and metal color
                                } else {
                                   setSelectedCombination("")
                                    // console.warn(`No images found for combination: ${selectedCombination}, metal: ${selectedMetal}`);
                                }
                            } else {
                                setSelectedCombination(null)

                                // console.warn(`Invalid metal color or no images found for combination: ${selectedCombination}`);
                            }
                        } 
                        
                        // Check for all images related to the specific combination, ignoring metal color
                        const availableCombinationImages = [];
                        const availableMetalKeys = ["yellowGold", "roseGold", "whiteGold"];

                        // Collect all images across metal colors for the specific combination
                        availableMetalKeys.forEach(key => {
                            if (Array.isArray(combinationKey[key])) {
                                availableCombinationImages.push(...combinationKey[key]);
                            }
                        });

                        if (availableCombinationImages.length > 0) {
                            return availableCombinationImages; // Return all images for the selected combination
                        } else {
                            setSelectedCombination(null)
                            // console.warn(`No general images found for combination: ${selectedCombination}`);
                        }
                    } else {
                        setSelectedCombination(null);
                        // console.warn(`Invalid combination: ${selectedCombination}`);
                    }
                }
        
    
        // Handle selected metal colors when no enamel color is selected
        if (selectedColor === 0) {
            return data.MetalColor.YellowGoldclr || []; // Return Yellow Gold images
        } else if (selectedColor === 1) {
            return data.MetalColor.RoseGoldclr || []; // Return Rose Gold images
        } else if (selectedColor === 2) {
            return data.MetalColor.WhiteGoldclr || []; // Return White Gold images
        }
    
        // Handle Combination Color Images
       
        // Default behavior: Show images based on chain selection
        if (showWithChain === true) {
            return data.withchainimages || []; // Return chain images if the chain is selected
        } else if (showWithChain === false) {
            return data.withchainoutimages || []; // Return non-chain images if the chain is not selected
        }
    
        // Fallback: Return general images if no specific selection is made
        return data.images || [];
    })();
    console.log(imagesArray, "see image array");

    // --------------------------------

    const [categoriesData, setCategoriesData] = useState([]);

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${server}/get-allcategories`);
                // Filter categories based on type (gold or silver)
                const filteredGoldCategories = response.data.categories.filter(category => category.type === 'gold');
                setCategoriesData(filteredGoldCategories); // Store gold categories
            } catch (error) {
                console.error('Error fetching categories:', error);
                alert('Failed to fetch categories');
            } 
        };

        fetchCategories();
    }, []);

    const [finalPrice, setFinalPrice] = useState(data.discountPrice);
    const [finalOriginalPrice, setFinalOriginalPrice] = useState(data.originalPrice);

    const reviewSectionRef = useRef(null);
    const totalReviews = data.reviews?.length || 0;

    console.log(totalReviews,'total review---------')

        const averageRating = totalReviews
        ? data.reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
        : 0;
        

        const fullStars = Math.floor(averageRating);
        const hasHalfStar = averageRating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        // ⭐ Star stats (for tooltip)
        const starStats = [5, 4, 3, 2, 1].map((star) => {
            const count = data.reviews?.filter((review) => review.rating === star).length || 0;
            const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
        
            return {
            star,
            count,
            percentage: parseFloat(percentage.toFixed(1)),
            };
        });


        const handleScrollToReviews = () => {
            // setActive(2); // If `active` is controlled with a setter
            setTimeout(() => {
              reviewSectionRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 200); // Wait for the content to mount
          };


    console.log(categoriesData,"categoriesData-------------------")
    const productCategory = data?.category;
    const productType = categoriesData.some(category => 
        category.title.toLowerCase().includes(productCategory.toLowerCase()) && category.type === 'gold'
    ) ? 'gold' : 'silver';

    // const fnchainPrice = (selectedChainSize, productType) => {
    //     // Check for chain sizes and category type
    //     if (productType === 'gold') {
    //         if (selectedChainSize === '13inch') {
    //             return 7200;  // Price for 13inch chain in gold
    //         } else if (selectedChainSize === '18inch') {
    //             return 14400; // Price for 18inch chain in gold
    //         }
    //     } else if (productType === 'silver') {
    //         if (selectedChainSize === '13inch') {
    //             return 500;  // Price for 13inch chain in silver
    //         } else if (selectedChainSize === '16inch') {
    //             return 800;  // Price for 16inch chain in silver
    //         }
    //     }
    
    //     return 0; // Default if no valid chain size matches
    // };
    const fnchainPrice = (selectedChainSize, productType) => {
        if (productType === 'gold') {
            return selectedChainSize === '13inch' ? 7200 : selectedChainSize === '18inch' ? 14400 : 0;
        } else if (productType === 'silver') {
            return selectedChainSize === '18inch' && 500 ;
        }
        return 0;
    };

    // const toggleChainOption = (option) => {
    //     if (option === 'with') {
    //         setShowWithChain(true);
    //         const chainPrice = productType === 'gold' ? 7200 : 500; // Default price based on product type
    //         setSelectedChainSize('13inch'); // Set default to 13 inches
    //         setFinalPrice(data.discountPrice + chainPrice);
    //         setFinalOriginalPrice(data.originalPrice + chainPrice);
    //         setSelect(0); 
    //     } else {
    //         setShowWithChain(false);
    //         setSelectedChainSize(null); // Clear the selection when "Without Chain" is selected
    //         setFinalPrice(data.discountPrice);
    //         setFinalOriginalPrice(data.originalPrice);
    //         setSelect(0); 
    //     }
    //     if (option === 'without') {
    //         setSelectedChainSize(""); // Reset selected chain size when without chain is chosen
    //     }
    // };

    const toggleChainOption = (option) => {
        if (option === 'with') {
            setShowWithChain(true);
            const defaultChainSize = productType === 'gold' ? '13inch' : '18inch';
            setSelectedChainSize(defaultChainSize);
            
            // Calculate the default chain price
            const additionalDiscountPrice = fnchainPrice(defaultChainSize, productType);
            const additionalOriginalPrice = productType === 'silver' ? 150 : (defaultChainSize === '13inch' ? 500 : 1000);
    
            setFinalPrice(data.discountPrice + additionalDiscountPrice);
            setFinalOriginalPrice(data.originalPrice + additionalDiscountPrice + additionalOriginalPrice);
            setSelect(0);  
        } else {
            setShowWithChain(false);
            setSelectedChainSize(null);
            setFinalPrice(data.discountPrice);
            setFinalOriginalPrice(data.originalPrice);
            setSelect(0);
        }
    };


  

    // const handleChainSizeChange = (event) => {
    //     setSelectedChainSize(event.target.value);

    //     // Calculate the new price based on the selected chain size
    //     const chainSize = event.target.value;
    //     let additionalPrice = 0;
    //     if (chainSize === "13inch") {
    //         additionalPrice = 7200;
    //     } else if (chainSize === "18inch") {
    //         additionalPrice = 14400;
    //     }
    //     const basePrice = data.discountPrice;
    //     setFinalPrice(basePrice + additionalPrice);
    //     setFinalOriginalPrice(data.originalPrice + additionalPrice);
    // };

    // const handleChainSizeChange = (event) => {
    //     const chainSize = event.target.value;
    //     setSelectedChainSize(chainSize);
    
    //     // Calculate the additional price based on the product type and chain size
    //     let additionalPrice = 0;
    //     if (productType === 'gold') {
    //         if (chainSize === "13inch") {
    //             additionalPrice = 7200;
    //         } else if (chainSize === "18inch") {
    //             additionalPrice = 14400;
    //         }
    //     } else if (productType === 'silver') {
    //         if (chainSize === "13inch") {
    //             additionalPrice = 500;
    //         } else if (chainSize === "16inch") {
    //             additionalPrice = 800;
    //         }
    //     }
    
    //     // Update the final prices
    //     const basePrice = data.discountPrice;
    //     setFinalPrice(basePrice + additionalPrice);
    //     setFinalOriginalPrice(data.originalPrice + additionalPrice);
    // };

    // const handleChainSizeChange = (event) => {
    //     const chainSize = event.target.value;
    //     setSelectedChainSize(chainSize);
    
    //     // Calculate the additional price based on the product type and chain size
    //     let additionalPrice = 0;
    //     if (productType === 'gold') {
    //         if (chainSize === "13inch") {
    //             additionalPrice = 7200;
    //         } else if (chainSize === "18inch") {
    //             additionalPrice = 14400;
    //         }
    //     } else if (productType === 'silver') {
    //         if (chainSize === "18inch") {
    //             additionalPrice = 500;
    //         } 
    //     }
    
    //     // Update the final prices
    //     const basePrice = data.discountPrice;
    //     setFinalPrice(basePrice + additionalPrice);
    //     setFinalOriginalPrice(data.originalPrice + additionalPrice);
    // };

    const handleChainSizeChange = (event) => {
        const chainSize = event.target.value;
        setSelectedChainSize(chainSize);
    
        // Calculate the additional price based on product type and chain size
        let additionalPrice = 0;
        let additionalChainPrice = 0;

        if (productType === 'gold') {
            if (chainSize === "13inch") {
                additionalPrice = 7200;
                additionalChainPrice = 500
            } else if (chainSize === "18inch") {
                additionalPrice = 14400;
                additionalChainPrice = 1000

            }
        } else if (productType === 'silver') {
            additionalPrice = 500; // Fixed price for silver with chain
            additionalChainPrice = 150

        }
    
        // Update the final prices
        const basePrice = data.discountPrice;
        setFinalPrice(basePrice + additionalPrice);
    
        // In Silver, add extra ₹150 to manage the percentage only if with chain is selected
        // const extraGoldPrice = productType === 'gold'  ? 500 /1000 : 0;

        // const extraSilverPrice = productType === 'silver'  ? 150 : 0;
        setFinalOriginalPrice(data.originalPrice + additionalPrice + additionalChainPrice);
    };

    const calculateDiscountPercentage = (originalPrice, discountPrice) => {

        // let chainwithoriginalPrice = 


        if (originalPrice > 0 && discountPrice > 0 && originalPrice > discountPrice) {
            return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
        }
        return 0;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN').format(price); // 'en-IN' for Indian style
    };
    const discountPercentage = calculateDiscountPercentage(finalOriginalPrice, finalPrice);
    const convertedFinalPrice = formatPrice((finalPrice * (conversionRates[currency] || 1)).toFixed(0));
    const convertedFinalOriginalPrice = formatPrice((finalOriginalPrice * (conversionRates[currency] || 1)).toFixed(0));
  
    console.log(selectedChainSize, "chain size")

    // const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const [pincode, setpincode] = useState("");
    const [estimatedDeliveryRange, setEstimatedDeliveryRange] = useState("Enter your zip code");
    const [isLoading, setIsLoading] = useState(false);
    const originPincode = "400093"; // You can set this dynamically if needed
    const pickupDate = new Date().toISOString().split("T")[0]; // Current date
    const [showResult, setShowResult] = useState(false); // State to control visibility

    // Function to format date as "13 Sept"
    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        return `${day} ${month}`;
    };
    const [isZoomed, setIsZoomed] = useState(false);

    const calculateEDD = async () => {
        if (!pincode) {
            setEstimatedDeliveryRange("Please enter a pincode");
            setShowResult(true); // Show result even if there's an error
            return;
        }

        setIsLoading(true);
        setShowResult(false); // Hide result until calculation is done

        try {
            const response = await axios.post(
                `${server}/calculateEDD`, // Adjust your server URL here
                {
                    origin_pincode: originPincode,
                    destination_pincode: pincode,
                    pickup_date: pickupDate,
                }
            );
    
            if (response.data.status) {
                const deliveryDateStr = response.data.data.estimated_delivery;
                const deliveryDate = new Date(deliveryDateStr.split("-").reverse().join("-"));
    
                const startDate = formatDate(deliveryDate);
    
                // Add 2 days to the delivery date
                const endDate = new Date(deliveryDate);
                endDate.setDate(deliveryDate.getDate() + 2);
    
                const endDateFormatted = formatDate(endDate);
    
                // Set the delivery range in the format "13 Sept - 16 Sept"
                setEstimatedDeliveryRange(`${startDate} - ${endDateFormatted}`);
            } else {
                setEstimatedDeliveryRange("Could not calculate EDD");
            }
        } catch (error) {
            console.error("Error fetching EDD:", error);
            setEstimatedDeliveryRange("Error calculating EDD");
        } finally {
            setIsLoading(false);
            setShowResult(true); // Show result after calculation
        }
    };

    console.log(data,"see product detail")


    // const selectedImage = (() => {
    //     // If a metal color is selected
    //     if (selectedColor === 0) {
    //         if (showWithChain === true) {
    //             // If Yellow Gold with chain is selected, return the 4th image (index 3)
    //             return data.MetalColor.YellowGoldclr[2]?.url || data.images && data.images[0]?.url;
    //         } else {
    //             // If Yellow Gold without chain, return all Yellow Gold images
    //             return imagesArray.length > 0 ? imagesArray[select]?.url : data.MetalColor.YellowGoldclr[0]?.url;
    //         }
    //     } else if (selectedColor === 1) {
    //         // If Rose Gold is selected
    //         if (showWithChain === true) {
    //             return data.MetalColor.RoseGoldclr[2]?.url || data.images && data.images[0]?.url;
    //         } else {
    //             return imagesArray.length > 0 ? imagesArray[select]?.url : data.MetalColor.RoseGoldclr[0]?.url;
    //         }
    //     } else if (selectedColor === 2) {
    //         // If White Gold is selected
    //         if (showWithChain === true) {
    //             return data.MetalColor.WhiteGoldclr[2]?.url || data.images && data.images[0]?.url;
    //         } else {
    //             return imagesArray.length > 0 ? imagesArray[select]?.url : data.MetalColor.WhiteGoldclr[0]?.url;
    //         }
    //     } 
    
    //     // Fallback to the original image logic if no specific metal color or chain option is selected
    //     return select !== null && imagesArray.length > 0
    //         ? imagesArray[select]?.url
    //         : data.images && data.images[0]?.url;
    // })();

    


    // old logic 
    // const selectedImage = (() => {
    //     let imageUrl = null;
    
    //     if (selectedColor !== null && selectedEnamelColor === null && selectedCombination === null) {
    //         const metalColorImages = [
    //             data.MetalColor.YellowGoldclr || [],
    //             data.MetalColor.RoseGoldclr || [],
    //             data.MetalColor.WhiteGoldclr || []
    //         ];
    
    //         // Check with chain logic
    //         const images = metalColorImages[selectedColor];
    //         if (showWithChain && !select) {
    //             imageUrl = images[2]?.url;
    //         } else if (select !== null) {
    //             imageUrl = images[select]?.url;
    //         }
    //     }
    
    //     // If there's no specific selected color, fallback to the general images array
    //     if (!imageUrl && imagesArray.length > 0) {
    //         imageUrl = imagesArray[select]?.url || data.images?.[0]?.url;
    //     }
    
    //     return imageUrl;
    // })();
    useEffect(() => {
        if (selectedColor !== null && selectedEnamelColor === null  && selectedCombination === null && shouldShowEnamel === false && shouldShowCombinations === false ) {
            console.log("runnng 1 -------------------")
            // If "with chain" is selected, set select to 2 (third image)
            if (showWithChain) {
                if (select !== 2) {
                    setSelect(2); // Ensure "with chain" is selected (third image)
                }
            } else {
                if (select !== 0) {
                    setSelect(0); // Reset to the first image if "with chain" is not selected
                }
            }
        }
        if (selectedColor !== null && selectedEnamelColor !== null && shouldShowCombinations === false ) {
            console.log("runnng 2 -------------------")

            // If "with chain" is selected, set select to 2 (third image)
            if (showWithChain && shouldShowEnamel === true  ) {
                if (select !== 2) {
                    setSelect(2); // Ensure "with chain" is selected (third image)
                }
            } else {
                if (select !== 0) {
                    setSelect(0); // Reset to the first image if "with chain" is not selected
                }
            }
        }
        if (selectedColor !== null && selectedCombination !== null && selectedEnamelColor === null ) {
            console.log("runnng 3 -------------------")

            // If "with chain" is selected, set select to 2 (third image)
            if (showWithChain && selectedCombination !== null) {
                console.log("runnng 3.1 -------------------")
                
                if (select !== 2 && selectedCombination !== null) {
                    setSelect(2); // Ensure "with chain" is selected (third image)
                }
            } else {
                console.log("runnng 3.2 -------------------")
                if (select !== 0 && selectedCombination === null) {
                    setSelect(0); // Reset to the first image if "with chain" is not selected
                }
            }
        }
        console.log(selectedCombination,"selected combination----------------------")
    }, [showWithChain, selectedColor, selectedEnamelColor ,selectedCombination]);
   
    console.log(selectedEnamelColor,"slected enamel colors")
    const selectedImage = (() => {
        let imageUrl = null;
         // 1. Handle case where both metal color and enamel color are selected
    if (selectedColor !== null && selectedEnamelColor !== null && shouldShowEnamel === true && shouldShowCombinations === false ) {
        const enamelColorData = data.enamelColors[selectedEnamelColor] || {};
        const formattedColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');
        const enamelKey = `${formattedColor}${["YellowGold", "RoseGold", "WhiteGold"][selectedColor]}clr`;

        console.log("Enamel Key:", enamelKey);

        const images = enamelColorData[enamelKey] || [];
        if (images.length > 0) {
            if (showWithChain && select === 2) {
                imageUrl = images[2]?.url || data.images?.[0]?.url;
            } else {
                imageUrl = images[select]?.url || images[0]?.url;
            }
        } else {
            setSelectedEnamelColor(null); // Reset if no images found
        }
    }
        if (selectedColor !== null && selectedEnamelColor === null && shouldShowEnamel === false  && shouldShowCombinations === false ) {
            // Define metal color arrays
            const metalColorImages = [
                data.MetalColor.YellowGoldclr || [],
                data.MetalColor.RoseGoldclr || [],
                data.MetalColor.WhiteGoldclr || []
            ];
    
            // Get the images array for the selected color
            const images = metalColorImages[selectedColor];
    
            // Check if "with chain" is selected and if select is 2 (third image)
            if (showWithChain && shouldShowEnamel === false && select === 2) {
                // Use the 3rd index (index 2) for "with chain" logic
                imageUrl = images[2]?.url || data.images?.[0]?.url;
            } else {
                // Check the user-selected image (select) or default to the 1st image
                imageUrl = imagesArray.length > 0 
                    ? imagesArray[select]?.url 
                    : images[0]?.url;
            }
        }
        if ( selectedColor !== null && shouldShowEnamel === false &&  selectedCombination === true) {
        const combinationData = data.combinationmetalImages || {};

            const formattedCombination = selectedCombination.toLowerCase().replace(/_/g, '');
            console.log("Formatted Combination:", formattedCombination);
    
            const combinationKey = combinationData[formattedCombination];
            console.log("Combination Key Data:", combinationKey);
    
            if (combinationKey) {
                if (selectedColor !== null) {
                    const selectedMetal = ["yellowGold", "roseGold", "whiteGold"][selectedColor];
    
                    if (selectedMetal && Array.isArray(combinationKey[selectedMetal])) {
                        const images = combinationKey[selectedMetal];
                        if (images.length > 0) {
                            return images[select]?.url || images[0]?.url; // Return selected image or first image
                        }
                    }
                }
    
                // Collect all images for the specific combination, ignoring metal color
                const availableCombinationImages = [];
                const availableMetalKeys = ["yellowGold", "roseGold", "whiteGold"];
    
                availableMetalKeys.forEach(key => {
                    if (Array.isArray(combinationKey[key])) {
                        availableCombinationImages.push(...combinationKey[key]);
                    }
                });
    
                if (availableCombinationImages.length > 0) {
                    return availableCombinationImages[select]?.url || availableCombinationImages[0]?.url; // Return selected image or first image
                }
            }
        }
    
        // Fallback to the general image array if no metal color is selected
        if (!imageUrl) {
            imageUrl = imagesArray.length > 0 
                ? imagesArray[select]?.url 
                : data.images?.[0]?.url;
        }
    
        return imageUrl;
    })();
    
   
    return (
        <div className='bg-white'>
            <>
            <Helmet>
                <title>{data.name} - Safe, Certified and Registered Natural Diamond & Gold jewellery for infants and Kids</title>
                <meta name="description" content={`Buy ${data.name} - ${data.description}`} />
                <meta name="keywords" content={`Infants jewellery, kids jewellery, ${data.category}, gold jewellery for kids, ${data.name} ${data.tags}`} />
                <link rel="canonical" href={productUrl} />
            </Helmet>

            </>
            {
                data ?
                    <div className={`${styles.section} w-[95%] 800px:w-[80%]`}>
                        <div className='w-full py-5'>
                            <div className='flex w-full 800px:flex flex-col md:flex-row'>
                                <div className="w-full 800px:w-[1/2] mr-5">

                                    {/* {select !== null && (
                                        selectedColor === 0 && data.MetalColor.YellowGoldclr ? (
                                            <img
                                                src={`${data.MetalColor.YellowGoldclr[select]?.url}`}
                                                alt=""
                                                className='w-[100%] h-[60vh] object-contain'
                                            />
                                        ) : selectedColor === 1 && data.MetalColor.RoseGoldclr ? (
                                            <img
                                                src={`${data.MetalColor.RoseGoldclr[select]?.url}`}
                                                alt=""
                                                className='w-[100%] h-[60vh] object-contain'
                                            />
                                        ) : selectedColor === 2 && data.MetalColor.WhiteGoldclr ? (
                                            <img
                                                src={`${data.MetalColor.WhiteGoldclr[select]?.url}`}
                                                alt=""
                                                className='w-[100%] h-[60vh] object-contain'
                                            />
                                        ) : (
                                            data.images && data.images[select] ? (
                                                <img
                                                    src={`${data.images[select]?.url}`}
                                                    alt=""
                                                    className='w-[100%] h-[60vh] object-contain'
                                                />
                                            ) : (
                                                <img
                                                    src={`${data.images && data.images[0]?.url}`} // Default to the first image if select is null or out of range
                                                    alt=""
                                                    className='w-[100%] h-[60vh] object-contain'
                                                />
                                            )
                                        )
                                    )
                                    } */}

{/*                                     
                                    {select !== null && imagesArray.length > 0 ? (
                                        <img
                                            src={`${imagesArray[select]?.url}`}
                                            alt=""
                                            className='w-[100%] h-[60vh] object-contain'
                                        />
                                    ) : (
                                        <img
                                            src={`${data.images && data.images[0]?.url}`} // Default to the first image if select is null or out of range
                                            alt=""
                                            className='w-[100%] h-[60vh] object-contain'
                                        />
                                    )} */}

                                <Zoom 
                                    zoomMargin={40} 
                                    defaultStyles={{ overlay: { zIndex: 1000 } }} 
                                    onZoom={() => setIsZoomed(true)} // Set zoomed state to true when the modal opens
                                    onUnzoom={() => setIsZoomed(false)} // Reset when it closes
                                >
                                    <motion.img
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={imageFadeIn}
                                        loading="lazy"
                                    
                                        // src={selectedImage}
                                        src={
                                            selectedImage?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                                ? selectedImage.replace(
                                                    /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                                    `${imgdburl}/uploads/images`
                                                )
                                                : `${imgdburl}${selectedImage}` // Prepend imgdburl if not a Cloudinary URL
                                        }
                                        alt=""
                                        // className="textshadowfilterimgod w-[100%] h-[60vh] object-contain !cursor-pointer" // Image to click and zoom
                                        className="textshadowfilterimgod border border-[#f0f0f0] shadow-sm rounded-md w-full  md:h-[60vh] h-[45vh] object-contain !cursor-pointer transition-all"

                                    />
                                </Zoom>

                                

                                    <div className='w-full flex mt-3'>
                                        {renderImages()}
                                        <Modal
                                            isOpen={showGallery}
                                            onRequestClose={() => setShowGallery(false)}
                                            className="flex justify-center items-center outline-none"
                                            overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
                                            style={{
                                                overlay: { zIndex: 1000 },
                                                content: { border: 'none', background: 'transparent', padding: 0 },
                                            }}
                                        >
                                            <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }} 
                                            className="relative bg-white p-4 rounded-lg shadow-lg w-full h-full max-w-4xl flex justify-center items-center">
                                                <button
                                                    className="absolute top-4 right-4 text-black text-2xl"
                                                    onClick={() => setShowGallery(false)}
                                                >
                                                    &times;
                                                </button>
                                                <button
                                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-3xl"
                                                    onClick={handlePrevImage}
                                                >
                                                    <IoChevronBackOutline />
                                                </button>
                                                <button
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-3xl"
                                                    onClick={handleNextImage}
                                                >
                                                    <IoChevronForwardOutline />

                                                </button>
                                                <div className="flex flex-col items-center">
                                                    <img
                                                        loading='lazy'

                                                        // src={`${imagesArray[currentImageIndex]?.url}`}
                                                        src={
                                                            imagesArray[currentImageIndex]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                                                ? imagesArray[currentImageIndex].url.replace(
                                                                    /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                                                    `${imgdburl}/uploads/images`
                                                                )
                                                                : `${imgdburl}${imagesArray[currentImageIndex]?.url}` // Prepend imgdburl if not a Cloudinary URL
                                                        }
                                                        alt=""
                                                        className="w-auto max-h-full object-contain"
                                                    />
                                                    <div className="mt-4 text-black">
                                                        {currentImageIndex + 1} / {imagesArray.length}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Modal>



                                    </div>



                                </div>


                                <div className='w-full 800px:w-[50%] pt-2 '>
                                    

                                    <div className='space-y-1'>

                                   <h1 className="text-md sm:text-2xl font-semibold text-[#C8A79B]">
                                        {data.name}
                                    </h1>
                                    <p className="text-sm text-[#8A6D63]/80">Design Application No. {data.designno}</p>
                                    <p className="text-xs font-medium text-[#8A6D63]/80">{data.skuid}</p>
                                    </div>


                                    {
                                        totalReviews > 0 && (
                                    <div className="flex items-center gap-2">
                                    {/* Stars */}
                                    <div className="flex text-yellow-500">
                                        {Array(fullStars).fill().map((_, i) => (
                                        <IoStarSharp key={`full-${i}`} className="w-4 h-4" />
                                        ))}
                                        {hasHalfStar && <IoStarHalfSharp className="w-4 h-4" />}
                                        {Array(emptyStars).fill().map((_, i) => (
                                        <IoStarOutline key={`empty-${i}`} className="w-4 h-4" />
                                        ))}
                                    </div>

                                    <div className="relative group flex items-center gap-2">
                                    {/* Average Rating and Review Count */}
                                    <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-1">
                                    <span className="text-sm">{averageRating.toFixed(1)} / 5</span>
                                    <span className="text-gray-400">•</span>
                                    <span
                                        className="text-blue-500 hover:underline cursor-pointer font-medium"
                                        title="View all reviews"
                                        onClick={handleScrollToReviews}
                                    >
                                        {totalReviews} review{totalReviews !== 1 && 's'}
                                    </span>
                                    </p>
                                    <div className="absolute top-2.5 left-0 mt-2 z-10 bg-white shadow-lg p-4 rounded-lg w-72 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                                        {/* Display average rating inside the tooltip */}
                                        <div className=" text-sm font-medium flex itmes-center gap-2">
                                            <div className="flex text-yellow-500">
                                            {Array(fullStars).fill().map((_, i) => (
                                            <IoStarSharp key={`full-${i}`} className="w-4 h-4" />
                                            ))}
                                            {hasHalfStar && <IoStarHalfSharp className="w-4 h-4" />}
                                            {Array(emptyStars).fill().map((_, i) => (
                                            <IoStarOutline key={`empty-${i}`} className="w-4 h-4" />
                                            ))}
                                            </div>
                                        <div>
                                            {averageRating.toFixed(1)} / 5
                                        </div>
                                        </div>
                                        <p  
                                        className="!mb-4 text-xs  hover:underline cursor-pointer"
                                        title="View all reviews" 
                                        onClick={handleScrollToReviews}> 
                                        {totalReviews}  review{totalReviews !== 1 && 's'}
                                        </p>


                                        {starStats.map(({ star, count, percentage }) => (
                                        <div key={star} className="flex items-center gap-2 mb-2">
                                            <span className="w-6 text-sm font-medium">{star}★</span>
                                            <div className="flex-1 bg-gray-200 h-3 rounded">
                                            <div
                                                className="bg-yellow-500 h-3 rounded"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                            </div>
                                            <span className="text-sm text-gray-600 w-8 text-right">{count}</span>
                                        </div>
                                        ))}

                                    <div className="border-t pt-3 mt-3 text-center">
                                        <p
                                        onClick={handleScrollToReviews}
                                        className="text-xs text-blue-600 hover:underline cursor-pointer"
                                        >
                                        See customer reviews
                                        </p>
                                    </div>

                                    </div>

                                    </div>


                                     {/* Tooltip with Star Stats */}
                                    
                                    </div>
                                        )
                                    }

                                    


                                    <p 
                                     className={`font-Poppins pt-1 text-[14px] productpageprodesc ${isExpanded ? '' : 'line-clamp'}`} 
                                      onClick={toggleReadMore}
                                     >
                                      {data.description}
                                    </p>

                                           {/* Conditionally render "View More" or "View Less" */}
                                     {!isExpanded && data.description.length > 100 && (
                                    <span 
                                        className='text-[14px] text-blue-400 cursor-pointer'
                                         onClick={toggleReadMore}
                                      >
                                       View More
                                    </span>
                                     )}
                                     {isExpanded && (
                                      <span 
                                         className='text-[14px] text-blue-400 cursor-pointer'
                                          onClick={toggleReadMore}
                                        >
                                     View Less
                                      </span>
                                    )}


                                    <div className="flex items-center pt-3">
                                    {/* <h4 className={`${styles.price} line-through`}>
                                            {finalOriginalPrice ? " ₹" + finalOriginalPrice : null}
                                        </h4>
                                        <h5 className={`${styles.productDiscountPrice} !stext-[#01463A]`}>

                                            ₹{finalPrice}
                                        </h5> */}

                                        {/* conversion price  */}
                                        {/* <h4 className={`${styles.price} line-through`}>
                                            {finalOriginalPrice ? `${currency} ${convertedFinalOriginalPrice}` : null}
                                        </h4> */}

                                        {/* Discounted Price */}
                                        <h5 className={`${styles.productDiscountPrice} !text-[#01463A]`}>
                                            {currency} {convertedFinalPrice}
                                        </h5>

                                        
                                        {/* {discountPercentage > 0 && (
                                            <span className="ml-2 text-[#4B4B4B] font-[450]">
                                                Save {discountPercentage}%
                                            </span>
                                        )} */}

                                    </div>
                              

                    <div className="instockcon">
                    <div className="instockconflex">
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {(() => {

                            // Handle case when both enamel and metal colors are selected
                            if (selectedEnamelColor !== null && selectedEnamelColor !== undefined && selectedColor !== null) {
                            const cleanedEnamelColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');
                            const metalColor = metalColors[selectedColor]?.replace(/\s+/g, '');

                            console.warn("enamel code running ")


                            if (!metalColor) return  <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />; // Fallback if metalColor is undefined

                            const enamelMetalStockKey = `${cleanedEnamelColor}${metalColor}clrStock`;

                            // Log for debugging
                            console.log('Constructed Stock Key:', enamelMetalStockKey);
                            console.log('Enamel Color Stock Data:', data?.Enamelcolorstock?.[cleanedEnamelColor]);

                            const enamelMetalStock = data?.Enamelcolorstock?.[cleanedEnamelColor]?.[enamelMetalStockKey] || 0;

                            // Debug stock value
                            console.log('Enamel-Metal Stock Value:', enamelMetalStock);

                            return enamelMetalStock > 0 ? 
                            <path d="M13 1.1566L4.08571 11L0 6.48844L1.04743 5.33184L4.08571 8.6786L11.9526 0L13 1.1566Z" fill="#0B8D08" /> 
                            :  
                            <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />;
                            }

                            // Handle case when only metal color is selected
                            if (selectedColor >= 0 && shouldShowEnamel === false && shouldShowCombinations === false) {
                            const metalStockKey = `${metalColors[selectedColor]?.replace(/\s+/g, '')}clrStock`;

                            console.warn("metal code running ")

                            if (!metalStockKey) return "Out of Stock"; // Fallback if metalStockKey is undefined

                            const metalStock = data?.Metalcolorstock?.[metalStockKey];

                            // Debug metal stock value
                            console.log('Metal Stock Key:', metalStockKey);
                            console.log('Metal Stock Value:', metalStock);

                            if (metalStock === null || metalStock === 0) {
                            console.warn("normal code running ")

                                return  <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />; // Explicitly handle null and zero stock
                            } else if (metalStock > 0) {
                                return <path d="M13 1.1566L4.08571 11L0 6.48844L1.04743 5.33184L4.08571 8.6786L11.9526 0L13 1.1566Z" fill="#0B8D08" /> ;
                            }
                            }

                            // Handle global stock fallback when no specific color is selected
                            if (data?.stock !== null && data?.stock !== undefined) {
                            return data.stock > 0 ?  
                            <path d="M13 1.1566L4.08571 11L0 6.48844L1.04743 5.33184L4.08571 8.6786L11.9526 0L13 1.1566Z" fill="#0B8D08" /> 
                            :
                            <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />;
                            }

                            //old code chaning to new

                            if (selectedCombination !== null && selectedCombination !== undefined && selectedColor !== null && shouldShowEnamel === false) {
                                console.warn("Product combination stock is working");

                                // Clean up the selected combination and metal color
                                const combinationKey = selectedCombination ? selectedCombination.toLowerCase().replace(/_/g, '') : null; // e.g. 'blueblack'
                                const metalColor = (metalColors[selectedColor]?.replace(/\s+/g, '')).toLowerCase(); // e.g. 'rosegold'
                                
                                // Log the cleaned combination and metal color for debugging
                                console.log("Combination Key: ", combinationKey);
                                console.log("Metal Color: ", metalColor);

                                // If a combination is selected, check stock for that combination and metal color
                                if (combinationKey) {
                                    console.log("Checking stock for combination and metal color...");
                                    
                                    // Check if combinationStocks data exists for the selected combination key
                                    if (data?.combinationStocks?.[combinationKey]) {
                                        const stockData = data?.combinationStocks?.[combinationKey];
                                        console.log("Stock Data: ", stockData);

                                        // Convert stock data keys to lowercase to match the metalColor
                                        const normalizedStockData = Object.keys(stockData).reduce((acc, key) => {
                                            acc[key.toLowerCase()] = stockData[key]; // normalize the keys to lowercase
                                            return acc;
                                        }, {});

                                        console.log("Normalized Stock Data: ", normalizedStockData);

                                        // Check if stock data exists for the selected metal color (case-insensitive)
                                        if (normalizedStockData[metalColor] !== undefined) {
                                            const stockValue = normalizedStockData[metalColor];

                                            // If stock is null or 0, show red icon (Out of Stock)
                                            if (stockValue === null || stockValue === 0) {
                                                console.log(`Stock for combination ${combinationKey} and metal color ${metalColor} is out of stock.`);
                                                return (
                                                    <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />
                                                ); // Red icon
                                            }

                                            // If stock is available (greater than 0), show green icon (In Stock)
                                            if (stockValue > 0) {
                                                console.log(`Stock for combination ${combinationKey} and metal color ${metalColor} is available: ${stockValue}`);
                                                return (
                                                    <path d="M13 1.1566L4.08571 11L0 6.48844L1.04743 5.33184L4.08571 8.6786L11.9526 0L13 1.1566Z" fill="#0B8D08" />
                                                ); // Green icon
                                            }
                                        } else {
                                            console.log(`No stock data available for combination ${combinationKey} and metal color ${metalColor}`);
                                            return (
                                                <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />
                                            ); // Red icon
                                        }
                                    } else {
                                        console.log(`No stock data available for combination ${combinationKey}`);
                                        return (
                                            <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />
                                        ); // Red icon
                                    }
                                } 
                                // If no combination is selected, check only based on metal color
                                else {
                                    console.log("Checking stock based only on metal color...");

                                    // Loop through all combinations to check if any stock data exists for the metal color
                                    let inStock = false;
                                    for (let combination in data?.combinationStocks) {
                                        const stockData = data?.combinationStocks[combination];
                                        console.log(`Checking stock for combination: ${combination}`);
                                        
                                        // Normalize stock data keys to lowercase
                                        const normalizedStockData = Object.keys(stockData).reduce((acc, key) => {
                                            acc[key.toLowerCase()] = stockData[key];
                                            return acc;
                                        }, {});

                                        // If stock exists for the selected metal color, set `inStock` to true
                                        if (normalizedStockData[metalColor] !== undefined && normalizedStockData[metalColor] > 0) {
                                            console.log(`Stock for metal color ${metalColor} is available in combination ${combination}`);
                                            inStock = true;
                                            break; // Exit loop once stock is found
                                        }
                                    }

                                    // Return the appropriate icon based on availability for metal color
                                    if (inStock) {
                                        return (
                                            <path d="M13 1.1566L4.08571 11L0 6.48844L1.04743 5.33184L4.08571 8.6786L11.9526 0L13 1.1566Z" fill="#0B8D08" />
                                        ); // Green icon if in stock
                                    } else {
                                        console.log(`No stock data available for metal color ${metalColor}`);
                                        return (
                                            <path d="M1 1L12 10M12 1L1 10" stroke="#FF0000" strokeWidth="2" />
                                        ); // Red icon if out of stock
                                    }
                                }
                            }
                           
                            

                            return  <path d="M13 1.1566L4.08571 11L0 6.48844L1.04743 5.33184L4.08571 8.6786L11.9526 0L13 1.1566Z" fill="#0B8D08" /> ; // Default fallback
                        })()}
                        </svg>
                        
                        <span
                        style={{
                            color: (() => {
                            // Handle case when both enamel and metal colors are selected

    
                            
                            if (selectedEnamelColor !== null && selectedEnamelColor !== undefined && selectedColor !== null) {
                                const cleanedEnamelColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');
                                const metalColor = metalColors[selectedColor]?.replace(/\s+/g, '');

                                if (!metalColor) return '#FF0000'; // Fallback if metalColor is undefined

                                // Construct the enamel-metal stock key
                                const enamelMetalStockKey = `${cleanedEnamelColor}${metalColor}clrStock`;

                                // Log for debugging purposes
                                console.log('Constructed Stock Key:', enamelMetalStockKey);
                                console.log('Enamel Color Stock Data:', data?.Enamelcolorstock?.[cleanedEnamelColor]);

                                const enamelMetalStock = data?.Enamelcolorstock?.[cleanedEnamelColor]?.[enamelMetalStockKey] || 0;

                                // Debug stock data
                                console.log('Enamel-Metal Stock Value:', enamelMetalStock);

                                return enamelMetalStock > 0 ? '#0B8D08' : '#FF0000'; // Green if in stock, red if out of stock
                            }

                           

                            // Handle case when only metal color is selected
                            if (selectedColor >= 0 && shouldShowEnamel === false && shouldShowCombinations === false) {
                                const metalStockKey = `${metalColors[selectedColor]?.replace(/\s+/g, '')}clrStock`;

                                if (!metalStockKey) return '#FF0000'; // Fallback if metalStockKey is undefined

                                const metalStock = data?.Metalcolorstock?.[metalStockKey] ;

                                console.log('Metal Stock Key:', metalStockKey);
                                console.log('Metal Stock Value:', metalStock);

                            
                                // // Initial rendering: If the stock data is not available, assume in stock
                                // if (metalStock === undefined ) {
                                //     console.warn("Initial state running, assuming stock is available");
                                //     return "#0B8D08"; // Default to green
                                // }
                                // Explicitly handle null and zero stock
                                if (metalStock === 0 || metalStock === null ) {
                                    // console.warn("normal code running");
                                    return "#FF0000"; // Red for out of stock
                                } else {
                                    return "#0B8D08"; // Green for in stock
                                }
                            

                                // Green if in stock, red if out of stock
                            }

                            // Handle global stock fallback when no specific color is selected
                            if (data?.stock !== null && data?.stock !== undefined) {
                                return data.stock > 0 ? '#0B8D08' : '#FF0000'; // Green if in stock, red if out of stock
                            }
                            // old wokrinf code 
                            if (selectedCombination !== null && selectedCombination !== undefined && selectedColor !== null && shouldShowEnamel === false) {
                                console.warn("Product combination stock is working");
                            
                                // Clean up the selected combination and metal color
                                const combinationKey = selectedCombination ? selectedCombination.toLowerCase().replace(/_/g, '') : null; // e.g. 'blueblack'
                                const metalColor = (metalColors[selectedColor]?.replace(/\s+/g, '')).toLowerCase(); // e.g. 'rosegold'
                                
                                // Log the cleaned combination and metal color for debugging
                                console.log("Combination Key: ", combinationKey);
                                console.log("Metal Color: ", metalColor);
                            
                                // If a combination is selected, check stock for that combination and metal color
                                if (combinationKey) {
                                    console.log("Checking stock for combination and metal color...");
                                    
                                    // Check if combinationStocks data exists for the selected combination key
                                    if (data?.combinationStocks?.[combinationKey]) {
                                        const stockData = data?.combinationStocks?.[combinationKey];
                                        console.log("Stock Data: ", stockData);
                            
                                        // Convert stock data keys to lowercase to match the metalColor
                                        const normalizedStockData = Object.keys(stockData).reduce((acc, key) => {
                                            acc[key.toLowerCase()] = stockData[key]; // normalize the keys to lowercase
                                            return acc;
                                        }, {});
                            
                                        console.log("Normalized Stock Data: ", normalizedStockData);
                            
                                        // Check if stock data exists for the selected metal color (case-insensitive)
                                        if (normalizedStockData[metalColor] !== undefined) {
                                            const stockValue = normalizedStockData[metalColor];
                            
                                            if (stockValue === null || stockValue === 0) {
                                                console.log(`Stock for combination ${combinationKey} and metal color ${metalColor} is out of stock.`);
                                                return "#FF0000"; // Red color if out of stock
                                            }
                            
                                            if (stockValue > 0) {
                                                console.log(`Stock for combination ${combinationKey} and metal color ${metalColor} is available: ${stockValue}`);
                                                return "#0B8D08"; // Green color if in stock
                                            }
                                        } else {
                                            console.log(`No stock data available for combination ${combinationKey} and metal color ${metalColor}`);
                                            return "#FF0000"; // Red if no stock data available
                                        }
                                    } else {
                                        console.log(`No stock data available for combination ${combinationKey}`);
                                        return "#FF0000"; // Red if no stock data for the combination
                                    }
                                } 
                                // If no combination is selected, check only based on metal color
                                else {
                                    console.log("Checking stock based only on metal color...");
                            
                                    // Loop through all combinations to check if any stock data exists for the metal color
                                    let inStock = false;
                                    for (let combination in data?.combinationStocks) {
                                        const stockData = data?.combinationStocks[combination];
                                        console.log(`Checking stock for combination: ${combination}`);
                                        
                                        // Normalize stock data keys to lowercase
                                        const normalizedStockData = Object.keys(stockData).reduce((acc, key) => {
                                            acc[key.toLowerCase()] = stockData[key];
                                            return acc;
                                        }, {});
                            
                                        // If stock exists for the selected metal color, set `inStock` to true
                                        if (normalizedStockData[metalColor] !== undefined && normalizedStockData[metalColor] > 0) {
                                            console.log(`Stock for metal color ${metalColor} is available in combination ${combination}`);
                                            inStock = true;
                                            break; // Exit loop once stock is found
                                        }
                                    }
                            
                                    // Return green or red color based on availability for metal color
                                    if (inStock) {
                                        return "#0B8D08"; // Green color if in stock
                                    } else {
                                        console.log(`No stock data available for metal color ${metalColor}`);
                                        return "#FF0000"; // Red if out of stock
                                    }
                                }
                            }
                           

                            return '#0B8D08'; // Default fallback color
                            })()
                        }}
                        className="text-[14px] font-medium leading-[24px]"
                        >
                        {(() => {
                            
                            // combination instock message 
                                              
                            // Handle case when both enamel and metal colors are selected
                            if (selectedEnamelColor !== null && selectedEnamelColor !== undefined && selectedColor !== null) {
                            const cleanedEnamelColor = selectedEnamelColor.toLowerCase().replace(/_/g, '');
                            const metalColor = metalColors[selectedColor]?.replace(/\s+/g, '');

                            console.warn("enamel code running ")


                            if (!metalColor) return "Out of Stock"; // Fallback if metalColor is undefined

                            const enamelMetalStockKey = `${cleanedEnamelColor}${metalColor}clrStock`;

                            // Log for debugging
                            console.log('Constructed Stock Key:', enamelMetalStockKey);
                            console.log('Enamel Color Stock Data:', data?.Enamelcolorstock?.[cleanedEnamelColor]);

                            const enamelMetalStock = data?.Enamelcolorstock?.[cleanedEnamelColor]?.[enamelMetalStockKey] || 0;

                            // Debug stock value
                            console.log('Enamel-Metal Stock Value:', enamelMetalStock);

                            return enamelMetalStock > 0 ? "In Stock" : "Out of Stock";
                            }

                            


                            // Handle case when only metal color is selected
                            if (selectedColor >= 0 && shouldShowEnamel === false && shouldShowCombinations === false) {
                            const metalStockKey = `${metalColors[selectedColor]?.replace(/\s+/g, '')}clrStock`;

                            console.warn("metal code running ")

                            if (!metalStockKey) return "Out of Stock"; // Fallback if metalStockKey is undefined

                            const metalStock = data?.Metalcolorstock?.[metalStockKey];

                            // Debug metal stock value
                            console.log('Metal Stock Key:', metalStockKey);
                            console.log('Metal Stock Value:', metalStock);

                            if (metalStock === null || metalStock === 0) {
                            console.warn("normal code running ")

                                return "Out of Stock"; // Explicitly handle null and zero stock
                            } else if (metalStock > 0) {
                                return "In Stock";
                            }
                            }

                            // Handle global stock fallback when no specific color is selected
                            if (data?.stock !== null && data?.stock !== undefined) {
                            return data.stock > 0 ? "In Stock" : "Out of Stock";
                            }
                            
                            if(selectedCombination !== null && selectedCombination !== undefined && selectedColor !== null && shouldShowEnamel === false){
                                console.warn("product combination stock is working ")


                                // Clean up the selected combination and metal color
                            // Clean up the selected combination and metal color
                                    const combinationKey = selectedCombination ? selectedCombination.toLowerCase().replace(/_/g, '') : null; // e.g. 'blueblack'
                                    const metalColor = (metalColors[selectedColor]?.replace(/\s+/g, '')).toLowerCase(); // e.g. 'rosegold'
                                    
                                    // Log the cleaned combination and metal color for debugging
                                    console.log("Combination Key: ", combinationKey);
                                    console.log("Metal Color: ", metalColor);

                                    // If a combination is selected, check stock for that combination and metal color
                                    if (combinationKey) {
                                        console.log("Checking stock for combination and metal color...");
                                        
                                        // Check if combinationStocks data exists for the selected combination key
                                        if (data?.combinationStocks?.[combinationKey]) {
                                            const stockData = data?.combinationStocks?.[combinationKey];
                                            console.log("Stock Data: ", stockData);

                                            // Convert stock data keys to lowercase to match the metalColor
                                            const normalizedStockData = Object.keys(stockData).reduce((acc, key) => {
                                                acc[key.toLowerCase()] = stockData[key]; // normalize the keys to lowercase
                                                return acc;
                                            }, {});

                                            console.log("Normalized Stock Data: ", normalizedStockData);

                                            // Check if stock data exists for the selected metal color (case-insensitive)
                                            if (normalizedStockData[metalColor] !== undefined) {
                                                const stockValue = normalizedStockData[metalColor];

                                                if (stockValue === null || stockValue === 0) {
                                                    console.log(`Stock for combination ${combinationKey} and metal color ${metalColor} is out of stock.`);
                                                    return "Out of Stock";
                                                }

                                                if (stockValue > 0) {
                                                    console.log(`Stock for combination ${combinationKey} and metal color ${metalColor} is available: ${stockValue}`);
                                                    return "In Stock";
                                                }
                                            } else {
                                                console.log(`No stock data available for combination ${combinationKey} and metal color ${metalColor}`);
                                                return "Out of Stock";
                                            }
                                        } else {
                                            console.log(`No stock data available for combination ${combinationKey}`);
                                            return "Out of Stock";
                                        }
                                    } 
                                    // If no combination is selected, check only based on metal color
                                    else {
                                        console.log("Checking stock based only on metal color...");

                                        // Loop through all combinations to check if any stock data exists for the metal color
                                        let inStock = false;
                                        for (let combination in data?.combinationStocks) {
                                            const stockData = data?.combinationStocks[combination];
                                            console.log(`Checking stock for combination: ${combination}`);
                                            
                                            // Normalize stock data keys to lowercase
                                            const normalizedStockData = Object.keys(stockData).reduce((acc, key) => {
                                                acc[key.toLowerCase()] = stockData[key];
                                                return acc;
                                            }, {});

                                            // If stock exists for the selected metal color, set `inStock` to true
                                            if (normalizedStockData[metalColor] !== undefined && normalizedStockData[metalColor] > 0) {
                                                console.log(`Stock for metal color ${metalColor} is available in combination ${combination}`);
                                                inStock = true;
                                                break; // Exit loop once stock is found
                                            }
                                        }

                                        // Return "In Stock" or "Out of Stock" based on availability for metal color
                                        if (inStock) {
                                            return "In Stock";
                                        } else {
                                            console.log(`No stock data available for metal color ${metalColor}`);
                                            return "Out of Stock";
                                        }
                                    }
                            }
                            

                            return "In Stock"; // Default fallback
                        })()}
                        </span>
                    </div>
                    </div>




                                        {
                                            shouldShowMetalColors && (
                                                <div className='metaloptionproduct'>
                                                    {Object.keys(data.MetalColor).length > 0 && (
                                                        <>
                                                            <div className='metaltitle flex items-center'>
                                                                <h3 className='!text-sm !text-[#D7A295]'>Metal Color :</h3>
                                                            </div>
                                                            <div className='metalmaincolor'>
                                                                {['YellowGoldclr', 'RoseGoldclr', 'WhiteGoldclr'].map((key, index) => {
                                                                    // Check if the color exists and has images
                                                                    const images = data.MetalColor[key] || [];
                                                                    const hasImages = images.length > 0;

                                                                    // If the color has no images, return null
                                                                    if (!hasImages) {
                                                                        return null;
                                                                    }

                                                                    // Remove "clr" from the end of the color name
                                                                    const label = key.replace(/clr$/i, '');
                                                                    const isSelected = selectedColor === index; // Compare with fixed index

                                                                    return (
                                                                        <div key={key} className={`metalcolor ${isSelected ? 'selected' : ''}`}>
                                                                            <input
                                                                                type="radio"
                                                                                name='colorcode'
                                                                                id={`color-${key}`}
                                                                                value={key}
                                                                                checked={isSelected}
                                                                                onChange={() => handleColorChange(index)} // Use fixed index for selection
                                                                                className='hidden' // Hide the default radio button
                                                                            />
                                                                            <label
                                                                                htmlFor={`color-${key}`}
                                                                                className='flex items-center flex-col cursor-pointer'
                                                                            >
                                                                                <span className={`metalcolorcon ${key} ${isSelected ? 'selected' : ''}`}></span>
                                                                                <span className='ml-2'>{label}</span>
                                                                            </label>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            )
                                        }




                                    {shouldShowEnamel && (
                                        <div className="enamelotion pt-3">
                                            <div className='enameltitle flex items-center'>
                                                <h3 className="text-sm font-[600] font-Poppins !text-[#D7A295]">Enamel Color : </h3>
                                            </div>
                                            <div className="enamelselect text-[16px] font-Poppins py-1">
                                                <select
                                                    name="enamelColors"
                                                    id="enamelColors"
                                                    className="border"
                                                    onChange={(e) => setSelectedEnamelColor(e.target.value)}
                                                    value={selectedEnamelColor}
                                                >
                                                    <option value="">Select Enamel Color</option>
                                                    {availableEnamelColors.map((color) => (
                                                        <option key={color._id} value={color._id}>
                                                            {color.enamelColorName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    )}


                                    {/* combination of enamel */}
                                    {shouldShowCombinations && (
                                        <div className="enamelotion pt-3">
                                            <div className='enameltitle flex items-center'>
                                                <h3 className="!text-sm font-[600] !text-[#D7A295] font-Poppins">Combination : </h3>
                                            </div>
                                            <div className="enamelselect text-[16px] font-Poppins py-1">
                                                <select
                                                    name="combinationColors"
                                                    id="combinationColors"
                                                    className="border"
                                                    onChange={(e) => setSelectedCombination(e.target.value)}
                                                    value={selectedCombination}
                                                >
                                                    <option value="">Select Combination Color</option>
                                                    {availableCombinationImages.map((color, index) => (
                                                        <option key={index} value={color.combinationName}>
                                                            {color.combinationName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    )}

                               

                                {shouldShowChainOptions && (
                                    <div className="chainotionproduct flex items-center">
                                        <div className="chainopiontitle">
                                            <h3 className='!text-sm !text-[#D7A295]'>Chain Type :</h3>
                                        </div>

                                        <div className="chainotionproductflex">
                                            {/* With Chain Option */}
                                            <div className="withchainoption">
                                                <div className="withchainoptioncon text-[14px] font-Poppins py-1">
                                                    <input
                                                        className="hidden"
                                                        type="radio"
                                                        id="withChain"
                                                        name="chainOption"
                                                        value="with"
                                                        onChange={() => toggleChainOption("with")}
                                                        checked={showWithChain === true}
                                                    />
                                                    <label htmlFor="withChain" className="cursor-pointer">
                                                        <div className={`tagwithchain ${showWithChain === true ? "border border-[#dcb699]" : "border-none"}`}>
                                                            With Chain
                                                        </div>
                                                        <div className={`chain-options mt-2 flex gap-2 ${showWithChain ? "visible" : "hidden"}`}>
                                                            {productType === "gold" && (
                                                                <>
                                                                    <label className={`chain-size-label cursor-pointer flex`}>
                                                                        <input
                                                                            type="radio"
                                                                            name="chainSize"
                                                                            value="13inch"
                                                                            onChange={handleChainSizeChange}
                                                                            checked={selectedChainSize === "13inch"}
                                                                        />
                                                                        <span
                                                                            className={`chainboxtsec chain-size-text ${
                                                                                selectedChainSize === "13inch"
                                                                                    ? "!font-[600] !text-white !bg-[#dcb699] border border-[#dcb699]/30"
                                                                                    : ""
                                                                            }`}
                                                                        >
                                                                            13 inches
                                                                        </span>
                                                                    </label>
                                                                    <label className={`chain-size-label cursor-pointer flex`}>
                                                                        <input
                                                                            type="radio"
                                                                            name="chainSize"
                                                                            value="18inch"
                                                                            onChange={handleChainSizeChange}
                                                                            checked={selectedChainSize === "18inch"}
                                                                        />
                                                                        <span
                                                                            className={`chainboxtsec chain-size-text ${
                                                                                selectedChainSize === "18inch"
                                                                                    ? "!font-[600] !text-white !bg-[#dcb699] border border-[#dcb699]/30"
                                                                                    : ""
                                                                            }`}
                                                                        >
                                                                            18 inches
                                                                        </span>
                                                                    </label>
                                                                </>
                                                            )}
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Without Chain Option */}
                                            <div className="withchainoption">
                                                <div className="withchainoptioncon text-[14px] font-Poppins py-1">
                                                    <input
                                                        className="hidden"
                                                        type="radio"
                                                        id="withoutChain"
                                                        name="chainOption"
                                                        value="without"
                                                        onChange={() => toggleChainOption("without")}
                                                        checked={showWithChain === false}
                                                    />
                                                    <label htmlFor="withoutChain" className="cursor-pointer">
                                                        <div className={`tagwithchain  ${showWithChain === false  ? "border border-[#dcb699]" : "border-none"}`}>
                                                            Without Chain
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}




                                    {/* Validation Error */}
                                    {validationError && (
                                        <p className='text-red-500 text-sm mt-2'>{validationError}</p>
                                    )}

                                    





                                    <div className="w-80 flex items-center gap-3 my-3">
                                    <div className="flex items-center bg-[#F8F3F0] rounded-full overflow-hidden border border-[#E8D5CE]">
                                    <button
                                        onClick={decrementCount}
                                        className="text-[#B8956F] font-bold w-10 h-10 flex items-center justify-center hover:bg-[#E8D5CE] transition duration-200"
                                    >
                                        <Minus className="h-3 w-3" />
                                    </button>
                                    <span className="text-[#8B4513] font-semibold px-4 py-2 min-w-[50px] text-center text-sm">{count}</span>
                                    <button
                                        onClick={incrementCount}
                                        className="text-[#B8956F] font-bold w-10 h-10 flex items-center justify-center hover:bg-[#E8D5CE] transition duration-200"
                                    >
                                        <Plus className="h-3 w-3" />
                                    </button>
                                    </div>

                                    <button
                                    className="flex-1 bg-[#D8B4A0] text-white px-5 py-2.5 rounded-full hover:bg-[#C9A08A] transition duration-200 ease-in-out font-medium text-sm shadow-sm"
                                    onClick={() => addToCartHandler(data._id)}
                                    >
                                    <span className="flex items-center justify-center gap-2">
                                        Add to Cart <ShoppingCart className="h-4 w-4" />
                                    </span>
                                    </button>
                                </div>
                                    

                                 
                                    <div className='w-80'>

                
                                    <Button
                                    className="w-full border border-[#D8B4A0] text-[#D7A295] bg-white hover:bg-[#F8F3F0] rounded-full py-2.5 transition duration-200 ease-in-out font-medium text-sm"
                                    onClick={() => addToCartHandler(data._id, true)}
                                    >
                                        Buy Now
                                    </Button>
                                    </div>



                                    {/* add to wishlist */}

                                    <div className='productaddtowish'>
                                        {
                                            click ?

                                                <div className='productaddtowishflex cursor-pointer !text-[#D7A295]' onClick={() => removeFromWishlistHandler(data)}>
                                                    <AiFillHeart
                                                        size={24}
                                                        className='cursor-pointer '
                                                        color={click ? "red" : "#D7A295"}

                                                        title='Remove from wishlist'
                                                    />

                                                    <span>Already in wishlist</span>

                                                </div>
                                                :
                                                <div className='productaddtowishflex cursor-pointer !text-[#D7A295]' onClick={() => addToWishlistHandler(data)}>
                                                    <AiOutlineHeart
                                                        size={24}

                                                        color={click ? "red" : "#D7A295"}

                                                        title='Add to wishlist'


                                                    />
                                                    <span>Add to wishlist</span>
                                                </div>
                                        }
                                    </div>

                                    {/* share product */}
                                    <div className='shareproductlist'>
                                        <div className='sharelisttitle'>
                                            <h3 className=''>Share this product :</h3>

                                        </div>

                                        <div className='productsharelisticon'>
                                            <FacebookShareButton url={productUrl} >
                                                <FaFacebook size={28} className="share-icon" />

                                                {/* <FacebookIcon size={32} round={true} /> */}
                                            </FacebookShareButton>

                                            <WhatsappShareButton url={productUrl} >
                                                <FaWhatsapp size={28} className="share-icon" />

                                                {/* <WhatsappIcon size={28} round={true} /> */}
                                            </WhatsappShareButton>

                                            <EmailShareButton url={productUrl} >
                                                <MdOutlineEmail size={28} className="share-icon" />

                                                {/* <EmailIcon size={28} round={true} /> */}
                                            </EmailShareButton>

                                            <div onClick={() => { shareOnInstagram(data) }}>
                                                <FaInstagram size={28} className="share-icon" />

                                                {/* <i className="fa-brands fa-square-instagram instasty" style={{ cursor: 'pointer' }}></i> */}

                                            </div>

                                        </div>

                                    </div>




                                    

                                         <div className="flex items-center mt-4 gap-2 flex-1 min-w-[200px] max-w-[340px]">
                                        <MapPin size={16} className="text-[#D7A295]" />
                                        <Input
                                            type="text"
                                            placeholder="Check delivery time"
                                            value={pincode}
                                            onChange={(e) => setpincode(e.target.value)}
                                            className="flex-1 !w-[220px] h-8 text-sm border-[#D7A295]/30 focus:!border-[#D7A295]/80"
                                        />
                                        <Button
                                            onClick={calculateEDD}
                                            className="bg-[#D7A295] hover:bg-[#C9958A] text-white h-8 px-3 text-sm"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "..." : "Check"}
                                        </Button>
                                        </div>

                                </div>

                            </div>

                        </div>

                        <ProductDetailsInfo data={data} shouldShowChainOptions={shouldShowChainOptions} active={active} setActive={setActive} reviewSectionRef={reviewSectionRef}/>


                    </div>
                    :
                    null
            }


        </div>
    )
}


// const ProductDetailsInfo = ({ data ,shouldShowChainOptions,active,setActive,reviewSectionRef }) => {
//     console.log(data, "see the data")
//     const [expanded, setExpanded] = useState(true);

//     const [categoriesData, setCategoriesData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetch categories from the API
//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(`${server}/get-allcategories`);
//                 // Filter categories based on type (gold or silver)
//                 const filteredGoldCategories = response.data.categories.filter(category => category.type === 'gold');
//                 setCategoriesData(filteredGoldCategories); // Store gold categories
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//                 alert('Failed to fetch categories');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCategories();
//     }, []);


//     console.log(categoriesData,"categoriesData-------------------")
//     const productCategory = data?.category;
//     const productType = categoriesData.some(category => 
//         category.title.toLowerCase().includes(productCategory.toLowerCase()) && category.type === 'gold'
//     ) ? 'gold' : 'silver';


//     return (
//         <div className='bg-[#fcfcfc] shadow-lg  border-[0.1px] border-[#f8f8f8] mb-5 px-10 800px:px-2 py-2 rounded pb-5 productdetailspageresp'>
//             <div className="w-full flex justify-between border-b pt-10 pb-2">
//                 <div className="relative">
//                     <h5 className={`${active === 1 ? "text-[#1BB8E5] font-[700]" : "text-[#000]"} text-[16px]  px-1 leading-5 cursor-pointer 800px:text-[20px] font-Poppins `} onClick={() => setActive(1)} >Product Details</h5>
//                     {/* {
//                     active === 1 ?
//                      (
//                         <div className={`${styles.active_indicator}`} />
//                     ) : null} */}
//                 </div>
//                 <div className="relative">
//                     <h5 className={`${active === 2 ? "text-[#1BB8E5] font-[700]" : "text-[#000]"} text-[16px] px-1 leading-5 cursor-pointer 800px:text-[20px] font-Poppins`} onClick={() => setActive(2)}>Product Reviews</h5>

//                 </div>

//             </div>
//             {
//                 active === 1 ?
//                     <>
//                         <div className='mb-3 productdetailspagerespcon'>
//                             <h1 className={`text-[18px] font-[600] font-Poppins text-[#333] pt-1`}>{data.name}</h1>
//                             <p className="font-Poppins pt-1">{data.description}</p>
//                             <h3 className={`text-[#727386] text-left  text-[15px] font-Poppins pt-1`}>{data.skuid}</h3>

//                         </div>

//                         {/* table section */}

//                         <div className='flex flex-wrap  gap-5'>

//                             <div className="bg-[#5DC2B0] w-[300px] font-Poppins mb-3 rounded-[4px] productdetailresptable">
//                                 <div className="t1sec px-[12.5px] py-[16px] gap-2 flex items-center">
//                                     <span><AiOutlineGold /></span>
                                    // {
                                    // categoriesData
                                    //     .filter(category => category.title.toLowerCase().includes(productCategory.toLowerCase())) // Match by title or another attribute
                                    //     .length > 0 ? (
                                    //     categoriesData
                                    //         .filter(category => category.title.toLowerCase().includes(productCategory.toLowerCase()))
                                    //         .map((category) => (
                                    //         <span className="font-[500]" key={category._id}>
                                    //             Gold
                                    //         </span>
                                    //         ))
                                    //     ) : (
                                    //     <span className="font-[500]">Silver</span>
                                    //     )
                                    // }
//                                 </div>
//                                 <div className="tsec2 flex font-Poppins">
//                                     <div className='w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]'>
                                        // <div className='pb-[8px] font-[600] '>Weight</div>
                                        // <p className='text-[#4f3267] text-[13px]'> {data?.goldWeight ? data.goldWeight.weight : "Not Updated"} </p>
//                                     </div>
//                                     <div className='w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]'>
                                        // <div className='pb-[8px] font-[600] '>Purity</div>
                                        // <p className='text-[#4f3267] text-[13px]'>{data?.goldWeight ? data.goldWeight.purity : "18 kt"}</p>
//                                     </div>
//                                 </div>
//                             </div>
// {/* 
//                             <div className="bg-[#5DC2B0] w-[300px] font-Poppins mb-3 rounded-[4px] productdetailresptable">
//                                 <div className="t1sec px-[12.5px] py-[16px] gap-2 flex items-center">
//                                     <span><IoDiamondOutline /></span>
//                                     <span className='font-[500]'>Diamond</span>
//                                 </div>
//                                 <div className="tsec2 flex font-Poppins">
//                                     <div className='w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]'>
                                        // <div className='pb-[8px] font-[600] '>Weight</div>
                                        // <p className='text-[#4f3267] text-[13px]'>{data?.diamondWeight ? data.diamondWeight.weight : "Not Updated"} </p>
//                                     </div>
//                                     <div className='w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]'>
                                        // <div className='pb-[8px] font-[600] '>Quality</div>
                                        // <p className='text-[#4f3267] text-[13px]'>{data?.diamondWeight ? data.diamondWeight.quality : " GH-VS"}</p>
//                                     </div>
//                                 </div>
//                             </div> */}

//                             {/* Render the main container only if there is valid weight or quality */}
                            // {(data?.diamondWeight?.weight && data?.diamondWeight?.weight !== "NA" && data?.diamondWeight?.weight !== null) || 
                            // (data?.diamondWeight?.quality && data?.diamondWeight?.quality !== "NA" && data?.diamondWeight?.quality !== null) ? (
                            // <div className="bg-[#5DC2B0] w-[300px] font-Poppins mb-3 rounded-[4px] productdetailresptable">
                            //     <div className="t1sec px-[12.5px] py-[16px] gap-2 flex items-center">
                            //     <span><IoDiamondOutline /></span>
                            //     <span className="font-[500]">Diamond</span>
                            //     </div>
                                
                            //     <div className="tsec2 flex font-Poppins">
                            //     {/* Conditional rendering for Weight */}
                            //     {data?.diamondWeight?.weight && data?.diamondWeight?.weight !== "NA" && data?.diamondWeight?.weight !== null ? (
                            //         <div className="w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]">
                            //         <div className="pb-[8px] font-[600]">Weight</div>
                            //         <p className="text-[#4f3267] text-[13px]">
                            //             {data?.diamondWeight?.weight || "Not Updated"}
                            //         </p>
                            //         </div>
                            //     ) : null}

                            //     {/* Conditional rendering for Quality */}
                            //     {data?.diamondWeight?.quality && data?.diamondWeight?.quality !== "NA" && data?.diamondWeight?.quality !== null ? (
                            //         <div className="w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]">
                            //         <div className="pb-[8px] font-[600]">Quality</div>
                            //         <p className="text-[#4f3267] text-[13px]">
                            //             {data?.diamondWeight?.quality || "GH-VS"}
                            //         </p>
                            //         </div>
                            //     ) : null}
                            //     </div>
                            // </div>
                            // ) : null}


//                             <div className="bg-[#5DC2B0] w-[300px] font-Poppins mb-3 rounded-[4px] productdetailresptable">
//                                 <div className="t1sec px-[12.5px] py-[16px] gap-2 flex items-center">
//                                     <span><RxDimensions /></span>
//                                     <span className='font-[500]'>Dimension</span>
//                                 </div>
//                                 <div className="tsec2 flex font-Poppins">
//                                     <div className='w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]'>
//                                         <div className='pb-[8px] font-[600] '>Height</div>
//                                         <p className='text-[#4f3267] text-[13px]'> {data?.dimension ? data.dimension.height : "Not Updated"}</p>
//                                     </div>
//                                     <div className='w-[200px] bg-[#b6f0e5] mr-[1.5px] px-[10px] py-[10px]'>
//                                         <div className='pb-[8px] font-[600] '>Width</div>
//                                         <p className='text-[#4f3267] text-[13px]'>{data?.dimension ? data.dimension.width : "Not Updated"} </p>
//                                     </div>
//                                 </div>
//                             </div>

                            // {shouldShowChainOptions && 
                            // <div className="bg-[#5DC2B0] w-[300px] font-Poppins mb-3 rounded-[4px] productdetailresptable">
                            // <div className="t1sec px-[12.5px] py-[16px] gap-2 flex items-center">
                            //     <span><GiHeartNecklace /></span>
                            //     <span className='font-[500]'>Chain </span>
                            // </div>
                            // <div className="tsec2 !h-auto flex font-Poppins">
                            //     <div className='w-[200px] bg-[#b6f0e5] !h-auto mr-[1.5px] px-[10px] py-[2px]'>
                            //         <div className='pb-[2px] font-[600] '>Length</div>
                            //         {/* <p className='text-[#4f3267] text-[13px]'>13 inch</p>
                            //         <p className='text-[#4f3267] text-[13px]'>18 inch</p> */}
                            //         {productType === 'gold' ? (
                            //             <>
                            //                 <p className="text-[#4f3267] text-[13px]">13 inch</p>
                            //                 <p className="text-[#4f3267] text-[13px]">18 inch</p>
                            //             </>
                            //             ) : productType === 'silver' ? (
                            //             <>
                            //                 <p className="text-[#4f3267] text-[13px]">18 inch</p>
                            //             </>
                            //             ) : null}

                            //     </div>
                            //     <div className={`w-[200px] ${productType === 'gold' ? 'h-auto' :'!h-[70px]' } bg-[#b6f0e5]  mr-[1.5px] px-[10px] py-[2px]`}>
                            //         <div className='pb-[2px] font-[600] '>Weight</div>
                            //         {
                            //             productType === 'gold' ?
                            //             <>
                            //             <p className='text-[#4f3267] text-[13px]'> 1gms </p>
                            //             <p className='text-[#4f3267] text-[13px]'> 2gms </p>
                            //             </>
                            //             :
                            //             <>
                            //             <p className='text-[#4f3267]  text-[12px]' > approx 2.5 - 3gms </p>

                            //             </>

                            //         }
                                    

                            //     </div>
                            // </div>
                            // </div>

                            
                            // }

                            

//                         </div>
//                         {/* table section */}




//                         <div className="!bg-[#5DC2B0] w-full font-Poppins mb-3 mt-4">
//                             <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)} >
//                                 <AccordionSummary
//                                     expandIcon={<ExpandMoreIcon />}
//                                     aria-controls="panel1-content"
//                                     id="panel1-header"
//                                     className='!bg-[#68c7b6] rounded-[8px]'
//                                 >
//                                     <div className=" w-full  t1sec px-[12.5px] py-[16px] gap-2 flex items-center">
//                                         <span><MdFeaturedPlayList /></span>
//                                         <span className='font-[500]'>Features</span>
//                                     </div>
//                                 </AccordionSummary>
//                                 <AccordionDetails className="bg-[#d1fbf3]">
//                                     <div className="tsec2 flex flex-col font-Poppins">
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                             <div className='font-[500] '><GiMaterialsScience /></div>
//                                             <p className='text-[#4f3267] text-[15px]'> Hypoallergenic Material</p>
//                                         </div>
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                             <div className='font-[500] '><MdHealthAndSafety /></div>
//                                             <p className='text-[#4f3267] text-[15px]'>Quality and Safety First</p>
//                                         </div>
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                             <div className='font-[500] '><FaChild /></div>
//                                             <p className='text-[#4f3267] text-[15px]'>Age-Appropriate Styles</p>
//                                         </div>
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                             <div className='font-[500] '><GiHeartNecklace /></div>
//                                             <p className='text-[#4f3267] text-[15px]'>Everyday Use Jewelry</p>
//                                         </div>
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                             <div className='font-[500] '><TbBrandMinecraft /></div>
//                                             <p className='text-[#4f3267] text-[15px]'>Crafted with Love</p>
//                                         </div>
//                                        {
//                                         productType === "gold" &&
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                         <div className='font-[500] '><TbCertificate /></div>
//                                         <p className='text-[#4f3267] text-[14px]'>Natural Diamonds with SGL Certificate</p>
//                                         </div>
//                                        }
//                                         <div className='w-[320px] bg-[#d1fbf3] mb-[1.5px] px-[10px] py-[10px] flex gap-[10px] items-center featurestsec'>
//                                             <div className='font-[500] '><MdOutlineAppRegistration /></div>
//                                             <p className='text-[#4f3267] text-[15px]'>Design Application No. {data.designno}</p>
//                                         </div>




//                                     </div>
//                                 </AccordionDetails>
//                             </Accordion>


//                         </div>



//                         <div className="w-full mt-3 moreinfoproduct bg-white rounded-lg shadow-sm">
//                             <div className="moreinfosec py-[20px] flex flex-wrap justify-center gap-4 md:gap-10">
//                                 <div className="flex flex-col justify-center items-center text-center w-1/2 md:w-auto">
//                                     <span className="flex justify-center">
//                                         <span
//                                             className="w-[50px] h-[50px] flex justify-center items-center"
//                                             style={{ backgroundColor: '#e8ffda', borderRadius: '50%' }}
//                                         >
//                                             <MdOutlineVerified size={25} />
//                                         </span>
//                                     </span>
//                                     <span className="font-Poppins text-[1rem]">
//                                         100% Certified
//                                     </span>
//                                 </div>

//                                 <div className="flex flex-col justify-center items-center text-center w-1/2 md:w-auto">
//                                     <span className="flex justify-center">
//                                         <span
//                                             className="w-[50px] h-[50px] flex justify-center items-center"
//                                             style={{ backgroundColor: '#dbecff', borderRadius: '50%' }}
//                                         >
//                                             <RiRefund2Line size={25} />
//                                         </span>
//                                     </span>
//                                     <span className="font-Poppins text-[1rem]">
//                                         7 Days Money-Back
//                                     </span>
//                                 </div>

//                                 <div className="flex flex-col justify-center items-center text-center w-1/2 md:w-auto">
//                                     <span className="flex justify-center">
//                                         <span
//                                             className="w-[50px] h-[50px] flex justify-center items-center"
//                                             style={{ backgroundColor: '#fff9ca', borderRadius: '50%' }}
//                                         >
//                                             <RiExchangeFundsLine size={25} />
//                                         </span>
//                                     </span>
//                                     <span className="font-Poppins text-[1rem]">
//                                     Exchange Facility
//                                     </span>
//                                 </div>

//                                 {/* <div className="flex flex-col justify-center items-center text-center w-1/2 md:w-auto">
//                                     <span className="flex justify-center items-center">
//                                         <span
//                                             className="w-[50px] h-[50px] flex justify-center items-center"
//                                             style={{ backgroundColor: '#ffe1e3', borderRadius: '50%' }}
//                                         >
//                                             <CiCalendarDate size={25} />
//                                         </span>
//                                     </span>
//                                     <span className="font-Poppins text-[1rem]">
//                                         One Year Warranty
//                                     </span>
//                                 </div> */}
//                             </div>

//                             <p className="text-center text-[15px] font-[300] pb-4 font-Poppins text-[#333] mt-3">
//                                 Learn more about our{' '}
//                                 <Link className="text-[#4d9dbd]" to="/terms-and-conditions">
//                                     TERMS & POLICIES
//                                 </Link>
//                             </p>
//                         </div>

//                     </>
//                     : null
//             }


//             {
//                 active === 2
//                     ?
                    //      <div ref={reviewSectionRef} className="w-full h-[50vh] py-3 flex flex-col items-center">
                    //      <div className="w-full h-full overflow-y-auto px-4 space-y-4">
                    //     {
                    //         data &&
                    //         [...data.reviews]
                    //           .sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt))
                    //           .map((item, index) => (
                    //             <div key={index} className='w-full flex my-1'>
                    //                 {/* <img src={`${backend_url}/${item.user.avatar}`} className='w-[60px] h-[60px] rounded-full' alt="" /> */}
                    //                 {/* <img 
                    //                     src={
                    //                         item?.user.avatar?.url &&
                    //                         item?.user.avatar.url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                    //                         ? item?.user.avatar.url
                    //                             .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
                    //                             .replace("/avatars/", "/products/")
                    //                         : item?.user.avatar?.url
                    //                         ? `${imgdburl}${user.avatar.url}`.replace("/avatars/", "/products/")
                    //                         : "Not Uploaded."
                    //                     } 
                    //                     className="w-[60px] h-[60px] rounded-full" 
                                        
                    //                     />
                    //                     {
                    //                         !item?.user.avatar?.url && (
                    //                             <FaUserAlt className="w-[60px] h-[60px] text-gray-500" />
                    //                         )
                    //                         } */}

                    //                                     {item?.user.avatar && item?.user.avatar.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) ? (
                    //                                     <img 
                    //                                         src={item?.user.avatar
                    //                                         .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
                    //                                         .replace("/avatars/", "/products/")
                    //                                         }
                    //                                         className="w-[50px] h-[50px] rounded-full object-cover border"
                    //                                         alt="User Avatar"
                    //                                     />
                    //                                     ) : item?.user.avatar ? (
                    //                                     <img 
                    //                                         src={`${imgdburl}${item?.user.avatar}`.replace("/avatars/", "/products/")}
                    //                                         className="w-[50px] h-[50px] rounded-full object-cover border"
                    //                                         alt="User Avatar"
                    //                                     />
                    //                                     ) : (
                    //                                     <div className="w-[60px] h-[60px] rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-lg border">
                    //                                         {item?.user?.name
                    //                                         ? item.user.name
                    //                                             .split(" ")
                    //                                             .map((n) => n[0])
                    //                                             .slice(0, 2)
                    //                                             .join("")
                    //                                             .toUpperCase()
                    //                                         : "NA"}
                    //                                     </div>
                    //                                     )}


                    //                 <div className='pl-3'>
                    //                     <h1 className='font-[500] capitalize'>{item.user.name}</h1>
                    //                     <p className="text-gray-500 text-xs">
                    //                         {new Date(item.CreatedAt).toLocaleDateString('en-GB')}
                    //                         </p>
                    //                     <Ratings rating={item.rating} />
                    //                     {/* <div className='w-full flex mt-2 gap-4'>

                    //                         <img src={review1img} alt="" className='w-[200px] h-[200px] border object-fill shadow rounded-[5px]' />
                    //                         <img src={review2img} alt="" className='w-[200px] h-[200px] border object-fill shadow rounded-[5px]' />
                    //                     </div> */}

                    //         {item?.images?.length > 0 && (
                    //                             <div className='w-full flex mt-2 gap-4 flex-wrap'>
                    //                                 {item.images.map((img, i) => (
                    //                                      <Zoom
                    //                                      key={i}
                    //                                      zoomMargin={40}
                    //                                      defaultStyles={{ overlay: { zIndex: 1000 } }}
                    //                                      onZoom={() => setIsZoomed(true)}
                    //                                      onUnzoom={() => setIsZoomed(false)}
                    //                                    >
                    //                                     <img 
                    //                                         key={i} 
                    //                                         src={`${imgdburl}${img.url}`} 
                    //                                         alt={`Review Image ${i + 1}`} 
                    //                                         className='!cursor-pointer w-[150px] h-[150px] border object-cover shadow rounded-[5px]' 
                    //                                     />
                    //                                     </Zoom>
                    //                                 ))}
                    //                             </div>
                    //                         )}
                    //                     <p className='w-[70%] mt-1'>{item.comment}</p>

                    //                 </div>


                    //             </div>
                    //         ))
                    //     }

                    //     <div className="w-full flex  justify-center">
                    //         {
                    //             data && data.reviews.length === 0 && (
                    //                 <h5>No Reviews have for this product</h5>
                    //             )
                    //         }


                    //     </div>
                    // </div>
                    // </div>

//                     :
//                     null
//             }




//         </div>



//     )
// }

const ProductDetailsInfo = ({ data ,shouldShowChainOptions,active,setActive,reviewSectionRef }) => {
    console.log(data, "see the data")
    const [expanded, setExpanded] = useState(true);

    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${server}/get-allcategories`);
                // Filter categories based on type (gold or silver)
                const filteredGoldCategories = response.data.categories.filter(category => category.type === 'gold');
                setCategoriesData(filteredGoldCategories); // Store gold categories
            } catch (error) {
                console.error('Error fetching categories:', error);
                alert('Failed to fetch categories');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);


    console.log(categoriesData,"categoriesData-------------------")
    const productCategory = data?.category;
    const productType = categoriesData.some(category => 
        category.title.toLowerCase().includes(productCategory.toLowerCase()) && category.type === 'gold'
    ) ? 'gold' : 'silver';

    const serviceFeatures = [
        {
            icon: Shield,
            title: "100% Certified",
            description: "Authentic guaranteed quality products",
        },
        {
            icon: RotateCcw,
            title: "7 Days Money-Back",
            description: "Hassle-free return policy available",
        },
        {
            icon: Package,
            title: "Exchange Facility",
            description: "Easy product exchange service",
        },
        {
            icon: Truck,
            title: "4-5 Days Delivery",
            description: "Fast nationwide shipping service",
        },
        ]


const features = [
    { icon: Shield, text: "Hypoallergenic Material" },
    { icon: Star, text: "Quality and Safety First" },
    { icon: Baby, text: "Age-Appropriate Styles" },
    { icon: Heart, text: "Everyday Use Jewelry" },
    { icon: Sparkles, text: "Crafted with Love" },
    ...(productType === "gold" ? [{ icon: Award, text: "Natural Diamonds with SGL Certificate" }] : []),
    { icon: FileText, text: `Design Application No. ${data.designno}` },
  ]

  const ageGroup = data?.ageGroup || {};

  const ageGroupData = [
    { key: "infants", label: "Infants", icon: Baby, description: "0-3 years", show: ageGroup.infants },
    { key: "kids", label: "Kids", icon: Baby, description: "3-12 years", show: ageGroup.kids },
    { key: "mom", label: "Mom", icon: Heart, description: "For mothers", show: ageGroup.mom },
    { key: "teens", label: "Teens", icon: UserCheck, description: "12-19 years", show: ageGroup.teens },
  ];

  const visibleAgeGroups = ageGroupData.filter((group) => group.show);

  if (visibleAgeGroups.length === 0) return null;
  
   const guarantees = [
    {
      icon: Heart,
      title: "Happiness Guaranteed",
      description: "100% satisfaction or your money back",
      details:
        "We stand behind every piece with our unconditional happiness guarantee. If you're not completely satisfied, return it within 30 days for a full refund.",
    },
    {
      icon: Award,
      title: "SGL Certified",
      description: "Authentic gemstone certification",
      details:
        "Every diamond and precious stone comes with SGL (Solitaire Gemological Laboratory) certification, ensuring authenticity, quality, and accurate grading.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Premium craftsmanship guaranteed",
      details:
        "Each piece undergoes rigorous quality checks by our master craftsmen. We use only the finest materials and time-tested techniques.",
    },
    {
      icon: CheckCircle,
      title: "Lifetime Support",
      description: "Ongoing care and maintenance",
      details:
        "Enjoy complimentary cleaning, inspection, and minor repairs for the lifetime of your jewelry. We're here to keep your treasures sparkling.",
    },
  ]// don't render accordion if no data

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

    return (
     <div className="w-full rounded-xl overflow-hidden ">
      <div className="grid lg:grid-cols-2 gap-8 py-8 items-center">
        {/* Left Side - Service Features */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-[#F4E7E2] hover:shadow-md transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F4E7E2] to-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-[#D7A295] group-hover:text-[#B87C6C] transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#9A6A5E] text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-[#9A6A5E]/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Accordion */}
       <div className="space-y-4">
        <Accordion type="single" collapsible className="w-full ">
        <AccordionItem
        value="details"
        className="border border-[#F4E7E2] mb-3 rounded-lg overflow-hidden bg-white shadow-sm"
        >
        <AccordionTrigger className="hover:no-underline px-4 py-3 group">
            <div className="flex items-center">
            <div className="w-8 h-8 bg-[#F4E7E2] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#D7A295] transition-colors duration-300">
                <List className="w-4 h-4 text-[#9A6A5E] group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-[#9A6A5E] group-hover:text-[#B87C6C] transition-colors duration-300">
                details
            </span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-3">
                {/* Basic Info */}
                <div className="bg-gradient-to-br from-[#FEFCFB] to-[#F9F5F3] rounded-xl p-6 border border-[#F4E7E2] shadow-sm">
                    <div className="flex items-start justify-between ">
                    <div className="flex-1">
                        <h2 className="text-md font-bold text-[#9A6A5E] mb-2 leading-tight">{data.name}</h2>
                        <p className="text-xs text-[#9A6A5E]/70 font-mono tracking-wide">SKU: {data.skuid}</p>
                    </div>
                    <div className="ml-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#9A6A5E] to-[#B87C6C] text-white text-sm font-semibold shadow-md">
                        {categoriesData.filter((category) =>
                            category.title.toLowerCase().includes(productCategory.toLowerCase()),
                        ).length > 0
                            ? "Gold Collection"
                            : "Silver Collection"}
                        </span>
                    </div>
                    </div>
                </div>

                

                <div className="bg-white rounded-lg p-4 border border-[#F4E7E2]">
                    <div className="flex items-center mb-4">
                    <AiOutlineGold className="w-5 h-5 text-[#9A6A5E] mr-2"/>
                    <h3 className="font-semibold text-[#9A6A5E] "> {categoriesData.filter((category) =>
                            category.title.toLowerCase().includes(productCategory.toLowerCase()),
                        ).length > 0
                            ? "Gold"
                            : "Silver"}</h3>

                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-medium text-[#9A6A5E] mb-1">Weight</h4>
                        <p className="text-[#9A6A5E]/80 text-sm">
                        {data?.goldWeight ? data.goldWeight.weight : "Not Updated"}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium text-[#9A6A5E] mb-1">Purity</h4>
                        <p className="text-[#9A6A5E]/80 text-sm">
                        {data?.goldWeight ? data.goldWeight.purity : "18 kt"}
                        </p>
                    </div>
                    </div>
                </div>


                {/* Diamond Details */}
                {((data?.diamondWeight?.weight &&
                    data?.diamondWeight?.weight !== "NA" &&
                    data?.diamondWeight?.weight !== null) ||
                    (data?.diamondWeight?.quality &&
                    data?.diamondWeight?.quality !== "NA" &&
                    data?.diamondWeight?.quality !== null)) && (
                    <div className="bg-[#F4E7E2] rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <IoDiamondOutline className="w-5 h-5 text-[#9A6A5E] mr-2" />
                        <h3 className="font-semibold text-[#9A6A5E]">Diamond</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {data?.diamondWeight?.weight &&
                        data?.diamondWeight?.weight !== "NA" &&
                        data?.diamondWeight?.weight !== null && (
                            <div>
                            <h4 className="font-medium text-[#9A6A5E] mb-1">Weight</h4>
                            <p className="text-[#9A6A5E]/80 text-sm">{data?.diamondWeight?.weight || "Not Updated"}</p>
                            </div>
                        )}
                        {data?.diamondWeight?.quality &&
                        data?.diamondWeight?.quality !== "NA" &&
                        data?.diamondWeight?.quality !== null && (
                            <div>
                            <h4 className="font-medium text-[#9A6A5E] mb-1">Quality</h4>
                            <p className="text-[#9A6A5E]/80 text-sm">{data?.diamondWeight?.quality || "GH-VS"}</p>
                            </div>
                        )}
                    </div>
                    </div>
                )}

                {/* Dimensions */}
                <div className="bg-white rounded-lg p-4 border border-[#F4E7E2]">
                    <div className="flex items-center mb-4">
                    <RxDimensions className="w-5 h-5 text-[#9A6A5E] mr-2"/>
                    <h3 className="font-semibold text-[#9A6A5E] ">Dimensions</h3>

                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-medium text-[#9A6A5E] mb-1">Height</h4>
                        <p className="text-[#9A6A5E]/80 text-sm">
                        {data?.dimension ? data.dimension.height : "Not Updated"}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium text-[#9A6A5E] mb-1">Width</h4>
                        <p className="text-[#9A6A5E]/80 text-sm">
                        {data?.dimension ? data.dimension.width : "Not Updated"}
                        </p>
                    </div>
                    </div>
                </div>

                {/* Chain Options */}
                {shouldShowChainOptions && (
                    <div className="bg-[#F4E7E2] rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <GiHeartNecklace className="w-5 h-5 text-[#9A6A5E] mr-2" />
                        <h3 className="font-semibold text-[#9A6A5E]">Chain</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <h4 className="font-medium text-[#9A6A5E] mb-2">Length</h4>
                        {productType === "gold" ? (
                            <div className="space-y-1">
                            <p className="text-[#9A6A5E]/80 text-sm">13 inch</p>
                            <p className="text-[#9A6A5E]/80 text-sm">18 inch</p>
                            </div>
                        ) : productType === "silver" ? (
                            <p className="text-[#9A6A5E]/80 text-sm">18 inch</p>
                        ) : null}
                        </div>
                        <div>
                        <h4 className="font-medium text-[#9A6A5E] mb-2">Weight</h4>
                        {productType === "gold" ? (
                            <div className="space-y-1">
                            <p className="text-[#9A6A5E]/80 text-sm">1gms</p>
                            <p className="text-[#9A6A5E]/80 text-sm">2gms</p>
                            </div>
                        ) : (
                            <p className="text-[#9A6A5E]/80 text-sm">approx 2.5 - 3gms</p>
                        )}
                        </div>
                    </div>
                    </div>
                )}
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="features"
          className="border border-[#F4E7E2] mb-3 rounded-lg overflow-hidden bg-white shadow-sm"
        >

            <AccordionTrigger className="hover:no-underline px-4 py-3 group">
            <div className="flex items-center">
            <div className="w-8 h-8 bg-[#F4E7E2] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#D7A295] transition-colors duration-300">
                <Star className="w-4 h-4 text-[#9A6A5E] group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-[#9A6A5E] group-hover:text-[#B87C6C] transition-colors duration-300">
                Features
            </span>
            </div>
        </AccordionTrigger>
          
          <AccordionContent className="px-6 pb-5 pt-4 bg-[#FEFCFB]">
            <div className="grid gap-1.5">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="!cursor-pointer flex items-center gap-4 px-4 py-3 bg-white rounded-lg border border-[#F4E7E2] hover:border-[#D7A295] transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-[#F4E7E2] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-[#9A6A5E]" />
                    </div>
                    <p className="text-[#9A6A5E] text-sm font-medium">{feature.text}</p>
                  </div>
                )
              })}
            </div>
          </AccordionContent>
            </AccordionItem>

        <AccordionItem
          value="age-group"
          className="border border-[#F4E7E2] mb-3 rounded-lg overflow-hidden bg-white shadow-sm"

        >
          <AccordionTrigger className="hover:no-underline px-4 py-3 group">
            <div className="flex items-center">
            <div className="w-8 h-8 bg-[#F4E7E2] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#D7A295] transition-colors duration-300">
                <Users className="w-4 h-4 text-[#9A6A5E] group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-[#9A6A5E] group-hover:text-[#B87C6C] transition-colors duration-300">
                Age Group
            </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-4 bg-[#FEFDFB]">
            <div className="grid gap-3">
              {visibleAgeGroups.map((group) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={group.key}
                    className="flex items-center gap-4 px-4 py-3 bg-white rounded-lg border border-[#F0E6E3] hover:border-[#D7A295] transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-[#F9F3F1] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-[#D7A295]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#D7A295] text-sm font-semibold">{group.label}</p>
                      <p className="text-[#D7A295]/70 text-xs">{group.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="guarantee"
         className="border border-[#F4E7E2] mb-3 rounded-lg overflow-hidden bg-white shadow-sm"

        >
          <AccordionTrigger className="hover:no-underline px-4 py-3 group">
             <div className="flex items-center">
            <div className="w-8 h-8 bg-[#F4E7E2] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#D7A295] transition-colors duration-300">
                <Shield className="w-4 h-4 text-[#9A6A5E] group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-[#9A6A5E] group-hover:text-[#B87C6C] transition-colors duration-300">
               Quality Guarantee
            </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-4 bg-[#FEFDFB]">
            <div className="grid gap-4">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#F0E6E3] hover:border-[#D7A295] transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-[#F9F3F1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-5 h-5 text-[#D7A295]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#D7A295] text-sm font-bold mb-1">{guarantee.title}</h4>
                      <p className="text-[#D7A295]/80 text-xs font-medium mb-2">{guarantee.description}</p>
                      <p className="text-[#D7A295]/70 text-xs leading-relaxed">{guarantee.details}</p>
                    </div>
                  </div>
                )
              })}

              {/* Certification Badge */}
              <div className="mt-4 p-4 bg-gradient-to-r from-[#F9F3F1] to-[#F0E6E3] rounded-lg border border-[#D7A295]/20">
                <div className="flex items-center justify-evenly gap-4">
                  <img src="https://www.tinytiaraa.com/assets/first-Dsg0_80p.svg" alt="GJEPC Certification" className="h-12 w-auto" />
                  <img src="https://www.tinytiaraa.com/assets/third-CBytz535.svg" alt="GJEPC Certification" className="h-12 w-auto" />
                  <img src="https://www.tinytiaraa.com/assets/fourth-BinWpgKg.svg" alt="GJEPC Certification" className="h-12 w-auto" />
                 
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        </Accordion>



        </div>
      </div>





        {/* review section  */}

       <div ref={reviewSectionRef} className="relative w-full min-h-[50vh] py-6 sm:py-8 lg:py-10 bg-gradient-to-t from-[#F4E7E2] via-[#F9F6F4] to-white">
      <SparkleEffect />



      {/* Elegant Header */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10 px-4">
  <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg border border-[#E8D5CE] max-w-full">
    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#D7A295]" />
    <h2 className="text-base sm:text-lg md:text-xl font-serif text-[#8B4513] whitespace-nowrap">
      Customer Reviews ({data.reviews.length})
    </h2>
    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#D7A295] rotate-180" />
  </div>
</div>


      <div className="w-full max-h-[50vh] overflow-y-auto px-3 sm:px-4 lg:px-6 space-y-4 sm:space-y-6 lg:space-y-8">
        {data &&
          [...data.reviews]
            .sort((a, b) => new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime())
            .map((item, index) => (
              <div key={index} className="relative">
                {/* Decorative Line - Hidden on mobile */}
                <div className="hidden sm:block absolute left-6 lg:left-8 top-12 lg:top-16 bottom-0 w-px bg-gradient-to-b from-[#D7A295] via-[#E8D5CE] to-transparent"></div>

                <Card className="sm:ml-12 lg:ml-16 border border-[#E8D5CE] shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                    
                    <div className="space-y-3 sm:space-y-4">
                      {/* User Info */}
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 flex-col sm:flex-row">
                        <div className="relative sm:-ml-16 lg:-ml-20 self-center sm:self-auto">
                           {item?.user.avatar && item?.user.avatar.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) ? (
                                     <img 
                                         src={item?.user.avatar
                                         .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
                                         .replace("/avatars/", "/products/")
                                         }
                                         className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                         alt="User Avatar"
                                     />
                                     ) : item?.user.avatar ? (
                                     <img 
                                         src={`${imgdburl}${item?.user.avatar}`.replace("/avatars/", "/products/")}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                         alt="User Avatar"
                                     />
                                     ) : (
                                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D7A295] to-[#C9958A] flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-lg">
                                         {item?.user?.name
                                         ? item.user.name
                                             .split(" ")
                                             .map((n) => n[0])
                                             .slice(0, 2)
                                             .join("")
                                             .toUpperCase()
                                         : "NA"}
                                     </div>
                                     )}
                        

                          <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-[#D7A295] rounded-full flex items-center justify-center">
                            <Quote className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white" />
                          </div>
                        </div>

                        <div className="w-full flex-1 text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                            <h3 className="font-serif text-lg sm:text-xl text-[#8B4513] capitalize">
                              {item.user.name}
                            </h3>
                            <Badge
                              variant="outline"
                              className="border-[#D7A295] text-[#8B4513] text-xs self-center sm:self-auto"
                            >
                              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                              {new Date(item.CreatedAt).toLocaleDateString("en-GB")}
                            </Badge>
                          </div>
                          <div className="flex justify-center sm:justify-start">
                            <Ratings rating={item.rating} />
                          </div>
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="relative">
                        <div className="absolute -left-2 sm:-left-4 -top-1 sm:-top-2 text-3xl sm:text-4xl lg:text-6xl text-[#D7A295]/20 font-serif">
                          "
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg font-light italic pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6">
                          {item.comment}
                        </p>
                        <div className="absolute -right-2 sm:-right-4 -bottom-1 sm:-bottom-2 text-3xl sm:text-4xl lg:text-6xl text-[#D7A295]/20 font-serif rotate-180">
                          "
                        </div>
                      </div>

                      {/* Review Images */}
                      {item?.images?.length > 0 && (
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 sm:w-8 h-px bg-[#D7A295]"></div>
                            <span className="text-xs sm:text-sm font-serif text-[#8B4513]">Customer Photos</span>
                            <div className="flex-1 h-px bg-[#E8D5CE]"></div>
                          </div>
                          <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap justify-center sm:justify-start">
                            {item.images.map((img, i) => (
                              <div key={i} className="relative group">
                                <Zoom
                                  zoomMargin={40}
                                  defaultStyles={{ overlay: { zIndex: 1000 } }}
                                  onZoom={() => setIsZoomed(true)}
                                  onUnzoom={() => setIsZoomed(false)}
                                >
                                  <img
                                    src={`${imgdburl}${img.url}`} 
                                    alt={`Review Image ${i + 1}`}
                                    className="relative z-10 !cursor-pointer w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover rounded-lg border-2 border-[#E8D5CE] hover:border-[#D7A295] transition-all duration-300 hover:scale-105 shadow-md"
                                  />
                                </Zoom>
                                <div className="absolute z-0 inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                     {/* Decorative corner shape */}
                  <svg
                    className="absolute bottom-0 right-0 w-20 h-20 text-[#F4E7E2] dark:text-[#3A322E] opacity-50"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,100 L100,100 L100,0 Z" />
                  </svg>
                  </CardContent>
                </Card>
              </div>
            ))}

        {/* No Reviews Message */}
        <div className="w-full flex justify-center py-8 sm:py-12 lg:py-16">
          {data && data.reviews.length === 0 && (
            <div className="text-center space-y-4 sm:space-y-6 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#D7A295] to-[#C9958A] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <div className="space-y-2">
                <h5 className="text-xl sm:text-2xl font-serif text-[#8B4513]">No Reviews Yet</h5>
                <p className="text-sm sm:text-base text-gray-600 font-light">
                  Share your experience with this exquisite piece
                </p>
              </div>
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#D7A295] to-transparent mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </div>





        
      </div>



    )
}


export default ProductDetails
