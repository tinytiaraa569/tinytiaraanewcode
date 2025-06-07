import React, { useEffect, useRef } from 'react'

import { Helmet } from 'react-helmet-async'
import Aboutsec1 from './Aboutsec1'
import Aboutsec2 from './Aboutsec2'
import Aboutsec3 from './Aboutsec3'
import Aboutsec4 from './Aboutsec4'


function About() {
  const sec2Ref = useRef(null);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



  const scrollToSection2 = () => {
    sec2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Helmet>
        <title>About Us | infants and Kids natural diamond and Gold Jewellery | Tiny Tiaraa</title>
        <meta name="description" content="Welcome to Tiny Tiaraa, your enchanting destination for exquisitely crafted kids and Infant jewellery | Discover our story woven with love and imagination | Crafted with care and designed to captivate | Join us on a magical journey" />
        <meta name="keywords" content="Infants jewellery kids jewellery children's jewellery infant jewellery gold jewellery for kids silver jewellery for kids Diamond Jewellery for kids and infants natural diamond jewellery for kids CZ diamond jewellery for kids jewellery for kids jewellery for children jewellery for infants fine jewellery for kids dainty jewellery for kids Princess jewellery for kids Birthday jewellery for kids Holiday jewellery for kids Gift jewellery for kids Gift Cards Gold Saving plans" />
        <link rel="canonical" href="/about" />

      </Helmet>
    <Aboutsec1 onDiscoverClick={scrollToSection2}/>
    <Aboutsec2 ref={sec2Ref}/>
    <Aboutsec3 />
    <Aboutsec4 />

    
      
    </div>
  )
}

export default About
