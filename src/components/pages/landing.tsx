import { motion } from "framer-motion";
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
      radius: 250,
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
    <>
      <Nav />
      <h3 className="hlight-mini" style={{ paddingTop: '10', fontSize: '1.5em' }} >


        <b> Welcome to my website! I'm Austin, and I'm a Full Stack Software & Systems Engineer. </b>
      </h3>
      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">

            <p className="intro">
              <b>
                I'm a CU Boulder Student (Bachelor's of Science Computer Science, Math Minor 2025) who enjoys working with backend servers, operating & embedded systems, and creating optimized frontend applications. I have currently 3,500 github contributions to open source codebases and personal embedded systems repositories. I love to work on applications using cutting-edge technologies like Typescript, Go, C, C#, React (&Native), Tailwind, Next.js and Mongodb.

              </b>
            </p>
            <button
              className="btn btn-md btn-outline-primary me-1"
              type="button"
              id="navbar"
              onClick={() => {
                nav('/AboutMe');

              }}
            >
                         About Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={
                    '1.2em'} className="ml-3" />
                </span>
            
            </button>

          </div>
        </div>
        <Spinner />
      <TextSphere />
      </motion.div>
    </>
  )
}

