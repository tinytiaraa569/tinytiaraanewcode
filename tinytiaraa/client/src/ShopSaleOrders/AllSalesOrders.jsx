import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineExclamationCircle } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Loader from '../Loader/Loader';
import { server } from '@/server';

function AllSalesOrders() {
    const [salesOrders, setSalesOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get(`${server}/get-all-sales-orders`);
    
                // Sort orders by createdAt (newest first), then by _id (as a secondary criterion)
                const sortedOrders = data.orders.sort((a, b) => {
                    const dateDiff = new Date(b.createdAt) - new Date(a.createdAt);
                    return dateDiff !== 0 ? dateDiff : b._id.localeCompare(a._id);
                });
    
                setSalesOrders(sortedOrders);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setIsLoading(false);
            }
        };
    
        fetchOrders();
    }, []);
    
    

    console.log(salesOrders,"salesOrders")

    const columns = [
        { field: "orderID", headerName: "Order ID", minWidth: 150, flex: 0.8 },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                switch (params.value) {
                    case "Success":
                        return "text-green-600";
                    case "Cancelled":
                        return "text-red-600";
                    case "Return":
                        return "text-orange-600";
                    default:
                        return "text-gray-500";
                }
            },
            renderCell: (params) => {
                let icon;
                switch (params.value) {
                    case "Success":
                        icon = <AiOutlineCheckCircle className="inline mr-2" size={16} />;
                        break;
                    case "Cancelled":
                        icon = <AiOutlineClockCircle className="inline mr-2" size={16} />;
                        break;
                    case "Return":
                        icon = <AiOutlineExclamationCircle className="inline mr-2" size={16} />;
                        break;
                    default:
                        icon = null;
                }

                return (
                    <div className="flex items-center">
                        {icon}
                        <span>{params.value}</span>
                    </div>
                );
            }
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
            headerName: "Actions",
            sortable: false,
            renderCell: (params) => (
                <Link to={`/sales-order/${params.id}`}>
                    <div className='flex justify-end items-center'>
                        <span className='font-Poppins'>View Details</span>
                        <AiOutlineArrowRight size={20} />
                    </div>
                </Link>
            ),
        },
    ];

    const rows = [];

    salesOrders &&
        salesOrders.forEach((item) => {
            rows.push({
                id: item._id,
                orderID: item.orderID,
                itemsQty: item.cart.length,
                total: "INR ₹" + item.totalPrice,
                status: item.status,
            });
        });

    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPage = pathSegments[pathSegments.length - 1];
    const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="min-w-[82%] flex-grow px-8 pt-1 mt-5 bg-white">
                    <div className='mb-2'>
                        <h2 className='text-[22px] font-[500]'>All Sales Orders</h2>
                        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4 mt-1">
                            <ol className="flex space-x-2">
                                <li>
                                    <Link to={"/dashboard"} className="hover:text-blue-500">Home</Link>
                                </li>
                                <li>&gt;</li>
                                <li>
                                    <span className="text-gray-400">{breadcrumbText}</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        autoHeight
                    />
                </div>
            )}
        </>
    );
}

export default AllSalesOrders;
