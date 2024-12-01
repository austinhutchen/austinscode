
import React, { useEffect, useRef,useState } from "react";

import ReactWebcam from 'react-webcam';
import { AudioVisualizer } from "../common/AudioVisualizer";
import { NavBar } from "../common/navbar";
import "slick-carousel/slick/slick.css";
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
//const getSubDir = (projName: string) => `/sub/subProj/${projName}`;
const images: Images = {
  shell: getImgPath('shell.webp'),
  calculator: getImgPath('calculator.webp'),
  maps: getImgPath('maps.webp'),
  gesture: getImgPath('gesture.mp4'),
  PLANT_WATERER: getImgPath('PLANT_KERNEL.mp4'),
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
  // Add other images here
};
const projectsData: Project[] = [
  {
    title: "This Website (Typescript)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "My website is designed to be mobile-first, and optimized to run well on any device with an internet connection! Click the title text for a link to the source code. You can see even more on my projects on my Programming Instagram.",
    media: [{}],
  },
  {
    title: "Sound Reactive Wifi Led Animation Matrix (C/HTML)",
    link: "https://github.com/austinhutchen/WledStream.git",
    description:
      "I used a sound-reactive low-power ESP8266 microcontroller device with an HTTP proxy...",
    media: [
      { type: "video", src: images["wled2"] },
      { type: "video", src: images["matrix"] },
    ],
  },
  {
    title: "Arduino Scrolling Led Real Time Clock (C)",
    link: "https://github.com/austinhutchen/RTC_LED.git",
    description:
      "An Arduino offline scrolling 12x8 LED matrix program...",
    media: [{ type: "video", src: images["arduino"] }],
  },
  {
    title: "Calculator App (Dart/Flutter/C)",
    link: "https://github.com/austinhutchen/FASTCALCAPP.c.git",
    description:
      "A calculator app with support for many different functions...",
    media: [{ type: "image", src: images["calculator"] }],
  },
  {
    title: "Microphone Sound Spectrum Analyzer (Angular/Typescript)",
    link: "https://github.com/austinhutchen/austinscode/src/components/pages/sub/AudioVisualizer.tsx",
    description:
      "A simple microphone spectrum analyzer that displays the soundwaves...",
    media: [{ type: "video", src: images["sine"] }],
  },
  {
    title: "Arduino Nano BLE Gesture Sensor (C++)",
    link: "https://github.com/austinhutchen/ArtificalSP.git",
    description:
      "A machine learning model implemented on an Arduino Nano BLE microcontroller...",
    media: [
      { type: "video", src: images["gesture"] },
      { type: "video", src: images["nano2"] },
    ],
  },
  {
    title: "Mini Kernel Shell (C/Bash)",
    link: "https://github.com/austinhutchen/shell.git",
    description:
      "A shell is the user's primary interface into any UNIX/OSX/WINDOWS operating system...",
    media: [{ type: "image", src: images["shell"] }],
  },
  {
    title: "Mood Maps Api (Javascript/Css)",
    link: "https://github.com/austinhutchen/thevibecheck",
    description:
      "A Google Maps app interface that returns locations based on your mood...",
    media: [{ type: "image", src: images["maps"] }],
  },
  {
    title: "Arduino 8-Bit Bitmask Animator (C)",
    link: "https://github.com/austinhutchen/austinscode",
    description:
      "I utilized bit masks to code byte-level animations for embedded systems...",
    media: [{ type: "video", src: images["butterfly"] }],
  },
  {
    title: "Automatic Plant Irrigation System (C)",
    link: "https://github.com/austinhutchen/plant_interface.git",
    description:
      "A low-cost and power-efficient ESP-8266 powered system...",
    media: [{ type: "video", src: images["PLANT_WATERER"] }],
  },
  {
    title: "MALLOC() Algorithm (C/Bash)",
    link: "https://github.com/austinhutchen/cMalloc",
    description:
      "This is a memory algorithm that I coded in C similar to MALLOC()...",
    media: [{ type: "image", src: images["malloc"] }],
  },
  {
    title: "Portable 9V Weather Detection Module (C/Typescript)",
    link: "https://github.com/austinhutchen/weather-sense.ts.git",
    description:
      "Used an ESP8266 and DHT11 serial temperature & humidity sensor...",
    media: [
      { type: "image", src: images["WEATHER_SENSOR"] },
      { type: "image", src: images["weather"] },
    ],
  },
  {
    title: "Zelda Terminal Game (C++)",
    link: "https://github.com/austinhutchen/levelquest.git",
    description:
      "One of my first projects. A turn-based dungeon crawler...",
    media: [{ type: "image", src: images["game"] }],
  },
  {
    title: "Social Media Search Engine Cli (Python)",
    link: "https://github.com/austinhutchen/redditsearch.git",
    description:
      "A Reddit search engine I built using an older version of Python...",
    media: [{ type: "image", src: images["search"] }],
  },
  {
    title: "Note-Sharing App (React Native / Java)",
    link: "https://github.com/austinhutchen/notable.git",
    description:
      "An app made for note-sharing purposes, utilizing AsyncStorage...",
    media: [{ type: "image", src: images["notable"] }],
  },
  {
    title: "Encrypted Text Editor (C++)",
    link: "https://github.com/austinhutchen/encrypt.C.git",
    description:
      "A command-line text editor interface with encryption capabilities...",
    media: [{ type: "image", src: images["encryptc"] }],
  },
  {
    title: "Multithreaded E-Mail Server Backend (Rust)",
    link: "https://github.com/austinhutchen/newsletter.rs.git",
    description:
      "A multi-threaded and secure newsletter delivery system coded in Rust...",
    media: [{ type: "image", src: images["actix"] }],
  },
];
const ProjectList: React.FC = () => (
  <div className="projectList">
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
      <div className="fadeSide">
       
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
              key={mediaItem.src}
              ref={el => mediaRefs.current[index] = el}
              data-src={mediaItem.src}
              autoPlay
              className="projVid"
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

export const Projects: React.FC = () => {
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef<ReactWebcam | null>(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    console.log("Captured image:", imageSrc);
  };

  const handleShowWebcam = () => {
    setShowWebcam(true);
  };

  useEffect(() => {
    return () => {
      webcamRef.current?.video?.srcObject &&
        (webcamRef.current?.video?.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div>
      <NavBar />
        <h1 className="hlight">
          <b>PERSONAL PROJECTS:</b>
        </h1>

            <div className="fadeSide" style={{ margin: '0 auto' }}>
              <h2 className="hlight"> Microphone Fast Fourier Transform (Typescript)</h2>
              <br />
              <b>
                <p className='projDesc' style={{ fontSize: "0.9em" }} >
                  <a> <h4 className='hlight-mini'>Enable microphone input</h4> </a> to visualize this effect in real time with the interface below! This is a web program that uses the fast fourier transform algorithm to decompose your microphone's audio spectrum. The program then displays your voice's audio spectrum in an HTML canvas element, for you to see.
                </p>
              </b>
            </div>
            <div className="FFT">
      <AudioVisualizer
        stream={webcamRef.current?.video?.srcObject as MediaStream | null}
        setStream={() => {}}
      />
<br/>
              <h2 className="hlight"> Webcam Capture Engine (Typescript)</h2>
              <br />
              <b>
                <p className='projDesc' style={{ fontSize: "0.9em" }} >
                  <a> <h4 className='hlight-mini'>Enable webcam input</h4> </a> to see your face and apply effects in real time with the interface below! This is a web program that uses the webMedia API and blob decoding to decode your devices's streamed video. The program then displays your face to see!                </p>
              </b>
            </div>
      {!showWebcam && <button onClick={handleShowWebcam}>Enable Webcam</button>}

      {showWebcam && (
        <>
          <ReactWebcam ref={webcamRef} screenshotFormat="image/jpeg" width={320} height={240} />
          <button onClick={captureImage}>Capture Photo</button>
        </>
      )}

      <ProjectList />
    </div>
  );
};
