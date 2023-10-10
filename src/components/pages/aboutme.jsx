import { Nav } from "../common/navbar"

import React, { Component } from "react";

import { motion } from "framer-motion"; 
import me from "../images/me4.jpg";
import coding from "../images/coding.JPG";
import family from "../images/family.jpeg";
import nature from "../images/nature.jpg";
import mimi from "../images/mimi.jpg";
import { Footer } from "../common/footer"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/dimensions.css";
export const Aboutme = () =>
 {
    return (
      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
            <Nav />
                <Display  />
        </motion.div>
    )
}


export default class Display extends Component  
{
  constructor(){
super();
        this.state = {
          key:[
            
          ],
            sliders: [
             me,
               coding,
                family,
                mimi,
              nature]
        }


  }
            
    sliders() {
        return this.state.sliders.map(data => {
            return (
           
                <div key={data}>
                    <img alt="key" src={data} />
                </div>
                         )
        });
    }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
        slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (<div> 
<h1 className="hlight">
              About me!
              </h1>
        <Slider {...settings}> 
      
                    {this.sliders()}
                </Slider>     

      </div>
    );
  }
}

