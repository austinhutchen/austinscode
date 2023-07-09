import "../App.css";
import img from "../images/me4.jpg";
import { useNavigate } from "react-router-dom";
//     <p id="paragraph">
//Advised twitter on optimizations for their recommendation algorithms,
//most notably the use of floating point vectorisations.
//</p>
export const Nav = () => {
  const nav = useNavigate();
  return (
    <div>
      <nav
        class="navbar navbar-dark bg-dark fixed-top"
        href="../views/hobbies.html"
      >
        <div>
          <button
            class="btn btn-outline-success me-2"
            type="button"
            id="navbar"
          >
            Home
          </button>
          <button
            class="btn btn-md btn-outline-secondary"
            type="button"
            id="navbar"
            onClick={() => {
              nav("/Landing");
            }}
          >
            Resume
          </button>
          <button
            class="btn btn-md btn-outline-secondary"
            type="button"
            id="navbar"
            onClick={() => {
              nav("/");
            }}
          >
            Projects
          </button>
          <button
            class="btn btn-md btn-outline-secondary"
            type="button"
            id="navbar"
            onClick={() => {
              nav("/");            }}
          >
            Hobbies
          </button>
        </div>
        <a class="navbar-brand">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
            alt="icon"
            width="30"
            height="30"
          />
        </a>
      </nav>
    </div>
  );
};
// components
export const Head = () => {
  return (
    <>
      <div className="banner" style={{ marginTop: 40 }}>
        <h1 id="name">Austin Hutchen</h1>
      </div>
      <header>
        <i
          id="desc"
          style={{ fontSize: 14, fontFamily: "verdana" }}
        >
          <b>
            Prospective software engineer with passion for development and
            experience working with startups!
          </b>
        </i>

        <div>
          <img src={img} width="700" height="420" align="bottom" />
        </div>
      </header>
    </>
  );
};

export const Body = () => {
  return (
    <>
      <body id="desc">
        <h1 className="hlight">
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
        <article id="font">
          Taught CACLULUS 2 alongside faculty at CU boulder. Also held office
          hours every week to assist learning of course material.{" "}
          <b>
            Recieved 97% positive feedback from 103 participants on end of
            semester survey.
          </b>
        </article>
      </body>
      <hr className="break" />
    </>
  );
};

export const Foot = () => {
  return (
    <footer id="footer">
      <hr className="break" />
      <div style={{ margin: 15 }}>
        <h2 className="hlight">
          <b>NOTABLE PROJECTS:</b>
        </h2>
      </div>
      <div style={{ margin: 15, fontSize: 14 }} id="desc">
        <b >
          <a href="https://github.com/austinhutchen/encrypt.C.git">
            FILE TEXT I/O PARSER AND COMPRESSION ALGORITHM (C++)
          </a>
          <br></br>
          <a href="https://github.com/austinhutchen/IOS-calculator-app">
            Functional calculator App (FLUTTER/DART)
          </a>
          <br></br>
          <a href="https://github.com/austinhutchen/portfolio-rewritten.git">
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
        </b>
      </div>
      <h2 className="hlight">
        <b>OPEN SOURCE:</b>
      </h2>
      <br></br>
      <a href="" style={{ margin: 15, fontSize: 14 }}>
        <b>TWITTER</b>
      </a>
      <br></br>


      <h2 className="hlight">
        <b style={{ margin: 10 }}>ACCREDATIONS:</b>
      </h2>
      <br></br>
      <a href="../images/Recommendation Letter_ Austin.pdf">
        <b>Calculus 2 Instructor Letter Of Recommendation</b>
      </a>

      <br></br>
    </footer>
  );
};
