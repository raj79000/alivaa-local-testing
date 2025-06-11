

"use client";

//import BookingForm from '../components/BookingForm';

// import "../../app/styles/inner.css";

// import dynamic from "next/dynamic";

import { Swiper, SwiperSlide } from "swiper/react";
import ExperienceSlider from "app/components/ExperienceSlider";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Roomshitesaliva from "app/components/RoomSuitsAliva";
import "./gurgaonhotel.css";

import { motion } from "framer-motion";

import GurgaonHotelExtended from '../components/GurgaonHotelExtended';



import Link from 'next/link';

import { useState, useRef } from "react";



import 'bootstrap/dist/css/bootstrap.min.css';



// import Image from "next/image";

import "swiper/css";

import "swiper/css/navigation";



import HeaderAlivaa from '../components/HeaderAlivaa';

import BookingFormInner from '../components/BookingFormInner';
import BookingFormHoften from "app/components/BookingFormHoften";
import NavbarAliva from "app/components/NavbarAliva";
import BookingForm from "app/components/BookingForm";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";



export default function GurgaonHotelPage() {

    const [isVisible, setIsVisible] = useState(false);

   const [isExpanded, setIsExpanded] = useState(false); 

   const [img, setImg] = useState(); 

   const [bgImage, setBgImage] = useState("/images/rooms/suite-new-image.webp");

   

  const offersSwiperRef = useRef(null);

  const facilitiesSwiperRef = useRef(null);

  

//   const sliderRef = useRef(null);

  

//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {

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

            delay: 3000,

            disableOnInteraction: false,

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

             delay: 3000,

             disableOnInteraction: false,

           },

          pagination: false,

         modules: [Navigation,Pagination, Autoplay],

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
   
   <NavbarAliva/>
   
   <HeaderAlivaa/>
   </section>
 <section className="banner-section">
   <video 
     playsInline 
     autoPlay 
     loop 
     muted 
     width="93%" 
     className="banner_img_room myvideo pt-0 web-video desk-video"> 
     <source src="/images/overview.mp4" type="video/mp4" />
   </video>

   <video 
    playsInline 
    autoPlay 
    loop 
    muted 
    className="banner_img_room myvideo pt-0 web-video mob-video"> 
    <source src="/mobile-video/overview_banner.mp4" type="video/mp4" />
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
         <img src="images/down-arrow.png"/>
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
 <FormProvider>
            <BookNowForm />
          </FormProvider>
          </section>

        



            
      <section className="your-break about-us sec-padding">     


  <div className="container">

                
<div className="search-content about-us new-rj-block text-center">
                    
                            

                        <div className="container gurgaon-hotel">

                            
                        <h2 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd pt-3" >Alivaa Hotel, Sohna Road City Center, Gurgaon</h2>

                            <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">Hotel on Sohna Road, Gurgaon</h1>

                            <div className="content-boxx hotel_rd_more">
                            <div className="content-boxx hotel_rd_more">Perfectly located on Sohna Road, Alivaa Hotel Gurugram features 150 rooms - a mix of studios and suites designed for both comfort and functionality. What makes it unique is that every room in this hotel has an attached balcony. The hotel offers a mix of business and leisure-friendly amenities, including an outdoor swimming pool, a fully equipped gym, a multi-cuisine restaurant, a casual coffee shop and free high-speed Wi-Fi. With services like an laundry, smoking rooms, and business support, guests enjoy a seamless stay just minutes away from Gurugram’s corporate and lifestyle hubs.

                                {/* <p style={{textAlign: "left"}}></p>  */}

                                {isExpanded && (<GurgaonHotelExtended />)}

                        

                                <motion.button 

                                className="read-more-btnn rd_more text-blue-600 underline ml-2"

                                onClick={() => setIsExpanded(!isExpanded)}

                                initial={{ opacity: 0, y: -100 }}

                        animate={{ opacity: 1, x: 0 ,y: 0}}

                        transition={{ duration: 0.6, delay: 0.6 }}

                                >

                                {isExpanded ? "Read less" : "Read more"}

                                </motion.button>  </div></div>

                                

                        

                        </div>

                        
