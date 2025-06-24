'use client'; 

import { motion } from "framer-motion";

//import { useEffect, useState } from "react";
import { useState } from "react";
import "../../app/styles/alivaadining.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faWind, faMugHot, faWifi } from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// //import 'bootstrap/dist/css/bootstrap.min.css';

//import { Modal } from "bootstrap"; // Explicitly import Modal

// import dynamic from 'next/dynamic';

// dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });



const McLeodganjDining = ()=>{

  //const [modalInstance, setModalInstance] = useState(null);



  // useEffect(() => {

  //     if (typeof window !== "undefined") { // Ensures it runs in the browser only

  //         const modalElement = document.getElementById("banquet-enquiry");



  //         if (modalElement) {

  //             const instance = new Modal(modalElement, { backdrop: "static", keyboard: false });

  //             setModalInstance(instance);

  //         }

  //     }

  // }, []);

  //   const openModal = () => {

  //       if (modalInstance) modalInstance.show();

  //   };


    const [formData, setFormData] = useState({

        UserId: "",

        name: "",

        email: "",

        subject: "",

        phone: "",

        message: ""

       })



       const [formErrors, setFormErrors] = useState({}); 

       const validateForm = () => {
        let validationErrors = {};
        if (!/^[a-zA-Z ]*$/.test(formData.name)) validationErrors.name = "Only alphabets are allowed.";
        if (!/^[0-9]*$/.test(formData.phone)) validationErrors.phone = "Only numbers are allowed.";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) validationErrors.email = "Wrong email format.";
        
        // if (!formData.email.includes("@")) validationErrors.name = "Email must contain '@'.";
        if (!formData.name.trim()) validationErrors.name = "Name is required.";
        if (!formData.email.trim()) validationErrors.email = "Email is required.";
        if (!formData.subject.trim()) validationErrors.subject = "Subject is required.";
        if (!formData.phone.trim()) validationErrors.phone = "Phone is required.";
        if (!formData.message.trim()) validationErrors.message = "Message is required.";
        return validationErrors;
    };
       const handleInputChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for the current field

      };

      const handleSubmit = (e) => {

        e.preventDefault();
        setFormErrors(null);

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setFormErrors((prev) => (validationErrors));
            return;
        }
      }

    return (

        <>

{/* room */}
<section className="room_cs mt-0">
  <div className="container-md p-0 shadow-sm">
    <div className="global-heading-sec text-start">
      <div className="row align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
        {/* Left Column (Image) */}
        <div className="col-md-7">
          {/* <img className="img-fluid" src="images/blog/cafeteria-alivaa.webp" alt="image" /> */}
          <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
              <source src="/images/dining/CafeStaywoke.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

        {/* Right Column (Text) */}
        <div className="col-md-5 space_in d-flex flex-column justify-content-center">
          <h2 className="inner-head mt-5">Maharaja Restaurant – Multi-Cuisine</h2>
          <p className="mb-2">
          Begin your day with an elaborate breakfast infused with cereals, yoghurts, mixed fruits, and pastries served fresh every morning at our Maharaja Restaurant. The restaurant menu provides a diverse selection because it unites Indian classics with contemporary international dishes. At our establishment everyone can find dishes from butter chicken staples to South Indian idlis alongside Mediterranean pasta options. The chefs operate 24 hours a day to fulfil all of your dining requests whenever you feel hungry. This restaurant in Dharamshala creates an inviting setting and has dedicated staff to deliver royal dining experiences to all guests.
          </p>
      
   

          <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
        </div>
      </div>

      <div className="row bg-light bg-gradient align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
        {/* Left Column (Image) */}
      

        {/* Right Column (Text) */}
        <div className="col-md-5 space_in d-flex flex-column justify-content-center">
          <h2 className="inner-head mt-5">The Sky Garden (Roof Top)</h2>
          <p className="mb-2">
          The Sky Garden restaurant in Dharamshala stands at the peak of the building while providing majestic mountain views, making each meal a memorable experience under the open sky. The rooftop location at this venue provides the perfect setting for romantic evenings plus peaceful sunset views and relaxing breakfast moments since it offers tranquil mountain scenery and refreshing outdoor breezes. Not to forget, we offer an extensive catalogue of local and intermediary delicacies as well.

          </p>
      
   

          <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
        </div>

        <div className="col-md-7">
          {/* <img className="img-fluid" src="images/blog/cafeteria-alivaa.webp" alt="image" /> */}
          <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
              <source src="/images/dining/CafeStaywoke.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

      </div>

      <div className="row align-items-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
        {/* Left Column (Image) */}
      

        {/* Right Column (Text) */}
     

        <div className="col-md-7">
          {/* <img className="img-fluid" src="images/blog/cafeteria-alivaa.webp" alt="image" /> */}
          <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
              <source src="/images/dining/CafeStaywoke.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

        <div className="col-md-5 space_in d-flex flex-column justify-content-center">
          <h2 className="inner-head mt-5">Dine By The Pool </h2>
          <p className="mb-2">
          Experience the magic of mountain dining like never before. At our serene poolside setting, every meal is a sensory delight—paired with cool breezes, stunning Himalayan views, and the calming sound of water. Whether you're enjoying a leisurely breakfast, a romantic dinner, or evening snacks under the stars, our curated menu offers a blend of local flavours and international favourites. Surrounded by nature and elevated by elegance, dining by the pool here is more than a meal—it’s a memory in the making. Unwind, indulge, and let the mountains set the mood.

          </p>
      
   

          <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
        </div>

      </div>

    </div>
  </div>
</section>


<div className="modal fade" id="banquet-enquiry" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">

<div className="modal-dialog" role="document">

  <div className="modal-content">

    <div className="modal-header" style={{textAlign: "left"}}>


      <h6 className="modal-title" id="myModalLabel" >Enquire Now</h6>

      <button style={{textAlign: "right"}} type="button" className="close"

        data-bs-dismiss="modal" aria-label="Close">

          <span aria-hidden="true">×</span></button>

    </div>

    <div className="modal-body">

      <form>

          <div className="form-group">

          <input type="text" name="name" maxLength={100} className="form-control emptycls" id="enameId" placeholder="Enter Name"value={formData.name }

onChange={handleInputChange}/>

{formErrors.name && <div className="text-danger">{formErrors.name}</div>}
        </div>

        <div className="form-group">

          <input type="email" maxLength={100} name="email" className="form-control emptycls" id="eemailId" placeholder="Enter email"value={formData.email || ""}

onChange={handleInputChange}/>
  {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
        </div>

        <div className="form-group">

          <input type="phone" maxLength={10} name="phone" className="form-control emptycls" id="ephoneId" placeholder="Enter Mobile No."value={formData.phone || ""}

onChange={handleInputChange}/>

{formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
        </div>

        <div className="form-group">

          <textarea type="text" maxLength={1000} name="message" rows="3" id="emessageId" className="form-control emptycls" placeholder="Message"value={formData.message || ""}

onChange={handleInputChange}></textarea>

{formErrors.message && <div className="text-danger">{formErrors.message}</div>}
        </div>

        <div className="text-center">

            <button type="button" className="btn btn-primary hoften" id="submitbtn_e" onClick={handleSubmit}>Submit</button>

        </div>

      </form>

      </div>

    </div>

    </div>

  </div>

        </>

    );

}

export default McLeodganjDining;