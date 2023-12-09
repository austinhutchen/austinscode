import React, { useRef } from 'react';
import { Nav } from "../common/navbar.tsx";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Slider from "react-slick";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';

interface AboutProps {
  data: string[];
}

interface KeyItem {
  desc: string;
  url: string;
  type: string;
}

const About: React.FC<AboutProps> = (props) => {
  const keys: KeyItem[] = [
   

 
    {
      desc: "Welcome! I'm a software engineer who builds embedded systems and multi-page PHP and TS-based software applications, and I have plenty of hobbies! ",
      url: props.data[0],
            type: "image"

    }
    ,
    {
      desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my understanding of algorithms and P vs NP runtimes. ",
      url: props.data[1],
            type: "image"

    },
    {
      desc: "I also spend time building embedded systems to automate daily tasks. I use recycled e-waste for some project materials to save the planet, and make scripts using PHP and C.",
      url: props.data[2],
            type: "image"

    },
     {
      desc: "I love to solder! Soldering has allowed me to create my own PCBS, and build embedded systems with common and recycled parts.",
      url: props.data[7],
      type: "video"
    },

   
    {
      desc: "I read mathematics from my personally collected library in my free time. I have particular fascinations with Calculus, Boolean & Linear Algebra, and Group Theory.",
      url: props.data[3],
            type: "image"

    }
    ,
        {
      desc: "I love spending time with my family. Without their support and love, I wouldn't be where I am today.",
      url: props.data[4],
      type: "image"

    },
     
    {
      desc: "I love spending time with my cats! Cats are the most calming pets to be around, in my opinion. I could code around them forever. ",
      url: props.data[5],
            type: "image"

    },
      {
      desc: "I love to make electronics and art with my girlfriend!",
      url: props.data[8],
      type: "image"
    },
    {
      desc: "I love to spend time out in nature!",
      url: props.data[6],
      type: "image"
    },
      
     
  


  ];

  const settings = {
    slidesToShow: 1,
    centerMode: true,
    width: '100%',
    arrows: true,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    adaptiveHeight: true,
    dots: true,
  };

  const slider = useRef<Slider>(null);

  return (
    <div className="sc">
      <Slider ref={slider} {...settings}>
        {keys.map((data, index) => (
          <div key={index}>
            {data.type === "image" ? (
              <img src={data.url} style={{ borderRadius: '10%', border: "0.45vh solid #0BA" }} alt="Project Image" />
            ) : (
              <video autoPlay loop muted playsInline onContextMenu={(e) => e.preventDefault()} preload="auto" style={{ borderRadius: '10%', border: "0.45vh solid #0BA" }} src={data.url} />
            )}

            <fieldset>
              <p style={{ color: 'cornsilk', fontSize: "2.5vh", fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif", fontWeight: 350 }}>
                <b className="legend">{data.desc}</b>
              </p>
              <button type="button" className="prev-slick" onClick={() => slider?.current?.slickPrev()}>
                <HiArrowNarrowLeft />
              </button>
              <button type="button" className="next-slick" onClick={() => slider?.current?.slickNext()}>
                <HiArrowNarrowRight />
              </button>
            </fieldset>
          </div>
        ))}
      </Slider>
    </div>
  );
};

interface AboutMeProps {
  data: string[];
}

export const Aboutme: React.FC<AboutMeProps> = (props) => {
  return (
    <>
      <Nav />
      <LazyMotion features={domAnimation}>
        <m.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
          <h1 className="hlight">
            <b>ABOUT!</b>
          </h1>
        </m.div>
      </LazyMotion>
      <About data={props.data} />
    </>
  );
};












