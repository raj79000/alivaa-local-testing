"use client";

import React, { useEffect } from "react";

// import Swiper from 'swiper';

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import Link from "next/link";

import { motion } from "framer-motion";

// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

////import 'bootstrap/dist/css/bootstrap.min.css';

const LansdowneHotelFacilities = () => {
  return (
    <>
      <div className="row mb-5 lansdownee-hotel-facilities-mainn">
        <div className="container">
          <motion.section
            className="our-offers about-us gurgaon-fac"
            initial={{ opacity: 0, y: -0 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container text-center">
              <h1 className="global-heading-gurgaon inner-hd">Facilities</h1>
              <p className="content-boxx">
                Our hotel features various recreational opportunities, including
                both indoor and outdoor experiences. Our guests can enjoy
                swimming pool relaxation followed by dining at our multi-cuisine
                restaurant and lounge bar leisure. We are one of the best hotels
                in Lansdowne with swimming pool and other facilities. We offer
                spaces for recreation and relaxation amidst the beautiful
                surroundings.
              </p>
            </div>

            <div className="container gurgaon-fac sectiontop">
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, y: -110 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="tab-pane fade show active">
                  <div className="special-offers about-us new-rj-block text-center">
                    <div className="container">
                      <div
                        className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool"
                        id="swimming-pool"
                      >
                        <motion.div
                          className="room-block"
                          initial={{ opacity: 0, y: 80, x: 190 }}
                          whileInView={{ opacity: 1, x: 258 }}
                          transition={{ duration: 0.9, delay: 0.9 }}
                        >
                          {/* <img src="/images/facilities/facility-1.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}
                          <img
                            className="custom-img-responsive w-auto faci-vid wow fadeInUp animated"
                            src="/lansdowne-img/f-swimming-pool-image.jpg"
                            alt="Accommodation in Lansdowne"
                          />
                          <motion.div
                            className="room-main-info Gymnas right-block wow fadeInDown animated swimming-pool-para"
                            data-wow-duration="4s"
                            style={{
                              width: "50%",
                              height: "80%",
                              visibility: "visible",
                              WebkitAnimationDuration: "6s",
                              MozAnimationDuration: "6s",
                              animationDuration: "6s",
                            }}
                            initial={{ opacity: 0, y: -250, x: -1150 }}
                            whileInView={{ opacity: 1, x: -730 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                          >
                            <h3
                              className="global-heading-1"
                              style={{ marginLeft: "0px", marginTop: "35px" }}
                            >
                              Swimming Pool
                            </h3>

                            <p
                              className="text-two text-justify"
                              style={{ fontSize: "14px", marginLeft: "0px" }}
                            >
                              Elevate your mountain escape by taking a
                              refreshing dip in our outdoor swimming pool.
                              Whether you're a swimming lover taking laps,
                              soaking up the sun or simply enjoying the breeze,
                              our pool offers a perfect way to relax and
                              recharge and its ambiance is as rejuvenating as
                              the water itself.Ideal for families and couples,
                              it’s a perfect spot to unwind after a tiring day
                              of exploring.
                            </p>

                            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                          </motion.div>
                        </motion.div>
                      </div>

                      

                      <div
                        className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool"
                        id="steam">
                        <motion.div
                          className="room-block"
                          initial={{ opacity: 0, y: 80, x: 350 }}
                          whileInView={{ opacity: 1, x: -240 }}
                          transition={{ duration: 0.9, delay: 0.9 }}
                        >
                          <img
                            className="custom-img-responsive img-thumbnail w-auto wow fadeInUp animated"
                            src="/lansdowne-img/f-indoor-activities.jpg"
                          />

                          <motion.div
                            className="room-main-info swim1 right-block wow fadeInDown animated swimming-pool-para"
                            data-wow-duration="4s"
                            style={{
                              width: "50%",
                              height: "80%",
                              visibility: "visible",
                              WebkitAnimationDuration: "6s",
                              MozAnimationDuration: "6s",
                              animationDuration: "6s",
                            }}
                            initial={{ opacity: 0, y: -250, x: -750 }}
                            whileInView={{ opacity: 1, x: 200 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                          >
                            <h3
                              className="global-heading-1"
                              style={{ marginLeft: "0px", marginTop: "35px" }}
                            >
                              Indoor Activities
                            </h3>

                            <p
                              className="text-two text-justify"
                              style={{ fontSize: "14px", marginLeft: "0px" }}
                            >
                              Enjoy indoor activities with a range of cozy and
                              engaging options at our hotel. Challenge your
                              friends or family to a game of pool/snooker or
                              have a fun match of table tennis in our games
                              zone. We promise comfort and entertainment to all
                              our guests of all ages.
                            </p>

                            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                          </motion.div>
                        </motion.div>
                      </div>
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

export default LansdowneHotelFacilities;
