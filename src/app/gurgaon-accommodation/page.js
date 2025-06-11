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
import NavbarAliva from "app/components/NavbarAliva";
import HeaderAlivaa from "../components/HeaderAlivaa";
import BookingFormInner from "../components/BookingFormInner";

import { useState } from "react";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function GurgaonAccommodationPage() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
  <section className='home-hdr-hght'>     
     <NavbarAliva/>
     <HeaderAlivaa />
  </section>   

 <section className="banner-section">
 <video 
    playsInline 
    autoPlay 
    loop 
    muted 
    className="banner_img_room myvideo pt-0 web-video desk-video"> 
    <source src="/images/rooms/rooms.mp4" type="video/mp4" />
  </video>

  <video 
    playsInline 
    autoPlay 
    loop 
    muted 
    className="banner_img_room myvideo pt-0 web-video mob-video"> 
    <source src="/mobile-video/rooms.mp4" type="video/mp4" />
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
     </div>) }
      */}
 </section>

    <section className="booking-form-section">
       <FormProvider>
                   <BookNowForm />
                 </FormProvider>

 </section>
      <div className="container text-center sectiontop">
        <h1 className="global-heading-gurgaon mb-2 inner-hd">
          Alivaa Hotel, Sohna Road City Center, Gurgaon
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
                <h2 className="global-heading text-2xl font-bold text-gray-800">Suite</h2>
                <p className="mb-2 text-gray-600" style={{textAlign:"justify"}}>
                Alivaa offers a selection of thoughtfully designed rooms and suites tailored to the needs of modern travelers. All rooms feature clean interiors, comfortable bedding, smart TVs, Wi-Fi, and workspaces. Suites include additional space and a functional kitchenette, ideal for longer stays. Whether you’re in town for a few nights or a few weeks, each room offers a peaceful, practical retreat.
                </p>
                <b className="fw-bold">550 sq ft/View Varies</b>

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
                  href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                  className="rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                  style={{backgroundColor:"#002d62"}}
                >
                  Book Now
                </a>
              </div>

              {/* Right Column */}
              <div className="col-md-7 ordermt2">
              <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/FamilyRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
          <Modal.Title>Suite Features</Modal.Title>
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
            <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/StudioRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

            {/* Right Column (Text) */}
            <div className="col-md-5 p-5 flex-column justify-content-center">
              <h2 className="global-heading">Studio Room</h2>
              <p className="mb-2" style={{textAlign:"justify"}}>
              Ideal for extended stays, the Studio Room includes a private balcony or sit-out area, tasteful décor, and a fully equipped kitchenette with a microwave, induction cooktop, chimney, dishwasher, and quality cutlery. Perfect for expats, medical travelers, and interns, it offers a blend of homelike convenience with hotel-level comfort.
              </p>
              <b className="fw-bold">325 sq ft./View Varies</b>
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
          <Modal.Title>Studio Room Features</Modal.Title>
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
                    Fully-equipped kitchenette (Dishwasher, Induction, Microwave)
                  </li>
                 
                  <li>
                    Premium, high-speed Internet access
                  </li>
                  <li>
                   42-inch smart TV
                  </li>
                  <li>
                    Air Conditioner
                  </li>
                  <li>
                    In-room laptop-sized electronic safe
                  </li>
                  <li>
                   Deluxe bath amenities and a hair dryer (on request)
                  </li>
                  <li>
                    Coffee maker
                  </li>
                  <li>
                    Iron and ironing boards (on request)
                  </li>
                  <li>
                   Generous workstation with ergonomic chair
                  </li>
                  <li>
                    Multimedia connections
                  </li>
                  <li>
                    Mini bar
                  </li>
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
            href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
            className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
            style={{backgroundColor:"#002d62"}}
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
              <h2 className="global-heading text-2xl font-bold text-gray-800">Deluxe Room</h2>
              <p className="mb-2 text-gray-600" style={{textAlign:"justify"}}>
              The Deluxe Room features a king-sized or twin bed, private balcony or sit-out area, and all the essential modern amenities. Designed for comfort and simplicity, it’s a great choice for both business and leisure travelers seeking a restful stay.
              </p>
<b className="fw-bold">325 sq ft./View Varies</b>
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
          <Modal.Title>Deluxe Room Features</Modal.Title>
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
                    Premium, high-speed Internet access 
                  </li>
                  <li>
                    42-inch smart TV
                  </li>
                  <li>
                    Air Conditioner 
                  </li>
                  <li>
                    In-room laptop-sized electronic safe
                  </li>
                  <li>
                    Deluxe bath amenities and a hair dryer (on request)
                  </li>
                  <li>
                    Coffee maker 
                  </li>
                  <li>
                    Iron and ironing boards (on request)
                  </li>
                  <li>
                    Generous workstation with ergonomic chair 
                  </li>
                  <li>
                    Multimedia connections
                  </li>
                  <li>
                    Mini bar
                  </li>
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
                href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
                style={{backgroundColor:"#002d62"}}
              >
                Book Now
              </a>
            </div>

            {/* Right Column */}
            <div className="col-md-7 ordermt2">
            <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/DeluxeRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
        </div>
      </div>
    </section>

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
            <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/rooms/ExecutiveRoom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

            {/* Right Column (Text) */}
            <div className="col-md-5 p-5 flex-column justify-content-center">
              <h2 className="global-heading">Executive Room</h2>
              <p className="mb-2" style={{textAlign:"justify"}}>
              A step up in both space and design, the Executive Room offers a plush king-sized or twin bed, elegant wall accents and a private balcony or sit-out area. With added comfort and thoughtful amenities, it’s well-suited for guests looking for a little more during their stay.
              </p>
              <b className="fw-bold">325 sq ft./View Varies</b>
  
                {/* Read More Toggle with FontAwesome Icon */}
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


          {/* Additional Features List with Animation */}
      <Modal className="featur_modal" show={modalShow3} onHide={() => setModalShow3(false)}>
        <Modal.Header closeButton className="fs-4">
          <Modal.Title>Executive Room Features</Modal.Title>
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

      
          {/* Book Now Button */}
          <a
            href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
            className=" rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
            style={{backgroundColor:"#002d62"}}
          >
            Book Now
          </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </>
  );
}
