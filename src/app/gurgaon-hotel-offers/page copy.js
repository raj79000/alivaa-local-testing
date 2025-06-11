

"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import GurgaonAccommodation from "../components/GurgaonAccommodation";

import GurgaonHotelOffers from "../components/GurgaonHotelOffers";
import Navbar from "app/components/Navbar";

import React, { useEffect} from 'react';

// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import Link from "next/link";

import { motion } from "framer-motion";

// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

//import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAlivaa from "../components/HeaderAlivaa";

import BookingFormInner from "../components/BookingFormInner";
import { useState } from "react";


export default function GurgaonHotelOffersPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (

        <>

<Navbar />
<HeaderAlivaa />

<section className="banner-section m-1 inner-main-bannerr">
        <img
          src="/images/our-offers/offer-aliva-page.jpg"
          alt="Hotels in Gurgaon"
          className="banner-img"
        />

        <div className="social-icon-banner">
          <a
            className="btn btn-social"
            href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              src="/images/fb-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-social"
            href="https://www.instagram.com/alivaahotels/"
            target="_blank"
          >
            <img
              src="/images/instagram-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-social"
            href="https://www.linkedin.com/company/alivaa-hotels-resorts/"
            target="_blank"
          >
            <img
              src="/images/linkedin-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
              className="social-icon"
            />
          </a>
        </div>
        <span className="updown-arrow">
          <img src="images/down-arrow.png" />
        </span>
        {!isVisible && (
          <div className="content-section">
            <div className="container position-relative">
              <div
                className="col-lg-12 text-center wow fadeInDown"
                data-wow-duration="4s"
              >
                <button
                  className="btn desktop-button corporatebannerbutton"
                  id="book-now1"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <img
                    src="/images/search-icon-white.svg"
                    className="search-iconimage"
                    alt="Search Icon"
                  />
                  {/* <span className="book-now-inner"> Book Now</span> */}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="content-section content-section-hoften">
          <div className="container position-relative">
            <div className="col-lg-12 text-center wow fadeInDown animated animated">
              {/* <h2 style={{color: "#fff"}}>Stay ALIVE</h2>

        <a href="#gurgaon-hotel" className="btn btn-primary desktop-button" style={{backgroundColor:"#000"}}>Book Now</a> */}
            </div>
          </div>
        </div>
      </section>

  
      <section
        className={`booking-form-section ${
          isVisible ? "slide-in" : "slide-out"
        }`}
        id="booking-engine"
      >
        <BookingFormInner />
      </section>



      <div className="container text-center sectiontop">
        <h1 className="global-heading-gurgaon inner-hd">
        Gurgaon Hotel Offers & Deals
        </h1>
        <p className="content-boxx">
        Welcome to Alivaa Hotels & Resorts, where luxury and comfort blend seamlessly to create an unforgettable stay. Our meticulously designed accommodations offer a diverse range of options, from spacious suites with breathtaking city views to intimate rooms perfect for relaxation. Each room is thoughtfully curated with elegant décor and modern amenities to ensure your utmost comfort. Whether you are visiting for business or leisure, Alivaa Hotels & Resorts provides the perfect retreat, promising an exceptional experience meets all your requirements.
         
        </p>
      </div>
    

  <div className="row gurgaon-offers">

    <div className="container"> 
      

      <section className="search-content about-us text-center" >

        <div className="container gurgaon-offers">        

        <div className="tab-content mt-3" >

            <div className="tab-pane fade show active">

                <div className="special-offers about-us new-rj-block text-center">

                    <div className="container">

                        <div className="row align-items-start m-0">

                            <div className="col-lg-6 p-0" >

                                <div className="alivaa-album">

                                    <img

                                    src="/images/executive-package-popup.jpg"

                                    alt="Executive Package"

                                    width={600}

                                    height={400}

                                    layout="responsive"

                                    />

                                </div>

                            </div>

                            <div className="col-lg-5 offset-lg-1 p-0 text-start" id="executive-offer"

                               >

                                <h3 className="global-heading">Executive Package</h3>

                                <ul className="content-boxx" style={{textAlign: "justify"}}>

                                    <li>Up to 50% Off on Best Available Rate</li>

                                    <li>Luxe Accommodation</li>

                                    <li>Breakfast for Two</li>

                                    <li>20% Discount on Food & Beverage</li>

                                    <li>Free Guaranteed Early check-in & Late check-out</li>

                                    <li>Booking Period: 1st Sep to Oct 2024</li>

                                    <li>Stay Period: 1st Sep to Mar 2025</li>

                                </ul>

                                {/* Book Now Button */}

                                <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                    Book Now

                                </Link>

                            </div>

                        </div>

                        <div className="row align-items-start mx-0 my-5">

                            <div className="col-lg-5 offset-lg-1 p-0 order-lg-5" 
                                >

                                <div className="alivaa-album">

                                    <img

                                    src="/images/offer-img-5.webp"

                                    alt="Executive Package"

                                    layout="responsive"

                                    className="img-fluid"

                                    />

                                </div>

                            </div>

                            <div className="col-lg-6 ps-5 text-start dayrooms-sec-offers-para" id="dayrooms-offer"

                              >

                                <h3 className="global-heading">Day Rooms</h3>

                                <p  className="content-boxx" style={{textAlign: "justify"}}>Day Use Room 10 AM to 6 PM, Check-in and Check-out on same day</p>

                                <ul>

                                    <li>Starting at INR 2024*</li>

                                    <li className="room-only"  style={{textAlign: "justify"}}>Room Only (EP) | Free WiFI

                                        <ul>

                                            <li  style={{textAlign: "justify"}}>Cancellation Policy: Non-cancellable, non-refundable and non-amendment for entire length of stay.</li>

                                        </ul>

                                    </li>

                                </ul>

                                <p className="m-0"  style={{textAlign: "justify"}}>Terms and Conditions:</p>

                                <ul>

                                    <li  style={{textAlign: "justify"}}>8 hour slot to be booked between 10 AM to 6 PM</li>

                                    <li  style={{textAlign: "justify"}}>Check-in is allowed only at or after 10 am, and check-out is before 6 pm on the same day.</li>

                                    <li  style={{textAlign: "justify"}}>Every extra hour utilized post 6 pm will be charged at 50% of the booking value, per hour, subject to room availability.</li>

                                    <li  style={{textAlign: "justify"}}>A 100 percent advance deposit is required at the time of reservation</li>

                                    <li  style={{textAlign: "justify"}}>Non-cancellable, non-refundable and non-amendment for entire length of stay.</li>

                                </ul>

                                {/* Book Now Button */}

                                <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                    Book Now

                                </Link>

                            </div>

                        </div>

                        <div className="row align-items-start mx-0 my-5">

                            <div className="col-lg-5 p-0" >

                                <div className="alivaa-album">

                                    <img

                                    src="/images/offer-img-2.webp"

                                    alt="Executive Package"

                                    layout="responsive"

                                    className="img-fluid"

                                    />

                                </div>

                            </div>

                            <div className="col-lg-6 offset-lg-1 p-0 text-start" id="relax-with-staycation"

                             >

                                <h3 className="global-heading">Relax with a Staycation at ALIVAA</h3>

                                <ul>

                                    <li>Free breakfast is included on both the day of arrival (check-in) and the day of departure (check-out).</li>

                                    <li>Guaranteed Early check-in & Late check-out</li>

                                    <li>15% Discount On F&B Services</li>

                                    <li>Complimentary Access to GYM / Swimming pool</li>

                                    <li>Validity: July 2024 - March 2025</li>

                                </ul>

                                <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

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

    

    </div>

            </div>

        </>

    )

}