import React, { useRef, useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import Slider from "react-slick";
import "../../css/slider.css";
import { NavBar } from "../common/navbar";
const getImgPath = (imageName: string) => `${process.env.PUBLIC_URL}/fast_imgs/${imageName}`;
type Images = Record<string, string>;

const images: Images = {
  tinker: getImgPath("tinker.webp"),
  me: getImgPath("austin.webp"),
  coding: getImgPath("coding.webp"),
  systems: getImgPath("systems.webp"),
  math: getImgPath("mathBook.webp"),
  family: getImgPath("me.webp"),
  mimi: getImgPath("mimi.webp"),
  solder: getImgPath("SOLDER.mp4"),
  liv: getImgPath("livandaustin.webp"),
  nature: getImgPath("nature.webp"),
  github: getImgPath("GITHUBME.webp")
  // Add other images here
};


// Define image and video URLs directly in the keys array
const keys = [
  {
    desc: "Welcome! I'm Austin, a Computer and Software engineer who likes to tinker with electronic circuits and code Typescript-based software applications, and I have plenty of hobbies! ",
    url: images.me,
    type: "image"
  },
  {
    desc: "Ever since I was little, I have loved to experiment with electronics. Here is a 3-volt windmill I built out of wood and craft materials, at the age of 11.",
    url: images.tinker,
    type: "image"
  },
  {
    desc: "Today in my free time, I love to optimize and build software! I practice leetcode frequently to refine my understanding of algorithms and enjoy comparing their runtime complexities. Check out my solutions! ",
    url: images.coding,
    type: "image"
  },
  {
    desc: "I enjoy building websites like this one, apps like the ones on my projects page, and working with server scripts on the backend. ",
    url: images.github,
    type: "image"
  },
  {
    desc: "I also spend time building embedded systems to automate daily tasks. I use recycled e-waste for some project materials to save the planet, and make scripts using PHP and C.",
    url: images.systems,
    type: "image"
  },
  {
    desc: "I love to solder! Soldering has allowed me to create my own PCBS, and build embedded systems with common and recycled parts.",
    url: images.solder,
    type: "video"
  },
  {
    desc: "I love to make electronics and art with my girlfriend!",
    url: images.liv,
    type: "image"
  },
  {
    desc: "I read mathematics from my personally collected library in my free time. I have particular fascinations with Calculus, Boolean & Linear Algebra, and Group Theory.",
    url: images.math,
    type: "image"
  },
  {
    desc: "I love spending time with my family.",
    url: images.family,
    type: "image"
  },
  {
    desc: "I love spending time with my cats! Cats are the most calming pets to be around, in my opinion. I could code around them forever. ",
    url: images.mimi,
    type: "image"
  },

  {
    desc: "I love to spend time out in nature!",
    url: images.nature,
    type: "image"
  },
  // ... other items ...
];

// Common styles for image and video components

interface SliderProps {
  keys: Array<{ type: string; url: string; desc: string }>;
}
interface Key {
  desc: string;
  url: string;
  type: 'image' | 'video';
}

interface SliderProps {
  keys: Key[]; // Define the expected structure of the keys array
}

const About: React.FC<SliderProps> = ({ keys }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleSliderNavigation = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + keys.length) % keys.length
        : (currentIndex + 1) % keys.length;
    setCurrentIndex(newIndex);

    // Animate sliding
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {keys.map((data, index) => (
          <div className="slider-item" key={index}>
            {data.type === 'image' ? (
              <img src={data.url} alt="Project Image" />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                onContextMenu={(e) => e.preventDefault()}
                preload="metadata"
                src={data.url}
              />
            )}
            <fieldset className="projDesc">
              <p
                style={{
                  color: 'cornsilk',
                  fontSize: '2svh',
                  fontFamily:
                    'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
                  fontWeight: 350,
                  textAlign: 'center',
                }}
              >
                <b className="legend">{data.desc}</b>
              </p>
            </fieldset>
          </div>
        ))}
      </div>

      <button onClick={() => handleSliderNavigation('prev')} className="nav-button prev">
        <HiArrowNarrowLeft size={'1.9em'} />
      </button>
      <button onClick={() => handleSliderNavigation('next')} className="nav-button next">
        <HiArrowNarrowRight size={'1.9em'} />
      </button>
    </div>
  );
};
export const Aboutme: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="fadeSide">
        <h1 className="hlight">
          <b>ABOUT:</b>
        </h1>
      </div>
      <About />
    </>
  );
};
