import { Nav } from "../common/navbar"
import me from "../images/me4.jpg"
import mimi from "../images/mimi.jpg"
import family from "../images/family.jpeg"
import React  from 'react';
import nature from "../images/nature.jpg"
import coding from "../images/coding.JPG"
import { motion } from "framer-motion/dist/framer-motion"; 
import { Carousel } from 'react-responsive-carousel';
import useWindowDimensions from '../base/optimize'
import { Footer } from "../common/footer"
export const Aboutme = () => {
    return (
        <div className="App">
            <Nav />
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <Display img1={me} img2={mimi} img3={family} img4={nature} img5={coding} />
            </motion.div>
        </div>
    )
}


export const Display = (props) => {
    const arr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6, props.img7, props.img8]
    let { height, width } = useWindowDimensions();
    height=height/1.5;
    width=width/1.001;
    return (
        <div >
            <section style={{ paddingBottom: 10 }}>
                <h1 className="hlight"  >
                    More about me!
                </h1>
            </section>
            <Carousel sliderWidth={width}
                itemWidth={width}>
                <div>
                    <img src={arr[0]} height={height } width='auto' />
                    <p className="legend">  My name is <i><b></b>Austin Hutchen</i>. I'm a software engineer with aspirations of working on embedded systems and machine learning, and I have plenty of hobbies! Swipe for more:
                    </p>
                </div>
                <div>
                    <img src={arr[4]} height={height } width="auto" />
                    <p className="legend">I love coffee and coding!</p>
                </div>
                <div>
                    <img src={arr[2]} height={height } width="auto" />
                    <p className="legend">I love quality family time!</p>
                </div>
                <div>
                    <img src={arr[3]} height={height } width="auto" />
                    <p className="legend">I love hiking!</p>
                </div>
                <div>
                    <img src={arr[1]} height={height } width="auto" />
                    <p className="legend">I love cats!</p>
                </div>
            </Carousel>
            <Footer/>
        </div>
        
    )
}