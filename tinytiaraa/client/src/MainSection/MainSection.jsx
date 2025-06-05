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
import Review from './Review/Review'
import HomeSec1 from './Homenew/Homesec1'
import Homesec2 from './Homenew/Homesec2'
import Homesec3 from './Homenew/Homesec3'
import Homesec4 from './Homenew/Homesec4'
import Homesec5 from './Homenew/Homesec5'
import Homesec6 from './Homenew/Homesec6'
import Homesec7 from './Homenew/Homesec7'
import Homesec8 from './Homenew/Homesec8'
import Homesec9 from './Homenew/Homesec9'
import Homesec10 from './Homenew/Homesec10'
import Homesec11 from './Homenew/Homesec11'

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
      {/* <SliderSection /> */}  <HomeSec1 />
      {/* <WhyPage />  */}   <Homesec2 />
      {/* <Shippingpage /> */}  <Homesec3 />
      {/* <Categories /> */}   <Homesec4 />
      {/* <MorePage /> */}   <Homesec5 />
      {/* <NewArrivals /> */}  <Homesec6 />
      {/* <Customise /> */}    <Homesec7 />
      {/* <Safety /> */}  <Homesec8 /> 
      {/* <Slidertext /> */}   <Homesec9 />
      {/* <CustomizedAccordions /> */}  <Homesec10 />
      <Homesec11 />
      {/* <Review />   
      <FollowUS />
      <Ttclub /> */}

       {/* Fixed Gift Icon */}
       {/* <div
        className="fixed bottom-8 left-6 bg-gradient-to-r from-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-red-500 transition-transform transform hover:scale-110"
        onClick={handleGiftClick}
        title='spin and win'
        
      >
        <FaGift size={32} />
      </div> */}


    <div
      className="fixed bottom-3 left-4 flex flex-col items-center cursor-pointer"
      onClick={handleGiftClick}
      title="Spin and Win"
    >
      {/* "Spin and Win" Text */}
      {showText && (
        <span
          className="text-xs font-semibold text-white px-3 py-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg mb-2 animate-slide-bounce-fade"
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
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform transform"
        style={{
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <FaGift size={22} />
      </div>
    </div>

    </div>
  )
}

export default MainSection
