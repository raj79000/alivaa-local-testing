
"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HeaderHoften from "../components/HeaderHoften";

import GurugramDining from "../components/GurugramDining";

import BookingFormInner from "../components/BookingFormInner";

import NavbarOften from "app/components/NavbarOften";
import { useState } from "react";
import GurugramHotelGallery from "app/components/GurugramHotelGallery";
import NavbarAliva from "app/components/NavbarAliva";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function GurugramGalleryPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (

        <>

<section className='home-hdr-hght'>
       <NavbarAliva></NavbarAliva>
      <HeaderHoften />
      </section>

        
<section className="banner-section">

<img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/images/hofton-gallery/hoften-dining-b.jpeg" />

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
<div className="container position-relative mb-0">
  <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
    <button className="btn desktop-button corporatebannerbutton" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
      <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
    
    </button>
  </div>
</div>
</div>) } */}

</section>

<section className="booking-form-section">

             <BookNowForm />
       
</section>

<GurugramHotelGallery></GurugramHotelGallery>

        </>

    )

}