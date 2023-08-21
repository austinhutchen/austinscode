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

 if (isBottom) {
  return (<div className={"showFooter"}>
   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
    <footer className="App">
     <wrapper class="d-flex flex-column">

      <main class="flex-fill">
      <code className="footercode">printf('%d','Hello World!')</code>

      </main>
      <footer>
       <Player />
      </footer>
     </wrapper>
    </footer>

   </motion.div>
  </div>);
 }
 else {
  return (
   <div/>
  );
 }


};
