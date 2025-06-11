"use client";

import { motion } from "framer-motion";

//import BookingForm from "app/components/BookingForm";
import { Modal } from 'react-bootstrap';  // Import Bootstrap Modal
import AboutUs from "app/components/AboutUs";
import "../../app/styles/inner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv, faArrowCircleDown, faArrowCircleUp,
  faWind,
  faMugHot,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import NavbarMcleodganj from "app/components/NavbarMcleodganj";
import HeaderMcLeodganj from "app/components/HeaderMcLeodganj";

import BookingFormInner from "../components/BookingFormInner";

import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function McleodganjAccommodationPage() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
  <section className='home-hdr-hght'>     
 <NavbarAliva></NavbarAliva>
 <HeaderMcLeodganj />
  </section>   

 <section className="banner-section">
 <img
    src="/images/mcleodganj/rooms/room-banner.png"
    alt="room"
    className="banner-img pt-0"
  />
   
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
        <h1 className="global-heading-gurgaon mb-2 inner-hd mb-3">
        Hotel Rooms In McLeodganj
        </h1>

     
      </div>

  <div id="gurgaon-accommodation">
        {/* <GurgaonAccommodation/> */}

   {/* room */}
   <section className="sec-padding room_cs py-10">
        <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
          <div className="global-heading-sec text-start">
            <div className="row g-0 items-center">
              {/* Left Column */}
              <div className="col-md-5 order-mob p-5 flex flex-col justify-center p-6">
                <h2 className="global-heading text-2xl font-bold text-gray-800">Deluxe Room</h2>
                <p className="mb-2 text-gray-600" style={{textAlign:"justify"}}>
                The Deluxe Rooms at Alivaa Hotel maintain comfortable furnishings and a private setting that provides excellent views of the Dhauladhar Mountain range and Dalai Lama House for guests to enjoy.
                </p>
                <b className="fw-bold">263 sq. ft.</b>

                {/* Read More Toggle with FontAwesome Icon */}
                <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow1(true); // Show the modal when clicking Read More
                  }}
                >
                  {showMore ? "Read Less" : "Read More"}
                  <FontAwesomeIcon
                    icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                    className="ms-2 text-lg"
                  />
                </a>

                {/* Book Now Button */}
                <a
                  href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-06-01&checkOutDate=2025-06-02&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0"
                  className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                  style={{backgroundColor: "#002d62 !important"}}
                >
                  Book Now
                </a>
              </div>

              {/* Right Column */}
              <div className="col-md-7 ordermt2">
          <img
                  className="img-fluid rounded-lg shadow-lg"
                  src="/images/mcleodganj/rooms/deluxe.jpg"
                  alt="Suite"
                />
                {/* <img
                  className="img-fluid rounded-lg shadow-lg"
                  src="https://www.alivaahotels.com/images/suite-new-image.webp"
                  alt="Suite"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Read More */}
      <Modal className="featur_modal" show={modalShow1} onHide={() => setModalShow1(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Deluxe Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           <li>Premium, high-speed Internet access</li>
  <li>50-inch smart TV</li>
  <li>Air Conditioner</li>
  <li>In-room laptop-sized electronic safe</li>
  <li>Deluxe bath amenities and a hair dryer (on request)</li>
  <li>Coffee maker</li>
  <li>Iron and ironing boards (on request)</li>
  <li>Generous workstation with ergonomic chair</li>
  <li>Multimedia connections</li>
  <li>Mini bar</li>
          </motion.ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <button
            className="btn btn-dark"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
    {/* room */}
    <section className="room_cs">
      <div className="container-md p-0 shadow-lg">
        <div className="global-heading-sec text-start">
          <div
            className="row g-0 align-items-center"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
          >
            {/* Left Column (Image) */}
            <div className="col-md-7">
            <img
                  className="img-fluid rounded-lg shadow-lg"
                  src="/images/mcleodganj/rooms/super_deluxe.jpg"
                  alt="Suite"
                />
            </div>

            {/* Right Column (Text) */}
            <div className="col-md-5 p-5 flex-column justify-content-center">
              <h2 className="global-heading"> Super Deluxe Room</h2>
              <p className="mb-2" style={{textAlign:"justify"}}>
              The Super Deluxe Room offers enhanced opulence and space, perfect panoramic views and superior amenities, which makes your experience blissful. Each room comes with a balcony, allowing guests to enjoy the picturesque views of the Dhauladhar Mountain range and the Dalai Lama House.
              </p>
              <b className="fw-bold">296 sq. ft.</b>
                {/* Read More Toggle with FontAwesome Icon */}
                <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow(true); // Show the modal when clicking Read More
                  }}
                >
                  {showMore ? "Read Less" : "Read More"}
                  <FontAwesomeIcon
                    icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                    className="ms-2 text-lg"
                  />
                </a>


          {/* Additional Features List with Animation */}
          <Modal className="featur_modal" show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Super Deluxe Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           <li>Premium, high-speed Internet access</li>
  <li>50-inch smart TV</li>
  <li>Air Conditioner</li>
  <li>In-room laptop-sized electronic safe</li>
  <li>Deluxe bath amenities and a hair dryer (on request)</li>
  <li>Coffee maker</li>
  <li>Iron and ironing boards (on request)</li>
  <li>Generous workstation with ergonomic chair</li>
  <li> Multimedia connections</li>
  <li> Mini bar</li>
          </motion.ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <button
            className="btn btn-dark"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
       

          {/* Book Now Button */}
          <a
            href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-06-01&checkOutDate=2025-06-02&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0"
            className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
            style={{backgroundColor: "#002d62 !important"}}
          >
            Book Now
          </a>
            </div>
          </div>
        </div>
      </div>
    </section>

   {/* room */}
   <section className="sec-padding room_cs py-10">
      <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
        <div className="global-heading-sec text-start">
          <div className="row g-0 items-center">
            {/* Left Column */}
            <div className="col-md-5 order-mob p-5 flex flex-col justify-center p-6">
              <h2 className="global-heading text-2xl font-bold text-gray-800">Premium Room</h2>
              <p className="mb-2 text-gray-600" style={{textAlign:"justify"}}>
              Spacious and lavish, the Premium Room is known for the unparalleled comfort and convenience designed to enjoy the picturesque views of the Dhauladhar Mountain range and the Dalai Lama House.

              </p>
