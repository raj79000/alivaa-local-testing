"use client";
import "../../app/styles/inner.css";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderDalhousie from "app/components/HeaderDalhousie";
import DalhousieDining from "app/components/DalhousieDining";
import Image from "next/image";

export default function DalhousieDiningPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>

        <NavbarAliva></NavbarAliva>

        <HeaderDalhousie></HeaderDalhousie>
      </section>


      <section className="banner-section">
       <Image alt="Hotels in Dalhousie" height={500} width={1500} className="banner-img pt-0" src="/dalhousie-img/banner-dining.png" />
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
          Restaurants in Dalhousie
        </h1>
        <p className="content-boxx">
          A comfortable stay is not comfortable at all if it’s not combined with delicious meals. We understand this well, which is why The Hoften Blue Magnets houses one of the best multi-cuisine restaurants in Dalhousie. 
        </p>
      </div>

      <div className="row">
        <div className="container">
          <div className="search-content contact-us new-rj-block text-center mt-1 gurgaon-dinning jaawai-dinging-enquiry-sec">
            <DalhousieDining></DalhousieDining>
          </div>
        </div>
      </div>
    </>
  );
}
