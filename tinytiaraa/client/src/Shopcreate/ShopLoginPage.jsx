import React, { useEffect } from 'react'
import ShopLogin from './ShopLogin'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ShopLoginPage() {

  const navigate = useNavigate()
  const { isSeller,seller ,isLoading } = useSelector((state) => state.seller)
  console.log(isSeller)

  // useEffect(()=>{
  //   if(isSeller === true){
  //     navigate(`/dashboard`)
  //   }
  // },[isLoading,isSeller])

  useEffect(() => {
    if (!isLoading && isSeller) {
      navigate('/dashboard'); // Ensure navigation is after loading completes
    }
  }, [isLoading, isSeller, navigate]);

  return (
    <div>
           <ShopLogin />
    </div>
  )
}

export default ShopLoginPage
