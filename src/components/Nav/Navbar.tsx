import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{backgroundColor: "rgba(0,117,136,0.47)"}} className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">Taniti</Link>
            </div>
            <div className="ml-auto">
                <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                        <Link to="/" className="nav-link font-weight-bold">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link font-weight-bold">About The Island</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/info" className="nav-link font-weight-bold">Tourist Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link font-weight-bold">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/book" className="nav-link font-weight-bold">Book Now</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;