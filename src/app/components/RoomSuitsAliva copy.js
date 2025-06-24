import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Roomshitesaliva = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const highlights = [
    {
      image: "/images/rooms/FamilyRoom.mp4",
      title: "Suite",
      description:
      "Enjoy the utmost comfort with cutting-edge amenities, and relax in your own balcony or sit-out patio with tranquil views. Your experience will be elevated by our exceptional",
      exploreLink: "/gurgaon-accommodation",
      bookLink:
      "https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y",
  },
    {
      image: "/images/rooms/StudioRoom.mp4",
      title: "Studio Room",
      description:
        "This elegantly designed space features all modern amenities, including a private balcony/ sit-out area, exquisite wall painting and a fully-equipped kitchenette with a dishwasher",
        exploreLink: "/gurgaon-accommodation",
        bookLink:
        "https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y",
    },
    {
      image: "/images/rooms/DeluxeRoom.mp4",
      title: "Deluxe Room",
      description:
      "Experience the epitome of luxury in our Deluxe Rooms, where each room features plush king-sized or twin beds, a private balcony or sit-out area, and all the modern amenities",
      exploreLink: "/gurgaon-accommodation",
      bookLink:
      "https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y",
  },
    {
      image: "/images/rooms/ExecutiveRoom.mp4",
        title: "Executive Room",
        description:
        "Indulge in the lavish comfort of a plush king-sized or twin bed, complete with all the modern amenities designed to cater to your every whim. Immerse yourself in exquisite",
        exploreLink: "/gurgaon-accommodation",
        bookLink:
          "https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y",
      },
  ];

  return (
    <section className="your-break about-us sec-padding mb-5">
      <div className="container">
        <h2 className="about-us text-center">Rooms & Suites</h2>
        <Slider {...settings} className="slider-container">
  {highlights.map((item, index) => (
    <div key={index} className="winter-box p-1 text-center">
      {item.image.endsWith(".mp4") ? ( // Check if the media is a video
        <video autoPlay loop muted playsInline className="w-100 primary-radius">
          <source src={item.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={item.image} alt={item.title} className="w-100 primary-radius" />
      )}
      <div className="winter-box-content carddd shadow-sm">
        <h3 className="winter-box-heading">{item.title}</h3>
        <p className="winter-box-para card-texttt">{item.description}</p>
        <div className="winter-box-btn">
          <Link href={item.exploreLink} className="box-btn know-more">
            Explore More
          </Link>
          <Link href={item.bookLink} className="box-btn book-noww">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </section>
  );
};

export default Roomshitesaliva;
