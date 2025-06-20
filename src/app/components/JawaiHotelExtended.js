"use client";
import "../../app/styles/inner.css";
import { motion } from "framer-motion";
const JawaiHotelExtended = () => {
  return (
    <motion.section initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }} >
      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: -50 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <h4 className="inner-hd">Accommodation</h4>
        <p className="content-boxx">Our accommodation in Jawai is a mix of comfort, character and authentic cultural essence with interiors that combine the old world design with a serene landscape.</p>
        <div className="content-boxx">
          <ul className="ul-for-jawai-overview text-start pl-3">
            <li>Our Villa with Private Jacuzzi and a separate living/dining area includes a private verandah where you can relax and unwind in your spare time.</li>
            <li>Constructed out of mud, our Mud Houses allow you to set a foot in the past, with a design inspired by the traditional architecture of the local Rabari community. Again, with all modern amenities like an espresso maker and verandahs looking out onto a rock garden. </li>
            <li>Our Villa with a private patio has an Indian-style verandah, excellent for relaxation. The décor meets indulgence in the refined comfort of a spacious unit. Each stay offers a true sense of nature, surrounded by the calls of wild birds and the rustle of nearby wildlife. Wake up to serene views and the soothing sounds of untamed beauty right outside your window.</li>
           
          </ul>
        </div>
       
      </motion.div>
      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: -80 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <h4 className="inner-hd">Our Restaurant</h4>
        <p className="content-boxx" style={{ textAlign: "justify" }}>Enjoy an authentic Rajasthani stay inspired by our unique farm-to-table philosophy to awaken true senses of taste and enjoy delicious dishes on your plate. Every meal is cooked with fresh, seasonal vegetables and fruits grown organically on our land, resulting in a dish like no other. We bring local flavours from hand-picked herbs to reimagine the traditional recipes, turning every bite into a celebration. Offering a dining experience anchored to the devout culinary heritage of Jawai, this one-of-a-kind approach makes way for guests to experience the zingy flavours of Rajasthan. 
        </p>
      </motion.div>
      <motion.div className="col-12" initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <h4 className="inner-hd">Meetings & Events</h4>
        <p className="content-boxx" style={{ textAlign: "justify", marginBottom: "-80px" }}>Jawai Palash will allow you to host your celebration or corporate events in unparalleled elegance and ease. Ideal for intimate events, our venue accommodates up to 30 guests comfortably. Our professional hospitality team plans and executes every single event in Jawai smoothly with memorable experiences for you and your guests. We take care of every detail to make sure you have a wonderful time at your special event amidst Jawai’s wild splendour. Our customised décor and personalised service provide the means to make your ideas happen, thereby offering unique events which echo the spirit of Rajasthan. 
        </p>
      </motion.div>
    </motion.section>)
}
export default JawaiHotelExtended;