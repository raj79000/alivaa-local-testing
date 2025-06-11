



"use client";

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

const McHotelExtended  = ()=>{



    return (

    

    <motion.section initial={{ opacity: 0, y: -500 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay: 0.6 }} >

      <motion.div className="col-12" initial={{ opacity: 0, y: -50 }}

    whileInView={{ opacity: 1, y: -50 }}

    transition={{ duration: 0.6, delay: 0.6 }}>
<p className="content-boxx mt-5">
Our in-house restaurant serves a generous breakfast to hotel guests each morning where they can enjoy mountain-fresh air and natural forest sounds. Travellers will find it simple to reach nearby destinations because this hotel is positioned well near local cultural sites and Tibetan markets. Experience elegance at Alivaa Hotel, where you can discover genuine peace along with sincere hospitality above the hills.
</p>
          <h4 className="inner-hd">Accommodation</h4>
<p className="content-boxx">Waking up to see the Dhauladhar mountain range is a magical experience, and that’s exactly what you get by staying in the best hotel in McLeodganj, Dharamshala. The boutique concept at this establishment presents 18 individual rooms that create peaceful havens among the hills. As you enter through the doors, you feel a sense of relaxation which stems from the hotel’s concept of —nothing too flashy, but just well-crafted areas.
</p>
          <p className="content-boxx" style={{textAlign: "justify", marginTop: "none"}}>If you are looking for basic amenities and a peaceful setting, choose one of Alivaa Hotel's Deluxe Rooms, which are 14 in total. Apart from being comfortable and clean, these accommodations provide amazing mountain and temple views from Dalai Lama Temple. Want a little more room? The Super Deluxe Rooms provide guests with personal balconies and extended floor layouts which make them suitable for longer accommodations. The Premium Rooms are available in only two units and provide visitors with the largest available accommodations for added comfort.
          For guests staying in any one of the rooms will have access to high-speed internet, a smart TV, a minibar and a coffee maker, along with air conditioning and additional convenience features.  



          </p>

      </motion.div>

      

      <motion.div className="col-12" initial={{ opacity: 0, y: -100 }}

    whileInView={{ opacity: 1, y: -80}}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Our Cafe</h4>

          <p className="content-boxx" style={{textAlign: "justify"}}>Alivaa presents food as something that enhances the guest experience instead of serving as mere nourishment. You will find a dining area that provides a relaxed atmosphere while offering regional cuisine as well as traditional dishes. The dining atmosphere at Alivaa feels perfect whether you choose to begin your day by eating warm breakfast or close your day with a hot meal under the night sky.


          </p>
          <p className="content-boxx" style={{textAlign: "justify"}}>The kitchen team at Alivaa maintains a commitment to prepare every dish from scratch with fresh ingredients that come from local vendors whenever available. This restaurant in McLeodganj offers comforting Indian curries alongside easy-to-enjoy international meals. The kitchen staff will take care of customising the menu according to your dietary requirements and food preferences. You can take advantage of in-room dining service to enjoy private dining that will be even more enjoyable when combined with mountain views.
          </p>

      </motion.div>

      <motion.div className="col-12" initial={{ opacity: 0, y: -120 }}

    whileInView={{ opacity: 1, y: -100 }}

    transition={{ duration: 0.6, delay: 0.6 }}>

          <h4 className="inner-hd">Wellness and Relaxation</h4>

          <p className="content-boxx">There’s something about the mountain air in Dharamshala that already feels like therapy—but Alivaa Hotel takes that sense of peace a step further with its wellness offerings. 

          </p>
          <p className="content-boxx">Start with a swim—there’s a well-maintained swimming pool on the property, perfect for a few morning laps or a lazy afternoon float with the mountains watching over you. It’s not massive, but it’s clean, peaceful, and almost always quiet. After that, you can step into the spa, where trained therapists offer relaxing massages and wellness treatments using natural, soothing ingredients. Tired legs from all the hill walks? They’ve got you covered.
          </p>
          <p className="content-boxx"  style={{textAlign: "justify",marginBottom:"-80px"}}>And if you’re in the mood to just let go of all that tension, the sauna is right there—warm, quiet, and absolutely rejuvenating. Alivaa, with its unique wellness experience, turns out to be one of the best hotels with swimming pools in Mcleodganj, Dharamshala.
          </p>

      </motion.div>

    

</motion.section>)

}

export default McHotelExtended ;