"use client";
//import BookingForm from '../components/BookingForm';
import "../../app/styles/inner.css";
import { motion } from "framer-motion";
import HeaderDalhousie from '../components/HeaderDalhousie';
import DalhousieHotelContact from '../components/DalhousieHotelContact';
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import Image from "next/image";
export default function DalhousieContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>
        <NavbarAliva></NavbarAliva>
        <HeaderDalhousie />
      </section>
      <section className="banner-section">
        <Image alt="Hotels in Dalhousie" height={500} width={1500} className="banner-img pt-0" src="/dalhousie-img/banner-contact-us.png" />
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
      <div className="row mt-5">
        <div className="container mt-5">
          <motion.section className="hoften-main-contactt search-content contact-us new-rj-block new-pc-block text-center mt-1 gurugram-contact"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, y: -200, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <motion.div className="container" style={{ width: "80%" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <div className="center">
                <h1 className="global-heading-gurugram  gurugram-offers">Contact The Hoften Blue Magnets Dalhousie</h1>
                <h3 className="global-heading-gurgaon sub-head">Our 24/7 helpdesk is waiting to assist you</h3>
                <p className="content-boxx">We would love to hear from you! Whether you’re planning your stay, booking an event, or simply have a query, our team is here to assist you.
                </p>
              </div>
            </motion.div>
            <DalhousieHotelContact />
          </motion.section>
          <style jsx>{`
              @media (max-width: 768px) {
              .hoften-main-contactt .contactus-section .col-md-4 {
                  margin-bottom: 2rem;
              }
                  form.contactus-form{
                  margin-left:2rem!important;
                  }
              }
    `}</style>
        </div>
      </div>
    </>
  );
}