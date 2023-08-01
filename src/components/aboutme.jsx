import { Nav } from "./landing"
import img from "./images/me4.jpg"
import { motion } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Aboutme = () => {

 return (
  <section>
   <Nav></Nav>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
    <Display img1={img} />
   </motion.div>
  </section>
 )

}


export const Display = (props) => {
 // use carousel slide to display hobbies with images
 const arr = [props.img1, props.img2, props.img3, props.img4, props.img5, props.img6, props.img7, props.img8]
 return (
  <section className="App">
   <h1 className="hlight" >
    More about me!
   </h1>
   <Carousel>
    <div>
     <img src={arr[0]} height="500" width="auto" />
     <p className="desc">Me!</p>
    </div>
    <div>
     <img src={arr[1]} />
     <p className="legend">Legend 2</p>
    </div>
    <div>
     <img src={arr[2]} />
     <p className="legend">Legend 3</p>
    </div>
   </Carousel>
  </section>


 )
}