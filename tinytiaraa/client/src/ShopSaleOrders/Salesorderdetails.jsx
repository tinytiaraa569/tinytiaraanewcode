import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader"; // Ensure you have a loader component
import { imgdburl, server } from "@/server"; // Replace with your actual API base URL
import { BsFillBagFill } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { FaCreditCard, FaFileInvoice, FaMoneyBillWave, FaTimes } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { SiGooglepay } from "react-icons/si";
import { toast } from "react-toastify";


const SalesOrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const metalColors = {
    0: "Yellow Gold",
    1: "Rose Gold",
    2: "White Gold",
  };

  const [status, setStatus] = useState(order?.status || "Success");

  // Handle status update
  const updateStatus = async () => {
    try {
      const { data } = await axios.put(
        `${server}/update-sales-order-status/${order?._id}`,
        { status }
      );
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])


  const [categoriesData, setCategoriesData] = useState([]);
      const [loading, setLoading] = useState(true);
  
     
          useEffect(() => {
              const fetchCategories = async () => {
                  try {
                      const response = await axios.get(`${server}/get-allcategories`);
                      setCategoriesData(response.data.categories); // Store all categories
                  } catch (error) {
                      console.error('Error fetching categories:', error);
                      alert('Failed to fetch categories');
                  } finally {
                      setLoading(false);
                  }
              };
  
              fetchCategories();
          }, []);
  
          const getProductType = (productCategory) => {
              return categoriesData.some(category =>
                  category.title.toLowerCase().includes(productCategory.toLowerCase()) &&
                  category.type === 'gold'
              ) ? 'gold' : 'silver';
          };

            useEffect(() => {
                const fetchOrder = async () => {
                try {
                    const { data } = await axios.get(`${server}/sales-order/${id}`);
                    setOrder(data.order);
                } catch (error) {
                    console.error("Error fetching order:", error);
                } finally {
                    setIsLoading(false);
                }
                };

                fetchOrder();
            }, [id]);

            const handleUpdateStatus = () => {
                if (!status) return; // Prevent empty status update
              
                swal({
                  title: "Are you sure?",
                  text: `You are about to update the order status to "${status}". This action cannot be undone!`,
                  icon: "warning",
                  buttons: ["Cancel", "Yes, Update"],
                  dangerMode: true,
                }).then((willUpdate) => {
                  if (willUpdate) {
                    updateStatus(); // Call function to update status
                    swal("Success!", "Order status has been updated.", "success");
                  }
                });
              };

         const [showPopover, setShowPopover] = useState(false);
        
                const togglePopover = () => {
                    setShowPopover(!showPopover);
                };


                const handlePrint = () => {
                    const printWindow = window.open('', '', 'height=600,width=1000');
                    
                    // Get all stylesheets (including Tailwind)
                    const styles = Array.from(document.styleSheets)
                      .map(sheet => {
                        try {
                          return Array.from(sheet.cssRules)
                            .map(rule => rule.cssText)
                            .join('');
                        } catch (e) {
                          return ''; // Handle cases where stylesheets are inaccessible
                        }
                      })
                      .join('');
                  
                    // Add print-specific CSS
                    const printStyles = `
                      @media print {
                      
                        .page-break {
                          page-break-before: always; /* Forces a page break before this element */
                          page-break-inside: avoid;  /* Avoid breaking inside this element */
                        }
                        .no-print {
                            display: none !important;
                        }
                  
                        /* Optional: Customize other styles for print */
                        body {
                          font-family: Arial, sans-serif;
                          line-height: 1.5;
                        }
                      }
                    `;
                    
                    // Now open the print window and inject content and styles
                    printWindow.document.write(`
                      <html>
                        <head>
                          <title>Print Popover</title>
                          <style>
                            ${styles} /* Include the existing styles */
                            ${printStyles} /* Add print-specific CSS for page breaks */
                          </style>
                        </head>
                        <body>
                          <div style="width: 100%; ">
                            <!-- Include the content you want to print -->
                            <div class="print-content">
                              ${document.querySelector('.printconirim').innerHTML}
                            </div>
                            
                            <!-- You can use a page-break class wherever you want the page to split -->
                            <div class="page-break"></div> <!-- This forces a page break here -->
                  
                          </div>
                        </body>
                      </html>
                    `);
                    
                    printWindow.document.close(); // Close the document to ensure styles and content are loaded
                    printWindow.print(); // Trigger the print dialog
                  };

                  const updateInvoiceAndView = async (orderId, existingInvoice) => {
                    try {
                      if (existingInvoice) {
                        // If invoice is already generated, just open it
                        return viewPDFHandler(existingInvoice);
                      }
                  
                      // Generate invoice if not available
                      const response = await fetch(`${server}/update-sales-invoice/${orderId}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ status: "Success" }),
                      });
                  
                      const result = await response.json();
                  
                      if (result.success) {
                        toast.success("Invoice generated successfully!");
                        viewPDFHandler(result.invoice); // Open generated invoice
                        window.location.reload()
                      } else {
                        toast.error(result.message);
                      }
                    } catch (error) {
                      console.error("Error generating invoice:", error);
                      toast.error("Failed to generate invoice.");
                    }
                  };
                  
                  


                  const viewPDFHandler = (invoiceBase64) => {
                    if (invoiceBase64) {
                      const byteCharacters = atob(invoiceBase64);
                      const byteNumbers = new Uint8Array(byteCharacters.length);
                      for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                      }
                      const blob = new Blob([byteNumbers], { type: "application/pdf" });
                      const url = URL.createObjectURL(blob);
                      window.open(url); // Open PDF in new tab
                    } else {
                      toast.error("No invoice available.");
                    }
                  };



  if (isLoading) return <Loader />;
  if (!order) return <div className="text-red-500 text-center mt-4">Order not found</div>;

  return (
    <div className="px-14 mx-auto p-6 bg-white ">



    <div className="w-full flex items-center justify-between bg-white p-3 ">
      {/* Left Section */}
      <div className="flex items-center">
        <BsFillBagFill size={24} className="text-crimson" />
        <h1 className="pl-2 text-lg font-medium text-gray-700">Sales Order Details</h1>
      </div>

      {/* Order List Button */}
      <Link to="/dashboard-allsalesorder">
        <div className="flex items-center bg-[#fce1e6] hover:bg-[#f8d4da] transition-all duration-300 rounded-md text-[#e94560] font-medium h-[40px] px-3 text-sm shadow-sm">
          <CiViewList size={18} className="mr-2" />
          Order List
        </div>
      </Link>
    </div>

            <div className='w-full flex items-center justify-between pt-2'>
                <div>
                <h5 className='text-[#000b]'>Order Id : - #<span>{order?.orderID}</span></h5>
                <h3 
                    className={`inline-block px-3 py-1 rounded-lg text-white ${
                        order?.status === 'Success' ? 'bg-green-500' :
                        order?.status === 'Cancelled' ? 'bg-red-500' :
                        order?.status === 'Return' ? 'bg-yellow-500' :

                        
                        'bg-gray-500'
                    }`}>
                    Order status: {order?.status}
                    </h3>

                </div>
                <h5 className='text-[#000b]'>Placed on :- <span>{new Date(order.createdAt).toLocaleString()}</span> </h5>
            </div>

            <div className='flex justify-between mt-2'>
            <button  onClick={togglePopover} className='bg-black text-white px-4 py-2 rounded flex items-center'>
            <FaFileInvoice className='mr-2'/>
                Download Order
            </button>
            <button  onClick={() => updateInvoiceAndView(order?._id, order?.invoice)}  className='bg-black text-white px-4 py-2 rounded flex items-center'>
            <FaFileInvoice  className='mr-2'/>
                View PDF Invoice
            </button>
     
     
      </div>

       {/* Order Items */}
                  <div>
                  {order && order?.cart.map((item, index) =>
                  {
                      const productCategory = item.category || "";
                      const productType = getProductType(productCategory);
                      return   (
                          <div key={index} className='w-full px-4 py-5 flex items-start mt-5 mb-5 border border-[#ddd] rounded-lg shadow-sm'>
                       <img 
                      // src={`${item.images[0].url}`}
                          src={
                          item.images && item.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                              ? item.images[1].url.replace(
                                  /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                  `${imgdburl}/uploads/images`
                              )
                              : `${imgdburl}${item.images[1]?.url}` // Prepend imgdburl if not a Cloudinary URL
                       }
                       alt="" className='w-[280px] h-[280px] rounded-md object-cover' />
                      <div className="w-full ml-4">
                          <h5 className='text-lg font-semibold'>{item.name}</h5>
                          <h5 className='text-sm text-[#0000008c]'>{item.skuid}</h5>
                          <h5 className='text-sm mt-1 text-[#0000008c]'><span className='font-bold'>Category:</span> {item.category}</h5>
                          <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>Subcategory:</span> {item.subcategory}</h5>
                          <h5 className='text-sm mt-1 text-[#0000008c]'><span className='font-bold'>Quantity:</span> {item.qty}</h5>
          
                          <div className='mt-2'>
                              {item.showWithChain !== undefined && (
                                  <h5 className='text-sm text-[#0000008c]'>
                                      <span className='font-bold'>Chain:</span> {item.showWithChain ? 'With Chain' : 'Without Chain'} {item.showWithChain ?  (`(${item.selectedChainSize})`) : ''}
                                      
                                  </h5>
                              )}
                              {item.selectedColor !== null && (
                                  <h5 className='text-sm text-[#0000008c]'>
                                      <span className='font-bold'>Metal Color:</span> {metalColors[item.selectedColor]}
                                  </h5>
                              )}
                              {item.selectedEnamelColor !== null && (
                                  <h5 className='text-sm text-[#0000008c]'>
                                      <span className='font-bold'>Enamel:</span> {item.selectedEnamelColor}
                                  </h5>
                              )}
                          </div>
                          <div className='mt-3'>
                              <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>Weight:</span></h5>
                              <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>{productType === 'gold' ? 'Gold' : 'Silver'}:</span> {item.goldWeight ? item.goldWeight.weight : "Not Updated"}</h5>
                              <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>Diamond:</span> {item.diamondWeight ? item.diamondWeight.weight : "Not Updated"}</h5>
                          </div>
                          <div className="mt-2">
                            {/* Website Price */}
                            <h5 className="text-base text-gray-700">
                                Actual Website Price: 
                                <span className="font-medium text-gray-900">
                                ₹{item.chainPrice > 0 ? item.discountPrice + item.chainPrice : item.discountPrice} x {item.qty}
                                </span>
                            </h5>

                            {/* Sales Team Price - Highlighted */}
                            <h5 className="text-lg font-semibold text-red-600 mt-1">
                                Sales Team Price: 
                                <span className="font-bold"> ₹{item?.salesTeamPrice ? item?.salesTeamPrice : (item.chainPrice > 0 ? item.discountPrice + item.chainPrice : item.discountPrice)} x {item.qty}</span>
                            </h5>
                            </div>

                      </div>
                  </div>
              )
                  } 
                    )}
                  </div>

        <div className="border-t w-full text-right mt-4 mb-5 pt-3">
            <h5 className="text-lg font-medium text-gray-700">
                Total Price: 
                <strong className="text-xl font-semibold text-red-600 ml-1">
                ₹{order?.totalPrice}
                </strong>
            </h5>
        </div>

        <div className="w-full  mt-5 pt-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h4>
  
        <div className=" p-4 ">
            <p className="text-gray-700 text-sm mb-1"><strong className="text-gray-900">Order ID:</strong> {order.orderID}</p>
            <p className="text-gray-700 text-sm mb-1"><strong className="text-gray-900">Name:</strong> {order.name}</p>
            <p className="text-gray-700 text-sm mb-1"><strong className="text-gray-900">Email:</strong> {order?.email}</p>
            <p className="text-gray-700 text-sm mb-1"><strong className="text-gray-900">Number:</strong> {order.number}</p>
            <p className="text-gray-700 text-sm mb-1"><strong className="text-gray-900">Total Price:</strong> ₹{order.totalPrice}</p>
            <p className="text-gray-700 text-sm mb-1"><strong className="text-gray-900">Venue:</strong> {order.venue}</p>
            <p className="text-gray-700 text-sm"><strong className="text-gray-900">Order Placed:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        </div>
        </div>

        <div className="w-full border-t mt-5 pt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MdOutlinePayments size={22} className="text-gray-600" />
                Payment Information
            </h4>

            <div className="flex items-center gap-2 text-gray-700 text-md">
                {order.paymentMethod === "cash" && <FaMoneyBillWave size={18} className="text-green-600" />}
                {order.paymentMethod === "card" && <FaCreditCard size={18} className="text-blue-600" />}
                {order.paymentMethod === "upi" && <SiGooglepay size={18} className="text-slate-600" />}  
                <strong className="text-gray-900">Payment Method:</strong>
                 <span className="uppercase font-medium text-gray-800">{order.paymentMethod}</span>
            </div>
            </div>

           

            <div className="mt-6 border-t pt-5">
            <h3 className="text-[18px] font-semibold text-gray-900">Order Status</h3>

            {order?.status === "Cancelled" ? (
                // Show message if order is Cancelled
                <p className="text-red-600 font-medium mt-3">
                Your order has been cancelled. No further action can be taken.
                </p>
            ) : order?.status === "Return" ? (
                // Show message if order is Return
                <p className="text-yellow-600 font-medium mt-3">
                Please proceed further with the return process.
                </p>
            ) : (
                // Show dropdown & button only when order is "Success"
                <div className="flex items-center gap-4 mt-3">
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-[180px] border border-gray-300 px-4 py-2 rounded-[4px] text-gray-800 bg-white focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
                >
                    <option value="Cancelled">Cancelled</option>
                    <option value="Return">Return</option>
                </select>

                <button
                    onClick={handleUpdateStatus}
                    className="bg-black text-white px-5 py-[10px] rounded-[5px] text-[14px] font-semibold hover:bg-gray-800 transition-all"
                >
                    Update Order
                </button>
                </div>
            )}
            </div>




{showPopover && (
                     <div className="fixed inset-0 bg-[#000000c9] !z-40 overflow-y-auto">
                <div 
                    className="printconirim max-w-[1000px] mx-auto overflow-y-auto absolute top-0 left-0 right-0 mt-0 bg-white rounded-lg shadow-xl border border-gray-200 !z-50"
                >


                    <div className='w-full flex justify-center items-center bg-slate-700'>
                        <img src="https://admin.tinytiaraa.com/uploads/images/logowebsite/duvdwbtbmyr8ipqrevot.png" alt="" className='h-[100px] w-[100px]' />
                    </div>
                    <button 
                        onClick={togglePopover} 
                        className="absolute top-2 right-2 text-xl text-red-500 hover:text-red-700 no-print"
                    >
                        <FaTimes />
                    </button>

                    <div className='px-10 py-6 '>

                    <div className='flex justify-between mb-3'>
                        <h5 className='text-[#000b] text-sm font-semibold'>Order No: <span className="font-normal">{order?.orderID}</span></h5>
                        <h5 className='text-[#000b] text-sm font-semibold'>Placed on: <span className="font-normal">{new Date(order.createdAt).toLocaleString()}</span></h5>
                    </div>

                    <div className="space-y-6">
                        {order?.cart.map((item, index) => {
                            const productCategory = item.category || "";
                            const productType = getProductType(productCategory);

                            return (
                                <div key={index} className='p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50'>
                                    <div className='flex justify-evenly'>
                                        
                                        {/* Product Image - 40% width on desktop */}
                                        <div className="flex justify-center gap-3">
                                            <img 
                                                src={
                                                    item.images && item.images[1]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                                        ? item.images[1].url.replace(
                                                            /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                                            `${imgdburl}/uploads/images`
                                                        )
                                                        : `${imgdburl}${item.images[1]?.url}`
                                                }
                                                alt={item.name}
                                                className='w-[170px] h-[200px] rounded-[6px] object-contain border border-gray-300 shadow-md'
                                            />
                                        </div>

                                        {/* Product Details - 60% width on desktop */}
                                        <div className="space-y-3 ">
                                            <h5 className="text-sm font-semibold text-gray-900">{item.name} <span className='text-gray-500 text-sm'>({item.skuid})</span> </h5>
                                           
                                            <div className="grid grid-cols-2 gap-2 !text-sm">
                                                <h5><span className="font-bold text-gray-800">Category:</span> {item.category}</h5>
                                                <h5><span className="font-bold text-gray-800">Subcategory:</span> {item.subcategory}</h5>
                                                <h5>Metal: <span className={`font-bold ${productType === 'gold' ? "text-[#e3d534]" : "text-[#b3b1b1]"}`}>{productType === 'gold' ? 'Gold' : 'Silver'}</span></h5>
                                                <h5>Metal Purity: {item.goldWeight ? item.goldWeight.purity : "Not Updated"}</h5>
                                                <h5>Weight on Site: {item.goldWeight ? item.goldWeight.weight : "Not Updated"}</h5>
                                                <div className='flex items-center'>
                                                    Actual Weight : <h5 className='ml-1'>____________</h5>
                                                </div>

                                                <h5>Diamond Weight on Site: ({item.diamondWeight ? item.diamondWeight.weight : "Not Updated"})</h5>
                                                <div className='flex items-center'>
                                                    Actual Weight : <h5 className='ml-1'>____________</h5>
                                                </div>

                                                <h5>Quantity: {item.qty}</h5>
                                            </div>

                                            {/* Chain, Metal Color, Enamel, and Combination */}
                                            <div className="space-y-2 text-sm text-gray-700">
                                                {item.showWithChain !== null && (
                                                    <h5><span className="font-bold">Chain:</span> {item.showWithChain ? `With Chain (${item.selectedChainSize})` : 'Without Chain'}</h5>
                                                )}
                                                {item.selectedColor !== null && (
                                                    <h5><span className="font-bold">Metal Color:</span> {metalColors[item.selectedColor]}</h5>
                                                )}
                                                {item.selectedEnamelColor !== null && (
                                                    <h5><span className="font-bold">Enamel:</span> {item.selectedEnamelColor}</h5>
                                                )}
                                                {item.selectedCombination && (
                                                    <h5><span className="font-bold">Combination:</span> {item.selectedCombination}</h5>
                                                )}
                                            </div>

                                            {/* Weight & Online Platform */}
                                            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                                                <h5>Total Gross Weight:</h5> 
                                                <h5>
                                                    {(() => {
                                                    // Extract numeric value from goldWeight (if exists) or default to 0
                                                    let totalWeight = parseFloat(item.goldWeight?.weight) || 0;

                                                    // Add chain weight **only if** `showWithChain` is true
                                                    if (item.showWithChain) {
                                                        if (productType === "gold") {
                                                        const chainWeights = {
                                                            "13inch": 1, // Chain weight for 13 inch in grams
                                                            "18inch": 2, // Chain weight for 18 inch in grams
                                                        };
                                                        totalWeight += chainWeights[item.selectedChainSize] || 0; // Add chain weight (default to 0 if no match)
                                                        } else if (productType === "silver") {
                                                        totalWeight += 2.5; // Fixed weight for silver items
                                                        }
                                                    }

                                                    return `${totalWeight} gms`; // Return final weight with "gms" unit
                                                    })()}
                                                </h5>
                                                {/* <h5>____________</h5> */}
                                                <h5>Actual Gross Weight:</h5> <h5>____________</h5>
                                                <h5>Online Platform:</h5> <h5 className='text-red-500'>Tiny Tiaraa (Store)</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


            <div className="p-6 px-10 bg-white shadow-sm rounded-lg">

            <div className="border-b pb-4">
            <h5 className="text-lg font-semibold">
                Total Price: <strong className="text-[#d9534f]">₹{order?.totalPrice}</strong>
            </h5>
            </div>


            <div className="w-full  mt-4 pt-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h4>
  
        <div className=" pb-4 ">
            {/* <p className="text-gray-700 text-sm mb-1 flex gap-2 ">
                <span className="text-gray-600">Order ID:</span> 
                <span className="text-gray-900">{order.orderID}</span>
            </p> */}
            <p className="text-gray-700 text-sm mb-1 flex gap-2 ">
                <span className="text-gray-600">Name:</span> 
                <span className="text-gray-900">{order.name}</span>
            </p>
            <p className="text-gray-700 text-sm mb-1 flex gap-2 ">
                <span className="text-gray-600">Email:</span> 
                <span className="text-gray-900">{order?.email ? order?.email : "Not Updated"}</span>
            </p>
            <p className="text-gray-700 text-sm mb-1 flex gap-2 ">
                <span className="text-gray-600">Number:</span> 
                <span className="text-gray-900">{order.number}</span>
            </p>
            <p className="text-gray-700 text-sm mb-1 flex gap-2 ">
                <span className="text-gray-600">Total Price:</span> 
                <span className="text-slate-900">₹{order.totalPrice}</span>
            </p>
            <p className="text-gray-700 text-sm mb-1 flex gap-2 ">
                <span className="text-gray-600">Venue:</span> 
                <span className="text-gray-900">{order.venue}</span>
            </p>
            {/* <p className="text-gray-700 text-sm flex gap-2 ">
                <span className="text-gray-600">Order Placed:</span> 
                <span className="text-gray-900">{new Date(order.createdAt).toLocaleString()}</span>
            </p> */}
        </div>

            </div>
           

                        {/* payment status */}

                    <div className="pt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Information</h4>
                    <div className="flex items-center gap-2 text-gray-700 text-sm mt-1">
                        {order?.paymentMethod === "cash" && <FaMoneyBillWave size={18} className="text-green-600" />}
                        {order?.paymentMethod === "card" && <FaCreditCard size={18} className="text-blue-600" />}
                        {order?.paymentMethod === "upi" && <SiGooglepay size={18} className="text-slate-600" />}
                        
                        <strong className="text-gray-900">Type:</strong>
                        <span className="uppercase font-medium text-gray-800">{order?.paymentMethod}</span>
                    </div>
                    </div>
                    </div>


                
                    <div className="page-break p-4 bg-white border border-gray-50 shadow-sm rounded-md text-xs">
  {/* Order Received By */}
  <div className="my-1 p-3 border border-gray-200">
    <h4 className="text-sm font-semibold text-gray-900 mb-1">Order Received By</h4>
    <div className="grid grid-cols-2 gap-2">
      <div className="p-2 rounded border">
        <span className="text-xs font-medium text-gray-700">Receiver's Name:</span>
        <div className="border-b border-gray-300 w-full h-6 bg-white"></div>
      </div>
      <div className="p-2 rounded border">
        <span className="text-xs font-medium text-gray-700">Date:</span>
        <div className="border-b border-gray-300 w-full h-6 bg-white"></div>
      </div>
    </div>
  </div>

  {[
    "Payment Confirmed By",
    "Go Ahead By - Process Order",
    "Inventory Status"
  ].map((title, index) => (
    <div key={index} className="my-1 p-3 border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 rounded border">
          <span className="text-xs font-medium text-gray-700">Name:</span>
          <div className="border-b border-gray-300 w-full h-6 bg-white"></div>
        </div>
        <div className="p-2 rounded border">
          <span className="text-xs font-medium text-gray-700">Date:</span>
          <div className="border-b border-gray-300 w-full h-6 bg-white"></div>
        </div>
      </div>
    </div>
  ))}

  {/* QC Done By */}
  <div className="my-1 p-3 border border-gray-200 flex items-center gap-2">
    <h4 className="text-sm font-semibold text-gray-900">QC Done By:</h4>
    <span className="text-xs font-medium text-gray-700">Name:</span>
    <div className="border-b border-gray-300 flex-grow h-6 bg-white"></div>
    </div>

  {/* HUID & SGL No */}
  {/* <div className="my-1 p-3 border border-gray-200 grid grid-cols-2 gap-2">
    <div>
      <h5 className="text-sm font-semibold text-gray-900 mb-1">HUID No</h5>
      {data?.cart.map((item, index) => (
        <div key={index} className="flex items-center text-xs">
          <h5>{item.skuid} - </h5>
          <h5>_________</h5>
        </div>
      ))}
    </div>
    <div>
      <h5 className="text-sm font-semibold text-gray-900 mb-1">SGL No</h5>
      {data?.cart.map((item, index) => (
        <div key={index} className="flex items-center text-xs">
          <h5>{item.skuid} - </h5>
          <h5>_________</h5>
        </div>
      ))}
    </div>
  </div> */}

    <div className="my-1 p-3 border border-gray-200 grid grid-cols-2 gap-2">
    <div>
        <h5 className="text-sm font-semibold text-gray-900 mb-1">HUID No</h5>
        {order?.cart.map((item, index) => (
        <div key={index}>
            {Array.from({ length: item.qty }).map((_, i) => (
            <div key={i} className="flex items-center text-xs">
                <h5>{item.skuid} - </h5>
                <h5>_________</h5>
            </div>
            ))}
        </div>
        ))}
    </div>
    <div>
        <h5 className="text-sm font-semibold text-gray-900 mb-1">SGL No</h5>
        {order?.cart.map((item, index) => (
        <div key={index}>
            {Array.from({ length: item.qty }).map((_, i) => (
            <div key={i} className="flex items-center text-xs">
                <h5>{item.skuid} - </h5>
                <h5>_________</h5>
            </div>
            ))}
        </div>
        ))}
    </div>
    </div>


  {[
    "Inventory Stock Out",
    "Packing By",
    "Invoice By",
    "Dispatch By"
  ].map((title, index) => (
    <div key={index} className="my-1 p-3 border border-gray-200">
      <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 rounded border">
          <span className="text-xs font-medium text-gray-700">Name:</span>
          <div className="border-b border-gray-300 w-full h-6 bg-white"></div>
        </div>
        <div className="p-2 rounded border">
          <span className="text-xs font-medium text-gray-700">Date:</span>
          <div className="border-b border-gray-300 w-full h-6 bg-white"></div>
        </div>
      </div>
    </div>
  ))}
</div>


                    </div>
                    <button 
                onClick={handlePrint} 
                className="absolute top-2 left-2 text-xl text-blue-500 hover:text-blue-700 no-print"
                >
                Print Page
                </button>
                    
                </div>
                </div>
            )}



    </div>
  );
};

export default SalesOrderDetails;
