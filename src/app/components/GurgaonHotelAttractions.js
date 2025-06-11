'use client';

import React, { useEffect} from 'react';

// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';


import { motion } from "framer-motion";



// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// //import 'bootstrap/dist/css/bootstrap.min.css';

// dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });



const GurgaonHotelAttractions = () => {

//   useEffect(() => {

//     if (typeof window !== 'undefined') {

//         import('bootstrap/dist/js/bootstrap.bundle.min.js');

//         }

//     }, []);

  



  return (

    

    <motion.section className="our-offers mb-5 about-us about-us_attract" >

      



        <motion.div className="container mt-5 gurgaon-attrac" style={{width:"90%"}} 

          initial={{ opacity: 0, y: 0 }}

          animate={{ opacity: 1, y: 0}}

          transition={{ duration: 0.6, delay: 0.6 }}

          viewport={{ once: true }}>

        <div className="new-rj-block " style={{textAlign:"center"}}>

          <h3 className="global-heading inner-hd gurgaon-attrac text-center mtn-at1" >

          Attractions In Gurgaon</h3>

          <p className="content-boxx gurgaon-attrac">Explore the vibrant surroundings of Alivaa Hotels & Resorts, where a wealth of attractions and experiences await just beyond our doors. Our prime location places you within easy reach of the city's most iconic landmarks, cultural sites, and entertainment hubs. Whether you're interested in discovering historical treasures, indulging in local cuisine, or enjoying outdoor adventures, there's something for everyone. Let Alivaa Hotels & Resorts be your gateway to the attractions in Gurgaon, delivering unforgettable experiences and cherished memories.

             </p>

        </div>

        

        <div className="tab-content mt-3">

            <div className="tab-pane fade show active">

                <div className="special-offers about-us new-rj-block text-center mt-5">

                    <div className="container">

                        

      <div className="col-xs-12 no-pad voffset-2 res-no-margin gururaon-attrac-worldmark-gurgaon">

        <motion.div className="room-block"

        initial={{ opacity: 0,  y: -20, x:-450 }}

        whileInView={{ opacity: 1, x: -200, y: -20 }}

        transition={{ duration: 2 }}>

          

          <img src="/images/attractions/event-pic1.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-20px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info right-block wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -260,x:850 }}

          whileInView={{ opacity: 1, y: -260, x: 200 }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-1" style={{marginLeft:"30px",marginTop:"35px"}}>

          Worldmark Gurgaon

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"30px"}}>

            Worldmark Gurgaon is a premier destination that redefines the urban lifestyle with its blend of luxury, convenience, and vibrant energy. Located in the heart of Gurgaon, this dynamic hub offers a unique mix of high-end retail, gourmet dining, state-of-the-art offices, and entertainment options, all within a sophisticated and stylish setting. Whether you're here to shop, dine, work, or unwind, Worldmark Gurgaon promises an unparalleled experience that caters to every need and desire. Immerse yourself in a world of elegance and innovation, where every visit is a journey of discovery and delight.

            </p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>

      

      <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool">

        <motion.div className="room-block"

          initial={{ opacity: 0, y: 50 ,x: 350}}

          whileInView={{ opacity: 1,y: 50 , x: 230 }}

          transition={{ duration: 2 }}>

          

          <img src="/images/attractions/event-pic2.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info right-block m3m wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -250 ,x: -50}}

          whileInView={{ opacity: 1, y: -250, x: -750 }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-1" style={{marginLeft:"30px",marginTop:"35px"}}>

          M3M IFC

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"30px"}}>

            A timeless concept for contemporary business, M3M IFC is set to speak for the dominance of the millennium city as the emerging force in the global market. Get ready for a highly tailored workplace surrounded by retail, restaurants, fast food and entertainment. M3M International Financial Center offers highly tailored workspace customized as per your needs and preferences. They represent the ideal dream workplace, with everything within reach, including restaurants, fast food, retail shops, and entertainment options.

            </p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>

      <div className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool-attrac">

        <motion.div className="room-block"

        initial={{ opacity: 0, y: 100, x:-450 }}

        whileInView={{ opacity: 1, x: -170 , y: 100}}

        transition={{ duration: 2 }}>

          

          <img src="/images/attractions/event-pic3.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info right-block wow fadeInDown animated gymnasuim-para" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -250,x:850 }}

          whileInView={{ opacity: 1, y: -250, x: 180 }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-1" style={{marginLeft:"30px",marginTop:"35px"}}>

          DLF CyberHub Gurgaon

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"30px"}}>

            Experience the epitome of urban sophistication at DLF CyberHub, Gurgaon, a premier lifestyle and entertainment destination that caters to the cosmopolitan spirit. Strategically located in the bustling heart of Gurgaon, CyberHub offers a vibrant mix of world-class dining, high-end retail, and dynamic entertainment options. Whether you're looking to indulge in gourmet cuisines from around the globe, enjoy a night out with friends, or explore cutting-edge retail spaces, DLF CyberHub promises an unparalleled experience. Discover a lively atmosphere where innovation meets elegance, making every visit a memorable journey of culinary and cultural delight.

            </p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

          </motion.div>

        </motion.div>

      </div>

      <div className="col-xs-12 no-pad mb-5 pb-5 voffset-2 res-no-margin electric-vehicle-attrac">

        <motion.div className="room-block"

          initial={{ opacity: 0, y: 150 ,x: 350}}

          whileInView={{ opacity: 1,  y: 150,x: 230 }}

          transition={{ duration: 2 }}>

          

          <img src="/images/attractions/event-pic4.jpg" alt="Accommodation in Gurgaon" className="custom-img-responsive img-thumbnail  wow fadeInUp animated" data-wow-duration="4s" style={{width: "60%", height:"130%",marginLeft:"-70px",visibility: "visible", WebkitAnimationDuration: "4s",  MozAnimationDuration: "4s",  animationDuration: "4s"}}/>

          <motion.div className="room-main-info right-block dlf-golf mb-05 wow fadeInDown animated country-club" data-wow-duration="4s" style={{width:"50%",height:"80%",visibility: "visible", WebkitAnimationDuration: "6s",  MozAnimationDuration: "6s",  animationDuration: "6s"}}

          initial={{ opacity: 0, y: -250 ,x: -1150}}

          whileInView={{ opacity: 1, y: -250, x: -750  }}

          transition={{ duration: 2 }}>

          <h3 className="global-heading-1" style={{marginLeft:"30px",marginTop:"35px", marginBottom:"35px"}}>

          DLF Golf & Country Club

            </h3>

            <p className="text-two text-justify" style={{fontSize:"14px",marginLeft:"30px"}}>

            Welcome to DLF Golf & Country Club, a sanctuary of luxury and tranquility set amidst the lush landscapes of Gurgaon. Renowned for its world-class facilities and exceptional service, the club offers an unparalleled golfing experience on its meticulously designed courses. Whether you are an avid golfer or seeking a serene retreat, DLF Golf & Country Club provides an exquisite environment with state-of-the-art amenities, including fine dining, wellness facilities, and exclusive events.

            </p>

            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}

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



export default GurgaonHotelAttractions;