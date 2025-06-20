"use client";
import "../../app/styles/inner.css";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import JawaiDining from "app/components/JawaiDining";
import HeaderJawai from "app/components/HeaderJawai";

export default function JawaiDiningPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>

        <NavbarAliva></NavbarAliva>

        <HeaderJawai></HeaderJawai>
      </section>


      <section className="banner-section">
        {/* <img
          src="/lansdowne-img/dining-banner.png"
          alt="Contact"
          className="banner-img pt-0"
        /> */}
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
        <h1 className="global-heading-gurgaon inner-hd">
          Dining Experiences at Jawai Palash Resort
        </h1>
        <p className="content-boxx">
          Our restaurant in Jawai Palash offers an authentic tour of Rajasthani cuisine. We have a farm-to-table approach, where every meal is prepared using fresh, seasonal organic produce sourced from local vendors. Our culinary philosophy at Jawai Palash is rooted in celebrating the authentic flavours of the region. From the comforting Dal Bati Churma to the tangy Ker Sangri, and a variety of delightful curries and breads, each dish at Jawai Palash tells a story of Rajasthan's rich culinary traditions.
        </p>
      </div>

      <div className="row">
        <div className="container">
          <div className="search-content contact-us new-rj-block text-center mt-1 gurgaon-dinning jaawai-dinging-enquiry-sec">
            <JawaiDining></JawaiDining>
          </div>
        </div>
      </div>
    </>
  );
}
