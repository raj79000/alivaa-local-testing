"use client";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HeaderHoften from "../components/HeaderHoften";

import BookingFormInner from "../components/BookingFormInner";


import NavbarOften from "app/components/NavbarOften";
import { useState } from "react";
import NavbarAliva from "app/components/NavbarAliva";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function GurugramHotelOfferPage (){
  const [isVisible, setIsVisible] = useState(false);
    

    const openModal = () => {

        if (modalInstance) modalInstance.show();

    };



    const validateData_ee = ()=>{



    }

    return (

        <>
<section className='home-hdr-hght'>
       <NavbarAliva></NavbarAliva>
      <HeaderHoften />
</section>

<section className="banner-section">

<img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/images/hofton-gallery/hoften-offer-b.jpeg" />

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
<div className="container position-relative mb-0">
  <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
    <button className="btn desktop-button corporatebannerbutton" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
      <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
     
    </button>
  </div>
</div>
</div>) } */}

</section>

<section className="booking-form-section">

             <BookNowForm />
       
</section>


    

            

      <motion.section className="search-content contact-us new-rj-block text-center trnsf "

                initial={{ opacity: 0.6, x: -50 }}

                whileInView={{ opacity: 1,y: -50, x: 0 }}

                transition={{ duration: 0.6, delay: 0.6 }}>

      

      <motion.div className="container"

          initial={{ opacity: 0.6, y: -250,x: -50 }}

                whileInView={{ opacity: 1,y: 0, x: 0 }}

                transition={{ duration: 0.6, delay: 0.6  }}>

          <div className="center ">

          <h2 className="global-heading-gurgaon inner-hd">Gurugram Hotel Offers & Deals</h2>

            <p style={{color: "black",textAlign: "justify",}}>The Hoften invites you to a space where contemporary comfort meets understated elegance. Our thoughtfully crafted experiences are designed to elevate every stay, making your visit to Gurgaon effortlessly memorable. Whether you're here for business or leisure, let The Hoften be your urban retreat in the heart of the city—where convenience, style, and warm hospitality come together seamlessly.</p>

          </div>

      </motion.div>

  

      <section className="about-us accomodation-main gurugram-hotel-offer-main">

    <article className="container text-center">

      

      <div className="col-xs-12 no-pad mb-5 res-no-margin">

        <motion.div className="room-block d-none"

        initial={{ opacity: 0, x: -500,y: 0 }}

        whileInView={{ opacity: 1, x: -220 ,y: 20}}

        transition={{ duration: 1 }}>

          

          <img src="images/hofton-gallery/hoften-offer-3.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "50%", height:"110%",marginLeft:"100px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info right-block btm_n89 wow fadeInDown animated" data-wow-duration="4s" style={{width:"40%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, x: 200,y: -250 }}

          whileInView={{ opacity: 1, x: 200,y: -250 }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-gurugram-1">

          Introductory offer

            </h3>

            <div className="text-two">

             <ul className="service-listing2">

                 <li>

                 25% off on Best Available Rate 

                 </li>

                 <li>

                 ⁠Additional 10% discount for Logged-in users  and mobile users

                 </li>

                 <li>

                 ⁠Booking Period : Nov to Mar 2025</li>

                 <li>

                  ⁠Stay Period : Nov to Mar 2025

                 </li>

                

             </ul>

             <a href="https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram" className="btn btn-primary-hoften voffset-1 introductory_offer">Book Now</a>

             </div>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>

  

    </article>

<div className="modal fade" id="banquet-enquiry" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

  <div className="modal-dialog" role="document">

    <div className="modal-content">

      <div className="modal-header" style={{textAlign: "left"}}>

        {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> */}

        



        <h6 className="modal-title" id="myModalLabel" >Enquire Now</h6>

        <button style={{textAlign: "right"}} type="button" className="close"

          data-bs-dismiss="modal" aria-label="Close">

            <span aria-hidden="true">×</span></button>

      </div>

      <div className="modal-body">

        <form>

            <div className="form-group">

            <input type="text" className="form-control emptycls" id="enameId" placeholder="Enter Name"/>

			<span id="fname_e_error" style={{fontSize: "13px", color: "red", display: "none", marginLeft: "7px"}}>This is required</span>

          </div>

          <div className="form-group">

            <input type="email" className="form-control emptycls" id="eemailId" placeholder="Enter email"/>

			<span id="email_e_error" style={{fontSize: "13px", color: "red", display: "none", marginLeft: "7px"}}>This is required</span>

          </div>

          <div className="form-group">

            <input type="phone" className="form-control emptycls" id="ephoneId" placeholder="Enter Mobile No."/>

			<span id="phone_e_error" style={{fontSize: "13px", color: "red", display: "none", marginLeft: "7px"}}>This is required</span>

          </div>

          <div className="form-group">

            <textarea type="text" rows="3" id="emessageId" className="form-control emptycls" placeholder="Message"></textarea>

			<span id="message_e_error" style={{fontSize: "13px", color: "red", display: "none", marginLeft: "7px"}}>This is required</span>

          </div>

          <div className="text-center">

              <button type="button" className="btn btn-primary" id="submitbtn_e" onClick={validateData_ee}>Submit</button>

          </div>

        </form>

        </div>

      </div>

      </div>

    </div>

  </section>

    </motion.section>
<br></br>
<br></br>
      

  

        </>

    )

}