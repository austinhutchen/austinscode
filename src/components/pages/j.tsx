import React, { useRef } from 'react';
import { Nav } from "../common/navbar.tsx";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Slider from "react-slick";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';



// Define image and video URLs directly in the keys array
const keys: KeyItem = [
  const tinker = process.env.PUBLIC_URL + '/fast_imgs/tinker.webp';
const me = process.env.PUBLIC_URL + '/fast_imgs/me4.webp';
const coding = process.env.PUBLIC_URL + '/fast_imgs/coding.webp';
const systems = process.env.PUBLIC_URL + '/fast_imgs/systems.webp';
const math = process.env.PUBLIC_URL + '/fast_imgs/IMG_0913.webp';
const family = process.env.PUBLIC_URL + '/fast_imgs/family.webp';
const mimi = process.env.PUBLIC_URL + '/fast_imgs/mimi.webp';
const liv = process.env.PUBLIC_URL + '/fast_imgs/liv.webp';
const solder = process.env.PUBLIC_URL + '/fast_imgs/SOLDER.mp4';
const nature = process.env.PUBLIC_URL + '/fast_imgs/nature.webp';
const github = process.env.PUBLIC_URL + '/fast_imgs/GITHUBME.webp';
];

// Common styles for image and video components
const imageStyles = {
  borderRadius: '10%',
  border: '0.45svh solid #0BA',
};

const videoStyles = {
  borderRadius: '10%',
  border: '0.45vh solid #0BA',
};

const buttonStyles = {
  type: "button",
  className: "slick-button",
};

const About: React.FC = () => {
  const settings = {
    slidesToShow: 1,
    centerMode: true,
    width: '100%',
    arrows: true,
    slidesToScroll: 1,
    infinite: true,
    loading: 'progressive',
    fade: true,
    cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    adaptiveHeight: true,
    dots: true,
  };

  const slider = useRef<Slider>(null);

  const handleSliderNavigation = (direction: 'prev' | 'next') => {
    if (slider?.current) {
      direction === 'prev' ? slider.current.slickPrev() : slider.current.slickNext();
    }
  };

  return (
    <div className="sc">
      <Slider ref={slider} {...settings}>
        {keys.map((data, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {data.type === "image" ? (
              <motion.img
                src={data.url}
                loading="eager"
                style={imageStyles}
                alt="Project Image"
              />
            ) : (
              <motion.video
                autoPlay
                loop
                muted
                playsInline
                onContextMenu={(e) => e.preventDefault()}
                preload="auto"
                style={videoStyles}
                src={data.url}
              />
            )}

            <fieldset>
              <p style={{ color: 'cornsilk', fontSize: "2svh", fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif", fontWeight: 350 }}>
                <b className="legend">{data.desc}</b>
              </p>
              <button onClick={() => handleSliderNavigation('prev')}>
                <HiArrowNarrowLeft size={'1.9em'} className="ml-3" />
              </button>
              <button onClick={() => handleSliderNavigation('next')}>
                <HiArrowNarrowRight size={'1.9em'} className="ml-3" />
              </button>
            </fieldset>
          </motion.div>
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
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
          <h1 className="hlight">
            <b>ABOUT:</b>
          </h1>
        </motion.div>
      </LazyMotion>
      <About />
    </>
  );
};

