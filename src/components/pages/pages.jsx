import React from "react";
import Header from "../common/header/Header.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "../common/footer/Footer.jsx";
import About from "../about/About.jsx";
import Services from "../services/Services.jsx";

const Pages = () => {
    return (
        <>
        <Router>
            <Header />
            <Routes>
             <Route exact path="/" element={Home} />
             <Route exact path="/about" element={About} />
             <Route exact path="/services" element={Services} />
             <Route exact path="/blog" element={Blog} />
            </Routes>
            <Footer />
        </Router>
        </>
    )
}



export default Pages;