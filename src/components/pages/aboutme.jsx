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
  constructor(){
super();
        this.state = {
          _index:0,
          keys:[
            "1"
            ,"2",
            "3",
            "4"
            ,"5"
          ],
        images: [me,coding,family,mimi,nature],
          
  }; 
  }
    sliders(_index) {
         return this.state.keys.map(function(element,index,array)
           {
             return(
               <div>
                 <h1>
             {array[_index]}
               </h1>
               </div>
             )
        }
   );
    }
  images(_index){
 return this.state.images.map(function(element,index,array){
        return(
               <div>
                 <h1>
             {array[_index]}
               </h1>
               </div>
             )
       }
      );
  }
      
    
  
incrind(ind){
this.setState({_index: ind });
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
 this.incrind(this.state.index + 1);  
       return (<div> 
<h1 className="hlight" style={{padding:20}}>
              About me!
              </h1>
        
        <Slider {...settings}> 
         {this.images(this.state.index)}
                    {this.sliders(this.state.index)}

                </Slider>     

      </div>
    );
  }
}

