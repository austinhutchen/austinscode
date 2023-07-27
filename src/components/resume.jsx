
import { Nav } from "./landing";
import { motion } from "framer-motion";
import { PDFViewer } from "./accredations";
import pdf from "./images/resume SWE.pdf"
export const Resume = () => {
  return (
    <section>
      <Nav />
      <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition: { duration: 0 } }}>


        <body id="desc" >
          <h1 className="hlight" >
            <i> Relevant Work Experience</i>
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
        <h2 className="hlight" style={{ paddingTop: -10 }}>
          <b>OPEN SOURCE:</b>
        </h2>
        <br></br>
        <a href="https://github.com/twitter/the-algorithm/issues/162" style={{ margin: 25 }} target="_blank" rel="noreferrer">
          <b >TWITTER</b>
        </a>
        <br></br>
        <hr className="break" />
        <PDFViewer data={pdf}></PDFViewer>
      </motion.div>

    </section>

  )

}