import { Nav } from "./landing"
import img from "./images/me4.jpg"
import { motion } from 'framer-motion'

export const Aboutme = () => {

 return (
  <section>
   <Nav></Nav>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
    <h1 className="hlight" >
     A page for my hobbies!
    </h1>
    <Display></Display>
    <img src={img} height="520" width="auto" style={{marginTop:20}} />
   </motion.div>
  </section>
 )

}


const Display = () => {
 // use carousel slide to display hobbies with images
 return (
  <div className="App">


  </div>
 )
}