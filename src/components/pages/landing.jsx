import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { Spinner } from '../common/symbols';
import { Footer } from '../common/footer';
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 
import "../../css/TextSphere.css";
const Head = () => {
  return (
 <div> 
      <Nav />
     
    </div>
  )
}
// components


const TextSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
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

const Body = () => {


  return (

    <div>
      <Spinner />
      <TextSphere />

    </div>


  )
}

// landing page 
export const Landing = () => {

  return (
    <>
   <Nav />
 <h3 className="text-4xl sm:text-7xl text-white" style={{paddingTop:10}} className="hlight">
         <b> Welcome to my website! I'm Austin, and I'm a Full Stack Web Developer. </b>
        </h3>
   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.001  } }}>
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">

        <p className="text-gray-500 py-4 max-w-md">
           I'm a CU Boulder (Bachelor's of Science Computer Science) Student who enjoys working with startups in web development, backend server development, and more recently, embedded systems development.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next.js and Mongodb.
        </p>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <Body />
    
</motion.div>
    </>
  )
}

