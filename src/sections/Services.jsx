import React from 'react';
import './Services.css';

const services = [
    { name: 'Wig Treatment', regular: 'R350', special: 'R250' },
    { name: 'Wig Installation', regular: 'R400', special: 'R300' },
    { name: 'Installation + Styling', regular: 'R650', special: 'R450' },
    { name: 'Straightening', regular: 'R150', special: null },
    { name: 'Frontal Pony Installation', regular: 'R850', special: 'R650' },
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="section-header">
                <span className="section-subtitle">Our Expertise</span>
                <h2>Premium <span className="text-accent">Services</span></h2>
                <p className="section-desc">We offer a wide range of premium wig services. Book between Monday and Wednesday to enjoy our special rates.</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-info">
                            <h3>{service.name}</h3>
                        </div>
                        <div className="service-pricing">
                            <div className="price-item">
                                <span className="price-label">Regular</span>
                                <span className="price-value">{service.regular}</span>
                            </div>
                            {service.special && (
                                <div className="price-item special">
                                    <span className="price-label">Mon-Wed Special</span>
                                    <span className="price-value">{service.special}</span>
                                </div>
                            )}
                        </div>
                        <div className="card-footer">
                            <a href="#book" className="service-btn">Book Service</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="special-banner">
                <div className="banner-content">
                    <p>Don't miss our <strong>Monday-Wednesday Specials!</strong> Premium quality at best prices.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
