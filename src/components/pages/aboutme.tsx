import React from 'react'
import { Nav } from "../common/navbar.tsx"
import { LazyMotion, domAnimation,m } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
export const Aboutme = (props) => {

  return (
    <>
      <Nav />
<LazyMotion features ={domAnimation}>
      <m.div initial={{ width: 0 }} animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
        <h1 className="hlight" >
          <b>
            ABOUT!
          </b>
        </h1>
      </m.div>



    </LazyMotion>     
    <About data={props.data} />

    </>
  )
}


const About = (props) => {
  const keys = [
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
      desc: "I spend most of my time building embedded systems, to automate daily tasks. I stick to using e-waste materials for the junction boxes, for recycling purposes, and make scripts using bash & PHP.",
      url: props.data[2],
            type: "image"

    },
     {
      desc: "I love to solder! Soldering has allowed me to create my own PCBS, and build embedded systems with common and recycled parts.",
      url: props.data[7],
      type: "video"
    },

   
    {
      desc: "I read mathematics from my extensive collected library in my free time. I have particular fascinations with Boolean & Linear Algebra, Complex & Real Analysis, and Group Theory.",
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
      desc: "I love to spend time out in nature!",
      url: props.data[6],
      type: "image"
    },
    
     
  ];  

  const settings = {
    slidesToShow: 1,
    centerMode: true,
    Width: '70%',
    arrows: true, 
   slidesToScroll:1,
   infinite: true,
    fade: true,
    cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    adaptiveHeight: true,
    dots: true,

  }

  const slider = React.useRef(null);
  return (
    <div className="sc">

      <Slider ref={slider} {...settings} >
        {keys.map(data => {

return(

            <div>
              { (data.type == "image")?<img src={data.url} style={{ borderRadius: '(200 / 2)em', borderStyle: "solid", border: "0.45vh solid #0BA" }} /> :
                 <video autoPlay playsInLine loop muted preload="metadata" style={{ borderRadius: '(200 / 2)em', borderStyle: "solid", border: "0.45vh solid #0BA" }} src={ data.url+ "#t=0.5"}  />
              }
            
              <fieldset >
               
                <p style={{ color: 'cornsilk', fontSize: "2.5vh", fontFamily: "Gill Sans, Gill Sans MT,Calibri,Trebuchet MS,sans-serif", fontWeight: 350 }}>


                  <b className="legend">
                    {data.desc}



                  </b>
                </p>
                 <button style={{opacity: "0.95"}}type="button" className="prev-slick" onClick={() => slider?.current?.slickPrev()}> <HiArrowNarrowLeft />  </button>
              <button style={{opacity:"0.95"}}type="button" className="next-slick" onClick={() => slider?.current?.slickNext()}> <HiArrowNarrowRight /> </button>
              </fieldset>
            </div>

          );
        })}

      </Slider>
    </div>
  );

}
