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
      "Go",
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
      <h3 className="hlight-mini" style={{ paddingTop: '10', fontSize: '1.5em' }} >


        <b> Welcome to my website! I'm Austin, and I'm a Full Stack Software & Systems Engineer. </b>
      </h3>
      <m.div initial={{ width: 0 }} animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">

            <p className="intro">
              <b>
                I'm a CU Boulder Student (Bachelor's of Science Computer Science, Math Minor 2025) who enjoys working with backend servers, operating & embedded systems, dabbling in shell scripting & optimization, and creating optimized frontend applications. I love to work on applications using cutting-edge technologies like Typescript, Go, C, C#, React (&Native), Tailwind, Next.js and Mongodb.
              </b>
            </p>
            <button
              className="btn btn-success"
              type="button"
              id="navbar"
              onClick={() => {
                nav('/AboutMe');

              }}
            >
              About Me

              <HiArrowNarrowRight size={
                '1.2em'} className="ml-3" />

            </button>

          </div>
        </div>
        <Spinner />
        <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=austinhutchen&hide_progress=true&langs_count=10&theme=react&hide=cmake,c,Objective-C++"/> 
         <img align="center" src="https://github-readme-stats.vercel.app/api?username=austinhutchen&show_icons=true&theme=gruvbox&include_all_commits=false"/>
        <TextSphere />
      </m.div>
    </LazyMotion>
  )
}

