import React from 'react';
import Footer from "../Nav/Footer";
import dining from "../../assets/dining.jpg";
import tour from "../../assets/tour.jpg";
import taxi from "../../assets/taxi.jpg";
import {Link} from "react-router-dom";

const Info = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h3>
                    Tourist Info
                </h3>
                <div className="row p-20">
                    <div className="ml-20">
                        <img src={dining} alt="" className="img-fluid h-200"/>
                    </div>
                    <div className="col pl-20 ml-20 border-0">
                        <Link to={"/info/shops"} className="content-title text-decoration-underline">
                            Shops, Dining, and Lodging
                        </Link>
                        <div className="font-size-18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div className="row p-20">
                    <div className="ml-20">
                        <img src={tour} alt="" className="img-fluid h-200"/>
                    </div>
                    <div className="col pl-20 ml-20 border-0">
                        <Link to={"/info/entertainment"} className="content-title text-decoration-underline">
                            Entertainment and Sightseeing
                        </Link>
                        <div className="font-size-18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
                <div className="row p-20">
                    <div className="ml-20">
                        <img src={taxi} alt="" className="img-fluid h-200"/>
                    </div>
                    <div className="col pl-20 ml-20 border-0">
                        <Link to={"/info/transportation"} className="content-title text-decoration-underline">
                            Transportation
                        </Link>
                        <div className="font-size-18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Info;