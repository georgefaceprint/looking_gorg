import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-subtitle">Premium Hair Salon & Wigs</span>
                <h1>Visit us for your <span className="text-accent">Wigs & Installations</span></h1>
                <p>Expert wig treatments and installations in the heart of Polokwane. Experience the premium touch.</p>
                <div className="hero-actions">
                    <a href="#services" className="btn btn-primary">Our Services</a>
                    <a href="#contact" className="btn btn-outline">Contact Us</a>
                </div>
            </div>
            <div className="hero-image-container">
                {/* Placeholder for premium hair imagery */}
                <div className="hero-image-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
