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
      radius: 280,
      maxSpeed: "high",
      initSpeed: "low",
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
   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.001  } }}>
      
    <h3>     <b> Full-Stack Embedded Software Engineer & CS student with passion for development and experience working with startups! </b></h3>
<h5 className="subtext"> <i><b> Through building my projects, I have learned and practiced rigorously the topics below. </b> </i> </h5>

      <Body />
    
</motion.div>
    </>
  )
}

