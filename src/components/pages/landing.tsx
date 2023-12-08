import { LazyMotion, domAnimation,m } from "framer-motion";
import { Nav } from "../common/navbar.tsx";
import { Spinner } from '../common/symbols.tsx';
import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { HiArrowNarrowRight } from 'react-icons/hi';
import "../../css/TextSphere.scss";
import React from 'react'
import { useNavigate } from "react-router-dom";
// components

const TextSphere = () => {
  const containerRef = useRef(null);
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
        <span className="tagcloud" ref={containerRef} />
      </b>
    </div>
  );
};


// landing page 
export const Landing = () => {
  // LINK IN BELOW STATEMENT IS TO BE USED TO NAVIGATE TO ABOUT PAGE
  const nav = useNavigate();
  return (
    <LazyMotion features={domAnimation}>
      <Nav />
      <h2 className="hlight-mini" style={{ paddingTop: '10', fontSize: '1.50em' }} >


        <b> Welcome to my website! I'm Austin, and I'm a Full Stack Software & Systems Engineer. </b>
      </h2>
      <m.div initial={{ width: 0 }} animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">

            <p className="intro">
              <b>
               I'm a CU Boulder Computer Science student (BSc & MATH 2025) passionate about backend scripting, operating & embedded systems, frontend design, and code optimization. I excel in programming with Typescript, PHP, C#, Bash, C, Go, React (incl. Native), Tailwind, SQL, Next.js, and MongoDB for multi-page application development.
              </b>
            </p>

              <button
            style={{marginBottom:' 0.4em'}}
              className="btn btn-success"
              type="button"
              id="navbar"
              onClick={() => {
                nav('/AboutMe');

              }}
            >
              More About Me 

              <HiArrowNarrowRight size={
                '1em'} className="ml-3" />

            </button>
                        <br/>

             <img align="center" height="150svh" width="auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=austinhutchen&hide_progress=true&langs_count=10&theme=react&hide=cmake,c,Objective-C++"/> 
         <img align="center" height="150svh" width ="auto" src="https://github-readme-stats.vercel.app/api?username=austinhutchen&show_icons=true&theme=gruvbox&include_all_commits=false"/>
          

          </div>
        </div>
        <Spinner />
       
        <TextSphere />
      </m.div>
    </LazyMotion>
  )
}

