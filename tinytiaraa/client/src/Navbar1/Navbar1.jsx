// import React, { useEffect, useRef, useState } from 'react'
// import '../Navbar/Navbar.css'
// import './Navbar1.css'

// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaAngleRight, FaRegHeart, FaRegUser, FaSearch, FaUserAlt } from 'react-icons/fa';
// import { MdChevronRight, MdOutlineArrowDropDown, MdOutlineKeyboardArrowRight, MdOutlineShoppingBag, MdSupportAgent } from 'react-icons/md';
// import navimg from './about.webp'
// // import { categoriesData } from '@/static/data';
// import styles from '@/Styles/styles';
// import Wishlist from '../Wishlist/Wishlist.jsx'
// import { useSelector } from 'react-redux';
// import Badge from '@mui/material/Badge';

// import { AiFillGolden, AiOutlineHeart } from 'react-icons/ai';
// import { CgProfile, CgSearch } from 'react-icons/cg';
// import { BiMenuAltLeft } from 'react-icons/bi';
// import { RxCross1 } from 'react-icons/rx';
// import { IoIosArrowDown, IoIosArrowUp, IoIosClose, IoMdArrowDropright, IoMdMail } from 'react-icons/io';
// import DropDown from '@/Navbar/DropDown';
// import { backend_url, imgdburl, server } from '@/server';
// import { LuUserCircle2 } from 'react-icons/lu';
// import { usePriceRange } from '@/pricerange/PriceRangeContext';
// import logo from './logo.png'
// import { IoSearchOutline } from 'react-icons/io5';
// import CurrencySelector from '../CurrencySelector/CurrencySelector';
// import axios from 'axios';
// import { changeCurrency, initializeConversionRates } from '@/redux/actions/currencyActions';
// import { useDispatch } from 'react-redux';



// function Navbar1() {

//     const { wishlist } = useSelector((state) => state.wishlist)
//     const { isAuthenticated, user, loading } = useSelector((state) => state.user)
//     const { products } = useSelector((state) => state.products)

//     const { cart } = useSelector((state) => state.cart)

//     const [active, setActive] = useState(false);

//     const [openWishlist, setOpenWishlist] = useState(false)
//     const [bars, setbars] = useState(false)
//     const [open, setOpen] = useState(false)

//     const [dropDown, setDropDown] = useState(false)
//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 70) {
//             setActive(true);
//         } else {
//             setActive(false);
//         }
//     });

//     const [searchTerm, setsearchTerm] = useState("")
//     const [searchData, setsearchData] = useState(null)

//     const [isShopOpen, setIsShopOpen] = useState(false);
//     const shopRef = useRef(null);

//     // const toggleShopDropdown = () => {
//     //     setIsShopOpen(prevState => !prevState);
//     // };

//     const closeShopDropdown = () => {
//         setIsShopOpen(false);
//     };

//     // const  data = useGeoLocation();

//     // console.log(data,"data from frontend ")
   

