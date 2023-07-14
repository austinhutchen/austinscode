
import { Nav } from "./landing";
export const Projects = () => {

 return (
  <div className="App">
   <Nav></Nav>


   <div >
    <h2 className="hlight" >
     <b>NOTABLE PROJECTS:</b>
    </h2>
   </div>
   <div>
    <b >
     <a href="https://github.com/austinhutchen/encrypt.C.git" target="_blank" rel="noreferrer">
      FILE TEXT I/O PARSER AND COMPRESSION ALGORITHM (C++)
     </a>
     <br></br>
     <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank" rel="noreferrer">
      Functional calculator App (FLUTTER/DART)
     </a>
     <br></br>
     <a href="https://github.com/austinhutchen/portfolio-rewritten.git" target="_blank" rel="noreferrer">
      This Webpage (REACT/JS)
     </a>
     <br></br>
     <a href="https://github.com/austinhutchen/weather-native.git" target="_blank" rel="noreferrer">
      Weather app (REACT NATIVE)
     </a>
     <br></br>
     <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noreferrer">
      Reddit search/statistics engine (PYTHON)
     </a>
     <br></br>
     <a href="https://github.com/austinhutchen/newsletter.rs.git" target="_blank" rel="noreferrer">
      Rust+SQL+Bash siteless webapp
     </a>
    </b>
   </div>
   <h2 className="hlight">
    <b>OPEN SOURCE:</b>
   </h2>
   <br></br>
   <a href="" style={{ margin: 25, fontSize: 14 }}>
    <b style={{ margin: 25 }}>TWITTER</b>
   </a>
   <br></br>


   <br></br>

  </div>
 )
}