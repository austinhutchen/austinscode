import { Nav } from "../common/navbar"
import React, { Component } from "react";
import { motion } from "framer-motion";
import me from "./images/me4.webp";
import coding from "./images/coding.webp";
import family from './images/family.webp';
import nature from "./images/nature.webp";
import mimi from "./images/mimi.webp";
import math from "./images/IMG_0913.webp";
import systems from "./images/systems.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
import "../../css/fonts.css";
export const Aboutme = () => {
  return (
   <div> 
      <Nav />
     <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.0001  } }}>
   <h1 className="hlight" >
        <b>
          About me!

        </b>
      </h1>
    </motion.div>

      <Display />
    </div>
  )
}


export default class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ""
    }

  }

  render() {

    var keys = [
      {
        desc: "My name is Austin Hutchen. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more: ",
        url: me
      }
      ,
      {
        desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my algorithmic runtimes and read often on the problems of code protability and optimization, especially in languages like C (~My favorite~). ",
        url: coding
      },
  {
        desc: "I love embedded systems!",
        url: systems
      },
      {
        desc: "I love Mathematics!",
        url: math
      }
      ,
      {
        desc: "I love quality family time!",
        url: family
      },
      {
        desc: "I love cats!",
        url: mimi
      },
      {
        desc: "I love hiking!",
        url: nature
      },
    

    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      centerMode: true,
      Width: "75%",
      Height: "65%"
    };
    return (

      <div>

   
      <div className="sc">
        <Slider {...settings}>
          {keys.map(data => {
            return (
              <div className="slick-slide">
                <img src={data.url} />
                 <h4 className="hlight-mini"> 
              <b>
                  {data.desc}
              </b>
                </h4>
              </div>
            );
          })}
        </Slider>
      </div>
</div>
    );
  }
}

