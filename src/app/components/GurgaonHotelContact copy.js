"use client";

import "../../app/styles/inner.css";
import { useState } from "react";
import { motion } from "framer-motion";



const GurgaonHotelContact = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
     source_enquiry: 'hoften-gurugram-contact-us', // ✅ Fixed mandatory value
      web_source: 'alivaahotels.com',              // ✅ Fixed mandatory value
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');


    try {
      const response = await fetch('https://demo.cinuniverse.com/alivaa/contact-mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMsg(result.message || 'Something went wrong.');
    } catch (error) {
      setResponseMsg('Error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };


    return (

        <motion.section className="our-offers contact-us" style={{width: "80%", marginBottom:"-30px"}}

        initial={{ opacity: 0, x: -50 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.6,  delay:0.12 }}>

        <motion.div className="container mt-5"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

        <div className="col-lg-12 col-xs-12 voffset-5 contactus-section">

        <div className="row text-center verticalTop" style={{ marginLeft: "5px"}}>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons">

                    <img src="images/map-icon.svg" alt="social-icon" className="social-icon" style={{marginLeft:"0px", marginTop: "-10px",marginBottom:"20px", width:"48px"}}/>

                </span>

                <h6 style={{fontSize: "20px"}}>Address</h6>

                <p style={{fontSize: "14px",color:"#000"}}><a href="https://maps.app.goo.gl/wUQepQG85dWxhncL7" target="_blank"> Spaze Boulevard II, Badshahpur Sohna Rd Hwy, Malibu Town, Sector 47, Gurugram, Haryana- 122001</a></p>

               

            </motion.div>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInDown animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons">

                  <img src="images/phone-icon.svg" alt="social-icon" className="social-icon"  style={{marginLeft:"7px",marginTop:"-2px"}} />

                </span>

                <h6 style={{fontSize: "20px"}}>Phone Number</h6>

                <p style={{fontSize: "14px",color:"#00a3e0"}}><a href="tel:+911244170000">+91 124 4170000</a></p>

            </motion.div>

            <motion.div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                <span className="contact-icons">

                    <img src="images/mail-icon.svg" alt="social-icon" className="social-icon" style={{marginLeft:"8px",marginTop:"-2px"}} />

                </span>

                <h6 style={{fontSize: "20px"}}>Email Address</h6>

                <p style={{fontSize: "14px",color:"#00a3e0"}}><a href="mailto:stayalive@alivaahotels.com">stayalive@alivaahotels.com</a></p>

            </motion.div>

        </div>

      </div>

      </motion.div>

      <div className="col-xs-12 no-pad voffset-3 color-dark" id="cont-form">

        <hr></hr>

      </div>

      

      <motion.div className="container mt-4"

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

      <div className="col-lg-12 col-xs-12 contactus-form voffset-3">

        <motion.div className="row mb-5" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

                    

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" >

          <div className="row" >

          <h2 style={{fontSize: "20px", color: "black"}}>Contact us</h2>

             <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input type="text" name="name" placeholder="Name" required onChange={handleChange} className="w-full p-2 border" />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border" />
      <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} className="w-full p-2 border" />
      <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} className="w-full p-2 border" />
      <textarea name="message" placeholder="Message" required onChange={handleChange} className="w-full p-2 border" />

      <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2">
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {responseMsg && <p className="mt-2 text-green-600">{responseMsg}</p>}
    </form> 

			     </div>

        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 wow fadeInRight animated" data-wow-duration="4s" >

          <div className="row" >

            <div className="col">

				<h2 style={{fontSize: "20px", color: "black"}}> Location</h2>

            </div>

			 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0253248766794!2d77.03770407469985!3d28.41849269376977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229c15fbf0c5%3A0x14ca65f09ab743f!2sAlivaa%20Hotel%20Gurugram%20Sohna%20Road%20City%20Center!5e0!3m2!1sen!2sin!4v1719313653024!5m2!1sen!2sin" width="100%" height="320"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

			</div>

        </div>



        </motion.div>

      </div>

      </motion.div>

  

    </motion.section>

    )

}

export default GurgaonHotelContact