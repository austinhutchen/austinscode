import { LazyMotion, domAnimation,m } from "framer-motion";
import LazyLoad from 'react-lazyload';

import { Nav } from "../common/navbar.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.scss";
import "../../css/fonts.scss";
import "../../css/QUERIES.scss"
import React, { memo } from "react"



export const Projects: React.FC<BodyProps> = (props) => {

interface Project {
  title: string;
  link: string;
  description: string;
  images: string[];
  video: string[];
}


const projectsData:Project = [
{
    title: "THIS WEBSITE (TYPESCRIPT)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "My website is designed to be mobile-first, and optimized to run well on any device with an internet connection! Click the title text for a link to the source code. You can see even more on my projects on my Programming Instagram.",
    images: [],
    video: [],
  },
      {
    title:    "SOUND REACTIVE WIFI LED ANIMATION MATRIX (C/HTML)",
    link: "https://github.com/austinhutchen/weather-sense.ts.git",
    description:
"Used a Sound-reactive low-power ESP8266, I2S MEMS microphone breakout & 16x16 LED matrix to display various animations using a WLED firmware flashed directly onto the esp8266. Images could be uploaded and display could be communicated with wirelessly over a wifi app, an HTTP proxy, or with an infrared reciever, and even respond with different bounce effects to music (Using the Fast Fourier Transform Signal Decomposition algorithm!)",
    images: [],
    video: [props.data[18],props.data[19] ],
  },
 {
      title: "ARTIFICALLY INTELLIGENT GESTURE SENSOR (C++)",
      link: "https://github.com/austinhutchen/ArtificalSP.git",
      description:
        "A machine learning model implemented on an Arduino Nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures. Trained on data provided by the arduino nano ble sense rev2 sensors.",
      images: [], // Insert your image paths here

   video: [props.data[5] ],

    },
 {
      title: "AUTOMATIC PLANT IRRIGATION SYSTEM (C)",
      link: "https://github.com/austinhutchen/plant_interface.git",
      description:
        "My custom Plant Irrigation System, a cheap and power-efficient ESP-8266 powered system that reads in data from a custom soil sensor.It then checks the capacitive sensor moisture threshold and chooses whether or not to pump the water using a relay and water tube into the plant. I aim to upgrade this project with a solar-powered portable battery that can be switched off directly from the ESP-8266.",
      images: [props.data[11] ], // Insert your image paths here
   video: [],
    },
  {    title: "CALCULATOR APP (DART/FLUTTER/C)",
    link: "https://github.com/austinhutchen/FASTCALCAPP.c.git",
    description:
      "A calculator app with support for many different functions, such as factorials, transcendental functions like sin and cosine that utilized taylor series approximations for efficiency, and bit-level square root formulas for blazingly flast performance.  Written in C and programmed for IOS.",
    images: [props.data[3] ],
       video: [],

},
  {
    title:    "WEATHER DETECTION MODULE (C/TYPESCRIPT)",
    link: "https://github.com/austinhutchen/weather-sense.ts.git",
    description:
"Used an ESP8266 & DHT11 serial temperature & humidity sensor along with a 7 segment display (displaying 7-bit I2C transmission to ESP32) with 9V of portable battery power to display real-time information over wifi to a react app, and display reading accuracy levels on the display. Includes a custom thermistor-checked data correction algorithm on the DHT11 for fixing imprecise temperature measurements. Embedded instructions coded fully in c using the platformio platform, and app was coded using typescript, scss, and the react native framework.",
    images: [props.data[12], props.data[9] ],
    video: [],
  },
{ title: "UNIX KERNEL SHELL (C/BASH)" ,
    link: "https://github.com/austinhutchen/shell.git",
    description:
      " A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal." ,
    images: [props.data[0]],
    video: [],
},





  {    title: "ZELDA TERMINAL GAME (C++)",
    link: "https://github.com/austinhutchen/levelquest.git",
    description:
      "One of my biggest projects, and also one of my first. Built a turn-based dungeon crawler with graphics embedded within a display matrix. Used to practice foundations of object-oriented programming and memory reference.",
    images: [props.data[20] ],
       video: [],

},

    {
      title: "GOOGLE MAPS CLONE (DART/FLUTTER/C)",
      link: "https://github.com/austinhutchen/map-app.git",
      description:
        "A Google Maps app clone that I coded using Flutter and the Dart framework. Spent the most time organizing and dealing with location data from Google's Maps API endpoint and building a usable interface similar to Google Maps.",
      images: [props.data[4] ], // Insert your image paths here,
       video: [], // Insert your video path here,

    }     ,
  {
      title: "ARDUINO 8-BIT BITMASK ANIMATOR (C)",
      link: "https://github.com/austinhutchen/austinscode",
      description:
        "I utilized bit masks to code byte-level animations for embedded systems using general 16x2 I2C interfacing LCDs. The animations utilized an ESP8266 frame buffer for displaying the images and saving temporarily into local memory. You can see the demo above.",
      images: [ ], // Insert your image paths here
      video: [props.data[7] ], // Insert your video path here
    },

    {  title: "SOCIAL MEDIA SEARCH ENGINE CLI (PYTHON)",
    link: "https://github.com/austinhutchen/redditsearch.git",
    description:
    "A reddit search engine I built using an older version of python, that functioned using a binary search algorithm to quickly retrieve data at a user's query, such as the top post of the week, top users using a given search term, and many other options. Functioned entirely inside a virtual environment in the user's local terminal.",
    images: [props.data[13]], video: [],  }
,
        {
      title: "NOTE-SHARING APP (REACT NATIVE / JAVA)",
      link: "https://github.com/austinhutchen/notable.git" ,
      description:
        "An app made for note-sharing purposes, which utilized the AsyncStorage library to interface with iPhone and Android local cache storage. The app prompted the user with daily quotes fetched from an API and stored journal entries in the user's local cache system.",
      images: [props.data[8] ], // Insert your image paths here
      video: [], // Insert your video path here
    },

        {
      title:
      "ENCRYPTED TEXT EDITOR (C++)",
      link:"https://github.com/austinhutchen/encrypt.C.git",
      description:
       "A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also compress text and other(image, video) formats in the future. Coded fully in c.",
      images: [props.data[1]], // Insert your image paths here
      video: [], // Insert your video path here
    },


  { title: "PHPLIB (PHP)",
    link:  "https://github.com/austinhutchen/PHPland.git",
    description:
     "A collection of various PHP server scripting projects. Among them are a serving system for uploading data directly from an ESP32 into a MYSQLI database storage using PHP scripting, and a system for communicating data directly WITH an ESP32 using HTTP protocol and interpretation. PHP is one of my favorite languages.",
    images: [props.data[16 ]],
    video: [],
  },

  { title:                       "VARIOUS BASH SHELL SCRIPTS",
  link:"https://github.com/austinhutchen/scripts.git" ,
    description: "Coded using bash and kernel commands on mac OSX capable systems, I coded a VARIABLE-BIT PASSWORD GENERATOR, NMAP SCANNER, FILE TREE PRINTER, and SQL database initialization from within the CLI." ,
    images: [props.data[15] ],
    video: [],
    },


      { title:                       " MULTITHREADED E-MAIL SERVER BACKEND (RUST)",
  link: "https://github.com/austinhutchen/austinscode",
    description:
    "Multi-threaded & secure newsletter delivery system coded from the ground up in rust, to accomodate the scaling of users on a quick ACTIX-WEB powered rust server backend. Extensive testing and test cases are packaged, and were used to practice building test cases for server-based tasks.",
    images: [props.data[14] ],
      video: [], // Insert your video path here

},
       {
     title: "ALGORITHMS (C++)",
    link:  "https://github.com/austinhutchen/CALGORITHMS.git",
    description:
     "A library I created to store data structures and algorithms that I use in my projects frequently or like to have on hand, coded by me from scratch using pointers in c++. Included is straussen's matrix multiplication algorithm, a fast-fourier-transform implementation, various implementations of hash tables with collision-checking, binary trees, graphs,and much more.",
    images: [props.data[17 ]],
    video: [],
  },

  {
      title: "REGEX-LIKE IEE FLOATING POINT PARSER (C)",
      link:"https://github.com/austinhutchen/FLOATING_PARSER.C.git",
      description:
     " A parser I built for parsing +/- floating point values from a .txt file and storing them in a matrix. Works similar to the REGEX <code> [+-]?([0-9]+([.][0-9]*)?|[.][0-9]+).</code> Initially used in a matrix multiplication algorithm, before I patched and extended capability to allow for interfacing with any .txt comma-seperated file.",
      images: [props.data[16]], // Insert your image paths here
      video: [], // Insert your video path here
    },

      {
      title: "PAPER-LIKE ESP32 ANIMATOR (C)",
      link: "https://github.com/austinhutchen/austinscode",
      description:
        "I used a 2.9-inch e-paper display and an ESP8266 directly with a 4x4 button matrix to display various on-screen paper-like animations (from 5 bit-masks displayed frame-by-frame), in the palm of your hand.",
      images: [props.data[6]], // Insert your image paths here

      video: [], // Insert your video path here

    },
    {
      title: "LINEAR TRANSFORMATION GRAPH ENGINE (JAVASCRIPT)",
      link: "https://github.com/austinhutchen/GAMMA.JS.git",
      description:
        "A graphing calculator coded in javascript which utilized a plotjs library to plot real-valued linear transformations on both a 2-dimensional and 3-dimensional domain/range, respectively. Helped to visualize many linear algebra concepts like rank, vector spaces, span, and determinants while I took the class. Seen in the video is the ability to also zoom in and localize the transformation, e.g. take the derivative of the function. A simple project, but one that I was grateful to put my love for math into nonetheless.",
      images: [], // Insert your image paths here
      video: [props.data[10]], // Insert your video path here
    },

];

const ProjectItem = memo(({ project }) => (

 <li>
    <a className="hlight-mini" style={{ fontSize: "1.1em" }} href={project.link} target="_blank" rel="noopener noreferrer">
      {project.title}
    </a>
    <br />
    {/* Lazy load images */}
    <LazyLoad height={200} offset={100}>
      {projectsData.images && projectsData.images.map((src, imgIndex) => (
        <img key={imgIndex} src={src} height="145vh" width="auto" loading="lazy" />
      ))}
    </LazyLoad>
    {/* Lazy load videos */}
{projectsData.video && projectsData.video.map((src, Index) => (
      <LazyLoad height={200} offset={100} key={Index}>
        <video
          src={src}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          onContextMenu={(e) => e.preventDefault()}
          loading="eager"
          type="video/mp4"
          height="150vh"
          width="auto"
          preload="metadata"
        />
      </LazyLoad>
    ))}
</li>
));


const ProjectList = ({ projectsData }) => (
  <ul className="projectdesc">
    {projectsData.map((project, index) => (
      <ProjectItem key={index} project={project} />
    ))}
  </ul>
);

  return (
 <LazyMotion features={domAnimation}>
    <Nav />
    <m.div initial={{ width: 0}} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
      <h1 className="hlight">
        <b>PERSONAL PROJECTS:</b>
      </h1>
      <div className="projects">
        <ProjectList projectsData={projectsData} />
      </div>
    </m.div>
  </LazyMotion>
);
};


