"use client";

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import { motion } from "framer-motion";


import HeaderAlivaa from '../components/HeaderAlivaa';

import GurgaonHotelContact from '../components/GurgaonHotelContact';

import BookingFormInner from "../components/BookingFormInner";

import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";



export default function GurgaonHotelContactPage() {
  const [isVisible, setIsVisible] = useState(false);


    return (

      <>


<section className='home-hdr-hght'>

<NavbarAliva/>
<HeaderAlivaa />
</section>


<section className="banner-section">
<img
    src="/images/contact-us-page.webp"
    alt="Hotels in Gurgaon"
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
{/* { !isVisible && (<div className="content-section">
  <div className="container position-relative">
    <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
      <button className="btn desktop-button corporatebannerbutton btm15" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
        <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
        
      </button>
    </div>
  </div>
</div>) } */}

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
      <h2 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd" >Alivaa Hotel, Sohna Road City Center, Gurgaon</h2>

<h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Hotel on Sohna Road, Gurgaon</h1>
        <p className="content-boxx gurgaon-dinning mt-2">We at Alivaa Hotels & Resorts are dedicated to providing exceptional service and ensuring your experience with us is seamless and memorable. Whether you have questions, need assistance with reservations, or seek more information about our offerings, our team is here to help. Please feel free to reach out to us through the contact details provided below, or simply fill out the inquiry form. We look forward to hearing from you and assisting you in any way we can to make your stay with us truly unforgettable.</p>
      </div>
    
<div className="row gurgaon-contact-row sectiontop">
 <div className="container mb-5">  
      <motion.section className="search-content contact-us new-rj-block new-pc-block gurgaon-contact text-center mt-1"
                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 ,y: -200}}

                transition={{ duration: 0.6, delay: 0.6 }}>

      



  

      <GurgaonHotelContact/>

    </motion.section>

    </div>

    </div>

      </>

    );

}