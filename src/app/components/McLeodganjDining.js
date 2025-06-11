'use client';

import { useState } from "react";

import "../../app/styles/alivaadining.css";


const McLeodganjDining = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: 'alivaa-mcleodganj-dine',
    web_source: 'alivaahotels.com',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10-15 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.no_of_guest) {
      newErrors.no_of_guest = 'Number of guests is required';
    } else if (+formData.no_of_guest < 0 || +formData.no_of_guest > 99) {
      newErrors.no_of_guest = 'Guests should be between 1 and 999';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');
  
    if (!validate()) {
  
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch('https://demo.cinuniverse.com/alivaa/dine-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.status === 'success') {
        setResponseMsg(result.message || 'Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          date: '',
          no_of_guest: '1',
          source_enquiry: 'alivaa-mcleodganj-dine',
          web_source: 'alivaahotels.com',
        });
      } else {
        setResponseMsg(result.message || 'Submission failed!');
      }
    } catch (err) {
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setResponseMsg(''), 5000);
    }
  };
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

    <div className="modal-body dining-form">
    {responseMsg && (
  <div className="text-center mt-3">
    <p className="text-success">{responseMsg}</p>
  </div>
)}

  <form onSubmit={handleSubmit} noValidate>
    <div className="form-group">
      <input
        type="text"
        name="name"
        maxLength={100}
        className="form-control emptycls"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <small className="text-danger">{errors.name}</small>}
    </div>

    <div className="form-group">
      <input
        type="email"
        name="email"
        maxLength={100}
        className="form-control emptycls"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <small className="text-danger">{errors.email}</small>}
    </div>

    <div className="form-group">
      <input
        type="tel"
        name="phone"
        maxLength={10}
        className="form-control emptycls"
        placeholder="Enter Mobile No."
        value={formData.phone}
        onChange={handleInputChange}
      />
      {errors.phone && <small className="text-danger">{errors.phone}</small>}
    </div>

  
    <div className="form-group">
      <input
type="date"
name="date"
className="form-control emptycls"
id="edateId"
value={formData.date}
onChange={handleInputChange}
min={new Date().toISOString().split('T')[0]} // 👈 prevents past dates
/>
      {errors.date && <small className="text-danger">{errors.date}</small>}
    </div>

    <div className="form-group">
      <input
        type="number"
        name="no_of_guest"
        max={999}
        min={1}
        className="form-control emptycls"
        placeholder="No. of Guests"
            value={formData.no_of_guest}
onChange={(e) => {
if (e.target.value.length <= 2) handleInputChange(e);
}}

      />
      {errors.no_of_guest && <small className="text-danger">{errors.no_of_guest}</small>}
    </div>

<div className="form-group">
      <textarea
        name="message"
        rows="3"
        maxLength={1000}
        className="form-control emptycls"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      />
      {errors.message && <small className="text-danger">{errors.message}</small>}
    </div>

    <div className="text-center mt-3">
      <button type="submit" className="btn btn-primary hoften" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
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