import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <span className="logo-text">Looking <span className="logo-accent">Gorg</span></span>
                </div>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#locations">Locations</a></li>
                    <li><a href="#specials">Specials</a></li>
                    <li><a href="#book" className="nav-cta">Book Now</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
