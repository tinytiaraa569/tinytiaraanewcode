import DashboardHeader from '@/ShopDashboardPage/DashboardHeader'
import DashboardSideBar from '@/ShopDashboardPage/DashboardSideBar'
import React from 'react'
import AllQrcode from './AllQrcode'

function ShopAllQrCode() {
  return (
    <div>
    <DashboardHeader />
    <div className="w-full flex ">
      <div >
          <DashboardSideBar active={22} />
      </div>

      <AllQrcode />
      
      

    </div>
  </div>
  )
}

export default ShopAllQrCode