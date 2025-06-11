'use client';

import React, { useEffect} from 'react';

// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import Link from "next/link";

import { motion } from "framer-motion";



// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

////import 'bootstrap/dist/css/bootstrap.min.css';



const GurgaonHotelFacilities = () => {

  // useEffect(() => {

  //   if (typeof window !== 'undefined') {

  //       import('bootstrap/dist/js/bootstrap.bundle.min.js');

  //       }

  //   }, []);

  



  return (

    <>

    <div className="row mb-5">

    <div className="container">     

    <motion.section className="our-offers about-us gurgaon-fac" 

    initial={{ opacity: 0, y: -0 }}

    animate={{ opacity: 1, y: -0}}

    transition={{ duration: 0.6, delay: 0.6 }}

    viewport={{ once: true }}>

      
<div className="container text-center">
        <h1 className="global-heading-gurgaon inner-hd">
        Premium Facilities for a Superior Stay
        </h1>
        <p className="content-boxx">
        Alivaa Hotel is designed to make your stay comfortable, convenient, and complete. From wellness to daily conveniences, here’s what you can expect:
         
        </p>
      </div>


        <div className="container gurgaon-fac sectiontop">

        

        

        <motion.div className="tab-content"

        

    initial={{ opacity: 0, y: -110 }}

    animate={{ opacity: 1, y: 0}}

    transition={{ duration: 0.6, delay: 0.6 }}

    viewport={{ once: true }}>

            <div className="tab-pane fade show active">

                <div className="special-offers about-us new-rj-block text-center">

                    <div className="container">

                        


      
      <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool swimming-pool2" id="swimming-pool">

      <motion.div className="room-block"

initial={{ opacity: 0, y: 80 ,x: 190}}

whileInView={{ opacity: 1, x: 258 }}

transition={{ duration: 0.9, delay: 0.9 }}>


          

          {/* <img src="/images/facilities/facility-1.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}
          <video autoPlay loop muted playsInline className="custom-img-responsive faci-vid1 wow fadeInUp animated">
              <source src="/images/facilities/Gym2reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          <motion.div className="room-main-info facilitycardcontent Gymnas right-block wow fadeInDown animated swimming-pool-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

initial={{ opacity: 0, y: -250 ,x: -1150}}

whileInView={{ opacity: 1, x: -637 }}

transition={{ duration: 0.9, delay: 0.9 }}>
          <h3 className="global-heading-1" style={{marginLeft:"0px",marginTop:"35px"}}>

          Gymnasium

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"0px"}}>

            Stay consistent with your fitness routine at our on-site gym.
Equipped with modern cardio and strength-training gear.
Open daily for all in-house guests.


</p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>


      

      <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool swimming-pool2" id="swimming-pool">

        <motion.div className="room-block"

          initial={{ opacity: 0, y: 80 ,x: 350}}

          whileInView={{ opacity: 1, x: -240 }}

          transition={{ duration: 0.9, delay: 0.9 }}>

          

          {/* <img src="/images/facilities/facility-1.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}
          <video autoPlay loop muted playsInline className="custom-img-responsive faci-vid1 wow fadeInUp animated">
              <source src="/images/facilities/PoolReel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          <motion.div className="room-main-info facilitycardcontent swim1 right-block wow fadeInDown animated swimming-pool-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -250 ,x: -750}}

          whileInView={{ opacity: 1, x: 200 }}

          transition={{ duration: 0.9, delay: 0.9 }}>

          <h3 className="global-heading-1" style={{marginLeft:"0px",marginTop:"35px"}}>

          Swimming Pool

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"0px"}}>

            Take a break and unwind in our outdoor pool.
A peaceful spot to relax or get in a few laps.
Great for refreshing your day after work or travel.

            </p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>

      <div className="col-xs-12 no-pad voffset-2 res-no-margin electric-vehicle">

      <motion.div className="room-block" style={{marginBottom:"6rem"}}

initial={{ opacity: 0, y: 80 ,x: 190}}

whileInView={{ opacity: 1, x: 258 }}

transition={{ duration: 0.9, delay: 0.9 }}>


{/* <video autoPlay loop muted playsInline className="custom-img-responsive elc_img img-thumbnail faci-vid1 wow fadeInUp animated" >
              <source src="/images/facilities/Cafereel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

          <img src="/images/facilities/ev1.jpg" alt="Accommodation in Gurgaon" className="faci-vid1 custom-img-responsive   wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info room-main-infoVehicle facilitycardcontent electera right-block wow fadeInDown animated electric-vehicle-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}
   initial={{ opacity: 0, y: -250 ,x: -1150}}

   whileInView={{ opacity: 1, x: -637 }}

   transition={{ duration: 0.9, delay: 0.9 }}>

          <h3 className="global-heading-1" style={{marginLeft:"0px",marginTop:"5px"}}>

          Electric Vehicle Charging Station

            </h3>

            <p className="text-two text-justify " style={{fontSize:"14px",marginLeft:"0px"}}>

            We support eco-friendly travel with dedicated EV charging.
Easily accessible and located within the property.
Recharge your vehicle while you relax at the hotel.


            </p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>

                    </div>

                </div>

            </div>



            <div className="tab-pane fade" id="hoften-hotels" role="tabpanel">

                <div className="special-offers about-us new-rj-block text-center mt-5">

                    <div className="row align-items-start m-0 mb-5">

                                <motion.div className="col-lg-5 p-0" 

                                    initial={{ opacity: 0, x: 100 }}

                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 0.9, delay: 0.9 }}>

                                    <div className="alivaa-album">

                                        <img

                                        src="/images/hoften-offer-3.jpg"

                                        alt="Executive Package"

                                        layout="responsive"

                                        className="img-fluid"

                                        />

                                    </div>

                                </motion.div>

    

                                <motion.div className="col-lg-6 offset-lg-1 p-0 text-start"

                                    initial={{ opacity: 0, x: -100 }}

                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 0.9, delay: 0.9 }}>

                                    <h2 className="global-heading">Introductory offer</h2>

                                    <ul>

                                        <li>25% off on Best Available Rate</li>

                                        <li>⁠Additional 10% discount for Logged-in users and mobile users</li>

                                        <li>⁠Booking Period : Nov to Mar 2025</li>

                                        <li>⁠Stay Period : Nov to Mar 2025</li>

                                    </ul>

                                    {/* Book Now Button */}

                                    <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                        Book Now

                                    </Link>

                                </motion.div>

                            </div>

                    </div>

                </div>

            </motion.div>

        </div>

    </motion.section>

                </div>

            </div>
            <br></br>
            <br></br>
            </>
  );

};



export default GurgaonHotelFacilities;