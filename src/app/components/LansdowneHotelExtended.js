



"use client";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

const LansdowneHotelExtended = ()=>{



    return (

    

    <motion.section initial={{ opacity: 0, y: -500 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }} >

      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: -50 }}

    transition={{ duration: 0.6, delay: 0.6 }}>
<br/>
      <p className="content-boxx mt-5">
        Enjoy the combination of upscale service and exceptional convenience in the best hotel in Lansdowne area. The hotel sits perfectly on Lansdowne main road to provide smooth town access while customers enjoy secluded natural surroundings.
      </p>
      <p className="content-boxx">
        Alivaa Hotel brand dedicates its mission to crafting life-touching and memorable guest interactions. We create an exquisite lodging arena which enables guests to relax while reconnecting with nature as they savour the environment's subtle elegance. We offer elegant design and genuine hospitality and serve as a portal to Lansdowne's distinctive appeal and the Himalayan mountains.

      </p>

<h4 className="inner-hd">Accommodation</h4>
<p className="content-boxx">Alivaa offers 27 well-designed rooms that offer comfortable accommodation features with the added benefit of private balcony access providing stunning Himalayan panorama views. The Super Deluxe and Deluxe rooms show their scenic side by displaying valley views, while Premium rooms deliver panoramic highest points. Guests booking Rooftop Cottages gain access to expansive outdoor terraces that become the perfect spot for enjoying the mountain breeze. Every room at our hotel provides premium accommodation with amenities, including free Wi-Fi and sleeping arrangements, amid the Lansdowne city centre. Experience the best stay in Lansdowne, Uttarakhand, amid the mountains.</p>
        
        <h4 className="inner-hd">Facilities</h4>
          <p className="content-boxx" style={{textAlign: "justify", marginTop: "none"}}>Our hotel features various recreational opportunities, including both indoor and outdoor experiences. Our guests can enjoy swimming pool relaxation followed by dining at our multi-cuisine restaurant and lounge bar leisure. We are one of the best hotels in Lansdowne with swimming pool and other facilities. We offer spaces for recreation and relaxation amidst the beautiful surroundings.

          </p>

      </motion.div>

      

      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: -80}}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Gallery</h4>

          <p className="content-boxx" style={{textAlign: "justify"}}>Explore the visual story of Viceroy in the Himalaya. Our gallery showcases the breathtaking panoramic views of Lansdowne and the majestic Himalayas, our comfortable and well-appointed rooms with private balconies, the inviting ambiance of our dining spaces, and the serene beauty of our surroundings. Get a glimpse of your tranquil escape.


          </p>

      </motion.div>

      

    

</motion.section>)

}

export default LansdowneHotelExtended;