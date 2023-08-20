import { Player } from "../common/symbols"
import { motion } from "framer-motion"



export const Footer = () => {
 return (
  <motion.div >
   <footer id="footer" className="App">
    <wrapper class="d-flex flex-column">

     <main class="flex-fill">
      Hello world!

     </main>
     <footer>
      <Player />
     </footer>
    </wrapper>
   </footer>

  </motion.div>

 )

}