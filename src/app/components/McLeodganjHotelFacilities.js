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



const McLeodganjHotelFacilities = () => {

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
      Alivaa Hotel presents a well-selected assortment of friendly amenities along with our supportive services to develop an exceptional guest experience. Modern amenities and wellness facilities have been thoughtfully integrated throughout the establishment to provide you with a restful and satisfying stay. Each amenity at our hotel is designed specifically to deliver unmatched comfort and convenience for all guests spending time in Dharamshala.
         
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

                        


      
      <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool" id="swimming-pool">

      <motion.div className="room-block"

initial={{ opacity: 0, y: 80 ,x: 190}}

whileInView={{ opacity: 1, x: 258 }}

transition={{ duration: 0.9, delay: 0.9 }}>


          

          {/* <img src="/images/facilities/facility-1.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}
          <img className="custom-img-responsive w-auto faci-vid wow fadeInUp animated" src="/images/mcleodganj/facilities/swiming.png"/>

          {/* <video autoPlay loop muted playsInline className="custom-img-responsive faci-vid wow fadeInUp animated">
              <source src="/images/facilities/Gym2reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

          <motion.div className="room-main-info Gymnas right-block wow fadeInDown animated swimming-pool-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

initial={{ opacity: 0, y: -250 ,x: -1150}}

whileInView={{ opacity: 1, x: -637 }}

transition={{ duration: 0.9, delay: 0.9 }}>
          <h3 className="global-heading-1" style={{marginLeft:"0px",marginTop:"35px"}}>

          Swimming Pool (Rooftop)


            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"0px"}}>

            An outdoor swimming pool lies on our rooftop structure where visitors can enjoy mountain views with relaxation. Calm down at our pool area setting with lounge chairs for shaded seating, making you relax in elegance throughout morning or sunset dip sessions. With panoramic views of the Dhauladhar range and fresh mountain air, it’s the perfect place to rejuvenate after a day of sightseeing. Guests experience an atmosphere of peace and tranquillity deep in nature through its soothing swimming pool facilities in McLeod Ganj.


</p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>


      

      <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool" id="steam">

        <motion.div className="room-block"

          initial={{ opacity: 0, y: 80 ,x: 350}}

          whileInView={{ opacity: 1, x: -240 }}

          transition={{ duration: 0.9, delay: 0.9 }}>

          

          {/* <img src="/images/facilities/facility-1.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/> */}
          {/* <video autoPlay loop muted playsInline className="custom-img-responsive faci-vid wow fadeInUp animated">
              <source src="/images/facilities/PoolReel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <img className="custom-img-responsive img-thumbnail w-auto wow fadeInUp animated" src="/images/mcleodganj/facilities/steam.png"/>

          <motion.div className="room-main-info swim1 right-block wow fadeInDown animated swimming-pool-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -250 ,x: -750}}

          whileInView={{ opacity: 1, x: 200 }}

          transition={{ duration: 0.9, delay: 0.9 }}>

          <h3 className="global-heading-1" style={{marginLeft:"0px",marginTop:"35px"}}>

          Steam & Sauna

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"0px"}}>
            Hotel guests can utilise steam facilities with sauna areas that are built into their room to preserve freshness and relaxation throughout their visit. Alivaa Hotel provides exclusive wellness amenities like Spa in McLeodganj, Dharamshala reserved for guests to achieve detoxification along with stress relief and body-mind renewal. Hot steam and sauna facilities provide relaxation and circulation improvement as well as muscle tension relief, which promotes your general health, especially when you've completed tiring activities such as travel or hiking in the mountains. These facilities provide a lavish addition which enhances your luxurious and personal hotel stay at Alivaa Hotel.


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



export default McLeodganjHotelFacilities;