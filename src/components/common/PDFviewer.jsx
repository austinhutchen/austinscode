// reusable with props
import React  from 'react';
import { motion } from "framer-motion"; 
import "../../css/dimensions.css";
export const PDFViewer = (props) => {

    return (
        <section>
            <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <br />
                <embed src={props.data}className="pdf" />
            </motion.div>
        </section>
    )
}
