import React from 'react';
import './Shop.css';

const products = [
    {
        id: 1,
        name: 'Curl Boss Defining Cream',
        price: 'R285',
        image: '/product_curl_boss.png',
        desc: 'Luxurious hydration for ultimate curl definition.'
    },
    {
        id: 2,
        name: 'Chebe & Fenugreek Oil',
        price: 'R195',
        image: '/product_growth_oil.png',
        desc: 'Premium growth blend for strength and shine.'
    },
    {
        id: 3,
        name: 'Moisture Lock Conditioner',
        price: 'R245',
        image: '/product_curl_boss.png', // Reusing placeholder
        desc: 'Deep penetration for long-lasting moisture.'
    },
    {
        id: 4,
        name: 'Scalp Revive Serum',
        price: 'R175',
        image: '/product_growth_oil.png', // Reusing placeholder
        desc: 'Cooling relief and nutrient boost for roots.'
    }
];

const Shop = () => {
    return (
        <section id="shop" className="shop">
            <div className="section-header">
                <span className="section-subtitle">Premium Care</span>
                <h2>Shop Our <span className="text-accent">Products</span></h2>
                <p className="section-desc">Take the salon experience home with our curated collection of professional hair care products.</p>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            <button className="add-to-cart">Quick Add</button>
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="product-desc">{product.desc}</p>
                            <span className="product-price">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Shop;
