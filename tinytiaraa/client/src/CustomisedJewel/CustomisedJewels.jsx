import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Customizationsec1 from './CustomizationSec1'
import Customizationsec2 from './Customizationsec2'
import Customizationsec3 from './Customizationsec3'
import Customizationsec4 from './Customizationsec4'
import Customizationsec5 from './Customizationsec5'

function CustomisedJewels() {
  const customsec2Ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
    const scrollToSection2 = () => {
    if (customsec2Ref.current) {
      customsec2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div>
      

      <Helmet>
        <title>Customization | Design Your Own Masterpiece for you infant and Kids | Tiny Tiaraa</title>
        <meta name="description" content="Experience our online custom jewellery design platform at Tiny Tiaraa | Choose from high-quality metals & gemstones to create your unique piece | Expert artisans bring your vision to life | Quality assurance guaranteed | Fast, secure 14-day delivery" />
        <meta name="keywords" content="Infants jewellery kids jewellery children's jewellery infant jewellery gold jewellery for kids silver jewellery for kids Diamond Jewellery for kids and infants natural diamond jewellery for kids CZ diamond jewellery for kids jewellery for kids jewellery for children jewellery for infants fine jewellery for kids dainty jewellery for kids Princess jewellery for kids Birthday jewellery for kids Holiday jewellery for kids Gift jewellery for kids Gift Cards Gold Saving plans" />
        <link rel="canonical" href="/personalised-prosperity" />
      </Helmet>


      <Customizationsec1 onDiscoverClick={scrollToSection2}/>
      <Customizationsec2 ref={customsec2Ref}/>
      <Customizationsec3 />
      <Customizationsec4 />
      <Customizationsec5 />



    </div>
  )
}

export default CustomisedJewels
