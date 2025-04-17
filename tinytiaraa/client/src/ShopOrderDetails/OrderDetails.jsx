// import { getAllOrdersOfShop } from '@/redux/actions/order'
// import styles from '@/Styles/styles'
// import React, { useEffect, useState } from 'react'
// import { BsFillBagFill } from 'react-icons/bs'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { CiViewList } from "react-icons/ci";
// import { backend_url, server } from '@/server'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import jsPDF from 'jspdf'
// import 'jspdf-autotable'
// import tinylogo from './tinylogo.png'

// function OrderDetails() {
//     const { orders, isLoading } = useSelector((state) => state.order)
//     const { seller } = useSelector((state) => state.seller)

//     console.log(orders, "see ")

//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const [status, setStatus] = useState("")
//     const { id } = useParams()

//     useEffect(() => {
//         dispatch(getAllOrdersOfShop(seller._id))
//     }, [dispatch])

//     const data = orders && orders.find((item) => item._id === id)
//     console.log(data,"data of orders")




//     const orderUpdateHandler = async (e) => {
//         e.preventDefault()

//         await axios.put(`${server}/order/update-order-status/${id}`, {
//             status
//         }, { withCredentials: true }).then((res) => {
//             toast.success("Order Updated")
//             navigate("/dashboard-orders")

//         }).catch((error) => {
//             console.log(error)
//             toast.error(error.response.data.message)

//         })


//     }

//     const refundOrderUpdateHandler = async (e) => {
//         e.preventDefault()

//         await axios.put(`${server}/order/order-refund-success/${id}`, {
//             status
//         }, { withCredentials: true }).then((res) => {
//             toast.success("Order Updated")
//             dispatch(getAllOrdersOfShop(seller._id))


//         }).catch((error) => {
//             console.log(error)
//             toast.error(error.response.data.message)

//         })


//     }

//     const metalColors = {
//         0: "Yellow Gold",
//         1: "Rose Gold",
//         2: "White Gold",
//     };


//     return (
//         <div className={`py-4 min-h-screen ${styles.section}`}>
//             <div className='w-full flex items-center justify-between'>
//                 <div className='flex items-center'>
//                     <BsFillBagFill size={30} color='crimson' />
//                     <h1 className='pl-2 text-[25px]'>Order Details</h1>

//                 </div>
//                 <Link to="/dashboard-orders">
//                     <div className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#e94560] font-[600] !h-[45px] text-[18px]`}>
//                         <CiViewList className='mr-2' />
//                         Order List
//                     </div>

//                 </Link>

//             </div>

//             <div className='w-full flex items-center justify-between pt-6'>
//                 <h5 className='text-[#000b]'>Order Id : - #<span>{data?._id}</span></h5>

//                 <h5 className='text-[#000b]'>Placed on :- <span>{data?.createdAt?.slice(0, 10)}</span> </h5>
//             </div>
//             {/* order items */}
//             <div >
//             {
//                 data && data?.cart.map((item, index) => {
//                     return (
//                         <div key={index} className='w-full px-3 py-4 flex items-start mt-5 mb-5 border border-[#ddd]'>
//                             <img src={`${item.images[0].url}`} alt="" className='w-[280px] h-[280px]' />


//                             <div className="w-full">
//                                 <h5 className='pl-3 text-[20px]'>{item.name}</h5>
//                                 <h5 className='pl-3 text-[14px]  text-[#0000008c]'>{item.skuid} </h5>
//                                 <h5 className='pl-3 text-[14px] mt-2 text-[#0000008c]'><span className='font-[600]'>Category :</span> {item.category}</h5>
//                                 <h5 className='pl-3 text-[14px] text-[#0000008c]'><span className='font-[600]'>subcategory :</span> {item.subcategory}</h5>
//                                 <h5 className='pl-3 text-[14px] mt-2 text-[#0000008c]'><span className='font-[600]'>Quantity :</span> {item.qty}</h5>


