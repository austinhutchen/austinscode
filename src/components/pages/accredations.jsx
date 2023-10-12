import { Nav } from "../common/navbar";
import { PDFViewer } from "../common/PDFviewer";
import { Footer } from "../common/footer";
import { motion } from "framer-motion"; 
import React  from 'react';

export const View = (props) => {
    return (
           <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
            <Nav />
            <h1 className="hlight"><b><i><u>Letter of Rec from MATH PHD students @ University Of Colorado Boulder:</u></i></b></h1>
            <PDFViewer data={props.data} />
            <PDFViewer data={''} />
            <Footer />
        </motion.div>
    )
}
