
import React, { useEffect, useRef,useState } from "react";

import { AudioVisualizer } from "../common/AudioVisualizer";
import {FunctionGrapher} from "../common/FunctionGrapher";
import { NavBar } from "../common/navbar";
import "../../css/dimensions.css";
import "../../css/fonts.css";
import "../../css/slider.css";
type Images = Record<string, string>;

interface Project {
  title: string;
  link: string;
  description: string;
  media: any[];
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
  encryptc: getImgPath('encryptc.webp'),
  wled2: getImgPath('WLED2.mp4'),
  my_interface: getImgPath('interface.webp'),
  notable: getImgPath('journalapp.webp'),
  weather: getImgPath('WEATHER.webp'),
  butterfly: getImgPath('animate.mp4'),
  WEATHER_SENSOR: getImgPath('ESP_WEATHER.webp'),
  search: getImgPath('PYCLI.webp'),
  actix: getImgPath('concurrency-model.webp'),
  game: getImgPath('game1.webp'),
  nano2: getImgPath('nano2.mp4'),
  firecam: getImgPath('firecam.webp'),
  malloc: getImgPath('malloc.webp'),
  matrix: getImgPath('matrix.mp4'),
  sine: getImgPath('sinMic.mp4'),
  arduino: getImgPath('arduino.mp4'),
  ecommerce: getImgPath('emarket.webp'),
  webcam: getImgPath('webCam.mp4')
  // Add other images here
};
const projectsData: Project[] = [
  {
    title: "This Website (Typescript)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "My website is programmed from the ground up to be mobile-first, optimized to run well on any device with an internet connection! Click the title text for a link to the source code. You can see even more on my projects on my Programming Instagram.",
    media: [{}],
  },
  {
    title: "Sound Reactive Wifi Led Animation Matrix (C/HTML)",
    link: "https://github.com/austinhutchen/WledStream.git",
    description: "I used a sound-reactive low-power ESP8266 microcontroller device with an HTTP proxy, an I2S MEMS microphone breakout, and a 16x16 LED matrix to display various animations. I flashed a WLED binary directly onto the ESP8266. Additionally, I have a later version based on the Espressif ESP32, which is low-power and portable. This version features an 8x8 matrix and an option for battery power. Images can be uploaded and the display can be controlled wirelessly via a Wi-Fi app, an HTTP proxy, or an infrared receiver. Furthermore, it can respond with different bounce effects to music by utilizing the Fast Fourier Transform Signal Decomposition algorithm!",
    media: [
      { type: "video", src: images["wled2"] },
      { type: "video", src: images["matrix"] },
    ],
  },
     {
    title: "Photobooth App (Typescript, FEAN stack)",
    link: "https://github.com/austinhutchen/webCam",
    description:
    "A secure web interface to take or edit photos and videos. Inspired by PhotoBooth for Mac, and uses amazon firebase storage to store the blob data. ",
    media: [{type:"video", src: images["webcam"]}],
  },

  {
    title: "Arduino Scrolling Led Real Time Clock (C)",
    link: "https://github.com/austinhutchen/RTC_LED.git",
    description:
 "An Arduino offline scrolling 12x8 LED matrix program, which I wrote using C and the arduino’s onboard battery RTC (Real Time Clock) module for timekeeping. The text scrolled across a 12x8 LED matrix using code I wrote.",
    media: [{ type: "video", src: images["arduino"] }],
  },
  {
    title: "Calculator App (Dart/Flutter/C)",
    link: "https://github.com/austinhutchen/FASTCALCAPP.c.git",
    description: "A calculator app with support for many different functions like factorials, transcendental functions like cosine that utilize Taylor series polynomial approximations for efficiency, and bit-level square root formulas for blazingly fast performance. Written in C and programmed for IOS.",
    media: [{ type: "image", src: images["calculator"] }],
  },


  {
    title: "Sine Wave Analyzer (Angular/Typescript)",
    link: "https://github.com/austinhutchen/austinscode/src/components/pages/sub/AudioVisualizer.tsx",
    description:"A simple microphone spectrum analyzer that displays the soundwaves of your device’s microphone input using the Typescript webMedia API, html 2D canvas, Angular framework. I made this because I love playing music, and seeing the sine waves fluctuate live.",
    media: [{ type: "video", src: images["sine"] }],
  },
 
   
  {
    title: "Arduino Nano BLE Gesture Sensor (C++)",
    link: "https://github.com/austinhutchen/ArtificalSP.git",
    description:"A machine learning model implemented on an Arduino Nano BLE microcontroller that can sense and respond to various distinct Left-Right-Up-Down gestures. As seen in the second video, it is also able to recognize distinct RGB values using the onboard sensors. Trained on data provided by the Arduino Nano BLE sense rev2 sensors.",
    media: [
      { type: "video", src: images["gesture"] },
      { type: "video", src: images["nano2"] },
    ],
  },

    {
    title: "Mood Maps (Javascript/CSS)",
    link: "https://thevibecheck.onrender.com",
    description:
     "A Google Maps app interface that I coded using Javascript. Working on a team, I spent the most time organizing and dealing with location data from Google’s Maps API endpoint and building a usable interface similar to Google Maps, that returns locations nearby based on your mood.",
    media: [{ type: "image", src: images["maps"] }],
  },
  {
    title: "Mini Kernel Shell (C/Bash)",
    link: "https://github.com/austinhutchen/shell.git",
    description: "A shell is the user’s primary interface into any UNIX/OSX/WINDOWS operating system. Coding this provided me with a wealth of systems and UNIX knowledge. The kernel implemented killing and starting of processes, and functioned inside the user’s local terminal.",
    media: [{ type: "image", src: images["shell"] }],
  },

  {
    title: "Arduino 8-Bit Bitmask Animator (C)",
    link: "https://github.com/austinhutchen/austinscode",
    description: "I utilized bit masks to code byte-level animations for embedded systems using general 16x2 I2C interfacing LCDs. The animations utilized an Arduino Uno R3 frame buffer for displaying the images and saving temporarily into local memory",
    media: [{ type: "video", src: images["butterfly"] }],
  },
   {
    title: "Modern Ecommerce Fashion Site (Typescript & Angular)",
    link: "https://dlor.vercel.app/",
    description: "Made at the request of a client. Functions as an ecommerce marketplace with several layers, transitions, and animations built in.",
    media: [
      { type: "image", src: images["ecommerce"] }
    ],
  },
 {
    title: "Malloc() Algorithm (C/Bash)",
    link: "https://github.com/austinhutchen/cMalloc",
    description:
      "This is a memory algorithm that I coded in C similar to MALLOC(), that utilized specialized allocation and free functions to allocate and deallocate memory in a custom heap. The algorithm was also able to properly handle many problems present in any computing device with an allocation system, such as memory fragmentation and defragmentation. I implemented the algorithm several times on different platforms, and included within it a custom shell as well as several embedded Linux projects.",
    media: [{ type: "image", src: images["malloc"] }],
  },
  {
    title: "Portable 9v Weather Detection Module (C/Typescript)",
    link: "https://github.com/austinhutchen/weather-sense.ts.git",
    description:
      "Used an ESP8266 and DHT11 serial temperature & humidity sensor along with a 7-segment display with 9V of portable battery power to display real-time local temperature & humidity information over wifi to a react app, while displaying bit transmission on the segmented display. Includes a custom thermistor-checked data correction algorithm on the DHT11 for fixing imprecise temperature measurements. Embedded instructions coded fully in C using the platformio platform, and app was coded using TypeScript, SCSS, and the React Native framework.",
    media: [
      { type: "image", src: images["WEATHER_SENSOR"] },
      { type: "image", src: images["weather"] },
    ],
  },
  {
    title: "Zelda Terminal Game (C++)",
    link: "https://github.com/austinhutchen/levelquest.git",
    description:
      "One of my first projects. A turn-based dungeon crawler with graphics embedded within a command-line based vector display matrix. Used to practice foundations of object-oriented programming, memory reference, and messing around with vectors and the cstd::io library.",
    media: [{ type: "image", src: images["game"] }],
  },
  {
    title: "Social Media Search Engine CLI (Python)",
    link: "https://github.com/austinhutchen/redditsearch.git",
    description:
      "A Reddit search engine I built using an older version of Python, that functioned using a binary search algorithm to quickly retrieve data at a user's query, such as the top post of the week, top users using a given search term, and many other options. Functioned entirely inside a virtual environment in the user's local terminal.",
    media: [{ type: "image", src: images["search"] }],
  },
  {
    title: "Note-Sharing App (React Native / Java)",
    link: "https://github.com/austinhutchen/notable.git",
    description:
      "An app made for note-sharing purposes, utilizing AsyncStorage library to interface with iPhone and Android local cache storage. The app prompted the user with daily quotes fetched from an API and stored journal entries in the user's local cache system.",
    media: [{ type: "image", src: images["notable"] }],
  },
  {
    title: "Encrypted Text Editor (C++)",
    link: "https://github.com/austinhutchen/encrypt.C.git",
    description:
      "A command-line text editor interface with the ability to save text data to a local file on the user's computer. The program utilized pointers and vectors for file traversal capability. Added in the last release (2021) was the ability to fully encrypt and decrypt into binary encodings from text input. I plan to use Huffman encoding to also compress text and other (image, video) formats in the future. Coded fully in C.",
    media: [{ type: "image", src: images["encryptc"] }],
  },
  {
    title: "Multithreaded E-Mail Server Backend (Rust)",
    link: "https://github.com/austinhutchen/newsletter.rs.git",
    description:
      "A multi-threaded and secure newsletter delivery system coded from the ground up in Rust, to accommodate the scaling of requests from users on an ACTIX-WEB powered Rust server backend. Extensive testing and test cases are packaged, and were used to practice multithreading on server-based routing tasks.",
    media: [{ type: "image", src: images["actix"] }],
  },

 ];
