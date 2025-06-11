'use client';

import { useEffect, useRef } from 'react';

import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import { motion } from "framer-motion";

//import "../../app/styles/header.css";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

//import 'bootstrap/dist/css/bootstrap.min.css';





const OurOffers = () => {



  const allSwiperRef = useRef(null);

  const alivaaSwiperRef = useRef(null);
  const alivaamcloedgankSwiperRef = useRef(null);

  const hoftenSwiperRef = useRef(null);
//   const lansdowneSwiperRef = useRef(null);
  

  



  useEffect(() => {

    // if (typeof window !== 'undefined') {

    //     import('bootstrap/dist/js/bootstrap.bundle.min.js');

    if (allSwiperRef.current) {

      new Swiper(allSwiperRef.current, {

        loop: true,

        slidesPerView: 3,

        spaceBetween: 5,

        autoplay: {

            delay: 3000,

            disableOnInteraction: false,

          },

          breakpoints: {

            0: { slidesPerView: 1, spaceBetween: 0 },

            300: { slidesPerView: 1, spaceBetween: 0 },

            450: { slidesPerView: 1, spaceBetween: 0 },

            600: { slidesPerView: 1, spaceBetween: 0 },

            800: { slidesPerView: 2, spaceBetween: 0 },

            1000: { slidesPerView: 3, spaceBetween: 0 },

            1200: { slidesPerView: 3, spaceBetween: 0 },

          },

       

        pagination: false,

        modules: [Navigation, Pagination, Autoplay],

      });

    }



    if (alivaaSwiperRef.current) {

      new Swiper(alivaaSwiperRef.current, {

        loop: true,

        slidesPerView: 2,

        spaceBetween: 10,

        autoplay: {

            delay: 3000,

            disableOnInteraction: false,

          },

          breakpoints: {

            0: { slidesPerView: 1, spaceBetween: 0 },

            300: { slidesPerView: 1, spaceBetween: 0 },

            450: { slidesPerView: 1, spaceBetween: 0 },

            600: { slidesPerView: 1, spaceBetween: 0 },

            800: { slidesPerView: 2, spaceBetween: 0 },

            1000: { slidesPerView: 2, spaceBetween: 0 },

            1200: { slidesPerView: 3, spaceBetween: 0 },

          },

         // pagination: { el: ".swiper-pagination", clickable: true },

         pagination: false,

        modules: [Pagination, Autoplay],

      });

    }
    if (alivaamcloedgankSwiperRef.current) {

      new Swiper(alivaamcloedgankSwiperRef.current, {

        loop: true,

        slidesPerView: 2,

        spaceBetween: 10,

        autoplay: {

            delay: 3000,

            disableOnInteraction: false,

          },

          breakpoints: {

            0: { slidesPerView: 1, spaceBetween: 0 },

            300: { slidesPerView: 1, spaceBetween: 0 },

            450: { slidesPerView: 1, spaceBetween: 0 },

            600: { slidesPerView: 1, spaceBetween: 0 },

            800: { slidesPerView: 2, spaceBetween: 0 },

            1000: { slidesPerView: 2, spaceBetween: 0 },

            1200: { slidesPerView: 3, spaceBetween: 0 },

          },

         // pagination: { el: ".swiper-pagination", clickable: true },

         pagination: false,

        modules: [Pagination, Autoplay],

      });

    }



    if (hoftenSwiperRef.current) {

      new Swiper(hoftenSwiperRef.current, {

        loop: true,

        slidesPerView: 3,

        spaceBetween: 10,

        autoplay: {

            delay: 3000,

            disableOnInteraction: false,

          },breakpoints: {

            0: { slidesPerView: 1, spaceBetween: 0 },

            300: { slidesPerView: 1, spaceBetween: 0 },

            450: { slidesPerView: 1, spaceBetween: 0 },

            600: { slidesPerView: 1, spaceBetween: 0 },

            800: { slidesPerView: 2, spaceBetween: 0 },

            1000: { slidesPerView: 2, spaceBetween: 0 },

            1200: { slidesPerView: 3, spaceBetween: 0 },
            

          },

         // pagination: { el: ".swiper-pagination", clickable: true },

         pagination: false,

        modules: [Pagination, Autoplay],

      });

    }


      


// }

  }, []);

  



  return (

    <motion.section className="our-offers about-us home-our-offers" 

    initial={{ opacity: 0, x: -50 }}

    whileInView={{ opacity: 1, x: 0 }}

    transition={{ duration: 0.6,  delay:0.12 }}>

        <div className="container">

        <div className="new-rj-block mt-5">

          <h2 className="about-us text-center mt-5">Our Offers</h2>

        </div>

        <ul className="nav nav-tabs" id="myTab" role="tablist">

            <li className="nav-item" role="presentation">

            <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab">All</button>

            </li>

            <li className="nav-item" role="presentation">

            <button className="nav-link" id="alivaa-tab" data-bs-toggle="tab" data-bs-target="#alivaa" type="button" role="tab">Alivaa, Gurugram</button>

            </li>
            <li className="nav-item" role="presentation">

            <button className="nav-link" id="alivaa-mcleodganj-tab" data-bs-toggle="tab" data-bs-target="#alivaa-mcleodganj" type="button" role="tab">Alivaa, Mcleodganj</button>

            </li>

            <li className="nav-item" role="presentation">

            <button className="nav-link" id="hoften-tab" data-bs-toggle="tab" data-bs-target="#hoften" type="button" role="tab">Hoften, Gurugram</button>

            </li>

            <li className="nav-item" role="presentation">

            <button className="nav-link" id="lansdowne-tab" data-bs-toggle="tab" data-bs-target="#lansdowne" type="button" role="tab">Viceroy, Lansdowne</button>

            </li>

        </ul>

        

        <div className="tab-content mt-3">

            <div className="tab-pane fade show active" id="all" role="tabpanel">

                <div className="swiper offers-slider" ref={allSwiperRef}>

                    <div className="swiper-wrapper abc">

                        {/* <div className="swiper-slide">
                        
                            <img src="/images/our-offers/alivaa-new-offer-imgg-1.webp" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Introductory Offer</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    25% off on Best Available Rate 

                                    </p>

                                </div>



                                <a href="/gurugram-hotel-offers" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>

                            </div>

                        </div> */}

                        {/* <div className="swiper-slide">

                            <Image height={300} width={300} src="/images/our-offers/alivaa-new-offer-imgg-2.webp"  className="img-fluid w-100" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3">Executive Package </h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Up to 50% Off on Best Available Rate

                                    </p>

                                </div>

                                <Link href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</Link>

                            </div>

                        </div> */}

                        <div className="swiper-slide">

                           
                            <Image height={300} width={300} src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Day Rooms</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Starting at INR 2024*

                                    </p>

                                </div>



                                <Link href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>

                            </div>

                        </div>

                        {/* <div className="swiper-slide">

                             <Image height={300} width={300} src="/images/our-offers/offer-img-4.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Relax with a Staycation</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                        Free breakfast, Flexible check-in &amp; check-out

                                    </p>

                                </div>

                                <Link href="/gurgaon-hotel-offers#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>

                            </div>

                        </div> */}

                        </div>

                    <div className="swiper-pagination"></div>

                </div>

            </div>



            <div className="tab-pane fade" id="alivaa" role="tabpanel">

                <div className="swiper offers-slider" ref={alivaaSwiperRef}>

                    <div className="swiper-wrapper abc">

                        

                        {/* <div className="swiper-slide">

                             <Image height={300} width={300} src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3">Executive Package </h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Up to 50% Off on Best Available Rate

                                    </p>

                                </div>

                                <Link href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</Link>

                            </div>

                        </div> */}

                        <div className="swiper-slide">

                           
                            <Image height={300} width={300} src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Day Rooms</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Starting at INR 2024*

                                    </p>

                                </div>



                                <Link href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>

                            </div>

                        </div>

                        {/* <div className="swiper-slide">

                             <Image height={300} width={300} src="/images/our-offers/offer-img-4.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Relax with a Staycation</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                        Free breakfast, Flexible check-in &amp; check-out

                                    </p>

                                </div>

                                <Link href="/gurgaon-hotel-offers#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>

                            </div>

                        </div> */}

                        </div>

                    <div className="swiper-pagination"></div>

                </div>

            </div>
            <div className="tab-pane fade text-center" id="alivaa-mcleodganj" role="tabpanel" >
                         <Image height={300} width={300} src="/images/comingsoon.png" className="search-iconimage" alt="Search Icon" />    
                {/* <div className="swiper offers-slider" ref={alivaamcloedgankSwiperRef}>

                    <div className="swiper-wrapper abc">

                        

                        <div className="swiper-slide">

                            <img src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3">Executive Package </h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Up to 50% Off on Best Available Rate

                                    </p>

                                </div>

                                <a href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</a>

                            </div>

                        </div>

                        <div className="swiper-slide">

                           
                            <img src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Day Rooms</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Starting at INR 2024*

                                    </p>

                                </div>



                                <a href="/gurugram-hotel-offers" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>

                            </div>

                        </div>

                        <div className="swiper-slide">

                            <img src="/images/our-offers/offer-img-4.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name mt-3"> Relax with a Staycation</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                        Free breakfast, Flexible check-in &amp; check-out

                                    </p>

                                </div>

                                <a href="/gurgaon-hotel-offers#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>

                            </div>

                        </div>

                        </div>

                    <div className="swiper-pagination"></div>

                </div> */}

            </div>



            <div className="tab-pane fade" id="hoften" role="tabpanel" style={{textAlign:"center"}}>
                     <Image height={300} width={300} src="/images/comingsoon.png" className="search-iconimage" alt="Search Icon" />
                <div className="swiper offers-slider d-none" ref={hoftenSwiperRef}>

                    <div className="swiper-wrapper">

                        {/* <div className="swiper-slide">

                            <img src="/images/our-offers/alivaa-new-offer-imgg-1.webp" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name"> Introductory Offer</h4>

                                    <p className="offer-description" style={{fontSize: "14px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    25% off on Best Available Rate 

                                    </p>

                                </div>



                                <a href="/gurugram-hotel-offers" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>

                            </div>

                        </div> */}

                        {/* <div className="swiper-slide">

                            <img src="/images/our-offers/offer-img-3.jpg" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name">Executive Package </h4>

                                    <p className="offer-description" style={{fontSize: "12px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    Up to 50% Off on Best Available Rate

                                    </p>

                                </div>

                                <a href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</a>

                            </div>

                        </div> */}

                        {/* <div className="swiper-slide">

                            <img src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name"> Relax with a Staycation</h4>

                                    <p className="offer-description" style={{fontSize: "12px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                        Free breakfast, Flexible check-in &amp; check-out

                                    </p>

                                </div>

                                <a href="/gurgaon-hotel-offers#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>

                            </div>

                        </div> */}

                        {/* <div className="swiper-slide">

                            <img src="/images/our-offers/alivaa-new-offer-imgg-1.webp" className="img-fluid" alt="Alivaa Images" />

                            <div className="text-center">

                                <div className="offers-text-home">

                                    <h4 className="offer-name"> Introductory Offer</h4>

                                    <p className="offer-description" style={{fontSize: "12px", color: "#3b3b3b", fontFamily: 'VERDANA'}}>

                                    25% off on Best Available Rate 

                                    </p>

                                </div>



                                <a href="/gurugram-hotel-offers" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</a>

                            </div>

                        </div> */}

                    </div>

                    <div className="swiper-pagination"></div>

                </div>

            </div>

            <div className="tab-pane fade" id="lansdowne" role="tabpanel" style={{textAlign:"center"}}>
                     <Image height={300} width={300} src="/images/comingsoon.png" className="search-iconimage" alt="Search Icon" />
                {/* <div className="swiper offers-slider d-none" ref={lansdowneSwiperRef}>
                    <div className="swiper-pagination"></div>

                </div> */}

            </div>

        </div>

        </div>

    </motion.section>

  );

};



export default OurOffers;