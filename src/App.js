import { Component } from "react";
import "./App.css";
import img from "./images/me4.jpg";

// components
const Head = () => {
  return (
    <>
      <div className="banner">
        <h1 id="name">Austin Hutchen</h1>
      </div>
      <header>
        <div>
          <img src={img} width="700" height="420" align="bottom" />
        </div>
      </header>
    </>
  );
};

const Body = () => {
  return (
    <>
      <body id="desc">
        <h1 className="hlight">
          <u>About Me:</u>
        </h1>
        <p></p>
        <b>
          <i>
            Prospective software engineer with passion for development and
            experience working with startups!
          </i>
        </b>

        <h3>
          <a href="https://catalog.colorado.edu/undergraduate/colleges-schools/engineering-applied-science/programs-study/computer-science/computer-science-bachelor-science-bscs/">
            CSULB BSCS STUDENT - CLASS OF 2025
          </a>
        </h3>
        <h1 className="hlight">
          <i> Relevant Work Experience</i>
        </h1>
        <hr className="break" />
        <ul>
          <li className="expitem">
            <b>
              <u>
                Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)
              </u>
            </b>
            <article>
              <p>
                {" "}
                Made first company sale as Marketing consultant, worked closely
                with the software engineering team to achieve forecasted
                results.{" "}
              </p>
            </article>
          </li>
          <li className="expitem">
            <b>
              <u>
                Calculus 2 Course Assistant (University Of Colorado Boulder)
              </u>
            </b>
            <article id="font">
              Taught CACLULUS 2 alongside faculty at CU boulder. Also held
              office hours every week to assist learning of course material.{" "}
              <b>
                Recieved 97% positive feedback from 103 participants on end of
                semester survey.
              </b>
            </article>
          </li>
        </ul>
      </body>
      <hr className="break" />
    </>
  );
};

const Foot = () => {
  return (
    <footer id="footer">
      <hr className="break" />
      <div style={{ margin: 15 }}>
        <h2 className="hlight">
          <b>NOTABLE PROJECTS:</b>
        </h2>
      </div>
      <div style={{ margin: 15 }} id="desc">
        <a href="https://github.com/austinhutchen/encrypt.C.git">
          FILE TEXT I/O PARSER AND COMPRESSION ALGORITHM (C++)
        </a>
        <br></br>
        <a href="https://github.com/austinhutchen/IOS-calculator-app">
          Functional calculator App (FLUTTER/DART)
        </a>
        <br></br>
        <a href="https://github.com/austinhutchen/About-Me.git">
          This Webpage (REACT/JS)
        </a>
        <br></br>
        <a href="https://github.com/austinhutchen/weather-native.git">
          Weather app (REACT NATIVE)
        </a>
        <br></br>
        <a href="https://github.com/austinhutchen/redditsearch">
          Reddit search/statistics engine (PYTHON)
        </a>
        <br></br>
        <a href="https://github.com/austinhutchen/newsletter.rs.git">
          Rust+SQL+Bash siteless webapp
        </a>
      </div>
      <h2 className="hlight">
        <b>OPEN SOURCE:</b>
      </h2>
      <br></br>
      <a href="">TWITTER</a>
      <p>
        Advised twitter on optimizations for their recommendation algorithms,
        most notably the use of floating point vectorisations.
      </p>
      <br></br>
    </footer>
  );
};

// main app
class MainApp extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.state = {
      today: new Date(),
      date: "",
    };
  }
  setData(_date) {
    this.setState({
      date: _date,
    });
  }
  // javascript goes here
  render() {
    return (
      <div className="App">
        {this.state.date}
        <Head />
        <Body />
        <Foot />
      </div>
    );
  }
}

export default MainApp;
