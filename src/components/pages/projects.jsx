import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { CommonCarousel } from '../common/carousel';
import React from 'react';
const Body = () => {
    return (
        <>
            <section>
                <div className="lead">
                    <ul style ={{listStyleType: "disc"}}>
                        <b>
                            <li>
                                <a href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                                    THIS WEBSITE (REACT/JS)
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/brdboard-companion.git" target="_blank"
                                    rel="noopener noreferrer">
                                    BREADBOARD MACRO PAD (C)
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                    rel="noopener noreferrer">
                                    CALCULATOR APP (FLUTTER/DART)
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL WEATHER APP (REACT NATIVE)
                                </a>
                            </li>
                           <li>
                         <a href= "https://github.com/austinhutchen/Journal.NET.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL DAILY JOURNAL WEBSITE (C#)
</a>

      </li>
                            <li>
                                <a href="https://github.com/austinhutchen/map-app.git" target="_blank" rel="noopener noreferrer">
                                    GOOGLE MAPS CLONE (Flutter/C++)
                                </a>
                            </li>
                           
                            <li>
                                <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noopener noreferrer">
                                    REDDIT STATISTICS ENGINE (PYTHON)
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                    COMPLETE KERNEL SHELL (VANILLA C)
                                </a>
                            </li>                            
                            <li>
                                <a href="https://github.com/austinhutchen/FASTmatrixmult-c.git" target="_blank" rel="noopener noreferrer">
                                    O(N*LOG(N)) NxN MATRIX MULTIPLY ALGORITHM (C)
                                </a>
                            </li>
                           
                        

                            <li>
                                <a href="https://github.com/austinhutchen/euclidshortest-c.git" target="_blank"
                                    rel="noopener noreferrer">
                                   O(N*LOG(N)) N-COORDINATE SHORTEST DISTANCE ALGORITHM (C)
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                                    2-3 DIMENSIONAL GRAPHING CALCULATOR (JAVASCRIPT)
                                </a>
                            </li>
 <li>
                                <a href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noopener noreferrer">
                                    MENTAL HEALTH QUOTE GENERATOR + JOURNALLING APP (REACT NATIVE/JAVA)
      </a>
                           </li> 
                        </b>
                    </ul>
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
      <div style ={{paddingBottom:8}}>

<h1 className="hlight" >
                    <b>PERSONAL PROJECTS:</b>
                </h1>

      </div>
                
                <CommonCarousel />
                <Body />
                <br/>

            </motion.div>
        </section>

    )
}
