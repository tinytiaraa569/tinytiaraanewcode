import React from 'react'
import DashboardHeader from '../ShopDashboardPage/DashboardHeader'
import DashboardSideBar from '../ShopDashboardPage/DashboardSideBar'
import RateCard from './RateCard'

function ShopRateCardPage() {
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex items-start justify-between">
        <div >
            <DashboardSideBar active={14} />
        </div>
        
            <RateCard />

      </div>
    </div>
  )
}

export default ShopRateCardPage
