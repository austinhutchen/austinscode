
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
            exit={{ x: window.innerWidth, transition: { duration: 0.000000000000000001  } }}>
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
  }

  render() {

    var keys = [
      {
        desc: "My name is Austin Hutchen. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more: ",
        url: this.props.data[0] 
      }
      ,
      {
        desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my algorithmic runtimes and read often on the problems of code protability and optimization, especially in languages like C (~My favorite~). ",
        url: this.props.data[1]
      },
  {
        desc: "I love embedded systems!",
        url: this.props.data[2]
      },
      {
        desc: "I love Mathematics!",
        url: this.props.data[3]
      }
      ,
      {
        desc: "I love quality family time!",
        url: this.props.data[4]
      },
      {
        desc: "I love cats!",
        url: this.props.data[5]
      },
      {
        desc: "I love hiking!",
        url: this.props.data[6]
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
                <img src={data.url} style={{borderRadius: 400/ 2 }}/>
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
