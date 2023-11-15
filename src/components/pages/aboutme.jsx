
import { Nav } from "../common/navbar"
import React, { Component } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Aboutme = (props) => {
  
  return (
   <> 
      <Nav />

     <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.0001  } }}>
  <h1 className="hlight" >
        <b>
          About me!

        </b>
      </h1>
    </motion.div>
       <Display data={props.data} />

    </>
  )
}


export default class Display extends Component {

  constructor(props) {
    super(props);
   this.propkeys = props.data
  }

  render() {

    var keys = [
      {
        desc: "My name is Austin Hutchen. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more: ",
        url: this.propkeys[0] 
      }
      ,
      {
        desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my algorithmic runtimes and read often on the problems of code protability and optimization, especially in languages like C (~My favorite~). ",
        url: this.propkeys[1]
      },
  {
        desc: "I love embedded systems!",
        url: this.propkeys[2]
      },
      {
        desc: "I love Mathematics!",
        url: this.propkeys[3]
      }
      ,
      {
        desc: "I love quality family time!",
        url: this.propkeys[4]
      },
      {
        desc: "I love cats!",
        url: this.propkeys[5]
      },
      {
        desc: "I love hiking!",
        url: this.propkeys[6]
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
      Height: "65%",
      arrows:true, 
 autoplaySpeed: 1000,
                className: 'slides'
    }
    return (


   
      <div className="sc">
        <Slider {...settings} >
          {keys.map(data => {
            return (
              <div className="slick-slide">
                <img src={data.url} />
                 <h4 style={{fontSize:'1em', color:'cornsilk'}} >
              <fieldset style={{paddingTop:'-3em'}}>
              <b>
                  {data.desc}
              </b>
              </fieldset>
                </h4>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
