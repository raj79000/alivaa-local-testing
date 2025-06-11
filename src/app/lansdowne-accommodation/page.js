"use client";

import { motion } from "framer-motion";

import { Modal } from "react-bootstrap"; 
import "../../app/styles/inner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faArrowCircleDown,
  faArrowCircleUp,
  faWind,
  faMugHot,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderLansdowne from "app/components/HeaderLansdowne";

export default function McleodganjAccommodationPage() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <section className="home-hdr-hght">
        <NavbarAliva></NavbarAliva>
        <HeaderLansdowne></HeaderLansdowne>
      </section>

      <section className="banner-section">
        <img
          src="/lansdowne-img/rooms-banner.png"
          alt="room"
          className="banner-img pt-0"
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
       
      </section>
      <section className="booking-form-section">
        <BookNowForm />
      </section>

      <div className="container text-center sectiontop">
        <h1 className="global-heading-gurgaon mb-2 inner-hd mb-3">
          Hotel Rooms in Lansdowne
        </h1>

        <p className="text-center">
          Find your ultimate sanctuary in Alivaa Hotels by experiencing the
          sophisticated 27 rooms and Suites in Lansdowne. The hotel design
          prioritises comfort and each room includes individual balconies
          offering beautiful views along the Himalayas and adjacent valleys.
        </p>
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
                  <h2 className="global-heading text-2xl font-bold text-gray-800">
                    Super Deluxe Room
                  </h2>
                  <p
                    className="mb-2 text-gray-600"
                    style={{ textAlign: "justify" }}
                  >
                    The Super Deluxe Rooms offer an experience of complete
                    relaxation. With the size of 310 square feet, these rooms
                    feature a private deck that delivers extraordinary valley
                    vistas, making them ideal for romantic escapes.
                  </p>
                  <b className="fw-bold">310 sq. ft.</b>

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
                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=&JDRN=Y&RoomID=209630,209631,209632,209633,209709&ap=1&gsId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY="
                    className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62 !important" }}
                  >
                    Book Now
                  </a>
                </div>

                {/* Right Column */}
                <div className="col-md-7 ordermt2">
                  <img
                    className="img-fluid rounded-lg shadow-lg"
                    src="/lansdowne-img/super-deluxe-room-1.jpg"
                    alt="Suite"
                  />
                
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for Read More */}
        <Modal
          className="featur_modal"
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        >
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
              <li>Private balconies</li>
              <li>Comfortable bedding</li>
              <li>Well-appointed bathrooms</li>
              <li>Complimentary toiletries</li>
              <li>In-room telephone</li>
              <li>Housekeeping services</li>
              <li>Free Wi-Fi</li>
              <li>Air Conditioning</li>
             
            </motion.ul>
          </Modal.Body>
         
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
                    src="/lansdowne-img/deluxe-room-1.jpg"
                    alt="Suite"
                  />
                </div>

                {/* Right Column (Text) */}
                <div className="col-md-5 p-5 flex-column justify-content-center">
                  <h2 className="global-heading"> Deluxe Room</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                   Experience the natural landscape from our comfortable Deluxe Rooms, which offer attractive outdoor spaces. These ground-floor rooms feature 310 square feet of space with serene valley views that can be seen from your individual balcony.

                  </p>
                  <b className="fw-bold">310 sq. ft.</b>
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
                  <Modal
                    className="featur_modal"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  >
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
                        <li>Private balconies  </li>
                        <li>Comfortable bedding</li>
                        <li>Well-appointed bathrooms</li>
                        <li>Complimentary toiletries</li>
                        <li>In-room telephone</li>
                        <li>Housekeeping services</li>
                        <li>Free Wi-Fi, Air Conditioning</li>
                      </motion.ul>
                    </Modal.Body>
                  
                  </Modal>

                  {/* Book Now Button */}
                  <a
                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=&JDRN=Y&RoomID=209630,209631,209632,209633,209709&ap=1&gsId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY="
                    className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62 !important" }}
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
                  <h2 className="global-heading text-2xl font-bold text-gray-800">
                    Premium Room
                  </h2>
                  <p
                    className="mb-2 text-gray-600"
                    style={{ textAlign: "justify" }}
                  >
                   Experience Himalayan immersion while escaping the city rush through our Premium Rooms. The rooms provide both valley view access from private balconies and a total of 310 square feet of relaxed accommodations.
                  </p>
                  <b className="fw-bold">310 sq. ft.</b>
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
                  <Modal
                    className="featur_modal"
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                  >
                    <Modal.Header closeButton className="fs-4">
                      <Modal.Title>Premium Room </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-3 list-disc list-inside text-gray-600"
                      >
                        <li> Private balconies  </li>
                        <li> Comfortable bedding</li>
                        <li> Well-appointed bathrooms</li>
                        <li> Complimentary toiletries</li>
                        <li>In-room telephone</li>
                        <li>Housekeeping services</li>
                        <li>Free Wi-Fi</li>
                        <li>Air Conditioning</li>
                       
                      </motion.ul>
                    </Modal.Body>
                   
                  </Modal>

                  {/* Book Now Button */}
                  <a
                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=&JDRN=Y&RoomID=209630,209631,209632,209633,209709&ap=1&gsId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY="
                    className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62 !important" }}
                  >
                    Book Now
                  </a>
                </div>

                {/* Right Column */}
                <div className="col-md-7 ordermt2">
                  <img
                    className="img-fluid rounded-lg shadow-lg"
                    src="/lansdowne-img/premium-room-1.jpg"
                    alt="Suite"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    src="/lansdowne-img/rooftop-cottage-1.jpg"
                    alt="Suite"
                  />
                </div>

                {/* Right Column (Text) */}
                <div className="col-md-5 p-5 flex-column justify-content-center">
                  <h2 className="global-heading"> Rooftop Cottages</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                   At the rooftop of our facility we provide expansive cottages which allow guests to embrace complete tranquillity. A 1040 sq ft private terrace attached to your room provides an ideal space for relaxation where you can empathically witness the beauty of the Himalayan surroundings. 
                  </p>
                  {/* <b className="fw-bold">310 sq. ft.</b> */}
                  {/* Read More Toggle with FontAwesome Icon */}
                  <a
                    href="#"
                    className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow4(true); // Show the modal when clicking Read More
                    }}
                  >
                    {showMore ? "Read Less" : "Read More"}
                    <FontAwesomeIcon
                      icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                      className="ms-2 text-lg"
                    />
                  </a>

                  {/* Additional Features List with Animation */}
                  <Modal
                    className="featur_modal"
                    show={modalShow4}
                    onHide={() => setModalShow4(false)}
                  >
                    <Modal.Header closeButton className="fs-4">
                      <Modal.Title>Rooftop Cottages</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-3 list-disc list-inside text-gray-600"
                      >
                        <li>Private balconies  </li>
                        <li>Comfortable bedding</li>
                        <li>Well-appointed bathrooms</li>
                        <li>Complimentary toiletries</li>
                        <li>In-room telephone</li>
                        <li>Housekeeping services</li>
                        <li>Free Wi-Fi</li>
                        <li>Air Conditioning</li>
                      </motion.ul>
                    </Modal.Body>
                  
                  </Modal>

                  {/* Book Now Button */}
                  <a
                    href="https://bookings.alivaahotels.com/inst/#/home?propertyId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY=&JDRN=Y&RoomID=209630,209631,209632,209633,209709&ap=1&gsId=863NTQTKSN9pxhpc7Nmf9ycwpyyT5hmcqmIJ9ILVwh0eqVxGX4ODY="
                    className="alivactacolor rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62 !important" }}
                  >
                    Book Now
                  </a>
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