//                                 <div className='mt-2'>
//                                     {item.showWithChain !== undefined && (
//                                         <h5 className='pl-3 text-[14px] text-[#0000008c]'>
//                                             <span className='font-[600]'>Chain :</span> {item.showWithChain ? 'With Chain' : 'Without Chain'} ({item.selectedChainSize})
//                                         </h5>
//                                     )}

//                                     {item.selectedColor !== null && (
//                                         <h5 className='pl-3 text-[14px] text-[#0000008c]'>
//                                             <span className='font-[600]'>Metal Color :</span> {metalColors[item.selectedColor]}
//                                         </h5>
//                                     )}

//                                     {item.selectedEnamelColor !== null && (
//                                         <h5 className='pl-3 text-[14px] text-[#0000008c]'>
//                                             <span className='font-[600]'>Enamel :</span> {item.selectedEnamelColor}
//                                         </h5>
//                                     ) }
//                                 </div>
//                                 <div className='mt-3'>
//                                     <h5 className='pl-3 text-[14px] text-[#0000008c]'><span className='font-[600]'>Weight </span></h5>
//                                     <h5 className='pl-3 text-[14px] text-[#0000008c]'><span className='font-[600]'>Gold :</span>{item.goldWeight ? item.goldWeight.weight : "not Updated"}</h5>
//                                     <h5 className='pl-3 text-[14px] text-[#0000008c]'><span className='font-[600]'>Diamond :</span>{item.diamondWeight ? item.diamondWeight.weight : "Not upfded"}</h5>



//                                 </div>




//                                 <h5 className='pl-3 text-[16px] mt-2 text-[#0000008c]'>₹{item.chainPrice > 0 ? item.discountPrice + item.chainPrice : item.discountPrice} x {item.qty}</h5>

//                             </div>
//                         </div>
//                     )
//                 })
//             }
//             </div>

            
//             <div className='border-t w-full text-right mb-5'>
//                 <h5 className='pt-3 text-[18px]'>Total Price : <strong>₹{data?.totalPrice}</strong> </h5>

//             </div>
//             <div className="w-full flex justify-between items-center">
//                 <div className='w-[60%] '>
//                     <h4 className='pt-3 text-[20px] font-[600]'>Shipping Address</h4>
//                     <h4 className='pt-3 text-[18px] text-[#000b]'>{data?.shippingAddress.name}</h4>
//                     <h4 className='pt-3 text-[18px] text-[#000b]'>{data?.shippingAddress.address1}</h4>
//                     <h4 className='pt-1 text-[18px] text-[#000b]'>{data?.shippingAddress.address2}</h4>
//                     <h4 className='pt-1 text-[18px] text-[#000b]'>{data?.shippingAddress.city}</h4>
//                     <h4 className='pt-1 text-[18px] text-[#000b]'>{data?.shippingAddress.country}</h4>
//                     <h4 className='pt-1 text-[18px] font-[500] text-[#000b]'>{data?.shippingAddress?.phoneNumber}</h4>
//                 </div>

//                 <div className="w-[30%]">
//                     <h4 className='pt-3 text-[20px]'>Payment Information</h4>
//                     <h4>Status : {
//                         data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"

//                     }
//                     </h4>
//                     <h4>Type : {
//                         data?.paymentInfo?.type
//                     }
//                     </h4>
//                 </div>

//             </div>

//             <div className='w-full mt-5'>
//                 <h4 className='pt-3 text-[20px] font-[600]'>Order Status :</h4>
//                 {
//                     data?.status !== "Processing Refund" && data?.status !== "refund Success" && (
//                         <select name="" id="" value={status} onChange={(e) => { setStatus(e.target.value) }} className='w-[200px] border h-[35px] mt-2 rounded-[5px] pl-2'>
//                             {
//                                 [
//                                     "Confirmed",
//                                     "Processing",
//                                     "Shipping",
//                                     "Received",
//                                     "On the way",
//                                     "Delivered"
//                                 ].slice(
//                                     [
//                                         "Confirmed",
//                                         "Processing",
//                                         "Shipping",
//                                         "Received",
//                                         "On the way",
//                                         "Delivered"
//                                     ].indexOf(data?.status)
//                                 ).map((option, index) => (
//                                     <option value={option} key={index}>{option}</option>
//                                 ))
//                             }
//                         </select>
//                     )
//                 }
//                 {
//                     data?.status === "Processing Refund" || data?.status === "refund Success" ?
//                         (
//                             <select name="" id="" value={status} onChange={(e) => { setStatus(e.target.value) }} className='w-[200px] border h-[35px] mt-2 rounded-[5px] pl-2'>
//                                 {
//                                     [
//                                         "Processing Refund",
//                                         "refund Success",

