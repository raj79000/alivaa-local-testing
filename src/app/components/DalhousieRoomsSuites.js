import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import DalhousieNewEnquiryPopupBook from "./DalhousieNewEnquiryPopupBook";

const DalhousieRoomsSuites = () => {
  return (
    <>
    <section className="your-break about-us sec-padding mb-5">
      <div className="container">
        <h2 className="about-us text-center mt-5">Rooms & Suites</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 1 },
          }}
          className="slider-container"
        >
          {[
            {
              title: "Deluxe Room",
              videoSrc: "/dalhousie-img/room-deluxe.png",
              description:
                "Elegantly designed for solo travellers, our Deluxe Rooms offer...",
            },
            {
              title: "Super Deluxe Room",
              videoSrc: "/dalhousie-img/room-super-deluxe.png",
              description:
                "Our Super Deluxe rooms provide a more spacious living area with...",
            },
            {
              title: "Premium Room",
              videoSrc: "/dalhousie-img/room-premium.png",
              description:
                "Premium rooms at The Hoften Blue Magnets come with spacious ...",
            },
             {
              title: "Family Suite",
              videoSrc: "/dalhousie-img/room-family.png",
              description:
                "Our Family suites have ample space for a family with 2 interconnected ...",
            },
             {
              title: "Presidential Suite",
              videoSrc: "/dalhousie-img/room-honeymoon-suite.png",
              description:
                "The epitome of luxury. With a lavish bedroom, king-sized bed...",
            },
            
            
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
                <Image src={room.videoSrc} alt={room.title} height={400} width={500} className="img-fluid w-100" />
                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link href="/rooms-in-dalhousie" className="box-btn know-more">Explore More</Link>
                    <Link href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id%3Dcee239fd-433d-4700-bd55-67795c3eca05%26type%3D2&checkInDate=2025-07-12&checkOutDate=2025-07-13&guest=[ac1%3D2]&roomPropertyID=cee239fd-433d-4700-bd55-67795c3eca05" className="box-btn book-noww">Book Now</Link>
                    {/* <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry">Enquire Now</Link> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <DalhousieNewEnquiryPopupBook />
   </>
  );
};

export default DalhousieRoomsSuites;
