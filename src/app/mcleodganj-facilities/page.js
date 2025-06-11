"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";
import BookingFormInner from "app/components/BookingFormInner";
import HeaderAlivaa from "../components/HeaderAlivaa";
import HeaderMcLeodganj from "app/components/HeaderMcLeodganj";

import McLeodganjHotelFacilities from "app/components/McLeodganjHotelFacilities";
import NavbarMcleodganj from "app/components/NavbarMcleodganj";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";


export default function McLeodganjFacilitiesPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (

        <>

<section className='home-hdr-hght'>
     
    <NavbarAliva></NavbarAliva>
     <HeaderMcLeodganj />
 
     </section>
   

 <section className="banner-section">
 <img
       src="/images/mcleodganj/facilities/pool_img.png"
          alt="facilities"
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



   <section className="mb-5">

   <div id="gurgaon-facilities"><McLeodganjHotelFacilities/></div>
   </section>
        </>

    )

}