import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import styles from '../Styles/styles'
import { MdOutlineModeEdit } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import axios from 'axios';
import { server } from '@/server';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function ShopInfo({isOwner}) {
    const { seller } = useSelector((state)=> state.seller)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // const logoutHnadler = async () => {
    //     axios.get(`${server}/shop/logout`,{withCredentials:true})
    //     window.location.reload()

    // }
    const logoutHnadler = async () => {
        try {
            await axios.get(`${server}/shop/logout`, { withCredentials: true });
            toast.success("Logged out successfully!");
            
            // Reset authentication state in Redux (or any state management)
                   window.location.reload()
 
            
            // Navigate to login page
            navigate('/shop-login');
        window.location.reload()

        } catch (error) {
            console.error(error);
            toast.error("Failed to log out. Please try again.");
        }
    };
    console.log(seller,"sllelr details")
  return (
    <div className='w-full py-5'>
       
        <h1 className='text-[#000] font-Poppins font-[600] text-center text-[22px] mb-5'>Information</h1>
        <div className="w-full flex items-center justify-center">
            
        <FaUserCircle  color='#555' size={40} className='mx-5 cursor-pointer'/>

        </div>

        <h3 className='text-center py-2 text-[20px] capitalize font-Poppins'>{seller.name}</h3>
        <p className='text-[#000000a6] text-center font-Poppins'>{seller.email}</p>

        <h3 className='text-center py-2 text-[18px] capitalize font-Poppins'>{seller.phoneNumber}</h3>

        <div>
            {
                isOwner && (
                    <div className='py-3 px-4 flex flex-col items-center'>
                        <div className={`${styles.button} !w-[40%] !h-[40px] !rounded-[5px] flex items-center`} onClick={()=>navigate("/settings")}>
                            
                                
                            <MdOutlineModeEdit size={23} color='white'/>
                            <span className='text-white font-Poppins ml-2'>Edit </span>
                            
                        </div>
                        <div className={`${styles.button} !w-[40%] !h-[40px] !rounded-[5px]`} onClick={logoutHnadler}>
                            <CiLogout size={23} color='white'/>
                            <span className='text-white font-Poppins ml-2'>Logout </span>
                        </div>
                        
                    </div>
                )
            }
        </div>

        
      
    </div>
  )
}

export default ShopInfo
