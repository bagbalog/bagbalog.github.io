import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import "halfmoon";
import "halfmoon/css/halfmoon-variables.min.css";

import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Book from "./components/Book";
import Info from "./components/Info";
import Entertainment from "./components/Info/Entertainment";
import Shops from "./components/Info/Shops";
import Transportation from "./components/Info/Transportation";

function App() {
    return (
        <div>
            <div className="page-wrapper with-navbar">
                <Navbar/>
                <div className="content-wrapper d-flex flex-column">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/info" element={<Info/>}/>
                        <Route path="/info/entertainment" element={<Entertainment/>}/>
                        <Route path="/info/shops" element={<Shops/>}/>
                        <Route path="/info/transportation" element={<Transportation/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/book" element={<Book/>}/>
                    </Routes>
                </div>

            </div>
        </div>
    );
}

export default App;
