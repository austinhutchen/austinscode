import React, { useRef } from 'react';
import { Nav } from "../common/navbar.tsx";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Slider from "react-slick";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
const tinker = process.env.PUBLIC_URL + '/fast_imgs/tinker.webp';


const me = process.env.PUBLIC_URL + '/fast_imgs/me4.webp';
const coding = process.env.PUBLIC_URL + '/fast_imgs/coding.webp';
const systems = process.env.PUBLIC_URL + '/fast_imgs/coding.webp';
const math = process.env.PUBLIC_URL + '/fast_imgs/IMG_0913.webp';
const family = process.env.PUBLIC_URL + '/fast_imgs/family.webp';
const mimi = process.env.PUBLIC_URL + '/fast_imgs/mimi.webp';
const nature = process.env.PUBLIC_URL + '/fast_imgs/nature.webp';
const liv = process.env.PUBLIC_URL + '/fast_imgs/liv.webp';
const solder = process.env.PUBLIC_URL + '/fast_imgs/SOLDER.mp4';

const github = process.env.PUBLIC_URL + '/fast_imgs/GITHUBME.webp';
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
      desc: "Welcome! I'm a software engineer who builds multi-page PHP and Typescript-based software applications, and I have plenty of hobbies! ",
      url: me,
      type: "image"
    }
    ,
    {
      desc: "Ever since I was little, I have loved to experiment with electronics. Here is a 3-volt windmill I built out of wood and craft materials, at the age of 11.",
      url: tinker,
      type: "image"
    }
    ,


    {
      desc: "Today in my free time, I love to optimize and build software! I practice leetcode frequently to refine my understanding of algorithms and enjoy comparing their runtime complexities. Check out my solutions! ",

      url: coding,
      type: "image"

    },
    {
      desc: "I enjoy building websites like this one, apps like the ones on my projects page, and working with server scripts on the backend. ",
      url: github,
      type: "image"
    },
    {
      desc: "I also spend time building embedded systems to automate daily tasks. I use recycled e-waste for some project materials to save the planet, and make scripts using PHP and C.",
      url: systems,
      type: "image"

    },
    {
      desc: "I love to solder! Soldering has allowed me to create my own PCBS, and build embedded systems with common and recycled parts.",
      url: solder,
      type: "video"
    },


    {
      desc: "I read mathematics from my personally collected library in my free time. I have particular fascinations with Calculus, Boolean & Linear Algebra, and Group Theory.",
      url: math,
      type: "image"

    }
    ,
    {
      desc: "I love spending time with my family. Without their support and love, I wouldn't be where I am today.",
      url: family,
      type: "image"

    },

    {
      desc: "I love spending time with my cats! Cats are the most calming pets to be around, in my opinion. I could code around them forever. ",
      url: mimi,
      type: "image"

    },
    {
      desc: "I love to make electronics and art with my girlfriend!",
      url: liv,
      type: "image"
    },
    {
      desc: "I love to spend time out in nature!",
      url: nature,
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
    loading: 'progressive',
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
              <img src={data.url} loading="eager" style={{ borderRadius: '10%', border: "0.45svh solid #0BA" }} alt="Project Image" />
            ) : (
              <video autoPlay loop muted playsInline onContextMenu={(e) => e.preventDefault()} preload="auto" style={{ borderRadius: '10%', border: "0.45vh solid #0BA" }} src={data.url} />
            )}

            <fieldset>
              <p style={{ color: 'cornsilk', fontSize: "2svh", fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif", fontWeight: 350 }}>
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


export const Aboutme: React.FC = () => {
  return (
    <>
      <Nav />
      <LazyMotion features={domAnimation}>
        <m.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
          <h1 className="hlight">
            <b>ABOUT:</b>
          </h1>
        </m.div>
      </LazyMotion>
      <About />
    </>
  );
};












