import DashboardHeader from '@/ShopDashboardPage/DashboardHeader'
import DashboardSideBar from '@/ShopDashboardPage/DashboardSideBar'
import React from 'react'
import AllBlogs from './AllBlogs'

function ShopAllBlogs() {
  return (
    <div>
    <DashboardHeader />
    <div className="w-full flex ">
      <div >
          <DashboardSideBar active={21} />
      </div>

      <AllBlogs />
      
      

    </div>
  </div>
  )
}

export default ShopAllBlogs