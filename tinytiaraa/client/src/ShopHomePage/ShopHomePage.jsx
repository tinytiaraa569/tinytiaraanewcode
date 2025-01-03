import React, { useState } from 'react'
import styles from '../Styles/styles'
import ShopInfo from './ShopInfo'
import ShopProfileData from './ShopProfileData'
import DashboardHeader from '../ShopDashboardPage/DashboardHeader'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function ShopHomePage() {
  const [isOwner ,setisOwner] =useState(true)
  return (
    <>
    <DashboardHeader />
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-200 h-[87vh]">

    <div className={`${styles.section} `}>
        <div className='w-full flex justify-start pt-3'>
      {/* {
          isOwner && ( */}
      <Link to="/dashboard">
        <div className='hover:scale-105 transition-transform duration-200'>
          <div
            className={`${styles.button} w-[160px] h-[35px] rounded-[5px] flex items-center bg-black cursor-pointer`}>
            <IoMdArrowRoundBack color='white' size={20} />
            <span className='text-[#fff] text-[16px] font-Poppins pl-2'>Go Dashboard</span>
          </div>
        </div>
      </Link>
      {/* ) */}
    </div>
      <div className="w-full flex py-6 items-center justify-center">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[45%] bg-white shadowoglogin rounded-[12px]  h-[63vh] py-5 sticky top-2 left-0 z-10">
    <ShopInfo isOwner={isOwner} />
  </div>
        {/* <div className="w-[72%] rounded-[4px]">
          <ShopProfileData />

        </div> */}
      </div>
      
    </div>
    </div>
    </>


  )
}

export default ShopHomePage
