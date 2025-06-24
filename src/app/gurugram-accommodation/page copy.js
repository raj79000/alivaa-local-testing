"use client";

import { motion } from "framer-motion";

//import BookingForm from "app/components/BookingForm";

import "../../app/styles/inner.css";

import NavbarOften from "app/components/NavbarOften";

import HeaderHoften from "../components/HeaderHoften";

import GurugramAccommodation from "../components/GurugramAccommodation";

import BookingFormInner from "../components/BookingFormInner";



export default function GurugramAccommodationPage (){

    return (

        <>

<section className='home-hdr-hght'>
       <NavbarOften/>
      <HeaderHoften />
      </section>

        <section className="banner-section m-1">

        <img src="/images/rooms/hoften-room-b.jpg" alt="Hotels in Gurgaon" 

        className="banner-img pt-0" />

        </section>

        

      <motion.div className="content-section-hoften" 

                initial={{ opacity: 0, y: -350 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 2.6, delay: 0.1 }}

                style={{position: "absolute",

                zIndex: "9",

                left: "0",

                right: "0",

                margin: "auto",

                color: "#fff",

                top: "50%"}}>

        <div>

          <div className="col-lg-12 text-center wow fadeInDown animated animated">

            <h4>Hotel where you stay OFTEN</h4>

            <a href="https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram" className="btn btn-primary desktop-button"

             style={{borderColor:"#245704",background: "#245704",fontFamily: 'VERDANA',fontWeight: "400",

                textAlign: "center",fontSize: "14px",lineHeight: "1.42857143"

             }}>Book Now</a>

            

          </div>

        </div>

      </motion.div>

      
      <motion.section className="booking-form-section gurugram-offer" id="booking-engine" 

                initial={{ opacity: 0.6, x: 0, y: -450 }}

                animate={{ opacity: 1, x: 0 ,y: -100}}>

        <BookingFormInner />

        </motion.section>

      <GurugramAccommodation/>

        </>

    )

}