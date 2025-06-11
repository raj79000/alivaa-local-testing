"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderLansdowne from "app/components/HeaderLansdowne";
import LansdowneDining from "app/components/LansdowneDining";

export default function LansdowneDiningPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
  <section className='home-hdr-hght'>
     
<NavbarAliva></NavbarAliva>

     <HeaderLansdowne></HeaderLansdowne>
     </section>
   

      <section className="banner-section">
      <img
    src="/lansdowne-img/dining-banner.png"
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
          Dining
        </h1>
        <p className="content-boxx">
        Indulge your palate at Viceroy Restaurant, our multi-cuisine dining venue offering a delightful culinary journey amidst the breathtaking backdrop of the Himalayas. The restaurant chefs craft memorable culinary dishes using locally obtained fresh ingredients so that guests can enjoy memorable dining moments.
        </p>
      </div>

      <div className="row">
        <div className="container">
          <div className="search-content contact-us new-rj-block text-center mt-1 gurgaon-dinning">
            <LansdowneDining></LansdowneDining>
          </div>
        </div>
      </div>
    </>
  );
}
