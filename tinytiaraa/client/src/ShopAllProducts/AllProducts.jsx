import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProductShop } from '../redux/actions/product';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineStar, AiOutlineWarning } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { DataGrid } from '@mui/x-data-grid';
import * as XLSX from 'xlsx'; // Import XLSX library
import { FaFileExcel } from 'react-icons/fa';
import { MdRateReview, MdUpload } from 'react-icons/md';
import axios from 'axios';
import { server } from '@/server';
import swal from 'sweetalert';
import { Switch } from '@mui/material';


function AllProducts() {
    const { seller } = useSelector((state) => state.seller);
    const { products = [], isLoading } = useSelector((state) => state.products);
    console.log(products,"al products data ")

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategoryType, setSelectedCategoryType] = useState(""); // 'gold' or 'silver'
    const [categoriesData, setCategoriesData] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
        window.location.reload();
    };

    const handleEdit = (id) => {
        navigate(`/editproduct/${id}`);
    };

    useEffect(() => {
        dispatch(getAllProductShop(seller._id));
    }, [dispatch]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${server}/get-allcategories`);
                setCategoriesData(response.data.categories); // Store all categories
            } catch (error) {
                console.error("Error fetching categories:", error);
                alert("Failed to fetch categories");
            } 
        };
    
        fetchCategories();
    }, []);
    
    // Function to determine if a product belongs to 'gold' or 'silver'
    const getProductType = (productCategory) => {
        const categoryMatch = categoriesData.find(category => 
            category.title.toLowerCase() === productCategory.toLowerCase()
        );
        return categoryMatch?.type === "gold" ? "gold" : "silver";
    };
    
    // Function to filter products based on search & selected category type
    const filterProducts = () => {
        if (!products) return;
    
        const filtered = products.filter((product) => {
            const productType = getProductType(product.category);
            
            const matchesCategory = selectedCategoryType ? productType === selectedCategoryType : true;
            const matchesSearch = searchQuery
                ? product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  product.skuid?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  product?.category?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  product?.subcategory?.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
    
            return matchesCategory && matchesSearch;
        });
    
        setFilteredProducts(filtered);
    };
    
    // Run filter function when dependencies change
    useEffect(() => {
        filterProducts();
    }, [products, searchQuery, selectedCategoryType, categoriesData]);

    const checkLowStock = (item) => {
        let isLowStock = false;

        // Check Metalcolorstock
        if (item.Metalcolorstock) {
            for (let key in item.Metalcolorstock) {
                if (item.Metalcolorstock[key] !== null && item.Metalcolorstock[key] <= 1) {
                    isLowStock = true;
                    break;
                }
            }
        }

        // Check Enamelcolorstock if Metalcolorstock didn't trigger low stock
        if (!isLowStock && item.Enamelcolorstock) {
            for (let enamelKey in item.Enamelcolorstock) {
                const enamelStock = item.Enamelcolorstock[enamelKey];
                for (let key in enamelStock) {
                    if (enamelStock[key] !== null && enamelStock[key] <= 1) {
                        isLowStock = true;
                        break;
                    }
                }
                if (isLowStock) break;
            }
        }

        // Check the general stock if neither Metalcolorstock nor Enamelcolorstock triggered low stock
        if (!isLowStock && item.stock !== null && item.stock <= 1) {
            isLowStock = true;
        }

        return isLowStock;
    };
    
    const handleLiveStatusToggle = async (productId) => {
        // Handle toggling the "isLive" status here. This could be a dispatch to update the status in the backend.
        console.log(`Toggling live status for product: ${productId}`);
        try {
            const response = await fetch(`${server}/product/status/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update live status');
            }
    
            const data = await response.json();
    
            // Update the local state
            setFilteredProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === productId
                        ? { ...product, isLive: data.isLive }
                        : product
                )
            );
        } catch (error) {
            console.error('Error updating live status:', error.message);
        }
    };
    const rows = filteredProducts?.map((item) => {
        const calculateStockCount = (stockData) => {
            if (!stockData || typeof stockData !== 'object') return 0;
    
            return Object.values(stockData).reduce((total, value) => {
                if (typeof value === 'object') {
                    return total + calculateStockCount(value); // Recursive for nested objects
                }
                return total + (typeof value === 'number' ? value : 0);
            }, 0);
        };

        const normalStockCount = item?.stock;
        const metalStockCount = calculateStockCount(item?.Metalcolorstock);
        const enamelStockCount = calculateStockCount(item?.Enamelcolorstock);
        const combinationStockCount = calculateStockCount(item?.combinationStocks);

        const productCategory = item?.category;
        const productType = categoriesData.some(category => 
            category.title.toLowerCase().includes(productCategory?.toLowerCase()) && category.type === 'gold'
        ) ? 'gold' : 'silver';


         // Determine which category to show based on available stock data
            let stockToShow = 'Not Upadted'; // Default value if no stock available
            if (normalStockCount > 0) {
                stockToShow = normalStockCount;
            } else if (metalStockCount > 0) {
                stockToShow = metalStockCount;
            } else if (enamelStockCount > 0) {
                stockToShow = enamelStockCount;
            } else if (combinationStockCount > 0) {
                stockToShow = combinationStockCount;
            }
        return {
            id: item._id,
            skuid: item.skuid,
            name: item.name,
            price: `₹ ${item.discountPrice}`,
            Stock:stockToShow,
            // Stock: item.stock !== null ? item.stock : 'M/E',
            sold: item?.sold_out, // Replace with actual sold count if available
            isLowStock: checkLowStock(item),
            isLive: item?.isLive,
            productType: productType,
        };
    });

    const columns = [
        // { field: 'id', headerName: 'Product Id', minWidth: 150, flex: 0.7 },
        { field: 'skuid', headerName: 'Sku Id', minWidth: 120, flex: 0.7 },
        { field: 'name', headerName: 'Name', minWidth: 180, flex: 1.4 },
        { field: 'sold', headerName: 'Sold out', type: 'number', minWidth: 100, flex: 0.6 },
        { field: 'price', headerName: 'Price', minWidth: 100, flex: 0.6 },
        { field: 'Stock', headerName: 'Stock', type: 'number', minWidth: 80, flex: 0.5 },

        {
            field: 'LowStock',
            headerName: 'Low Stock',
            flex: 0.8,
            minWidth: 100,
            sortable: false,
            renderCell: (params) => (
                params.row.isLowStock ? <AiOutlineWarning size={20} color="red" /> : null
            ),
        },
        {
            field: 'isLive',
            headerName: 'Live Status',
            flex: 1,
            minWidth: 120,
            renderCell: (params) => (
                <div>
                    <Switch
                        checked={params.row?.isLive}
                        onChange={() => handleLiveStatusToggle(params.row.id)}
                        color={params.row.isLive ? 'primary' : 'default'}
                        name={`liveSwitch-${params.row.id}`}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                                color: 'green', // Set the color to green when checked
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: 'green', // Set the track color to green when checked
                            },
                        }}
                    />
                </div>
            ),
        },
        {
            field: 'Preview',
            headerName: 'Preview',
            flex: 0.8,
            minWidth: 100,
            sortable: false,
            renderCell: (params) => (
                <Link to={`/shopproduct/${params.row.id}`}>
                    <button>
                        <AiOutlineEye size={20} />
                    </button>
                </Link>
            ),
        },
        {
            field: 'Edit',
            headerName: 'Edit',
            flex: 0.8,
            minWidth: 100,
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleEdit(params.id)}>
                    <AiOutlineEdit size={20} />
                </button>
            ),
        },
        {
            field: 'Review',
            headerName: 'Review',
            flex: 0.4,
            minWidth: 70,
            sortable: false,
            renderCell: (params) => (
                <Link to={`/product-review/${params.row.id}`}>
                    <button>
                        <MdRateReview  size={18}  />
                    </button>
                </Link>
            ),
        },
        // {
        //     field: 'Delete',
        //     headerName: 'Delete',
        //     flex: 0.8,
        //     minWidth: 120,
        //     sortable: false,
        //     renderCell: (params) => (
        //         <button onClick={() => handleDelete(params.id)}>
        //             <AiOutlineDelete size={20} />
        //         </button>
        //     ),
        // },
        {
            field: 'Delete',
            headerName: 'Delete',
            flex: 0.8,
            minWidth: 120,
            sortable: false,
            renderCell: (params) => (
                <button
                    onClick={() => {
                        // Show SweetAlert confirmation dialog
                        swal({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            buttons: ["Cancel", "Delete"],
                            dangerMode: true,
                        }).then((willDelete) => {
                            if (willDelete) {
                                // If user confirms, call the handleDelete function
                                handleDelete(params.id);
                            } else {
                                // If user cancels, just close the dialog
                                swal("Your data is safe!");
                            }
                        });
                    }}
                >
                    <AiOutlineDelete size={20} />
                </button>
            ),
        },

    ];

    const fileInputRef = useRef(null);
  

    const handleExportToExcel = (productsdata) => {

    
        // Transform the product data into an array of objects for the Excel sheet
        const excelData = productsdata.map((product) => ({
            ID: product._id || "-",
            SKU: product.skuid || "-",
            Name: product.name || "-",
            OriginalPrice: product.originalPrice || "-",
            Price: product.discountPrice || "-",
            Stock: product.stock || "-",
            Sold_Out: product.sold_out || "-",
            Category: product.category || "-",
            Subcategory: product.subcategory || "-",
            Description: product.description || "-",

            // Metl colr 
            YellowGold_MetalColor: 
            (product.MetalColor?.YellowGoldclr?.length > 0 ? "✓" : "-"),
        
            RoseGold_MetalColor: 
            (product.MetalColor?.RoseGoldclr?.length > 0 ? "✓" : "-"),
                
            WhiteGold_MetalColor: 
            (product.MetalColor?.WhiteGoldclr?.length > 0 ? "✓" : "-"),

            // Nested MetalColorStock
            Stock_YellowGoldStock_MetalColor: product.Metalcolorstock?.YellowGoldclrStock || "-",
            Stock_RoseGoldStock_MetalColor: product.Metalcolorstock?.RoseGoldclrStock || "-",
            Stock_WhiteGoldStock_MetalColor: product.Metalcolorstock?.WhiteGoldclrStock || "-",

            // ENamel color 
            Black_EnamelColor: 
            (product.enamelColors?.Black?.blackYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Black?.blackYellowGoldclr?.length > 0 && product.enamelColors?.Black?.blackRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Black?.blackRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Black?.blackRoseGoldclr?.length > 0 && product.enamelColors?.Black?.blackWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Black?.blackWhiteGoldclr?.length > 0 ? "WG" : "") ||
            "-",
        
            DeepBlue_EnamelColor: 
            (product.enamelColors?.Deep_Blue?.deepblueYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Deep_Blue?.deepblueYellowGoldclr?.length > 0 && product.enamelColors?.Deep_Blue?.deepblueRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Deep_Blue?.deepblueRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Deep_Blue?.deepblueRoseGoldclr?.length > 0 && product.enamelColors?.Deep_Blue?.deepblueWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Deep_Blue?.deepblueWhiteGoldclr?.length > 0 ? "WG" : "") || 
            "-",
        
            DeepGreen_EnamelColor: 
            (product.enamelColors?.Deep_Green?.deepgreenYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Deep_Green?.deepgreenYellowGoldclr?.length > 0 && product.enamelColors?.Deep_Green?.deepgreenRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Deep_Green?.deepgreenRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Deep_Green?.deepgreenRoseGoldclr?.length > 0 && product.enamelColors?.Deep_Green?.deepgreenWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Deep_Green?.deepgreenWhiteGoldclr?.length > 0 ? "WG" : "") || 
            "-",
        
            LotusGreen_EnamelColor: 
            (product.enamelColors?.Lotus_Green?.lotusgreenYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Lotus_Green?.lotusgreenYellowGoldclr?.length > 0 && product.enamelColors?.Lotus_Green?.lotusgreenRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Lotus_Green?.lotusgreenRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Lotus_Green?.lotusgreenRoseGoldclr?.length > 0 && product.enamelColors?.Lotus_Green?.lotusgreenWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Lotus_Green?.lotusgreenWhiteGoldclr?.length > 0 ? "WG" : "") || 
            "-",
        
            Pink_EnamelColor: 
            (product.enamelColors?.Pink?.pinkYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Pink?.pinkYellowGoldclr?.length > 0 && product.enamelColors?.Pink?.pinkRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Pink?.pinkRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Pink?.pinkRoseGoldclr?.length > 0 && product.enamelColors?.Pink?.pinkWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Pink?.pinkWhiteGoldclr?.length > 0 ? "WG" : "") || 
            "-",
        
            Red_EnamelColor: 
            (product.enamelColors?.Red?.redYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Red?.redYellowGoldclr?.length > 0 && product.enamelColors?.Red?.redRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Red?.redRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Red?.redRoseGoldclr?.length > 0 && product.enamelColors?.Red?.redWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Red?.redWhiteGoldclr?.length > 0 ? "WG" : "") || 
            "-",
        
            Turquoise_EnamelColor: 
            (product.enamelColors?.Turquoise?.turquoiseYellowGoldclr?.length > 0 ? "YG" : "") +
            (product.enamelColors?.Turquoise?.turquoiseYellowGoldclr?.length > 0 && product.enamelColors?.Turquoise?.turquoiseRoseGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Turquoise?.turquoiseRoseGoldclr?.length > 0 ? "RG" : "") +
            (product.enamelColors?.Turquoise?.turquoiseRoseGoldclr?.length > 0 && product.enamelColors?.Turquoise?.turquoiseWhiteGoldclr?.length > 0 ? "+" : "") +
            (product.enamelColors?.Turquoise?.turquoiseWhiteGoldclr?.length > 0 ? "WG" : "") || 
            "-",

            // Nested EnamelColorStock
            Stock_Black_YellowGold_EnamelColor: product.Enamelcolorstock?.black?.blackYellowGoldclrStock || "-",
            Stock_Black_RoseGold_EnamelColor: product.Enamelcolorstock?.black?.blackRoseGoldclrStock || "-",
            Stock_Black_WhiteGold_EnamelColor: product.Enamelcolorstock?.black?.blackWhiteGoldclrStock || "-",
            Stock_DeepBlue_YellowGold_EnamelColor: product.Enamelcolorstock?.deepblue?.deepblueYellowGoldclrStock || "-",
            Stock_DeepBlue_RoseGold_EnamelColor: product.Enamelcolorstock?.deepblue?.deepblueRoseGoldclrStock || "-",
            Stock_DeepBlue_WhiteGold_EnamelColor: product.Enamelcolorstock?.deepblue?.deepblueWhiteGoldclrStock || "-",
            Stock_DeepGreen_YellowGold_EnamelColor: product.Enamelcolorstock?.deepgreen?.deepgreenYellowGoldclrStock || "-",
            Stock_DeepGreen_RoseGold_EnamelColor: product.Enamelcolorstock?.deepgreen?.deepgreenRoseGoldclrStock || "-",
            Stock_DeepGreen_WhiteGold_EnamelColor: product.Enamelcolorstock?.deepgreen?.deepgreenWhiteGoldclrStock || "-",
            Stock_LotusGreen_YellowGold_EnamelColor: product.Enamelcolorstock?.lotusgreen?.lotusgreenYellowGoldclrStock || "-",
            Stock_LotusGreen_RoseGold_EnamelColor: product.Enamelcolorstock?.lotusgreen?.lotusgreenRoseGoldclrStock || "-",
            Stock_LotusGreen_WhiteGold_EnamelColor: product.Enamelcolorstock?.lotusgreen?.lotusgreenWhiteGoldclrStock || "-",
            Stock_Pink_YellowGold_EnamelColor: product.Enamelcolorstock?.pink?.pinkYellowGoldclrStock || "-",
            Stock_Pink_RoseGold_EnamelColor: product.Enamelcolorstock?.pink?.pinkRoseGoldclrStock || "-",
            Stock_Pink_WhiteGold_EnamelColor: product.Enamelcolorstock?.pink?.pinkWhiteGoldclrStock || "-",
            Stock_Red_YellowGold_EnamelColor: product.Enamelcolorstock?.red?.redYellowGoldclrStock || "-",
            Stock_Red_RoseGold_EnamelColor: product.Enamelcolorstock?.red?.redRoseGoldclrStock || "-",
            Stock_Red_WhiteGold_EnamelColor: product.Enamelcolorstock?.red?.redWhiteGoldclrStock || "-",
            Stock_Turquoise_YellowGold_EnamelColor: product.Enamelcolorstock?.turquoise?.turquoiseYellowGoldclrStock || "-",
            Stock_Turquoise_RoseGold_EnamelColor: product.Enamelcolorstock?.turquoise?.turquoiseRoseGoldclrStock || "-",
            Stock_Turquoise_WhiteGold_EnamelColor: product.Enamelcolorstock?.turquoise?.turquoiseWhiteGoldclrStock || "-",
            // Additional Data
            AgeGroup_Infants: product.ageGroup?.infants ? "Yes" : "No",
            AgeGroup_Kids: product.ageGroup?.kids ? "Yes" : "No",
            AgeGroup_Mom: product.ageGroup?.mom ? "Yes" : "No",
            AgeGroup_Teens: product.ageGroup?.teens ? "Yes" : "No",
            Gender_Girl: product.gender?.girl ? "Yes" : "No",
            Gender_Boy: product.gender?.boy ? "Yes" : "No",
            Gender_Unisex: product.gender?.unisex ? "Yes" : "No",
            DiamondWeight: product.diamondWeight?.weight || "-",
            DiamondQuality: product.diamondWeight?.quality || "-",
            GoldWeight: product.goldWeight?.weight || "-",
            GoldPurity: product.goldWeight?.purity || "-",
            Dimension_Height: product.dimension?.height || "-",
            Dimension_Width: product.dimension?.width || "-",
            Tags: product.tags || "-",
            Designno:product.designno || "-",



            CreatedAt: product.CreatedAt || "-",
        

        }));

        // Create a worksheet and workbook
        const worksheet = XLSX.utils.json_to_sheet(excelData);
        
        // Define frozen pane by freezing the first row (header row)
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

        // Generate the Excel file and trigger download
        XLSX.writeFile(workbook, "Products.xlsx");
    };

    const handleExcelImport = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log(jsonData, "jsondata from frontend send to backend");
        
    
        const transformedData = jsonData.map((item) => {
            const parseStockValue = (value) => {
                // Check if the value is a number or can be converted to a number
                const parsed = parseFloat(value);
                return isNaN(parsed) || value === "-" ? null : parsed;
            };

            
            return {
                _id: item.ID || null,
                skuid: item.SKU || null,
                name: item.Name || null,
                originalPrice: item.OriginalPrice || null,
                discountPrice: item.Price || null,
                // stock: parseStockValue(item.Stock) || null,
                sold_out: parseStockValue(item.Sold_Out) || null,
                category: item.Category || null,
                subcategory: item.Subcategory || null,
                description: item.Description || null,

                
        
            
        
                // Nested MetalColorStock
                // Metalcolorstock: {
                //     YellowGoldclrStock: parseStockValue(item.Metalcolorstock_YellowGoldclrStock),
                //     RoseGoldclrStock: parseStockValue(item.Metalcolorstock_RoseGoldclrStock),
                //     WhiteGoldclrStock: parseStockValue(item.Metalcolorstock_WhiteGoldclrStock),
                //   },
        
            
                // // Nested EnamelColorStock
                // Enamelcolorstock: {
                //     deepblue: {
                //       deepblueYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_deepblue_deepblueYellowGoldclrStock),
                //       deepblueRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_deepblue_deepblueRoseGoldclrStock),
                //       deepblueWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_deepblue_deepblueWhiteGoldclrStock),
                //     },
                //     pink: {
                //       pinkYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_pink_pinkYellowGoldclrStock),
                //       pinkRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_pink_pinkRoseGoldclrStock),
                //       pinkWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_pink_pinkWhiteGoldclrStock),
                //     },
                //     turquoise: {
                //       turquoiseYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_turquoise_turquoiseYellowGoldclrStock),
                //       turquoiseRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_turquoise_turquoiseRoseGoldclrStock),
                //       turquoiseWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_turquoise_turquoiseWhiteGoldclrStock),
                //     },
                //     red: {
                //       redYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_red_redYellowGoldclrStock),
                //       redRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_red_redRoseGoldclrStock),
                //       redWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_red_redWhiteGoldclrStock),
                //     },
                //     black: {
                //       blackYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_black_blackYellowGoldclrStock),
                //       blackRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_black_blackRoseGoldclrStock),
                //       blackWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_black_blackWhiteGoldclrStock),
                //     },
                //     deepgreen: {
                //       deepgreenYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_deepgreen_deepgreenYellowGoldclrStock),
                //       deepgreenRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_deepgreen_deepgreenRoseGoldclrStock),
                //       deepgreenWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_deepgreen_deepgreenWhiteGoldclrStock),
                //     },
                //     lotusgreen: {
                //       lotusgreenYellowGoldclrStock: parseStockValue(item.Enamelcolorstock_lotusgreen_lotusgreenYellowGoldclrStock),
                //       lotusgreenRoseGoldclrStock: parseStockValue(item.Enamelcolorstock_lotusgreen_lotusgreenRoseGoldclrStock),
                //       lotusgreenWhiteGoldclrStock: parseStockValue(item.Enamelcolorstock_lotusgreen_lotusgreenWhiteGoldclrStock),
                //     },
                //   },
                // Additional Data
                ageGroup: {
                    infants: item.AgeGroup_Infants === "Yes",
                    kids: item.AgeGroup_Kids === "Yes",
                    mom: item.AgeGroup_Mom === "Yes",
                    teens: item.AgeGroup_Teens === "Yes",
                },
                gender: {
                    girl: item.Gender_Girl === "Yes",
                    boy: item.Gender_Boy === "Yes",
                    unisex: item.Gender_Unisex === "Yes",
                },
                diamondWeight: { weight: item.DiamondWeight || null, quality: item.DiamondQuality || null },
                goldWeight: { weight: item.GoldWeight || null, purity: item.GoldPurity || null },
                dimension: { height: item.Dimension_Height || null, width: item.Dimension_Width || null },
                tags: item.Tags || null,
                designno: item.Designno || null,
        
                
            };
        });
        
        console.log("Transformed Data:", transformedData);

        fileInputRef.current.value = '';
        // SweetAlert confirmation dialog
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                setIsUploading(true); // Show the uploading screen

            // If user confirms, send transformed data to backend
            axios.put(`${server}/product/excelupdate-products`, transformedData, {
                headers: {
                'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log('Backend response:', response.data);
                // Success alert after update
                swal("Updated!", "The data has been updated.", "success");
                dispatch(getAllProductShop(seller._id));
                setIsUploading(false); // Hide the uploading screen
            })
            .catch((error) => {
                console.error('Error while uploading products:', error);
                // Error alert if the request fails
                swal("Error!", "There was an error updating the data.", "error");
                setIsUploading(false); // Hide the uploading screen
            });
            } else {
            // If user cancels, show cancellation message
            swal("Cancelled", "The data was not updated.", "info");
            }
        });
        };
        
        // Now you can send transformedData to the backend or use it elsewhere in your application
        
    
        reader.readAsBinaryString(file);
    };
  

  

    const location = useLocation();

    // Get the last segment of the URL (e.g., "dashboard" or "overview")
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPage = pathSegments[pathSegments.length - 1];

    // You can map the path segment to a more readable name
    const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1); // Capitalize first letter


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="min-w-[82%]  flex-grow px-8 pt-1 mt-6 bg-white">

                    <div className='mb-4'>
                        <h2 className='text-[22px] font-[500]'>All Products</h2>
                        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4 mt-1">
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
                    </div>
                    <div className="w-full flex items-center justify-between mb-4 text-sm">
                        <div className=" w-[25%]">
                            <input
                                type="text"
                                placeholder="Search by SKU ID or Name or category or subcategory"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="p-2 w-[100%] border border-gray-300 rounded"
                            />
                        </div>
                        <div className=" w-[15%] text-gray-700 !cursor-pointer">
                            <select
                                value={selectedCategoryType}
                                onChange={(e) => setSelectedCategoryType(e.target.value)}
                                className="p-2 w-[100%] border !cursor-pointer border-gray-300 rounded"
                            >
                                <option className='!cursor-pointer' value="">All Products</option>
                                <option className='!cursor-pointer' value="gold">Gold</option>
                                <option className='!cursor-pointer' value="silver">Silver</option>
                            </select>
                        </div>
                        <div>
                        <div className='flex justify-center items-center gap-4'>
                            <label className="flex items-center bg-[#e7cb40] px-4 py-2 rounded cursor-pointer transition duration-300 hover:bg-[#a08e34]">
                            <input
                                type="file"
                                accept=".xlsx, .xls"
                                className="hidden"
                                onChange={handleExcelImport}
                                ref={fileInputRef}  // Using the ref to access the file input element
                            />
                            <MdUpload className="mr-2" /> Import Excel
                            </label>


                        <button
                            onClick={() => { handleExportToExcel(products) }}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            <FaFileExcel className="h-5 w-5 mr-2" />
                            Export to Excel
                        </button>

                        </div>


                        
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <h3 className="text-lg font-semibold">Total Products:</h3>
                            <span className="text-sm font-bold text-blue-600">{filteredProducts?.length}</span>
                            <span className="text-sm text-gray-600 !ml-1">products</span>
                        </div>
                    </div>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        autoHeight
                        getRowClassName={(params) => 
                            params.row.productType === 'gold' 
                                ? 'gold-row'  // CSS class for Gold
                                : 'silver-row' // CSS class for Silver
                        }
                    />

                    {isUploading && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900 z-10">
                        <div className="bg-white p-6 rounded shadow-lg">
                        <h3>Uploading Data...</h3>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                
            )}
        </>
    );
}

export default AllProducts;