<b className="fw-bold">362 sq. ft.</b>
              {/* Read More Toggle with FontAwesome Icon */}
              <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow2(true); // Show the modal when clicking Read More
                  }}
                >
                  {showMore ? "Read Less" : "Read More"}
                  <FontAwesomeIcon
                    icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                    className="ms-2 text-lg"
                  />
                </a>


          {/* Additional Features List with Animation */}
      <Modal className="featur_modal" show={modalShow2} onHide={() => setModalShow2(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Premium Room Features</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
            <li>   Premium, high-speed Internet access</li>
            <li> 50-inch smart TV</li>
            <li> Air Conditioner</li>
            <li> In-room laptop-sized electronic safe</li>
            <li> Deluxe bath amenities and a hair dryer (on request)</li>
            <li>Coffee maker</li>
            <li> Iron and ironing boards (on request)</li>
            <li> Generous workstation with ergonomic chair</li>
            <li> Multimedia connections</li>
            <li> Mini bar</li>
      

          </motion.ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <button
            className="btn btn-dark"
            onClick={() => setModalShow(false)}
          >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
       

             

              {/* Book Now Button */}
              <a
                href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-06-01&checkOutDate=2025-06-02&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0"
                className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                style={{backgroundColor: "#002d62 !important"}}
              >
                Book Now
              </a>
            </div>

            {/* Right Column */}
            <div className="col-md-7 ordermt2">
            <img
                  className="img-fluid rounded-lg shadow-lg"
                  src="/images/mcleodganj/rooms/premium.jpg"
                  alt="Suite"
                />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* room */}
  
      </div>
    </>
  );
}
