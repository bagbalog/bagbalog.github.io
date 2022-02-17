import React from 'react';
import Footer from "../Nav/Footer";
import island1 from "../../assets/island1.jpg";
import village1 from "../../assets/village1.jpg";
import village2 from "../../assets/village2.jpg";

const About = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-around">
                <img className="img-fluid" src={village1}/>
                <img className="img-fluid" src={island1}/>
                <img className="img-fluid" src={village2}/>
            </div>
            <div className="content">
                <h2 className="font-weight-bold">
                    About The Island
                </h2>
                <div className="ml-20 pl-20 font-size-18">
                    Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500
                    square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe
                    harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano.
                    Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the
                    Tanitian economy was dominated by fishing or agriculture.
                </div>
                <h4 className="font-weight-bold">
                    Climate
                </h4>
                <div className="ml-20 pl-20 font-size-18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <h4 className="font-weight-bold">
                    History
                </h4>
                <div className="ml-20 pl-20 font-size-18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <h4 className="font-weight-bold">
                    Culture
                </h4>
                <div className="ml-20 pl-20 font-size-18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default About;