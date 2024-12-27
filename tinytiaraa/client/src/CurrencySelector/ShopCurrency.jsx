import React from 'react'
import SetConversionRate from './SetConversionRate'
import DashboardHeader from '@/ShopDashboardPage/DashboardHeader'
import DashboardSideBar from '@/ShopDashboardPage/DashboardSideBar'


function ShopContactReq() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex items-start justify-between">
        <div >
            <DashboardSideBar active={17} />
        </div>
        
            <SetConversionRate />
        

      </div>
    </div>
  )
}

export default ShopContactReq
