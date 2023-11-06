import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { CommonCarousel } from '../common/carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
import "../../css/fonts.css";
import React from 'react';
import shell from './images/shell.webp'
import encryptc from './images/encryptc.webp'
import maps from './images/maps.webp'
import butterfly from './images/animate.mp4'
import gesture from './images/gesture.mp4'
import family from './images/family.webp'
import graph from './images/graph.mp4'
import calculator from './images/calculator.webp'
import my_interface from './images/interface.webp'
import notable from './images/journalapp.webp'
import PLANT_WATERER from './images/PLANT_WATERER.webp'
import weather from './images/WEATHER.webp'
import '../../css/projects.css'

const Body = () => {
    return (
        <>
            <section>
                <div className="lead">
                    <ul className="projectdesc">
                        <b>
                            <li>
                                <a href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                                    THIS WEBSITE (REACT/HTML/CSS)
                                </a>
      <h5 > Click the title text for a link to the source code. </h5>
                                                       </li>

                            <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                    UNIX KERNEL SHELL (C)
                                </a>
      <br/>
   <img src = {shell} height ="140vh" width ="auto"/> 

   <h5 > A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal. </h5> 
                            </li>


                            <li>
                                <a href="https://github.com/austinhutchen/encrypt.C.git" target="_blank"
                                    rel="noopener noreferrer">
                                    ENCRYPTED TEXT EDITOR (C++)
                                </a>
  <br/>
       <img src = {encryptc} height ="140vh" width ="auto"/> 

      <h5> A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also compress text and other(image, video) formats in the future. Coded fully in c.</h5> 
     </li>
                      <li>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                  ESP32 AUTO-PLANT WATERER (C) 
                                </a>
      <br/>
      <img src ={PLANT_WATERER}  height ="140vh" width ="auto" />
      <h5 > An economical and power-efficient ESP-32 powered project that reads in data from a custom soil sensor, before checking the bytes and watering the plant (true) or remaining asleep to conserve power (false) based on a union of booleans. I aim to upgrade this project with a solar-powered portable battery that can be switched off directly from the ESP-32. </h5>
                                                       </li>

      
                            <li>
                                <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                    rel="noopener noreferrer">
                                    CALCULATOR APP (FLUTTER/C)
                                </a>
  <br/>
  <img src = {calculator} height ="140vh" width ="auto"/> 

   <h5> A calculator app with support for many different functions, such as factorials, transcendental functions like sin and cosine that utilized taylor series approximations for efficiency, and bit-level square root formulas for blazingly flast performance.  Written in C and programmed for IOS.</h5> 

                            </li>

                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    GOOGLE MAPS CLONE (FLUTTER/C)
                                </a>
      <br/>
 <img src = {maps} height ="140vh" width ="auto"/> 

   <h5 > A google maps app clone that I coded using flutter and the dart framework. Spent the most time organizing and dealing with location data from google's maps API endpoint, and building a usable interface simialar to google maps. </h5> 
          </li>
   <li>
                                <a href="https://github.com/austinhutchen/gestureAI.git" target="_blank"
                                    rel="noopener noreferrer">
                                    EMBEDDED GESTURE SENSOR (C++/NANOLIB )
                                </a>
  <br/>
       <img src = {gesture} height ="140vh" width ="auto"/> 

      <h5>A machine learning model implemented on an arduino nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures, as seen above in the video. </h5> 
    
                            </li>
   <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                    4x4 INTERRUPT UART INTERFACE (C)
                                </a>
      <br/>
   <img src = {my_interface} height ="140vh" width ="auto"/> 

   <h5 > Using my knowledge of systems processes, I utilized a display interface to work directly with a 4x4 button matrix, and print messages and calculations to the screen, with an arduino nano. </h5> 
                            </li>


   <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                   ARDUINO BYTE ANIMATIONS (C) 
                                </a>
      <br/>
   <img src = {butterfly} height ="140vh" width ="auto"/> 

   <h5> I coded many byte-level animations for embedded systems. The animations utilized a bit mask, and a frame buffer for displaying the images into local register memory. You can see the demo above.</h5> 
                            </li>
 
                        

                            <li>
                                <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noopener noreferrer">
                                    REDDIT STATISTICS CLI (PYTHON)
                                </a>
  <br/>
  <img src = {""} height ="140vh" width ="auto"/> 

   <h5> A statistics engine coded with numpy and python which runs in the terminal, has a fully functional built-in search engine, and many different graphical display options for reddit data analysis. </h5> 

                            </li> 

                         
     <li>
                                <a href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noopener noreferrer">
                                    ZEN JOURNALLING APP (REACT NATIVE/JAVA)
                                </a>
      <br/>
  <img src = {notable} height ="140vh" width ="auto"/> 
      <h5> An app made for my personal journaling use utilizing the iphone and android local cache storage, that promped the user with daily quotes fetched from an API, and stored journal entries in the user's local cache system. </h5>
                            </li>
                             <li>
                                <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                    rel="noopener noreferrer">
                                    WEATHER APP (REACT NATIVE)
                                </a>
<br/>
  <img src = {weather} height ="140vh" width ="auto"/> 

   <h5>One of my first apps, fetched information about the weather from a javascript API before caching locally and displaying to the user. Incorporated state and event-handling, and was my introduction into mobile programming. </h5> 

       </li> 

                       
                         
<br/>
    <li>
                                <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                                    2D GRAPHING CALCULATOR (JAVASCRIPT)
                                </a>
  <br/>
  <img src = {graph} height ="140vh" width ="auto"/> 

   <h5>   A graphing calculator coded in javascript which utilized the plotjs library to plot real-valued functions in up to 3 dimensions. Seen in the video is the zoom function, which works by analyzing the many derivatives of the given function. Coded for integration with the calculator app. </h5> 

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
                exit={{ x: window.innerWidth, transition: { duration: 0.001  } }}>
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
