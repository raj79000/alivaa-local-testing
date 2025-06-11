'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'app/booking-engine-widget/FormContext';
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function NavbarAliva() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(pathname === '/');
    const { isFormOpen, setIsFormOpen } = useForm();

    useEffect(() => {
        setIsOpen(pathname === '/');
    }, [pathname]);

    const toggleNavbar1 = () => {
        setIsOpen(!isOpen);
    };

      

    return (
      <header className={`clearHeader hght0 ${pathname !== '/' ? 'other-page' : 'proprty-hdr'}`}>
            <div id="navbar" className='main-nav-for-inner'>
                <div className="container-fluid">
                    <nav className="navbar navbar-default navbar-static-top" role="navigation">
                        <div className="navbar-header mt-2">
                            {/* Mobile Toggle Button */}
                            <button className="navbar-toggler position-fixed mt-5" type="button" onClick={toggleNavbar1} data-bs-toggle="collapse" data-bs-target="#navbar-collapse-2" aria-controls="navbar-collapse-2" aria-expanded={isOpen} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                      <p className="menu_txt2">  Main Menu    <FontAwesomeIcon
                                                                  icon={faArrowCircleDown}
                                                                  className="ms-2 text-lg"
                                                                /></p>
                            </button>
                            
                            {/* Logo */}
                            {/* <Link className="navbar-brand" href="/">
                                <img src="/images/alivaa-logo1.webp" height="71" width="92" alt="Alivaa Logo" />
                            </Link> */}

                            {/* Book Now Button */}
                            {/* <button className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">
                                Book Now
                            </button> */}
                        </div>

                        {/* Navbar Links */}
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse-2">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link href="/">Home</Link></li>
                                <li className="dropdown">
                                    Our Hotels ▼ 
                                    <ul className="dropdown-menu menu1">
                                  
                                    <li className="has-submenu">
                                        <span className="menu-label">Alivaa</span>
                                        <ul className="inner_menu">  
                                            <li><Link href="/gurgaon-hotels">Gurugram </Link></li>
                                            <li><Link href="/mcleodganj">McLeodganj </Link></li>
                                            <li><Link href="/lansdowne">Lansdowne </Link></li>
                                        </ul>
                                        </li>
                                        <li className="has-submenu">
                                        <span className="menu-label">Hoften</span>
                                        <ul className="inner_menu">  
                                            <li><Link href="/gurugram-hotel">Gurugram </Link></li>
                                        </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li><Link href="/special-offers">Special Offers</Link></li>
                                <li className="dropdown">
                                    Upcoming Property ▼ 
                                    <ul className="dropdown-menu">
                                        <li><Link href="/corbetthotel">Alivaa Jungle Resort</Link></li>
                                        <li><Link href="/mumbaihotel">Alivaa Hotel, Mumbai</Link></li>
                                        <li><Link href="/udaipurhotel">Alivaa Hotel, Udaipur</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}