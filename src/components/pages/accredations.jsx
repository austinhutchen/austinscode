import { Nav } from "../common/navbar";


import { Document, Page, pdfjs } from 'react-pdf'
// Plugins
import { Footer } from "../common/footer";
import { motion } from "framer-motion";
import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import _pdf from "./images/Recommendation Letter_ Austin.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export const View () => {
    return (
        <div>
        <Nav />
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
            <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h1>
           <Document file= {_pdf}>
          <Page pageNumber={1} />
      </Document>
      <Footer />
        </motion.div>
        </div>
    )
}







