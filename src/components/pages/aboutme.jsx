import { Nav } from "../common/navbar"

import React, { Component } from "react";

import { motion } from "framer-motion"; 

import { Footer } from "../common/footer"
import "../../css/dimensions.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Aboutme = () =>
 {
    return (
        <div className="App">
            <Nav />
                <Display  />
        </div>
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
              '../images/me4.jpg',
                "../images/coding.JPG",
                "../images/family.jpeg",
                "../images/mimi.jpg",
              "../images/nature.jpg"]
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
        slidesToShow: 2,
      slidesToScroll: 1,

    };
    return (
      <div className="slider-container" style={{paddingTop: 10}}> 
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

