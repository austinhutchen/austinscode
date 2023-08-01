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

    <Display />
   </motion.div>
  </section>
 )

}


const Display = () => {
 // use carousel slide to display hobbies with images
 return (
  <section className="App">
   <h1 className="hlight" >
    More about me!
   </h1>
   <Carousel>

    <div>
     <img src={img} height="520" width="auto" style={{ marginTop: 20 }} />
     <p className="legend">Legend 1</p>
    </div>
    <div>
     <img src="" />
     <p className="legend">Legend 2</p>
    </div>
    <div>
     <img src="" />
     <p className="legend">Legend 3</p>
    </div>
   </Carousel>
  </section>


 )
}