import { motion } from "framer-motion";
import { Nav } from "../common/navbar.tsx";
import { Spinner } from '../common/symbols.tsx';
import { Footer } from '../common/footer.tsx';
import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 
import "../../css/TextSphere.css";
import { useNavigate } from "react-router-dom";
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
// LINK IN BELOW STATEMENT IS TO BE USED TO NAVIGATE TO ABOUT PAGE
  const nav = useNavigate();
  return (
    <>
   <Nav />
 <h3 className="text-4xl sm:text-7xl text-white" style={{paddingTop:'10', fontSize: '1.5em'}} className="hlight">

         <b> Welcome to my website! I'm Austin, and I'm a Full Stack Software & Systems Engineer. </b>
        </h3>
   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0  } }}>
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">

        <p className="intro">
    <b>
           I'm a CU Boulder Student (Bachelor's of Science Computer Science, Math Minor 2025) who enjoys working with backend servers, operating & embedded systems, and creating optimized frontend applications. Currently, I love to work on applications using cutting-edge technologies like Typescript, Go, C, C#, React (&Native), Tailwind, Next.js and Mongodb.

    </b>
        </p>
     <button
                        class="btn btn-outline-success me-1"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/src/components/aboutme.js');
                        }}
                    >
                         <Link
            to="../pages/aboutme.tsx"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={32} className="ml-3" />
            </span>
          </Link>

                    </button>
 
                 </div>
      </div>
      <Body />
    
</motion.div>
    </>
  )
}

