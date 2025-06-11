"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Roomshitesaliva from "app/components/RoomSuitsAliva";
import "./gurgaonhotel.css";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import Image from "next/image";

import "swiper/css";

import "swiper/css/navigation";

import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import LansdowneHotelExtended from "app/components/LansdowneHotelExtended";
import RoomSuitsLansdowne from "app/components/RoomSuitsLansdowne";
import HeaderLansdowne from "app/components/HeaderLansdowne";

export default function GurgaonHotelPage() {

  const [isExpanded, setIsExpanded] = useState(false);



  const offersSwiperRef = useRef(null);

  const facilitiesSwiperRef = useRef(null);


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
        delay: 3000,

        disableOnInteraction: false,
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
        delay: 3000,

        disableOnInteraction: false,
      },

      pagination: false,

      modules: [Navigation, Pagination, Autoplay],
    });
  }

  // }

  //   }, []);

  const handleMouseEnter = (image) => {
    setBgImage(image);
  };

  const handleMouseLeave = () => {
    setBgImage("/images/rooms/suite-new-image.webp"); // Default background
  };

  return (
    <>
      <section className="home-hdr-hght">
        <NavbarAliva />

        <HeaderLansdowne></HeaderLansdowne>
      </section>
      <section className="banner-section">
        {/* <video 
     playsInline 
     autoPlay 
     loop 
     muted 
     width="93%" 
     className="banner_img_room myvideo pt-0 web-video desk-video"> 
     <source src="/images/overview.mp4" type="video/mp4" /> 
     </video>
     */}

        <img
          src="/lansdowne-img/overview-banner.png"
          alt="Hotels in Lansdowne"
          className="banner-img pt-0"
        />

        

        <div className="social-icon-banner">
          <a
            className="btn btn-social"
            href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              src="/images/fb-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-social"
            href="https://www.instagram.com/alivaahotels/"
            target="_blank"
          >
            <img
              src="/images/instagram-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-social"
            href="https://www.linkedin.com/company/alivaa-hotels-resorts/"
            target="_blank"
          >
            <img
              src="/images/linkedin-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
              className="social-icon"
            />
          </a>
        </div>
        <span className="updown-arrow">
          <img src="images/down-arrow.png" />
        </span>
        {/* { !isVisible && (<div className="content-section">
       <div className="container position-relative">
         <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
           <button className="btn desktop-button corporatebannerbutton btm15" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
             <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
            
           </button>
         </div>
       </div>
     </div>) } */}
      </section>

      <section className="booking-form-section">
        <BookNowForm />
      </section>

      <section className="your-break about-us sec-padding">
        <div className="container">
          <div className="search-content about-us new-rj-block text-center">
            <div className="container gurgaon-hotel">
              <h1
                id="gurgaon-hotel"
                className="global-heading-gurgaon inner-hd pt-3"
              >
                Viceroy In The Himalayas by Alivaa
              </h1>

              {/* <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Hotel in Gurgaon at Sohna Road</h1> */}

              <div className="content-boxx hotel_rd_more">
                <div className="content-boxx hotel_rd_more mb-3">
                  Spend a serene mountain escape at Viceroy in the Himalaya,
                  which operates under Alivaa Hotel. Situated in the central
                  part of Lansdowne, which stands in Uttarakhand, we deliver a
                  peaceful haven through mountain and valley views that extend
                  right from our property borders.
                  {/* <p style={{textAlign: "left"}}></p>  */}
                  {isExpanded && (
                    <LansdowneHotelExtended></LansdowneHotelExtended>
                  )}
                  <motion.button
                    className="read-more-btnn rd_more text-blue-600 underline ml-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </motion.button>{" "}
                </div>
              </div>
            </div>
          </div>

          <RoomSuitsLansdowne></RoomSuitsLansdowne>
          {/* <section className="your-break pt-0 exp1 d-none">
   <ExperienceSlider />      
   </section> */}

          <section className="sec-padding lansdowne-room-sec-new">
            <motion.section
              className="rooms-info-block gurgaon-hotel-facilities"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, y: -15, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="container mb-0">
                <div className="col-lg-12 no-pad">
                  <div
                    className="col-lg-12 text-center wow fadeInDown animated mt-0"
                    data-wow-duration="4s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "4s",
                      MozAnimationDuration: "4s",
                      animationDuration: "4s",
                    }}
                  >
                    <h4
                      className="global-heading-gurgaon inner-hd text-center mt-0"
                      style={{ color: "#4a4a4a" }}
                    >
                      Facilities
                    </h4>
                  </div>

                  <div
                    className="col-lg-12 text-center wow fadeInDown animated"
                    data-wow-duration="4s"
                    style={{
                      visibility: "visible",
                      WebkitAnimationDuration: "4s",
                      MozAnimationDuration: "4s",
                      animationDuration: "4s",
                    }}
                  >
                    <p className="content-boxx text-center mb-5">
                      Our hotel features various recreational opportunities, including both indoor and outdoor experiences. Our guests can enjoy swimming pool relaxation followed by dining at our multi-cuisine restaurant and lounge bar leisure. We are one of the best hotels in Lansdowne with swimming pool and other facilities. We offer spaces for recreation and relaxation amidst the beautiful surroundings.
                    </p>
                  </div>
                </div>

                <div className="tab-content tab-pane-for-Lansdowne-overview-facilities">
                  <div className="tab-pane fade show active">
                    <div className="offers-slider">
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
                        <SwiperSlide>
                         
                          <Image src="/lansdowne-img/f-swimming-pool-image.jpg" height={500} width={500} alt="Gym" className="w-100 primary-radius" />

                          <div className="overlay"></div>

                          <div className="icon-box icon-box-body">
                            <div className="icon-box-button">
                              <div className="btn-wrapper icon-position">
                                <a
                                  href="/lansdowne-facilities"
                                  className="icon-box-link view1-info"
                                >
                                 Swimming Pool
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                       

                        <SwiperSlide>
                         
                          <Image src="/lansdowne-img/f-indoor-activities.jpg" height={500} width={500} alt="Gym" className="w-100 primary-radius" />

                          <div className="overlay"></div>

                          <div className="icon-box icon-box-body">
                            <div className="icon-box-button">
                              <div className="btn-wrapper icon-position-after">
                                <a
                                  href="/lansdowne-facilities"
                                  className="icon-box-link view1-info"
                                >
                                  Indoor Activities
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="gallery-section gallery-sec-lansdowne gurgaon-hotel pt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <article className="container-fluid no-padd">
                <div
                  className="col-lg-12 text-center wow fadeInDown animated"
                  data-wow-duration="4s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDuration: "4s",
                    MozAnimationDuration: "4s",
                    animationDuration: "4s",
                  }}
                >
                  <h4 className="global-heading-gurgaon inner-hd text-center pt-0 mt-0">
                    Gallery
                  </h4>

                  <p>
                    Explore the visual story of Viceroy in the Himalaya. Our gallery showcases the breathtaking panoramic views of Lansdowne and the majestic Himalayas, our comfortable and well-appointed rooms with private balconies, the inviting ambiance of our dining spaces, and the serene beauty of our surroundings. Get a glimpse of your tranquil escape.
                  </p>
                </div>

                <div
                  className="col-lg-12 no-padd wow fadeInUp animated"
                  data-wow-duration="4s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDuration: "4s",
                    MozAnimationDuration: "4s",
                    animationDuration: "4s",
                  }}
                >
                  <div className="owl-carousel owl-theme gal-slider owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          animation: "scrollGallery 15s linear infinite",
                          display: "flex",
                        }}
                      >
                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/lansdowne-facade.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/overview-banner.png"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/deluxe-room.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/premium-room.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/rooftop-cottage.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/super-deluxe-room.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/f-indoor-activities.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/f-swimming-pool-image.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/dining-banner.png"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/facilities-banner.png"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/corporate-event-2.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/restaurant-image.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item col-md-4 col-12 cloned"
                          style={{ width: "306.667px", marginRight: "10px" }}>
                          <div className="item text-center p-1">
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/meeting-event-banner.png"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                            <div className="inner-img-section">
                              <img
                                src="/lansdowne-img/wedding-image.jpg"
                                style={{ height: "206px", width: "308px" }}
                                alt="Hotels in Gurgaon"
                              />
                            </div>
                          </div>
                        </div>



                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </motion.section>
          </section>
        </div>
      </section>
    </>
  );
}