const ProjectList: React.FC = () => (
  <div className="projVid" >
    {projectsData.map((project, index) => (
      <ProjectItem key={index} project={project} />
    ))}
  </div>
);

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const mediaRefs = useRef<(HTMLImageElement | HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    mediaRefs.current = mediaRefs.current.slice(0, project.media.length);
    for (const mediaRef of mediaRefs.current) {
      if (mediaRef) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (mediaRef instanceof HTMLImageElement) {
                mediaRef.src = mediaRef.dataset.src || '';
              } else if (mediaRef instanceof HTMLVideoElement) {
                const source = document.createElement('source');
                source.src = mediaRef.dataset.src || '';
                mediaRef.appendChild(source);
                mediaRef.load();
              }
              observer.disconnect();
            }
          });
        }, { rootMargin: '-10px' });
        observer.observe(mediaRef);
        observers.push(observer);
      }
    }
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [project]);
  return (
    <div>
      <div className="fadeSide" style={{textShadow: "2px 2px 4px black"}} >
       
  <h2 className="hlight">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h2> 
        <br />
      </div>
      {project.media.map((mediaItem, index) => {
        if (mediaItem.type === 'video') {
          return (
            <video
              className="projImg"
              key={mediaItem.src}
              ref={el => mediaRefs.current[index] = el}
              data-src={mediaItem.src}
              autoPlay
              muted
              playsInline
              loop
            />
          );
        } else if (mediaItem.type === 'image') {
          return (
            <img
              className="projImg"
              key={mediaItem.src}
              ref={el => mediaRefs.current[index] = el}
              data-src={mediaItem.src}
              alt={project.title}
            />
          );
        } else {
          return null;
        }
      })}
      <div className="projDesc">
        <div className="fadeSide" style={{ margin: '0 auto'}}>
          <br />
          <p>{project.description}</p>
      </div>
      </div>
    </div>
  );
};
// Main Projects Component
export const Projects: React.FC = () => {
    const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
    // Request microphone access

    return (
    <div>
      <NavBar />
      <h1 className="hlight">
        <b>PERSONAL PROJECTS:</b>
      </h1>

      <div className="fadeSide" style={{ margin: '0 auto', textShadow: "2px 2px 4px black" }}>
             <h2 className="hlight"> <a href="https://github.com/austinhutchen/austinscode/tree/master/src/components/common" rel="noopener noreferrer">FM Sound Spectrum Analyzer </a> </h2>
        <br />
          <div className='projDesc'>
          <div className='fadeSide' style={{ margin: '0 auto'}}>
<p >
              Visualize this effect in real time with the interface below! This is a web program that uses the <a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform" rel="noopener noreferrer">  <h4 className="hlight">  Fast Fourier Transform </h4> </a>
algorithm to decompose your microphone's audio spectrum. The program then displays your voice's audio spectrum in an HTML canvas element, for you to see.
          </p>
          </div>
          </div>
      </div>

      <AudioVisualizer
       stream={audioStream}
        setStream={setAudioStream}
      />
<br/>
<FunctionGrapher/> 

      <ProjectList />
    </div>
  );
};
