import React, { useRef, useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
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
const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleSliderNavigation = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + keys.length) % keys.length
        : (currentIndex + 1) % keys.length;
    setCurrentIndex(newIndex);

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxHeight: "60svh", // Adjust height to fit screen proportionally
        overflow: "hidden",
        display: "flex",
        borderRadius: '10px',
        boxShadow: 'inset',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: `${keys.length * 100}%`,
          height: "100%",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
        ref={sliderRef}
      >
        {keys.map((data, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {data.type === "image" ? (
              <img
                src={data.url}
                alt="Project"
                         />
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
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  color: "cornsilk",
                  fontSize: "1.2rem",
                  maxWidth: '50svw',
                  fontFamily: "Gill Sans, Calibri, sans-serif",
                  fontWeight: 350,
                  textAlign: "center"
                }}
              >
                <b>{data.desc}</b>
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleSliderNavigation("prev")}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <HiArrowNarrowLeft size="1.5rem" />
      </button>
      <button
        onClick={() => handleSliderNavigation("next")}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <HiArrowNarrowRight size="1.5rem" />
      </button>
    </div>
  );
};

export const Aboutme: React.FC = () => (
  <>
    <NavBar />
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>ABOUT:</h1>
    </div>
    <div className="aboutImg">
    <About keys={keys} />
    </div>
  </>
);
