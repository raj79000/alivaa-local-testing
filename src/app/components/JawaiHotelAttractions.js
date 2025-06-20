'use client';
import React, { useEffect } from 'react';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
const JawaiHotelAttractions = () => {
  return (
    <motion.section className="our-offers mb-5 about-us about-us_attract" >
      <motion.div className="container mt-5 gurgaon-attrac" style={{ width: "90%" }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}>
        <div className="new-rj-block " style={{ textAlign: "center" }}>
          <h1 className="global-heading inner-hd gurgaon-attrac text-center mtn-at1" >
            Explore Attractions Around Jawai Palash Resort</h1>
          <p className="content-boxx gurgaon-attrac">Culture, tradition and landscapes of Rajasthan immerse you in the spirit of the place when you visit Jawai. Every moment at Jawai Palash is carefully chosen to capture the strength, warmth, and beauty of the rugged, dusty land.
          </p>
        </div>
        <div className="tab-content mt-3">
          <div className="tab-pane fade show active">
            <div className="special-offers about-us new-rj-block text-center mt-5">
              <div className="container">
                <div className="col-xs-12 no-pad voffset-2 res-no-margin gururaon-attrac-worldmark-gurgaon">
                  <motion.div className="room-block"
                    initial={{ opacity: 0, y: -20, x: -450 }}
                    whileInView={{ opacity: 1, x: -200, y: -20 }}
                    transition={{ duration: 2 }}>
                    <img src="/jawai-img/attraction-wildlif.jpeg" alt="jawai attractions" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{ width: "60%", height: "130%", marginLeft: "-20px", visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }} />
                    <motion.div className="room-main-info right-block wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{ width: "50%", height: "80%", visibility: "visible", WebkitAnimationDuration: "6s", MozAnimationDuration: "6s", animationDuration: "6s" }}
                      initial={{ opacity: 0, y: -260, x: 850 }}
                      whileInView={{ opacity: 1, y: -260, x: 200 }}
                      transition={{ duration: 2 }}>
                      <h3 className="global-heading-1" style={{ marginLeft: "30px", marginTop: "35px" }}>
                        Wildlife Safari 
                      </h3>
                      <p className="text-two text-justify" style={{ fontSize: "14px", marginLeft: "30px" }}>
                        With wildlife safaris guided by people who have lived with the leopards their whole lives, you have the chance to encounter the elusive leopards of Jawai in their natural habitat. Using our custom-built 4×4 jeeps with expert guides, we take you deep into the wild during early hours of the day. While you’ll certainly get to admire a tremendous array of majestic predators and migratory birds, this immersive journey will also bring you face to face with the spirit of Jawai’s people.
                      </p>
                      {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool">
                  <motion.div className="room-block"
                    initial={{ opacity: 0, y: 50, x: 350 }}
                    whileInView={{ opacity: 1, y: 50, x: 230 }}
                    transition={{ duration: 2 }}>
                    <img src="/jawai-img/attraction-trekkin.jpeg" alt="jawai attractions" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{ width: "60%", height: "130%", marginLeft: "-70px", visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }} />
                    <motion.div className="room-main-info right-block m3m wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{ width: "50%", height: "80%", visibility: "visible", WebkitAnimationDuration: "6s", MozAnimationDuration: "6s", animationDuration: "6s" }}
                      initial={{ opacity: 0, y: -250, x: -50 }}
                      whileInView={{ opacity: 1, y: -250, x: -750 }}
                      transition={{ duration: 2 }}>
                      <h3 className="global-heading-1" style={{ marginLeft: "30px", marginTop: "35px" }}>
                       Hiking Trails
                      </h3>
                      <p className="text-two text-justify" style={{ fontSize: "14px", marginLeft: "30px" }}>
                        Embark on a hike with our curated hiking experiences and explore the scenic countryside on foot. Whether you prefer leisurely village walks or rocky hill treks, Jawai has a trail to suit. Learn about historically important ruins, nomadic shepherds, and even hidden temples etched into the Jawai landscape with local guides. A great place to stretch your legs and (literally) your perspective.
                      </p>
                      {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool-attrac">
                  <motion.div className="room-block"
                    initial={{ opacity: 0, y: 100, x: -450 }}
                    whileInView={{ opacity: 1, x: -170, y: 100 }}
                    transition={{ duration: 2 }}>
                    <img src="/jawai-img/attraction-templetrail.jpeg" alt="jawai attractions" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{ width: "60%", height: "130%", marginLeft: "-70px", visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }} />
                    <motion.div className="room-main-info right-block wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{ width: "50%", height: "80%", visibility: "visible", WebkitAnimationDuration: "6s", MozAnimationDuration: "6s", animationDuration: "6s" }}
                      initial={{ opacity: 0, y: -250, x: 850 }}
                      whileInView={{ opacity: 1, y: -250, x: 180 }}
                      transition={{ duration: 2 }}>
                      <h3 className="global-heading-1" style={{ marginLeft: "30px", marginTop: "35px" }}>
                        Dev Giri Temple
                      </h3>
                      <p className="text-two text-justify" style={{ fontSize: "14px", marginLeft: "30px" }}>
                        Jawai region is dotted with temples, shrines, and other such pillars of Rajasthani culture. One such temple is Dev Giri Temple, located at a distance of 15 km from the resort. If you take a look at the structure of this temple, you will be bedazzled to see its unique architecture and idyllic location. The temple is dedicated to local goddess Ashapura Mata Ji, who, according to locals, is the heavenly caretaker of every living being in this region, from the leopards to the Rabari tribes.
                      </p>
                      {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-xs-12 no-pad mb-5 pb-5 voffset-2 res-no-margin electric-vehicle-attrac">
                  <motion.div className="room-block"
                    initial={{ opacity: 0, y: 150, x: 350 }}
                    whileInView={{ opacity: 1, y: 150, x: 230 }}
                    transition={{ duration: 2 }}>
                    <img src="/jawai-img/attractionjawai-dam.png" alt="jawai attractions" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{ width: "60%", height: "130%", marginLeft: "-70px", visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }} />
                    <motion.div className="room-main-info right-block dlf-golf mb-05 wow fadeInDown animated country-club" data-wow-duration="4s" style={{ width: "50%", height: "80%", visibility: "visible", WebkitAnimationDuration: "6s", MozAnimationDuration: "6s", animationDuration: "6s" }}
                      initial={{ opacity: 0, y: -250, x: -1150 }}
                      whileInView={{ opacity: 1, y: -250, x: -750 }}
                      transition={{ duration: 2 }}>
                      <h3 className="global-heading-1" style={{ marginLeft: "30px", marginTop: "35px", marginBottom: "35px" }}>
                        Jawai Dam
                      </h3>
                      <p className="text-two text-justify" style={{ fontSize: "14px", marginLeft: "30px" }}>
                        One of the must-visit nearby attractions is the majestic Jawai Dam, a serene oasis nestled amidst rugged terrains and lush surroundings. Known for its tranquil waters and scenic beauty, the dam is a haven for birdwatchers, teeming with diverse bird species that add life to its calm ambiance. Whether you're soaking in the breathtaking views of Aravalli hills reflected in the still waters, or simply enjoying a peaceful moment by the lakeside, Jawai Dam offers an unforgettable experience that beautifully complements the wild charm of the region.
                      </p>
                      {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                    </motion.div>
                  </motion.div>
                </div>

                <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool-attrac">
                  <motion.div className="room-block"
                    initial={{ opacity: 0, y: 100, x: -450 }}
                    whileInView={{ opacity: 1, x: -170, y: 100 }}
                    transition={{ duration: 2 }}>
                    <img src="/jawai-img/attraction-communitywal.jpeg" alt="jawai attractions" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{ width: "60%", height: "130%", marginLeft: "-70px", visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }} />
                    <motion.div className="room-main-info right-block wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{ width: "50%", height: "80%", visibility: "visible", WebkitAnimationDuration: "6s", MozAnimationDuration: "6s", animationDuration: "6s" }}
                      initial={{ opacity: 0, y: -250, x: 850 }}
                      whileInView={{ opacity: 1, y: -250, x: 180 }}
                      transition={{ duration: 2 }}>
                      <h3 className="global-heading-1" style={{ marginLeft: "30px", marginTop: "35px" }}>
                        Rabari Community Walk
                      </h3>
                      <p className="text-two text-justify" style={{ fontSize: "14px", marginLeft: "30px" }}>
                        Join Rabari tribespeople, Jawai’s traditional and landscape caretakers, in a Walk. Here you'll follow in their ancient trails as they herd their livestock, share stories of the land, and escort you to your next wildlife sighting or hidden cultural gem. A unique insight into the life of Rajasthan's pastoral communities, this is a surreal encounter.
                      </p>
                     </motion.div>
                  </motion.div>
                </div>

                <div className="col-xs-12 no-pad mb-5 pb-5 voffset-2 res-no-margin electric-vehicle-attrac">
                  <motion.div className="room-block"
                    initial={{ opacity: 0, y: 150, x: 350 }}
                    whileInView={{ opacity: 1, y: 150, x: 230 }}
                    transition={{ duration: 2 }}>
                    <img src="/jawai-img/attraction-nightgazin.jpeg" alt="jawai attractions" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{ width: "60%", height: "130%", marginLeft: "-70px", visibility: "visible", WebkitAnimationDuration: "4s", MozAnimationDuration: "4s", animationDuration: "4s" }} />
                    <motion.div className="room-main-info right-block dlf-golf mb-05 wow fadeInDown animated country-club" data-wow-duration="4s" style={{ width: "50%", height: "80%", visibility: "visible", WebkitAnimationDuration: "6s", MozAnimationDuration: "6s", animationDuration: "6s" }}
                      initial={{ opacity: 0, y: -250, x: -1150 }}
                      whileInView={{ opacity: 1, y: -250, x: -750 }}
                      transition={{ duration: 2 }}>
                      <h3 className="global-heading-1" style={{ marginLeft: "30px", marginTop: "35px", marginBottom: "35px" }}>
                        Stargazing
                      </h3>
                      <p className="text-two text-justify" style={{ fontSize: "14px", marginLeft: "30px" }}>
                        The minimal light pollution allows Jawai Bandh to make it to the list of India’s best places for stargazing. Orion and Ursa Major appear at their very best while they glimmer in the sky of night. Our open skies promise celestial magic—whether you’re an amateur stargazer or a seasoned enthusiast. Lie back under a canopy of stars and let the serenity of the skies embrace you.
                      </p>
                      </motion.div>
                  </motion.div>
                </div>




              </div>
            </div>
          </div>
        </div>
        <br></br>
      </motion.div>
    </motion.section>
  );
};
export default JawaiHotelAttractions;