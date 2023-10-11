import { Nav } from "../common/navbar"
// th to change theme in visual mode
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
  constructor(props){
super(props);
        this.state = {
          keys:[
            "1",
            "2",
            "3",
            "4",
            "5"
          ],
        images: [me,coding,family,mimi,nature],
  }; 
  }
    sliders() {
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
  images(){
 return this.state.images.map(data => {
        return(
               <div>
                 <img src ={data}/>
               </div>
             );
       }
      );
  }
 
  render() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
        slidesToShow: 1,
      slidesToScroll: 1,
lazyLoad:false
    };
       return (<div> 
<h1 className="hlight" >
              About me!
              </h1>
        
        <Slider {...settings}> 
                         { this.images() }
     

                </Slider>     

      </div>
    );
  }
}