//     // Handle click outside the dropdown to close it
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (shopRef.current && !shopRef.current.contains(event.target)) {
//                 closeShopDropdown();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);


//     const { setPriceRange } = usePriceRange();
//     const handlePriceFilter = (min, max) => {
//         setPriceRange([min, max]);
//     };

//     const buildQueryString = (min, max) => {
//         return `?priceMin=${min}&priceMax=${max}`;
//     };
//     const navigate = useNavigate()
//     const submitHandle = (category, subcategory = null) => {
//         const subcategoryParam = subcategory ? `&subcategory=${subcategory.name}` : '';
//         navigate(`/products?category=${category.title}${subcategoryParam}`);
//     };
//     // const toggleShopDropdown = () => {
//     //     setShopDropdownOpen((prevState) => !prevState);
//     // };

//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 3000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         swipeToSlide: true,
//         fade: true,
//     };
//     const handleSearchChange = (e) => {
//         e.preventDefault();
//         const term = e.target.value;
//         setsearchTerm(term);

//         if (term === "") {
//             // If the search term is empty, reset the searchData to null or empty array
//             setsearchData(null);
//         } else {
//             // Filter the products based on the search term
//             const filteredProducts = products && products.filter((product) => {
//                 // Convert both name and SKU ID to lowercase for case-insensitive search
//                 const lowerCaseTerm = term.toLowerCase();
//                 const isProductLive = product?.isLive === undefined || product?.isLive;
//                 return isProductLive &&(
//                     product.name.toLowerCase().includes(lowerCaseTerm) ||
//                     (product.skuid && product.skuid.toLowerCase().includes(lowerCaseTerm))
//                 );
//             });
//             setsearchData(filteredProducts);
//         }
//     };

//     const handleMouseEnter = () => {
//         setDropDown(true);
//     };

//     const handleMouseLeave = () => {
//         setDropDown(false);
//     };

//     const closenavbar = () => {
//         setOpen(false);
//         setbars(false);
//     };

//     const openclosewhislist = () => {
//         setOpenWishlist(true)
//         // setOpen(false);
//     }
//     const resetSearch = () => {
//         setsearchTerm("");
//         setsearchData(null);
//     };

//     // const submitHandleagegroup = (ageGroupKey) => {
//     //     if (!products || !ageGroupKey) return;

//     //     const filteredProducts = products.filter(product =>
//     //         product.ageGroup && product.ageGroup[ageGroupKey] === true
//     //     );
//     //     console.log("age group", filteredProducts)
//     //     navigate(`/products?ageGroup=${ageGroupKey}`, { state: { filteredProducts } });
//     //     setShopDropdownOpen(false);
//     // };
//     const dispatch = useDispatch();

//     const submitHandleagegroup = (ageGroupKey) => {
//         if (!products || !ageGroupKey) {
//             console.error("Products or ageGroupKey is missing");
//             return;
//         }
    
//         let filteredProducts = [];
    
//         if (ageGroupKey === "momandme") {
//             // Include products where:
//             // - `mom` is true (even if `infants` and `kids` are false)
//             // - OR both `infants` and `kids` are true
//             filteredProducts = products.filter(product =>
//                 product.ageGroup &&
//                 (product.ageGroup.mom === true || 
//                 (product.ageGroup.infants === true && product.ageGroup.kids === true))
//             );
//         } else {
//             // Filter for specific age group key
//             filteredProducts = products.filter(product =>
//                 product.ageGroup && product.ageGroup[ageGroupKey] === true
//             );
//         }
    
//         console.log("Filtered Products:", filteredProducts);
    
//         // Navigate to filtered products
//         navigate(`/products?ageGroup=${ageGroupKey}`, { state: { filteredProducts } });
    
//         // Close the dropdown
//         // setShopDropdownOpen(false);
//     };
    

//     const [isCurrencySelectorOpen, setIsCurrencySelectorOpen] = useState(false);

//     const toggleCurrencySelector = () => {
//         setIsCurrencySelectorOpen(!isCurrencySelectorOpen);
//     };
//     const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Default currency

//     const currencyData = {
//         USD: { country: "United States", flag: "https://flagcdn.com/us.svg" },
//         EUR: { country: "European Union", flag: "https://flagcdn.com/eu.svg" },
//         INR: { country: "India", flag: "https://flagcdn.com/in.svg" },
//         GBP: { country: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
//         AUD: { country: "Australia", flag: "https://flagcdn.com/au.svg" },
//         CAD: { country: "Canada", flag: "https://flagcdn.com/ca.svg" },
//         JPY: { country: "Japan", flag: "https://flagcdn.com/jp.svg" },
//         CNY: { country: "China", flag: "https://flagcdn.com/cn.svg" },
//         NZD: { country: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
//         SGD: { country: "Singapore", flag: "https://flagcdn.com/sg.svg" },
//         CHF: { country: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
//         HKD: { country: "Hong Kong", flag: "https://flagcdn.com/hk.svg" },
//         SEK: { country: "Sweden", flag: "https://flagcdn.com/se.svg" },
//         NOK: { country: "Norway", flag: "https://flagcdn.com/no.svg" },
//         DKK: { country: "Denmark", flag: "https://flagcdn.com/dk.svg" },
//         RUB: { country: "Russia", flag: "https://flagcdn.com/ru.svg" },
//         ZAR: { country: "South Africa", flag: "https://flagcdn.com/za.svg" },
//         BRL: { country: "Brazil", flag: "https://flagcdn.com/br.svg" },
//         MXN: { country: "Mexico", flag: "https://flagcdn.com/mx.svg" },
//         KRW: { country: "South Korea", flag: "https://flagcdn.com/kr.svg" },
//         MYR: { country: "Malaysia", flag: "https://flagcdn.com/my.svg" },
//         THB: { country: "Thailand", flag: "https://flagcdn.com/th.svg" },
//         SAR: { country: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
//       };
     
//     const [currencyDataz, setCurrencyDataz] = useState([]); // Initially empty object

//      // Function to fetch currency data from API
//      const fetchCurrencyData = async () => {
//         try {
//             const response = await fetch(`${server}/get-all-currencies`);
//             const data = await response.json();
//             setCurrencyDataz(data); // Set the fetched currency data
            
//         } catch (error) {
//             console.error('Error fetching currency data:', error);
//         }
//     };

//     const handleCurrencySelect = (currency) => {
//         setSelectedCurrency(currency);
//         dispatch(changeCurrency(currency)); // Dispatch action to update global currency state
//         dispatch(initializeConversionRates(currency));
//         toggleCurrencySelector(); // Close the selector after selecting
//     };

//     // useEffect(() => {
//     //     if (selectedCurrency) {
//     //       // Call handleCurrencySelect to set default currency and initialize rates
//     //       handleCurrencySelect(selectedCurrency);
//     //     }
//     //   }, []); // Empty dependency array to run only once when component mounts

//       // Fetch user's geolocation
//   const fetchUserCountry = async () => {
//     try {
//       const response = await fetch("https://ipapi.co/json/test");
//       const data = await response.json();
//       console.log(data,"data to show")
//       return data.currency; // ISO 3166-1 alpha-2 country code
//     } catch (error) {
//       console.error("Error fetching user country:", error);
//       return null; // Default fallback
//     }

//   };

// //   let dummydata = [
// //     {
// //         code: "INR",
// //         country: "IN",
// //     },
// //     {
// //         code: "USD",
// //         country: "United States",
// //     },
// //     {
// //         code: "EUR",
// //         country: "European Union",
// //     },
// //     {
// //         code: "GBP",
// //         country: "United Kingdom",
// //     },
// //     {
// //         code: "THB",
// //         country: "Thailand",
// //     },
// //     {
// //         code: "SAR",
// //         country: "Saudi Arabia",
// //     },
// //     {
// //         code: "AED",
// //         country: "United Arab Emirates",
// //     },
// //     {
// //         code: "QAR",
// //         country: " Qatari Riyal",
// //     },
// //     {
// //         code: "KWD",
// //         country: "Kuwait",
// //     },
// //     {
// //         code: "OMR",
// //         country: "Oman",
// //     },
// //     {
// //         code: "BHD",
// //         country: "Bahrain",
// //     },
// //     {
// //         code: "EGP",
// //         country: "Egypt",
// //     },
// //     {
// //         code: " PHP",
// //         country: "Philippines",
// //     }
// // ]

// // if(data.country){
// //    let filetreddata = dummydata.filter((val)=>{
    
// //        return val.country === data.country

// //     })
// //     console.log(filetreddata[0].code,'filtering-----checlking')
// // }
// // console.log(data.country)


//   // Set default currency based on geolocation
//   const setDefaultCurrency = async () => {
//     const countryCode =   await fetchUserCountry();
   
//     if (countryCode && currencyDataz.length > 0) {
//         const matchedCurrency = currencyDataz.find(
//             (currency) => currency.code.toUpperCase().includes(countryCode.toUpperCase())
//           );

//       if (matchedCurrency) {
//         setSelectedCurrency(matchedCurrency.code);
       
//       }
//     }
//   };


//     // Fetch currency data on component mount
//     useEffect(() => {
//         fetchCurrencyData();
//     }, []);

//      // Set default currency after fetching data
//   useEffect(() => {
//     if (currencyDataz.length > 0) {
//       setDefaultCurrency();
     
   
//     }
//   }, [currencyDataz]);
//   useEffect(() => {
//     if (selectedCurrency) {
        
//         dispatch(changeCurrency(selectedCurrency))
//       dispatch(initializeConversionRates(selectedCurrency));
//     }
//   }, [selectedCurrency]);


//   console.log(selectedCurrency,"slected surency us ")


//     // console.log(currencyDataz,"currencyDataz showing")

  

//       const handleMetalSelect = (type) => {
//         navigate(`/products?type=${type}`);
//       };
//       const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//         const toggleShopDropdown = () => {
//         setIsDropdownVisible(!isDropdownVisible);
//         };

//         const closeDropdown = () => {
//         setIsDropdownVisible(false);
//         };

//                 const [categoriesData, setCategoriesData] = useState([]);
//                 const [Loading, setLoading] = useState(true);
//              useEffect(() => {
//             const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(`${server}/get-allcategories`);
//                 // Assuming your API response has a `categories` key
//                 const filteredData = response.data.categories.filter(i => i.title !== 'Coming Soon ...');
//                 setCategoriesData(filteredData);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//                 alert('Failed to fetch categories');
//             } finally {
//                 setLoading(false);
//             }
//             };

//             fetchCategories();
//         }, []);
//         // Separate Gold and Silver Categories
//         const [showAllGold, setShowAllGold] = useState(false); // Toggle state for Gold categories
//         const [showAllSilver, setShowAllSilver] = useState(false); // Toggle state for Silver categories
//         const goldCategories = categoriesData.filter(category => category.type === "gold");
//         const silverCategories = categoriesData.filter(category => category.type === "silver");

//         const [mobileShopOpen, setMobileShopOpen] = useState(false);

//         const togglemobileShopDropdown = () => {
//             setMobileShopOpen((prev) => !prev);
//         };
        

//     console.log(user,"user details")
//     return (
//         <>

//             <div className="navbar1mian">
//                 {           /* //top nav */}
//                 <div className='nav1banner '>
//                     <div className='customerinfo !text-[13px]'>
//                         <span className='flex items-center'>
//                             <Link to="tel:+91 8657062511" className='cursor-pointer ml-[2px] flex items-center font-[450]'><MdSupportAgent size={23} className='!font-[400] mr-[2px]' /> +91 86570 62511 | </Link>
//                         </span>
//                         <span className='ml-[3px] flex items-center'>
//                             <Link to="mailto:care@tinytiaraa.com" className='cursor-pointer ml-[2px] flex items-center font-[450]'><IoMdMail size={23} className='!font-[400] mr-[2px]' />care@tinytiaraa.com </Link>
//                         </span>

//                         {/* <span onClick={()=>{navigate('/shop-login')}}>Shop</span> */}

//                     </div>

//                     <div className='couponscetion !text-[13px]'>
//                         <Slider {...settings} >
//                             {/* <div className='text-center'>
//                                 <span>Get ₹500 Off On Your First Order Of ₹5000 Or More! :- Welcome500</span>

//                             </div> */}
//                             <div className='text-center'>

//                                 <span>Shop for silver Jewelry Worth <b>₹5000</b> & above to get a <b>Free Silver chain</b></span>
//                             </div>

//                         </Slider>

//                     </div>
//                     {/* <div className='!mr-10' onClick={toggleCurrencySelector} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//                             <img src={currencyData[selectedCurrency].flag} alt={`${selectedCurrency} flag`} className="w-5 h-5 mr-2" />
//                             <span className='font-[400]'>{selectedCurrency}</span>
//                         </div> */}
//                 <div 
//                 className='!mr-10' 
//                 onClick={toggleCurrencySelector} 
//                 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//                 {currencyDataz.length > 0 && (
//                     <img 
//                         src={currencyDataz.find(currency => currency.code === selectedCurrency)?.flag} 
//                         alt={`${selectedCurrency} flag`} 
//                         className="w-5 h-5 mr-2" 
//                     />
                    
//                 )}
//                 <span className='font-[400]'>{selectedCurrency}</span>
//             </div>

//             {
//                 currencyDataz.length > 0 &&  (
//                     <div style={{display:"none"}}>

//                     <CurrencySelector  onCurrencySelect={handleCurrencySelect} toggleCurrencySelector={toggleCurrencySelector}  currencyDataz={currencyDataz || []}  />
//                     </div>

//                 )
//             }



         

//                         {isCurrencySelectorOpen && (
//                             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                             <div className="bg-white px-3 pb-6 pt-2 rounded-lg shadow-lg max-w-sm w-full text-black" style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" }}>

//                                 <div className='flex justify-end' onClick={toggleCurrencySelector}>
//                                 <IoIosClose size={30} className='cursor-pointer'/>

//                                 </div>
                             
//                             <CurrencySelector onCurrencySelect={handleCurrencySelect} toggleCurrencySelector={toggleCurrencySelector}  currencyDataz={currencyDataz || []}  />
//                             </div>
//                           </div>

//                         )}

//                     <div className="social-icons ">
//                         {/* <h1 onClick={toggleCurrencySelector} style={{ cursor: 'pointer' }}>currency</h1> */}

                       
//                         <Link to="https://www.facebook.com/profile.php?id=61551799145871" target="_blank">
//                             <i className="fab fa-facebook" />
//                         </Link>
//                         <Link to="https://www.instagram.com/tiny_tiaraa/" target="_blank">
//                             <i className="fab fa-instagram" />
//                         </Link>
//                         <Link
//                             to="#"
//                             onClick={(e) => {
//                                 e.preventDefault(); // Prevent default link behavior
//                                 const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

//                                 if (isMobile) {
//                                 // Open WhatsApp app on mobile devices
//                                 window.location.href = "whatsapp://send?phone=+918657062511";
//                                 } else {
//                                 // Open WhatsApp Web on desktops/laptops
//                                 window.open("https://web.whatsapp.com/send?phone=+918657062511", "_blank");
//                                 }
//                             }}
//                             >
//                             <i className="fab fa-whatsapp" />
//                         </Link>


//                     </div>

//                 </div>

//                 {/* Navbar */}

//                 <div className="navbar1">
//                     <div className="mobileresp" onClick={() => { setbars(!bars) }}>
//                         {
//                             bars ?
//                                 <i className="fa-solid fa-xmark"></i>
//                                 :
//                                 <i className="fa-solid fa-bars"></i>
//                         }
//                     </div>
//                     <div className='w-[45%]'>
//                         <ul className='menu'>
//                             <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
//                             <li><NavLink to="/about" activeClassName="active">Our Story</NavLink></li>
//                             <span className='parenthover'  ref={shopRef}   onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={(e) => {
//                             // Ensure dropdown doesn't close when interacting with its children
//                             if (!e.currentTarget.contains(e.relatedTarget)) {
//                                 setIsDropdownVisible(false);
//                             }
//                         }}>
//                                 <li onClick={toggleShopDropdown} ><NavLink to="/products" activeClassName="active">Shop</NavLink>

//                                 {
//                                      isDropdownVisible && (
//                                         <div className={`shopdrop shadow-sm `} id="shopDropdown">
//                                         <div className='flex gap-5'>

//                                             <div className='navshopimg mt-5 ml-10'>
//                                                 <img src={navimg} alt="" className='shadow' />
//                                             </div>


//                                                 {/* gold */}
//                                                 <div className='mt-5 ml-4'>
//                                                 <div className='borderright'>

//                                                     <div className='mb-2'>
//                                                         <h3 className='font-[500]'>Gold Collection</h3>
//                                                     </div>

//                                                     <div className="flex items-center text-sm gap-1 pb-1 transition-all cursor-pointer">
//                                                         <AiFillGolden size={22} color="#FFD700" />
//                                                         <span
//                                                             className="collectionnav1 pl-1 inline-block border-b-2 border-transparent hover:border-[#FFD700] transition-all duration-200 font-medium text-gray-700"
//                                                             onClick={() => handleMetalSelect("gold")}
//                                                         >
//                                                             Gold
//                                                         </span>
//                                                         </div>
//                                                     {goldCategories.length > 0 && (
//                                                     <div>
                                                       
//                                                         {goldCategories.map((i, index) => (
//                                                             <div
//                                                                 key={index}
//                                                                 className="subcatmain relative mb-1"
//                                                                 onClick={() => submitHandle(i)}
//                                                             >
//                                                                 <img
//                                                                     loading='lazy'
//                                                                     src={`${imgdburl}${i?.image_Url?.url}`}
//                                                                     alt={i.title}
//                                                                     style={{ width: '30px', height: '30px', objectFit: 'contain', userSelect: 'none' }}
//                                                                 />
//                                                                 <h3 className="text-[14px] m-1 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                     {i.title}
//                                                                 </h3>
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="absolute left-[95%]">
//                                                                         <IoMdArrowDropright />
//                                                                     </div>
//                                                                 )}
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm" >
//                                                                         {i.subcategories.map((val, subIndex) => (
//                                                                             <div
//                                                                                 key={subIndex}
//                                                                                 className="pl-[10px]"
//                                                                                 onClick={(e) => {  
//                                                                                     e.stopPropagation(); // Prevent click event from bubbling up
//                                                                                     submitHandle(i, val); // Handle the subcategory selection
//                                                                                     setIsDropdownVisible(false);  }}
//                                                                             >
//                                                                                 <h3 className="m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                                     {val.name}
//                                                                                 </h3>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}

                                               
//                                                     </div>
//                                                     )}
                                                   

//                                                     {/* <div className='flex items-center'>
//                                                         <AiFillGolden size={22} color="#C0C0C0" />
//                                                         <h6
//                                                         className='pb-1 pt-2 pl-1 collectionnav1'
//                                                         onClick={() => handleMetalSelect('silver')}
//                                                         >
//                                                         Silver
//                                                         </h6>
//                                                     </div> */}
//                                                     </div>
//                                                     </div>

                                                    
//                                                     {/* silver */}
//                                                     <div className='mt-5 ml-8'>
//                                                         <div className='borderright'>

//                                                     <div className='mb-2'>
//                                                         <h3 className='font-[500]'>Silver Collection</h3>
//                                                     </div>
//                                                     <div className="flex items-center text-sm gap-1 pb-1 transition-all cursor-pointer">
//                                                         <AiFillGolden size={22} color="#C0C0C0" /> {/* Silver Color */}
//                                                         <span
//                                                             className="collectionnav1 pl-1 inline-block border-b-2 border-transparent hover:border-[#C0C0C0] transition-all duration-200 font-medium text-gray-700"
//                                                             onClick={() => handleMetalSelect("silver")}
//                                                         >
//                                                             Silver
//                                                         </span>
//                                                         </div>
//                                                     {silverCategories.length > 0 && (
//                                                     <div>
//                                                         {/* <h3 className="font-[500] mb-1 text-[12px] border-b-2 border-b-[#0d0d0da4] inline-block">Silver</h3> */}
//                                                         {silverCategories.map((i, index) => (
//                                                             <div
//                                                                 key={index}
//                                                                 className="subcatmain relative mb-1"
//                                                                 onClick={() => submitHandle(i)}
//                                                             >
//                                                                 <img
//                                                                     loading='lazy'
//                                                                     src={`${imgdburl}${i?.image_Url?.url}`}
//                                                                     alt={i.title}
//                                                                     style={{ width: '30px', height: '30px', objectFit: 'contain', userSelect: 'none' }}
//                                                                 />
//                                                                 <h3 className="text-[14px] m-1 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                     {i.title}
//                                                                 </h3>
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="absolute left-[99%]">
//                                                                         <IoMdArrowDropright />
//                                                                     </div>
//                                                                 )}
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm">
//                                                                         {i.subcategories.map((val, subIndex) => (
//                                                                             <div
//                                                                                 key={subIndex}
//                                                                                 className="pl-[10px]"
//                                                                                 onClick={(e) => { e.stopPropagation(); 
//                                                                                     submitHandle(i, val);
//                                                                                     setIsDropdownVisible(false);
//                                                                                  }}
//                                                                             >
//                                                                                 <h3 className="m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                                     {val.name}
//                                                                                 </h3>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}
                                                       
//                                                     </div>
//                                                 )}
//                                                         </div>


//                                                     </div>


//                                              {/* third row  */}
//                                             <div className='mt-5 ml-8'>
//                                                 <div className='borderright'>
//                                                     <div className='mb-2'>
//                                                         <h3 className='font-[500]'>Shop By Collection</h3>
//                                                     </div>

//                                                     <h6 className='pb-2 collectionnav1' onClick={() => { submitHandleagegroup("infants") }}>Infants (0-3 Yrs)</h6>
//                                                     <h6 className='pb-2 collectionnav1' onClick={() => { submitHandleagegroup("kids") }}>Kids (3-10 Yrs)</h6>
//                                                     <h6 className='pb-2 collectionnav1' onClick={() => submitHandleagegroup("teens")}>Teens </h6>
//                                                     {/* <h6 className='pb-2 collectionnav1' onClick={() => submitHandleagegroup("mom")}>Mom  </h6> */}
//                                                     <h6 className='pb-2 collectionnav1' onClick={() => submitHandleagegroup("momandme")}>Mom & Me </h6>

//                                                     {/* <h6 className='pb-2 collectionnav1' onClick={() => { navigate("/personalised-prosperity") }}>Customization </h6> */}
//                                                     {/* <h6 className='pb-2 collectionnav1'>Gifts</h6>
//                                                     <h6 className='pb-2 collectionnav1'>Gallery </h6>
//                                                     <h6 className='pb-2 collectionnav1'>Media</h6> */}



//                                                 </div>


//                                             </div>



//                                              {/* <div className='mt-5 ml-7'>
//                                                 <div className='mb-2 '>
//                                                     <h3 className='font-[500]'>Shop By Category</h3>
//                                                 </div>
//                                                 <div>
//                                                      {categoriesData && categoriesData.filter(i => i.title !== "Coming Soon ...").map((i, index) => (
//                                                         <div key={index} className={`subcatmain ${styles.noramlFlex} relative`} onClick={() => { submitHandle(i) }}>
//                                                             <img
//                                                              src={i.image_Url} 
//                                                              alt="" style={{ width: "30px", height: "35px", objectFit: "contain", userSelect: "none" }} />
//                                                             <h3 className='text-[14px] m-1 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]'>{i.title}</h3>
//                                                             <div className='  absolute left-[95%]'>

//                                                             {
//                                                                 i.title === "Diamond Pendants" ?
//                                                                 <IoMdArrowDropright />
//                                                                 :
//                                                                 ""
                                                                
                                                                
//                                                             }
//                                                             {
//                                                                 i.title === "kids accessories" ?
//                                                                 <IoMdArrowDropright />
//                                                                 :
//                                                                 ""
                                                                
                                                                
//                                                             }
//                                                             </div>

//                                                              { i.title === "Diamond Pendants" && (
//                                                                 <div className={`subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm`}>
//                                                                     {i.subcategories.map((val, subIndex) => (
//                                                                         <div className='pl-[10px]' key={subIndex} onClick={(e) => { e.stopPropagation(); submitHandle(i, val); }}>
//                                                                             <h3 className='m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]'>{val.name}</h3>
//                                                                         </div>
//                                                                     ))}
//                                                                 </div>
//                                                             )}
//                                                              { i.title === "kids accessories" && (
//                                                                 <div className={`subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm`}>
//                                                                     {i.subcategories.map((val, subIndex) => (
//                                                                         <div className='pl-[10px]' key={subIndex} onClick={(e) => { e.stopPropagation(); submitHandle(i, val); }}>
//                                                                             <h3 className='m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]'>{val.name}</h3>
//                                                                         </div>
//                                                                     ))}
//                                                                 </div>
//                                                             )}
//   */}

//                                                             {/* Display subcategories */}
//                                                             {/* <div className={`subcatchild top-3 left-[100%]  pb-4 w-[250px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm`}>
//                                                                 {i.subcategories.map((val, subIndex) => (
//                                                                     <div key={subIndex} onClick={(e) => { 
//                                                                         e.stopPropagation();
//                                                                          submitHandle(i, val);
//                                                                  }}>
//                                                                         <h3 className='m-3 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]'>{val.name}</h3>
//                                                                     </div>
//                                                                 ))}
//                                                             </div> */}

// {/*                                                             
                                                         
//                                                          </div>
//                                                     ))} 

                                                    
//                                                  </div>
//                                             </div>  */}


//                                         {/* api code working  */}

//                                                 {/* <div className='mt-5 ml-7'>
//                                                 <div className='mb-2 '>
//                                                     <h3 className='font-[500]'>Shop By Category</h3>
//                                                 </div>
//                                                 <div>
//                                                 {categoriesData && categoriesData.map((i, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="subcatmain relative"
//                                                     onClick={() => submitHandle(i)}
//                                                 >

//                                                     <img
//                                                         loading='lazy'
//                                                         src={`${imgdburl}${i?.image_Url?.url}`}
//                                                         alt={i.title}
//                                                         style={{ width: '30px', height: '35px', objectFit: 'contain', userSelect: 'none' }}
//                                                     />
                                                   
//                                                     <h3 className="text-[14px] m-1 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                         {i.title}
//                                                     </h3>
                                                   
//                                                     {(i.subcategories.length > 0 ) && (
//                                                         <div className="absolute left-[95%]">
//                                                         <IoMdArrowDropright />
//                                                         </div>
//                                                     )}
                                                    
//                                                      {(i.subcategories.length > 0 ) && (
//                                                         <div className="subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm">
//                                                         {i.subcategories && i.subcategories.map((val, subIndex) => (
//                                                             <div
//                                                             key={subIndex}
//                                                             className="pl-[10px]"
//                                                             onClick={(e) => { e.stopPropagation(); submitHandle(i, val); }}
//                                                             >
//                                                             <h3 className="m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                 {val.name}
//                                                             </h3>
//                                                             </div>
//                                                         ))}
//                                                         </div>
//                                                     )}
//                                                     </div>
//                                                 ))}
//                                                 </div>
//                                             </div>  */}


//                                             {/* navbar code working  */}

//                                             {/* <div className='mt-5 ml-7'>
//                                             <div className='mb-1'>
//                                                 <h3 className='font-[500]'>Shop By Category</h3>
//                                             </div>

//                                                 {goldCategories.length > 0 && (
//                                                     <div>
//                                                        <h3 className="font-[500] mb-1  text-[12px] border-b-2 border-b-[#0d0d0da4] inline-block">
//                                                             Gold
//                                                         </h3>
//                                                         {goldCategories.slice(0, showAllGold ? goldCategories.length : 7).map((i, index) => (
//                                                             <div
//                                                                 key={index}
//                                                                 className="subcatmain relative mb-1"
//                                                                 onClick={() => submitHandle(i)}
//                                                             >
//                                                                 <img
//                                                                     loading='lazy'
//                                                                     src={`${imgdburl}${i?.image_Url?.url}`}
//                                                                     alt={i.title}
//                                                                     style={{ width: '30px', height: '30px', objectFit: 'contain', userSelect: 'none' }}
//                                                                 />
//                                                                 <h3 className="text-[14px] m-1 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                     {i.title}
//                                                                 </h3>
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="absolute left-[95%]">
//                                                                         <IoMdArrowDropright />
//                                                                     </div>
//                                                                 )}
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm" >
//                                                                         {i.subcategories.map((val, subIndex) => (
//                                                                             <div
//                                                                                 key={subIndex}
//                                                                                 className="pl-[10px]"
//                                                                                 onClick={(e) => {  
//                                                                                     e.stopPropagation(); // Prevent click event from bubbling up
//                                                                                     submitHandle(i, val); // Handle the subcategory selection
//                                                                                     setIsDropdownVisible(false);  }}
//                                                                             >
//                                                                                 <h3 className="m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                                     {val.name}
//                                                                                 </h3>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}

//                                                 {goldCategories.length > 7 && (
//                                                     <div className='text-center'>

                                                   
//                                                                     <button
//                                                                         onClick={(e) => {
//                                                                             e.stopPropagation(); // Prevent closing
//                                                                             setShowAllGold(!showAllGold)
//                                                                         }}
//                                                                         className="text-blue-500 text-[12px] mt-2 underline"
//                                                                     >
//                                                                         {showAllGold ? 'View Less' : 'View More'}
//                                                                     </button>
//                                                                     </div>
//                                                                 )}
//                                                     </div>
//                                                 )}

//                                                 {/* SILVER CATEGORY SECTION */}
//                                                 {/* {silverCategories.length > 0 && (
//                                                     <div>
//                                                         <h3 className="font-[500] mb-1   text-[12px] border-b-2 border-b-[#0d0d0da4] inline-block">Silver</h3>
//                                                         {silverCategories.slice(0, showAllSilver ? silverCategories.length : 3).map((i, index) => (
//                                                             <div
//                                                                 key={index}
//                                                                 className="subcatmain relative mb-1"
//                                                                 onClick={() => submitHandle(i)}
//                                                             >
//                                                                 <img
//                                                                     loading='lazy'
//                                                                     src={`${imgdburl}${i?.image_Url?.url}`}
//                                                                     alt={i.title}
//                                                                     style={{ width: '30px', height: '30px', objectFit: 'contain', userSelect: 'none' }}
//                                                                 />
//                                                                 <h3 className="text-[14px] m-1 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                     {i.title}
//                                                                 </h3>
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="absolute left-[95%]">
//                                                                         <IoMdArrowDropright />
//                                                                     </div>
//                                                                 )}
//                                                                 {(i.subcategories.length > 0) && (
//                                                                     <div className="subcatchild top-3 left-[100%] pt-[2px] pb-2 w-[230px] bg-[#fff] border border-[#eee] absolute z-30 rounded-[3px] shadow-sm">
//                                                                         {i.subcategories.map((val, subIndex) => (
//                                                                             <div
//                                                                                 key={subIndex}
//                                                                                 className="pl-[10px]"
//                                                                                 onClick={(e) => { e.stopPropagation(); 
//                                                                                     submitHandle(i, val);
//                                                                                     setIsDropdownVisible(false);
//                                                                                  }}
//                                                                             >
//                                                                                 <h3 className="m-2 cursor-pointer select-none font-Poppins hover:text-[#1BB8E5]">
//                                                                                     {val.name}
//                                                                                 </h3>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}
//                                                         {silverCategories.length > 3 && (
//                                                              <div className='text-center'>
//                                                             <button
//                                                                 onClick={(e) => {
//                                                                     e.stopPropagation();
//                                                                     setShowAllSilver(!showAllSilver)
//                                                                 }}
//                                                                 className="text-blue-500 text-[12px] mt-2 underline"
//                                                             >
//                                                                 {showAllSilver ? 'View Less' : 'View More'}
//                                                             </button>
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                 )} */}
//                                             {/* </div> */} 




