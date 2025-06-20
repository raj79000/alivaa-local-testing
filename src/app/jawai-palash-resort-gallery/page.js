"use client";
import "../../app/styles/inner.css";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import JawaiHotelGallery from "app/components/JawaiHotelGallery";
import HeaderJawai from "app/components/HeaderJawai";
export default function GurugramGalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>
        <NavbarAliva></NavbarAliva>
        <HeaderJawai></HeaderJawai>
      </section>
      <section className="banner-section">
        <img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/jawai-img/jawai-gallery-banner-2.png" />
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
      <JawaiHotelGallery />
    </>
  )
}