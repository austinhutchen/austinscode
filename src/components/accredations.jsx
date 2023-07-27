import { Nav } from "./landing";
import { motion } from 'framer-motion'

// reusable with props
export const PDFViewer = (props) => {
 return (
  
  <section>
   <Nav></Nav>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

    <br></br>
    <embed src={props.data} height="600" width="500" className="img" />
   </motion.div>
  </section>
 )
}



