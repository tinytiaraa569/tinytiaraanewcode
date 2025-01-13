import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '@/server';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { GiGoldBar, GiMetalBar } from 'react-icons/gi';
import { MdCategory, MdMiscellaneousServices } from 'react-icons/md';
import { TbCategoryMinus } from 'react-icons/tb';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaShippingFast, FaTools } from 'react-icons/fa';
import { FaHandHoldingDollar } from "react-icons/fa6";
import swal from 'sweetalert';


const RateCard = () => {
    const { products  } = useSelector((state) => state.products);
    const [goldRate, setGoldRate] = useState(0);
    const [silverRate, setSilverRate] = useState(0);

    const [diamondRate, setDiamondRate] = useState(0);
    const [labourCharge, setLabourCharge] = useState(0);
    const [shipping, setshipping] = useState(0);
    const [gstCharge, setgstCharge] = useState(0);

    
    const [miscellaneous, setMiscellaneous] = useState(0);

    const [type, setType] = useState(''); // To store the selected type (Gold, Silver, Coin)
    const [category, setCategory] = useState(''); // To store selected category
    const [subcategory, setSubcategory] = useState(''); // To store selected subcategory
    const [categoriesData, setCategoriesData] = useState([]); // To store all categories data
    const [loading, setLoading] = useState(false); // To handle loading state
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(true); // State for toggling visibility


    const toggleProductsVisibility = () => {
        setShowProducts(!showProducts);
    };
    console.log(products,"from rate card component ")
    

    useEffect(() => {
        window.scrollTo(0, 0)


        const fetchCategories = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${server}/get-allcategories`);
                const filteredData = response.data.categories.filter(i => i.title !== 'Coming Soon ...');
                setCategoriesData(filteredData);
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('Failed to fetch categories');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
      }, [])


     

    //   useEffect(() => {
    //     // Parse all values to ensure they're treated as numbers before calculation
    //     const total = 
    //         parseFloat(goldRate) +
    //         parseFloat(diamondRate) +
    //         parseFloat(shipping) +
    //         parseFloat(labourCharge) +
    //         parseFloat(miscellaneous);
    
    //     // Calculate GST (3% of the total)
    //     setgstCharge(total * 0.03); // GST is 3%
    // }, [goldRate,silverRate, diamondRate, shipping, labourCharge, miscellaneous]);
    
    // const handleSubmit = async (e) => {
       

    //     e.preventDefault();
        


    //     try {
    //         await axios.post(`${server}/product/update-rate-card`, {
    //             goldRate,
    //             silverRate,
    //             diamondRate,
    //             labourCharge,
    //             shipping,
    //             miscellaneous,
    //             // gstCharge,
    //             categoryFilter: type,
    //             category,
    //             subcategory,
    //             selectedProducts

    //         });
    //         toast.success('Rate card updated successfully!');
    //         setSelectedProducts([])
    //         setGoldRate(0)
    //         setSilverRate(0)
    //         setDiamondRate("")
    //         setLabourCharge("")
    //         setMiscellaneous("")
    //         setshipping("")
    //         setType("")
    //         setCategory("")
    //         setSubcategory("")
    //         // setgstCharge(0)

    //     } catch (error) {
    //         console.error('Error updating rate card:', error);
    //         toast.error('Failed to update rate card.');
    //     }
    // };



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willUpdate) => {
            if (willUpdate) {
                try {
                    // Send data to the backend
                    await axios.post(`${server}/product/update-rate-card`, {
                        goldRate,
                        silverRate,
                        diamondRate,
                        labourCharge,
                        shipping,
                        miscellaneous,
                        categoryFilter: type,
                        category,
                        subcategory,
                        selectedProducts,
                    });
    
                    // Show success toast
                    // toast.success("Rate card updated successfully!");
                    swal("Updated!", "Rate card updated successfully!", "success");
    
                    // Reset form fields
                    setSelectedProducts([]);
                    setGoldRate(0);
                    setSilverRate(0);
                    setDiamondRate("");
                    setLabourCharge("");
                    setMiscellaneous("");
                    setshipping("");
                    setType("");
                    setCategory("");
                    setSubcategory("");
                } catch (error) {
                    console.error("Error updating rate card:", error);
                    // Show error toast
                    // toast.error("Failed to update rate card.");
                    swal("Error!", "TFailed to update rate card.", "error");

                }
            } else {
                // Show cancellation message
                swal("Cancelled", "The rate card update was cancelled.", "info");
            }
        });
    };
    
    const handleTypeChange = (e) => {
        setType(e.target.value);
        setCategory('');
        setSubcategory('');
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory('');
    };

    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    };

    // Filter categories based on the selected type
    const filteredCategories = categoriesData.filter((cat) => cat.type === type.toLowerCase());

    console.log(type,"type of ratecrad")

    const filteredProducts = products.filter((product) => {
        if (subcategory === "No Products") {
            return product.category === category; // Show all products based on category if no subcategory is available
        } else if (subcategory) {
            return product.category === category && product.subcategory === subcategory; // Filter by both category and subcategory
        } else {
            return product.category === category; // Show all products based on category if no subcategory is selected
        }
    });

    const handleProductSelect = (productId) => {
        if (selectedProducts.includes(productId)) {
            // If the product is already selected, remove it from the list
            setSelectedProducts(selectedProducts.filter((id) => id !== productId));
        } else {
            // If the product is not selected, add it to the list
            setSelectedProducts([...selectedProducts, productId]);
        }
    };
     const location = useLocation();
    
        // Get the last segment of the URL (e.g., "dashboard" or "overview")
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const currentPage = pathSegments[pathSegments.length - 1];
      
        // You can map the path segment to a more readable name
        const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1); // Capitalize first letter
    
    return (
        <div className="min-w-[82%]  flex-grow px-16 pt-1 mt-3 bg-white">
            <h2 className='text-[22px] font-[500]'>Update Rate Card</h2>
            <nav aria-label="Breadcrumb" className="text-sm mb-5 text-gray-600  mt-1">
                                        <ol className="flex space-x-2">
                                        <li>
                                            <Link to={"/dashboard"} className="hover:text-blue-500">Home</Link>
                                        </li>
                                        <li>&gt;</li> {/* Separator */}
                                        <li>
                                            <span className="text-gray-400">{breadcrumbText}</span> {/* Active breadcrumb */}
                                        </li>
                                        </ol>
                                    </nav>

            <div className='bg-white shadow-2xl border border-gray-100 rounded-[8px] px-16 pt-4 pb-10'>
            <h3 class="text-center text-2xl font-semibold text-gray-800 ">Rate Card</h3>
            <p class="text-center text-sm text-gray-600 mb-3">Will change all the product prices of the selected items.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>   
                    <div className='flex  items-center text-gray-700'>
                    <GiMetalBar />
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 ml-1"> Metal Type</label>

                    </div>
                    
                    <select
                        id="type"
                        value={type}
                        onChange={handleTypeChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    >
                        <option value="">Choose a Type</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Coin">Coin</option>
                    </select>
                </div>
            <div>   
                    <div className='flex  items-center text-gray-700'>
                    <MdCategory />
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 ml-1">Category</label>
                    </div>

                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        disabled={!type}
                    >
                        <option value="">Choose a Category</option>
                        {filteredCategories.map((cat) => (
                            <option key={cat.id} value={cat.title}>{cat.title}</option>
                        ))}
                    </select>
                </div>

                {/* Subcategory Selection */}
                <div>
                    <div className='flex items-center text-gray-700'>
                    <TbCategoryMinus />
                    <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 ml-1">Subcategory</label>
                    </div>
                    <select
                        id="subcategory"
                        value={subcategory}
                        onChange={handleSubcategoryChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        disabled={!category}
                    >
                        <option value="">Choose a Subcategory</option>
                        {category &&
                            categoriesData
                                .find((cat) => cat.title === category)
                                ?.subcategories.length > 0 ? (
                                categoriesData
                                    .find((cat) => cat.title === category)
                                    ?.subcategories.map((subcat, index) => (
                                        <option key={index} value={subcat.name}>{subcat.name}</option>
                                    ))
                            ) : (
                                <option value="No Products">No Products</option>
                            )}
                    </select>
                </div>

               {
                subcategory && (
                    <button
                    type="button"
                    onClick={toggleProductsVisibility}
                    className="p-2 text-gray-700 font-semibold rounded-lg shadow-md hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center space-x-2"
                >
                    {showProducts ? (
                        <>
                            <FiEyeOff className="w-4 h-4" />
                        </>
                    ) : (
                        <>
                            <FiEye className="w-4 h-4" />
                        </>
                    )}
                </button>
                )
               } 

                {/* Manual Product Selection */}
                {showProducts && subcategory && (
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700">Select Products</h3>
                                        <div className="space-y-2">
                                            {filteredProducts.map((product) => (
                                                <div key={product._id} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={`product-${product._id}`}
                                                    checked={selectedProducts.includes(product._id)} // Correctly bind checked state
                                                    onChange={() => handleProductSelect(product._id)} // Handle checkbox click
                                                    className="mr-3"
                                                />
                                                <label htmlFor={`product-${product._id}`} className="text-sm text-gray-700 mr-2">{product.skuid}</label>
                                                <label htmlFor={`product-${product._id}`} className="text-sm text-gray-700">({product.name})</label>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                <div>
                    <div className='flex items-center text-gray-700'>
                    <GiGoldBar />
                    <label htmlFor="goldRate" className="block text-sm font-medium text-gray-700 ml-1">{type} Rate (per gram) x {type} Weight</label>
                    </div>
                    <input
                        id="goldRate"
                        type="number"
                        // value={goldRate}
                        value={type.toLowerCase() === "silver" ? silverRate : goldRate}
                        // onChange={(e) => setGoldRate(e.target.value)}
                        onChange={(e) => {
                            // const { value } = e.target;
                            if (type.toLowerCase() === 'gold') {
                                setGoldRate(e.target.value);
                            } else if (type.toLowerCase() === 'silver') {
                                setSilverRate(e.target.value);
                            }
                        }}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <div className='flex items-center text-gray-700'>
                    <IoDiamondOutline />
                    <label htmlFor="diamondRate" className="block text-sm font-medium text-gray-700 ml-1">Diamond Rate (per carat) x Diamond Weight</label>
                    </div>

                    <input
                        id="diamondRate"
                        type="number"
                        value={diamondRate}
                        onChange={(e) => setDiamondRate(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <div className='flex items-center text-gray-700'>
                    <FaTools />
                    <label htmlFor="labourCharge" className="block text-sm font-medium text-gray-700 ml-1">Labour Charge</label>
                    </div>

                    <input
                        id="labourCharge"
                        type="number"
                        value={labourCharge}
                        onChange={(e) => setLabourCharge(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                    <div className='flex items-center text-gray-700'>
                    <FaShippingFast />

                    <label htmlFor="ShippingCharge" className="block text-sm font-medium text-gray-700 ml-1">Shipping Charge</label>
                    </div>
                    <input
                        id="ShippingCharge"
                        type="text"
                        value={shipping}
                        onChange={(e) => setshipping(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
               
                <div>
                <div className='flex items-center text-gray-700'>
                    <MdMiscellaneousServices />
                    <label htmlFor="miscellaneous" className="block text-sm font-medium text-gray-700 ml-1">Miscellaneous</label>
                </div>
                    <input
                        id="miscellaneous"
                        type="number"
                        value={miscellaneous}
                        onChange={(e) => setMiscellaneous(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>
                <div>
                <div className='flex items-center text-gray-700'>
                    <FaHandHoldingDollar />
                    <label htmlFor="Gst Charge" className="block text-sm font-medium text-gray-700 ml-1">Gst 3%</label>
                </div>

                    <input
                        id="Gst Charge"
                        type="text"
                        // value={"(goldCost + diamondCost + shipping + totalLabour + miscCharge) * 0.03;"}
                        value={"(GoldRate/SilverRate) + (DiamondRate) + (Labour) + (Shipping) + (Miscellaneous)"}
                        disabled
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Update Rate Card
                </button>
            </form>
            </div>
        </div>
    );
};

export default RateCard;



// calculation of price updation 


// const calculatePrice = () => {
//     const goldWeight = 3.28; // Example weight; you can fetch this from your product data
//     const diamondWeight = 0.01; // Example weight

//     const goldCost = goldRate * goldWeight;
//     const diamondCost = diamondRate * diamondWeight;
//     const totalLabour = parseFloat(labourCharge);
//     const miscCharge = parseFloat(miscellaneous || 0);
//     const gst = (goldCost + diamondCost + totalLabour + miscCharge) * 0.03; // 3% GST

//     const totalPrice = goldCost + diamondCost + totalLabour + gst + miscCharge;
//     return totalPrice.toFixed(2);
// };