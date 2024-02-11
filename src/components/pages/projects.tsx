import React, { memo } from "react";
import { motion, LazyMotion, m,domAnimation} from "framer-motion";
import { Nav } from "../common/navbar.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
import "../../css/fonts.css";
import "../../css/slider.css";

type Images = Record<string, string>;

interface Project {
  title: string;
  link: string;
  description: string;
  images: string[];
  video: string[];
}

interface ProjectItemProps {
  project: Project;
}

const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;

const images: Images = {
  shell: getImgPath('shell.webp'),
  calculator: getImgPath('calculator.webp'),
  maps: getImgPath('maps.webp'),
  gesture: getImgPath('gesture.mp4'),
  PLANT_WATERER: getImgPath('PLANT_KERNEL.mp4'),
  encryptc: getImgPath('encryptc.webp'),
  wled2: getImgPath('wled2.mp4'),
  my_interface: getImgPath('interface.webp'),
  notable: getImgPath('journalapp.webp'),
  weather: getImgPath('WEATHER.webp'),
  butterfly: getImgPath('animate.mp4'),
  WEATHER_SENSOR: getImgPath('ESP_WEATHER.webp'),
  search: getImgPath('PYCLI.webp'),
  actix: getImgPath('concurrency-model.webp'),
  game: getImgPath('game1.webp'),
  nano2: getImgPath('nano2.mp4'),
  firecam: getImgPath('firecam.jpg'),
  malloc: getImgPath('malloc.png'),
  // Add other images here
};

const projectsData: Project[] = [
  {
    title: "THIS WEBSITE (TYPESCRIPT)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "My website is designed to be mobile-first, and optimized to run well on any device with an internet connection! Click the title text for a link to the source code. You can see even more on my projects on my Programming Instagram.",
    images: [],
    video: [],
  },

  {
    title: "SOUND REACTIVE WIFI LED ANIMATION MATRIX (C/HTML)",
    link: "https://github.com/austinhutchen/WledStream.git",
    description:
      "Used a Sound-reactive low-power ESP8266, HTTP proxy, I2S MEMS microphone breakout & 16x16 LED matrix to display various animations using a WLED binary flashed directly onto the esp8266. Images could be uploaded and display could be communicated with wirelessly over a wifi app, an HTTP proxy or with an infrared reciever, and even respond with different bounce effects to music (Using the Fast Fourier Transform Signal Decomposition algorithm!)",
    images: [],
    video: ["wled2"],
  },
  {
    title: "CALCULATOR APP (DART/FLUTTER/C)",
    link: "https://github.com/austinhutchen/FASTCALCAPP.c.git",
    description:
      "A calculator app with support for many different functions such as factorials, transcendental functions like cosine that utilise taylor series polynomial approximations for efficiency, and bit-level square root formulas for blazingly flast performance.  Written in C and programmed for IOS.",
    images: ["calculator"],
    video: [],

  },

   {
    title: "ANGULAR WEBCAM APP (TYPESCRIPT/FIREBASE)",
    link: "https://github.com/austinhutchen/angularCamFirebase.git",
    description:
      "Built a webcam uploader and streamer web application deployed with vercel that uploads all captured photo and video feed to a custom real-time firebase database.",
    images: ["firecam"],
    video: [],

  },
 {
    title: "MEMORY ALLOCATION ALGORITHM (C/BASH)",
    link: "https://github.com/austinhutchen/shell.git",
    description:
      " A custom memory allocation algorithm that I coded in C, that utilized a custom malloc and free function to allocate and deallocate memory in a custom heap. The algorithm was also able to properly handle many of the common problems in any computing device with an allocation system, such as memory fragmentation and defragmentation. I implemented the algorithm several times on different platforms, including a custom shell and various larger programs.",
    images: ["malloc"],
    video: [],
  },

  {
    title: "UNIX KERNEL SHELL (C/BASH)",
    link: "https://github.com/austinhutchen/shell.git",
    description:
      " A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user's local terminal.",
    images: ["shell"],
    video: [],
  },
  {
    title: "ARDUINO NANO BLE GESTURE SENSOR (C++)",
    link: "https://github.com/austinhutchen/ArtificalSP.git",
    description:
      "A machine learning model implemented on an Arduino Nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures. As seen in the second video, it is also able to recognize distinct RGB values using the onboard sensors. Trained on data provided by the arduino nano ble sense rev2 sensors.",
    images: [], // Insert your image paths here

    video: ["gesture", "nano2"],

  },
  {
    title: "WEATHER DETECTION MODULE (C/TYPESCRIPT)",
    link: "https://github.com/austinhutchen/weather-sense.ts.git",
    description:
      "Used an ESP8266 & DHT11 serial temperature & humidity sensor along with a 7 segment display with 9V of portable battery power to display real-time local temperature & humidity information over wifi to a react app, while displaying bit transmission on the segmented display. Includes a custom thermistor-checked data correction algorithm on the DHT11 for fixing imprecise temperature measurements. Embedded instructions coded fully in c using the platformio platform, and app was coded using typescript, scss, and the react native framework.",
    images: ["WEATHER_SENSOR", "weather"],
    video: [],
  },
  {
    title: "AUTOMATIC PLANT IRRIGATION SYSTEM (C)",
    link: "https://github.com/austinhutchen/plant_interface.git",
    description:
      "My custom Plant Irrigation System, a cheap and power-efficient ESP-8266 powered system that reads in data from a custom soil sensor.It then checks the capacitive sensor moisture threshold and chooses whether or not to pump the water using a relay and water tube into the plant. I aim to upgrade this project with a solar-powered portable battery that can be switched into deep sleep remotely.",
    images: [],
    video: ["PLANT_WATERER"],
  },

  {
    title: "ZELDA TERMINAL GAME (C++)",
    link: "https://github.com/austinhutchen/levelquest.git",
    description:
      "One of my first projects. 2,000 total lines of c++ code. A turn-based dungeon crawler with graphics embedded within a CLI vector display matrix. Used to practice foundations of object-oriented programming and memory reference.",
    images: ["game"],
    video: [],

  },

  {
    title: "GOOGLE MAPS CLONE (DART/FLUTTER/C)",
    link: "https://github.com/austinhutchen/map-app.git",
    description:
      "A Google Maps app clone that I coded using Flutter and the Dart framework. Spent the most time organizing and dealing with location data from Google's Maps API endpoint and building a usable interface similar to Google Maps.",
    images: ["maps"],
    video: [],

  },
  {
    title: "ARDUINO 8-BIT BITMASK ANIMATOR (C)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "I utilized bit masks to code byte-level animations for embedded systems using general 16x2 I2C interfacing LCDs. The animations utilized an ESP8266 frame buffer for displaying the images and saving temporarily into local memory. You can see the demo above.",
    images: [],
    video: ["butterfly"],
  },

  {
    title: "SOCIAL MEDIA SEARCH ENGINE CLI (PYTHON)",
    link: "https://github.com/austinhutchen/redditsearch.git",
    description:
      "A reddit search engine I built using an older version of python, that functioned using a binary search algorithm to quickly retrieve data at a user's query, such as the top post of the week, top users using a given search term, and many other options. Functioned entirely inside a virtual environment in the user's local terminal.",
    images: ["search"],
    video: [],
  }
  ,
  {
    title: "NOTE-SHARING APP (REACT NATIVE / JAVA)",
    link: "https://github.com/austinhutchen/notable.git",
    description:
      "An app made for note-sharing purposes, which utilized the AsyncStorage library to interface with iPhone and Android local cache storage. The app prompted the user with daily quotes fetched from an API and stored journal entries in the user's local cache system.",
    images: ["notable"],
    video: [],
  },

  {
    title:
      "ENCRYPTED TEXT EDITOR (C++)",
    link: "https://github.com/austinhutchen/encrypt.C.git",
    description:
      "A command line text editor interface, with local save as .txt and full file traversal capability using pointers. The program was able to also fully encrypt and decrypt into binary encodings from text input. I plan to use huffman encoding to also compress text and other(image, video) formats in the future. Coded fully in c.",
    images: ["encryptc"],
    video: [],
  },





  {
    title: " MULTITHREADED E-MAIL SERVER BACKEND (RUST)",
    link: "https://github.com/austinhutchen/newsletter.rs.git",
    description:
      "Multi-threaded & secure newsletter delivery system coded from the ground up in rust, to accomodate the scaling of requests from users on an ACTIX-WEB powered rust server backend. Extensive testing and test cases are packaged, and were used to practice multithreading on server-based routing tasks.",
    images: ["actix"],
    video: [],

  },




  // ... (unchanged)
];

