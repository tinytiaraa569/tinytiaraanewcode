import React, { useEffect, useState } from 'react'
import { backend_url, imgdburl, server } from '../server'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCamera, AiOutlineArrowRight, AiOutlineDelete } from 'react-icons/ai'
import styles from '../Styles/styles'
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineTrackChanges, MdSpatialTracking } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


import { Link, useNavigate } from "react-router-dom";
import { deleteUserAddress, loadUser, updateUserInformation, updatUserAddress } from '@/redux/actions/user'
import { toast } from 'react-toastify'
import axios from 'axios'
import { RxCross1 } from 'react-icons/rx'
import { Country, State } from 'country-state-city'
import { getAllOrdersOfUser } from '@/redux/actions/order'
import ReferralComponent from '@/Refer/ReferralComponent'
import { FaRegUser, FaUserAlt } from "react-icons/fa";

function ProfileContent({ active, setActive }) {
    const { user, error, successMessage } = useSelector((state) => state.user)
    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)
    const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber)
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState(null)

    const dispatch = useDispatch()


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearErrors" });
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch({ type: "clearMessages" });
        }
    }, [error, successMessage]);





    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUserInformation(name, email, phoneNumber, password))


    }

    const handleImage = async (e) => {
        const files = e.target.files[0]
        setAvatar(files)


        const formData = new FormData()
        formData.append("image", e.target.files[0])

        await axios.put(`${server}/user/update-avatar`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        }).then((response) => {
            dispatch(loadUser())
            toast.success("Picture Updated Successfully")
        }).catch((error) => {
            console.log(error)

        })


    }


    



    return (
        <div className='w-full  font-Poppins '>
            {/* profile section */}
            {
                active === 1 &&
                (
                    <>
                    <div className="flex justify-center w-full pb-6">
                      <div className="relative">
                        {/* Display avatar or fallback icon */}
                        {user?.avatar?.url && user?.avatar.url.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/) ? (
                          <img
                            src={user?.avatar.url
                              .replace(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/, `${imgdburl}/uploads/images`)
                              .replace("/avatars/", "/products/")}
                            className="w-[130px] h-[130px] rounded-full object-fill border-[3px] border-[#60acdf]"
                            alt="User Avatar"
                          />
                        ) : user?.avatar?.url ? (
                          <img
                            src={`${imgdburl}${user?.avatar?.url}`.replace("/avatars/", "/products/")}
                            className="w-[130px] h-[130px] rounded-full object-fill border-[3px] border-[#60acdf]"
                            alt="User Avatar"
                          />
                        ) : (
                          <FaUserAlt className="w-[90px] h-[90px] text-gray-500 border-2 border-gray-500 rounded-full p-1" />
                        )}
                  
                        {/* Camera icon for image upload */}
                        <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                          <input
                            type="file"
                            id="image"
                            className="hidden"
                            onChange={handleImage}
                          />
                          <label htmlFor="image">
                            <AiOutlineCamera />
                          </label>
                        </div>
                      </div>
                    </div>
                  
                    <div className="w-full px-5 font-Poppins">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Email */}
                        <div className="w-full flex flex-col gap-4 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <label htmlFor="name" className="block pb-2 font-[500]">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              className={`${styles.input} w-full`}
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="w-full sm:w-1/2">
                            <label htmlFor="email" className="block pb-2 font-[500]">Email</label>
                            <input
                              type="email"
                              id="email"
                              className={`${styles.input} w-full`}
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                  
                        {/* Phone Number and Password */}
                        <div className="w-full flex flex-col gap-4 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <label htmlFor="phone" className="block pb-2 font-[500]">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              className={`${styles.input} w-full`}
                              required
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                          <div className="w-full sm:w-1/2">
                            <label htmlFor="password" className="block pb-2 font-[500]">Enter Your Password</label>
                            <input
                              type="password"
                              id="password"
                              className={`${styles.input} w-full`}
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                  
                        {/* Submit Button */}
                        <div className="flex justify-center">
                          <input
                            type="submit"
                            value="Submit"
                            className="w-[250px] h-[40px] border border-[#43a2e0] text-[#43a2e0] text-center rounded-[3px] mt-4 cursor-pointer hover:bg-[#43a2e0] hover:text-white transition"
                          />
                        </div>
                      </form>
                    </div>
                  </>
                  

                )
            }


            {/* orders section */}
            {
                active === 2 && (
                    <div>
                        <AllOrders />
                    </div>
                )
            }



            {/* refunds section */}
            {
                active === 3 && (
                    <div>
                        <AllRefundOrders />
                    </div>
                )
            }

            {/* refunds section */}
            {
                active === 5 && (
                    <div>
                        <TrackOrder />
                    </div>
                )
            }

            {/* changePassword  */}
            {
                active === 6 && (
                    <div>
                        <ChangePassword />
                    </div>
                )
            }


            {/* useraddress section */}
            {
                active === 7 && (
                    <div>
                        <Address setActive={setActive} />
                    </div>
                )
            }

             {/* useraddress section
             {
                active === 8 && (
                    <div>
                        <ReferralComponent setActive={setActive} />
                    </div>
                )
            } */}




        </div>
    )
}