//                                             <div className='pricenav mt-5 ml-7'>
//                                                 <div className='mb-2'>
//                                                     <h3 className='font-[500] text-black'>Shop By Price</h3>
//                                                 </div>

//                                                 <Link
//                                                     to={`/products${buildQueryString(1000, 5000)}`}
//                                                     className='pb-2 collectionnav1 text-white '
//                                                 >
//                                                     <h6 className='mb-1 text-[14px]'>₹ 1000 - ₹ 5000</h6>

//                                                 </Link>
//                                                 <Link
//                                                     to={`/products${buildQueryString(5000, 10000)}`}
//                                                     className='pb-2 collectionnav1 text-white'
//                                                 >
//                                                     <h6 className='mb-1 text-[14px]'> ₹ 5000 - ₹ 10000</h6>


//                                                 </Link>
//                                                 <Link
//                                                     to={`/products${buildQueryString(10000, 20000)}`}
//                                                     className='pb-2 collectionnav1 text-white'
//                                                 >
//                                                     <h6 className='mb-1 text-[14px]'> ₹ 10000 - ₹ 25000</h6>


//                                                 </Link>
//                                                 <Link
//                                                     to={`/products${buildQueryString(25000, 50000)}`}
//                                                     className='pb-2 collectionnav1 text-white'
//                                                 >
//                                                     <h6 className='mb-1 text-[14px]'> ₹ 25000 - ₹ 50000</h6>


//                                                 </Link>

//                                                 <Link
//                                                     to={`/products${buildQueryString(50000, 75000)}`}
//                                                     className='pb-2 collectionnav1 text-white'
//                                                 >
//                                                     <h6 className='mb-1 text-[14px]'> ₹ 50000 - ₹ 100000</h6>


