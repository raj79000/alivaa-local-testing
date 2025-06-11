import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Roomshitesaliva = () => {
  return (
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
              title: "Suite",
              videoSrc: "/images/rooms/FamilyRoom.mp4",
              description:
                "Alivaa offers a selection of thoughtfully designed rooms and suites tailored to the needs of modern travelers.",
            },
            {
              title: "Studio Room",
              videoSrc: "/images/rooms/StudioRoom.mp4",
              description:
                "Ideal for extended stays, the Studio Room includes a private balcony or sit-out area, tasteful décor...",
            },
            {
              title: "Deluxe Room",
              videoSrc: "/images/rooms/DeluxeRoom.mp4",
              description:
                "The Deluxe Room features a king-sized or twin bed, private balcony or sit-out area, and all the essential. ",
            },
            {
              title: "Executive Room",
              videoSrc: "/images/rooms/ExecutiveRoom.mp4",
              description:
                "A step up in both space and design, the Executive Room offers a plush king-sized or twin bed",
            },
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
                <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
                  <source src={room.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link href="/gurgaon-rooms" className="box-btn know-more">Explore More</Link>
                    <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="box-btn book-noww">Book Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Roomshitesaliva;
