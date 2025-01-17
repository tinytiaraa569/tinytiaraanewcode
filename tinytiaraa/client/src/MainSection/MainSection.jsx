import React, { useEffect, useState } from 'react'
import SliderSection from './Slider'
import Categories from './Categories'
import Shippingpage from './Shippingpage'
import WhyPage from './WhyPage'
import MorePage from './MorePage'
import Customise from './Customise'
import Safety from './Safety'
import Slidertext from './Sectionslider/Slidertext'
import CustomizedAccordions from './FreqAsk/Freq'
import Ttclub from './ttclub/Ttclub'
import NewArrivals from './newarrivals/NewArrivals'
import FollowUS from './FollowUS/FollowUS'
import { FaGift } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MainSection() {
  const navigate = useNavigate();

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Automatically hide the "Spin and Win" text after 5 seconds
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleGiftClick = () => {
    navigate('/spinandwin'); // Navigate to Spin and Win page
  };

  return (
    <div>
      <SliderSection />
      <WhyPage />
      {/* <Shippingpage /> */}
      <Categories />
      {/* <MorePage /> */}
      <NewArrivals />
      <Customise />
      <Safety />
      <Slidertext />
      <CustomizedAccordions />
      <FollowUS />
      <Ttclub />

       {/* Fixed Gift Icon */}
       {/* <div
        className="fixed bottom-8 left-6 bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-red-500 transition-transform transform hover:scale-110"
        onClick={handleGiftClick}
        title='spin and win'
        
      >
        <FaGift size={32} />
      </div> */}


    <div
      className="fixed bottom-3 left-4 flex flex-col items-center cursor-pointer "
      onClick={handleGiftClick}
      title="Spin and Win"
    >
      {/* "Spin and Win" Text */}
      {showText && (
       <span
       className="text-sm font-bold text-white px-4 py-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg mb-3 animate-slide-bounce-fade"
       style={{
         fontFamily: "Arial, sans-serif",
         letterSpacing: "0.5px",
       }}
     >
       Spin and Win
     </span>
      )}

      {/* Icon Circle */}
      <div
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform transform"
        style={{
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <FaGift size={32} />
      </div>
    </div>
    </div>
  )
}

export default MainSection