//                                                 </Link>
//                                                 {/* <Link
//                                                     to={`/products${buildQueryString(75000, 100000)}`}
//                                                     className='pb-2 collectionnav1 text-white'
//                                                 >
//                                                     <h6 className='mb-1 text-[14px]'> ₹ 75000 - ₹ 100000</h6>


//                                                 </Link> */}
//                                             </div>
//                                         </div>

//                                     </div>

//                                      )
//                                 }

                                      

//                                 </li>
//                             </span>
//                             <li><NavLink to="/personalised-prosperity" activeClassName="active">Customization</NavLink></li>
//                             <li><NavLink to="/contacts" activeClassName="active">Contact Us</NavLink></li>
//                         </ul>
//                     </div>
//                     <div className='w-[55%] flex justify-between'>


//                         <div>
//                             <div className="logo  !overflow-hidden" onClick={() => navigate("/")}>
//                                 <img className='shadowlogonav' loading='lazy' src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp" alt="" />
//                             </div>
//                         </div>


//                         <div className='flex gap-[10px] items-center'>
//                             <div className={`${styles.noramlFlex}`}>
//                                 <div className="relative cursor-pointer mr-[20px]">
//                                     <div className='searchconstyle'>
//                                         <form onSubmit={(e) => e.preventDefault()}>


//                                             <input type="search" placeholder='Search Product..' className='' value={searchTerm} onChange={handleSearchChange} />

//                                             <div className='searchiconadjustpos'>
//                                                 <IoSearchOutline size={22} />

//                                             </div>


//                                             {
//                                                 searchData && searchData.length !== 0 ?
//                                                     (
//                                                         <div className="absolute left-0  min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 custom-scrollbar" style={{ maxHeight: "100vh", overflowY: "auto" }} >
//                                                             {
//                                                                 searchData && searchData.map((i, index) => {
//                                                                     const d = i.name;
//                                                                     const Product_name = d.replace(/\s+/g, "-")
//                                                                     return (

//                                                                         <div
//                                                                             onClick={() => {
//                                                                                 navigate(`/product/${Product_name}`)
//                                                                                 resetSearch();

//                                                                             }}>
//                                                                             <div className="w-full flex items-center pb-3 overflow-hidden">
//                                                                                 <img 
//                                                                                 // src={`${i.images[1]?.url}`} 
//                                                                                 src={
//                                                                                     i.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
//                                                                                         ? i.images[1].url.replace(
//                                                                                             /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
//                                                                                             `${imgdburl}/uploads/images`
//                                                                                           )
//                                                                                         : `${imgdburl}${i.images[1]?.url}` // Prepend imgdburl if not Cloudinary
//                                                                                 }
//                                                                                 alt="" className='w-[60px] h-[50px] mr-[10px] scale-150 object-contain' />
//                                                                                 <p className='font-Poppins text-[12px]'>{i.name}</p>
//                                                                             </div>
//                                                                         </div>

//                                                                     )

//                                                                 })
//                                                             }

//                                                         </div>
//                                                     ) :
//                                                     null
//                                             }

//                                         </form>
//                                     </div>

//                                 </div>



//                             </div>


//                             {/* wishlist */}
//                             <div className={`${styles.noramlFlex}`}>
//                                 <div
//                                     className="relative cursor-pointer mr-[2px]"
//                                     onClick={() => setOpenWishlist(true)}

//                                 >
//                                     <Badge badgeContent={wishlist && wishlist.length} color="primary">
//                                         <AiOutlineHeart size={24} />
//                                     </Badge>

//                                 </div>
//                             </div>
//                             {
//                                 openWishlist ?
//                                     (
//                                         <Wishlist setOpenWishlist={setOpenWishlist} />
//                                     )
//                                     :
//                                     null
//                             }


//                             <div className={`${styles.noramlFlex}`}>
//                                 <div
//                                     className="relative cursor-pointer mr-[2px]"

//                                 >
//                                     {
//                                         isAuthenticated ?
//                                             (
//                                                 <Link to="/profile">
//                                                     {/* <CgProfile size={30} /> */}
//                                                     <LuUserCircle2 size={24} />

//                                                     {/* <img className='w-[35px] h-[35px] rounded-full' src={`${backend_url}${user.avatar}`} alt="" /> */}
//                                                 </Link>
//                                             )
//                                             :
//                                             (
//                                                 <Link to="/login">
//                                                     <LuUserCircle2 size={24} />

//                                                     {/* <CgProfile size={30} /> */}
//                                                 </Link>)
//                                     }


//                                 </div>
//                             </div>

//                             <div onClick={() => {
//                                 navigate("/cart")

//                             }}>
//                                 <Badge badgeContent={cart && cart.length} color="primary" badgeContentClassName="custom-badge-content">
//                                     <MdOutlineShoppingBag size={26} className='iconnav' />
//                                 </Badge>



//                             </div>

//                             <div>

//                             </div>



//                         </div>
//                     </div>

//                 </div>

//             </div>


//             {/* Mobile Navbar */}
//             <div className='nav1bannermobile'>
                    

//                     <div className='couponscetion !text-[12px] w-[85%]'>
//                         <Slider {...settings} >
//                             <div className='text-center couponsectionadjustslider'>
//                                 <span>Get ₹500 Off On Your First Order Of ₹5000 Or More! :- Welcome500</span>

//                             </div>
//                             <div className='text-center couponsectionadjustslider'>

//                             <span>Use coupon code <b>NewYear500</b>  at checkout for an additional ₹500 Off!</span>
//                             </div>

//                         </Slider>

//                     </div>
//                     <div 
//                 className='!mr-10' 
//                 onClick={toggleCurrencySelector} 
//                 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//                 {currencyDataz.length > 0 && (
//                     <img 
//                         src={currencyDataz.find(currency => currency.code === selectedCurrency)?.flag} 
//                         alt={`${selectedCurrency} flag`} 
//                         className="w-5 h-5 mr-2" 
//                     />
                    
//                 )}
//                 <span className='font-[400]'>{selectedCurrency}</span>
//             </div>

//             {
//                 currencyDataz.length > 0 &&  (
//                     <div style={{display:"none"}}>

//                     <CurrencySelector  onCurrencySelect={handleCurrencySelect} toggleCurrencySelector={toggleCurrencySelector}  currencyDataz={currencyDataz || []}  />
//                     </div>

//                 )
//             }



         

//                         {isCurrencySelectorOpen && (
//                             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                             <div className="bg-white px-3 pb-6 pt-2 rounded-lg shadow-lg max-w-sm w-full text-black" style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" }}>

//                                 <div className='flex justify-end' onClick={toggleCurrencySelector}>
//                                 <IoIosClose size={30} className='cursor-pointer'/>

//                                 </div>
                             
//                             <CurrencySelector onCurrencySelect={handleCurrencySelect} toggleCurrencySelector={toggleCurrencySelector}  currencyDataz={currencyDataz || []}  />
//                             </div>
//                           </div>

//                         )}
                  

                    
//                 </div>

//             <div
//                 className={`mobile-nav ${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//                     }
//                     w-full h-[70px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden `}
//             >   
//                 <div className="w-full flex items-center justify-between cursor-pointer">
//                     <div>
//                         <BiMenuAltLeft size={40} className='ml-4' onClick={() => setOpen(true)} />
//                     </div>

//                     <div className="logo pt-2" onClick={() => {
//                         setbars(false)
//                         navigate("/")
//                     }} >
//                         <img loading='lazy' className='w-[150px] h-[60px] object-contain' src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp" alt="" />
//                     </div>

//                     {/* <div className="logo !overflow-hidden" onClick={() => {
//                         setbars(false)
//                         navigate("/")
//                     }} >
//                         <img loading='lazy ' className='w-[150px] h-[57px] object-contain' src="https://backend.tinytiaraa.com:8000/uploads/images/logowebsite/logo.gif" alt="" />
//                     </div> */}

//                     <div>
//                         <div onClick={() => {
//                             closenavbar()
//                             navigate("/cart")

//                         }} className='mr-[20px] cursor-pointer'>

// <Badge badgeContent={cart && cart.length} color="primary" badgeContentClassName="custom-badge-content">

//                             <i className="fa-solid fa-cart-shopping text-[25px]" ></i>
// </Badge>


//                         </div>

//                     </div>

//                 </div>


//                 {/* navbar sidebar */}

//                 {
//                     open && (
//                         <div className='fixed w-full bg-[#0000005f] z-[20] h-full top-0 left-0'>
//                             <div className='mobajustnavsall fixed w-[75%]  bg-[white] h-screen top-0 left-0 z-10 overflow-x-hidden overflow-y-auto'>
//                                 <div className="w-full justify-between flex pr-3">
//                                     <div>
//                                         <div className="mt-5 ml-5 mr-[15px] cursor-pointer" onClick={() => openclosewhislist()}>
//                                             <Badge badgeContent={wishlist && wishlist.length} color="primary">
//                                                 <AiOutlineHeart size={30} />
//                                             </Badge>

//                                         </div>
//                                         {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
//                                     </div>
//                                     <RxCross1 size={30} className='ml-4 mt-5 cursor-pointer' onClick={() => setOpen(false)} />

//                                 </div>

//                                 <div className='my-8 w-[92%] m-auto h-[40px]'>
//                                     <input type="search" placeholder='Search Product..' className='h-[40px] w-full border-[#000] border-[2px] px-2 rounded-md' value={searchTerm} onChange={handleSearchChange} />

//                                     {
//                                         searchData && searchData.length !== 0 ?
//                                             (
//                                                 <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
//                                                     {
//                                                         searchData && searchData.map((i, index) => {
//                                                             const d = i.name;
//                                                             const Product_name = d.replace(/\s+/g, "-")
//                                                             return (
//                                                                 <>
//                                                                     <div
//                                                                         onClick={() => {
//                                                                             navigate(`/product/${Product_name}`)
//                                                                             resetSearch();
//                                                                             closenavbar();
//                                                                         }}>
//                                                                         <div className="w-full flex items-center pb-3 overflow-hidden">
//                                                                             <img 
//                                                                              src={
//                                                                                 i.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
//                                                                                     ? i.images[1].url.replace(
//                                                                                         /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
//                                                                                         `${imgdburl}/uploads/images`
//                                                                                       )
//                                                                                     : `${imgdburl}${i.images[1]?.url}` // Prepend imgdburl if not Cloudinary
//                                                                             }
//                                                                             // src={`${i.images[1]?.url}`} 
//                                                                             alt="" className='w-[60px] h-[50px] mr-[10px] scale-150 object-contain' />
//                                                                             <p className='font-Poppins text-[15px]'>{i.name}</p>
//                                                                         </div>
//                                                                     </div>
//                                                                 </>
//                                                             )

//                                                         })
//                                                     }

//                                                 </div>
//                                             ) :
//                                             null
//                                     }

//                                 </div>


//                                 {/* <div className="mobilenavigation font-Poppins flex justify-start pl-6 ">
//                                     <ul className={`flex flex-col gap-10  ${bars ? "menuopen menu" : "menu"}`}  >

//                                         <li><NavLink to="/" onClick={closenavbar} activeClassName="active">Home</NavLink></li>
//                                         <li><NavLink to="/about" onClick={closenavbar} activeClassName="active">Our Story </NavLink></li>
//                                         <li className="relative group">
//                                             <NavLink
//                                                 to="/products"
//                                                 onClick={closenavbar}
//                                                 className="flex items-center text-black hover:text-blue-500"
//                                                 activeClassName="active"
//                                             >
//                                                 Shop
//                                                 <FaAngleRight className='ml-3' />

//                                             </NavLink>
//                                             <div className="absolute top-[50%] left-0 w-[300px] mt-2 bg-white rounded-md shadow-lg hidden group-hover:block ">
//                                                 <div className="p-4">
//                                                     <div className="mb-4">
//                                                         <h3 className="font-semibold text-[16px] text-center">Shop Now

