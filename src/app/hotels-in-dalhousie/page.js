"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./gurgaonhotel.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/navigation";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HeaderDalhousie from "app/components/HeaderDalhousie";
import DalhousieRoomsSuites from "app/components/DalhousieRoomsSuites";
import DalhousieExperienceSlider from "app/components/DalhousieExperienceSlider";
import DalhousieHotelExtended from "app/components/DalhousieHotelExtended";
export default function DalhousieHotelPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [bgImage, setBgImage] = useState("/images/rooms/suite-new-image.webp");
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
            <section className='home-hdr-hght'>
                <NavbarAliva />
                <HeaderDalhousie />
            </section>
            <section className="banner-section">
                <Image alt="Hotels in Dalhousie" height={500} width={1500} className="banner-img pt-0" src="/dalhousie-img/banner-overview.png" />
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
                    <img src="images/down-arrow.png" />
                </span>
            </section>
            <section className="booking-form-section">
                <BookNowForm />
            </section>
            <section className="your-break about-us sec-padding">
                <div className="container">
                    <div className="search-content about-us new-rj-block text-center">
                        <div className="container gurgaon-hotel">
                            <h1 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd pt-3" >Hotels in Dalhousie</h1>
                            {/* <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Welcome to Jawai Palash Resort by Alivaa Hotels</h1> */}
                            <div className="content-boxx hotel_rd_more">
                                <div className="content-boxx hotel_rd_more">
                                    Welcome to one of the best hotels in Dalhousie, where serene natural views merge with unparalleled comfort.<br/>
                                    Located in the lap of the captivating Dhauladhar mountain range, Dalhousie is a town that attracts people from across the nation with its pleasant weather and colonial-era buildings. And when you arrive in this town, you can’t find a better place to stay than The Hoften Blue Magnets. Our hotel offers the best quality stays with spacious, comfortable rooms offering stunning mountain views, delicious meals, and exceptional service. 
                                    Comfort, reliability, and affordability—that’s The Hoften Blue Magnets for you in Dalhousie.
                                    {/* <p style={{textAlign: "left"}}></p>  */}
                                    {isExpanded && (<DalhousieHotelExtended />)}
                                    <motion.button
                                        className="read-more-btnn rd_more text-blue-600 underline ml-2"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        {isExpanded ? "Read less" : "Read more"}
                                    </motion.button>  </div></div>
                        </div>
                    </div>
                    <DalhousieRoomsSuites></DalhousieRoomsSuites>
                    <section className="your-break pt-0 exp1 d-none">
                        <DalhousieExperienceSlider></DalhousieExperienceSlider>
                    </section>
                    {/* <HotelTab/> */}
                    <section className="alivaa-inner-offer-section-overview ">
                        <section className="our-offers about-us alivaa-new-offers-see d-none">
                            <div className="container">
                                <h4 className="global-heading-gurgaon inner-hd text-center mt-0" style={{ color: "#4a4a4a" }}>Special Offers</h4>
                                {/* <p className="content-boxx text-center">
                                    At Alivaa <strong><b>Hotels and Resorts on Sohna Road, Gurgaon</b></strong> near <a href="/hotel-near-medanta-hospital-gurgaon">Medanta Hospital</a> take advantage of special discounts.
                                    Savour opulent accommodations with exclusive savings, free breakfast, and extended check-out times. Discover our top-notch amenities and enjoy unmatched luxury and comfort. Make your reservation now for a
                                    memorable getaway!
                                </p> */}
                                <div className="tab-content" id="myTabContent"
                                    initial={{ opacity: 0, y: -150 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}>
                                    <div className="tab-pane fade show active overview-alivaa-offer-slider" id="all" role="tabpanel">
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
                                            <div className="swiper-wrapper justify-content-center" >
                                                <SwiperSlide>
                                                    <img src="/images/comingsoon.png" className="img-fluid w-100 w-100 img2" alt="Alivaa Images" />
                                                    <div className="text-center">
                                                        <div className="offers-text-home">
                                                            <h6 className="offer-name"> Coming Soon</h6>
                                                            {/* <p className="offer-description">
                                                                Day Use Room 10 AM to 6 PM
                                                            </p> */}
                                                        </div>
                                                        {/* <Link href="#" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link> */}
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="rooms-info-block gurgaon-hotel-facilities mt-5 pt-0 jawai-hotell-facilities d-none">
                            <div className="container mb-0">
                                <div className="col-lg-12 no-pad">
                                    <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
                                        <h4 className="global-heading-gurgaon inner-hd text-center mt-0 pt-0" style={{ color: "#4a4a4a" }}>Meeting & Events</h4>
                                    </div>
                                    
                                </div>
                                <div className="tab-content" >
                                    <div className="tab-pane fade show active">
                                        <div className="offers-slider">
                                            
                                            <Swiper
                                                modules={[Navigation, Autoplay]}
                                                navigation
                                                loop={true}
                                                autoplay={{
                                                    delay: 2000,
                                                    disableOnInteraction: false,
                                                }}
                                                spaceBetween={10}
                                                slidesPerView={1}
                                                breakpoints={{
                                                    600: { slidesPerView: 2 },
                                                    900: { slidesPerView: 3 },
                                                    1200: { slidesPerView: 3 },
                                                }}>
                                                <SwiperSlide>
                                                    <Image src="/dalhousie-img/o-conference-hall.png" height={400} width={700} className="w-100 primary-radius h-100" alt="Meeting Room" />
                                                    <div className="overlay"></div>
                                                    <div className="icon-box icon-box-body">
                                                        <div className="icon-box-button">
                                                            <div className="btn-wrapper icon-position">
                                                                <a href="/meeting-events-in-dalhousie" className="icon-box-link view1-info">Conference Hall</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src="/dalhousie-img/o-conference-hall.png" height={400} width={700} className="w-100 primary-radius h-100" alt="Meeting Room" />
                                                    <div className="overlay"></div>
                                                    <div className="icon-box icon-box-body">
                                                        <div className="icon-box-button">
                                                            <div className="btn-wrapper icon-position">
                                                                <a href="/meeting-events-in-dalhousie" className="icon-box-link view1-info">Banquet</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                
                                                
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <motion.section className="gallery-section gurgaon-hotel mt-0 pt-0 new-jawai-galley"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.6 }}>
                            <article className="container-fluid no-padd">
                                <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
                                    <h4 className="global-heading-gurgaon inner-hd text-center mt-0 pt-0">Gallery</h4>
                                    {/* <p>Take a whirlwind tour or catch a quick glimpse of what to expect at the most fashionable and, dare we say, the coolest hotel in town.</p> */}
                                </div>
                                <div className="col-lg-12 no-padd wow fadeInUp animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
                                    <div className="owl-carousel owl-theme gal-slider owl-loaded owl-drag">
                                        <div className="owl-stage-outer">
                                            <div className="owl-stage" style={{ animation: "scrollGallery 20s linear infinite", display: "flex" }}>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/44.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/45.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/46.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/47.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/48.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/49.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/50.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/51.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/52.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/53.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/54.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/55.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/56.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/57.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/58.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/59.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/60.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/61.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/62.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/63.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/64.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/65.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item col-md-4 col-12 cloned" style={{ width: "306.667px", marginRight: "10px" }}>
                                                    <div className="item text-center p-1">
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/66.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/dalhousie-img/67.png" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
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
                <motion.section className="gallery-section mb-tst gurgaon-hotel-testimonials mb-5"
                    initial={{ opacity: 0, y: -350 }}
                    animate={{ opacity: 1, x: 0, y: -80 }}
                    transition={{ duration: 0.6, delay: 0.6 }}>
                    <article className="container mb-5">
                        <div className="col-lg-12 text-center wow fadeInDown animated mb-5" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
                            <h4 className="global-heading-gurgaon inner-hd text-center" style={{ color: "#4a4a4a" }}>Testimonials</h4>
                        </div>
                        <div className="col-lg-12 no-padd gal-slider1 mb-5">
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
                                    <div className="test-item">
                                        <span>
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </span>
                                        <p>
                                            From the moment I arrived, I was treated like family. The staff went above and beyond to make sure every part of my stay was comfortable and memorable. Their warmth, professionalism, and personal attention made me feel truly cared for.
                                        </p>
                                        <div className="testimonials_inner_profile">
                                            <a href="https://www.google.com/maps/contrib/112062180097215013722/photos/@19.2179513,72.8436679,1426m/data=!3m2!1e3!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                                <img src="images/google_logo.png" alt="google_logo" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="test-item">
                                        <span>
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </span>
                                        <p>
                                            Awesome hospitality also the food here was fantastic. Staff was very cooperative and we just felt like we were at home. The overall environment of hotel was very nice and friendly. Everyone was there to help and the hygiene of rooms was very good.
                                        </p>
                                        <div className="testimonials_inner_profile">
                                            <a href="https://www.google.com/maps/contrib/101894472112552044887/reviews/@25.7492352,68.2823824,2786019m/data=!3m2!1e3!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                                <img src="images/google_logo.png" alt="google_logo" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="test-item">
                                        <span>
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </span>
                                        <p>
                                            the hotel was very good. Mattress were very soft and the sleep quality was very nice. Food was just awesome and would highly recommend to tatse it even if you are not staying at the property. we had a pleasent experience and staff was also very helpful in nature.
                                        </p>
                                        <div className="testimonials_inner_profile">
                                            <a href="https://www.tripadvisor.com/ShowUserReviews-g503693-d10822885-r1010467187-Hotel_Blue_Magnets_Dalhousie-Dalhousie_Chamba_District_Himachal_Pradesh.html" target="_blank">
                                                <img src="images/Tripadvisor_Logo.png" alt="tripadvisor_logo" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="test-item">
                                        <span>
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                        </span>
                                        <p>
                                            The place is really nice to stay with your family and friends. Behaviour of staff is also good. Food is testy and cleanliness is also good.|Wifi is available here. We really have such a nice experience here. The place is clean and it has a nice view from the balcony.
                                        </p>
                                        <div className="testimonials_inner_profile">
                                            <a href="https://www.tripadvisor.com/ShowUserReviews-g503693-d10822885-r1011663332-Hotel_Blue_Magnets_Dalhousie-Dalhousie_Chamba_District_Himachal_Pradesh.html" target="_blank">
                                                <img src="images/Tripadvisor_Logo.png" alt="tripadvisor_logo" />
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </article>
                </motion.section>
            </section>
            <style jsx>
                {`
    @media screen and (max-width: 768px) {
    .jawai-hotell-facilities .swiper-slide  img{
    max-height: 450px!important;
    }
    }
    `}
            </style>
        </>
    );
}