const ProjectList: React.FC = () => (
  <motion.ul initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} exit={{ opacity: 1 }} style={{ listStyleType: "none" }}>
    {projectsData.map((project, index) => (
      <ProjectItem key={index} project={project} />
    ))}
  </motion.ul>
);

const ProjectItem: React.FC<ProjectItemProps> = memo(({ project }) => (
  <li>
    <a className="hlight-mini" style={{ fontSize: "1.1em" }} href={project.link} target="_blank" rel="noopener noreferrer">
      {project.title}
    </a>
    <br />

    {project.images && project.images.map((imageName, imgIndex) => (
      <React.Fragment key={imgIndex}>
        <img src={images[imageName]} height="160vh" maxHeight="100%" maxWidth="100%" width="auto" loading="eager" alt={project.title} />
        <br />
      </React.Fragment>
    ))}
    {project.video && project.video.map((videoName, videoIndex) => (
      <React.Fragment key={videoIndex}>
        <video
          src={images[videoName]}
          loop
          muted
          defaultMuted
          autoPlay
          playsInline
          onContextMenu={(e) => e.preventDefault()}
          type="video/mp4"
          height="160vh" maxHeight="100%" maxWidth="100%" width="auto"
          preload="metadata"
        />
      </React.Fragment>
    ))}

    <b>{project.description}</b>
  </li>
));

export const Projects: React.FC = () => (
  <div className="hlight-mini">

    <LazyMotion features={domAnimation}>

      <Nav />
      <m.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <h1 className="hlight">
          <b>PERSONAL PROJECTS:</b>
        </h1>

        <ProjectList />
      </m.div>
    </LazyMotion>
  </div>
);

