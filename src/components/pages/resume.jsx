import { Nav } from "../common/navbar";
import { motion } from "framer-motion/dist/framer-motion"; 
import { PDFViewer } from "../common/PDFviewer";
import pdf from "../images/resume SWE.pdf"
import { Footer } from "../common/footer";
import React  from 'react';
const Body = () => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
            <body id="desc">
                <h1 className="hlight">
                    <b><i> DIRECT WORK EXPERIENCE</i></b>
                </h1>
                <hr className="break" />
                <b>
                    <u>Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)</u>
                </b>
                <article>
                    <p>
                        {" "}
                        Made first company sale as Marketing consultant, worked closely with
                        the software engineering team to achieve forecasted results.{" "}
                    </p>
                </article>
                <b>
                    <u>Calculus 2 Course Assistant (University Of Colorado Boulder)</u>
                </b>
                <article>
                    Taught CACLULUS 2 alongside faculty at CU boulder. Also held office
                    hours every week to assist learning of course material.{" "}
                    <b>
                        Recieved 97% positive feedback from 103 participants on end of
                        semester survey.
                    </b>
                </article>
            </body>
            <br />
            <h1 className="hlight">
                <b><i> OPEN SOURCE CONTRIBUTIONS</i></b>
            </h1>
            <hr className="break" />
            <a href="https://github.com/twitter/the-algorithm/issues/162" style={{ margin: 25 }} target="_blank"
                rel="noreferrer">
                <b>TWITTER</b>
            </a>
            <hr />
            <div>
                <h1 className="hlight">
                    <b><i> FULL RESUME</i></b>
                </h1>

                <PDFViewer data={pdf}/>
            </div>

        </motion.div>
    )
}




export const Resume = () => {
    return (
        <div className="App">
            <Nav />
            <Body />
            <Footer />
        </div>
    )

}