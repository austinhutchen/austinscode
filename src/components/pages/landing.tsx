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
        <h2 className="hlight-mini" style={{ paddingTop: '4vw', fontSize: '3.6vh' }}>
          <b>Welcome to my website! I'm Austin, a Software Engineer & Computer Optimization Nerd.</b>
        </h2>
        <div className="nerdGif"><img title="math" src={intro} />
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h3 className="intro">
            As a Computer Science student (BSc 2025) and natural tinkerer, I excel at large-scale software development, enjoy building complex IoT (Internet of Things) systems, experimenting with audio circuits, and reading mathematics in my free time. I have also found joy in teaching Calculus 2 through the Learning Assistant Program at the University of Colorado Boulder, and building an in-house ModBus C# Library for <a href="https://www.formfactor.com"> FormFactor Boulder</a> (a cryogenic quantum computing solutions company). Proficient in TypeScript, PHP, C#, React (including React Native), and C++, I actively contribute to emerging open-source projects. <b>Let’s connect and explore new opportunities! 🚀🌟     <a href="https://github.com/austinhutchen" rel="noopener noreferrer">
                Click me!
                <img src={github} title="GitHub" style={{
                  maxWidth: "3vh",
                }} />
              </a>
              </b>
            </h3>
          </div>
        </div>
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
          <HiArrowNarrowRight size={'1em'} className="ml-3" />
        </button>
        <br />
        <button
          style={{ marginBottom: '0.2em' }}
          className="btn btn-success"
          type="button"
          id="navbar"
          onClick={() => {
            nav('/Gallery');
          }}
        >
          Fun page!
          <HiArrowNarrowRight size={'1em'} className="ml-3" />
        </button>
        <br />
        <div className="landImage">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=austinhutchen&hide_progress=true&langs_count=12&theme=react&hide=cmake,html,css,Objective-C++" alt="GitHub Stats" />
          <img src="https://github-readme-stats.vercel.app/api?username=austinhutchen&show_icons=true&theme=gruvbox&include_all_commits=false" alt="GitHub Stats" />
          <TextSphere />
        </div>
        <Spinner />
      </div >
    </>
  );
};

