import React from "react";
import Hero from "./hero/Hero"
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import { Team } from "./team/Team";

const Home = () => {
    return (
        <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />
        <Location />
        <Team />

        </>
    )
}

export default Home