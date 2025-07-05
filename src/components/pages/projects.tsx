
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
    title: "Note App (Javascript/CSS)",
    link: "https://github.com/mali7617/thevibecheck",
    description:
     "A Note app interface that was initially built using Javascript, and styled with css. Stored note data in the users local cache using the localStorage API. ",
    media: [{ type: "image", src: images["notable"] }],
  },

  {
    title: "webCam App (Typescript/CSS)",
    link: "https://github.com/mali7617/thevibecheck",
    description:
     "A webCam interface that was initially built using Typescript, and used the FEAN stack to efficiently store data in FireBase. Compressed image and video into BLOB formats for server storage.",
    media: [{ type: "video", src: images["webcam"] }],
  }

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
