"use client";
import "../../app/styles/inner.css";
import NavbarAliva from "app/components/NavbarAliva";
import { useState } from "react";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderJawai from "app/components/HeaderJawai";
import JawaiHotelAttractions from "app/components/JawaiHotelAttractions";
import Image from "next/image";
export default function GurgaonAttractionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>
        <NavbarAliva />
        <HeaderJawai />
      </section>
      <section className="banner-section">
        <Image height={700} width={1500} alt="Hotels in Gurgaon" className="w-100 banner-img pt-0" src="/jawai-img/jawai-attraction-banner.png" />
                
      
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
          <img src="images/down-arrow.png" />
        </span>
        
      </section>
      <section className="booking-form-section">
        <BookNowForm />
      </section>
      <div id="gurgaon-attraction">
        <JawaiHotelAttractions />
      </div>
    </>
  )
}