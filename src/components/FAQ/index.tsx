import React from 'react';
import Footer from "../Nav/Footer";

const FAQ = () => {
    return (
        <React.Fragment>
            <div className="content">
                <div className="content-title">
                    FREQUENTLY ASKED QUESTIONS
                </div>
                <div className="card bg-light font-size-18">
                    <p>Power outlets are 120 volts (the same as in the United States).</p>
                    <p>Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.</p>
                    <p>The drinking age on Taniti is 18 and the drinking age is not strictly enforced.</p>
                    <p>Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.</p>
                    <p>There is one hospital and several clinics. The hospital has many multilingual employees.</p>
                    <p>Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.</p>
                    <p>Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.</p>
                    <p>Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.</p>

                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default FAQ;