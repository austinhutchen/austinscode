import { LazyMotion, domAnimation, m } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import TagCloud from "TagCloud";
import { HiArrowNarrowRight } from 'react-icons/hi';
import "../../css/TextSphere.scss";
import { Nav } from "../common/navbar.tsx";
import { Spinner } from '../common/symbols.tsx';

const TextSphere: React.FC = () => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
      const texts = [
      "Typescript",
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
      "C#",
      "React Native",
      "and more!.."
    ];
    const options = {
      radius: 200,
      initSpeed: "high",
      keep: true,
      loop: true,
      lockX: true,
      lockY: true,
    };

    TagCloud(container, texts, options);

    return () => {
      TagCloud(container, [], {});
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

  return (
    <LazyMotion features={domAnimation}>
      <Nav />
      <h2 className="hlight-mini" style={{ paddingTop: '6px', fontSize: '1.50em' }}>
        <b>Welcome to my website! I'm Austin, and I'm a Software Engineer & Computer Optimization Nerd.</b>
      </h2>
      <m.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <b>
            <p className="intro">
              I'm a Computer Science & Mathematics student at CU Boulder (BSc 2025) with a passion for eco-friendly software development, serverless computing, robotics engineering, and teaching Calculus! I'm proficient in Typescript, PHP, C#, React(&Native), C++, Bash, and enjoy working with many other programming languages. I specialize in single-page application development, software code optimization, and building embedded systems.            
              </p>
              </b>
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
            <img align="center" height="150vh" width="auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=austinhutchen&hide_progress=true&langs_count=10&theme=react&hide=cmake,c,Objective-C++" alt="GitHub Stats" /> 
            <img align="center" height="150vh" width="auto" src="https://github-readme-stats.vercel.app/api?username=austinhutchen&show_icons=true&theme=gruvbox&include_all_commits=false" alt="GitHub Stats" />
          </div>
        </div>
        <Spinner />
        <TextSphere />
      </m.div>
    </LazyMotion>
  );
};

