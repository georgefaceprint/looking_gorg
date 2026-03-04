import React, { useState, useEffect } from 'react';
import './HeroScroller.css';

const slides = [
    {
        image: '/hero_1.png',
        title: 'Wear The Crown You Deserve',
        subtitle: 'Premium Afro Styling & Care'
    },
    {
        image: '/hero_2.png',
        title: 'Sleek. Elegant. You.',
        subtitle: 'High-Gloss Wig Installations'
    },
    {
        image: '/hero_3.png',
        title: 'Intricate Artistry',
        subtitle: 'Professional Braiding & Treatments'
    }
];

const HeroScroller = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-scroller">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-content">
                        <span className="slide-subtitle">{slide.subtitle}</span>
                        <h1>{slide.title}</h1>
                        <div className="slide-actions">
                            <a href="#services" className="btn btn-primary">Book a Service</a>
                            <a href="#shop" className="btn btn-outline">Shop Products</a>
                        </div>
                    </div>
                </div>
            ))}
            <div className="scroller-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroScroller;
