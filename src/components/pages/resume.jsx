import { Nav } from "../common/navbar";
import { motion } from "framer-motion";
import { PDFViewer } from "../common/PDFviewer";
import pdf from "../images/resume SWE.pdf"
import React from 'react';
const Body = () => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
            <body id="desc">
                <h1 className="hlight">
                    <b><i> DIRECT WORK EXPERIENCE</i></b>
                </h1>

                <h3>
                    <b>
                        <u>Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)</u>
                    </b>
                </h3>
                <article>
                    <p>
                        <b>
                            {" "}
                            Made first company sale as Marketing consultant, worked closely with
                            the software engineering team to achieve forecasted results.{" "}
                        </b>
                    </p>
                </article>
                <h3>
                    <b>
                        <u>Calculus 2 Course Assistant (University Of Colorado Boulder) (January 2023 - May 2023)</u>
                    </b>
                </h3>
                <article>
                    <b>
                        Taught CACLULUS 2 alongside faculty at CU boulder. Also held office
                        hours every week to assist learning of course material.{" "}

                        Recieved 97% positive feedback from 103 participants on end of
                        semester survey.
                    </b>
                </article>
                <h3>
                    <b>
                        <u>Ebay Electronics Repairs + Reseller (May 2018 -  Now 2023)</u>
                    </b>
                </h3>

                <article>
                    <b>
                        I sell refurbished and custom-built Apple, Linux, and Windows electronics, have handled over 200 customer sales to-date with 100% positive feedback rate from 45 customers on ebay. Also handle macbook, iphone, and ipad repairs, as well as Windows PC build requests. You can read the reviews and find my account @
                    </b>
                    <b>
                        <h3>
                            <a href="https://www.ebay.com/usr/gadgetsllcc">gadgetsllcc

                            </a>
                        </h3>

                    </b>
                </article>
   <h3>
                    <b>
                        <u>Github  Open Source Developer(May 2022 -  Now 2023)</u>
                    </b>
                </h3>

                <article>
                    <b>
                       I contribute to various open source projects and build many of my own, which you can see displayed in detail on my projects page. Of those I have contributed to are Twitter, The Official CU Boulder MATH Github, and much more at my account below. </b>
                    <b>
                        <h3>
                            <a href= "https://github.com/austinhutchen">
      github
                            </a>
                        </h3>

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

                <PDFViewer data={pdf} />
            </div>

        </motion.div>
    )
}




export const Resume = () => {
    return (
        <div className="App">
            <Nav />
            <Body />
        </div>
    )

}