</div>

                    


   <Roomshitesaliva/>
 <section className="your-break pt-0 exp1 d-none">
   <ExperienceSlider />      
   </section>
                    {/* <HotelTab/> */}


      <section className="your-break mtn12 sec-padding mt-5">
            <motion.section className="our-offers about-us alivaa-new-offers-see" 

                    initial={{ opacity: 0, y: -150 }}

                    animate={{ opacity: 1, x: 0 ,y: -100} }

                    transition={{ duration: 0.6, delay: 0.6 }}>

                <div className="container">

                <h4 className="global-heading-gurgaon inner-hd text-center" style={{color:"#4a4a4a"}}>Special Offers</h4>

                {/* <p className="content-boxx">At Alivaa Hotels and Resorts on Sohna Road, Gurgaon near Medanta Hospital take advantage of special discounts. Savour opulent accommodations with exclusive savings, free breakfast, and extended check-out times. Discover our top-notch amenities and enjoy unmatched luxury and comfort. Make your reservation now for a memorable getaway!</p> */}

                <p className="content-boxx text-center">
                At Alivaa <strong><b>Hotels and Resorts on Sohna Road, Gurgaon</b></strong> near <a href="/hotel-near-medanta-hospital-gurgaon">Medanta Hospital</a> take advantage of special discounts.
                Savour opulent accommodations with exclusive savings, free breakfast, and extended check-out times. Discover our top-notch amenities and enjoy unmatched luxury and comfort. Make your reservation now for a
                memorable getaway!
                </p>

                

                <div className="tab-content" id="myTabContent"

                    initial={{ opacity: 0, y: -150 }}

                    animate={{ opacity: 1, x: 0 ,y: 0}}

                    transition={{ duration: 0.6, delay: 0.6 }}>



                <div className="tab-pane fade show active" id="all" role="tabpanel">

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

                                    <img  src="/images/our-offers/alivaa-new-offer-imgg-2.webp" className="img-fluid img2 w-100 w-100" alt="Alivaa Images" />

                             

                                    <div className="text-center">

                                        <div className="offers-text-home">

                                            <h6 className="offer-name">Executive Package </h6>

                                            <p className="offer-description">

                                            Up to 50% Off on Best Available Rate

                                            </p>

                                        </div>

                                        <Link href="/gurgaon-hotel-offers#executive-offer" className="btn btn-primary voffset-2 cls-intro-offer">View Offer</Link>

                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                    <img src="/images/offer-img-2.webp" className="img-fluid img2 w-100 w-100" alt="Alivaa Images" />

                                    <div className="text-center">

                                        <div className="offers-text-home">

                                            <h6 className="offer-name"> Relax with a Staycation</h6>

                                            <p className="offer-description">

                                                Free breakfast, Flexible check-in & check-out

                                            </p>

                                        </div>

                                        <Link href="/gurgaon-hotel-offers#relax-with-staycation" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>

                                    </div>

                                </SwiperSlide>

                                

                                <SwiperSlide>

                                    <img  src="/images/our-offers/offer-img-3.jpg" className="img-fluid w-100 w-100 img2" alt="Alivaa Images"/>

                                    <div className="text-center">

                                        <div className="offers-text-home">

                                            <h6 className="offer-name"> Day Rooms</h6>

                                            <p className="offer-description">

                                            Starting at INR 2024

                                            </p>

                                        </div>



                                        <Link href="/gurugram-hotel-offers" className="btn btn-primary voffset-2 cls-relax-offer">View Offer</Link>

                                    </div>

                                </SwiperSlide>

                            



                            </div>

                        </Swiper>

                

                    </div>

                </div>

                </div>

            </motion.section>

            <motion.section className="rooms-info-block gurgaon-hotel-facilities" 

                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, y: -150, x: 0 }}

                transition={{ duration: 0.6,  delay:0.6 }}>

                    <div className="container mb-0">

                        <div className="col-lg-12 no-pad">

                            <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                                <h4 className="global-heading-gurgaon inner-hd text-center" style={{color:"#4a4a4a"}}>Facilities</h4>

                            </div>

                            <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                                <p className="content-boxx text-center mb-5">

                                Alivaa Hotel is designed to make your stay comfortable, convenient, and complete. From wellness to daily conveniences, here’s what you can expect:

                                </p>

                            </div>

                        </div>

                        

                <div className="tab-content" >



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

                                }}>

                                <SwiperSlide>

                                <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/facilities/Gym2reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

                                    <div className="overlay"></div>

                                        <div className="icon-box icon-box-body">

                                            <div className="icon-box-button">

                                                <div className="btn-wrapper icon-position">

                                                    <a href="gurgaon-facilities#gymnasium" className="icon-box-link view1-info">Gymnasium</a>

                                                </div>

                                            </div>

                                        </div>

                                </SwiperSlide>

                                <SwiperSlide>

                                <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/facilities/PoolReel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

                                    <div className="overlay"></div>

                                        <div className="icon-box icon-box-body">

                                            <div className="icon-box-button">

                                                <div className="btn-wrapper icon-position-after">

                                                    <a href="gurgaon-facilities#swimming-pool" className="icon-box-link view1-info">Swimming Pool</a>

                                                </div>

                                            </div>

                                        </div>

                                </SwiperSlide>

                                <SwiperSlide>
                                <video autoPlay loop muted playsInline className="w-100 primary-radius">
              <source src="/images/facilities/Cafereel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

                                    <div className="overlay"></div>

                                        <div className="icon-box icon-box-body">

                                            <div className="icon-box-button">

                                                <div className="btn-wrapper icon-position-after">

                                                    <a href="/gurgaon-dining" className="icon-box-link view1-info">Cafe Staywoke</a>

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




                <motion.section className="gallery-section mb-tst gurgaon-hotel-testimonials" 

                    initial={{ opacity: 0, y: -350 }}

                    animate={{ opacity: 1, x: 0 ,y: -200}}

                    transition={{ duration: 0.6, delay: 0.6 }}>

                    <article className="container">

                        <div className="col-lg-12 text-center wow fadeInDown animated" data-wow-duration="4s" style={{visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}>

                            <h4 className="global-heading-gurgaon inner-hd text-center" style={{color:"#4a4a4a"}}>Testimonials</h4>

                        </div>

                        <div className="col-lg-12 no-padd gal-slider1">

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

                                                        My overall experience while staying at Alivaa was amazing. Hotel staff

                                                        were very helpful and humble. Rooms are spacious with a balcony with a

                                                        nice view. Food was delicious too.

                                                        </p>

                                                        <div className="testimonials_inner_profile">

                                                      
                                                                <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                         

                                                        </div>

                                                    </div>

                                            </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                    <span>

                                                        {" "}

                                                        <i className="fa fa-star" aria-hidden="true" />

                                                        <i className="fa fa-star" aria-hidden="true" />

                                                        <i className="fa fa-star" aria-hidden="true" />

                                                        <i className="fa fa-star" aria-hidden="true" />{" "}

                                                    </span>

                                                    <p>Site and location is good. GMP maintained. Breakfast good.</p>

                                                    <div className="testimonials_inner_profile">

                                                       

                                                        <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                        

                                                    </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>

                                                    The rooms are impeccably clean, well maintained. Linen, towels provided

                                                    are very good. Laundry and room service good!

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                   

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                  

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

                                                    I enjoyed the stay at the hotel. Was not aware that we had such ya

                                                    lovely hotel at decent rates, round the corner. I must say your rooms

                                                    are well appointed. Facilities are really good. Few things you can

                                                    improve are, get your basement parking sorted.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                  

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

                                                    I stayed there . Stay was awry, I ordered food pizza was very tasty.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                               

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

                                                    I recently stayed at ALIVAA Hotel &amp; Resorts, and I must say it was

                                                    an exceptional experience from start to finish. The hotel itself is

                                                    beautifully maintained, with clean, spacious, and well-decorated rooms

                                                    that made me feel right at home. The location is perfect, close to

                                                    (DELHI AIRPORT)

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.google.com/maps/contrib/103320555132990483335/place/ChIJxfD7FZwiDTkRP3SrCV-mTAE/@21.9139975,70.0305908,5z/data=!4m6!1m5!8m4!1e1!2s103320555132990483335!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"

                                                    target="_blank"

                                                    >

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    I had a really good experience at the hotel. The rooms are clean and

                                                    spacious. The staff is polite and cooperative. The food is also tasty.

                                                    Staff hemant is very kind and good with his work. Overall a nice place

                                                    to stay.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.google.com/maps/contrib/103320555132990483335/place/ChIJxfD7FZwiDTkRP3SrCV-mTAE/@21.9139975,70.0305908,5z/data=!4m6!1m5!8m4!1e1!2s103320555132990483335!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"

                                                    target="_blank"

                                                    >

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    A very nice and clean hotel ,helpful and caring staff specially

                                                    HEMANT.In total awesome experience.WORTH IT!!

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.google.com/maps/contrib/116578902999132879074/reviews/@28.9073091,77.5081863,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D "

                                                    target="_blank"

                                                    >

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    The hospitality is really nice… staff Hemant in Staywoke cafe took

                                                    really good care of everyone and I enjoyed his service. He was very

                                                    polite and generous.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.google.com/maps/contrib/103167828143483917246/reviews/@23.7233364,70.8650363,6z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"

                                                    target="_blank"

                                                    >

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    Alivaa is the great one hotel for stay &amp; living. The bedroom is

                                                    clean, comfy &amp; have a large space. Have a sofa &amp; mini kitchen.

                                                    The ac is cool, nice entertaiment tv and the bathroom has a great space

                                                    👍

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.google.com/maps/contrib/103288800945015468319/reviews/@28.4190371,77.0384289,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"

                                                    target="_blank"

                                                    >

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    My recent stay at this property was exceptionally comfortable and the

                                                    staffs Hemant, Dildar, Anil and Sultan Singh was at there toes for

                                                    whatever assistance I needed. Rooms are very big with balcony. Would

                                                    love to stay there again.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.google.com/maps/contrib/104916681055971274531/reviews/@28.4191128,77.0383927,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D "

                                                    target="_blank"

                                                    >

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>

                                                    As a pilot, I travel a lot... stay in different hotels most of the time,

                                                    I highly recommend Alivaa Hotel, the room is quite large and come with

                                                    balcony, it also equipped with a kitchenette for those who like to cook

                                                    for themselves.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.tripadvisor.com/ShowUserReviews-g297615-d27714443-r963917760-Alivaa_Hotel_Gurugram_Sohna_Road_City_Center-Gurugram_Gurgaon_Gurgaon_District_.html"

                                                    target="_blank"

                                                    >

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>

                                                    Everything was amazing as I received a warm warm welcome hotel staff are

                                                    so professional and helpful I just loved the way mr Rahul Sherawat

                                                    helped us to make our stay wonderful and I will just loved to come here

                                                    again and will tell my knows to come and visit this property

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.tripadvisor.com/ShowUserReviews-g297615-d27714443-r964878964-Alivaa_Hotel_Gurugram_Sohna_Road_City_Center-Gurugram_Gurgaon_Gurgaon_District_.html"

                                                    target="_blank"

                                                    >

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>

                                                    Good stay at a decent price. Rooms are spacious and well appointed.

                                                    Please sort out the parking, gives a negative image when you park your

                                                    car. Also get the room temperature managed when one is checking in. It

                                                    was warm and it took some time to settle down.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.tripadvisor.com/ShowUserReviews-g297615-d27714443-r971100556-Alivaa_Hotel_Gurugram_Sohna_Road_City_Center-Gurugram_Gurgaon_Gurgaon_District_.html"

                                                    target="_blank"

                                                    >

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>

                                                    Rooms are impeccably clean. Service very good. Though restaurant service

                                                    very good, food quality needs improvement. Food choice for both

                                                    breakfast and dinner very limited. It's a new hotel and so occupancy

                                                    very low.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.tripadvisor.com/ShowUserReviews-g297615-d27714443-r971834008-Alivaa_Hotel_Gurugram_Sohna_Road_City_Center-Gurugram_Gurgaon_Gurgaon_District_.html"

                                                    target="_blank"

                                                    >

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    My recent stay at Hotel Alivaa was truly exceptional, providing a

                                                    delightful blend of comfort, convenience, and hospitality. From the

                                                    moment we arrived, the warm and welcoming nature of the staff stood out.

                                                    The check-in process was smooth and efficient, with the front desk staff

                                                    going out of their way to ensure we felt at home.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.tripadvisor.com/ShowUserReviews-g297615-d27714443-r959121589-Alivaa_Hotel_Gurugram_Sohna_Road_City_Center-Gurugram_Gurgaon_Gurgaon_District_.html"

                                                    target="_blank"

                                                    >

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    Stay was awesome cleaniless is there food was so yummy. Bed was so clean

                                                    and smooth a toilet was also very clean. I would like to stay again

                                                    whenever I will come again to same location. Staff was very cooperative

                                                    as i asked for changes in food they did with very humbleness

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a

                                                    href="https://www.tripadvisor.com/ShowUserReviews-g297615-d27714443-r971036337-Alivaa_Hotel_Gurugram_Sohna_Road_City_Center-Gurugram_Gurgaon_Gurgaon_District_.html"

                                                    target="_blank"

                                                    >

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    Nice stay! Rooms are impeccably clean. Service very good. Though

                                                    restaurant service very good, food quality needs improvement. Food

                                                    choice for both breakfast and dinner very limited. It's a new hotel and

                                                    so occupancy very low.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    Day stay at Alivaa Good stay at a decent price. Rooms are spacious and

                                                    well appointed. Please sort out the parking, gives a negative image when

                                                    you park your car. Also get the room temperature managed when one is

                                                    checking in. It was warm and it took some time to settle down.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    Incredible Stay was awesome clenailess is there food was so yummy. Bed

                                                    was so clean and smooth a toilet was also very clean. I would like to

                                                    stay again whenever I will come again to same location. Staff was very

                                                    cooperative as i asked for changes in food they did with very

                                                    humbleness.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    It was wonderful Everything was amazing as I received a warm warm

                                                    welcome hotel staff are so professional and helpful I just loved the way

                                                    mr Rahul Sherawat helped us to make our stay wonderful and I will just

                                                    loved to come here again and will tell my knows to come and visit this

                                                    property.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    One of best hotel to stay in Delhi As a pilot, I travel a lot... stay in

                                                    different hotels most of the time, I highly recommend Alivaa Hotel, the

                                                    room is quite large and come with balcony, it also equipped with a

                                                    kitchenette for those who like to cook for themselves. Thank you Alivaa

                                                    Hotel for the great experience and hospitality.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    My Stay at Hotel Alivaa My recent stay at Hotel Alivaa was truly

                                                    exceptional, providing a delightful blend of comfort, convenience, and

                                                    hospitality. From the moment we arrived, the warm and welcoming nature

                                                    of the staff stood out. The check-in process was smooth and efficient,

                                                    with the front desk staff going out of their way to ensure we felt at

                                                    home.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/Tripadvisor_Logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    My recent stay at this property was exceptionally comfortable and the

                                                    staffs Hemant, Dildar, Anil and Sultan Singh was at there toes for

                                                    whatever assistance I needed. Rooms are very big with balcony. Would

                                                    love to stay there again.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    Stay was awesome clenailess is there food was so yummy. ||Bed was so

                                                    clean and smooth a toilet was also very clean. I would like to stay

                                                    again whenever I will come again to same location. Staff was very

                                                    cooperative as i asked for changes in food they did with very

                                                    humbleness.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    The hospitality is really nice… staff Hemant in Staywoke cafe took

                                                    really good care of everyone and I enjoyed his service. He was very

                                                    polite and generous.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    A very nice and clean hotel ,helpful and caring staff specially

                                                    HEMANT.In total awesome experience.WORTH IT!!

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    I had a really good experience at the hotel. The rooms are clean and

                                                    spacious. The staff is polite and cooperative. The food is also tasty.

                                                    Staff hemant is very kind and good with his work. Overall a nice place

                                                    to stay.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    I recently stayed at ALIVAA Hotel &amp; Resorts, and I must say it was

                                                    an exceptional experience from start to finish. The hotel itself is

                                                    beautifully maintained, with clean, spacious, and well-decorated rooms

                                                    that made me feel right at home. The location is perfect, close to

                                                    (DELHI AIRPORT).

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="#" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    My overall experience while staying at Alivaa was amazing. Hotel staff

                                                    were very helpful and humble. Rooms are spacious with a balcony with a

                                                    nice view. Food was delicious too.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="/gurgaon-hotel-contact#cont-form" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>Site and location is good. GMP maintained. Breakfast good.</p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="/gurgaon-hotel-contact#cont-form" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                            <SwiperSlide>

                                                <div className="test-item">

                                                <span>

                                                    {" "}

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />

                                                    <i className="fa fa-star" aria-hidden="true" />{" "}

                                                </span>

                                                <p>

                                                    The rooms are impeccably clean, well maintained. Linen, towels provided

                                                    are very good. Laundry and room service good!

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="/gurgaon-hotel-contact#cont-form" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    I enjoyed the stay at the hotel. Was not aware that we had such ya

                                                    lovely hotel at decent rates, round the corner. I must say your rooms

                                                    are well appointed. Facilities are really good. Few things you can

                                                    improve are, get your basement parking sorted.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="/gurgaon-hotel-contact#cont-form" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

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

                                                    I stayed there . Stay was awry, I ordered food pizza was very tasty.

                                                </p>

                                                <div className="testimonials_inner_profile">

                                                    <a href="/gurgaon-hotel-contact#cont-form" target="_blank">

                                                    <img src="images/google_logo.png" alt="Tripadvisor_Logo.png" />

                                                    </a>

                                                </div>

                                                </div>

                                                </SwiperSlide>

                                           

                             </Swiper>

                        </div>

                    </article>

                </motion.section>

                </section>

            </div>


        </section>

      </>

    );

  }