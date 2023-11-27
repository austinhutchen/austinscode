import { motion } from "framer-motion";
import { Nav } from "../common/navbar.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.scss";
import "../../css/fonts.scss";
import '../../css/projects.scss'
import "../../css/QUERIES.scss"
import React from "react"
const Body = (props) => {

    return (
        <ul className="projectdesc">
            <b>
                <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                        THIS WEBSITE (TYPESCRIPT/REACT.TSX)
                    </a>
                    <h6 > Click the title text for a link to the source code. You can also see more on my projects and personal programming community on my   <a href="https://www.instagram.com/austinscode/" target="_blank" rel="noopener noreferrer">
                        <br />
                        <b> <i>Programming Instagram</i> </b>
                    </a>
                    </h6>

                </li>

           


 <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/WEATHER_32.git" target="_blank"
                        rel="noopener noreferrer">
                        ESP32 MOBILE WEATHER INTERFACE (C&TYPESCRIPT)
                    </a>
                    <br />
                    <img src={props.data[12]} height="140vh" width="auto" />

                    <img src={props.data[9]} height="140vh" width="auto"  />

                    <h4> Used a DHT11 serial temperature & humidity sensor along with a 7 segment display (displaying 7-bit I2C transmission to ESP32) with 9V of portable battery power to display real-time information over wifi to a react app. Includes a custom thermistor-checked data correction algorithm on the DHT11 for fixing imprecise temperature measurements. Embedded instructions coded fully in c using the platformio platform, and app was coded using typescript, scss, and the react native framework.</h4>
                </li>

     <li>
                    <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer" className="hlight-mini">
                        UNIX KERNEL SHELL (C)
                    </a>
                    <br />
                    <img src={props.data[0]} height="140vh" width="auto" />

                    <h4 > A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal. </h4>
                </li>
 <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                        rel="noopener noreferrer">
                        CALCULATOR APP (DART/FLUTTER/C)
                    </a>
                    <br />
                    <img src={props.data[3]} height="170vh" width="auto" loading="lazy" />

                    <h4> A calculator app with support for many different functions, such as factorials, transcendental functions like sin and cosine that utilized taylor series approximations for efficiency, and bit-level square root formulas for blazingly flast performance.  Written in C and programmed for IOS.</h4>

                </li>

     <li>
                    <a href= "https://github.com/austinhutchen/redditsearch.git" target="_blank" rel="noopener noreferrer" className="hlight-mini">

                        SOCIAL MEDIA SEARCH ENGINE CLI (PYTHON)
                    </a>
                    <br />
                    <img src={props.data[13]} height="140vh" width="auto" />

                    <h4 > A reddit search engine I built using an older version of python, that functioned using a bianry search to quickly retrieve data at a user's query, such as the top post of the week, top users using a given search term, and many other options. Functioned entirely inside a virtual environment in the user's local terminal.</h4>
                </li>
 
                <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/PLANT_COMPUTER_32.git" target="_blank" rel="noopener noreferrer">
                        ESP32 PLANT INTERFACE (C)
                    </a>
                    <br />
                    <table className="style-table">
                        <tr>
                            <td>

       

                                <img src={props.data[11]} height="185em" width="auto" />
     
                            </td>
                        </tr>
                    

                    </table>







                    <h4 > My custom"Plant Kernel", An economical and power-efficient ESP-32 powered project that reads in data from a custom soil sensor, before checking the capacative sensor byte response and choosing whether or not to pump the water through a servo motor and water tube into the plant. I aim to upgrade this project with a solar-powered portable battery that can be switched off directly from the ESP-32. </h4>
                </li>
   <li>
                    <a className="hligh-mini" href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer" >
                        PAPER-LIKE ESP32 ANIMATOR (C)
                    </a>
                    <br />
                    <img src={props.data[6]} height="140vh" width="auto" loading="lazy" />

                    <h4 > I used a 2.9-inch e-paper display and an ESP8266 directly with a 4x4 button matrix to display various on-screen paper-like animations (from 5 bit-masks displayed frame-by-frame), in the palm of your hand. </h4>
                </li>


      <li>
                    <a href="https://github.com/austinhutchen/gestureAI.git" target="_blank"
                        rel="noopener noreferrer" className="hlight-mini">
                        EMBEDDED GESTURE SENSOR (C++)
                    </a>
                    <br />
                    <video controls loop muted height="140vh" width="auto" preload="metadata">
                        <source src={props.data[5] + "#t=0.5"} type="video/mp4" />
                    </video>

                    <h4>A machine learning model implemented on an arduino nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures, as seen above in the video. </h4>

                </li>

                <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                        ARDUINO BYTE ANIMATIONS (C)
                    </a>
                    <br />
                    <video controls loop muted height="140vh" width="auto" preload="metadata" >
                        <source src={props.data[7] + "#t=0.5"} type="video/mp4" />
                    </video>
                    <h4> I utilized bit masks to code byte-level animations for embedded systems using general 16x2 I2C interfacing LCDs. The animations utilized a frame buffer for displaying the images and saving temporarily into local memory. You can see the demo above.</h4>
                </li>

               
                <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/encrypt.C.git" target="_blank"
                        rel="noopener noreferrer">
                        ENCRYPTED TEXT EDITOR (C++)
                    </a>
                    <br />
                    <img src={props.data[1]} height="140vh" width="auto" />

                    <h4> A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also compress text and other(image, video) formats in the future. Coded fully in c.</h4>
                </li>


                <li>
                    <a className="hlight-mini" href={""} target="_blank" rel="noopener noreferrer" >
                        GOOGLE MAPS CLONE (DART/FLUTTER/C)
                    </a>
                    <br />
                    <img src={props.data[4]} height="140vh" width="auto" loading="lazy" />

                    <h4 > A google maps app clone that I coded using flutter and the dart framework. Spent the most time organizing and dealing with location data from google's maps API endpoint, and building a usable interface simialar to google maps. </h4>
                </li>
          

       










                <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noopener noreferrer">
                        NOTES & JOURNAL APP (JAVA, IN PROGRESS)
                    </a>
                    <br />
                    <img src={props.data[8]} height="140vh" width="auto" loading="lazy" />
                    <h4> A (rudimentary) app made for my personal journaling use utilizing the iphone and android local cache storage, that promped the user with daily quotes fetched from an API, and stored journal entries in the user's local cache system. </h4>
                </li>

            
                <li>
                    <a className="hlight-mini" href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                        SIMPLE 2D∼3D T(x) GRAPHER (JAVASCRIPT)
                    </a>
                    <br>
                    </br>



                    <video controls loop muted height="140vh" width="auto" preload="metadata">
                        <source src={props.data[10] + "#t=0.1"} type="video/mp4" />
                    </video>


                    <h5>   A graphing calculator coded in javascript which utilized a plotjs library to plot real-valued linear transformations on both a 2-dimensional and 3-dimensional domain/range, respectively. Helped to visualize many linear algebra concepts like rank, vector spaces, span, and determinants while I took the class. Seen in the video is the ability to also zoom in and localize the transformation, e.g. take the derivative of the function. A simple project, but one that I was grateful to put my love for math into nonetheless. </h5>
                </li>









            </b>
        </ul>
    )
}

export const Projects = (props) => {
    // integrate display component here
    return (
        <>
            <Nav />
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <div style={{ paddingBottom: '0.2em' }}>

                    <h1 className="hlight" >
                        <b>PERSONAL PROJECTS:</b>
                    </h1>

                </div>
                <Body data={props.data} />

            </motion.div>
        </>

    )
}
