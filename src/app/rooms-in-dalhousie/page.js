"use client";
import { motion } from "framer-motion";
import { Modal } from 'react-bootstrap';  // Import Bootstrap Modal
import "../../app/styles/inner.css";
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
import HeaderDalhousie from "app/components/HeaderJawai";
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
          Rooms & Suites at Jawai Palash Resort
        </h1>
      </div>
      <div id="gurgaon-accommodation">

        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-5">

                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Villa with Private Jacuzzi</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    Enjoy a comfortable stay with luxurious touch in our Villa with Private Jacuzzi. Equipped with an adjacent living and dining area and a private verandah, these rooms in Jawai aptly mingle elegant Rajasthani decor with modern indulgence. The private jacuzzi adds a touch of spa-like serenity to your stay.
                  </p>
                  <b className="fw-bold">Room Size: 670 sq ft</b><br />
                  <b className="fw-bold">Bed Type: Double Bed</b><br />
                  <b className="fw-bold">Units Available: 6</b>

                  <a
                    href="#"
                    className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow1(true);
                    }}
                  >
                    {showMore ? "Read Less" : "Read More"}
                    <FontAwesomeIcon
                      icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                      className="ms-2 text-lg"
                    />
                  </a>

                  <a
                    href="#"
                    className="rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "#002d62" }} data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry"
                  >
                    Enquire Now
                  </a>
                </div>

                <div className="col-md-7 ordermt2">
                  <video autoPlay loop muted playsInline className="w-100 primary-radius">
                    <source src="/jawai-img/rooms-villa-with-private-Jacuzzi.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modal for Read More */}
        <Modal className="featur_modal" show={modalShow1} onHide={() => setModalShow1(false)}>
          <Modal.Header closeButton className="fs-4">
            <Modal.Title>Villa with Private Jacuzzi Features</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-3 list-disc list-inside text-gray-600"
            >
              <li>Garden or Mountain View</li>
              <li>Open-to-sky Shower</li>
              <li>Private Verandah</li>
              <li>Flat-Screen TV</li>
              <li>Jacuzzi/Bathtub (select rooms)</li>
              <li>Espresso Coffee Machine</li>
              <li>Air Conditioning</li>
              <li>Refrigerator</li>
              <li>Ensuite Bathroom</li>
              <li>Premium Toiletries</li>
              <li>Cotton Bath Towels & Linens</li>
              <li>Separate Living</li>
              <li>Wardrobe</li>
              <li>Ironing Facilities</li>
              <li>Electric Kettle</li>
              <li>Mini Bar</li>
              <li>Wheelchair Accessible</li>
              <li>Wake-up Service</li>
            </motion.ul>
          </Modal.Body>
        </Modal>

        <section className="room_cs">
          <div className="container-md p-0 shadow-lg">
            <div className="global-heading-sec text-start">
              <div
                className="row g-0 align-items-center py-4"
                data-aos="fade-in"
                data-aos-easing="ease-in-sine"
              >
                <div className="col-md-7">
                  <video autoPlay loop muted playsInline className="w-100 primary-radius">
                    <source src="/jawai-img/rooms-mud-house.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="col-md-5 p-3 flex-column justify-content-center">
                  <h2 className="global-heading">Mud House</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                    Our Mud Houses in Jawai are a step into tradition that mirrors the life of the local Rabari community and their architecture. Thoughtfully designed, these units comprise rustic charm with modern comfort and offer amenities such as an espresso machine, separate living and dining areas, and a private verandah overlooking a peaceful rock garden.
                  </p>
                  <b className="fw-bold">Room Size: 710 sqft</b><br />
                  <b className="fw-bold">Bed Type: Double Bed</b><br />
                  <b className="fw-bold">Units Available: 2</b>

                  <a
                    href="#"
                    className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow(true);
                    }}
                  >
                    {showMore ? "Read Less" : "Read More"}
                    <FontAwesomeIcon
                      icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                      className="ms-2 text-lg"
                    />
                  </a>

                  <Modal className="featur_modal" show={modalShow} onHide={() => setModalShow(false)}>
                    <Modal.Header closeButton className="fs-4">
                      <Modal.Title>Mud House Features</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-3 list-disc list-inside text-gray-600"
                      >
                        <li>Garden or Mountain View</li>
                        <li>Open-to-sky Shower</li>
                        <li>Private Verandah</li>
                        <li>Flat-Screen TV</li>
                        <li>Espresso Coffee Machine</li>
                        <li>Air Conditioning</li>
                        <li>Refrigerator</li>
                        <li>Ensuite Bathroom</li>
                        <li>Premium Toiletries</li>
                        <li>Separate Living area</li>
                        <li>Wardrobe</li>
                        <li>Ironing Facilities</li>
                        <li>Electric Kettle</li>
                        <li>Mini Bar</li>
                        <li>Wheelchair Accessible</li>
                        <li>Board Games & Puzzles</li>
                        <li>Wake-up Service</li>
                      </motion.ul>
                    </Modal.Body>
                  </Modal>
                  {/* Book Now Button */}
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

        {/* room */}
        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-4">
                {/* Left Column */}
                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Villa with Private Patio</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    Enter into tranquillity with our Villa in Jawai, combining modern design and thoughtful elegance. Relax in an Indian-style verandah and feel nature while being surrounded with wildlife. Perfect for the guests who want to relax after a day of sightseeing.
                  </p>
                  <b className="fw-bold">Room Size: 700 sqft</b><br />
                  <b className="fw-bold">Bed Type: Double Bed</b><br />
                  <b className="fw-bold">Units Available: 4</b>
                  <a
                    href="#"
                    className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow2(true);
                    }}
                  >
                    {showMore ? "Read Less" : "Read More"}
                    <FontAwesomeIcon
                      icon={showMore ? faArrowCircleUp : faArrowCircleDown}
                      className="ms-2 text-lg"
                    />
                  </a>

                  <Modal className="featur_modal" show={modalShow2} onHide={() => setModalShow2(false)}>
                    <Modal.Header closeButton className="fs-4">
                      <Modal.Title>Villa With Private Patio Features</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-3 list-disc list-inside text-gray-600"
                      >
                        <li>
                          Private Verandah
                        </li>
                        <li>
                          Flat-Screen TV
                        </li>
                        <li>
                          Espresso Coffee Machine
                        </li>
                        <li>
                          Air Conditioning
                        </li>
                        <li>
                          Refrigerator
                        </li>
                        <li>
                          Ensuite Bathroom
                        </li>
                        <li>
                          Premium Toiletries
                        </li>
                        <li>
                          Cotton Bath Towels & Linens
                        </li>
                        <li>
                          Wardrobe
                        </li>
                        <li>
                          Ironing Facilities
                        </li>
                        <li>
                          Electric Kettle
                        </li>
                        <li>
                          Mini Bar
                        </li>
                        <li>
                          Wheelchair Accessible
                        </li>
                        <li>
                          Wake-up Service
                        </li>
                      </motion.ul>
                    </Modal.Body>
                  </Modal>
                  {/* Book Now Button */}
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
                  <video autoPlay loop muted playsInline className="w-100 primary-radius">
                    <source src="/jawai-img/rooms-villa-with-private-patio.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
