
import React from 'react'
import { Nav } from "../common/navbar.tsx"
import { Component } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowRight } from 'react-icons/hi';
export const Aboutme = (props) => {

  return (
    <>
      <Nav />

      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}> 
        <h1 className="hlight" >
          <b>
            About me!
          </b>
        </h1>
      </motion.div>
      <div style={{ paddingTop: '0.4em' }}>
        <Display data={props.data} />

      </div>

    </>
  )
}


 const Display =(props)=>{
   const keys = [
      {
        desc: "Welcome! I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! ",
        url: props.data[0],
      }
      ,
      {
        desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my understanding of algorithms, P/NP runtimes and read often on the problems of code portability and optimization, especially in languages like C (~My favorite~). ",
        url: props.data[1],
      },
      {
        desc: "I love embedded systems!",
        url: props.data[2],
      },
      {
        desc: "I love Mathematics!",
        url: props.data[3],
      }
      ,
      {
        desc: "I love quality family time!",
        url: props.data[4],

      },
      {
        desc: "I love cats!",
        url: props.data[5],

      },
      {
        desc: "I love hiking!",
        url: props.data[6],

      },


    ];

   const settings = {
      dots: true,
      slidesToShow: 1,
      centerMode: true,
      lazyLoad: 'anticipated',
      Width: '60%',
      arrows: false,
      fade: true,
      cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      adaptiveHeight: true,
    }
    const slider = React.useRef(null);
    return (
      <div className="sc">
        <Slider ref ={slider} {...settings} >

          {keys.map(data => {
            return (

              <>
                <img src={data.url} style={{ borderRadius: 200 / 2, borderStyle: "solid", fontSize: '1.2em', border: "0.45vh solid #0BA" }} />

<button className="next-slick" onClick={() => slider?.current?.slickNext()}> <HiArrowNarrowRight size={'0.8em'} className="ml-3" /> </button>
                <fieldset >
                  <p style={{ color: 'cornsilk', fontSize: "1.05em", paddingTop: '0.em', fontFamily: "Gill Sans, Gill Sans MT,Calibri,Trebuchet MS,sans-serif", fontWeight: 350, textShadow: "0.4em 0.6em 0.7em rgba(0.8,0.8,0.8,0.8);" }}>


                    <b>
                      {data.desc}
                    


                    </b>
                  </p>
                </fieldset>


              </>
            );
          })}

        </Slider>
      </div>
    );

}


