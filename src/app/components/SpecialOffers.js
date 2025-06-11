"use client";

import React, { useEffect } from "react";

// import Swiper from 'swiper';

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import Link from "next/link";

import { motion } from "framer-motion";

const SpecialOffers = () => {
  return (
    <motion.section className="new-our-offers our-offers about-us">
      <div className="container">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="alivaa-hotels"
            role="tabpanel"
          >
            <div className="tab-content special-offers about-us new-rj-block text-center">
              <div className="container p-2 g-0">
                {/* <div className="row align-items-start m-0">
                  <div className="col-lg-6 p-0">
                    <div className="alivaa-album">
                      <img
                        src="/images/our-offers/alivaa-new-offer-imgg-2.webp"
                        alt="Executive Package"
                        style={{ margin: "auto" }}
                        width={300}
                        height={550}
                        layout="responsive"
                      />
                    </div>
                  </div>

                  <div className="col-lg-5 offset-lg-1 p-0 text-start executive">
                    <h3 className="global-heading-about">Executive Package</h3>

                    <ul>
                      <li className="li-para">
                        Up to 50% Off on Best Available Rate
                      </li>

                      <li className="li-para">Luxe Accommodation</li>

                      <li className="li-para">Breakfast for Two</li>

                      <li className="li-para">
                        20% Discount on Food & Beverage
                      </li>

                      <li className="li-para">
                        Free Guaranteed Early check-in & Late check-out
                      </li>

                      <li className="li-para">
                        Booking Period: 1st Sep to Oct 2024
                      </li>

                      <li className="li-para">
                        Stay Period: 1st Sep to Mar 2025
                      </li>
                    </ul>

                    

                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div> */}

                <div className="row align-items-start pb-3 pt-4 mx-0 my-5">
                  <div className="col-lg-5 offset-lg-1 mt-4 p-0 order-lg-5">
                    <div className="alivaa-album">
                      <img
                        src="/images/offer-img-5.webp"
                        alt="Executive Package"
                        layout="responsive"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 ps-5 text-start day-rooms">
                    <h3 className="global-heading-about">Day Rooms</h3>

                    <p
                      className="content-boxx"
                      style={{ textAlign: "justify" }}
                    >
                      Day Use Room 10 AM to 6 PM, Check-in and Check-out on same
                      day
                    </p>

                    <ul>
                      <li className="li-para">Starting at INR 2024*</li>

                      <li className="room-only li-para">
                        Room Only (EP) | Free WiFI | Cancellation Policy:
                        Non-cancellable, non-refundable and non-amendment for
                        entire length of stay.
                      </li>
                    </ul>

                    <p
                      className="content-boxx"
                      style={{ textAlign: "justify" }}
                    >
                      Terms and Conditions:
                    </p>

                    <ul>
                      <li className="li-para">
                        8 hour slot to be booked between 10 AM to 6 PM
                      </li>

                      <li className="li-para">
                        Check-in is allowed only at or after 10 am, and
                        check-out is before 6 pm on the same day.
                      </li>

                      <li className="li-para">
                        Every extra hour utilized post 6 pm will be charged at
                        50% of the booking value, per hour, subject to room
                        availability.
                      </li>

                      <li className="li-para">
                        A 100 percent advance deposit is required at the time of
                        reservation
                      </li>

                      <li className="li-para">
                        Non-cancellable, non-refundable and non-amendment for
                        entire length of stay.
                      </li>
                    </ul>

                    {/* Book Now Button */}

                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn  text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* <div className="row align-items-start pb-3 mx-0 my-5">
                  <div className="col-lg-5 p-0">
                    <div className="alivaa-album">
                      <img
                        src="/images/offer-img-2.webp"
                        alt="Executive Package"
                        layout="responsive"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 offset-lg-1 p-0 text-start staycation">
                    <h3 className="global-heading-about">
                      Relax with a Staycation at ALIVAA
                    </h3>

                    <ul>
                      <li className="li-para">
                        Free breakfast is included on both the day of arrival
                        (check-in) and the day of departure (check-out).
                      </li>

                      <li className="li-para">
                        Guaranteed Early check-in & Late check-out
                      </li>

                      <li className="li-para">15% Discount On F&B Services</li>

                      <li className="li-para">
                        Complimentary Access to GYM / Swimming pool
                      </li>

                      <li className="li-para">
                        Validity: July 2024 - March 2025
                      </li>
                    </ul>


                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="alivaamcleodganj-hotels"
            role="tabpanel"
            style={{ textAlign: "center" }}
          >
            <img
              src="/images/comingsoon.png"
              className="search-iconimage"
              alt="Search Icon"
            />
            <div className="tab-content special-offers about-us new-rj-block text-center d-none">
              <div className="container p-2 g-0">
                {/* <div className="row align-items-start m-0">
                  <div className="col-lg-6 p-0">
                    <div className="alivaa-album">
                      <img
                        src="/images/our-offers/alivaa-new-offer-imgg-2.webp"
                        alt="Executive Package"
                        style={{ margin: "auto" }}
                        width={300}
                        
                        layout="responsive"
                      />
                    </div>
                  </div>

                  <div className="col-lg-5 offset-lg-1 p-0 text-start executive">
                    <h3 className="global-heading-about">Executive Package</h3>

                    <ul>
                      <li className="li-para">
                        Up to 50% Off on Best Available Rate
                      </li>

                      <li className="li-para">Luxe Accommodation</li>

                      <li className="li-para">Breakfast for Two</li>

                      <li className="li-para">
                        20% Discount on Food & Beverage
                      </li>

                      <li className="li-para">
                        Free Guaranteed Early check-in & Late check-out
                      </li>

                      <li className="li-para">
                        Booking Period: 1st Sep to Oct 2024
                      </li>

                      <li className="li-para">
                        Stay Period: 1st Sep to Mar 2025
                      </li>
                    </ul>


                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div> */}

                <div className="row align-items-start pb-3 pt-4 mx-0 my-5">
                  <div className="col-lg-5 offset-lg-1 mt-4 p-0 order-lg-5">
                    <div className="alivaa-album">
                      <img
                        src="/images/offer-img-5.webp"
                        alt="Executive Package"
                        layout="responsive"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 ps-5 text-start day-rooms">
                    <h3 className="global-heading-about">Day Rooms</h3>

                    <p
                      className="content-boxx"
                      style={{ textAlign: "justify" }}
                    >
                      Day Use Room 10 AM to 6 PM, Check-in and Check-out on same
                      day
                    </p>

                    <ul>
                      <li className="li-para">Starting at INR 2024*</li>

                      <li className="room-only li-para">
                        Room Only (EP) | Free WiFI | Cancellation Policy:
                        Non-cancellable, non-refundable and non-amendment for
                        entire length of stay.
                      </li>
                    </ul>

                    <p
                      className="content-boxx"
                      style={{ textAlign: "justify" }}
                    >
                      Terms and Conditions:
                    </p>

                    <ul>
                      <li className="li-para">
                        8 hour slot to be booked between 10 AM to 6 PM
                      </li>

                      <li className="li-para">
                        Check-in is allowed only at or after 10 am, and
                        check-out is before 6 pm on the same day.
                      </li>

                      <li className="li-para">
                        Every extra hour utilized post 6 pm will be charged at
                        50% of the booking value, per hour, subject to room
                        availability.
                      </li>

                      <li className="li-para">
                        A 100 percent advance deposit is required at the time of
                        reservation
                      </li>

                      <li className="li-para">
                        Non-cancellable, non-refundable and non-amendment for
                        entire length of stay.
                      </li>
                    </ul>

                    {/* Book Now Button */}

                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn  text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* <div className="row align-items-start pb-3 mx-0 my-5">
                  <div className="col-lg-5 p-0">
                    <div className="alivaa-album">
                      <img
                        src="/images/offer-img-2.webp"
                        alt="Executive Package"
                        layout="responsive"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 offset-lg-1 p-0 text-start staycation">
                    <h3 className="global-heading-about">
                      Relax with a Staycation at ALIVAA
                    </h3>

                    <ul>
                      <li className="li-para">
                        Free breakfast is included on both the day of arrival
                        (check-in) and the day of departure (check-out).
                      </li>

                      <li className="li-para">
                        Guaranteed Early check-in & Late check-out
                      </li>

                      <li className="li-para">15% Discount On F&B Services</li>

                      <li className="li-para">
                        Complimentary Access to GYM / Swimming pool
                      </li>

                      <li className="li-para">
                        Validity: July 2024 - March 2025
                      </li>
                    </ul>

                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="hoften-hotels"
            role="tabpanel"
            style={{ textAlign: "center" }}
          >
            <img
              src="/images/comingsoon.png"
              className="search-iconimage"
              alt="Search Icon"
            />
            <div className="tab-content special-offers about-us new-rj-block text-center d-none">
              <div className="row align-items-start m-0  pb-3 mb-5">
                <div className="col-lg-5 p-0">
                  <div className="alivaa-album">
                    <img
                      src="/images/hoften-offer-3.jpg"
                      alt="Executive Package"
                      layout="responsive"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1 p-1 text-start">
                  <h3 className="global-heading-about">Introductory offer</h3>

                  <ul>
                    <li>25% off on Best Available Rate</li>

                    <li>
                      ⁠Additional 10% discount for Logged-in users and mobile
                      users
                    </li>

                    <li>⁠Booking Period : Nov to Mar 2025</li>

                    <li>⁠Stay Period : Nov to Mar 2025</li>
                  </ul>

                  {/* Book Now Button */}

                  <Link
                    href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                    className="btn text-white dark-bg rounded-0 m-2"
                    style={{ borderColor: "#000", backgroundColor: "#002d62" }}
                    id="book-now"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="lansdowne-hotels"
            role="tabpanel"
            style={{ textAlign: "center" }}
          >
            <img
              src="/images/comingsoon.png"
              className="search-iconimage"
              alt="Search Icon"
            />
            
          </div>

          
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialOffers;
