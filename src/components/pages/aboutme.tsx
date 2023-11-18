
import { Nav } from "../common/navbar.tsx"
import React, { Component } from "react";
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
            exit={{ x: window.innerWidth, transition: { duration: 0  } }}>
  <h1 className="hlight" >
        <b>
          About me!
        </b>
      </h1>
    </motion.div>
    <div style={{paddingTop:'0.4em'}}>

    </div>
       <Display data={props.data} />

    </>
  )
}


export default class Display extends Component {

 

  render(props) {

    var keys = [
      {
        desc: "Welcome! I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! ",
        url: this.props.data[0],
      }
      ,
      {
        desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my understanding of algorithms, P/NP runtimes and read often on the problems of code portability and optimization, especially in languages like C (~My favorite~). ",
        url: this.props.data[1],
      },
  {
        desc: "I love embedded systems!",
        url: this.props.data[2],
      },
      {
        desc: "I love Mathematics!",
        url: this.props.data[3],
      }
      ,
      {
        desc: "I love quality family time!",
        url: this.props.data[4],

      },
      {
        desc: "I love cats!",
        url: this.props.data[5],

      },
      {
        desc: "I love hiking!",
        url: this.props.data[6],

      },
    

    ];


    const settings = {
   dots: true,
      slidesToShow: 1,
        centerMode: true,
      lazyLoad: 'progressive',
  Width: '60%', 
      arrows:true, 
  fade: true,
  cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  adaptiveHeight: true,
    }
    return (
      <div className="sc">
        <Slider {...settings} >

          {keys.map(data => {
            return (

     <>
                <img src={data.url} style={{borderRadius: 200/ 2, borderStyle:"solid", fontSize: '1.2em', border: "0.5vh solid #0BA" }} />

                            <fieldset >
              <p style={{color:'cornsilk' ,  fontSize:"0.95em", paddingTop:'0.8em', fontFamily: "Gill Sans, Gill Sans MT,Calibri,Trebuchet MS,sans-serif"   , fontWeight: 350,textShadow: "2px 3px 5px rgba(0.8,0.8,0.8,0.8)"}}>

          
<b>
                  {data.desc}
  <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={32} className="ml-3" />
            </span>

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
}
