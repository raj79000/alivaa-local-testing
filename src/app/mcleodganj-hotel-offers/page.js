"use client";
import "../../app/styles/inner.css";
import NavbarAliva from "app/components/NavbarAliva";
import React, { useEffect} from 'react';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import { useState } from "react";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderMcLeodganj from "app/components/HeaderMcLeodganj";
export default function GurgaonHotelOffersPage (){
  const [isVisible, setIsVisible] = useState(false);
    return (
<>
<section className='home-hdr-hght'>
<NavbarAliva/>
<HeaderMcLeodganj></HeaderMcLeodganj>
</section>
<section className="banner-section">
<img
      src="/images/our-offers/offer-aliva-page.jpg"
    alt="Hotels in Gurgaon"
    className="banner-img pt-0"
  />
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
    <img src="images/down-arrow.png"/>
  </span>
{/* { !isVisible && (<div className="content-section">
  <div className="container position-relative">
    <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
      <button className="btn desktop-button corporatebannerbutton btm15" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
        <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
      </button>
    </div>
  </div>
</div>) } */}
</section>
<section className="booking-form-section">
<BookNowForm />
</section>
      <div className="container text-center sectiontop">
        <h1 className="global-heading-gurgaon inner-hd">
        McLeodganj Hotel Offers & Deals
        </h1>
        <p className="content-boxx">
        Welcome to Alivaa Hotels & Resorts, where luxury and comfort blend seamlessly to create an unforgettable stay. Our meticulously designed accommodations offer a diverse range of options, from spacious suites with breathtaking city views to intimate rooms perfect for relaxation. Each room is thoughtfully curated with elegant décor and modern amenities to ensure your utmost comfort. Whether you are visiting for business or leisure, Alivaa Hotels & Resorts provides the perfect retreat, promising an exceptional experience meets all your requirements.
        </p>
      </div>
  <div className="row g-0 gurgaon-offers offer_gn">
    <div className="container"> 
      <section className="search-content mb-5 about-us mb-5 text-center" >
        <div className="container gurgaon-offers">        
        <div className="tab-content mt-3" >
            <div className="tab-pane fade show active">
                <div className="special-offers about-us new-rj-block text-center">
                    <div className="container pb-4">
                        <div className="row align-items-start m-0 pb-5">
                            <div className="col-lg-6 p-0" >
                                <div className="alivaa-album">
                                    <img
                                    src="/offers/limited-time-offer-alivaa-mc.png"
                                    alt="Executive Package"
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 p-0 text-start" id="executive-offer"
                               >
                                <h3 className="global-heading">Limited Time Offer</h3>
                                <ul className="content-boxx" style={{textAlign: "justify"}}>
                                    <li>Up to 50% Off on Best Available Rate</li>
                                    <li>Luxe Accommodation</li>
                                    <li>Breakfast for Two</li>
                                    <li>20% Discount on Food & Beverage</li>
                                    <li>Free Guaranteed Early check-in & Late check-out</li>
                                    
                                </ul>
                                <Link href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-05-20&checkOutDate=2025-05-20&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">
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
    <br></br>
    <br></br>
    </div>
            </div>
        </>
    )
}