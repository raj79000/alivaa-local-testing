"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import HeaderAlivaa from "../components/HeaderAlivaa";

import GurgaonDining from "../components/GurgaonDining";

import { motion } from "framer-motion";
import NavbarAliva from "app/components/NavbarAliva";

import BookingFormInner from "../components/BookingFormInner";
import { useState } from "react";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function GurgaonDiningPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
  <section className='home-hdr-hght'>
     
<NavbarAliva/>
     <HeaderAlivaa />
     </section>
   

 <section className="banner-section">
   <video 
     playsInline 
     autoPlay 
     loop 
     muted 
     width="93%" 
     className="banner_img_room myvideo pt-0 web-video desk-video"> 
     <source src="/images/dining/CafeStaywoke.mp4" type="video/mp4" />
   </video>

   <video 
    playsInline 
    autoPlay 
    loop 
    muted 
    className="banner_img_room myvideo pt-0 web-video mob-video"> 
    <source src="/mobile-video/mob-dining.mp4" type="video/mp4" />
  </video>
   
   
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
 
  <section className="booking-form-section">

                         <BookNowForm />
</section>
      <div className="container text-center sectiontop">
        <h1 className="global-heading-gurgaon inner-hd">
          Restaurants In Gurgaon
        </h1>
        <p className="content-boxx">
          We believe that dining is an experience that goes beyond just food.
          We, at cafe Staywoke, offer a menu that blends locally sourced
          ingredients, ensuring every dish caters to your culinary desires. We
          invite you to elevate your taste buds and enjoy a dining experience
          like never before. Whether you are here for a relaxing staycation or
          on business travel, we provide the best-suited ambience. Join us and
          enjoy a variety of dishes at the{" "}
          <strong>
            <b>best restaurant in Gurgaon</b>
          </strong>
          .
        </p>
      </div>
 <GurgaonDining />



    </>
  );
}
