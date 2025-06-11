

"use client";

//import BookingForm from '../components/BookingForm';

// import "../../app/styles/inner.css";

import "../gurgaon-hotels/gurgaonhotel.css";

import { motion } from "framer-motion";

import { useEffect, useRef, useState } from 'react';

import 'swiper/css';

import 'swiper/css/navigation';


// //import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

import HeaderHoften from '../components/HeaderHoften';

import GurugramHotelExtened from '../components/GurugramHotelExtened';

import Link from 'next/link';

import BookingFormInner from "../components/BookingFormInner";



// dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });



export default function GurgaonHotelFacilitiesPage() {

 

   const [isExpanded, setIsExpanded] = useState(false); 

   const [bgImage, setBgImage] = useState("/images/rooms/deluxe-room-hoften.jpg");

   

  const offersSwiperRef = useRef(null);

  const facilitiesSwiperRef = useRef(null);

  

  const sliderRef = useRef(null);

  useEffect(() => {

    // if (typeof window !== 'undefined') {

    //     import('bootstrap/dist/js/bootstrap.bundle.min.js');

    

    if (offersSwiperRef.current) {

      new Swiper(offersSwiperRef.current, {

        loop: true,

        slidesPerView: 3,

        spaceBetween: 5,

        // responsive: true,

        breakpoints:{

            320: { slidesPerView: 1 }, // 1 slide for small screens

            480: { slidesPerView: 1 }, // 1 slide for mobile

            768: { slidesPerView: 2 }, // 2 slides for tablets

            1024: { slidesPerView: 3 }, // 3 slides for larger screens

          },

        autoplay: {

            delay: 300,

            disableOnInteraction: true,

          },

          

         pagination: false,

        modules: [Navigation,Pagination, Autoplay],

      });

    }

      if(facilitiesSwiperRef.current){

       new Swiper(facilitiesSwiperRef.current, {

         loop: true,

         slidesPerView: 3,

         spaceBetween: 5,

         breakpoints:{

             320: { slidesPerView: 1 }, // 1 slide for small screens

             480: { slidesPerView: 1 }, // 1 slide for mobile

             768: { slidesPerView: 2 }, // 2 slides for tablets

             1024: { slidesPerView: 3 }, // 3 slides for larger screens

           },

         autoplay: {

             delay: 300,

             disableOnInteraction: true,

           },

          pagination: false,

         modules: [Navigation,Pagination, Autoplay],

       });

     }

// }

  }, []);

  const handleMouseEnter = (image) => {

    setBgImage(image);

  };

  const handleMouseLeave = () => {

    setBgImage("/images/rooms/deluxe-room-hoften.jpg"); // Default background

  };

    return (

      <>

      <HeaderHoften/>

      <section style={{width:"100%", height: "700px",overflow: "hidden !important"}} className="banner-section-often m-1">

      <img style={{width:"100%", height: "80%",}} src="/images/hoftenbanner.jpg" alt="Hotels in Gurugram" 

      className="banner-img" />

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

            <a href="https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram" className="btn btn-primary-hoften desktop-button"

             style={{borderColor:"#245704",background: "#245704",fontFamily: 'VERDANA',fontWeight: "400",

                textAlign: "center",fontSize: "14px",lineHeight: "1.42857143"

             }}>Book Now</a>

            

          </div>

        </div>

      </motion.div>

      </section>

      

      <motion.section className="booking-form-section-inner" id="booking-engine" 

                initial={{ opacity: 0.6, y: -450 }}

                animate={{ opacity: 1, x: 0 ,y: -150}}

                transition={{ duration: 0.6, delay: 0.6 }}

                viewport={{ once: true }}>

        <BookingFormInner />

        </motion.section>


        <div className="row">

<div className="container">
            <motion.section className="search-content about-us new-rj-block text-center"

                initial={{ opacity: 0, y: -10 }}

                animate={{ opacity: 1, x: 0 ,y:-140}}

                transition={{ duration: 0.6, delay: 0.6 }}>

                <div className="container">

                  <div className="col-lg-12 text-center">

                      <h5 style={{color:"#245704 !important"}}>Hotel in Gurugram</h5>

                      <p >In an industry that often loses sight of genuine hospitality, Hoften Hotels—short for "Hotel for Often Stays"—is redefining the guest experience. As a chain of hotels designed for business travellers, Hoften Hotels are comfortable, reliable, affordable, and are always glad to welcome you. Our vision focuses on comfort and meeting all the requirements of our guests. Our brand is committed to providing a consistently warm and high-quality experience in prime locations, making Hoften the preferred hotel destination in Gurugram for any traveller who is in search of standard and homely accommodation.

                        </p>

                        {isExpanded && (<GurugramHotelExtened />)}

                         <button

                           className="read-more-btnn text-blue-600 underline ml-2"

                           onClick={() => setIsExpanded(!isExpanded)}

                         >

                           {isExpanded ? "Read less" : "Read more"}

                         </button>

                  </div>

                </div>

            </motion.section>

            

            <motion.div className="col-lg-12" 

            initial={{ opacity: 0, y: -350 }}

            animate={{ opacity: 1, x: 0 ,y: -100}}

            transition={{ duration: 0.6, delay: 0.6 }}>

                <div data-elementor-type="wp-page" data-elementor-id="602" className="hoften-bg-image-section elementor elementor-602 wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                    <section className="elementor-section elementor-top-section elementor-element elementor-element-4fa77851 elementor-section-full_width" data-id="4fa77851" data-element_type="section">

                        <div className="elementor-container elementor-column-gap-no">

                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b134fdb" data-id="b134fdb" data-element_type="column">

                                <div className="elementor-widget-wrap elementor-element-populated">

                                    <div className="elementor-element elementor-element-5e1344a4 elementor-widget elementor-widget-jkit_portfolio_gallery" data-id="5e1344a4" data-element_type="widget" data-widget_type="jkit_portfolio_gallery.default">

                                        <div className="elementor-widget-container">

                                            <div className="jeg-elementor-kit jkit-portfolio-gallery on-hover jeg_module_602_12_63ac23399f8d1">

                                                

                                                    <div className="row-items" style={{

                                                         backgroundImage: `url(${bgImage})`,

                                                         transition: "background-image 0.1s ease-in-out",

                                                       }}>

                                                        <div className="row-item elementor-repeater-item-631e98c wow fadeInDown animated current-item" data-wow-duration="4s" 

                                                        data-tab="portfolio-gallery-tab-0" style={{visibility: "visible", WebkitAnimationDuration: "4s",  

                                                        MozAnimationDuration: "4s",  animationDuration: "4s"}}

                                                        onMouseEnter={() => handleMouseEnter("/images/rooms/deluxe-room-hoften.jpg")}

                                                            onMouseLeave={handleMouseLeave}>

                                                            <div className="row-item-info1">

                                                                <p className="info-subtitle"></p>

                                                                <h3 style={{color:"#245704 !important"}} className="info-title-hoften">Delux Room</h3>

                                                                <Link href="/gurugram-accommodation#view1-info" className="btn btn-primary-hoften view1-info-hoften voffset-2" style={{borderColor: "transparent"}}

                                                                >View Detail</Link>

                                                            </div>

                                                        </div>

                                                        <div className="row-item elementor-repeater-item-472f7c9 wow fadeInUp animated current-item" 

                                                        data-wow-duration="4s" data-tab="portfolio-gallery-tab-1" style={{visibility: "visible", 

                                                        WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}

                                                        onMouseEnter={() => handleMouseEnter("/images/rooms/deluxe-twin-room-hoften.jpg")}

                                                        onMouseLeave={handleMouseLeave}>

                                                            <div className="row-item-info2">

                                                                <p className="info-subtitle"></p>

                                                                <h3 style={{color:"#245704 !important"}} className="info-title-hoften">Deluxe Twin Room</h3>

                                                                <Link href="/gurugram-accommodation#view2-info" className="btn btn-primary-hoften view2-info-hoften voffset-2" style={{borderColor: "transparent"}}

                                                               

                                                             >View Detail</Link>

                                                            </div>

                                                        </div>

                                                        <div className="row-item elementor-repeater-item-4512fd0 wow fadeInDown animated current-item" 

                                                        data-wow-duration="4s" data-tab="portfolio-gallery-tab-2" style={{visibility: "visible", 

                                                        WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}

                                                        onMouseEnter={() => handleMouseEnter("/images/rooms/suit-room-hoften.jpg")}

                                                        onMouseLeave={handleMouseLeave}>

                                                            <div className="row-item-info3">

                                                                <p className="info-subtitle"></p>

                                                                <h3 style={{color:"#245704 !important"}} className="info-title-hoften">Suite Room</h3>

                                                                <Link href="gurugram-accommodation#view3-info" className="btn btn-primary-hoften view3-info-hoften voffset-2" style={{borderColor: "transparent"}}

                                                                

                                                               >View Detail</Link>

                                                            </div>

                                                        </div>

                                                    </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

            </motion.div>

            {/* <HotelTab/> */}

            {/* <section className="rooms-info-block gurugram-hotel-meeting">

            <article className="container">

                <div className="col-lg-12 no-pad">

                <h4 style={{color:"#245704 !important"}} className="global-heading">Meetings &amp; Events</h4>


                </div>

                <div className="col-lg-12 voffset-3 no-pad">

                    <div className="owl-carousel owl-theme facility-slider owl-loaded owl-drag">

                    <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1916px, 0px, 0px)', transition: "0.25s", width: "3450px"}}><div className="owl-item cloned" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image" 
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>

                                <img src="/images/rooms/hoften-conference-room.jpg" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position-after">

                                            <a href="/gurugram-meeting-events" className="icon-box-link-hoften-hoften view1-info">Conference Room</a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div></div><div className="owl-item cloned" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-new-ballroom-image.webp" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <a href="/gurugram-meeting-events" className="icon-box-link-hoften view2-info">Ballroom</a>

                                </div>

                            </div>

                        </div></div><div className="owl-item cloned" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-rooftop.jpg" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <a href="/gurugram-meeting-events" className="icon-box-link-hoften view2-info">Rooftop Venue</a>

                                </div>

                            </div>

                        </div></div><div className="owl-item" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-conference-room.jpg" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position-after">

                                            <a href="/gurugram-meeting-events" className="icon-box-link-hoften view1-info">Conference Room</a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div></div><div className="owl-item" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-new-ballroom-image.webp" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <a href="/gurugram-meeting-events" className="icon-box-link-hoften view2-info">Ballroom</a>

                                </div>

                            </div>

                        </div></div><div className="owl-item active" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-rooftop.jpg" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <a href="/gurugram-meeting-events" className="icon-box-link-hoften view2-info">Rooftop Venue</a>

                                </div>

                            </div>

                        </div></div><div className="owl-item cloned active" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-conference-room.jpg" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position-after">

                                            <a href="/gurugram-meeting-events" className="icon-box-link-hoften view1-info">Conference Room</a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div></div>

                        <div className="owl-item cloned active" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-new-ballroom-image.webp" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body"  >

                                    <a href="/gurugram-meeting-events" className="icon-box-link-hoften view2-info">Ballroom</a>

                                </div>

                            </div>

                        </div></div><div className="owl-item cloned" style={{width: "373.333px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="image"
                                ref={sliderRef}
                                onMouseEnter={() => (sliderRef.current.style.animationPlayState = "paused")}
                                onMouseLeave={() => (sliderRef.current.style.animationPlayState = "running")}>


                                <img src="images/rooms/hoften-rooftop.jpg" height="514" width="373" alt="Hotels in Sohna Road" className="img-responsive" style={{width: "100%", height: "350px", objectFit: "cover"}}/>

                                <div className="overlay"></div>

                                <div className="icon-box icon-box-body" >

                                    <a href="/gurugram-meeting-events" className="icon-box-link-hoften view2-info">Rooftop Venue</a>

                                </div>

                            </div>

                        </div></div>

                        </div></div>


                        </div>

                </div>

            </article>

        </section> */}

    <motion.section className="rooms-info-block-test" 

         initial={{ opacity: 0, x: -50 }}

         whileInView={{ opacity: 1, x: 0 }}

         transition={{ duration: 0.6,  delay:0.6 }}>

            <div className="container">

                {/* <div className="col-lg-12 no-pad"> */}

                <h4 className="global-heading">Meetings and Events</h4>
                    {/* <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                        <h4 className="global-heading">Facilities</h4>

                    </div> */}

                    {/* <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                        <p className="text-justify voffset-1">

                            Enjoy top-notch amenities, including a beautiful pool, a fine dining restaurant serving gourmet food, and a cutting-edge fitness centre in our hotel on Sohna Road. Indulge in unparalleled luxury and comfort at

                            Alivaa Hotels.

                        </p>

                    </div> */}

                {/* </div> */}

                

        <div className="tab-content" >



          <div className="tab-pane fade show active"  id="all" role="tabpanel">

                  {/* <div className="swiper offers-slider" 

                  ref={offersSwiperRef}

                  onMouseEnter={() => (offersSwiperRef.current.style.animationPlayState = "paused")}

                  onMouseLeave={() => (offersSwiperRef.current.style.animationPlayState = "running")}> */}

                <Swiper

                                modules={[Navigation]}

                                navigation

                                loop={true}

                                spaceBetween={10}

                                slidesPerView={1}

                                breakpoints={{

                                600: { slidesPerView: 2 },

                                900: { slidesPerView: 3 },

                                1200: { slidesPerView: 3 },

                                }}>
                      <div className="swiper-wrapper">

                      <SwiperSlide>
                          {/* <div className="swiper-slide"> */}

                              <img style={{height: "360px",minHeight:"320px", width: "320px",minWidth:"240px"}} src="/images/facilities/facility-3.jpg" className="img-fluid" alt="Alivaa Images"/>

                              <div className="overlay"></div>

                                <div className="icon-box icon-box-body">

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position">

                                            <a href="" className="icon-box-link-hoften view1-info">Gymnasium</a>

                                        </div>

                                    </div>

                                </div>

                          {/* </div> */}

                          </SwiperSlide>
                          
                      <SwiperSlide>

                              <img style={{height: "360px",minHeight:"320px", width: "320px",minWidth:"240px"}} src="/images/facilities/facility-1.jpg" className="img-fluid" alt="Alivaa Images" />

                              <div className="overlay"></div>

                                <div className="icon-box icon-box-body">

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position-after">

                                            <a href="" className="icon-box-link-hoften view1-info">Swimming Pool</a>

                                        </div>

                                    </div>

                                </div>

                          
                                </SwiperSlide>
                          
                          <SwiperSlide>

                              <img style={{height: "360px",minHeight:"320px", width: "320px",minWidth:"240px"}} src="/images/facilities/facility-2.jpg" className="img-fluid" alt="Alivaa Images"/>

                              <div className="overlay"></div>

                                <div className="icon-box icon-box-body">

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position-after">

                                            <a href="" className="icon-box-link-hoften view1-info">Cafe Staywoke</a>

                                        </div>

                                    </div>

                                </div>

                          
                                </SwiperSlide>
                          
                          <SwiperSlide>

                              <img style={{height: "360px",minHeight:"320px", width: "320px",minWidth:"240px"}} src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid" alt="Alivaa Images" />

                              <div className="overlay"></div>

                                <div className="icon-box icon-box-body">

                                    <div className="icon-box-button">

                                        <div className="btn-wrapper icon-position-after">

                                            <a href="" className="icon-box-link-hoften view1-info">Gymnasium</a>

                                        </div>

                                    </div>

                                </div>

                          
                                </SwiperSlide>

                      </div>

                      <div className="swiper-pagination"></div>

                        </Swiper>
                  {/* </div> */}

              </div>

          </div>

                

            </div>

        </motion.section>



        <motion.section className="gallery-section gurugram-hotel">

            <article className="container-fluid no-padd">

                <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                    <h4 style={{color:"#245704 !important"}} className="ft-26">Gallery</h4>



                    <p>Explore our hotel gallery to experience the perfect blend of luxury, comfort, and style. See what makes our hotel the perfect destination for your stay.</p>

                </div>

                <div className="col-lg-12 no-padd wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                    <div className="owl-carousel owl-theme gal-slider owl-loaded owl-drag">

                    <div className="owl-stage-outer">

                        <div className="owl-stage" style={{ animation: "scrollGallery 20s linear infinite", display: "flex" }}>

                            <div className="owl-item cloned" style={{width: "306.667px", marginRight: "10px"}}>

                                <div className="item text-center p-1">

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-14.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-15.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                        </div></div><div className="owl-item cloned" style={{width: "306.667px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-16.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-17.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                        </div></div><div className="owl-item cloned" style={{width: "306.667px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-18.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-19.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                        </div></div><div className="owl-item cloned" style={{width: "306.667px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-20.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-21.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                        </div></div><div className="owl-item" style={{width: "306.667px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-22.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-23.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                        </div></div><div className="owl-item" style={{width: "306.667px", marginRight: "10px"}}><div className="item text-center p-1">

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-24.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                            <div className="inner-img-section">

                                <img src="images/hofton-gallery/hf-gal-19.webp" style={{height:"206px", width:"308px"}} alt="Hotels in Gurgaon"/>

                            </div>

                        </div></div>

                        

                        </div></div>


                                                                </div>

                </div>

            </article>

        </motion.section>



</div></div>
      </>

    );

  }