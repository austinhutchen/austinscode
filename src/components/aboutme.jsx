import { Nav } from "./landing"
import me from "./images/me4.jpg"
import mimi from "./images/mimi.jpg"
import family from "./images/family.jpeg"
import nature from "./images/nature.jpg"
import coding from "./images/coding.JPG"
import { motion } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Aboutme = () => {
    // optimize motion div with for desktop and mobile HERE
    return (
        <section className="App">
            <Nav />
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <Display img1={me} img2={mimi} img3={family} img4={nature} img5={coding} />
            </motion.div>
        </section>
    )
}


export const Display = (props) => {
    // use carousel slide to display hobbies with images
    const arr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6, props.img7, props.img8]
    const height = 700;
    const width = 500;
    return (
        <section >
            <section style={{ paddingBottom: 20 }}>
                <h1 className="hlight"  >
                    More about me!
                </h1>
            </section>
            <Carousel>
                <div>
                    <img src={arr[0]} height={height} width={width} />
                    <p className="legend">  My name is <i><b></b>Austin Hutchen</i>. I'm a software engineer with aspirations of working on embedded systems and machine learning, I have plenty of hobbies! Swipe to learn more:
                    </p>
                </div>
                <div>
                    <img src={arr[1]} height={height} width={width} />
                    <p className="legend">I love cats!</p>
                </div>
                <div>
                    <img src={arr[2]} height={height} width={width} />
                    <p className="legend">I love quality family time!</p>
                </div>
                <div>
                    <img src={arr[3]} height={height} width={width} />
                    <p className="legend">I love hiking!</p>
                </div>
                <div>
                    <img src={arr[4]} height={height} width={width} />
                    <p className="legend">I love coffee and coding!</p>
                </div>

            </Carousel>
        </section>
    )
}