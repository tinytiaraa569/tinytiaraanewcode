import DashboardHeader from '@/ShopDashboardPage/DashboardHeader'
import DashboardSideBar from '@/ShopDashboardPage/DashboardSideBar'
import React, { useEffect } from 'react'
import AllReviews from './AllReviews'



function ShopContactReq() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex  justify-between">
        {/* <div >
            <DashboardSideBar active={3} />
        </div> */}
        <div className="w-full justify-center flex">
            <AllReviews />
        </div>

      </div>
    </div>
  )
}

export default ShopContactReq