// AllOrders
// const AllOrders = () => {

//     const { orders } = useSelector((state) => state.order)
//     const { user } = useSelector((state) => state.user)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getAllOrdersOfUser(user._id))
//     }, [])

//     console.log(user,'allordercomp')
//     const columns = [
//         { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
//         {
//             field: "status",
//             headerName: "Status",
//             minWidth: 130,
//             flex: 0.7,
//             cellClassName: (params) => {
//                 return params.value === "Delivered" ? "greenColor" : "redColor";
//             },
//         },
//         {
//             field: "itemsQty",
//             headerName: "Items Qty",
//             type: "number",
//             minWidth: 130,
//             flex: 0.7,
//         },
//         {
//             field: "total",
//             headerName: "Total",
//             type: "number",
//             minWidth: 130,
//             flex: 0.8,
//         },
//         {
//             field: "action",
//             flex: 1,
//             minWidth: 150,
//             headerName: "",
//             sortable: false,
//             renderCell: (params) => (
//                 <Link to={`/user/order/${params.id}`}>
//                     <div className='flex justify-end items-center'>
//                         <span className='font-Poppins'>Order Details</span>
//                         <AiOutlineArrowRight size={20} />
//                     </div>
//                 </Link>
//             ),
//         },
//     ];
//     const row = [];

//     orders && orders.forEach((item) => {
//         row.push({
//             id: item._id,
//             itemsQty: item.cart.length,
//             total: "Inr ₹" + item.totalPrice,
//             status: item.status
//         })

//     })




//     return (
//         <div className='pl-8 pt-1 font-Poppins'>
//             <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />

//         </div>
//     )

// }
// const AllOrders = () => {

//     const { orders } = useSelector((state) => state.order)
//     const { user } = useSelector((state) => state.user)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getAllOrdersOfUser(user.email))
//     }, [])

//     console.log(user,'allordercomp')
//     const columns = [
//         { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
//         {
//             field: "status",
//             headerName: "Status",
//             minWidth: 130,
//             flex: 0.7,
//             cellClassName: (params) => {
//                 return params.value === "Delivered" ? "greenColor" : "redColor";
//             },
//         },
//         {
//             field: "itemsQty",
//             headerName: "Items Qty",
//             type: "number",
//             minWidth: 130,
//             flex: 0.7,
//         },
//         {
//             field: "total",
//             headerName: "Total",
//             type: "number",
//             minWidth: 130,
//             flex: 0.8,
//         },
//         {
//             field: "action",
//             flex: 1,
//             minWidth: 150,
//             headerName: "",
//             sortable: false,
//             renderCell: (params) => (
//                 <Link to={`/user/order/${params.id}`}>
//                     <div className='flex justify-end items-center'>
//                         <span className='font-Poppins'>Order Details</span>
//                         <AiOutlineArrowRight size={20} />
//                     </div>
//                 </Link>
//             ),
//         },
//     ];
//     const row = [];

//     orders && orders.forEach((item) => {
//         row.push({
//             id: item._id,
//             itemsQty: item.cart.length,
//             total: "Inr ₹" + item.totalPrice,
//             status: item.status
//         })

//     })




//     return (
//         <div className='pl-8 pt-1 font-Poppins'>
//             <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />

//         </div>
//     )

// }

