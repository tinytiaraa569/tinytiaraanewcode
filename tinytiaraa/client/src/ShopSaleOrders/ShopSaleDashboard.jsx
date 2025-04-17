import { addToCart, removeFromCart } from "@/redux/actions/cart";
import { imgdburl } from "@/server";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";
import SalesCheckoutPage from "./SalesCheckoutpage";
import { Box } from "@mui/material";



const ShopSaleDashboard = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  // Filter products based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.skuid?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product?.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product?.subcategory?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [products, searchQuery]);
  

  console.log(cart, "cart items");

  const removeFromCartHandler = (data) => {
      dispatch(removeFromCart(data))
  
    }
  
  
    const quantityChangeHandler = (data) => {
      dispatch(addToCart(data))
  
    }

  const subTotalPrice = cart.reduce((acc, item) => {
    const price = item.salesTeamPrice ? parseFloat(item.salesTeamPrice) : (item.discountPrice + (item.chainPrice > 0 ? item.chainPrice : 0));
    return acc + item.qty * price;
  }, 0);
  
   const location = useLocation();
    
        // Get the last segment of the URL (e.g., "dashboard" or "overview")
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const currentPage = pathSegments[pathSegments.length - 1];
      
        // You can map the path segment to a more readable name
        const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1); // Capitalize first letter
    
        useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
  const navigate = useNavigate();
 
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("salesUser");
    localStorage.removeItem("salesToken");

    window.location.reload()

    // Redirect to login page
    navigate("/dashboard-salesorder");
  };
  
  return (
    <div className=" w-full  !font-poppins pl-8 pt-2">

    <div className='flex justify-between'>
      <div className="p-4">

       <h2 className='text-[24px] font-[500]'>Create Sales Order</h2>
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

      <div className="p-4 mr-5">
  <button
    className="px-5 py-2 bg-gradient-to-r rounded-[10px] from-red-500 to-red-700 text-white font-semibold  shadow-md hover:from-red-600 hover:to-red-800 transition-all duration-300"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>
    </div>

    <div className="w-[96%] p-5 border shadow-lg bg-white rounded-[10px] px-10 py-8">
  {/* Search Bar */}
  <div className="w-full md:w-[75%] mb-5">
    <h1 className="text-lg font-medium mb-2">Search Products and Add to Cart</h1>
    <input
      type="text"
      placeholder="Search by SKU ID, Name, Category, or Subcategory"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>

  {/* Product List */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    {filteredProducts.map((item) => {
      const product_name = item.name.replace(/\s+/g, "-");

      return (
        <div
          key={item.id}
          className="border p-3 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition duration-300"
        >
          {/* Open Product Page in Modal */}
          <button
            onClick={() => {
              setModalUrl(`/product/${product_name}`);
              setModalOpen(true);
            }}
            className="block w-full"
          >
            <img
              className="w-full h-36 object-contain rounded-md"
              src={
                item.images && item.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                  ? item.images[1].url.replace(
                      /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                      `${imgdburl}/uploads/images`
                    )
                  : `${imgdburl}${item.images[1]?.url}`
              }
              alt={item.name}
            />
          </button>

          <h3 className="font-medium text-sm mt-2">{item.name}</h3>
          <p className="text-gray-600 text-xs">SKU: <span className="font-medium">{item.skuid}</span></p>
          <p className="text-gray-600 text-xs">Category: <span className="font-medium">{item.category}</span></p>
          <p className="text-gray-600 text-xs">Subcategory: <span className="font-medium">{item.subcategory}</span></p>
        </div>
      );
    })}
  </div>

  {/* Modal - Display Product Page Inside */}
  {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
          <div className="bg-white w-[90vw] h-[90vh] max-w-[1200px] max-h-[800px] rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setModalOpen(false);
                setSearchQuery(""); // Reset search input
                window.location.reload(); // Reload the page
              }}
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Close
            </button>

            {/* iFrame to Load Product Page */}
            <iframe
              src={modalUrl}
              title="Product Details"
              className="w-full h-full border-none rounded-b-lg"
            />
          </div>
        </div>
      )}

  {/* Cart Section */}
  <div className="mt-3">
    <h1 className="text-lg font-medium">Cart Items</h1>

    {cart.length > 0 ? (
      <>
        <div className="mt-3 space-y-3">
          {cart.map((val, index) => (
            <div className="w-[75%] p-3 rounded-[10px] shadow-sm border" key={index}>
              <CartSingle data={val} quantityChangeHandler={quantityChangeHandler} removeFromCartHandler={removeFromCartHandler} />
            </div>
          ))}
        </div>

        {/* Total Price & Checkout */}
        <div className="mt-5 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-md">
          <h1 className="text-sm font-medium">Total Price: <span className="text-blue-600 font-semibold">₹{subTotalPrice}</span></h1>
        </div>

        <div className="mt-3">
          <SalesCheckoutPage totalPrice={subTotalPrice} />
        </div>
      </>
    ) : (
      <div className="text-gray-600 mt-3 text-center p-5 border rounded-md shadow-sm">
        <h1 className="text-sm font-medium">No Items in Cart</h1>
      </div>
    )}
  </div>
