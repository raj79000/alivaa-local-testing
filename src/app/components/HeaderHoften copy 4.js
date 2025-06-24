import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';  // Importing the menu and close icons
import NavbarOften from "app/components/NavbarOften";
import Link from "next/link";

const HeaderHoften = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      {isMobile ? (
        // Mobile view
        <section className="home-hdr-hght">
          {/* Button with React Icons */}
          <button
            className="toggle-btn main_togle togle_prt_btn"
            onClick={toggleMenu}
          >
            {isExpanded ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          {isExpanded && (
            <div className="menu-expanded" style={{ backgroundColor: 'rgba(0,0,0,.2)', height: '100vh' }}>
              {/* Navbar with mobile links */}
              <NavbarOften />
            </div>
          )}
        </section>
      ) : (
        // Desktop view
        <section className="home-hdr-hght">
          <NavbarOften />
        </section>
      )}

      {/* Logo and "Book Now" button are outside the mobile menu toggle */}
      <header
        style={{
          background: "#b0b0b0 !important",
          backgroundColor: "#b0b0b0 !important",
        }}
        className="clearHeader neww-hoften-headerr"
      >
        <div id="navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleNavbar}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-collapse-1"
                  aria-controls="navbar-collapse-1"
                  aria-expanded={isOpen1}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Logo */}
                <Link className="navbar-brand" href="/">
                  <img src="/images/hoften-logo1.png" height="71" width="92" alt="Alivaa Logo" />
                </Link>

                {/* Book Now Button */}
                <button
                  onClick={() => window.location.href = 'https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram'}
                  className="btn book-now-headerr"
                  style={{ borderColor: '#000' }}
                  id="book-now"
                >
                  Book Now
                </button>
              </div>

              {/* Navbar Links */}
              <div className={`collapse navbar-collapse ${isOpen1 ? 'show' : ''}`} id="navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/gurugram-hotel">OverView</Link></li>
                  <li><Link href="/gurugram-accommodation">Room & Suites</Link></li>
                  <li><Link href="/gurugram-meeting-events">Meeting & Events</Link></li>
                  <li><Link href="/gurugram-dining">Dining</Link></li>
                  <li><Link href="/gurugram-hotel-offers">Offers</Link></li>
                  <li><Link href="/gurugram-hotel-contact">Contact Us</Link></li>
                  <li><Link href="/GurugramGallery">Gallery</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHoften;
