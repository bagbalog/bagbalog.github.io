import React from 'react';
import Footer from "../Nav/Footer";
import cruise1 from "../../assets/cruise1.jpg";
import airport from "../../assets/airport.jpg";

const Book = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h3>
                    Booking Agencies
                </h3>
                <div className="row p-20 border-bottom border-top">
                    <div className="pl-20 ml-20">
                        <img src={cruise1} alt="" className="img-fluid h-200"/>
                    </div>
                    <div className="card border-0">
                        <div className="content-title text-decoration-underline">
                            <a href="#">Circus Cruises</a>
                        </div>
                    </div>
                </div>
                <div className="row p-20 border-bottom border-top">
                    <div className="pl-20 ml-20">
                        <img src={airport} alt="" className="img-fluid h-200"/>
                    </div>
                    <div className="card border-0">
                        <div className="content-title text-decoration-underline">
                            <a href="#">Pacific Islands Airlines</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Book;