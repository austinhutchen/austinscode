
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
};

const projectsData: Project[] = [
  {
    title: "This Website (Typescript)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "My website is programmed from the ground up to be mobile-first, optimized to run well on any device with an internet connection! Click the title text for a link to the source code.",
    media: [{}],
  },

 

  {
    title: "Calculator App (Dart/Flutter/C)",
    link: "https://github.com/austinhutchen/FASTCALCAPP.c.git",
    description: "A calculator app with support for many different functions like factorials, transcendental functions like cosine that utilize Taylor series polynomial approximations for efficiency, and bit-level square root formulas. Written in C and programmed for IOS.",
    media: [{ type: "image", src: images["calculator"] }],
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
    link: "https://github.com/mali7617/thevibecheck",
    description:
     "A Google Maps app interface that was built using Javascript, handlebars, and a SQL backend. Working on a team, I spent the most time organizing and dealing with location data from Google’s Maps API endpoint and building a usable interface similar to Google Maps, that returns locations nearby based on your mood.",
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
    title: "Malloc() Algorithm (C/Bash)",
    link: "https://github.com/austinhutchen/cMalloc",
    description:
      "This is a memory algorithm that I coded in C similar to MALLOC(), that utilized specialized allocation and free functions to allocate and deallocate memory in a custom heap. The algorithm was also able to properly handle many problems present in any computing device with an allocation system, such as memory fragmentation and defragmentation. I implemented the algorithm several times on different platforms, and included within it a custom shell as well as several embedded Linux projects.",
    media: [{ type: "image", src: images["malloc"] }],
  },

  {
    title: "Zelda Terminal Game (C++)",
    link: "https://github.com/austinhutchen/levelquest.git",
    description:
      "One of my first projects. A turn-based dungeon crawler with graphics embedded within a command-line based vector display matrix. Used to practice foundations of object-oriented programming, memory reference, and messing around with vectors and the cstd::io library.",
    media: [{ type: "image", src: images["game"] }],
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
