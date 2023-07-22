import { Nav } from "./landing";
import pdf from "./images/Recommendation Letter_ Austin.pdf"
import { motion } from 'framer-motion'


export const PDFViewer = () => {
 return (
  <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
   <Nav></Nav>
   <h2><b><i><u>Letter of Accredation from Math PHD @ CU Boulder</u></i></b></h2>
   <br></br>
   <embed src={pdf} height="600" width="500" style={{ paddingTop: 5, alignSelf:"center" }} />
  </motion.div>
 )

}



