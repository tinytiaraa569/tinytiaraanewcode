
import React from 'react'
import AllSalesOrders from './AllSalesOrders'
import DashboardHeader from '@/ShopDashboardPage/DashboardHeader'
import DashboardSideBar from '@/ShopDashboardPage/DashboardSideBar'

function ShopAllSaleOrders() {
  return (
    <div>
    <DashboardHeader />
    <div className="w-full flex  justify-between">
      <div >
          <DashboardSideBar active={10} />
      </div>
      
          <AllSalesOrders />
      

    </div>
  </div>
  )
}

export default ShopAllSaleOrders
