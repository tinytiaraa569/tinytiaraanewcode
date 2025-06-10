import React, { useEffect } from 'react'
import ReferralComponent from './ReferralComponent'

function ReferPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <ReferralComponent />
    </div>
  )
}

export default ReferPage
