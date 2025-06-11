"use client";
import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    UserId: "",

    name: "",

    email: "",

    subject: "",

    phone: "",

    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};
    if (!/^[a-zA-Z ]*$/.test(formData.name))
      validationErrors.name = "Only alphabets are allowed.";
    if (!/^[0-9]*$/.test(formData.phone))
      validationErrors.phone = "Only numbers are allowed.";
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    )
      validationErrors.email = "Wrong email format.";

    if (!formData.email.includes("@"))
      validationErrors.name = "Email must contain '@'.";
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    if (!formData.subject.trim())
      validationErrors.subject = "Subject is required.";
    if (!formData.phone.trim()) validationErrors.phone = "Phone is required.";
    if (!formData.message.trim())
      validationErrors.message = "Message is required.";
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
      setFormErrors((prev) => validationErrors);
      return;
    }
  };

  return (
    <>
      <aside className="md-col-4">
        <div className="commerce-side-panel blog-page-contact-form">
          <form
            onSubmit={handleSubmit}
            id="contact"
            name="info_form"
            className="i-amphtml-form"
          >
            <h3>
              <b>Contact Form</b>
            </h3>

            <h4></h4>

            <fieldset>
              <input
                placeholder="Your name"
                maxLength={100}
                name="name"
                type="text"
                tabIndex="1"
                id="name"
                value={formData.name || ""}
                onChange={handleInputChange}
              />

              {formErrors.name && (
                <div className="text-danger">{formErrors.name}</div>
              )}
            </fieldset>

            <fieldset>
              <input
                maxLength={100}
                placeholder="Your Email Address"
                name="email"
                type="email"
                tabIndex="2"
                id="email"
                value={formData.email || ""}
                onChange={handleInputChange}
              />

              {formErrors.email && (
                <div className="text-danger">{formErrors.email}</div>
              )}
            </fieldset>

            <fieldset>
              <input
                placeholder="Your Phone Number"
                maxLength={10}
                name="phone"
                type="tel"
                tabIndex="3"
                id="phone"
                value={formData.phone || ""}
                onChange={handleInputChange}
              />

              {formErrors.phone && (
                <div className="text-danger">{formErrors.phone}</div>
              )}
            </fieldset>

            <fieldset>
              <input
                placeholder="Your Web Site"
                maxLength={100}
                type="text"
                name="subject"
                tabIndex="4"
                id="subject"
                value={formData.subject || ""}
                onChange={handleInputChange}
              />

              {formErrors.subject && (
                <div className="text-danger">{formErrors.subject}</div>
              )}
            </fieldset>

            <fieldset>
              <textarea
                placeholder="Type your message here...."
                maxLength={1000}
                name="message"
                tabIndex="5"
                id="message"
                value={formData.message || ""}
                onChange={handleInputChange}
              ></textarea>
              {formErrors.message && (
                <div className="text-danger">{formErrors.message}</div>
              )}
            </fieldset>

            <fieldset>
              <button
                name="submit"
                className="contactSubmit"
                type="submit"
                id="contact-submit"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>

        {/* <div className="mt-3 mx1">
          <fieldset className="content-boxx text-center">
            <div className="mt-3" id="archives">
              <a href="/new-year-celebration-gurgaon" className="archive-link">
                Celebrate The New Year In Luxury At Alivaa Hotels, Gurgaon
              </a>

              <a
                href="/hotel-near-medanta-hospital-gurgaon"
                className="archive-link"
              >
                Hotel Near Medanta Hospital, Gurgaon
              </a>

              <a
                href="restaurants-near-huda-city-centre"
                className="archive-link"
              >
                Discover Restaurants Near Huda City Centre
              </a>

              <a href="best-hotels-near-sector-45" className="archive-link">
                Finding The Best Hotels Near Sector 45, Gurgaon: A Complete
                Guide
              </a>

              <a href="best-hotel-deals-in-gurugram" className="archive-link">
                Finding The Best Hotel Deals In Gurugram
              </a>

              <a href="/gurugram-hotel-deal" className="archive-link">
                Gurugram Hotel Deal: How To Book A Great Stay In Gurugram
              </a>

              <a href="places-to-visit-in-gurgaon" className="archive-link">
                Must-see Places In Gurgaon: A Guide To The City's Highlights
              </a>
            </div>
          </fieldset>
        </div> */}
      </aside>
    </>
  );
};

export default ContactForm;