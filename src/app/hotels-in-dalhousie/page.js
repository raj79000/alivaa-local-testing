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
import HeaderDalhousie from "app/components/HeaderJawai";
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
                <video
                    playsInline
                    autoPlay
                    loop
                    muted
                    width="93%"
                    className="banner_img_room myvideo pt-0 web-video desk-video">
                    <source src="/jawai-img/jawai-overview-banner.mp4" type="video/mp4" />
                </video>
                <video
                    playsInline
                    autoPlay
                    loop
                    muted
                    className="banner_img_room myvideo pt-0 web-video mob-video">
                    <source src="/jawai-img/jawai-overview-banner.mp4" type="video/mp4" />
                </video>
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
                            <h1 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd pt-3" >Welcome to Jawai Palash Resort by Alivaa Hotels</h1>
                            {/* <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Welcome to Jawai Palash Resort by Alivaa Hotels</h1> */}
                            <div className="content-boxx hotel_rd_more">
                                <div className="content-boxx hotel_rd_more">
                                    Drawing its roots from nature and motivated by the “Flame of the Forest” (Palash flower), Jawai Palash Resort by Alivaa is a hidden gem resting within the wild yet remote untouched beauty of Jawai, Rajasthan. Jawai Palash Resort by Alivaa, located in the remote town of Jawai, Rajasthan, manifests those same values of rejuvenation and passion for its guests. Set in the heart of the jungle, the resort offers an immersive touch of wildlife. When you stay at Jawai Palash, you can experience nature in its true form without compromising on comfort. Our resort in Jawai perches through the tough Aravalli hills and the wilderness, allowing you to explore the untamed yet welcoming spirit of Rajasthan. With panoramic views, curated experiences, and a deep connection to the land, we invite you to explore Rajasthan like never before.
                                    {/* <p style={{textAlign: "left"}}></p>  */}
                                    {isExpanded && (<DalhousieHotelExtended />)}
                                    <motion.button
                                        className="read-more-btnn rd_more text-blue-600 underline ml-2"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        initial={{ opacity: 0, y: -100 }}
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
                        <section className="rooms-info-block gurgaon-hotel-facilities mt-5 pt-0 jawai-hotell-facilities">
                            <div className="container mb-0">
                                <div className="col-lg-12 no-pad">
                                    <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
                                        <h4 className="global-heading-gurgaon inner-hd text-center mt-0 pt-0" style={{ color: "#4a4a4a" }}>Facilities</h4>
                                    </div>
                                    <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{ visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }}>
                                        <p className="content-boxx text-center mb-5">
                                            We offer exceptional facilities in Jawai designed to cater to all your needs, ensuring a comfortable and memorable stay.
                                        </p>
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
                                                    <Image src="/jawai-img/meeeting-space.png" height={400} width={500} className="w-100 primary-radius h-100" alt="Meeting Room" />
                                                    <div className="overlay"></div>
                                                    <div className="icon-box icon-box-body">
                                                        <div className="icon-box-button">
                                                            <div className="btn-wrapper icon-position">
                                                                <a href="jawai-palash-resort-facilities" className="icon-box-link view1-info">Meeting Space </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src="/jawai-img/facilities-indoor-activities.png" height={400} width={500} className="w-100 primary-radius h-100" alt="Meeting Room" />
                                                    <div className="overlay"></div>
                                                    <div className="icon-box icon-box-body">
                                                        <div className="icon-box-button">
                                                            <div className="btn-wrapper icon-position">
                                                                <a href="jawai-palash-resort-facilities" className="icon-box-link view1-info">Indoor Games </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src="/jawai-img/fac-bonefire.png" height={400} width={500} className="w-100 primary-radius h-100" alt="Meeting Room" />
                                                    <div className="overlay"></div>
                                                    <div className="icon-box icon-box-body">
                                                        <div className="icon-box-button">
                                                            <div className="btn-wrapper icon-position">
                                                                <a href="jawai-palash-resort-facilities" className="icon-box-link view1-info">Bonefire</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Image src="/jawai-img/fac-swimming-pool.png" height={400} width={500} className="w-100 primary-radius h-100" alt="Meeting Room" />
                                                    <div className="overlay"></div>
                                                    <div className="icon-box icon-box-body">
                                                        <div className="icon-box-button">
                                                            <div className="btn-wrapper icon-position">
                                                                <a href="jawai-palash-resort-facilities" className="icon-box-link view1-info">Swimming Pool</a>
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
                                                            <img src="/jawai-img/ng-1.jpg" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
                                                        </div>
                                                        <div className="inner-img-section">
                                                            <img src="/jawai-img/ng-2.jpg" style={{ height: "206px", width: "308px" }} alt="Jawai Palash Resort" />
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


