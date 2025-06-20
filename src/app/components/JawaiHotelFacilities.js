'use client';
import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
const LansdowneHotelFacilities = () => {
  return (
    <>
      <div className="row mb-4">
        <div className="container">
          <section className="our-offers about-us gurgaon-fac"
          >
            <div className="container text-center">
              <h1 className="global-heading-gurgaon inner-hd">
                Facilities in Jawai Palash
              </h1>
              <p className="content-boxx">
                We offer exceptional facilities in Jawai designed to cater to all your needs, ensuring a comfortable and memorable stay.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="room_cs mt-0">
        <div className="container-md p-0 shadow-sm">
          <div className="global-heading-sec text-start">
            <div className="row align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-7">
                <Image src="/jawai-img/jawai-meeting-space.png" height={400} width={500} alt="image" className="w-100" />
              </div>
              <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Meeting Space </h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                  Jawai Palash offers a peaceful and inspiring environment for small corporate meetings and intimate discussions. Designed for quiet productivity, our indoor setting comfortably accommodates up to 30 guests for formal or informal gatherings, team huddles, or creative sessions. With personalized service and thoughtful attention to detail, we ensure every detail is taken care of, creating memorable experiences in a stunning setting.
                </p>
              </div>
            </div>
            <div className="row bg-light bg-gradient align-items-center mt-3" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Indoor Games</h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                  We at Jawai Palash understand how you would want to spend your relaxation and entertainment time during your stay. Although we mainly strive to link you with the raw beauty of Jawai, we also have an indoor leisure space available for our guests. You can enjoy a game of snooker or pool, which is a great way to spend quiet evenings with family or friends. Board games, fussball, etc, are also available for those who enjoy classic indoor fun and friendly competition. These thoughtful additions offer a way to enjoy your time while staying at the resort. 
                </p>
               </div>
              <div className="col-md-7">
                <Image src="/jawai-img/jawai-games.png" height={500} width={500} alt="image" className="w-100" />
              </div>
            </div>

            

            <div className="row align-items-center py-3" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-7">
                <Image src="/jawai-img/fac-bonefire-1.jpeg" height={400} width={500} alt="image" className="w-100" />
              </div>
              <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Bonefire</h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                  With crisp evenings, clear skies, and the soothing sounds of nature, Jawai Palash offers the perfect setting for a memorable bonfire experience. Gather around the gentle warmth of the fire with family or friends, share stories, listen to the night’s silence, or simply gaze at the starlit sky. Every bonfire evening becomes a cherished moment—where the wild, the warmth, and togetherness come alive under the open sky.
                </p>
              </div>
            </div>

            <div className="row bg-light bg-gradient align-items-center mt-3" data-aos="fade-in" data-aos-easing="ease-in-sine">
              <div className="col-md-5 space_in d-flex flex-column justify-content-center">
                <h2 className="inner-head mt-5">Swimming Pool</h2>
                <p className="mb-2 text-justify" style={{ textAlign: 'justify' }}>
                 Surrounded by the serenity of Jawai’s natural landscape, our swimming pool invites you to relax, rejuvenate, and soak up the tranquil vibes of the wilderness. Take a refreshing dip, lounge on the sun deck, or simply enjoy the cool breeze as you unwind by the water’s edge. Whether you seek a quiet swim or peaceful moments under the sun, our pool offers the perfect retreat after a day of adventure.
                </p>
               </div>
              <div className="col-md-7">
                <Image src="/jawai-img/fac-swimming-pool-1.png" height={500} width={500} alt="image" className="w-100" />
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};
export default LansdowneHotelFacilities;