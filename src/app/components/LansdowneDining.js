'use client';

import { useState } from "react";
import Image from "next/image";

import "../../app/styles/alivaadining.css";


const LansdowneDining = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    no_of_guest: '',
    source_enquiry: 'alivaa-lansdowne-dine',
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
          source_enquiry: 'alivaa-lansdowne-dine',
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
          <Image src="/lansdowne-img/restaurant-image.jpg" height={500} width={500} alt="image" className="w-100" />
          {/* <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
              <source src="/images/dining/CafeStaywoke.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
        </div>

        {/* Right Column (Text) */}
        <div className="col-md-5 space_in d-flex flex-column justify-content-center">
          <h2 className="inner-head mt-5">Viceroy Restaurant – Multi-Cuisine</h2>
          <p className="mb-2">
          All guests craving authentic Indian dishes, continental masterpieces or local regional cuisine can enjoy their meals in the warm ambiance of Viceroy Restaurant in Lansdowne. Enjoy your meals with stunning views that enhance the dining experience.
          </p>
      
   

          <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
        </div>
      </div>

      <div className="row bg-light bg-gradient align-items-center mt-3" data-aos="fade-in" data-aos-easing="ease-in-sine">
        {/* Left Column (Image) */}
      

        {/* Right Column (Text) */}
        <div className="col-md-5 space_in d-flex flex-column justify-content-center">
          <h2 className="inner-head mt-5">Bar & Lounge (Upcoming)</h2>
          <p className="mb-2">
          The Bar & Lounge offers guests a chance to relax while they enjoy drinks along with light snacks in a peaceful environment.
          </p>
      
          <a className="alivactacolor box-btn  bg_green rounded-0 btn btn-dark mt-3 auto-width-btn" data-bs-toggle="modal" data-bs-target="#banquet-enquiry">Enquire Now</a>
        </div>

        <div className="col-md-7">
          {/* <img className="img-fluid" src="images/blog/cafeteria-alivaa.webp" alt="image" /> */}
          <Image src="/lansdowne-img/bar-and-launge.jpg" height={500} width={500} alt="image" className="w-100" />
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

export default LansdowneDining;