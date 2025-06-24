import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';  // Importing the menu and close icons
import NavbarOften from "app/components/NavbarOften";
import Link from "next/link";

const HeaderHoften = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if the window width is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsOpen1(false); // Collapse the navbar by default on mobile
      } else {
        setIsMobile(false);
        setIsOpen1(true); // Show the navbar fully on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the desktop navbar visibility
  const toggleNavbar = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <HeaderHoften />
      
      <section className="banner-section">
        <img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/images/hoftenbanner.jpg" />
        
        <div className="social-icon-banner">
          <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL" target="_blank">
            <img src="/images/fb-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
          </a>
          <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank">
            <img src="/images/instagram-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
          </a>
          <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank">
            <img src="/images/linkedin-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
          </a>
        </div>

        <span className="updown-arrow">
          <img src="images/down-arrow.png"/>
        </span>

        {!isVisible && (
          <div className="content-section">
            <div className="container position-relative mb-0">
              <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
                <button className="btn desktop-button corporatebannerbutton" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
                  <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {isMobile && (
        <button className="toggle-btn main_togle" onClick={toggleMenu}>
          {isExpanded ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      )}

      {isExpanded && (
        <div className="menu-expanded" style={{ backgroundColor: 'rgba(0,0,0,.2)', height: '100vh', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
          <NavbarOften />
        </div>
      )}
    </>
  );
};

export default HeaderHoften;
