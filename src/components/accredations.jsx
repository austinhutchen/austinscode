import { Nav } from "./landing";
import { motion } from 'framer-motion'

// reusable with props
export const PDFViewer = (props) => {
 return (
  <section>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

    <br></br>
    <embed src={props.data} height="600" width="500" style={{ paddingTop: 5, alignSelf: "center" }} />
   </motion.div>
  </section>
 )
}

 export const Accredations=()=>{
  <section>
  <Nav></Nav>
  <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

   <h2><b><i><u>Letter of Accredation from Math PHD @ CU Boulder</u></i></b></h2>
   <br></br>
   <embed src={"./images/Recommendation Letter_ Austin.pdf"} height="600" width="500" style={{ paddingTop: 5, alignSelf: "center" }} />
  </motion.div>
 </section>
 }


