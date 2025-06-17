"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HeaderHoften from "../components/HeaderHoften";

import BookingFormInner from "../components/BookingFormInner";


import NavbarOften from "app/components/NavbarOften";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import Link from "next/link";

export default function GurugramHotelOfferPage() {
  const [isVisible, setIsVisible] = useState(false);


  const openModal = () => {

    if (modalInstance) modalInstance.show();

  };



  const validateData_ee = () => {



  }

  return (

    <>
      <section className='home-hdr-hght'>
        <NavbarAliva></NavbarAliva>
        <HeaderHoften />
      </section>

      <section className="banner-section">

        <img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/images/hofton-gallery/hoften-offer-b.jpeg" />

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
        {/* { !isVisible && (<div className="content-section">
<div className="container position-relative mb-0">
  <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
    <button className="btn desktop-button corporatebannerbutton" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
      <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
     
    </button>
  </div>
</div>
</div>) } */}

      </section>

      <section className="booking-form-section">

        <BookNowForm />

      </section>


      <motion.section className="search-content contact-us new-rj-block text-center trnsf "

        initial={{ opacity: 0.6, x: -50 }}

        whileInView={{ opacity: 1, y: -50, x: 0 }}

        transition={{ duration: 0.6, delay: 0.6 }}>



        <motion.div className="container"

          initial={{ opacity: 0.6, y: -250, x: -50 }}

          whileInView={{ opacity: 1, y: 0, x: 0 }}

          transition={{ duration: 0.6, delay: 0.6 }}>

          <div className="center ">

            <h2 className="global-heading-gurgaon inner-hd">Gurugram Hotel Offers & Deals</h2>

            <p style={{ color: "black", textAlign: "justify", }}>The Hoften invites you to a space where contemporary comfort meets understated elegance. Our thoughtfully crafted experiences are designed to elevate every stay, making your visit to Gurgaon effortlessly memorable. Whether you're here for business or leisure, let The Hoften be your urban retreat in the heart of the city—where convenience, style, and warm hospitality come together seamlessly.</p>

          </div>

        </motion.div>
          <section className="search-content mb-5 about-us mb-5 text-center" >
            <div className="container gurgaon-offers">        
                <div className="tab-content mt-3" >
                  <div className="tab-pane fade show active">
                      <div className="special-offers about-us new-rj-block text-center">
                          <div className="container pb-4">
                              <div className="row align-items-start m-0 pb-5">
                                  <div className="col-lg-6 p-0 align-self-center" >
                                      <div className="alivaa-album">
                                          <img
                                          src="/offers/day-use-offer-hoften-ggn.jpg"
                                          alt="Executive Package"
                                          width={600}
                                          height={400}
                                          layout="responsive"
                                          />
                                      </div>
                                  </div>
                                  <div className="col-lg-5 offset-lg-1 p-0 text-start" id="executive-offer"
                                    >
                                      <h3 className="global-heading mt-0" style={{MarginTop: "20px!important"}}>Day Use Rooms</h3>
                                      <ul style={{textAlign: "justify"}}>
                                          <li>Day Use Room 10 AM to 6 PM, Check-in and Check-out on the same day</li>
                                          <li>Room Only (EP) | Free WiFI</li>
                                          <p>Terms and Conditions:</p>
                                          <li>8-hour slot to be booked between 10 AM to 6 PM</li>
                                          <li>Check-in is allowed only at or after 10 am, and check-out is before 6 pm on the same day.</li>
                                          <li>Every extra hour utilized post 6 pm will be charged at 50% of the booking value, per hour, subject to room availability.</li>
                                          <li>20% off on Food & Beverage Services.</li>
                                      </ul>
                                      <Link href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">
                                          Book Now
                                      </Link>
                                  </div>
                              </div>
                            
                          </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>

      </motion.section>
     
    </>

  )

}