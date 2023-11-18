
import { Nav } from "../common/navbar.tsx"
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
            exit={{ x: window.innerWidth, transition: { duration: 0  } }}>
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
        url: this.props.data[0],
        loading:"eager"

      }
      ,
      {
        desc: "In my free time, I love to optimize code! I practice leetcode frequently to refine my understanding of algorithms, P/NP runtimes and read often on the problems of code portability and optimization, especially in languages like C (~My favorite~). ",
        url: this.props.data[1],
        loading:"eager"
      },
  {
        desc: "I love embedded systems!",
        url: this.props.data[2],
        loading:"eager"
      },
      {
        desc: "I love Mathematics!",
        url: this.props.data[3],
        loading: "lazy"
      }
      ,
      {
        desc: "I love quality family time!",
        url: this.props.data[4],
        loading: "lazy"

      },
      {
        desc: "I love cats!",
        url: this.props.data[5],
        loading: "lazy"

      },
      {
        desc: "I love hiking!",
        url: this.props.data[6],
        loading: "eager"

      },
    

    ];


    const settings = {
   dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: false,
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

     <>
                <img src={data.url} loading={data.loading} style={{borderRadius: 450/ 2, borderStyle:"solid", border: "0.5vh solid #0BA" }} />

                            <fieldset >
              <p className ="projdesc" style={{color:'cornsilk' ,  fontSize:"0.95em",  fontFamily: "Gill Sans, Gill Sans MT,Calibri,Trebuchet MS,sans-serif"   , fontWeight: 350,textShadow: "2px 3px 5px rgba(0,0,0,0.5)"}}>


<b>
                  {data.desc}
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