//                                                         </h3>
//                                                         <h6 className="pb-2 collectionnav1 text-[14px]" onClick={() => {
//                                                            handleMetalSelect('gold')
//                                                             closenavbar()
//                                                         }}>Gold</h6>
//                                                         <h6 className="pb-2 collectionnav1 text-[14px]" onClick={()=>{
//                                                             handleMetalSelect('silver')
//                                                             closenavbar()
//                                                         }}>Silver</h6>
//                                                     </div>
//                                                     <div className="mb-4">
//                                                         <h3 className="font-semibold text-[16px] text-center">By Category</h3>
//                                                         <div className='text-[13px]'>
//                                                             {categoriesData && categoriesData.map((i, index) => (
//                                                                 <div
//                                                                     key={index}
//                                                                     className={`subcatmain ${styles.noramlFlex} relative`}
//                                                                     onClick={() => {
//                                                                         submitHandle(i)
//                                                                         closenavbar()

//                                                                             ;
//                                                                     }} // Handle click on category
//                                                                 >
//                                                                     <img
//                                                                         src={`${imgdburl}${i?.image_Url?.url}`}
                                                
//                                                                         alt=""
//                                                                         style={{ width: "35px", height: "40px", objectFit: "contain", userSelect: "none" }}
//                                                                     />
//                                                                     <h3 className="m-1 cursor-pointer select-none font-Poppins hover:text-blue-500">{i.title}</h3>

//                                                                     {/* Display subcategories */}
//                                                                     {/* <div
//                                                                         className={`subcatchild top-3 left-[70%] pb-4 w-64 bg-white absolute z-30 rounded-b-md shadow-sm`}
//                                                                     >
//                                                                         {i.subcategories.map((val, subIndex) => (
//                                                                             <div
//                                                                                 key={subIndex}
//                                                                                 onClick={(e) => {
//                                                                                     e.stopPropagation();
//                                                                                     submitHandle(i, val); // Handle click on subcategory
//                                                                                 }}
//                                                                             >
//                                                                                 <h3 className="m-3 cursor-pointer select-none font-Poppins hover:text-blue-500">{val.name}</h3>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div> */}
//                                                                 {/* </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </li>
//                                         <li><NavLink to="/personalised-prosperity" onClick={closenavbar} activeClassName="active">Customization</NavLink></li>
//                                         <li><Link to="/contacts" onClick={closenavbar} activeClassName="active">Contact Us</Link></li>
//                                     </ul>
//                                 </div> */} 


// <div className="mobilenavigation font-Poppins flex justify-start pl-6">
//             <ul className={`flex flex-col gap-10 ${bars ? "menuopen menu" : "menu"}`}>
//                 <li>
//                     <NavLink to="/" onClick={closenavbar} activeClassName="active">
//                         Home
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/about" onClick={closenavbar} activeClassName="active">
//                         Our Story
//                     </NavLink>
//                 </li>
//                 <li className="relative">
//                     <button
//                         onClick={togglemobileShopDropdown}
//                         className="flex items-center text-black hover:text-blue-500 w-full text-left"
//                     >
//                         Shop
//                         <FaAngleRight className="ml-3" />
//                     </button>
//                     {mobileShopOpen && (
//                         <div className="absolute top-[50%] left-0 w-[300px] mt-2 bg-white rounded-md shadow-lg">
//                             <div className="p-4">
//                                 <div className="mb-4">
//                                     <h3 className="font-semibold text-[16px] text-center">Shop Now</h3>
//                                     <h6
//                                         className="pb-2 pt-2 collectionnav1 text-[14px]"
//                                         onClick={() => {
//                                             navigate("/products");
//                                             closenavbar();
//                                             setMobileShopOpen(false); // Close dropdown
//                                         }}
//                                     >
//                                         All Products
//                                     </h6>
//                                     <h6
//                                         className="pb-2 collectionnav1 text-[14px]"
//                                         onClick={() => {
//                                             handleMetalSelect('gold');
//                                             closenavbar();
//                                             setMobileShopOpen(false); // Close dropdown
//                                         }}
//                                     >
//                                         Gold
//                                     </h6>
//                                     <h6
//                                         className="pb-2 collectionnav1 text-[14px]"
//                                         onClick={() => {
//                                             handleMetalSelect('silver');
//                                             closenavbar();
//                                             setMobileShopOpen(false); // Close dropdown
//                                         }}
//                                     >
//                                         Silver
//                                     </h6>
//                                 </div>
//                                 <div className="mb-4">
//                                     <h3 className="font-semibold text-[16px] text-center">By Category</h3>
//                                     <div className="text-[13px]">
//                                         {categoriesData &&
//                                             categoriesData.map((i, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="subcatmain flex items-center relative"
//                                                     onClick={() => {
//                                                         submitHandle(i);
//                                                         closenavbar();
//                                                         setMobileShopOpen(false); // Close dropdown
//                                                     }}
//                                                 >
//                                                     <img
//                                                         src={`${imgdburl}${i?.image_Url?.url}`}
//                                                         alt=""
//                                                         style={{
//                                                             width: "35px",
//                                                             height: "40px",
//                                                             objectFit: "contain",
//                                                             userSelect: "none",
//                                                         }}
//                                                     />
//                                                     <h3 className="m-1 cursor-pointer select-none font-Poppins hover:text-blue-500">
//                                                         {i.title}
//                                                     </h3>
//                                                 </div>
//                                             ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </li>
//                 <li>
//                     <NavLink to="/personalised-prosperity" onClick={closenavbar} activeClassName="active">
//                         Customization
//                     </NavLink>
//                 </li>
//                 <li>
//                     <Link to="/contacts" onClick={closenavbar} activeClassName="active">
//                         Contact Us
//                     </Link>
//                 </li>
//             </ul>
//         </div>

                                



//                                 <div className="flex w-full justify-center mt-6">
//                                     {
//                                         isAuthenticated ?
//                                             <>
//                                                 <div className='flex flex-col items-center mt-6 font-Poppins cursor-pointer' onClick={()=>{
//                                                     navigate("/profile")
//                                                     closenavbar()
//                                                 }}>
//                                                     {/* <img className='w-[50px] h-[50px] rounded-full' src={`${user?.avatar}`} alt="" /> */}
//                                                      {user?.avatar?.url && user?.avatar.url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) ? (
//                                                                                             <img 
//                                                                                                 src={user?.avatar.url
//                                                                                                 .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
//                                                                                                 .replace("/avatars/", "/products/")}
//                                                                                                 className="w-[60px] h-[60px] rounded-full"
//                                                                                                 alt="User Avatar"
//                                                                                             />
//                                                                                             ) : user?.avatar?.url ? (
//                                                                                             <img 
//                                                                                                 src={`${imgdburl}${avatar?.url}`.replace("/avatars/", "/products/")}
//                                                                                                 className="w-[60px] h-[60px] rounded-full"
//                                                                                                 alt="User Avatar"
//                                                                                             />
//                                                                                             ) : (
//                                                                                                 <FaUserAlt className="w-[50px] h-[50px] text-gray-500 border-2 border-gray-500 rounded-full p-1" />
//                                                                                             )}
                                                    
//                                                     <h3 className='capitalize font-[500]'>{user.name}</h3>
//                                                     <button className='my-2 px-4 py-2 bg-[#006039] text-white rounded-[8px] hover:bg-[#257354]'>Dashboard</button>
//                                                 </div>

//                                             </>

//                                             :
//                                             <>
//                                                 <Link to="/login" onClick={closenavbar} className='text-[18px] font-Poppins pr-[10px]'>Login /</Link>
//                                                 <Link to="/sign-up" onClick={closenavbar} className='text-[18px] font-Poppins'>Sign Up</Link>


//                                             </>



//                                     }
//                                 </div>





//                             </div>

//                         </div>
//                     )
//                 }




//             </div>

//         </>
//     )
// }

// export default Navbar1


// "use client"
// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Heart, ShoppingBag, Search, User, ChevronDown, Sparkles, Gift, Crown, Star, Baby } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Link } from "react-router-dom"
// import { useMobile } from "@/hooks/mobile"

// const navItems = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "Shop",
//     href: "#",
//   },
//   {
//     name: "Collections",
//     href: "#",
//     children: [
//       { name: "Baby Jewelry", href: "#", icon: Baby },
//       { name: "Kids Bracelets", href: "#", icon: Sparkles },
//       { name: "Necklaces", href: "#", icon: Heart },
//       { name: "Earrings", href: "#", icon: Star },
//       { name: "Special Occasions", href: "#", icon: Gift },
//       { name: "Premium", href: "#", icon: Crown },
//     ],
//   },
//   {
//     name: "New Arrivals",
//     href: "#",
//   },
  
//   {
//     name: "About Us",
//     href: "#",
//   },
//   {
//     name: "Contact",
//     href: "#",
//   },
// ]

// // Animation variants
// const navVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// }

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//       delayChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// }

// const dropdownVariants = {
//   hidden: { opacity: 0, y: -5, height: 0 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     height: "auto",
//     transition: {
//       duration: 0.3,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// }

// const mobileMenuVariants = {
//   hidden: { opacity: 0, x: "100%" },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.3,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
//   exit: {
//     opacity: 0,
//     x: "100%",
//     transition: {
//       duration: 0.2,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// }

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState("")
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const isMobile = useMobile()

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Close mobile menu on resize
//   useEffect(() => {
//     if (!isMobile) {
//       setIsMobileMenuOpen(false)
//     }
//   }, [isMobile])

//   const toggleDropdown = (name) => {
//     setActiveDropdown(activeDropdown === name ? null : name)
//   }

