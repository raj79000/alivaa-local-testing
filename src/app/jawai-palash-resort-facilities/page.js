"use client";
import "../../app/styles/inner.css";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderJawai from "app/components/HeaderJawai";
import JawaiHotelFacilities from "app/components/JawaiHotelFacilities";
export default function LansdowneFacilitiesPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>
        <NavbarAliva></NavbarAliva>
        <HeaderJawai></HeaderJawai>
      </section>
      <section className="banner-section">
        <video
                    playsInline
                    autoPlay
                    loop
                    muted
                    width="93%"
                    className="banner_img_room myvideo pt-0 web-video desk-video">
                    <source src="/jawai-img/jawai-overview-banner.mp4" type="video/mp4" />
                </video>
                <video
                    playsInline
                    autoPlay
                    loop
                    muted
                    className="banner_img_room myvideo pt-0 web-video mob-video">
                   <source src="/jawai-img/jawai-overview-banner.mp4" type="video/mp4" />
                </video>
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
          <img src="images/down-arrow.png" />
        </span>
       
      </section>
      <section className="booking-form-section">
        <BookNowForm />
      </section>
      <section className="mb-5">
        <div id="gurgaon-facilities" className="jawai-new-facalities">
          <JawaiHotelFacilities />
        </div>
      </section>
    </>
  )
}