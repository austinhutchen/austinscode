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

 return (
  <section>
   <Nav></Nav>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
    <Display img1={me} img2={mimi} img3={family} img4={nature} img5={coding} />
   </motion.div>
  </section>
 )

}


export const Display = (props) => {
 // use carousel slide to display hobbies with images
 const arr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6, props.img7, props.img8]
 return (
  <section className="App">
   <section style={{ paddingBottom: 20 }}>
    <h1 className="hlight"  >
     More about me!
    </h1>
   </section>

   <Carousel>
    <div>
     <img src={arr[0]} height="auto" width="auto" />
     <p className="legend">Me!</p>
    </div>
    <div>
     <img src={arr[1]} height="auto" width="auto" />
     <p className="legend">I love cats!</p>
    </div>
    <div>
     <img src={arr[2]} height="auto" width="auto" />
     <p className="legend">I love quality family time!</p>
    </div>
    <div>
     <img src={arr[3]} height="auto" width="auto" />
     <p className="legend">I love hiking and lifting!</p>
    </div>
    <div>
     <img src={arr[4]} height="auto" width="auto" />
     <p className="legend">I love coffee and coding!</p>
    </div>
   </Carousel>
  </section>


 )
}