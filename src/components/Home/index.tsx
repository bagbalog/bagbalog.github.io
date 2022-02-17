import React from 'react';
import styles from "./Home.module.css";
import beach from "../../assets/beach1.jpg";
import forest from "../../assets/forest1.jpg";
import Footer from "../Nav/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <div className="text-center">
                <div className={`${styles.hero}`}>&nbsp;</div>
            </div>
            <div className="content">
                <div className="text-center">
                    <div className="content-title">
                        Taniti Island
                    </div>
                    <div className="content font-size-20">
                        The island of Taniti is home to some of the most beautiful beaches and amazing vistas the
                        Pacific has to offer. Have a look at some of the exciting attractions available on Taniti!
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center mb-20">
                        <div className="w-400">
                            <div className="mr-10">
                                <img src={beach} className="img-fluid" alt="A beach"/>
                            </div>
                        </div>
                        <div className="w-400">
                            <div className="content-title border-bottom">
                                Beautiful beaches
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="w-400">
                            <div className="content-title border-bottom">
                                Luscious rainforests
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </div>
                        </div>
                        <div className="w-400">
                            <div className="ml-10">
                                <img className="img-fluid" src={forest}  alt="A forest"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
        ;
};

export default Home;