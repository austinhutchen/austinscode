import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { CommonCarousel } from '../common/carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
import "../../css/fonts.css";
import '../../css/projects.css'

const Body = (props) => {

    return (
        <>
            <section>
                    <ul className="projectdesc">
                        <b>
                            <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noopener noreferrer">
                                    THIS WEBSITE (REACT/HTML/CSS)
                                </a>
      <h6 > Click the title text for a link to the source code. You can also see more on my projects and personal programming community on my   <a href="https://www.instagram.com/austinscode/" target="_blank" rel="noopener noreferrer">
     <h7><b> <i>Programming Instagram</i> </b> </h7>
      </a>
      </h6>
 
                                             </li>

                            <li>
                                <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer" className="hlight-mini">
                                    UNIX KERNEL SHELL (C)
                                </a>
      <br/>
   <img src = {props.data[0]} height ="140vh" width ="auto"/> 

   <h4 > A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal. </h4> 
                            </li>


   <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/PLANT_COMPUTER_32.git" target="_blank" rel="noopener noreferrer">
                                  ESP32 "PLANT KERNEL" (C) 
                                </a>
      <br/>
  <video controls  loop muted  height ="170vh" width ="auto" preload="metadata">
          <source src={props.data[2]+"#t=0.5"} type="video/mp4" ></source>
        </video>
      <h4 > An economical and power-efficient ESP-32 powered project that reads in data from a custom soil sensor, before checking the capacative sensor byte response and choosing whether or not to servo pump the water into the plant. I aim to upgrade this project with a solar-powered portable battery that can be switched off directly from the ESP-32. </h4>
                                                       </li>


                            <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/encrypt.C.git" target="_blank"
                                    rel="noopener noreferrer">
                                    ENCRYPTED TEXT EDITOR (C++)
                                </a>
  <br/>
       <img src = {props.data[1]} height ="140vh" width ="auto"/> 

      <h4> A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also compress text and other(image, video) formats in the future. Coded fully in c.</h4> 
     </li>
                         
                            <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                    rel="noopener noreferrer">
                                    CALCULATOR APP (FLUTTER/C)
                                </a>
  <br/>
  <img src = {props.data[3]} height ="170vh" width ="auto"/> 

   <h4> A calculator app with support for many different functions, such as factorials, transcendental functions like sin and cosine that utilized taylor series approximations for efficiency, and bit-level square root formulas for blazingly flast performance.  Written in C and programmed for IOS.</h4> 

                            </li>

                            <li>
                                <a className="hlight-mini" href="" target="_blank" rel="noopener noreferrer">
                                    GOOGLE MAPS CLONE (FLUTTER/C)
                                </a>
      <br/>
 <img src = {props.data[4]} height ="140vh" width ="auto"/> 

   <h4 > A google maps app clone that I coded using flutter and the dart framework. Spent the most time organizing and dealing with location data from google's maps API endpoint, and building a usable interface simialar to google maps. </h4> 
          </li>
   <li>
                                <a href="https://github.com/austinhutchen/gestureAI.git" target="_blank"
                                    rel="noopener noreferrer" className="hlight-mini">
                                    EMBEDDED GESTURE SENSOR (C++/NANOLIB )
                                </a>
  <br/>
   <video controls  loop muted  height ="140vh" width ="auto" preload ="metadata">
 <source src={props.data[5]+"#t=0.5"} type="video/mp4" ></source>
</video>

      <h4>A machine learning model implemented on an arduino nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures, as seen above in the video. </h4> 
    
                            </li>
   <li>
                                <a className="hligh-mini" href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer" className="hlight-mini">
                                    4x4 INTERRUPT UART INTERFACE (C)
                                </a>
      <br/>
   <img src = {props.data[6]} height ="140vh" width ="auto"/> 

   <h4 > Using my knowledge of systems processes, I utilized a display interface to work directly with a 4x4 button matrix, and print messages and calculations to the screen, with an arduino nano. </h4> 
                            </li>


   <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noopener noreferrer">
                                   ARDUINO BYTE ANIMATIONS (C) 
                                </a>
      <br/>
  <video controls  loop muted  height ="140vh" width ="auto" preload="metadata" >
          <source src={props.data[7]+"#t=0.5"} type="video/mp4" ></source>
        </video>
   <h4> I coded many byte-level animations for embedded systems. The animations utilized a bit mask, and a frame buffer for displaying the images into local register memory. You can see the demo above.</h4> 
                            </li>
 
                        

                         
      <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                    rel="noopener noreferrer">
                                    WEATHER APP (REACT NATIVE)
                                </a>
<br/>
  <img src = {props.data[9]} height ="140vh" width ="auto"/> 

   <h4>One of my first apps, fetched information about the weather from a javascript API before caching locally and displaying info through a carousel slide to the user. Incorporated state and event-handling, and was my introduction into mobile programming. </h4> 

       </li> 

                         
     <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noopener noreferrer">
                                    NOTES & JOURNAL APP (REACT NATIVE/JAVA)
                                </a>
      <br/>
  <img src = {props.data[8]} height ="140vh" width ="auto"/> 
      <h4> A (rudimentary) app made for my personal journaling use utilizing the iphone and android local cache storage, that promped the user with daily quotes fetched from an API, and stored journal entries in the user's local cache system. </h4>
                            </li>
                       
                       
                         
<br/>
    <li>
                                <a className="hlight-mini" href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noopener noreferrer">
                                    SIMPLE 2D->3D T(x) GRAPHER (JAVASCRIPT)
                                </a>
  <br/>



  <video controls  loop muted  height ="140vh" width ="auto" type="metadata">
          <source src={props.data[10]+"#t=0.5"} type="video/mp4" ></source>
        </video>

           
   <h5>   A graphing calculator coded in javascript which utilized a plotjs library to plot real-valued linear transformations on both a 2-dimensional and 3-dimensional domain/range, respectively. Helped to visualize many linear algebra concepts like rank, vector spaces, span, and determinants while I took the class. Seen in the video is the ability to also zoom in and localize the transformation, e.g. take the derivative of the function. A simple project, but one that I was grateful to put my love for math into nonetheless. </h5> 

                            </li>


                  

                        





                        </b>
                    </ul>
                <br></br>
            </section>
        </>
    )
}

export const Projects = (props) => {
    // integrate display component here
    return (
        <section>
            <Nav></Nav>
            <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.000000001  } }}>
                <div style={{ paddingBottom: 8 }}>

                    <h1 className="hlight" >
                        <b>PERSONAL PROJECTS:</b>
                    </h1>

                </div>

                <CommonCarousel />
                <Body data = {props.data}/>
                <br />

            </motion.div>
        </section>

    )
}
