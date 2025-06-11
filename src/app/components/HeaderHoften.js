import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import useBook from 'app/booking-engine-widget/useBook';
import { useForm } from 'app/booking-engine-widget/FormContext';



const HeaderHoften = () =>{

const [isOpen2, setIsOpen2] = useState(true);
 const [isRoomMenuOpen, setIsRoomMenuOpen] = useState(false);
    const { isFormOpen, setIsFormOpen } = useForm();
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen2(false);
      } else {
        setIsOpen2(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen2(!isOpen2);
  };
 const toggleBookingFormm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFormOpen(!isFormOpen);
    if (isRoomMenuOpen) {
      setIsRoomMenuOpen(false);
    }
  };

  

    return (

      <header style={{background:"#b0b0b0 !important",backgroundColor:"#b0b0b0 !important"}} className="clearHeader mob_design neww-hoften-headerr">

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
                               aria-expanded={isOpen2}
                               aria-label="Toggle navigation"
                             >
                               <span className="navbar-toggler-icon d-desk-none"></span>
                             <p className="menu_txt">  Property Menu    <FontAwesomeIcon
                                                 icon={faArrowCircleDown}
                                                 className="ms-2 text-lg"
                                               /></p>
                             </button>

                <Link className="navbar-brand" href="/">

                  <img src="/images/hoften-logo1.png" height="71" width="92" alt="Alivaa Logo" />

                </Link>

  

                {/* Book Now Button */}

                <button className="btn book-now-headerr mob1_none" onClick={toggleBookingFormm} id="book-now">
                Book Now
              </button>

              </div>

  

              {/* Navbar Links */}

              <div className={`collapse navbar-collapse ${isOpen2 ? 'show' : ''}`} id="navbar-collapse-1">

                <ul className="nav navbar-nav navbar-right">

                  <li><Link href="/">Home</Link></li>

                  

                  <li>

                    <Link href="/gurugram-hotel">Overview</Link>

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

                    <li>

                    <Link href="/gurugram-gallery">Gallery</Link>

                    </li>

                  <li><Link href="/gurugram-hotel-contact">Contact Us</Link></li>
                 

                  {/* <li><button className="book-now">Book Now</button></li> */}

                </ul>

              </div>

            </nav>

          </div>

        </div>

      </header>
    );
}

export default HeaderHoften;