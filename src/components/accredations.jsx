import { Nav } from "./landing";
import pdf from "./images/Recommendation Letter_ Austin.pdf"
import { motion } from 'framer-motion'


export const PDFViewer = () => {
 return (
  <section>
   <Nav></Nav>
   <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

    <h2><b><i><u>Letter of Accredation from Math PHD @ CU Boulder</u></i></b></h2>
    <br></br>
    <embed src={pdf} height="600" width="500" style={{ paddingTop: 5, alignSelf: "center" }} />
   </motion.div>
  </section>

 )

}



