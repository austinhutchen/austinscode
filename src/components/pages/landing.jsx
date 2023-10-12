import { motion } from "framer-motion"; 
import { Nav } from "../common/navbar";
import { Spinner } from '../common/symbols';
import { Footer } from '../common/footer';
import React  from 'react';

const Head = () => {
    return (
        <motion.div
        >
            <Nav />
        </motion.div >
    )
}
// components


// landing page 
export const Landing = () => {
    // add Player and Spinner, get css animations working
    return (
        <section className="App">
            <Head />
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <i
                    id="desc"
                    className="App"
                >
      <h1 style={{padding :30}}>
                    <b>
                        Full-Stack Software Engineer with passion for development and
                        experience working with startups!
                    </b>
      </h1>
                </i>
            </motion.div>
            <Spinner />
            <section id="footer">
                <Footer />
            </section>
        </section>
    )
}

