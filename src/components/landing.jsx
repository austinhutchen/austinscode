import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import "../App.css";

export const Nav = () => {
 const nav = useNavigate();
 return (
  <div >
   <nav
    class="navbar navbar-dark bg-dark fixed-top"
    href="../views/hobbies.html"
   >
    <div>
     <button
      class="btn btn-outline-success me-2"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/landing.js');
      }}
     >
      Home
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/resume.js');
      }}
     >
      Resume
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/projects.js');
      }}
     >
      Projects
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/hobbies.js');
      }}
     >
      Hobbies
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/accredations.js');
      }}
     >
      Accredations
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
   <div className="banner" style={{ marginTop: 40 }}>
    <h1 id="name">Austin Hutchen</h1>
   </div>
  </div>

 );
};

const Head = () => {
 const nav = useNavigate();
 return (
  <div >
   <nav
    class="navbar navbar-dark bg-dark fixed-top"
    href="../views/hobbies.html"
   >
    <div>
     <button
      class="btn btn-outline-success me-2"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/landing.js');
      }}
     >
      Home
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/resume.js');
      }}
     >
      Resume
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/projects.js');
      }}
     >
      Projects
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/hobbies.js');
      }}
     >
      Hobbies
     </button>
     <button
      class="btn btn-md btn-outline-secondary"
      type="button"
      id="navbar"
      onClick={() => {
       nav('/src/components/accredations.js');
      }}
     >
      Accredations
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
   <div className="banner" style={{ marginTop: 40 }}>
    <h1 id="name">Austin Hutchen</h1>
   </div>
  </div>
 )
}
// components


export const Landing = () => {


 return (
  <section>
 <Head />
  <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth, transition:{duration:0} }}>
   <i
    id="desc"
    className="App"
   >
    <b>
     Full-Stack Software Engineer with passion for development and
     experience working with startups!
    </b>
   </i>
  </motion.div>
  </section>
 



 )
}