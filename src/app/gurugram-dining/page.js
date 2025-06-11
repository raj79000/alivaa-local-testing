





"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HeaderHoften from "../components/HeaderHoften";

import GurugramDining from "../components/GurugramDining";

import BookingFormInner from "../components/BookingFormInner";

import NavbarOften from "app/components/NavbarOften";
import { useState } from "react";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function GurugramDiningPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (

        <>

<section className='home-hdr-hght'>
       <NavbarOften/>
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

<div className="hoftenn-dining-pagee mb-5">
      

      <div className="row">

          <div className="container">


      <motion.section className="search-content contact-us new-rj-block text-center mt-1 gurugram-dining"

                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1,y: 200, x: 0 }}

                transition={{ duration: 0.6, delay: 0.6 }}>

      

      <motion.div className="container"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

          <div className="center">

          <h2 className="global-heading-gurgaon inner-hd">Restaurants In Gurugram</h2>

            <p className="content-boxx">Discover our Cafe Mahec where every meal is a celebration of flavours. Indulge in an unforgettable multi cuisine dining experience at our restaurant which offers a diverse menu combining the finest flavours. Our freshly prepared dishes are crafted in a way to satisfy your cravings. Enjoy a relaxing breakfast, a savouring lunch, or a delightful dinner, paired with beverages, from special coffees and teas to handcrafted cocktails and mocktails. We ensure to provide our guest a warm and welcoming atmosphere at Cafe Mahec which is a perfect place to relax with friends and family or host a business lunch that makes it the best cafe in Gurugram.</p>

          </div>

      </motion.div>

  

    </motion.section>



    <GurugramDining/>

    </div>

    </div>

    </div>



        </>

    )

}