
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./components/landing"
import { Resume } from "./components/resume"
import { Projects } from "./components/projects"
import { PDFViewer } from "./components/accredations"
import { Hobbies } from "./components/hobbies"
import { HashRouter } from "react-router-dom";



export let AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="App">
      <HashRouter >
        <Routes location={location} key={location.pathname}>
          <Route exact path="" element={<Landing />} />
          <Route exact path="src/components/landing.js" element={<Landing />} />
          <Route exact path="src/components/resume.js" element={<Resume />} />
          <Route exact path="src/components/projects.js" element={<Projects />} />
          <Route exact path="src/components/hobbies.js" element={<Hobbies />} />
          <Route exact path="src/components/accredations.js" element={<PDFViewer />} />
        </Routes>
      </HashRouter>

    </div>
  )

}