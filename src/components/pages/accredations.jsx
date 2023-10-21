import { Nav } from "../common/navbar";
import {PDFViewer} from "../common/PDFviewer.jsx"

// Plugins
import { motion } from "framer-motion";
import React from 'react';

import _pdf from "./images/Recommendation Letter_ Austin.pdf"
import "../../css/resume.css"

export const View= () => {
    return (
        <div>
        <Nav />

        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}>

            <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h1>
   </motion.div>

<div >

      <PDFViewer data= {_pdf} />



    </div>
      



        </div>
    )
}







