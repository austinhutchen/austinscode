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
import encryptc from './images/encryptc.JPG'
import maps from './images/maps.jpg'
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

   <h5> A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal. </h5> 
                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/encrypt.C.git" target="_blank"
                                    rel="noopener noreferrer">
                                    ENCRYPTED TEXT EDITOR (C++)
                                </a>
  <br/>
       <img src = {encryptc} height ="140vh" width ="auto"/> 

      <h5> A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also encrypt text and other formats in the future. Coded fully in c.</h5> 
    
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    GOOGLE MAPS CLONE (Flutter/C++)
                                </a>
  <br/>
  <img src = {maps} height ="140vh" width ="auto"/> 

   <h5> A google maps app clone that I coded using flutter and the dart framework. Spent the most time organizing and dealing with location data from google's maps API endpoint, and building a usable interface simialar to google maps. </h5> 

                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                    rel="noopener noreferrer">
                                    CALCULATOR APP (FLUTTER/DART)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A calculator app with support for many different functions, such as factorials, transcendental functions like sin and cosine that utilized taylor series approximations for efficiency, and bitwise square root formulas that performed faster calculations. Written in C and programmed for IOS.</h5> 

                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/brdboard-companion.git" target="_blank"
                                    rel="noopener noreferrer">
                                    BREADBOARD MACRO PAD (ARDUINO)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>



                            <li>
                                <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noopener noreferrer">
                                    REDDIT STATISTICS ENGINE (PYTHON)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/Journal.NET.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL DAILY JOURNAL WEBSITE (C#)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li >
   <li>
                                <a href="https://github.com/austinhutchen/journey.git" target="_blank"
                                    rel="noopener noreferrer">
                                   ZELDA CLI CLONE (C) 
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>
                            <li>
                                <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                    rel="noopener noreferrer">
                                    STATEFUL WEATHER APP (REACT NATIVE)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>


                            <li>
                                <a href="https://github.com/austinhutchen/euclidshortest-c.git" target="_blank"
                                    rel="noopener noreferrer">
                                    O(N*LOG(N)) SHORTEST DISTANCE ALGORITHM (C++)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/AuxillarySearch.git" target="_blank" rel="noopener noreferrer">
                                    O(N*LOG(N)) UNIVERSITY SEARCH PROBE SYSTEM  (C++)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A shell is the user's primary interface into a UNIX operating system. Coding this provided me with a wealth of systems and UNIX knowledge. </h5> 

                            </li>

                            <li>
                                <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                                    2 DIMENSIONAL GRAPHING CALCULATOR (JAVASCRIPT)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

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
