import React from 'react';
import Footer from "../Nav/Footer";

const Shops = () => {
    return (
        <React.Fragment>
            <div className="content">
                <h3>
                    Shops, Dining, and Lodging
                </h3>
                <div className="content-title mb-10">
                    <a href="#">
                        Restaurants
                    </a>
                </div>
                <div className="font-size-18 mb-20 pb-20">
                    Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.
                </div>
                <div className="content-title mb-10">
                    <a href="#">
                        Lodging
                    </a>
                </div>
                <div className="font-size-18 pb-20 mb-20">
                    Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.
                </div>
                <div className="content-title mb-10">
                    <a href="#">
                        Grocery
                    </a>
                </div>
                <div className="font-size-18">
                    Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default Shops;