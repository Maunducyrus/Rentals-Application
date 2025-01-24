import React from "react";
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const pages = () => {
    return (
        <>
        <Router>
            <Header />
            <Routes>
             <Route exact path="/" component={() => <div>Home Page</div>} />
             <Route path="/about" component={() => <div>About Page</div>} />
             <Route path="/services" component={() => <div>Services Page</div>} />
            </Routes>
        </Router>
        </>
    )
}



export default pages;