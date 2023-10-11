import { Nav } from "../common/navbar"
// th to change theme in visual mode
import React, { Component } from "react";

import { motion } from "framer-motion"; 
import me from "../images/me4.jpg";
import coding from "../images/coding.JPG";
import family from "../images/family.jpeg";
import nature from "../images/nature.jpg";
import mimi from "../images/mimi.jpg";

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
  constructor(props){
super(props);
        this.state = {
          keys:[
            "My name is Austin Hutchen. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more:",
            "I love coffee and coding!",
            "I love quality family time!",
            "I love hiking!",
            "I love cats!"
          ],
        images: [
          me,
          coding,
          family,
          mimi,
          nature
        ]
  }; 
  }
   render_caption() {
         return this.state.keys.map( data =>{   
             return(
               <div>
                <h1> 
             {data}
               </h1>
               </div>
             );   
    } );
    }
  render_image(){
 return this.state.images.map(data => {
        return(
               <div>
                 <img src ={data} alignItems="center"/>
               </div>
             );
       }
      );
  }
 
  render() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 200,
        slidesToShow: 1,
      slidesToScroll: 1,
lazyLoad:false,
   centerMode: true
    };
       return (<div style={{padding:10}}> 
<h1 className="hlight" >
              About me!
              </h1>
        
        <Slider {...settings}> 
                         { this.render_image() }
     

                </Slider>     

      </div>
    );
  }
}

