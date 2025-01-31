import React from "react";
import Header from "../common/header/Header.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "../common/footer/Footer.jsx";

const Pages = () => {
    return (
        <>
        <Router>
            <Header />
            <Routes>
             <Route exact path="/" element={Home} />
            </Routes>
            <Footer />
        </Router>
        </>
    )
}



export default Pages;