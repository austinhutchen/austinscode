import { motion } from "framer-motion"; 
import { Nav } from "../common/navbar";
import { Spinner } from '../common/symbols';
import { Footer } from '../common/footer';
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "../../css/TextSphere.css"
const Head = () => {
    return (
        <motion.div
        >
            <Nav />
        </motion.div >
    )
}
// components


const TextSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "Full-Stack Software Engineer with passion for development and experience working with startups!",
      "Python",
      "React",
      "C++",
      "Embedded Systems",
      "Rust",
      "Node.JS",
      "Algorithm Analysis",
      "AWS",

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
      <span className="tagcloud" ref={containerRef}></span>
    </b>
    </div>
  );
};

// landing page 
export const Landing = () => {
    // add Player and Spinner, get css animations working
    return (
        <div >
            <Head />

            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
 
       <Spinner />
                         </motion.div>
         <TextSphere/>

            <section id="footer">
                <Footer />
            </section>
      
      </div>
    )
}