///new code testing and reponive 
const AllOrders = () => {
    const { orders } = useSelector((state) => state.order);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 768);

    // Detect window resizing
    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        dispatch(getAllOrdersOfUser(user.email));
    }, [dispatch, user.email]);

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.value === "Delivered" ? "greenColor" : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: "action",
            flex: 1,
            minWidth: 150,
            headerName: "",
            sortable: false,
            renderCell: (params) => (
                <Link to={`/user/order/${params.id}`}>
                    <div className="flex justify-end items-center">
                        <span className="font-Poppins">Order Details</span>
                        <AiOutlineArrowRight size={20} />
                    </div>
                </Link>
            ),
        },
    ];
    const rows = [];

    orders && orders.forEach((item) => {
        const firstImageUrl = item.cart.length > 0 && item.cart[0].images && item.cart[0].images[1].url;  // Extract the first image URL from the first product in the cart

             rows.push({
                 id: item._id,
                 itemsQty: item.cart.length,
                 total: "Inr ₹" + item.totalPrice,
                 status: item.status,
                image: firstImageUrl, // Add image to rows

             })
        
         })

    // const rows = orders?.map((item) => {
    //     const firstImageUrl = item.cart.length > 0 && item.cart[0].images && item.cart[0].images[1].url;  // Extract the first image URL from the first product in the cart
        
    //     return {
    //         id: item._id,
    //         itemsQty: item.cart.length,
    //         total: "₹" + item.totalPrice,
    //         status: item.status,
    //         image: firstImageUrl, // Add image to rows
    //     };
    // });
    return (
        <div className="pl-8 pt-1 font-Poppins">
            {isMobileOrTablet ? (
                // Responsive Layout for Mobile and Tablet
                <div className="space-y-4">
                    <div className='text-center'>

                    <h3 className='text-center font-[600] border-b-2 border-b-black inline-block'>Order Details</h3>
                    </div>
                    {rows.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
                        >
                            {order.image && (
                                <div className="mb-5 flex justify-center " >
                                  <img
                                    src={
                                        order.image?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                            ? order.image.replace(
                                                /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                                `${imgdburl}/uploads/images`
                                            )
                                            : `${imgdburl}${order.image}` // Prepend imgdburl if not a Cloudinary URL
                                    }
                                    alt="Order Product"
                                    className="w-32 h-32 object-cover scale-110 border border-gray-200"
                                />
                                </div>
                            )}
                            <div className="mb-2">
                                <strong>Order ID:</strong> {order.id}
                            </div>
                            <div className="mb-2">
                                <strong>Status:</strong>{" "}
                                <span
                                    className={`${
                                        order.status === "Delivered"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                            <div className="mb-2">
                                <strong>Items Qty:</strong> {order.itemsQty}
                            </div>
                            <div className="mb-2">
                                <strong>Total:</strong> {order.total}
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    to={`/user/order/${order.id}`}
                                    className="text-blue-500 hover:underline flex items-center"
                                >
                                    <span>Order Details</span>
                                    <AiOutlineArrowRight size={20} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // DataGrid for larger screens
                <DataGrid rows={rows} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
            )}
        </div>
    );
};

// const AllRefundOrders = () => {
//     const { orders } = useSelector((state) => state.order)
//     const { user } = useSelector((state) => state.user)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getAllOrdersOfUser(user._id))
//     }, [])

//     const eligibleOrders = orders && orders.filter((item) => item.status === "Processing Refund");
//     const columns = [
//         { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
//         {
//             field: "status",
//             headerName: "Status",
//             minWidth: 130,
//             flex: 0.7,
//             cellClassName: (params) => {
//                 return params.value === "Delivered" ? "greenColor" : "redColor";
//             },
//         },
//         {
//             field: "itemsQty",
//             headerName: "Items Qty",
//             type: "number",
//             minWidth: 130,
//             flex: 0.7,
//         },
//         {
//             field: "total",
//             headerName: "Total",
//             type: "number",
//             minWidth: 130,
//             flex: 0.8,
//         },
//         {
//             field: "action",
//             flex: 1,
//             minWidth: 150,
//             headerName: "",
//             sortable: false,
//             renderCell: (params) => (
//                 <Link to={`/user/order/${params.id}`}>
//                     <div className='flex justify-end items-center'>
//                         <span className='font-Poppins'>Order Details</span>
//                         <AiOutlineArrowRight size={20} />
//                     </div>
//                 </Link>
//             ),
//         },
//     ];
//     const row = [];

//     eligibleOrders && eligibleOrders.forEach((item) => {
//         row.push({
//             id: item._id,
//             itemsQty: item.cart.length,
//             total: "Inr ₹" + item.totalPrice,
//             status: item.status
//         })

//     })




//     return (
//         <div className='pl-8 pt-1 font-Poppins'>
//             <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />

//         </div>
//     )

// }

const AllRefundOrders = () => {
    const { orders } = useSelector((state) => state.order);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(
      window.innerWidth <= 768
    );
  
    // Handle window resize
    useEffect(() => {
      const handleResize = () => {
        setIsMobileOrTablet(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch, user._id]);
  
    const eligibleOrders =
      orders && orders.filter((item) => item.status === "Processing Refund");
  
    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
      {
        field: "status",
        headerName: "Status",
        minWidth: 130,
        flex: 0.7,
        cellClassName: (params) => {
          return params.value === "Delivered" ? "greenColor" : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
      {
        field: "total",
        headerName: "Total",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
      {
        field: "action",
        flex: 1,
        minWidth: 150,
        headerName: "",
        sortable: false,
        renderCell: (params) => (
          <Link to={`/user/order/${params.id}`}>
            <div className="flex justify-end items-center">
              <span className="font-Poppins">Order Details</span>
              <AiOutlineArrowRight size={20} />
            </div>
          </Link>
        ),
      },
    ];
    const rows = [];
  
    
    eligibleOrders &&
    eligibleOrders.forEach((item) => {
        const firstImageUrl =
        item.cart.length > 0 &&
        item.cart[0].images &&
        item.cart[0].images[1]?.url; // Safely extract the second image URL if it exists

        rows.push({
            id: item._id,
            itemsQty: item.cart.length,
            total: "Inr ₹" + item.totalPrice,
            status: item.status,
           image: firstImageUrl, // Add image to rows

        })
    });
  
    return (
      <div className="pl-8 pt-1 font-Poppins">
        {isMobileOrTablet ? (
          // Mobile and Tablet Layout
          <div className="space-y-4">
            <h3 className="text-center font-[600] border-b-2 border-b-black inline-block">
              Refund Orders
            </h3>
            {rows.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                {order.image && (
                                <div className="mb-5 flex justify-center " >
                                  <img
                                    src={
                                        order.image?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                            ? order.image.replace(
                                                /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                                `${imgdburl}/uploads/images`
                                            )
                                            : `${imgdburl}${order.image}` // Prepend imgdburl if not a Cloudinary URL
                                    }
                                    alt="Order Product"
                                    className="w-32 h-32 object-cover scale-110 border border-gray-200"
                                />
                                </div>
                            )}
                <div className="mb-2">
                  <strong>Order ID:</strong> {order.id}
                </div>
                <div className="mb-2">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      order.status === "Delivered"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="mb-2">
                  <strong>Items Qty:</strong> {order.itemsQty}
                </div>
                <div className="mb-2">
                  <strong>Total:</strong> {order.total}
                </div>
                <div className="flex justify-end">
                  <Link
                    to={`/user/order/${order.id}`}
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <span>Order Details</span>
                    <AiOutlineArrowRight size={20} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        )}
      </div>
    );
  };

// const TrackOrder = () => {
//     const { orders } = useSelector((state) => state.order)
//     const { user } = useSelector((state) => state.user)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getAllOrdersOfUser(user.email))
//     }, [])
//     console.log(orders,"from my orders")
//     const columns = [
//         { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
//         {
//             field: "status",
//             headerName: "Status",
//             minWidth: 130,
//             flex: 0.7,
//             cellClassName: (params) => {
//                 return params.value === "Delivered" ? "greenColor" : "redColor";
//             },
//         },
//         {
//             field: "itemsQty",
//             headerName: "Items Qty",
//             type: "number",
//             minWidth: 130,
//             flex: 0.7,
//         },
//         {
//             field: "total",
//             headerName: "Total",
//             type: "number",
//             minWidth: 130,
//             flex: 0.8,
//         },
//         {
//             field: "action",
//             flex: 1,
//             minWidth: 150,
//             headerName: "",
//             sortable: false,
//             renderCell: (params) => (
//                 <Link to={`/user/track/order/${params.id}`}>
//                     <div className='flex justify-end items-center'>
//                         <span className='font-Poppins mr-3'>Track Order</span>
//                         <MdOutlineTrackChanges  size={20} />
//                     </div>
//                 </Link>
//             ),
//         },
//     ];
//     const row = [];

//     orders && orders.forEach((item) => {
//         row.push({
//             id: item._id,
//             itemsQty: item.cart.length,
//             total: "Inr ₹" + item.totalPrice,
//             status: item.status
//         })

//     })






//     return (
//         <div className='pl-8 pt-1 font-Poppins'>
//             <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />

//         </div>
//     )

// }

const TrackOrder = () => {
    const { orders } = useSelector((state) => state.order);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 768);

    useEffect(() => {
        dispatch(getAllOrdersOfUser(user.email));
    }, [dispatch, user.email]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.value === "Delivered" ? "greenColor" : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: "action",
            flex: 1,
            minWidth: 150,
            headerName: "",
            sortable: false,
            renderCell: (params) => (
                <Link to={`/user/track/order/${params.id}`}>
                    <div className="flex justify-end items-center">
                        <span className="font-Poppins mr-3">Track Order</span>
                        <MdOutlineTrackChanges size={20} />
                    </div>
                </Link>
            ),
        },
    ];

    const rows = orders
    ? orders.map((item) => {
          const firstImageUrl =
              item.cart.length > 0 && item.cart[0].images && item.cart[0].images[1]?.url; // Extract the first image URL from the first product in the cart

          return {
              id: item._id,
              itemsQty: item.cart.length,
              total: "Inr ₹" + item.totalPrice,
              status: item.status,
              image: firstImageUrl, // Add image to rows
          };
      })
    : [];
    return (
        <div className="pl-8 pt-1 font-Poppins">
            {isMobileOrTablet ? (
                <div className="space-y-4">
                    <h3 className="text-center font-[600] border-b-2 border-b-black inline-block">
                        Track Orders
                    </h3>
                    {rows.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
                        >
                            {order.image && (
                                <div className="mb-5 flex justify-center " >
                                  <img
                                    src={
                                        order.image?.match(/https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/)
                                            ? order.image.replace(
                                                /https:\/\/res\.cloudinary\.com\/ddaef5aw1\/image\/upload\/v[0-9]+/,
                                                `${imgdburl}/uploads/images`
                                            )
                                            : `${imgdburl}${order.image}` // Prepend imgdburl if not a Cloudinary URL
                                    }
                                    alt="Order Product"
                                    className="w-32 h-32 object-cover scale-110 border border-gray-200"
                                />
                                </div>
                            )}
                            <div className="mb-2">
                                <strong>Order ID:</strong> {order.id}
                            </div>
                            <div className="mb-2">
                                <strong>Status:</strong>{" "}
                                <span
                                    className={`${
                                        order.status === "Delivered"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {order.status}
                                </span>
                            </div>
                            <div className="mb-2">
                                <strong>Items Qty:</strong> {order.itemsQty}
                            </div>
                            <div className="mb-2">
                                <strong>Total:</strong> {order.total}
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    to={`/user/track/order/${order.id}`}
                                    className="text-blue-500 hover:underline flex items-center"
                                >
                                    <span>Track Order</span>
                                    <MdOutlineTrackChanges size={20} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />
            )}
        </div>
    );
};


// const Address = () => {
//     const [open, setOpen] = useState(false)
//     const [country, setCountry] = useState("");
//     const [city, setCity] = useState("");
//     const [zipCode, setZipCode] = useState();
//     const [address1, setAddress1] = useState("");
//     const [address2, setAddress2] = useState("");
//     const [addressType, setAddressType] = useState("");
//     const { user } = useSelector((state) => state.user);

//     const dispatch = useDispatch();



//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (addressType === "" || country === "" || city === "") {
//             toast.error("Please fill all the fields!");
//         } else {
//             dispatch(updatUserAddress(country, city, address1, address2, zipCode, addressType))
//             setOpen(false);
//             setCountry("");
//             setCity("");
//             setAddress1("");
//             setAddress2("");
//             setZipCode(null);
//             setAddressType("");

//         }
//     };

//     const handleDelete = (item) => {
//         dispatch(deleteUserAddress(item._id))

//     }

//     const addressTypeData = [
//         {
//             name: "Default",
//         },
//         {
//             name: "Home",
//         },
//         {
//             name: "Office",
//         },
//     ];
//     return (
//         <div className='w-full px-5'>
//             {
//                 open && (
//                     <div className="fixed w-full h-screen bg-[#00000038] top-[5%] left-0 flex items-center justify-center">
//                         <div className="w-[35%] h-[70vh] bg-white rounded shadow relative overflow-y-scroll">
//                             <div className="w-full flex justify-end p-3">

//                                 <RxCross1 size={30}
//                                     className="cursor-pointer"
//                                     onClick={() => setOpen(false)} />
//                             </div>
//                             <h1 className="text-center text-[25px] font-Poppins">
//                                 Add New Address
//                             </h1>

//                             <div className="w-full">
//                                 <form aria-required onSubmit={handleSubmit} className="w-full">
//                                     <div className="w-full block p-4">
//                                         <div className="w-full ml-2 pb-2">
//                                             <label className="block pb-2">Country</label>
//                                             <select
//                                                 name=""
//                                                 id=""
//                                                 value={country}
//                                                 onChange={(e) => setCountry(e.target.value)}
//                                                 className="w-[95%] border h-[40px] rounded-[5px]"
//                                             >
//                                                 <option value="" className="block border pb-2">
//                                                     choose your country
//                                                 </option>
//                                                 {Country &&
//                                                     Country.getAllCountries().map((item) => (
//                                                         <option
//                                                             className="block pb-2"
//                                                             key={item.isoCode}
//                                                             value={item.isoCode}
//                                                         >
//                                                             {item.name}
//                                                         </option>
//                                                     ))}
//                                             </select>
//                                         </div>

//                                         <div className="w-full ml-2 pb-2">
//                                             <label className="block pb-2">State</label>
//                                             <select
//                                                 name=""
//                                                 id=""
//                                                 value={city}
//                                                 onChange={(e) => setCity(e.target.value)}
//                                                 className="w-[95%] border h-[40px] rounded-[5px]"
//                                             >
//                                                 <option value="" className="block border pb-2">
//                                                     choose your State
//                                                 </option>
//                                                 {State &&
//                                                     State.getStatesOfCountry(country).map((item) => (
//                                                         <option
//                                                             className="block pb-2"
//                                                             key={item.isoCode}
//                                                             value={item.isoCode}
//                                                         >
//                                                             {item.name}
//                                                         </option>
//                                                     ))}
//                                             </select>
//                                         </div>

//                                         <div className="w-full ml-2 pb-2">
//                                             <label className="block pb-2">Address 1</label>
//                                             <input
//                                                 type="address"
//                                                 className={`${styles.input} !w-[95%] !h-[40px]`}
//                                                 required
//                                                 value={address1}
//                                                 onChange={(e) => setAddress1(e.target.value)}
//                                             />
//                                         </div>

//                                         <div className="w-full ml-2 pb-2">
//                                             <label className="block pb-2">Address 2</label>
//                                             <input
//                                                 type="address"
//                                                 className={`${styles.input} !w-[95%] !h-[40px]`}
//                                                 required
//                                                 value={address2}
//                                                 onChange={(e) => setAddress2(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className="w-full  ml-2 pb-2">
//                                             <label className="block pb-2">Zip Code</label>
//                                             <input
//                                                 type="number"
//                                                 className={`${styles.input} !w-[95%] !h-[40px]`}
//                                                 required
//                                                 value={zipCode}
//                                                 onChange={(e) => setZipCode(e.target.value)}
//                                             />
//                                         </div>

//                                         <div className="w-full ml-2 pb-2">
//                                             <label className="block pb-2">Address Type</label>
//                                             <select
//                                                 name=""
//                                                 id=""
//                                                 value={addressType}
//                                                 onChange={(e) => setAddressType(e.target.value)}
//                                                 className="w-[95%] border h-[40px] rounded-[5px]"
//                                             >
//                                                 <option value="" className="block border pb-2">
//                                                     Choose your Address Type
//                                                 </option>
//                                                 {addressTypeData &&
//                                                     addressTypeData.map((item) => (
//                                                         <option
//                                                             className="block pb-2"
//                                                             key={item.name}
//                                                             value={item.name}
//                                                         >
//                                                             {item.name}
//                                                         </option>
//                                                     ))}
//                                             </select>
//                                         </div>
//                                         <div className=" w-full ml-2 pb-2">
//                                             <input
//                                                 type="submit"
//                                                 className={`${styles.input} !w-[95%] border !h-[40px] mt-4 cursor-pointer`}


//                                             />
//                                         </div>

//                                     </div>



//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//             <div className='flex w-full items-center justify-between'>
//                 <h1 className='text-[25px] font-[600] text-[#000] font-Poppins'>My Address</h1>
//                 <div className={`${styles.button} !rounded-md flex items-center justify-center`} onClick={() => setOpen(true)}>
//                     <IoMdAdd size={25} className='mr-1' color='white' />
//                     <span className='text-[#fff]'>Add New</span>
//                 </div>
//             </div>

//             {
//                 user && user.addresses.map((item, index) => {
//                     return (
//                         <div key={index} className='w-full mt-2 bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-3'>

//                             <div className="flex items-center">
//                                 <h5 className='pl-5 font-[600]'>{item.addressType}</h5>

//                             </div>
//                             <div className="flex pl-8 items-center">
//                                 <h6>{item.address1} {item.address2}</h6>

//                             </div>
//                             <div className="flex pl-10 items-center w-[250px]">
//                                 <h6>+91 {user && user.phoneNumber} 00000 00000</h6>

//                             </div>
//                             <div className='min-w-[10%] flex items-center justify-between pl-4' onClick={() => handleDelete(item)}>
//                                 <AiOutlineDelete size={25} className='cursor-pointer' />
//                             </div>

//                         </div>
//                     )

//                 })
//             }
//             {
//                 user && user.addresses.length === 0 && (
//                     <h5 className='text-center text-[18px] pt-8'>You Dont have any save Address</h5>
//                 )
//             }

//         </div>
//     )
// }

const Address = () => {
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState();
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [addressType, setAddressType] = useState("");
    const { user } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (addressType === "" || country === "" || city === "") {
            toast.error("Please fill all the fields!");
        } else {
            dispatch(updatUserAddress(country, city, address1, address2, zipCode, addressType));
            setOpen(false);
            setCountry("");
            setCity("");
            setAddress1("");
            setAddress2("");
            setZipCode(null);
            setAddressType("");
        }
    };

    const handleDelete = (item) => {
        dispatch(deleteUserAddress(item._id));
    };

    const addressTypeData = [
        { name: "Default" },
        { name: "Home" },
        { name: "Office" },
    ];

    return (
        <div className="w-full px-5">
            {open && (
                <div className="fixed w-full h-screen bg-[#00000038] top-0 left-0 flex items-center justify-center">
                    <div className="w-[90%] sm:w-[70%] lg:w-[35%] h-[70vh] bg-white rounded shadow relative overflow-y-scroll">
                        <div className="w-full flex justify-end p-3">
                            <RxCross1
                                size={30}
                                className="cursor-pointer"
                                onClick={() => setOpen(false)}
                            />
                        </div>
                        <h1 className="text-center text-[20px] lg:text-[25px] font-Poppins">
                            Add New Address
                        </h1>

                        <div className="w-full">
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className="w-full p-4">
                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Country</label>
                                        <select
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full border h-[40px] rounded-[5px]"
                                        >
                                            <option value="">Choose your country</option>
                                            {Country &&
                                                Country.getAllCountries().map((item) => (
                                                    <option key={item.isoCode} value={item.isoCode}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">State</label>
                                        <select
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            className="w-full border h-[40px] rounded-[5px]"
                                        >
                                            <option value="">Choose your state</option>
                                            {State &&
                                                State.getStatesOfCountry(country).map((item) => (
                                                    <option key={item.isoCode} value={item.isoCode}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Address 1</label>
                                        <input
                                            type="text"
                                            className="w-full border h-[40px] rounded-[5px]"
                                            required
                                            value={address1}
                                            onChange={(e) => setAddress1(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Address 2</label>
                                        <input
                                            type="text"
                                            className="w-full border h-[40px] rounded-[5px]"
                                            required
                                            value={address2}
                                            onChange={(e) => setAddress2(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Zip Code</label>
                                        <input
                                            type="number"
                                            className="w-full border h-[40px] rounded-[5px]"
                                            required
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Address Type</label>
                                        <select
                                            value={addressType}
                                            onChange={(e) => setAddressType(e.target.value)}
                                            className="w-full border h-[40px] rounded-[5px]"
                                        >
                                            <option value="">Choose Address Type</option>
                                            {addressTypeData.map((item) => (
                                                <option key={item.name} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-full pb-2">
                                        <button
                                            type="submit"
                                            className="w-full h-[40px] bg-blue-500 text-white rounded mt-4 cursor-pointer"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-wrap items-center justify-between">
                <h1 className="text-[20px] lg:text-[25px] font-[600] text-[#000] font-Poppins">
                    My Address
                </h1>
                <button
                    className="bg-blue-500 text-white rounded-md flex items-center justify-center px-3 py-2"
                    onClick={() => setOpen(true)}
                >
                    <IoMdAdd size={25} className="mr-1" />
                    <span>Add New</span>
                </button>
            </div>

            {user && user.addresses.length > 0 ? (
                user.addresses.map((item, index) => (
                    <div
                        key={index}
                        className="w-full mt-2 bg-white h-auto lg:h-[70px] rounded-[4px] flex flex-wrap lg:flex-nowrap items-center p-3 shadow justify-between"
                    >
                        <div className="flex items-center">
                            <h5 className="font-[600]">{item.addressType}</h5>
                        </div>
                        <div className="flex items-center">
                            <h6>
                                {item.address1}, {item.address2}
                            </h6>
                        </div>
                        <div className="flex items-center">
                            <h6>+91 {user.phoneNumber}</h6>
                        </div>
                        <AiOutlineDelete
                            size={25}
                            className="cursor-pointer text-red-500"
                            onClick={() => handleDelete(item)}
                        />
                    </div>
                ))
            ) : (
                <h5 className="text-center text-[18px] pt-8">
                    You don’t have any saved address.
                </h5>
            )}
        </div>
    );
};

// const ChangePassword = () => {
//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const passwordChangeHandler = async (e) => {
//         e.preventDefault()

//         await axios.put(`${server}/user/update-user-password`, { oldPassword, newPassword, confirmPassword }, {
//             withCredentials: true
//         }).then((res) => {
//             toast.success(res.data.success)
//             setOldPassword("")
//             setNewPassword("")
//             setConfirmPassword("")
//         }).catch((error) => {
//             toast.error(error.response.data.message)

//         })

//     }
//     return (
//         <div className="w-full px-5">
//             <h1 className='block text-[25px] text-center font-[600] '>Change Password</h1>

//             <div className="w-full">
//                 <form
//                     aria-required
//                     onSubmit={passwordChangeHandler}
//                     className="flex flex-col items-center"
//                 >
//                     <div className=" w-[50%]  mt-5">
//                         <label className="block pb-2">Enter your old password</label>
//                         <input
//                             type="password"
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                             value={oldPassword}
//                             onChange={(e) => setOldPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className=" w-[50%]  mt-2">
//                         <label className="block pb-2">Enter your new password</label>
//                         <input
//                             type="password"
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className=" w-[50%]  mt-2">
//                         <label className="block pb-2">Enter your confirm password</label>
//                         <input
//                             type="password"
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <input
//                             className={`w-[95%] h-[40px] border border-[#4c92e2] text-center text-[#34bcfc] rounded-[3px] mt-8 cursor-pointer`}
//                             required
//                             value="Update"
//                             type="submit"
//                         />
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )

// }


const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordChangeHandler = async (e) => {
        e.preventDefault();

        await axios
            .put(
                `${server}/user/update-user-password`,
                { oldPassword, newPassword, confirmPassword },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                toast.success(res.data.success);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <div className="w-full px-5 flex justify-center">
            <div className="w-full max-w-[500px]">
                <h1 className="text-[25px] text-center font-semibold mb-5">
                    Change Password
                </h1>

                <form
                    aria-required
                    onSubmit={passwordChangeHandler}
                    className="flex flex-col"
                >
                    <div className="mb-4">
                        <label className="block pb-2 text-sm font-medium">
                            Enter your old password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block pb-2 text-sm font-medium">
                            Enter your new password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block pb-2 text-sm font-medium">
                            Enter your confirm password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-all"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};


export default ProfileContent