//                                     ].slice(
//                                         [
//                                             "Processing Refund",
//                                             "refund Success"
//                                         ].indexOf(data?.status)
//                                     ).map((option, index) => (
//                                         <option value={option} key={index}>{option}</option>
//                                     ))
//                                 }

//                             </select>
//                         ) :
//                         null
//                 }

//                 <div className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#e94560] font-[600] !h-[45px] text-[18px]`}
//                     onClick={data?.status !== "Processing Refund" ? orderUpdateHandler : refundOrderUpdateHandler}>
//                     Update Status

//                 </div>

//             </div>


//         </div>
//     )
// }

// export default OrderDetails



import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsFillBagFill } from 'react-icons/bs'
import { CiViewList } from "react-icons/ci"
import axios from 'axios'
import { toast } from 'react-toastify'
import styles from '@/Styles/styles'
import { getAllOrdersOfShop } from '@/redux/actions/order'
import { imgdburl, server } from '@/server'
import { FaFileInvoice, FaTimes } from 'react-icons/fa'

function OrderDetails() {
    const { orders } = useSelector((state) => state.order)
    const { seller } = useSelector((state) => state.seller)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [status, setStatus] = useState("")
    const [docketNumber, setDocketNumber] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const data = orders && orders.find((item) => item._id === id)
    console.log(data,"data in shop order")

    useEffect(() => {
        dispatch(getAllOrdersOfShop(seller._id))
    }, [dispatch])
    const metalColors = {
        0: "Yellow Gold",
        1: "Rose Gold",
        2: "White Gold",
      };

    const orderUpdateHandler = async (e) => {
        e.preventDefault()
        if (status === "Shipping" && !docketNumber) {
            // Check if docket number is entered
            return toast.error("Please enter the docket number")
        }
        await axios.put(`${server}/order/update-order-status/${id}`, { status, docketNumber }, { withCredentials: true })
            .then((res) => {
                toast.success("Order Updated")
                navigate("/dashboard-orders")
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.response.data.message)
            })
    }

             const refundOrderUpdateHandler = async (e) => {
             e.preventDefault()

             await axios.put(`${server}/order/order-refund-success/${id}`, {
                 status
             }, { withCredentials: true }).then((res) => {
                 toast.success("Order Updated")
                 dispatch(getAllOrdersOfShop(seller._id))
                 navigate("/dashboard-orders")
                 window.location.reload()


             }).catch((error) => {
                 console.log(error)
                 toast.error(error.response.data.message)

             })


         }

         const cancelOrderHandler = async () => {
            try {
              await axios
                .put(`${server}/order/cancel-order/${id}`, { status: 'Canceled' }, { withCredentials: true })
                .then((res) => {
                  toast.success('Order Canceled');
                  dispatch(getAllOrdersOfShop(seller._id));
                  navigate('/dashboard-orders');
                  window.location.reload();
                })
                .catch((error) => {
                  console.log(error);
                  toast.error(error.response.data.message);
                });
            } catch (error) {
              console.log(error);
              toast.error('Failed to cancel the order');
            }
          };

    const viewPDFHandler = () => {
        if (data && data.invoice) {
            const byteCharacters = atob(data.invoice); // Decode the Base64 string
            const byteNumbers = new Uint8Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const blob = new Blob([byteNumbers], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            window.open(url); // Open PDF in new tab
        } else {
            toast.error("No invoice available.");
        }
    };
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
          


    return (
        <div className={`relative py-4 min-h-screen ${styles.section}`}>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center'>
                    <BsFillBagFill size={30} color='crimson' />
                    <h1 className='pl-2 text-[25px]'>Order Details</h1>
                </div>
                <Link to="/dashboard-orders">
                    <div className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#e94560] font-[600] !h-[45px] text-[18px]`}>
                        <CiViewList className='mr-2' />
                        Order List
                    </div>
                </Link>
            </div>

            <div className='w-full flex items-center justify-between pt-6'>
                <div>
                <h5 className='text-[#000b]'>Order Id : - #<span>{data?._id}</span></h5>
                <h3 
                    className={`inline-block px-3 py-1 rounded-lg text-white ${
                        data?.status === 'Delivered' ? 'bg-green-500' :
                        data?.status === 'Cancelled' ? 'bg-red-500' :
                        data?.status === 'Shipping' ? 'bg-yellow-500' :

                        
                        'bg-gray-500'
                    }`}>
                    Order status: {data?.status}
                    </h3>

                </div>
                <h5 className='text-[#000b]'>Placed on :- <span>{data?.createdAt?.slice(0, 10)}</span> </h5>
            </div>

            <div className='flex justify-between mt-2'>
            <button onClick={togglePopover}  className='bg-black text-white px-4 py-2 rounded flex items-center'>
            <FaFileInvoice className='mr-2'/>
                Download Order
            </button>
            <button onClick={viewPDFHandler} className='bg-black text-white px-4 py-2 rounded flex items-center'>
            <FaFileInvoice className='mr-2'/>
                View PDF Invoice
            </button>


            </div>
           
            {/* Order Items */}
            <div>
            {data && data?.cart.map((item, index) =>
            {
                const productCategory = item.category || "";
                const productType = getProductType(productCategory);
                return   (
                    <div key={index} className='w-full px-4 py-5 flex items-start mt-5 mb-5 border border-[#ddd] rounded-lg shadow-sm'>
                 <img 
                // src={`${item.images[0].url}`}
                    src={
                    item.images && item.images[0]?.url?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                        ? item.images[0].url.replace(
                            /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                            `${imgdburl}/uploads/images`
                        )
                        : `${imgdburl}${item.images[0]?.url}` // Prepend imgdburl if not a Cloudinary URL
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
                        {item.selectedCombination !== null && (
                            <h5 className='text-sm text-[#0000008c]'>
                                <span className='font-bold'>combination:</span> {item.selectedCombination}
                            </h5>
                        )}
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>Weight:</span></h5>
                        <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>{productType === 'gold' ? 'Gold' : 'Silver'}:</span> {item.goldWeight ? item.goldWeight.weight : "Not Updated"}</h5>
                        <h5 className='text-sm text-[#0000008c]'><span className='font-bold'>Diamond:</span> {item.diamondWeight ? item.diamondWeight.weight : "Not Updated"}</h5>
                    </div>
                    <h5 className='text-lg mt-2 text-[#0000008c]'>₹{item.chainPrice > 0 ? item.discountPrice + item.chainPrice : item.discountPrice} x {item.qty}</h5>
                </div>
            </div>
        )
            } 
         )}
            </div>


            <div className='border-t w-full text-right mb-5'>
                <h5 className='pt-3 text-[15px]'>Coupon Discount :- <strong>{data?.couponDiscount ? `₹ ${data?.couponDiscount}`  : "No Coupon Applied" }</strong></h5>
                <h5 className='pt-3 text-[18px]'>Total Price : <strong>₹{data?.totalPrice}</strong> </h5>

            </div>

            <div className="w-full flex justify-between items-center mb-5">
                <div className='w-[50%] '>
                    <h4 className='pt-3 text-[20px] font-[600]'>Shipping Address</h4>
                    <h4 className='pt-3 text-[15px] text-[#000b]'>{data?.shippingAddress.name}</h4>
                    <h4 className='pt-3 text-[15px] text-[#000b]'>{data?.shippingAddress.address1}</h4>
                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.shippingAddress.address2}</h4>

                    <div className='flex gap-2'>
                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.shippingAddress.city}</h4>
                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.shippingAddress.zipCode}</h4>
                    </div>

                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.shippingAddress.country}</h4>
                    <h4 className='pt-1 text-[15px] font-[500] text-[#000b]'>{data?.shippingAddress?.email}</h4>

                    <h4 className='pt-1 text-[15px] font-[500] text-[#000b]'>{data?.shippingAddress?.phoneNumber}</h4>
                </div>
                <div className='w-[50%] '>
                    <h4 className='pt-3 text-[20px] font-[600]'>Billing Address</h4>
                    <h4 className='pt-3 text-[15px] text-[#000b]'>{data?.billingAddress?.name}</h4>
                    <h4 className='pt-3 text-[15px] text-[#000b]'>{data?.billingAddress?.address1}</h4>
                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.billingAddress?.address2}</h4>
                    <div className='flex gap-2'>
                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.billingAddress?.city}</h4>
                    <h4 className='pt-1 text-[15px] text-[#000b]'>- {data?.billingAddress?.zipCode}</h4>

                    </div>

                    <h4 className='pt-1 text-[15px] text-[#000b]'>{data?.billingAddress?.country}</h4>
                    <h4 className='pt-1 text-[15px] font-[500] text-[#000b]'>{data?.billingAddress?.email}</h4>

                    <h4 className='pt-1 text-[15px] font-[500] text-[#000b]'>{data?.billingAddress?.phoneNumber}</h4>
                </div>
                
            </div>
            <div className="w-[100%] border-t">
                    <h4 className='pt-3 text-[20px] font-[600]'>Payment Information</h4>
                    <h4 className='pt-3 text-[15px] text-[#000b]'>Status : {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}</h4>
                    <h4 className='pt-3 text-[15px] text-[#000b]'>Type : {data?.paymentInfo?.type}</h4>
                </div>

            <div className='w-full mt-5 border-t'>
                <h4 className='pt-3 text-[20px] font-[600]'>Order Status :</h4>
                {data?.status !== 'Cancelled' && (
        <>
           {
                     data?.status !== "Processing Refund" && data?.status !== "refund Success" && (
                        <select
                    value={status}
                    onChange={(e) => {
                        setStatus(e.target.value)
                        if (e.target.value !== "Shipping") {
                            setDocketNumber("")
                        }
                    }}
                    className='w-[200px] border h-[35px] mt-2 rounded-[5px] pl-2'
                >
                    {
                        [
                            "Confirmed",
                            "Processing",
                            "Shipping",
                            "Received",
                            "On the way",
                            "Delivered"
                        ].slice(
                            [
                                "Confirmed",
                                "Processing",
                                "Shipping",
                                "Received",
                                "On the way",
                                "Delivered"
                            ].indexOf(data?.status)
                        ).map((option, index) => (
                            <option value={option} key={index}>{option}</option>
                        ))
                    }
                </select>

                     )
                    }

                {/* Conditional Docket Number Input */}
                {status === "Shipping" && (
                    <div className='mt-4'>
                        <h4 className='text-[18px] font-[600]'>Enter Docket Number:</h4>
                        <input
                            type="text"
                            value={docketNumber}
                            onChange={(e) => setDocketNumber(e.target.value)}
                            className='w-[200px] border h-[35px] mt-2 rounded-[5px] pl-2'
                            placeholder='Enter docket number'
                        />
                    </div>
                )}

                {
                     data?.status === "Processing Refund" || data?.status === "refund Success" ?
                         (
                             <select name="" id="" value={status} onChange={(e) => { setStatus(e.target.value) }} className='w-[200px] border h-[35px] mt-2 rounded-[5px] pl-2'>
                                 {
                                     [
                                         "Processing Refund",
                                         "refund Success",

                                     ].slice(
                                         [
                                             "Processing Refund",
                                             "refund Success"
                                         ].indexOf(data?.status)
                                     ).map((option, index) => (
                                         <option value={option} key={index}>{option}</option>
                                     ))
                                 }

                             </select>
                         ) :
                         null
                 }
                 <div className='flex '>

                <button
                     onClick={data?.status !== "Processing Refund" ? orderUpdateHandler : refundOrderUpdateHandler}
                    className={`${styles.button} text-white mt-5`}
                >
                    <span>

                    Update Order
                    </span>
                </button>
                 {/* Cancel Order Button */}
                    {data?.status !== 'Cancelled' && (
                        <button onClick={cancelOrderHandler} className={`${styles.button} text-white mt-5 bg-red-500 ml-4`}>
                        Cancel Order
                        </button>
                    )}
                 </div>


                 </>
                )}
             
            </div>
            {data?.status === 'Cancelled' && (
                <div className='text-red-500 mt-5'>
                <strong>Order has been Cancelled.</strong> No further actions can be performed.
                </div>
            )}


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
                        <h5 className='text-[#000b] text-sm font-semibold'>Order No: <span className="font-normal">{data?._id}</span></h5>
                        <h5 className='text-[#000b] text-sm font-semibold'>Placed on: <span className="font-normal">{data?.createdAt?.slice(0, 10)}</span></h5>
                    </div>

                    <div className="space-y-6">
                        {data?.cart.map((item, index) => {
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
                                                <h5>Online Platform:</h5> <h5 className='text-red-500'>Tiny Tiaraa (Website)</h5>
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
                Total Price: <strong className="text-[#d9534f]">₹{data?.totalPrice}</strong>
            </h5>
            </div>
            <div className="grid grid-cols-2 gap-6 py-6 border-b">
            {/* Shipping Address */}
            <div className='flex flex-col gap-0.5'>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Shipping Address</h4>
                <h5 className="text-gray-700 text-sm"><span className="font-medium">Name:</span> {data?.shippingAddress?.name}</h5>
                <h5 className="text-gray-700 text-sm"><span className="font-medium">Address:</span> {data?.shippingAddress?.address1}, {data?.shippingAddress?.address2}</h5>
                <h5 className="text-gray-700 text-sm"><span className="font-medium">City:</span> {data?.shippingAddress?.city}, {data?.shippingAddress?.zipCode}</h5>
                <h5 className="text-gray-700 text-sm"><span className="font-medium">Country:</span> {data?.shippingAddress?.country}</h5>
                <h5 className="text-gray-700 text-sm"><span className="font-medium">Email:</span> {data?.shippingAddress?.email}</h5>
                <h5 className="text-gray-700 text-sm"><span className="font-medium">Phone:</span> {data?.shippingAddress?.phoneNumber}</h5>
            </div>

            {/* Billing Address */}
            <div className='flex flex-col gap-0.5'>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Billing Address</h4>
                <h5 className=" text-gray-700 text-sm"><span className="font-medium">Name:</span> {data?.billingAddress?.name}</h5>
                <h5 className=" text-gray-700 text-sm"><span className="font-medium">Address:</span> {data?.billingAddress?.address1}, {data?.billingAddress?.address2}</h5>
                <h5 className=" text-gray-700 text-sm"><span className="font-medium">City:</span> {data?.billingAddress?.city}, {data?.billingAddress?.zipCode}</h5>
                <h5 className=" text-gray-700 text-sm"><span className="font-medium">Country:</span> {data?.billingAddress?.country}</h5>
                <h5 className=" text-gray-700 text-sm"><span className="font-medium">Email:</span> {data?.billingAddress?.email}</h5>
                <h5 className=" text-gray-700 text-sm"><span className="font-medium">Phone:</span> {data?.billingAddress?.phoneNumber}</h5>
            </div>
            </div>

                        {/* payment status */}

                    <div className="pt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Information</h4>
                    <p className="text-gray-700 text-sm"><span className="font-medium">Status:</span> <span className={`font-bold ${(data?.paymentInfo?.status === 'Succeeded' || data?.paymentInfo?.status === 'success' ) ? 'text-green-600' : 'text-red-500'}`}>
                        {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
                    </span></p>
                    <p className="text-gray-700 text-sm"><span className="font-medium">Type:</span> {data?.paymentInfo?.type}</p>
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
        {data?.cart.map((item, index) => (
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
        {data?.cart.map((item, index) => (
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
    )
}

export default OrderDetails
