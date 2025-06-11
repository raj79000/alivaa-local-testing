"use client";

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HeaderHoften from '../components/HeaderHoften';

import GurugramHotelContact from '../components/GurugramHotelContact';

import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function GurugramHotelContactPage() {
  const [isVisible, setIsVisible] = useState(false);


    return (

      <>

<section className='home-hdr-hght'>
      <NavbarAliva></NavbarAliva>
      <HeaderHoften />
</section>

<section className="banner-section">

<img alt="Hotels in Gurgaon" className="banner-img banner-img-contact pt-0" src="/images/hofton-gallery/contactbanner.jpg"  />

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

<section className="booking-form-section">

             <BookNowForm />
 

</section>
      

      <div className="row mt-5">

          <div className="container mt-5">


      <motion.section className="hoften-main-contactt search-content contact-us new-rj-block new-pc-block text-center mt-1 gurugram-contact"

                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, y: -200, x: 0 }}

                transition={{ duration: 0.6, delay: 0.6 }}>

      <motion.div className="container" style={{width: "80%"}}

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

          <div className="center">

          <h3 className="global-heading-gurugram  gurugram-offers"><a>Gurugram Hotel Contact Nubmer & Address</a></h3>

            <h1 className="global-heading-gurgaon sub-head">Our 24/7 helpdesk is waiting to assist you</h1>

            <p  className="content-boxx">We aim to create your stay most amazing and easygoing by providing the best services. Whether you are here on business or just for leisure, location to many interest points/attractions, communication, and popular places of entertainment are in close proximity.</p>

          </div>

      </motion.div>
      <GurugramHotelContact/>

    </motion.section>

    </div>

    </div>

      </>

    );

}