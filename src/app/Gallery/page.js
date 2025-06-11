"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import HeaderAlivaa from "../components/HeaderAlivaa";
import BookingFormInner from "app/components/BookingFormInner";

import { motion } from "framer-motion";
import NavbarAliva from "app/components/NavbarAliva";
import { useState } from "react";

import GalleryList from "../components/Gallery";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false); 
  return (
    <>
<section className='home-hdr-hght'>
   
   <NavbarAliva/>
   </section>
 <section className="banner-section">
 <img
    src="/images/gallery/pictures/9.jpg"
    alt="Hotels in Gurgaon"
    className="banner-img pt-0"
  />
   
   <div className="social-icon-banner" >
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
  <BookNowForm />
     
 </section>
 


      <HeaderAlivaa/>

      <div className="container text-center sectiontop">
        <h1 className="global-heading-gurgaon inner-hd">
          Gallery
        </h1>
      </div>

      {/* Gallery Section */}
      <section className="your-break about-us sec-padding">     
<div className="row g-0">

  <div className="container">

                
<div className="search-content about-us new-rj-block text-center">
      <section className="glryallcity sec-padding">
        <div className="container-md">
    

        <GalleryList />
        </div>
      </section>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
