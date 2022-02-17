import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div style={{background: "#d9bb8d"}} className="mw-full h-300 mt-auto">
            <div className="content pt-20">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <div className="text-align-left w-200 mr-20 ml-20">
                            <div className="content-title border-bottom mb-10">CONTACT US</div>
                            <ul style={{listStyle: "none"}}>
                                <li>Email</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Message in a bottle</li>
                            </ul>
                        </div>
                        <div className="text-align-left w-200 mr-20 ml-20">
                            <div className="content-title border-bottom mb-10">OVERVIEW</div>
                            <ul style={{listStyle: "none"}}>
                                <li>
                                    <Link style={{padding: 0}} to="/" className="nav-link">Home</Link>

                                </li>
                                <li>
                                    <Link style={{padding: 0}} to="/about" className="nav-link">About The Island</Link>
                                </li>
                                <li>
                                    <Link style={{padding: 0}} to="/info" className="nav-link">Tourist Info</Link>
                                </li>
                                <li>
                                    <Link style={{padding: 0}} to="/faq" className="nav-link">FAQ</Link>
                                </li>
                                <li>
                                    <Link style={{padding: 0}} to="/book" className="nav-link">Book Now</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-align-left w-200 mr-20 ml-20">
                            <div className="content-title border-bottom mb-10">ABOUT US</div>
                            <ul style={{listStyle: "none"}}>
                                <li>Taniti.gov</li>
                                <li>Media Relations</li>
                                <li>Support</li>
                                <li>Youth Outreach</li>
                                <li>Pirates</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        Copyright © 2022 Taniti.gov, all rights reserved and all that
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;