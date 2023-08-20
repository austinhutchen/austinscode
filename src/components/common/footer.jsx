import { Player } from "../common/symbols"
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
export const Footer = () => {
 const [isBottom, setIsBottom] = useState(false);

 const handleScroll = () => {

  const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

  if (bottom) {
   setIsBottom(true)
  } else {
   setIsBottom(false)
  }

 };
 useEffect(() => {
  window.addEventListener('scroll', handleScroll, {
   passive: true
  });

  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  <>
   <div>content.....</div>
   <footer className={isBottom ? "showFooter" : "hideFooter"}><motion.div >
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

   </motion.div></footer>
  </>

 )
};
