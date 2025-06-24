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
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
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
          Comfortable Hotel Rooms in Dalhousie
        </h1>
        <p>At The Hoften Blue Magnets, Dalhousie, we’ve carefully curated a range of room options suitable for every kind of traveller. Whether you’re visiting the town for business, tourism, or for a retreat with your friends/family, we have a room made just for you. 
        </p>
        <h5 className=" mt-3 pb-4">Check Out The Best Hotel Rooms and Suites in Dalhousie</h5>
      </div>
      <div id="gurgaon-accommodation">

        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-5">

                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6 align-self-center">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Deluxe Room</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    Designed for solo travellers or couples, our Deluxe rooms offer comfortable accommodation in Dalhousie with high-quality interiors, well-appointed washrooms, and professional room service. They also provide scenic views of the mountains and greenery, making them a perfect choice for your stay in Dalhousie. A perfect blend of modern comfort with scenic beauty at an affordable price point, this combination is unbeatable.
                  </p>

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

        {/* Modal for Read More */}
      <Modal className="featur_modal" show={modalShow1} onHide={() => setModalShow1(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Amenities & Facilities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           
            <li>Power backup</li>
            <li>Coffee maker</li>
            <li>High-speed WiFi</li>
            <li>Room service</li>
            <li>Doctor on call</li>
            <li>Laundry service (chargeable)</li>
            <li>Iron and ironing boards (on request)</li>
            
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
                  <Image src="/dalhousie-img/room-super-deluxe.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>

                <div className="col-md-5 p-3 flex-column justify-content-center align-self-center">
                  <h2 className="global-heading">Super Deluxe Room</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                    The Super Deluxe Room takes the comfort and elegance of Deluxe Rooms to the next level with a more spacious living area, better furnishings, and top-notch amenities. Designed for couples seeking a romantic escape, the Super Deluxe Room at The Hoften Blue Magnets offers panoramic views of Dalhousie’s Dhauladhar mountain range from the windows.  

                  </p>

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

          {/* Modal for Read More */}
      <Modal className="featur_modal" show={modalShow2} onHide={() => setModalShow2(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Amenities & Facilities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           
            <li>Power backup</li>
            <li>Coffee maker</li>
            <li>High-speed WiFi</li>
            <li>Room service</li>
            <li>Doctor on call</li>
            <li>Laundry service (chargeable)</li>
            <li>Iron and ironing boards (on request)</li>
            
            </motion.ul>
        </Modal.Body>
      </Modal>

       
        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-4">
                {/* Left Column */}
                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6 align-self-center">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Premium Room</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    The Premium Room at The Hoften Blue Magnets, Dalhousie offers a premium experience with the serene views of this Himachali town from a private balcony. The living area is more spacious, and each room comes with 3 king/queen-size beds, a well-appointed bathroom, and best-in-class amenities. The personalised service and tranquil ambience of these rooms make them even more appealing, making you want to stay here forever!

                  </p>

                  <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow3(true); // Show the modal when clicking Read More
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

              {/* Modal for Read More */}
      <Modal className="featur_modal" show={modalShow3} onHide={() => setModalShow3(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Amenities & Facilities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           
            <li>Power backup</li>
            <li>Coffee maker</li>
            <li>High-speed WiFi</li>
            <li>Room service</li>
            <li>Doctor on call</li>
            <li>Laundry service (chargeable)</li>
            <li>Iron and ironing boards (on request)</li>
            
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
                  <Image src="/dalhousie-img/room-family.png" alt="Deluxe Room" height={400} width={800} className="w-100 h-full object-cover" />
                </div>

                <div className="col-md-5 p-3 flex-column justify-content-center align-self-center">
                  <h2 className="global-heading">Family Suite</h2>
                  <p className="mb-2" style={{ textAlign: "justify" }}>
                   Our Family Suites are thoughtfully designed to offer comfort, space, and convenience for families seeking a memorable stay. Featuring two interconnected bedrooms, two well-appointed bathrooms, and ample space to unwind, these suites are ideal for families looking to stay together while enjoying privacy. Whether you’re relaxing after a day of sightseeing or spending quality time together, the Family Suite provides the perfect setting amidst the hills.

                  </p>

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

                {/* Modal for Read More */}
      <Modal className="featur_modal" show={modalShow4} onHide={() => setModalShow4(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Amenities & Facilities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           
            <li>Power backup</li>
            <li>Coffee maker</li>
            <li>High-speed WiFi</li>
            <li>Room service</li>
            <li>Doctor on call</li>
            <li>Laundry service (chargeable)</li>
            <li>Iron and ironing boards (on request)</li>
            
            </motion.ul>
        </Modal.Body>
      </Modal>

        <section className="sec-padding room_cs py-10">
          <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
            <div className="global-heading-sec text-start">
              <div className="row g-0 items-center py-4">
                {/* Left Column */}
                <div className="col-md-5 order-mob p-3 flex flex-col justify-center p-6 align-self-center">
                  <h2 className="global-heading text-2xl font-bold text-gray-800">Presidential Suite</h2>
                  <p className="mb-2 text-gray-600" style={{ textAlign: "justify" }}>
                    Our Presidential Suite is an exceptional choice for those seeking an ultimate luxury. This suite boasts a spacious living area, an elegant dining space, and a private balcony offering breathtaking panoramic views of the surrounding hills. Every detail of the Presidential Suite is designed to provide an extraordinary experience
                  </p>

                  <a
                  href="#"
                  className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setModalShow5(true); // Show the modal when clicking Read More
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

        {/* Modal for Read More */}
      <Modal className="featur_modal" show={modalShow5} onHide={() => setModalShow5(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Amenities & Facilities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-3 list-disc list-inside text-gray-600"
          >
           
            <li>Power backup</li>
            <li>Coffee maker</li>
            <li>High-speed WiFi</li>
            <li>Room service</li>
            <li>Doctor on call</li>
            <li>Laundry service (chargeable)</li>
            <li>Iron and ironing boards (on request)</li>
            
            </motion.ul>
        </Modal.Body>
      </Modal>

      </div>

      <DalhousieNewEnquiryPopupBook />
    </>
  );
}
