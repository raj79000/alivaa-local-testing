"use client";
import { motion } from "framer-motion";
import { Modal } from 'react-bootstrap';  // Import Bootstrap Modal
import "../../app/styles/inner.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv, faArrowCircleDown, faArrowCircleUp,
  faWind,
  faMugHot,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import NavbarAliva from "app/components/NavbarAliva";
import { useState } from "react";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderDalhousie from "app/components/HeaderDalhousie";
import DalhousieNewEnquiryPopupBook from "app/components/DalhousieNewEnquiryPopupBook";
export default function DalhousieAccommodationPage() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <section className='home-hdr-hght'>
        <NavbarAliva />
        <HeaderDalhousie />
      </section>

      <section className="banner-section">
        <Image alt="Hotels in Dalhousie" height={500} width={1500} className="banner-img pt-0" src="/dalhousie-img/banner-room.png" />
        <div className="social-icon-banner" >
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
        <h1 className="global-heading-gurgaon mb-2 inner-hd">
          Rooms in Dalhousie
        </h1>
      </div>
      <div id="gurgaon-accommodation">

        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-5">

                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6 align-self-center">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Deluxe Room</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    Elegantly designed for solo travellers, our Deluxe Rooms offer a comfortable space with scenic mountain views.
                  </p>
                 


                  <a
                    href="#"
                    className="rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62" }} data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry"
                  >
                    Enquire Now
                  </a>
                </div>

                <div className="col-md-7 ordermt2">
                  <Image src="/dalhousie-img/room-deluxe.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
        

        <section className="room_cs">
          <div className="container-md p-0 shadow-lg">
            <div className="global-heading-sec text-start">
              <div
                className="row g-0 align-items-center py-4"
                data-aos="fade-in"
                data-aos-easing="ease-in-sine"
              >
                <div className="col-md-7">
                  <Image src="/dalhousie-img/room-super-deluxe.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>

                <div className="col-md-5 p-3 flex-column justify-content-center align-self-center">
                  <h2 className="global-heading">Super Deluxe Room</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                    Our Super Deluxe rooms provide a more spacious living area with plush interiors and top-notch amenities.
                  </p>
                 
                  <a
                    href="#"
                    className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62" }} data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-4">
                {/* Left Column */}
                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6 align-self-center">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Premium Room</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    Premium rooms at The Hoften Blue Magnets come with spacious living areas, well-appointed bathrooms, private balconies, and 3 king/queen-sized beds.
                  </p>
                  
                  <a
                    href="#"
                    className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62" }} data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* Right Column */}
                <div className="col-md-7 ordermt2">
                  <Image src="/dalhousie-img/room-premium.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="room_cs">
          <div className="container-md p-0 shadow-lg">
            <div className="global-heading-sec text-start">
              <div
                className="row g-0 align-items-center py-4"
                data-aos="fade-in"
                data-aos-easing="ease-in-sine"
              >
                <div className="col-md-7">
                  <Image src="/dalhousie-img/room-family.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>

                <div className="col-md-5 p-3 flex-column justify-content-center align-self-center">
                  <h2 className="global-heading">Family Suite</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                    Our Family suites have ample space for a family with 2 interconnected rooms, en-suite bathrooms, flat-screen TVs and WiFi. 
                  </p>
                 
                  <a
                    href="#"
                    className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62" }} data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-4">
                {/* Left Column */}
                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6 align-self-center">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Presidential Suite</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    The epitome of luxury. With a lavish bedroom, king-sized bed, separate dining area, jacuzzi, and a private balcony, our Presidential Suite offers the best of everything.
                  </p>
                  
                  <a
                    href="#"
                    className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62" }} data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry"
                  >
                    Enquire Now
                  </a>
                </div>
                {/* Right Column */}
                <div className="col-md-7 ordermt2">
                  <Image src="/dalhousie-img/room-honeymoon-suite.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <DalhousieNewEnquiryPopupBook />
    </>
  );
}
