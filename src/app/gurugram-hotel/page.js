"use client";

//import BookingForm from '../components/BookingForm';

// import "../../app/styles/inner.css";

import "../../app/styles/inner.css";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import "swiper/css";

import "swiper/css/navigation";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import HeaderHoften from "../components/HeaderHoften";

import GurugramHotelExtened from "../components/GurugramHotelExtened";

import Roomshiteshoften from "app/components/RoomSuitsHoften";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import { useForm } from "app/booking-engine-widget/FormContext";

export default function GurugramHotelPage() {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const [bgImage, setBgImage] = useState(
    "/images/rooms/deluxe-room-hoften.jpg"
  );

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

        breakpoints: {
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

        modules: [Navigation, Pagination, Autoplay],
      });
    }

    if (facilitiesSwiperRef.current) {
      new Swiper(facilitiesSwiperRef.current, {
        loop: true,

        slidesPerView: 3,

        spaceBetween: 5,

        breakpoints: {
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

        modules: [Navigation, Pagination, Autoplay],
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
 <section className='home-hdr-hght'>
   <NavbarAliva></NavbarAliva>
      <HeaderHoften />
</section>

<section className="banner-section">
    
    <img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/images/hoftenbanner.jpg" />
    
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
   
      
</section>

    <section className="booking-form-section">

             <BookNowForm />
          

</section>

  <section className="your-break about-us sec-padding">     
<div className="row">

  <div className="container">

                
<div className="search-content about-us new-rj-block text-center">
                    
                            

                        <div className="container gurgaon-hotel">

                            
                        <h2 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd" style={{color:"#4a4a4a ",marginBottom:"-50px", marginTop:"20px"}}>Hotel in Gurugram</h2>

                            <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Hotel in Sector 51, Gurugram</h1>                     

                                {/* <p style={{textAlign: "left"}}></p>  */}

                                <div className="content-boxx hotel_rd_more">In an industry that often loses sight of genuine hospitality, Hoften Hotels—short for "Hotel for Often Stays"—is redefining the guest experience. As a chain of hotels designed for business travellers, Hoften Hotels are comfortable, reliable, affordable, and are always glad to welcome you. Our vision focuses on comfort and meeting all the requirements of our guests. Our brand is committed to providing a consistently warm and high-quality experience in prime locations, making Hoften the preferred <b>hotel destination in Gurugram</b> for any traveller who is in search of standard and homely accommodation.
                                {isExpanded && (<GurugramHotelExtened />)}

                        

                                <motion.button 

                                className="read-more-btnn rd_more text-blue-600 underline ml-2"

                                onClick={() => setIsExpanded(!isExpanded)}

                                initial={{ opacity: 0, y: -100 }}

                        animate={{ opacity: 1, x: 0 ,y: 0}}

                        transition={{ duration: 0.6, delay: 0.6 }}

                                >

                                {isExpanded ? "Read less" : "Read more"}

                                </motion.button></div>

                                

                        

                        </div>

                        
</div>

<Roomshiteshoften/>

</div>
</div>
</section>

      <div className="row hoften-hotel mt5">
        <div className="container">
    
          {/* <HotelTab/> */}

          <section className="rooms-info-block pmt-0 gurugram-hotel-meeting">
            <article className="container">
              <div className="col-lg-12 no-pad">
                <div
                  className="col-lg-12 text-center wow fadeInDown animated animated"
                  data-wow-duration="4s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDuration: "4s",
                    MozAnimationDuration: "4s",
                    animationDuration: "4s",
                  }}
                >
                   <h2 className="about-us text-center inner-hd">  Meetings &amp; Events</h2>
                 
                </div>
              </div>

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                >
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
                    }}
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide>
                        <img
                          src="/images/rooms/hoften-conference-room.jpg"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view1-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Conference Room
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* </div> */}
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-new-ballroom-image.webp"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view2-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Ballroom
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-rooftop.jpg"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view2-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Rooftop Venue
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-conference-room.jpg"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view1-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Conference Room
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-new-ballroom-image.webp"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view2-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Ballroom
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-rooftop.jpg"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view2-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Rooftop Venue
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-conference-room.jpg"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view1-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Conference Room
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-new-ballroom-image.webp"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view2-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Ballroom
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src="images/rooms/hoften-rooftop.jpg"
                          height="514"
                          width="373"
                          alt="Hotels in Sohna Road"
                          className="img-responsive"
                          style={{
                            width: "100%",
                            height: "350px",
                            objectFit: "cover",
                          }}
                        />

                        <div className="overlay"></div>

                        <div className="icon-box icon-box-body">
                          <div className="icon-box-button">
                            <div className="btn-wrapper icon-position-after">
                              <a
                                href="/gurugram-meeting-events"
                                className="hoftenctacolor icon-box-link-hoften view2-info"
                                style={{backgroundColor:"#245704 !important"}}
                              >
                                Rooftop Venue
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"><button role="button" className="owl-dot active"><span></span></button>

                        </div> */}
                    </div>

                    <div className="swiper-pagination"></div>
                  </Swiper>
                </div>
              </div>
            </article>
          </section>
<motion.section className="gallery-section gurgaon-hotel"
  initial={{ opacity: 0, y: -250 }}
  animate={{ opacity: 1, x: 0, y: -150 }}
  transition={{ duration: 0.6, delay: 0.6 }}>
  
  <article className="container-fluid no-padd">

    <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

      <h4 className="global-heading-gurgaon inner-hd text-center">Gallery</h4>

      <p>Take a whirlwind tour or catch a quick glimpse of what to expect at the most fashionable and, dare we say, the coolest hotel in town.</p>
    </div>

    <div className="col-lg-12 no-padd wow fadeInUp animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

      <div className="owl-carousel owl-theme gal-slider owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage" style={{ animation: "scrollGallery 20s linear infinite", display: "flex" }}>

            <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/9.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/10.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/11.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/12.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/17.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/13.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/19.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/20.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/1.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/15.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/3.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/22.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/5.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/6.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>

            <div className="owl-item col-md-4 col-12" style={{ width: "306.667px", marginRight: "10px" }}>
              <div className="item text-center p-1">
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/9.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
                <div className="inner-img-section">
                  <img src="images/gallery/Thumb/10.jpg" style={{ height: "206px", width: "308px" }} alt="Hotels in Gurgaon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </article>

</motion.section>
          
        </div>
      </div>
    </>
  );
}
