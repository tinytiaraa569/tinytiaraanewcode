import React, { useEffect, useRef } from 'react'

import { Helmet } from 'react-helmet-async'
import ContactSec1 from './Contactsec1'
import ContactSec2 from './Contactsec2'
import ContactSec3 from './Contactsec3';

function Conatct() {
  const contactsec2Ref = useRef(null);
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
      const scrollToSection2 = () => {
      if (contactsec2Ref.current) {
        contactsec2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div>
       <Helmet>
        <title>Contact Us | Kids Jewellery | Mumbai</title>
        <meta name="description" content="Shop gold & silver kids' jewellery at Tiny Tiaraa Ru-Brama Retail Private Limited. Contact us at care@tinytiaraa.com." />
        <meta name="keywords" content="Infants jewellery kids jewellery children's jewellery infant jewellery gold jewellery for kids silver jewellery for kids Diamond Jewellery for kids and infants natural diamond jewellery for kids CZ diamond jewellery for kids jewellery for kids jewellery for children jewellery for infants fine jewellery for kids dainty jewellery for kids Princess jewellery for kids Birthday jewellery for kids Holiday jewellery for kids Gift jewellery for kids Gift Cards Gold Saving plans" />
        <link rel="canonical" href="/contacts" />

      </Helmet>
  
      <ContactSec1 onDiscoverClick={scrollToSection2}/>
      <ContactSec2 />
      <ContactSec3 ref={contactsec2Ref}/>


    </div>
  )
}

export default Conatct