//   return (
//     <motion.header
//       variants={navVariants}
//       initial="hidden"
//       animate="visible"
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
//       )}
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="flex-shrink-0"
//           >
//             <Link to="/" className="flex items-center">
//               <Sparkles className="h-6 w-6 text-pink-500" />
//               <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                 TinyTiaraa
//               </span>
//              {/* <img
//                 className="cursor-pointer w-[200px] h-[60px] object-contain scale-[1.33] transition-transform duration-300 ease-in-out"
//                 src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
//                 alt="Logo"
//               /> */}
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <motion.nav
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="hidden md:flex items-center space-x-1"
//           >
//             {navItems.map((item) => (
//               <div key={item.name} className="relative group">
//                 {item.children ? (
//                   <div>
//                     <motion.button
//                       variants={itemVariants}
//                       whileHover={{
//                         backgroundColor: "rgba(252, 231, 243, 0.5)",
//                         color: "#db2777",
//                       }}
//                       className={cn(
//                         "flex items-center px-3 py-2 text-sm font-medium rounded-md",
//                         "text-gray-700 hover:text-pink-600 hover:bg-pink-50/50",
//                         "transition-all duration-200",
//                         activeDropdown === item.name && "text-pink-600 bg-pink-50/50",
//                       )}
//                       onClick={() => toggleDropdown(item.name)}
//                     >
//                       {item.name}
//                       <motion.span
//                         animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <ChevronDown className="ml-1 h-4 w-4" />
//                       </motion.span>
//                     </motion.button>
//                     <AnimatePresence>
//                       {activeDropdown === item.name && (
//                         <motion.div
//                           variants={dropdownVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="hidden"
//                           className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
//                         >
//                           <div className="py-1">
//                             {item.children.map((child, idx) => (
//                               <motion.div
//                                 key={child.name}
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{
//                                   opacity: 1,
//                                   y: 0,
//                                   transition: { delay: idx * 0.05, duration: 0.2 },
//                                 }}
//                               >
//                                 <Link
//                                   href={child.href}
//                                   className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
//                                 >
//                                   <child.icon className="mr-2 h-4 w-4" />
//                                   {child.name}
//                                 </Link>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 ) : (
//                   <Link href={item.href}>
//                     <motion.span
//                       variants={itemVariants}
//                       whileHover={{
//                         backgroundColor: "rgba(252, 231, 243, 0.5)",
//                         color: "#db2777",
//                         scale: 1.05,
//                       }}
//                       className={cn(
//                         "block px-3 py-2 text-sm font-medium rounded-md",
//                         "text-gray-700 hover:text-pink-600 hover:bg-pink-50/50",
//                         "transition-all duration-200",
//                       )}
//                     >
//                       {item.name}
//                     </motion.span>
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </motion.nav>

//           {/* Action Buttons */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="flex items-center space-x-1"
//           >
//             {/* Search button */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(252, 231, 243, 0.5)",
//                 color: "#db2777",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="p-2 text-gray-700 hover:text-pink-600 rounded-full hover:bg-pink-50/50 transition-colors duration-200"
//               aria-label="Search"
//             >
//               <Search className="h-5 w-5" />
//             </motion.button>

//             {/* Account button */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(252, 231, 243, 0.5)",
//                 color: "#db2777",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="p-2 text-gray-700 hover:text-pink-600 rounded-full hover:bg-pink-50/50 transition-colors duration-200"
//               aria-label="Account"
//             >
//               <User className="h-5 w-5" />
//             </motion.button>

//             {/* Wishlist button */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(252, 231, 243, 0.5)",
//                 color: "#db2777",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="p-2 text-gray-700 hover:text-pink-600 rounded-full hover:bg-pink-50/50 transition-colors duration-200 relative"
//               aria-label="Wishlist"
//             >
//               <Heart className="h-5 w-5" />
//               <motion.span
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="absolute top-0 right-0 h-4 w-4 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center"
//               >
//                 2
//               </motion.span>
//             </motion.button>

//             {/* Cart button */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(252, 231, 243, 0.5)",
//                 color: "#db2777",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="p-2 text-gray-700 hover:text-pink-600 rounded-full hover:bg-pink-50/50 transition-colors duration-200 relative"
//               aria-label="Cart"
//             >
//               <ShoppingBag className="h-5 w-5" />
//               <motion.span
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="absolute top-0 right-0 h-4 w-4 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center"
//               >
//                 3
//               </motion.span>
//             </motion.button>

//             {/* Mobile menu button */}
//             <motion.button
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "rgba(252, 231, 243, 0.5)",
//                 color: "#db2777",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="md:hidden p-2 text-gray-700 hover:text-pink-600 rounded-full hover:bg-pink-50/50 transition-colors duration-200"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto"
//           >
//             <div className="container mx-auto px-4 py-6 space-y-6">
//               {navItems.map((item) => (
//                 <div key={item.name} className="border-b border-gray-100 pb-4">
//                   {item.children ? (
//                     <div>
//                       <button
//                         className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-700"
//                         onClick={() => toggleDropdown(item.name)}
//                       >
//                         {item.name}
//                         <ChevronDown
//                           className={cn(
//                             "ml-1 h-4 w-4 transition-transform duration-200",
//                             activeDropdown === item.name && "rotate-180",
//                           )}
//                         />
//                       </button>
//                       <AnimatePresence>
//                         {activeDropdown === item.name && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="mt-2 pl-4 space-y-2 overflow-hidden"
//                           >
//                             {item.children.map((child) => (
//                               <Link
//                                 key={child.name}
//                                 href={child.href}
//                                 className="flex items-center py-2 text-sm text-gray-600 hover:text-pink-600"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                               >
//                                 <child.icon className="mr-2 h-4 w-4" />
//                                 {child.name}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className="block py-2 text-base font-medium text-gray-700 hover:text-pink-600"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}

//               <div className="pt-6">
//                 <Button
//                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Shop Now
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }


"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Menu, Search, ShoppingBag, User, X, ChevronDown, ChevronRight, LogOut } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { imgdburl, server } from "@/server"
import axios from "axios"
import Wishlist from "@/Wishlist/Wishlist"
import { useSelector } from "react-redux"
import { usePriceRange } from "@/pricerange/PriceRangeContext"
import { FaUserAlt } from "react-icons/fa"
import { changeCurrency, initializeConversionRates } from "@/redux/actions/currencyActions"

// Animation variants
const navbarAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const rotateChevron = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
}

const mobileMenuAnimation = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
}

const searchAnimation = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
}

