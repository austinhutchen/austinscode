
import { Nav } from "./landing";
export const Projects = () => {

 return (
  <div className="App">
   <Nav></Nav>


   <div >
    <h2 className="hlight" style={{marginTop:50}}>
     <b>NOTABLE PROJECTS:</b>
    </h2>
   </div>
   <div>
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
   <a href="" style={{ margin: 25, fontSize: 14 }}>
    <b style={{ margin: 25 }}>TWITTER</b>
   </a>
   <br></br>


   <br></br>

  </div>
 )
}