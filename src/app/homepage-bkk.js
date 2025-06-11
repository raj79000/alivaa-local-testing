"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
// Import Link from "next/link";
// import AboutUs from './components/AboutUs';
// import ExperienceSlider from "./components/ExperienceSlider";
// import HotelSlider from './components/HotelSlider';
// import OurOffers from './components/OurOffers';
// import OurBrands from './components/OurBrands';

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { useState } from "react";
import BookNowForm from "./booking-engine-widget/BookNowForm";
import BannerSocial from "./components/BannerSocial";
import Link from "next/link";

const AboutUs = dynamic(() => import("./components/AboutUs"));
const ExperienceSlider = dynamic(() => import("./components/ExperienceSlider"));
const OurOffers = dynamic(() => import("./components/OurOffers"));
const OurBrands = dynamic(() => import("./components/OurBrands"));
const HotelSlider = dynamic(() => import("./components/HotelSlider"));

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <section className="home-hdr-hght">
        <Navbar />
      </section>
      <section className="banner-section">
        <video
          playsInline
          autoPlay
          loop
          muted
          width="93%"
          loading="lazy"
          preload="none"
          className="banner-img-home myvideo web-video desk-video"
        >
          <source src="/images/new-home-video.mp4" type="video/mp4" />
        </video>

        <video
          playsInline
          autoPlay
          loop
          muted
          loading="lazy"
          preload="none"
          className="banner_img_room myvideo pt-0 web-video mob-video"
        >
          <source src="/mobile-video/home_mob_vd.mp4" type="video/mp4" />
        </video>

       <BannerSocial></BannerSocial>
        <span className="updown-arrow">
          <Image src="/images/down-arrow.png" height={100} width={100} alt="down-arrow" />
        </span>
        {!isVisible && <div className="content-section w-80"></div>}
      </section>

      <section className="booking-form-section">
        <BookNowForm />
      </section>

      <AboutUs />

      <HotelSlider />
      <ExperienceSlider />
      <section className="sectiontop mt-5">
        <OurOffers />
      </section>

      <OurBrands />

      <motion.section
        className="experience-section about-us media-n-news media-news"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.14 }}
      >
        <div className="container">
          <div className="new-rj-block">
            <h2 className="about-us text-center">Media & News</h2>
          </div>
          <div className="row media-box">
            <div className="col-lg-4 col-md-4">
              <div className="media-item">
                <Link href="https://hopeconference.in/vikramjit/">
                  <Image
                    src="/images/media-1-image.jpg"
                    className="w-100"
                    alt="media-1"
                    height="200"
                    width="300"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="media-item">
                <Link href="https://www.livemint.com/industry/hotel-chains-alivaa-hotels-lemon-tree-hotels-cygnett-hotels-chalet-hotels-itc-ihcl-makemytrip-brij-hospitality-11736658069735.html">
                  <Image
                    src="/images/media-image-1.jpg"
                    className="w-100"
                    alt="media-1"
                    width={300}
                    height={200}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="media-item">
                <Link href="https://hospitality.economictimes.indiatimes.com/news/hotels/the-year-has-taken-off-on-a-good-note-vikramjit-singh/94292358">
                  <Image
                    src="/images/media-image-2.jpg"
                    className="w-100"
                    alt="media-1"
                    width={300}
                    height={200}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
