import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { CommonCarousel } from '../common/carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
import "../../css/fonts.css";
import React from 'react';
import shell from './images/shell.PNG'


const Body = () => {
    return (
        <>
            <section>
                <div className="lead">
                    <ul >
                        <b>
                            <li>
                                <a href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                                    THIS WEBSITE (REACT/JS)
                                </a>
                                                       </li>
                            <li>
                                <a href="" target="_blank"
                                    rel="noopener noreferrer">
                                    NON-SORT SORTER (C++)
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                    UNIX KERNEL SHELL (C)
                                </a>
      <br/>
   <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 
                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/encrypt.C.git" target="_blank"
                                    rel="noopener noreferrer">
                                    ENCRYPTED TEXT EDITOR (C++)
                                </a>
  <br/>
       <img src = {shell} height ="140vh" width ="auto"/> 

      <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 
    
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    GOOGLE MAPS CLONE (Flutter/C++)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                    rel="noopener noreferrer">
                                    CALCULATOR APP (FLUTTER/DART)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/brdboard-companion.git" target="_blank"
                                    rel="noopener noreferrer">
                                    BREADBOARD MACRO PAD (ARDUINO)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>



                            <li>
                                <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noopener noreferrer">
                                    REDDIT STATISTICS ENGINE (PYTHON)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/Journal.NET.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL DAILY JOURNAL WEBSITE (C#)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li >
   <li>
                                <a href="https://github.com/austinhutchen/journey.git" target="_blank"
                                    rel="noopener noreferrer">
                                   ZELDA CLI CLONE (C) 
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL WEATHER APP (REACT NATIVE)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>


                            <li>
                                <a href="https://github.com/austinhutchen/euclidshortest-c.git" target="_blank"
                                    rel="noopener noreferrer">
                                    O(N*LOG(N)) SHORTEST DISTANCE ALGORITHM (C++)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/AuxillarySearch.git" target="_blank" rel="noopener noreferrer">
                                    O(N*LOG(N)) UNIVERSITY SEARCH PROBE SYSTEM  (C++)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                                    2 DIMENSIONAL GRAPHING CALCULATOR (JAVASCRIPT)
                                </a>
  <br/>
  <img src = {shell} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

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
                <div style={{ paddingBottom: 8 }}>

                    <h1 className="hlight" >
                        <b>PERSONAL PROJECTS:</b>
                    </h1>

                </div>

                <CommonCarousel />
                <Body />
                <br />

            </motion.div>
        </section>

    )
}
