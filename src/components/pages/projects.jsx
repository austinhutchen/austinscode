import { motion } from "framer-motion/dist/framer-motion";
import { Nav } from "../common/navbar";
import { CommonCarousel } from '../common/carousel';
import React from 'react';
const Body = () => {
    return (
        <>
            <section>
                <div className="lead">
                    <b>
                        <a href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                            THIS WEBSITE (REACT/JS)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/brdboard-companion.git" target="_blank"
                            rel="noopener noreferrer">
                            BREADBOARD MACRO PAD (C)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                            rel="noopener noreferrer">
                            CALCULATOR APP (FLUTTER/DART)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                            rel="noopener noreferrer">
                            STATEFUL WEATHER APP (REACT NATIVE)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/map-app.git" target="_blank" rel="noopener noreferrer">
                            GOOGLE MAPS CLONE (Flutter/C++)
                        </a>
                        <br></br>
                        <a href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noopener noreferrer">
                            JOURNALLING APP (REACT NATIVE/JAVA)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noopener noreferrer">
                            REDDIT STATISTICS ENGINE (PYTHON)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                            COMPLETE KERNEL SHELL (VANILLA C)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/euclidshortest-c.git" target="_blank"
                            rel="noopener noreferrer">
                            N-COORDINATE SHORTEST DISTANCE DIVIDE + CONQUER ALGORITHM (C)
                        </a>
                        <br />
                        <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                            2-3 DIMENSIONAL GRAPHING CALCULATOR (JAVASCRIPT)
                        </a>
                        <br />
                    </b>
                </div>
                <br></br>
            </section>
        </>
    )
}

export const Projects = () => {
    // integrate display component here
    return (
        <section>
            <Nav></Nav>
            <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <h2 className="hlight" style={{ paddingTop: 20 }}>
                    <b>PERSONAL PROJECTS:</b>
                </h2>
                <hr></hr>
                <CommonCarousel />
                <Body />
                <hr></hr>

            </motion.div>
        </section>

    )
}