</div>

    </div>
  );
};


const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {

  const [value, setValue] = useState(data.qty)
  let { currency, conversionRates } = useSelector((state) => state.currency); // Get currency and conversion rates from state

  currency = "INR"

  const [isEditing, setIsEditing] = useState(false);
  
  
  const metalColors = {
    0: "Yellow Gold",
    1: "Rose Gold",
    2: "White Gold",
  };

  const extraCostPrice = Number((data?.extraCost * (conversionRates[currency] || 1)).toFixed(0));
  

  const convertedDiscountPrice = (data.discountPrice * (conversionRates[currency] || 1)).toFixed(0);
  const convertedOriginalPrice = (
    (data.originalPrice * (conversionRates[currency] || 1)) + extraCostPrice
  ).toFixed(0);
  const convertedChainPrice = data.chainPrice > 0 ? (data.chainPrice * (conversionRates[currency] || 1)).toFixed(0) : 0;
   // Fetch cart from localStorage
   const [localcartItems, setCart] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
   const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
   const cartItemIndex = cart.findIndex((item) => item._id === data._id);
   
   // Get stored discount price and sales team price if available
   const storedDiscountPrice = cartItemIndex !== -1 ? cart[cartItemIndex].discountPrice : data.discountPrice;
   const storedSalesTeamPrice = cartItemIndex !== -1 ? cart[cartItemIndex].salesTeamPrice : null;
   

  // Initial total price (uses stored discount price)
  const [editedTotal, setEditedTotal] = useState(
    storedSalesTeamPrice !== null
      ? storedSalesTeamPrice
      : data.chainPrice > 0
        ? (parseFloat(convertedDiscountPrice) * value + parseFloat(convertedChainPrice)).toFixed(2)
        : (parseFloat(convertedDiscountPrice) * value).toFixed(2)
  );

  useEffect(() => {
    setEditedTotal(
      storedSalesTeamPrice !== null
        ? storedSalesTeamPrice
        : data.chainPrice > 0
          ? (parseFloat(convertedDiscountPrice) * value + parseFloat(convertedChainPrice)).toFixed(2)
          : (parseFloat(convertedDiscountPrice) * value).toFixed(2)
    );
  }, []);
  const handleTotalChange = (e) => {
    setEditedTotal(e.target.value);
  };
  
  const saveTotal = () => {
    setIsEditing(false);
  
    const newSalesTeamPrice = parseFloat(editedTotal).toFixed(2);
  
    if (cartItemIndex !== -1) {
      cart[cartItemIndex].salesTeamPrice = newSalesTeamPrice;  // Save sales team price
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
    window.location.reload()
  };

  
  // const totalPrice = data.chainPrice > 0 ? data.discountPrice + data.chainPrice : data.discountPrice * value;
  const totalPrice = isEditing
  ? parseFloat(editedTotal)
  : storedSalesTeamPrice !== null
    ? parseFloat(storedSalesTeamPrice)
    : data.chainPrice > 0
      ? (parseFloat(convertedDiscountPrice) + parseFloat(convertedChainPrice)) * value
      : parseFloat(convertedDiscountPrice) * value;

  
      const enamelColor = data?.selectedEnamelColor?.toLowerCase().replace(/_/g, '');
  
      const metalColor = metalColors[data.selectedColor]?.replace(" ", "") + "clrStock";
      console.log(metalColor,"metal color")
    
      const metalColorstock = data?.Metalcolorstock?.[metalColor]
    
    
      const enamelStock = data?.Enamelcolorstock?.[enamelColor]?.[`${enamelColor}${metalColor}`];
      console.log(enamelStock ,"enamel color stock")
    
      const normalStock = data?.stock ; 
      console.log(normalStock,"mormal stock")
    
      const combinationkey = data?.selectedCombination 
      console.log(combinationkey,'combinationkey')
    
      const rawMetalColor = metalColors[data.selectedColor]?.replace(" ", "");
      const combinationMetalColor = rawMetalColor
        ? rawMetalColor.charAt(0).toLowerCase() + rawMetalColor.slice(1) // Convert first letter to lowercase
        : "";
      
      console.log(combinationMetalColor, "combinationMetalColor");
    
    
      const combinationStock = data?.combinationStocks?.[combinationkey]?.[combinationMetalColor];
      console.log(combinationStock,"combinationStock stock")
    
  const d = data.name
  const product_name = d.replace(/\s+/g, "-")

   const increment = () => {
      if (
        (enamelStock !== undefined && enamelStock !== null && value >= enamelStock) ||
        (metalColorstock !== undefined && metalColorstock !== null && value >= metalColorstock) ||
        (normalStock !== undefined && normalStock !== null && value >= normalStock) || 
        (combinationStock !== undefined && combinationStock !== null && value >= combinationStock)
      ) {
        toast.error("Product Stock limit for this Variant");
        return;
      }
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    };
    
  
    const decrement = () => {
      if (value === 1) {
        removeFromCartHandler(data); // Call your existing function to remove item
        toast.success("Item removed from cart");
        return;
      }
    
      setValue(value - 1);
      const updateCartData = { ...data, qty: value - 1 };
      quantityChangeHandler(updateCartData);
    };
  


  const shouldShowChainOptions = data.withchainimages.length > 0 || data.withchainoutimages.length > 0;
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


  return (


    <div className="leftcartpage rounded-[20px]">
      <div className="leftcardsec1 py-2">
        <div className="leftcardimg">
          <Link className="cartimage-container" to={`/product/${product_name}`}>
            <img
            loading='lazy'
              // src={`${data?.images[0]?.url}`}
              src={
                data?.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                    ? data.images[1].url.replace(
                        /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                        `${imgdburl}/uploads/images`
                    )
                    : `${imgdburl}${data?.images[1]?.url}` // Prepend imgdburl if not a Cloudinary URL
            }
              width={166}
              height={166}
            />
          </Link>
        </div>
        <div className="leftcarddetail">
          <div className="leftcarddeatilhead">
            <Link to={`/product/${product_name}`}>
            <h2 > {data.name}</h2>

            </Link>
            <div className='cursor-pointer mr-4' onClick={() => removeFromCartHandler(data)}>
              <MdDeleteForever size={30} color='#e44343' />
            </div>



          </div>
          <div className="sku-id">
            <span className="notranslate">{data.skuid}</span>
          </div>
          <div className="item-qty">
            <div className="qty-field b1 ">
              <label htmlFor="qty">QTY: </label>
              <span value={data.qty}>{value}</span>
            </div>

          </div>
          <div className="leftcardprice mb-2">
            {/* <span className="oprice">₹ {data.chainPrice > 0 ? data.originalPrice + data.chainPrice : data.originalPrice} </span>
            <span className="disprice pl-1">₹ {data.chainPrice > 0 ? data.discountPrice + data.chainPrice : data.discountPrice} </span>
            <span className='text-[#EB4F5C] ml-[5px] text-[0.9rem] pl-1'>save ₹{(data.originalPrice - data.discountPrice).toFixed(2)}</span> */}

        <span className="oprice">
          {currency} {data.chainPrice > 0 ? (parseFloat(convertedOriginalPrice) + parseFloat(convertedChainPrice)).toFixed(0) : convertedOriginalPrice}
        </span>
        {/* <span className="disprice pl-1">
          {currency} {data.chainPrice > 0 ? (parseFloat(convertedDiscountPrice) + parseFloat(convertedChainPrice)).toFixed(0) : convertedDiscountPrice}
        </span> */}

{isEditing ? (
  <input
    type="number"
    className="border p-1 w-24"
    value={editedTotal}
    onChange={handleTotalChange}
    onBlur={saveTotal} // Save when losing focus
    onKeyDown={(e) => e.key === "Enter" && saveTotal()} // Save on Enter
    autoFocus
  />
) : (
  <span
    className="disprice pl-1 cursor-pointer"
    onClick={() => setIsEditing(true)}
  >
    {cartItemIndex !== -1 && cart[cartItemIndex].salesTeamPrice !== undefined
      ? cart[cartItemIndex].salesTeamPrice // Show Sales Team Price if modified
      : data.chainPrice > 0 ? (parseFloat(convertedDiscountPrice) + parseFloat(convertedChainPrice)).toFixed(0) : convertedDiscountPrice

    }
  </span>
)}


        {/* <span className="text-[#EB4F5C] ml-[5px] text-[0.9rem] pl-1">
          save {currency} {(data.originalPrice * conversionRates[currency] - data.discountPrice * conversionRates[currency]).toFixed(2)}
        </span> */}

      <span className="text-[#EB4F5C] ml-[5px] text-[0.9rem] pl-1">
        Save 
        <span className="ml-1">
          {currency} {(
            ((parseFloat(convertedOriginalPrice) +  parseFloat(convertedChainPrice)) * (conversionRates[currency] || 1)) - 
            ((cartItemIndex !== -1 && cart[cartItemIndex].salesTeamPrice !== undefined 
              ? cart[cartItemIndex].salesTeamPrice 
              : data.discountPrice) * (conversionRates[currency] || 1))
          ).toFixed(0)}
        </span>
      </span>




          </div>

          <div className="details">
            <div className="checkoutoptions ">
              {
                shouldShowMetalColors && (
                  <h3 className='text-[0.6rem]'><span className='font-[500]'>Metal Colour:</span>  {metalColors[data.selectedColor]}</h3>
                )
              }

              {data.selectedEnamelColor && (
                <h3 className="text-[0.6rem]">
                  <span className="font-[500]">Enamel Colour:</span> {data.selectedEnamelColor}
                </h3>
              )}
              {data?.selectedCombination && (
                <h3 className="text-[0.6rem]">
                  <span className="font-[500]">Combination Colour:</span> {data?.selectedCombination}
                </h3>
              )}



              {/* Render chain option only if showWithChain is true */}
              {shouldShowChainOptions && (
                <h3 className='text-[0.6rem]'><span className='font-[500]'>Chain:</span> {data.showWithChain ? 'With Chain' : 'Without Chain'} {data.showWithChain ?  (`(${data.selectedChainSize})`) : ''}</h3>
              )}

            </div>

          </div>
          <div className="flex gap-2 mt-2">
            <div
              className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer`}
              onClick={increment}
            >
              <HiPlus size={18} color="#fff" />
            </div>
            <span>{value}</span>
            <div
              className={`bg-[#a7abb14f] border border-[#a7abb14f] text-[#000] rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer`}
              onClick={decrement}
            >
              <HiOutlineMinus size={18} color="#000" />
            </div>
          </div>
          <div className="checkoutsectionprice mt-1 mb-0.5">
            {/* <h3 className='text-[0.8rem] '>₹{data.chainPrice > 0 ? data.discountPrice + data.chainPrice : data.discountPrice} * {value}</h3>
            <div>
              <span className='text-[#EB4F5C] text-[0.8rem]'>SubTotal :-  ₹ {totalPrice}</span>
            </div> */}
          <h3 className="text-[0.8rem]">
            {currency}{" "}
            {cartItemIndex !== -1 && cart[cartItemIndex].salesTeamPrice !== undefined
              ? parseFloat(cart[cartItemIndex].salesTeamPrice).toFixed(2) // Directly use sales price if edited
              : data.chainPrice > 0
                ? (parseFloat(convertedDiscountPrice) + parseFloat(convertedChainPrice)).toFixed(2)
                : convertedDiscountPrice}{" "}
            * {value}
          </h3>

        <div>
        <span className="text-[#EB4F5C] text-[0.8rem]">
        SubTotal :- {currency} {(
          cartItemIndex !== -1 && cart[cartItemIndex].salesTeamPrice !== undefined
            ? (parseFloat(cart[cartItemIndex].salesTeamPrice) * value) // Directly use sales price
            : totalPrice // Fallback to the default total calculation
        ).toFixed(2)}
      </span>

          </div>


          </div>

        </div>
      </div>
    </div>

  )

}

export default ShopSaleDashboard;
