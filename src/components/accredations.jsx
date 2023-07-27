import { Nav } from "./landing";
import { motion } from 'framer-motion'

// reusable with props
export const PDFViewer = (props) => {
 return (

  <section>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
    <br></br>
    <embed src={props.data} height="600" width="500" className="img" />
   </motion.div>
  </section>
 )
}


export const View = (props) => {
 return (
  <>
   <Nav></Nav>
   <PDFViewer data={props.data} />
  </>
 )
}
