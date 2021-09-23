import React from 'react';
import { Link } from 'react-router-dom';

import {faSeedling, faHandSparkles, faHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Home(){
    return(
        <div className="home">
            <div className="hero-wrapper" style={{backgroundImage: 'url(./img/hero.jpg)'}}>
                    <div className="hero-text">
                        <h2 className="hero-head">Pacific Sparkles</h2>
                        <p className="hero-content standard-content">Handmade Bath Soaps</p>
                        <Link to="/shop" className="hero-link">Products</Link>
                    </div>
            </div>
            <section className="main-section">
            <section className="shop">
                        <div className="shop-wrapper">
                            <div className="shop-text">
                                <h2 className="head-2 shop-head">
                                    Shop
                                </h2>
                                <div className="shop-subhead standard-content">
                                    Check Out Our Products.
                                </div>
                            </div>
                            <div className="products-wrapper">
                                <div className="product-card ajmer-card" onClick={()=>{window.location.replace('/products/rose')}}>
                                        <img src="/img/products/shop/Ajmer Rose Soap.png" alt="Ajmer Rose" className="product-img img-z1"/>
                                        <h2 className="product-name">Ajmer Rose Soap</h2>
                                        <div className="product-info">MRP ₹250</div>
                                        <p className="price-secondary">₹250</p>
                                </div>
                                <div className="product-card charcoal-card" onClick={()=>{window.location.replace('/products/charcoal')}}>
                                        <img src="/img/products/shop/Charcoal Soap.png" alt="Charcoal" className="product-img img-z1"/>
                                        <h2 className="product-name">Charcoal Soap</h2>
                                        <div className="product-info">MRP ₹250</div>
                                        <p className="price-secondary">₹250</p>
                                </div>
                                <div className="product-card birchwood-card" onClick={()=>{window.location.replace('/products/birchwood_oudh')}}>
                                        <img src="/img/products/shop/Birchwood Soap.png" alt="Birchwood" className="product-img img-z1"/>
                                        <h2 className="product-name">Birchwood Soap</h2>
                                        <div className="product-info">MRP ₹250</div>
                                        <p className="price-secondary">₹250</p>
                                </div>
                            </div>
                            <Link to="/shop" className="additional-content">View All Products</Link> 
                        </div>
                    </section>
                <section className="about">
                    <div className="about-wrapper">
                        <img src='/img/circle_logo.png' alt="Logo" className="about-img"/>
                        <div className="about-text">
                        <h2 className="head-2">
                            About Us
                        </h2>
                        <p className="standard-content">
                        From a casual idea to creating something during the peak of lockdown 2020, to now selling  handcrafted organic soaps on Amazon and Flipkart, Pacific Sparkles was born  somewhere in the middle. We offer an array of aromatic and detoxifying soaps in beautiful  designs. Since our soaps are handmade, each ingredient is thoughtfully chosen to give  the best results. 
                        </p>
                        <p className="standard-content">
                        After doing our share of extensive research, we meticulously crafted a variety of  soaps and gifted them to our family and friends on Diwali 2020. The response that we received  motivated us to dream bigger and better... <Link to="/about" className="read-more">Read More.</Link>
                        </p>
                        </div>
                    </div>
                </section>
                <section className="our-soaps">
                    <div className="our-soaps-wrapper">
                        <div className="our-soaps-text">
                            <h2 className="head-2">
                                Our Soaps
                            </h2>
                            <p className="standard-content">
                                A collection of Luxury Soaps made with Natural Plant Based Oils, Earthy Clay’s, Raw Un-refined Butter’s, Fresh Fruit Pulps, Extract of Flower’s and Botanical Extracts. 
                                <br />
                                <br />
                                Enriched with Vitamin-E, Essential oils, full of Natural Glycerine. 
                                <br />
                                <br />
                                100% Vegan and Blended with Ayurvedic Properties. PH Balanced. No Mineral Oil, Parabens, BPA/SLS/Sulphates.
                            </p>
                        </div>
                        <div className="img-wrapper">
                            <img src="/img/home/our-soaps.jpg" alt="Soap Image" className="our-soaps-img"/>
                        </div>
                    </div>
                </section>
            </section>
            <section className="info">
                    <div className="info-wrapper">
                        <div className="row">
                            <div className="col col-img" style={{backgroundImage: "url(img/home/info-charcoal.jpg)"}}>
                                <div className="text">
                                    <p className="standard-content">Charcoal Soap</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSeedling} id="vegan-icon"/>
                                </div>
                                <div className="large-text">100%</div>
                                <div className="secondary-text" id="vegan-icon-secondary">Vegan</div>
                            </div>
                            <div className="col col-img" style={{backgroundImage: "url(img/home/info-chocolate.jpg)"}}>
                            <div className="text">
                                    <p className="standard-content">Chocolate Soap</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faHandSparkles} id="hand-icon" />
                                </div>
                                <div className="large-text">Handcrafted</div>
                                <div className="secondary-text" id="hand-icon-secondary">With Love, for You.</div>
                            </div>
                            <div className="col col-img" style={{backgroundImage: "url(img/home/info-ajmer.jpg)"}}>
                            <div className="text">
                                    <p className="standard-content">Ajmer Rose Soap</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faHeart} id="heart-icon" />
                                </div>
                                <div className="large-text">Cruelty Free</div>
                                <div className="secondary-text" id="heart-icon-secondary">No Animals Harmed.</div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}