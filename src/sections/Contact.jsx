import React from 'react';
import './Contact.css';

const locations = [
    {
        name: 'Savannah Mall',
        address: 'Polokwane, South Africa',
        phone: '062 297 6245',
        link: 'tel:0622976245'
    },
    {
        name: 'Standard Bank Square',
        address: 'Polokwane, South Africa',
        phone: '062 032 3326',
        link: 'tel:0620323326'
    }
];

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="section-header">
                <span className="section-subtitle">Find Us</span>
                <h2>Our <span className="text-accent">Locations</span></h2>
            </div>

            <div className="locations-grid">
                {locations.map((loc, index) => (
                    <div className="location-card" key={index}>
                        <div className="loc-icon">📍</div>
                        <h3>{loc.name}</h3>
                        <p>{loc.address}</p>
                        <a href={loc.link} className="loc-phone">{loc.phone}</a>
                        <div className="loc-actions">
                            <a href={loc.link} className="btn-loc">Call Now</a>
                            <a href={`https://wa.me/${loc.phone.replace(/\s/g, '')}`} className="btn-loc whatsapp">WhatsApp</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Looking Gorg Hair Salon. All Rights Reserved.</p>
                <div className="social-placeholder">
                    {/* Add social icons here */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
