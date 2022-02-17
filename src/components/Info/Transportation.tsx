import React from 'react';
import Footer from "../Nav/Footer";

const Transportation = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h3>
                    Transportation
                </h3>
                <div className="content-title mb-10">
                    Island Transportation
                </div>
                <div className="font-size-18 mb-20 pb-20">
                    Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in
                    Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate
                    small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets
                    will be able to land on the island within the next few years.
                </div>
                <div className="content-title mb-10">
                    Ground Shuttles
                </div>
                <div className="font-size-18">
                    Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the
                    rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local
                    rental agency near the airport. Bikes and helmets are available to rent from several vendors
                    (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in
                    the area surrounding Merriton Landing: this area is easy to explore on foot.
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Transportation;