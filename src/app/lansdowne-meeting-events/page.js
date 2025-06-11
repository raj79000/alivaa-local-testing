"use client";

import "../../app/styles/inner.css";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderLansdowne from "app/components/HeaderLansdowne";
import LansdowneMeetingEvents from "app/components/LansdowneMeetingEvents";


export default function LansdowneMeetingEventsPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (

        <>

<section className='home-hdr-hght'>
     
    <NavbarAliva></NavbarAliva>
     <HeaderLansdowne></HeaderLansdowne>
 
     </section>
   

 <section className="banner-section">
 <img
       src="/lansdowne-img/meeting-event-banner.png"
          alt="meeting-event-banner"
           className="banner-img pt-0 w-100"
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
   
     
 </section>

  

  <section className="booking-form-section">

                         <BookNowForm />
             
     
        </section>



   <section className="mb-5">

   <div id="gurgaon-facilities">
    <LansdowneMeetingEvents></LansdowneMeetingEvents>
    </div>
   </section>
        </>

    )

}