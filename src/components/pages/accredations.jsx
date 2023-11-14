import { Nav } from "../common/navbar";

// Plugins
import { motion } from "framer-motion";
import React from 'react';


import stat1 from "./images/stat1.png"
import stat2 from "./images/stat2.png"
import inclusion from "./images/inclusion.png"
import "../../css/resume.css"

export const View= (props) => {
    return (
        <div>
        <Nav />

        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.001  } }}>
<section>
            <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h1>
   <iframe src={props.data+"#zoom=FitW"} className="pdf" height="100%" width="100%" frameborder='0' allowfullscreen></iframe>
      </section>
<section>
   <h1 className="hlight"><b><i><u>Student comments from my CALCULUS 2 / MATH 2300 sections @ University Of Colorado Boulder:</u></i></b></h1>
      <br/>
      <br/>
      <div>
      <img src= {stat1} className="format-img" />
      <img src= {stat2} className="format-img" />
      <img src= {inclusion} className="format-img" />
      </div>
      </section>
   </motion.div>





        </div>
    )
}







