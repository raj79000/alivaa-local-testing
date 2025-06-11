"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import HeaderAlivaa from "../components/HeaderAlivaa";
import BookingFormInner from "app/components/BookingFormInner";

import { motion } from "framer-motion";
import Navbar from "app/components/Navbar";
import { useState } from "react";

import GurgaonHotelAttractions from "../components/GurgaonHotelAttractions";



export default function GurgaonAttractionsPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (

        <>

<Navbar />
<HeaderAlivaa />

      <section className="banner-section m-1 inner-main-bannerr">
        <img
          src="/images/attractions/attractions.webp"
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



     
        



      {/* <BookingForm /> */}
<div id="gurgaon-attraction">
<GurgaonHotelAttractions/></div>

        </>

    )

}