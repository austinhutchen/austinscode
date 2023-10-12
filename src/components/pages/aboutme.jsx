import { Nav } from "../common/navbar"
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
import "../../css/fonts.css";
export const Aboutme = () => {
  return (
    <div>
      <Nav />
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
        desc: "My name is Austin Hutchen. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more:",
        url: me
      }
      ,
      {
        desc: "I love coffee and coding!",
        url: coding
      },
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
      }


    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 150,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: false,
      centerMode: true,

    };
    return (<div>
      <h1 className="hlight" >
      <b>
        About me!

      </b>
            </h1>
      <br />
      <br />
      <div className="sc">
        <Slider {...settings}>
          {keys.map(data => {
            return (
              <div className="slick-slide">
                <h2>
                  {data.desc}
                </h2>
                <img src={data.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
    );
  }
}

