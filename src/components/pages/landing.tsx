import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import TagCloud from "TagCloud";
import { HiArrowNarrowRight } from 'react-icons/hi';
import "../../css/TextSphere.css";
import { NavBar } from "../common/navbar";
import { Spinner } from '../common/symbols';

const TextSphere: React.FC = () => {
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "Code by me!",
      "Typescript",
      "Network Engineering",
      "PHP",
      "Go",
      "Bash",
      "Python",
      "Flutter",
      "React.JS",
      "C++",
      "Embedded Systems",
      "Rust",
      "Dart",
      "C",
      "Node.JS",
      "Algorithm Analysis",
      "Dynamic Programming",
      "C#",
      "X86 Assembly",
      "Java",
      "SQL",
      "PHP",
      "GraphQL",
      "React Native",
      "and more!.."
    ];
    const options = {
      radius: 200,
      keep: true,
      loop: true,
      lockX: true,
      lockY: true,
    };

    if (container) {
      TagCloud(container, texts, options);
    }

    return () => {
      if (container) {
        TagCloud(container, [], {});
      }
    };
  }, []);

  return (
    <div className="text-sphere">
      <b>
        <span className="tagcloud" ref={containerRef}></span>
      </b>
    </div>
  );
};


export const Landing: React.FC = () => {
  const nav = useNavigate();
  const github = process.env.PUBLIC_URL + '/fast_imgs/github.webp';
  const intro = process.env.PUBLIC_URL + '/fast_imgs/nerdy.gif';
  return (
    <>

      <NavBar />
      <div className='animateLand'>
   

  
        <div className='introText'>
        <h2 className="hlight-mini" >
          <b>Welcome to my website! I'm Austin, a Backend Software Engineer and Computer Optimization Nerd.</b>
        </h2>
        <div className="nerdGif"><img title="math" src={intro} />
        </div>
          <div className='intro'>
            <h2>
              As a natural tinkerer and Computer Science student (BSc 2025), I excel at large-scale software development, experimenting with analog electronic circuits, enjoy building complex IoT systems, and reading mathematics. I’ve also enjoyed teaching Calculus 2 through the <a href="https://www.colorado.edu/program/learningassistant/">Learning Assistant Program  </a> at the University of Colorado Boulder. Additionally, I personally developed a proprietary
              <a href="https://modbus.org/docs/Modbus_over_serial_line_V1.pdf"> ModBus C# library </a> for <a href="https://www.formfactor.com"> FormFactor Boulder </a>, a cryogenic quantum computing solutions company. Proficient in TypeScript, PHP, C#, React Native, and C++, <a> I actively contribute to emerging open-source projects.</a> Let’s connect below and explore new opportunities! 🚀🌟
            </h2>

          </div>
        </div>

        <a href="https://github.com/austinhutchen" rel="noopener noreferrer">
          <img src={github} title="GitHub" style={{
            maxWidth: "10vw",
          }} />
        </a>
        <br />
        <button
          style={{ marginBottom: '0.2em' }}
          className="btn btn-success"
          type="button"
          id="navbar"
          onClick={() => {
            nav('/AboutMe');
          }}
        >
          More About Me
          <HiArrowNarrowRight size={'0.8em'} className="ml-3" />
        </button>
        <br />
        <button
          style={{ marginBottom: '0.2em' }}
          className="btn btn-success"
          type="button"
          id="navbar"
          onClick={() => {
            nav('/Projects');
          }}
        >
          My Projects!
          <HiArrowNarrowRight size={'0.8em'} className="ml-3" />
        </button>
        <br />
        <div className="landImage">

        </div>
        <TextSphere />
        <Spinner />
      </div >
    </>
  );
};

