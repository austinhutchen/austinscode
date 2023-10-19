import { motion } from "framer-motion";
import { Nav } from "../common/navbar";
import { Spinner } from '../common/symbols';
import { Footer } from '../common/footer';
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "../../css/TextSphere.css";
const Head = () => {
  return (
 <div> 
      <Nav />
    <h3>    <b>  Full-Stack Embedded Software Engineer & CS student with passion for development and experience working with startups! </b> </h3>
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
      "React",
      "C++",
      "Embedded Systems",
      "Rust",
      "Node.JS",
      "Algorithm Analysis",
      "AWS",
      "X86 Assembly",
      "and more!.."
    ];
    const options = {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
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

    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
      <Spinner />
      <TextSphere />

    </motion.div>


  )
}

// landing page 
export const Landing = () => {

  return (
    <div >
      <Head />
      <Body />
    

    </div>
  )
}