// Custom motion components
const MotionLink = motion(Link)
const MotionButton = motion(Button)

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname
  const { wishlist } = useSelector((state) => state.wishlist)
       const { isAuthenticated, user, loading } = useSelector((state) => state.user)
     const { products } = useSelector((state) => state.products)

     const { cart } = useSelector((state) => state.cart)

 const [openWishlist, setOpenWishlist] = useState(false)

 const navigate = useNavigate()
 
    const [searchTerm, setsearchTerm] = useState("")
    const [searchData, setsearchData] = useState(null)

     const [mobileSearchTerm, setMobileSearchTerm] = useState("")
  const [mobileSearchData, setMobileSearchData] = useState(null)




     const [isDropdownVisible, setIsDropdownVisible] = useState(false);

         const toggleShopDropdown = () => {
         setIsDropdownVisible(!isDropdownVisible);
         };

         const closeDropdown = () => {
         setIsDropdownVisible(false);
         };

              const [isShopOpen, setIsShopOpen] = useState(false);
     const shopRef = useRef(null);


     const closeShopDropdown = () => {
         setIsShopOpen(false);
     };



     // Custom hook to detect screen size changes
        const useScreenSize = () => {
          const [isMobile, setIsMobile] = useState(false)

          useEffect(() => {
            const checkScreenSize = () => {
              setIsMobile(window.innerWidth < 1030)
            }

            checkScreenSize()
            window.addEventListener("resize", checkScreenSize)

            return () => window.removeEventListener("resize", checkScreenSize)
          }, [])

          return isMobile
        }

         //     // Handle click outside the dropdown to close it
     useEffect(() => {
         const handleClickOutside = (event) => {
             if (shopRef.current && !shopRef.current.contains(event.target)) {
                 closeShopDropdown();
             }
         };

         document.addEventListener('mousedown', handleClickOutside);
         return () => {
             document.removeEventListener('mousedown', handleClickOutside);
         };
     }, []);


     const isMobile = useScreenSize()

  // Close mobile menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [isMobile, mobileMenuOpen])
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])


   const [categories, setCategoriesData] = useState([]);
                 const [Loading, setLoading] = useState(true);
              useEffect(() => {
             const fetchCategories = async () => {
             try {
                 const response = await axios.get(`${server}/get-allcategories`);
                //   Assuming your API response has a `categories` key
                 const filteredData = response.data.categories;
                 setCategoriesData(filteredData);
             } catch (error) {
                 console.error('Error fetching categories:', error);
                 alert('Failed to fetch categories');
             } finally {
                 setLoading(false);
             }
             };

             fetchCategories();
         }, []);


   const goldCategories = categories.filter((category) => category.type === "gold")
 const silverCategories = categories.filter((category) => category.type === "silver")

 const ageGroups = [
  { key: "infants", label: "Infants (0-3 Yrs)" },
  { key: "kids", label: "Kids (3-10 Yrs)" },
  { key: "teens", label: "Teens" },
  { key: "momandme", label: "Mom & Me" },
]

 const priceRanges = [
  { min: 1000, max: 5000, label: "₹1,000 - ₹5,000" },
  { min: 5000, max: 10000, label: "₹5,000 - ₹10,000" },
  { min: 10000, max: 25000, label: "₹10,000 - ₹25,000" },
  { min: 25000, max: 50000, label: "₹25,000 - ₹50,000" },
  { min: 50000, max: 100000, label: "₹50,000 - ₹100,000" },
]

 const handleSearchChange = (e) => {
         e.preventDefault();
         const term = e.target.value;
         setsearchTerm(term);

         if (term === "") {
              // If the search term is empty, reset the searchData to null or empty array
             setsearchData(null);
         } else {
              // Filter the products based on the search term
             const filteredProducts = products && products.filter((product) => {
                  // Convert both name and SKU ID to lowercase for case-insensitive search
                 const lowerCaseTerm = term.toLowerCase();
                 const isProductLive = product?.isLive === undefined || product?.isLive;
                 return isProductLive &&(
                     product.name.toLowerCase().includes(lowerCaseTerm) ||
                     (product.skuid && product.skuid.toLowerCase().includes(lowerCaseTerm))
                 );
             });
             setsearchData(filteredProducts);
         }
     };

      const handleMobileSearchChange = (e) => {
    const term = e.target.value
    setMobileSearchTerm(term)

    if (term === "") {
      setMobileSearchData(null)
    } else {
      const filteredProducts = products && products?.filter((product) => {
        const lowerCaseTerm = term.toLowerCase()
        const isProductLive = product?.isLive === undefined || product?.isLive
        return (
          isProductLive &&
          (product.name.toLowerCase().includes(lowerCaseTerm) ||
            (product.skuid && product.skuid.toLowerCase().includes(lowerCaseTerm)))
        )
      })
      setMobileSearchData(filteredProducts)
    }
  }

   const resetSearch = () => {
    setsearchTerm("")
    setsearchData(null)
    setSearchOpen(false)
  }

    const resetMobileSearch = () => {
    setMobileSearchTerm("")
    setMobileSearchData(null)
  }


      const noFixedBgTransparentURLs = ['/', '/about', '/personalised-prosperity','/contacts'];

    // Check if current URL matches those
    const isUrlInList = noFixedBgTransparentURLs.includes(location.pathname);


    const submitHandle = (category, subcategory = null) => {
         closeDropdown()

        const subcategoryParam = subcategory ? `&subcategory=${subcategory.name}` : '';
        navigate(`/products?category=${category.title}${subcategoryParam}`);
         setMobileMenuOpen(false)
    };

         const submitHandleagegroup = (ageGroupKey) => {
         closeDropdown()

         if (!products || !ageGroupKey) {
             console.error("Products or ageGroupKey is missing");
             return;
         }
    
         let filteredProducts = [];
    
         if (ageGroupKey === "momandme") {
             // Include products where:
             // - `mom` is true (even if `infants` and `kids` are false)
             // - OR both `infants` and `kids` are true
             filteredProducts = products.filter(product =>
                 product.ageGroup &&
                 (product.ageGroup.mom === true || 
                 (product.ageGroup.infants === true && product.ageGroup.kids === true))
             );
         } else {
             // Filter for specific age group key
             filteredProducts = products.filter(product =>
                 product.ageGroup && product.ageGroup[ageGroupKey] === true
             );
         }
    

         navigate(`/products?ageGroup=${ageGroupKey}`, { state: { filteredProducts } });
          setMobileMenuOpen(false)

     };

        const { setPriceRange } = usePriceRange();
     const handlePriceFilter = (min, max) => {
        closeDropdown()


        setPriceRange([min, max]);
        setMobileMenuOpen(false)
        navigate(`/products?priceMin=${min}&priceMax=${max}`);

    };

    const buildQueryString = (min, max) => {
         return `?priceMin=${min}&priceMax=${max}`;
    };


     const searchBarRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the search bar
    const handleClickOutside = (event) => {
      // If the search bar is open AND
      // if the ref exists AND
      // if the clicked element is NOT inside the search bar's div
      if (searchOpen && searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setSearchOpen(false); // Close the search bar
        setsearchTerm("")
      }
    };

    // Add the event listener to the document when the search bar is open
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts or
    // when searchOpen changes (e.g., search bar closes)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

   const logoutHandler = () => {
      axios
        .get(`${server}/user/logout`, { withCredentials: true })
        .then((res) => {
          // toast.success(res.data.message);
          window.location.reload()
          navigate('/login', { replace: true });
        })
        .catch((error) => {
          console.error(error.response?.data?.message || 'Error during logout');
        });
    };

        const [isCurrencySelectorOpen, setIsCurrencySelectorOpen] = useState(false);

    const toggleCurrencySelector = () => {
        setIsCurrencySelectorOpen(!isCurrencySelectorOpen);
    };
    const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Default currency

        const [currencyDataz, setCurrencyDataz] = useState([]); // Initially empty object

     // Function to fetch currency data from API
     const fetchCurrencyData = async () => {
        try {
            const response = await fetch(`${server}/get-all-currencies`);
            const data = await response.json();
            setCurrencyDataz(data); // Set the fetched currency data
            
        } catch (error) {
            console.error('Error fetching currency data:', error);
        }
    };

    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
        dispatch(changeCurrency(currency)); // Dispatch action to update global currency state
        dispatch(initializeConversionRates(currency));
        toggleCurrencySelector(); // Close the selector after selecting
    };

    // useEffect(() => {
    //     if (selectedCurrency) {
    //       // Call handleCurrencySelect to set default currency and initialize rates
    //       handleCurrencySelect(selectedCurrency);
    //     }
    //   }, []); // Empty dependency array to run only once when component mounts

      // Fetch user's geolocation
  const fetchUserCountry = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/test");
      const data = await response.json();
      console.log(data,"data to show")
      return data.currency; // ISO 3166-1 alpha-2 country code
    } catch (error) {
      console.error("Error fetching user country:", error);
      return null; // Default fallback
    }

  };

          
    return (
      <header 
      className={cn(
          // Add space after fixed or sticky + mb-10
          ` ${isUrlInList ? 'fixed top-0 left-0 right-0 z-50' : 'sticky top-0  z-50'}  transition-all duration-300 `,
          isUrlInList
            ? (isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md py-2"
                : "bg-transparent py-4"
              )
            : "bg-white/95 backdrop-blur-md shadow-md py-2"
        )}>
        {/* Main Navigation */}
        <motion.div
         className="transition-all duration-300"
        initial="hidden"
        animate="visible"
        variants={navbarAnimation}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <MotionButton
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer mr-2 bg-transparent border-none shadow-none hover:bg-[#D8B4A0]/60"
                >
                  <Menu className="h-7 w-7 text-slate-950" />
                  <span className="sr-only">Toggle menu</span>
                </MotionButton>
              </SheetTrigger>
              <SheetContent side="left" className="w-[330px] sm:w-[350px] overflow-y-auto p-0">
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={mobileMenuAnimation}
                      className="flex flex-col h-full"
                    >

                      
                         <Button
                  variant="ghost"
                  size="icon"
                  className=" mt-3 ml-3 flex sm:hidden relative text-slate-800 hover:text-[#D7A295] hover:bg-[#D8B4A0]/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setOpenWishlist(true)
                  }}
                >
                  <Heart className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295]">
                    {wishlist && wishlist.length}
                  </Badge>
                  <span className="sr-only">Wishlist</span>
                </Button>
                      <div className="flex items-center justify-center px-4 pb-2">
                        <div className="w-4/4">

                        <Link
                          to="/"
                          className=" flex justify-center items-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <img
                            className="h-16 w-auto object-cover scale-110"
                            src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
                            alt="Tiny Tiaraa Logo"
                          />
                        </Link>
                        </div>

                        {/* <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileMenuOpen(false)}
                          className="hover:bg-[#D8B4A0]/10"
                        >
                          <X className="h-5 w-5 text-[#D8B4A0]" />
                          <span className="sr-only">Close menu</span>
                        </Button> */}
                      </div>
                      <Separator className="bg-[#D8B4A0]/20" />
                      <div className="flex-1 overflow-y-auto py-4">
                        <div className="space-y-4">
                          <div className="w-full px-4 relative">
                            <div className="w-full">
                            <Input
                              placeholder="Search products..."
                              className="w-full border-[#D8B4A0] focus:border-[#D7A295] text-sm"
                                value={mobileSearchTerm}
                                onChange={handleMobileSearchChange}
                            />
                             {mobileSearchTerm && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="absolute right-5 top-1/2 transform -translate-y-1/2 h-6 w-6"
                                  onClick={resetMobileSearch}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              )}
                              </div>
                          
                           {/* Mobile Search Results */}
                            {mobileSearchData && mobileSearchData.length > 0 && (
                              <div className="absolute left-4 right-4 top-full mt-1 bg-white shadow-lg rounded-md border z-50 min-h-full overflow-y-auto">
                                {mobileSearchData.map((product,index) => 
                                {
                                   const d = product.name;
                                const Product_name = d.replace(/\s+/g, "-")
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                                     onClick={() => {
                                         navigate(`/product/${Product_name}`)
                                          resetMobileSearch()
                                          
                                            }}>
                                  
                                    <img
                                      src={
                                             product.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                              ? product.images[1].url.replace(
                                                /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                               `${imgdburl}/uploads/images`
                                            )
                                       : `${imgdburl}${product.images[1]?.url}` 
                                      }
                                      alt={product.name}
                                      className="w-10 h-10 object-cover scale-125 rounded mr-3"
                                    />
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                      <p className="text-xs text-gray-500">{product.skuid}</p>
                                    </div>
                                  </div>
                                )})}
                              </div>
                            )}
                            </div>



                          <nav className="flex flex-col space-y-1 px-2">
                            <MotionLink
                              to="/"
                              className={cn(
                                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                pathname === "/"
                                  ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
                                  : "hover:bg-gradient-to-r hover:from-[#D8B4A0]/10 hover:to-[#D7A295]/10 text-gray-700",
                              )}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Home
                            </MotionLink>
                            <MotionLink
                              to="/about"
                              className={cn(
                                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                pathname === "/about"
                                  ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
                                  : "hover:bg-gradient-to-r hover:from-[#D8B4A0]/10 hover:to-[#D7A295]/10 text-gray-700",
                              )}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Our Story
                            </MotionLink>

                            <MobileAccordion title="Shop" defaultOpen={false} className="!bg-transparent">
                              <div className="pl-4 space-y-1">
                                <MobileAccordion title="Gold Collection">
                                  <div className="pl-4 space-y-1">
                                    {goldCategories.map((category) => (
                                      <MobileCategoryItem key={category._id.$oid} category={category} submitHandle={submitHandle}  />
                                    ))}
                                  </div>
                                </MobileAccordion>

                                <MobileAccordion title="Silver Collection">
                                  <div className="pl-4 space-y-1">
                                    {silverCategories.map((category) => (
                                      <MobileCategoryItem key={category._id.$oid} category={category} submitHandle ={submitHandle} />
                                    ))}
                                  </div>
                                </MobileAccordion>

                                <MobileAccordion title="Shop By Age">
                                  <div className="pl-4 space-y-1">
                                    {ageGroups.map((group,index) => (
                                      <div
                                        key={group.key || index}
                                       
                                        className=" cursor-pointer block px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#D8B4A0]/10 hover:to-[#D7A295]/10 rounded-md"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => { submitHandleagegroup(group.key) }}

                                      >
                                        {group.label}
                                      </div>
                                    ))}
                                  </div>
                                </MobileAccordion>

                                <MobileAccordion title="Shop By Price">
                                  <div className="pl-4 space-y-1">
                                    {priceRanges.map((range, index) => (
                                      <div
                                        key={index}
                                        
                                        className="cursor-pointer block px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#D8B4A0]/10 hover:to-[#D7A295]/10 rounded-md"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handlePriceFilter(range.min, range.max)}

                                      >
                                        {range.label}
                                      </div>
                                    ))}
                                  </div>
                                </MobileAccordion>
                              </div>
                            </MobileAccordion>

                            <MotionLink
                              to="/personalised-prosperity"
                              className={cn(
                                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                pathname === "/personalised-prosperity"
                                  ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
                                  : "hover:bg-gradient-to-r hover:from-[#D8B4A0]/10 hover:to-[#D7A295]/10 text-gray-700",
                              )}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Customization
                            </MotionLink>
                            <MotionLink
                              to="/contacts"
                              className={cn(
                                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                pathname === "/contacts"
                                  ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
                                  : "hover:bg-gradient-to-r hover:from-[#D8B4A0]/10 hover:to-[#D7A295]/10 text-gray-700",
                              )}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Contact Us
                            </MotionLink>
                          </nav>
                        </div>
                      </div>
                      <Separator className="bg-[#D8B4A0]/20" />
                      <div className="p-4">
                      {
                        isAuthenticated ? (
                          <div className='flex flex-col items-center mt-6 font-Poppins cursor-pointer' onClick={() => {
                            navigate("/profile");
                            setMobileMenuOpen(false);
                          }}>
                            {user?.avatar?.url && user?.avatar.url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) ? (
                              <img
                                src={user?.avatar.url
                                  .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
                                  .replace("/avatars/", "/products/")}
                                className="w-[60px] h-[60px] rounded-full"
                                alt="User Avatar"
                              />
                            ) : user?.avatar?.url ? (
                              <img
                                src={`${imgdburl}${user?.avatar?.url}`.replace("/avatars/", "/products/")}
                                className="w-[60px] h-[60px] rounded-full"
                                alt="User Avatar"
                              />
                            ) : (
                              <FaUserAlt className="w-[50px] h-[50px] text-gray-500 border-2 border-gray-500 rounded-full p-1" />
                            )}
                            <h3 className='capitalize font-[500] mt-2'>{user?.name}</h3>
                           <Button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-sm bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white rounded-md hover:opacity-90"
                            >
                            Dashboard
                          </Button>
                          </div>
                        ) : (
                          <div className="flex justify-center space-x-4">
                            <MotionButton
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-sm border border-[#D8B4A0] text-[#D8B4A0] rounded-md bg-transparent hover:bg-[#D8B4A0]/10"
                            >
                              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                            </MotionButton>
                            <MotionButton
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-sm bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] text-white rounded-md hover:opacity-90"
                            >
                              <Link to="/sign-up" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                            </MotionButton>
                          </div>
                        )
                      }
                    </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center">
                <img
                  className="w-20 h-20 "
                  src="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"
                  alt="Tiny Tiaraa Logo"
                />
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
               <NavigationMenuItem>
                <Link to="/" className="block">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium px-2 py-1 text-slate-900 hover:text-[#D7A295] bg-transparent hover:bg-transparent"
                    )}
                  >
                    <motion.span
                      className={cn(
                        "relative",
                        pathname === "/" &&
                          "text-[#D7A295] font-semibold after:content-[''] after:absolute after:left-0 after:mt-1 after:h-[2px] after:w-full after:bg-[#D7A295] after:rounded-full after:bottom-[-8px]"
                      )}
                      whileHover={{ y: -2 }}
                    >
                      Home
                    </motion.span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>


                <NavigationMenuItem>
                <Link to="/about" className="block">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium px-2 py-1 text-slate-900 hover:text-[#D7A295] bg-transparent hover:bg-transparent"
                    )}
                  >
                    <motion.span
                      className={cn(
                        "relative",
                        pathname === "/about" &&
                          "text-[#D7A295] font-semibold after:content-[''] after:absolute after:left-0 after:mt-2 after:h-[2px] after:w-full after:bg-[#D7A295] after:rounded-full after:bottom-[-8px]"
                      )}
                      whileHover={{ y: -2 }}
                    >
                      Our Story
                    </motion.span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>



                <NavigationMenuItem
                ref={shopRef}   
                  onMouseEnter={() => setIsDropdownVisible(true)} 
                  // onMouseLeave={(e) => {
                  //     if (!e.currentTarget.contains(e.relatedTarget)) {
                  //     setIsDropdownVisible(false);
                  //  }
                  //  }}
                   className={cn(
                      "text-sm font-medium !px-2 !py-1 text-slate-900 hover:text-[#D7A295] bg-transparent hover:bg-transparent"
                    )}
                  
                >
                  <NavigationMenuTrigger
                  onClick={()=> navigate("/products")}
                    className={cn(
                      "text-sm font-medium !px-1 py-2",
                      pathname.includes("/products")
                        ? " text-[#D7A295] !bg-transparent !hover:bg-transparent"
                        : "text-slate-900 !bg-transparent hover:text-[#D7A295] hover:bg-[#D8B4A0]/10",
                    )}



                  >
                    <motion.span 
                     className={cn(
                    "relative",
                    pathname.startsWith("/products") &&
                      "text-[#D7A295] !bg-transparent hover:bg-transparent font-semibold after:content-[''] after:absolute after:left-0 after:mt-2 after:h-[2px] after:w-full after:bg-[#D7A295] after:rounded-full after:bottom-[-8px]"
                  )}
                    onClick={toggleShopDropdown} whileHover={{ y: -2 }}>Shop</motion.span>
                  </NavigationMenuTrigger>
                  
                    {
                                     isDropdownVisible && (
                                      <NavigationMenuContent>
                    <div
                      className="grid grid-cols-3 gap-6 p-6 w-[900px]"
                    
                    >
                    <motion.div variants={fadeInUp}>
                    <h3 className="text-base font-medium mb-3 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] bg-clip-text text-transparent border-b pb-1">
                      Gold Collection
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {goldCategories.map((category) => (
                        <div key={category._id.$oid} className="group relative">
                          <div
                            
                            className="cursor-pointer flex items-center gap-2 p-1 hover:bg-[#D8B4A0]/10 rounded-md transition-colors"
                            whileHover={{ x: 5 }}
                            onClick={() => submitHandle(category)}
                          >
                            <div className="w-5 h-5 flex-shrink-0">
                              <img
                                src={`${imgdburl}${category?.image_Url?.url}`}
                                alt={category.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-xs group-hover:text-[#D7A295] transition-colors">
                              {category.title}
                            </span>
                            {category.subcategories.length > 0 && (
                              <ChevronRight className="h-3 w-3 ml-auto opacity-50" />
                            )}
                          </div>

                          {/* Subcategories shown to the right on hover */}
                          {category.subcategories.length > 0 && (
                            <div className="absolute left-full top-0 z-20 hidden group-hover:block bg-white shadow-lg rounded-md px-3 py-2 space-y-1 min-w-[150px]">
                              {category.subcategories.map((subcat) => (
                                <div
                                  key={subcat._id?.$oid || subcat._id || subcat.id}
                                
                                  className="cursor-pointer pl-2 !mb-2 block text-xs text-gray-600 hover:text-[#D7A295] transition-colors whitespace-nowrap"
                                  whileHover={{ x: 5 }}
                                  onClick={(e)=>{
                                    e.stopPropagation();
                                    submitHandle(category, subcat); 
                                  }}
                                >
                                  {subcat.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>


                      <motion.div variants={fadeInUp}>
                    <h3 className="text-base font-medium mb-3 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] bg-clip-text text-transparent border-b pb-1">
                      Silver Collection
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {silverCategories.map((category) => (
                        <div
                          key={category._id?.$oid || category._id}
                          className="group relative"
                        >
                          <div
                            className="flex items-center gap-2 p-1 hover:bg-[#D8B4A0]/10 rounded-md transition-colors cursor-pointer"
                            onClick={() => submitHandle(category)}
                          >
                            <div className="w-5 h-5 flex-shrink-0">
                              <img
                                src={`${imgdburl}${category?.image_Url?.url}`}
                                alt={category.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-xs group-hover:text-[#D7A295] transition-colors">
                              {category.title}
                            </span>
                            {category.subcategories.length > 0 && (
                              <ChevronRight className="h-3 w-3 ml-auto opacity-50" />
                            )}
                          </div>

                          {/* Subcategories appear to the LEFT on hover */}
                          {category.subcategories.length > 0 && (
                            <div className="absolute  left-full top-0 z-20 hidden group-hover:block bg-white shadow-lg rounded-md px-3 py-2 space-y-1 min-w-[150px]">
                              {category.subcategories.map((subcat,i) => (
                                <div
                                  key={subcat._id?.$oid || subcat?._id || subcat?.id || i}
                                  className="cursor-pointer pl-2 !mb-2 block text-xs text-gray-600 hover:text-[#D7A295] transition-colors whitespace-nowrap"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    submitHandle(category, subcat);
                                  }}
                                >
                                  {subcat.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                      <motion.div className="space-y-6" variants={fadeInUp}>
                        <div>
                          <h3 className="text-base font-medium mb-3 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] bg-clip-text text-transparent border-b pb-1">
                            Shop By Age
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {ageGroups.map((group) => (
                              <div
                                key={group.key}
                          
                                className="cursor-pointer group flex items-center gap-2 p-1 hover:bg-[#D8B4A0]/10 rounded-md transition-colors"
                                whileHover={{ x: 5 }}
                                onClick={() => { submitHandleagegroup(group.key) }}

                              >
                                <span className="text-xs group-hover:text-[#D7A295] transition-colors">
                                  {group.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium mb-3 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295] bg-clip-text text-transparent border-b pb-1">
                            Shop By Price
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            {priceRanges.map((range, index) => (
                              <div
                                key={index}
                                className="cursor-pointer group flex items-center gap-2 p-1 hover:bg-[#D8B4A0]/10 rounded-md transition-colors"
                                whileHover={{ x: 5 }}
                                onClick={() => handlePriceFilter(range.min, range.max)}
                              >
                                <span className="text-xs group-hover:text-[#D7A295] transition-colors">
                                  {range.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                                      </NavigationMenuContent>

                                     )
                  }
                  
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                <Link to="/personalised-prosperity" className="block">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium px-2 py-1 text-slate-900 hover:text-[#D7A295] bg-transparent hover:bg-transparent"
                    )}
                  >
                    <motion.span
                      className={cn(
                        "relative",
                        pathname === "/personalised-prosperity" &&
                          "text-[#D7A295] font-semibold after:content-[''] after:absolute after:left-0 after:mt-2 after:h-[2px] after:w-full after:bg-[#D7A295] after:rounded-full after:bottom-[-8px]"
                      )}
                      whileHover={{ y: -2 }}
                    >
                      Customization
                    </motion.span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contacts" className="block">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm font-medium px-2 py-1 bg-transparent hover:bg-transparent",
                        pathname === "/contacts"
                          ? "text-[#D7A295]"
                          : "text-slate-900 hover:text-[#D7A295]"
                      )}
                    >
                      <motion.span
                        className={cn(
                          "relative",
                          pathname === "/contacts" &&
                            "font-semibold after:content-[''] after:absolute after:left-0 after:mt-2 after:h-[2px] after:w-full after:bg-[#D7A295] after:rounded-full after:bottom-[-8px]"
                        )}
                        whileHover={{ y: -2 }}
                      >
                        Contact Us
                      </motion.span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>


              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side icons */}
            <motion.div
              className="flex items-center space-x-3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className={cn("relative transition-all duration-300", searchOpen ? "w-64" : "w-0 md:w-auto")}
                variants={fadeInUp}
                
              >
                <AnimatePresence mode="wait">
                {searchOpen ? (
                  <motion.div
                    key="search-bar"
                    className="relative w-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    ref={searchBarRef}
                  >
                    <div className="flex items-center relative">
                      <Input
                        placeholder="Search products..."
                        className="w-full pr-8 text-sm border-[#D7A295] focus:border-[#D7A295] focus:ring-[#D7A295] focus:ring-1 !focus:outline-none"
                        autoFocus
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-0 text-[#D7A295] hover:bg-transparent focus:bg-transparent active:bg-transparent"
                      onClick={() => setSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    </div>

                    {searchData && searchData.length !== 0 && (
                      <div className="absolute left-0 w-full mt-2 bg-slate-50 shadow-lg z-50 p-4 custom-scrollbar rounded-md overflow-y-auto max-h-[60vh]">
                        {searchData.map((i, index) => {
                          const d = i.name;
                          const Product_name = d.replace(/\s+/g, "-");

                          return (
                            <div
                              key={index}
                              onClick={() => {
                                navigate(`/product/${Product_name}`);
                                resetSearch();
                              }}
                              className="cursor-pointer hover:bg-slate-100 transition-all rounded-md p-2"
                            >
                              <div className="flex items-center space-x-3">
                                <img
                                  src={
                                    i.images[1]?.url?.match(
                                      /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/
                                    )
                                      ? i.images[1].url.replace(
                                          /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                          `${imgdburl}/uploads/images`
                                        )
                                      : `${imgdburl}${i.images[1]?.url}`
                                  }
                                  alt=""
                                  className="w-[60px] h-[50px] object-contain"
                                />
                                <p className="font-Poppins text-[12px]">{i.name}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="search-icon"
                    variants={fadeInUp}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer hidden md:flex text-slate-800 hover:text-[#D7A295] hover:bg-[#D8B4A0]/10"
                      onClick={() => setSearchOpen(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>


              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex relative text-slate-800 hover:text-[#D7A295] hover:bg-[#D8B4A0]/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpenWishlist(true)}
                >
                  <Heart className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295]">
                    {wishlist && wishlist.length}
                  </Badge>
                  <span className="sr-only">Wishlist</span>
                </Button>
                 {
                  openWishlist ?
                  (
                    <Wishlist setOpenWishlist={setOpenWishlist} />
                                     )
                                     :
                                     null
                             }
              </motion.div>

              <motion.div variants={fadeInUp}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hidden md:flex text-slate-800 hover:text-[#D7A295] hover:bg-[#D8B4A0]/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <User className="h-5 w-5" />
                      <span className="sr-only">Account</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 p-2">
                    {
                      isAuthenticated ?
                       (
                        <>
                        
                        <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/profile" className="flex w-full items-center text-sm py-1.5">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>

                       
                    </DropdownMenuItem>
                        <DropdownMenuItem asChild className="cursor-pointer">

                    <button
                      variant="ghost"
                      onClick={logoutHandler}
                      className="w-full justify-start text-red-600 !hover:text-red-700 hover:bg-red-300"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </button>
                    </DropdownMenuItem>

                        </>
                       )
                       :
                       (
                        <>
                        <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/login" className="flex w-full items-center text-sm py-1.5">
                        <User className="mr-2 h-4 w-4" />
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link to="/sign-up" className="flex w-full items-center text-sm py-1.5">
                        <User className="mr-2 h-4 w-4" />
                        Sign Up
                      </Link>
                    </DropdownMenuItem>
                        
                        </>
                       )
                    }
                    
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer relative text-slate-900 hover:text-[#D7A295] hover:bg-[#D8B4A0]/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                 onClick={()=>{
                  navigate("/cart")
                 }} 
                >
                  <ShoppingBag className="h-5 w-5" />
                  {
                    cart && cart.length > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-[#D8B4A0] to-[#D7A295]">
                    { cart.length}
                  </Badge>
                    )
                  }
                 
                  <span className="sr-only">Cart</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

function MobileAccordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[#D8B4A0]/10 last:border-0 ">
      <MotionButton
        className="group cursor-pointer flex w-full items-center justify-between px-3 py-2 text-sm font-medium bg-transparent  hover:text-[#D7A295] hover:bg-[#D8B4A0]/10  text-gray-700"

        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-gray-700 group-hover:text-[#D7A295]">{title}</span>
        <motion.div animate={isOpen ? "open" : "closed"} variants={rotateChevron} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-slate-900" />
        </motion.div>
      </MotionButton>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="py-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileCategoryItem({ category ,submitHandle }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentCategory = searchParams.get("category")
  const isActive = currentCategory === category.title


  if (category.subcategories.length === 0) {
    return (
      <div
        className={cn(
          "cursor-pointer block px-3 py-2 text-sm rounded-md",
          isActive
            ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
            : "text-gray-700 hover:bg-[#D8B4A0]/10",
        )}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
          onClick={() => submitHandle(category)}

      >

         <div className="flex items-center gap-2">
            <img
               src={`${imgdburl}${category?.image_Url?.url}`}
              alt={category.title}
              className="w-4 h-4 object-contain"
            />

        {category.title}
        </div>
      </div>
    )
  }

  return (

   
    <div>
      <div className="flex items-center">
        <div
         
          className={cn(
            "flex-1 px-3 py-2 text-sm rounded-md",
            isActive
              ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
              : "text-gray-700 hover:bg-[#D8B4A0]/10",
          )}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => submitHandle(category)}
        >

          <div className="flex items-center gap-2">
            <img
               src={`${imgdburl}${category?.image_Url?.url}`}
              alt={category.title}
              className="w-4 h-4 object-contain"
            />

        {category.title}
        </div>

         
       

        </div>
        <Button
          variant="ghost"
          size="icon"
          className="p-1.5 text-slate-900 bg-[#f6d1c8] h-8 w-8"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
        >
          <motion.div animate={isOpen ? "open" : "closed"} variants={rotateChevron} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-3 w-3" />
          </motion.div>
        </Button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pl-4"
          >
            <div className="py-1">
              {category.subcategories.map((subcategory) => {
                const isSubActive = searchParams.get("subcategory") === subcategory.name && isActive

                return (
                  <div
                    key={subcategory._id.$oid}
                    className={cn(
                      "block px-3 py-1.5 text-sm rounded-md",
                      isSubActive
                        ? "bg-gradient-to-r from-[#D8B4A0]/20 to-[#D7A295]/20 text-[#D7A295]"
                        : "text-gray-700 hover:bg-[#D8B4A0]/10",
                    )}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                     onClick={(e) => {
                         e.stopPropagation();
                       submitHandle(category, subcategory);
                       }}

                  >
                    {subcategory.name}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>


  )
}

export default Navbar

