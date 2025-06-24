import Link from "next/link";

import { useState, useEffect } from "react";

import NavbarOften from "app/components/NavbarOften";
const HeaderHoften = () =>{

const [isOpen1, setIsOpen1] = useState(true);
const [isExpanded, setIsExpanded] = useState(false);
const toggleMenu = () => {
  setIsExpanded(!isExpanded);
};

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen1(false);
      } else {
        setIsOpen1(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    const toggleNavbar = () => {

      setIsOpen1(!isOpen1);

    };

  

    return (
<>
<section className="home-hdr-hght">
        <button className="toggle-btn" onClick={toggleMenu}>
          {isExpanded ? "Close" : "Menu"}
        </button>
        {isExpanded && (
          <div className="toggle-menu">
<NavbarOften />
      <header style={{background:"#b0b0b0 !important",backgroundColor:"#b0b0b0 !important"}} className="clearHeader neww-hoften-headerr">

        <div id="navbar">

          <div className="container-fluid">

            <nav className="navbar navbar-default navbar-static-top" role="navigation">

              <div className="navbar-header">

                <button className="navbar-toggler" type="button" onClick={toggleNavbar} 

                  data-bs-toggle="collapse" data-bs-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" 

                  aria-expanded={isOpen1} aria-label="Toggle navigation">

                  <span className="navbar-toggler-icon"></span>

                </button>

                <Link className="navbar-brand" href="/">

                  <img src="/images/hoften-logo1.png" height="71" width="92" alt="Alivaa Logo" />

                </Link>

  

                {/* Book Now Button */}

                <button onClick={() => window.location.href = 'https://live.ipms247.com/booking/book-rooms-morphosukhvasagurugram'} className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                  Book Now

                </button>

              </div>

  

              {/* Navbar Links */}

              <div className={`collapse navbar-collapse ${isOpen1 ? 'show' : ''}`} id="navbar-collapse-1">

                <ul className="nav navbar-nav navbar-right">

                  <li><Link href="/">Home</Link></li>

                  

                  <li>

                    <Link href="/gurugram-hotel">OverView</Link>

                    </li>

                  {/* <li>

                    <Link href="/gurgaon-hotel-facilities">Hotel Facilities</Link>

                    </li> */}
                  <li>

                    <Link href="/gurugram-accommodation">Room & Suites</Link>

                    </li>

                    <li>

                    <Link href="/gurugram-meeting-events">Meeting & Events</Link>

                    </li>

                    <li>

                    <Link href="/gurugram-dining">Dining</Link>

                    </li>

                    <li>

                    <Link href="/gurugram-hotel-offers">Offers</Link>

                    </li>

                  <li><Link href="/gurugram-hotel-contact">Contact Us</Link></li>
                  <li><Link href="/GurugramGallery">Gallery</Link></li>
                  {/* <li><button className="book-now">Book Now</button></li> */}

                </ul>

              </div>

            </nav>

          </div>

        </div>

      </header>

      </div>
        )}
      </section>
</>
    );

}

export default HeaderHoften;