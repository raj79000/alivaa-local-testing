"use client";

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderLansdowne from "app/components/HeaderLansdowne";
import LansdowneHotelContact from "app/components/LansdowneHotelContact";



export default function McleodganjHotelContactPage() {
  const [isVisible, setIsVisible] = useState(false);


    return (

      <>


<section className='home-hdr-hght'>
<NavbarAliva></NavbarAliva>

<HeaderLansdowne></HeaderLansdowne>
</section>


<section className="banner-section">
<img
    src="/lansdowne-img/contact-us-banner.png"
    alt="Contact"
    className="banner-img pt-0"
  />
<div className=" social-icon-banner" >
      <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL" target="_blank">
        <img src="/images/fb-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
      </a>
    
      <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank">
        <img src="/images/instagram-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
      </a>
    
      <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank">
      <img src="/images/linkedin-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
      </a>
    
    </div>
    <span className="updown-arrow">
    <img src="images/down-arrow.png"/>
  </span>


</section>


{/* <section
  className={`booking-form-section ${
    isVisible ? "slide-in" : "slide-out"
  }`}
  id="booking-engine"
>
  <BookingFormInner />
</section> */}
<section className="booking-form-section">

                         <BookNowForm />
              
     </section>
      

      <div className="container text-center sectiontop">
      <h1 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd" >Lansdowne Hotel Contact Number & Address</h1>

<h3 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Our 24/7 helpdesk is waiting to assist you
</h3>
        <p className="content-boxx gurgaon-dinning mt-2">Our team awaits your call to organise your peaceful trip to Lansdowne. Contact us directly for enquiries regarding the rooms & suites dining establishments as well as event spaces or nearby locations. We look forward to welcoming you to our serene haven in the Himalayas.

        </p>
      </div>
    

      <div className="row gurgaon-contact-row sectiontop">
          <div className="container mb-5">  
      <motion.section className="search-content contact-us new-rj-block new-pc-block gurgaon-contact text-center mt-1"
                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 ,y: -200}}

                transition={{ duration: 0.6, delay: 0.6 }}>
      
      <LansdowneHotelContact></LansdowneHotelContact>

    </motion.section>

    </div>

    </div>

      </>

    );

}