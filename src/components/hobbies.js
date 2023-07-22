import { Nav } from "./landing"
import img from "./images/me4.jpg"
import { motion } from 'framer-motion'
export const Hobbies = () => {

 return (
  <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
   <Nav></Nav>
   <h1>
    A page for my hobbies!
   </h1>
   <Display></Display>
   <img src={img} height="500" width="auto" />
   <div className="loader">
    <div className="loader-square"></div>
    <div className="loader-square"></div>
    <div className="loader-square"></div>
    <div className="loader-square"></div>
    <div className="loader-square"></div>
    <div className="loader-square"></div>
    <div className="loader-square"></div>
   </div>
   <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div>
  </motion.div>
 )
}


const Display = () => {
 // use carousel slide to display hobbies with images
 return (
  <div className="App">


  </div>
 )
}