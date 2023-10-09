// reusable with props
import React  from 'react';
import { motion } from "framer-motion"; 

export const PDFViewer = (props) => {

    return (
        <section>
            <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <br />
                <embed src={props.data} height="600" width="500" className="img" />
            </motion.div>
        </section>
    )
}
