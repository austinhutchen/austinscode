
import { Nav } from "./landing";


export const Resume = () => {
  return (
    <div className="App">
      <Nav />
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
      <hr className="break" />
    </div>

  )



}