'use client';



import { useEffect, useRef } from "react";

import Swiper from "swiper";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { motion } from "framer-motion";

import Link from "next/link";

////import 'bootstrap/dist/css/bootstrap.min.css';





const ExperienceSlider = () => {

    const swiperRef = useRef(null);

  

    useEffect(() => {

      // if (!swiperRef.current) 

      //   {return;}

      if (typeof window !== 'undefined') {

        // import('bootstrap/dist/js/bootstrap.bundle.min.js');



      new Swiper(swiperRef.current, {

        loop: true,

        spaceBetween: 10,

        centeredSlides: true,

        slidesPerView: "auto",

        navigation: {

          nextEl: ".swiper-button-next",

          prevEl: ".swiper-button-prev",

        },

        breakpoints: {

          0: { slidesPerView: 1, spaceBetween: 0 },

          300: { slidesPerView: 1, spaceBetween: 0 },

          450: { slidesPerView: 1, spaceBetween: 0 },

          600: { slidesPerView: 2, spaceBetween: 0 },

          800: { slidesPerView: 2.5, spaceBetween: 0 },

          1000: { slidesPerView: 2.5, spaceBetween: 0 },

          1200: { slidesPerView: 2.9, spaceBetween: 50 },

          1400: { slidesPerView: 3.2, spaceBetween: 100 },

          1600: { slidesPerView: 3, spaceBetween: 5 },

          1800: { slidesPerView: 3, spaceBetween: 0 },

        },

        modules: [Navigation],

      });

    }

    }, []);

  

    return (

      <section className="experience-section about-us">

        <div className="new-rj-block">

          <h2 className="about-us text-center">Experiences</h2>

        </div>

  

        <h3 className="absolute-experience">EXPERIENCES</h3>



        <motion.div

                      className="swiper experience-slider"

                      initial={{ opacity: 0, x: -50 }}

                      whileInView={{ opacity: 1, x: 0 }}

                      transition={{ duration: 0.6,  delay:0.10 }} ref={swiperRef}>

          <div className="swiper-wrapper">

            <div className="swiper-slide">

              <img src="/images/experience-h-1.webp" alt="Heritage Transport Museum" className="w-full" />

              <div className="inner">

                <p className="category" data-toggle="modal" data-target="#heritage-museum">Read more</p>

                <Link href="#">Heritage Transport Museum</Link>

              </div>

            </div>

  

            <div className="swiper-slide">

              <img src="/images/experience-h-2.webp" alt="Cyberhub" className="w-full" />

              <div className="inner">

                <p className="category" data-toggle="modal" data-target="#cyberhub">Read more</p>

                <Link href="#">Cyberhub</Link>

              </div>

            </div>

  

            <div className="swiper-slide">

              <img src="/images/experience-h-3.webp" alt="Ambience Mall" className="w-full" />

              <div className="inner">

                <p className="category" data-toggle="modal" data-target="#ambience-mall">Read more</p>

                <Link href="#">Ambience Mall</Link>

              </div>

            </div>

  

            <div className="swiper-slide">

              <img src="/images/serene-copy.jpg" alt="Damdama Lake" className="w-full" />

              <div className="inner">

                <p className="category" data-toggle="modal" data-target="#damdama-lake">Read more</p>

                <Link href="#">Damdama Lake</Link>

              </div>

            </div>

  

            <div className="swiper-slide">

              <img src="/images/experience-new-11.webp" alt="F9 Go Karting" className="w-full" />

              <div className="inner">

                <p className="category" data-toggle="modal" data-target="#f9">Read more</p>

                <Link href="#">F9 Go Karting</Link>

              </div>

            </div>

          </div>

  

          {/* Navigation Arrows */}

          <div className="swiper-nav">

            <div className="swiper-button-prev"></div>

            <div className="swiper-button-next"></div>

          </div>  

        </motion.div>

      </section>

    );

  };



  export default ExperienceSlider;