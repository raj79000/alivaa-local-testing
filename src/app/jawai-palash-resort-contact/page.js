"use client";
import "../../app/styles/inner.css";
import { motion } from "framer-motion";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderJawai from "app/components/HeaderJawai";
import JawaiHotelContact from "app/components/JawaiHotelContact";
import Image from "next/image";
export default function JawaiHotelContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>
        <NavbarAliva></NavbarAliva>
        <HeaderJawai></HeaderJawai>
      </section>
      <section className="banner-section">
        <Image height={700} width={1500} alt="Hotels in Gurgaon" className="w-100 banner-img pt-0" src="/jawai-img/jawai-contact-banner.png" />

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
      <div className="container text-center sectiontop">
        <h1 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd" >Contact Us Jawai Palash Resort</h1>
        <h3 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Our 24/7 helpdesk is waiting to assist you
        </h3>
        <p className="content-boxx gurgaon-dinning mt-2">If you have any enquiries, we’re more than pleased to help in planning your dream escape to Jawai Palash. You can find our contact details below and one of our dedicated team will be happy to help. We are looking forward to welcoming you in our sanctuary in the heart of Jawai.
        </p>
      </div>
      <div className="row gurgaon-contact-row sectiontop">
        <div className="container mb-5">
          <motion.section className="search-content contact-us new-rj-block new-pc-block gurgaon-contact text-center mt-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, y: -200 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <JawaiHotelContact />
          </motion.section>
        </div>
      </div>

      <section className="container mt-0 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 no-pad">
            <div className="contact-location-distance-data">
              <h2 className="mt-0">How to Reach Us</h2>
              <ul className="reachus-data">
                <li>Maharana Pratap Airport (Udaipur) <b>145 Km</b></li>
                <li>Jodhpur Airport <b>172 Km</b></li>
                <li>Jawai Bandh Railway Station <b>13 Km</b></li>
                <li>Sumerpur Bus Stand <b>23 Km</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        
.contact-location-distance-data{
  background: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
  .reachus-data {
    list-style:none;
}
.reachus-data {
    margin: 0;
    padding: 0;
}
   .reachus-data  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px !important;
    border-bottom: 1px solid #ebebeb;
    padding: 10px 0;
}
       .reachus-data  li b {
    font-weight: 600;
}
    .contact-location-distance-data{
    padding-bottom: 35px;}


        `}
        </style>

    </>
  );
}