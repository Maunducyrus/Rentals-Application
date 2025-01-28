import React from "react";
import Hero from "./hero/Hero"
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";

const Home = () => {
    return (
        <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />

        </>
    )
}

export default Home