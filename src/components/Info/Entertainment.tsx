import React from 'react';
import Footer from "../Nav/Footer";

const Entertainment = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h3>
                    Entertainment and Sightseeing
                </h3>
                <div className="content-title mb-10">
                    Entertainment
                </div>
                <div className="font-size-18 mb-20 pb-20">
                    Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano.
                    However, there are other things to do, including visiting a local history museum, going on chartered
                    fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a
                    microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an
                    arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by
                    next year. Many of these activities are located in Merriton Landing, which is a rapidly developing
                    area on the north side of Yellow Leaf Bay.
                </div>
                <div className="content-title mb-10">
                    Sightseeing
                </div>
                <div className="font-size-18">
                    Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby
                    white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus
                    tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Entertainment;