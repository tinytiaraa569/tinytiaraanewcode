import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProductShop } from '../redux/actions/product'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { DataGrid } from '@mui/x-data-grid'
import { deleteEvent, getAllEventsShop } from '@/redux/actions/event'
import styles from '@/Styles/styles'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'
import { server } from '@/server'
import { toast } from 'react-toastify'
import { Switch } from '@mui/material';


function AllCoupoun() {

    const { seller } = useSelector((state) => state.seller)
    const { products } = useSelector((state) => state.products)

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [coupons, setCoupons] = useState([])


    const [name, setName] = useState("")
    const [value, setValue] = useState(null)
    const [percentageDiscount, setPercentageDiscount] = useState(null);
    const [minAmount, setMinAmount] = useState(null)
    const [maxAmount, setMaxAmount] = useState(null)
    const [selectedProducts, setSelectedProducts] = useState(null)
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [couponIdToEdit, setCouponIdToEdit] = useState(null); // For tracking the coupon being edited

    // Handle the "Edit" button click
    





    useEffect(() => {
        setIsLoading(true)
        axios.get(`${server}/coupon/get-coupon/${seller._id}`, {
            withCredentials: true
        }).then((res) => {
            console.log(res)
            setIsLoading(false)
            setCoupons(res.data.couponCodes);
        }).catch((error) => {
            setIsLoading(false)

        })
    }, [dispatch]);


    const handleEdit = (id) => {
        console.log(id, "coupon id to test");
    
        // Find the coupon by id from the coupons list
        const selectedCoupon = coupons.find(coupon => coupon._id === id);
    
        if (selectedCoupon) {
            console.log(selectedCoupon, "Selected Coupon");
    
            // Function to format date to 'YYYY-MM-DDTHH:mm'
            const formatDateForInput = (date) => {
                if (date) {
                    const parsedDate = new Date(date);
                    // Convert the date to 'YYYY-MM-DDTHH:mm' format
                    return parsedDate.toISOString().slice(0, 16); // Remove seconds and milliseconds
                }
                return '';
            };
    
            // Format the startDate and endDate
            const formattedStartDate = formatDateForInput(selectedCoupon.startDate);
            const formattedEndDate = formatDateForInput(selectedCoupon.endDate);
    
            // Now set all the coupon data to the state variables
            setName(selectedCoupon.name);
            setValue(selectedCoupon.value);
            setPercentageDiscount(selectedCoupon.percentageDiscount);
            setMinAmount(selectedCoupon.minAmount || '');
            setMaxAmount(selectedCoupon.maxAmount || '');
            setStartDate(formattedStartDate);  // Set the formatted startDate
            setEndDate(formattedEndDate);      // Set the formatted endDate
            setSelectedProducts(selectedCoupon.selectedProducts || '');
            setCouponIdToEdit(selectedCoupon._id); // Store coupon id for the update
            setOpen(true); // Open the modal to edit the coupon
        } else {
            console.log("Coupon not found");
        }
    };
    







    const handleDelete = async (id) => {
        axios.delete(`${server}/coupon/delete-coupon/${id}`, { withCredentials: true }).then((res) => {
            toast.success("Coupon code deleted succesfully!")
        })
        window.location.reload();
    };
    const handleToggleLive = async (e, id) => {
        const updatedStatus = e.target.checked; // The new 'live' status (true/false)
    
        try {
          // Optimistically update the UI
          setCoupons((prevCoupons) =>
            prevCoupons.map((coupon) =>
              coupon._id === id ? { ...coupon, live: updatedStatus } : coupon
            )
          );
    
          // Send API request to toggle live status
          const { data } = await axios.patch(`${server}/coupon/coupon-toggle/${id}`, { live: updatedStatus });
    
          // Optional: Sync the state with the response, in case of server-side changes
          setCoupons((prevCoupons) =>
            prevCoupons.map((coupon) =>
              coupon._id === id ? { ...coupon, live: data.coupon.live } : coupon
            )
          );
    
          console.log('Coupon live status updated');
        } catch (error) {
          console.error('Failed to toggle coupon live status:', error);
    
          // Revert the optimistic update in case of failure
          setCoupons((prevCoupons) =>
            prevCoupons.map((coupon) =>
              coupon._id === id ? { ...coupon, live: !updatedStatus } : coupon
            )
          );
        }
      };
    
    useEffect(() => {
        dispatch(getAllProductShop(seller._id));
    }, [dispatch, seller._id]);

    // console.log(products)

    const columns = [
        { field: 'id', headerName: 'Coupon Id', minWidth: 150, flex: 0.7 },

        { field: 'name', headerName: 'Name', minWidth: 110, flex: 1.4 },
        { field: 'price', headerName: 'Price Off', minWidth: 80, flex: 0.6 },
          // Combined Start Date and End Date Column
            {
                field: 'dateRange',
                headerName: 'Date Range',
                minWidth: 200,
                flex: 1.5,
                renderCell: (params) => {
                    const { startDate, endDate } = params.row;

                    const formatDate = (date) => {
                        const parsedDate = new Date(date);
                        return parsedDate instanceof Date && !isNaN(parsedDate) ? parsedDate.toLocaleDateString() : null;
                    };

                    const formattedStartDate = formatDate(startDate);
                    const formattedEndDate = formatDate(endDate);

                    // If both startDate and endDate are not set, show "Not Set" once
                    if (!formattedStartDate && !formattedEndDate) {
                        return <span>Not Set</span>;
                    }

                    return (
                        <span>{formattedStartDate || 'Not Set'} to {formattedEndDate || 'Not Set'}</span>
                    );
                }
            },
            {
                field: 'live',
                headerName: 'Live Status',
                width: 150,
                renderCell: (params) => (
                    <Switch
                        checked={params.row.live} // Check if the coupon is live
                        onChange={(e) => handleToggleLive(e, params.row.id)} // Handle the toggle change
                        sx={{
                            '& .MuiSwitch-thumb': {
                                backgroundColor: params.row.live ? 'green' : 'gray', // Thumb color based on live status
                            },
                            '& .MuiSwitch-track': {
                                backgroundColor: params.row.live ? 'lightgreen' : 'lightgray', // Track color based on live status
                            },
                            '&.Mui-checked .MuiSwitch-thumb': {
                                backgroundColor: 'green', // Ensure green color for checked state
                            },
                            '&.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: 'lightgreen', // Ensure light green track for checked state
                            },
                        }}
                    />
                ),
            },
            {
                field: 'edit',
                headerName: 'Edit',
                flex: 0.8,
                minWidth: 120,
                sortable: false,
                renderCell: (params) => (
                    <button onClick={() => handleEdit(params.row.id)}>
                        <AiOutlineEdit size={20} />
                    </button>
                ),
            },
            
        {
            field: 'Delete',
            headerName: 'Delete',
            flex: 0.8,
            minWidth: 120,
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleDelete(params.id)}>
                    <AiOutlineDelete size={20} />
                </button>
            ),
        },
    ];

    const rows = coupons && coupons.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.value !== null && item.value !== undefined ? `Rs ${item.value}` : `${item.percentageDiscount}%`,
        startDate: item?.startDate ? new Date(item.startDate).toLocaleDateString() : 'Not Set',
        endDate: item?.endDate ? new Date(item.endDate).toLocaleDateString() : 'Not Set',
        live: item?.live, 

    }));
    const handleClose = () => {
        setOpen(false); // Close the modal
        // Reset form state to default values
        setName('');  // Reset name
        setValue('');  // Reset value
        setPercentageDiscount('');  // Reset percentageDiscount
        setMinAmount('');  // Reset minAmount
        setMaxAmount('');  // Reset maxAmount
        setStartDate('');  // Reset startDate
        setEndDate('');  // Reset endDate
        setSelectedProducts('');  // Reset selectedProducts
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
       

        if(couponIdToEdit){
            await axios.put(`${server}/coupon/edit-coupon-code/${couponIdToEdit}`, {
                name,
                minAmount,
                maxAmount,
                selectedProducts,
                value,
                percentageDiscount,
                shop: seller,
                startDate,
                endDate,
            }, { withCredentials: true }).then((res) => {
                toast.success("CouponCode Updated Successfully!")
                setOpen(false)
                window.location.reload();
            }).catch((error) => {
                toast.error(error.response.data.message)
    
    
            })
        }else{
            await axios.post(`${server}/coupon/create-coupon-code`, {
                name,
                minAmount,
                maxAmount,
                selectedProducts,
                value,
                percentageDiscount,
                shop: seller,
                startDate,
                endDate,
            }, { withCredentials: true }).then((res) => {
                toast.success("CouponCode Created Successfully!")
                setOpen(false)
                window.location.reload();
            }).catch((error) => {
                toast.error(error.response.data.message)
    
    
            })
            
        }
        setOpen(false); // Close the form after submitting
        setCouponIdToEdit(null);



       
    }

    const location = useLocation();

    // Get the last segment of the URL (e.g., "dashboard" or "overview")
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPage = pathSegments[pathSegments.length - 1];
  
    // You can map the path segment to a more readable name
    const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1); // Capitalize first letter

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="min-w-[82%]  flex-grow px-10 pt-1 mt-10 bg-white">
                    <div className='flex justify-between'>
                        <div className='w-full'>


                      <h2 className='text-[22px] font-[500]'>All Coupoun</h2>
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
                    

                    <div className="w-full flex justify-end mb-3">
                        <div className={`${styles.button} !w-max !h-[40px] px-3 !rounded-[5px] mr-3`} onClick={() => setOpen(true)}>
                            <span className='text-white'>Create Coupoun Code</span>

                        </div>
                    </div>
                    </div>
                     {/* Wrapper for responsive DataGrid */}
                    <div className="w-full overflow-x-auto">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            autoHeight
                        />
                    </div>
                    {
                        open && (
                            <div className=" fixed top-0 left-0 w-full h-screen bg-[#0000006c] z-[1000] flex justify-center items-center">

                                <div className="w-[55%] mt-[100px] h-[85vh] overflow-y-scroll bg-white rounded-md shadow pb-5 ">
                                    <div className="w-full p-4 flex justify-end">
                                        <RxCross2 size={30} className='cursor-pointer' onClick={() =>{ 
                                            handleClose()
                                            }} />

                                    </div>

                                    <h5 className='text-[26px] font-Poppins text-center'>{couponIdToEdit ? 'Edit Coupon Code' : 'Create Coupon Code'}</h5>


                                    {/* create coupon code  */}


                                    <form action="" onSubmit={handleSubmit} className='px-8'>


                                        <div className='font-Poppins mt-4'>
                                            <label htmlFor="" className='pb-2'>Name <span className='text-red-500'>*</span></label>
                                            <input
                                                type="text"
                                                name='name'
                                                placeholder='Enter Your Coupon Code Name'
                                                className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                                value={name}
                                                onChange={(e) => { setName(e.target.value) }} />
                                        </div>

                                        <div className='font-Poppins mt-4'>
                                            <label htmlFor="" className='pb-2'>Discount Value <span className='text-red-500'>*</span></label>
                                            <input
                                                type="number"
                                                name='value'
                                                placeholder='Enter Discount Value'
                                                className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                            />
                                        </div>
                                        <div className='font-Poppins mt-4'>
                                            <label htmlFor="" className='pb-2'>Percentage Discount <span className='text-red-500'>*</span></label>
                                            <input
                                                type="number"
                                                name='percentageDiscount'
                                                placeholder='Enter Percentage Discount'
                                                className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                                value={percentageDiscount}
                                                onChange={(e) => setPercentageDiscount(e.target.value)}
                                            />
                                        </div>

                                        <div className='font-Poppins mt-4'>
                                            <label htmlFor="" className='pb-2'>Min Amount Order <span className='text-red-500'>(optional)</span></label>
                                            <input
                                                type="number"
                                                name='name'
                                                placeholder='Enter Your Coupon Code Min amount'
                                                className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                                value={minAmount}
                                                onChange={(e) => { setMinAmount(e.target.value) }} />
                                        </div>

                                        <div className='font-Poppins mt-4'>
                                            <label htmlFor="" className='pb-2'>Min Amount Order <span className='text-red-500'>(optional)</span></label>
                                            <input
                                                type="number"
                                                name='name'
                                                placeholder='Enter Your Coupon Code Max amount'
                                                className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                                value={maxAmount}
                                                onChange={(e) => { setMaxAmount(e.target.value) }} />
                                        </div>

                                        <div className='font-Poppins mt-4'>
                                        <label htmlFor="" className='pb-2'>Start Date <span className='text-red-500'>(optional)</span></label>
                                        <input
                                            type="datetime-local" // Changed to datetime-local for date and time
                                            name='startDate'
                                            className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            min={new Date().toISOString().slice(0, 16)} // Prevent past dates
                                        />
                                    </div>

                                    <div className='font-Poppins mt-4'>
                                        <label htmlFor="" className='pb-2'>End Date <span className='text-red-500'>(optional)</span></label>
                                        <input
                                            type="datetime-local" // Changed to datetime-local for date and time
                                            name='endDate'
                                            className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            min={startDate ? startDate : new Date().toISOString().slice(0, 16)} // Dynamically set min to startDate if available
                                        />
                                    </div>



                                        <div className='font-Poppins mt-4'>
                                            <label htmlFor='slcategory' className='pb-2'>selected Product <span className='text-red-500'>(optional)</span></label>
                                            <select
                                                id='slcategory'
                                                className='w-full mt-1 border h-[35px] rounded-[5px]'
                                                value={selectedProducts}
                                                onChange={(e) => setSelectedProducts(e.target.value)}
                                            >
                                                <option value=''>Choose a Selected product</option>
                                                {products && products.map((cat) => (
                                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        


                                        <div className='font-Poppins mt-7'>
                                            <input
                                                type="submit"
                                                name='name'
                                                placeholder='Enter Your Coupon Code Min amount'
                                                className='mt-1 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                                                value={couponIdToEdit ? 'Update Coupon' : 'Create Coupon'}
                                            />
                                        </div>


                                    </form>


                                </div>

                            </div>
                        )
                    }
                </div>
            )}
        </>
    )
}

export default AllCoupoun

