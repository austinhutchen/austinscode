import {Routes, Route, useLocation} from "react-router-dom";
import {Landing} from "../landing"
import {Resume} from "../resume"
import {Projects} from "../projects"
import {View} from "../accredations"
import {Aboutme} from "../aboutme"
import {AnimatePresence} from 'framer-motion'
import _pdf from "../images/Recommendation Letter_ Austin.pdf"

export let AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div className="App">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route exact path="" element={<Landing/>}/>
                    <Route exact path="src/components/landing.js" element={<Landing/>}/>
                    <Route exact path="src/components/resume.js" element={<Resume/>}/>
                    <Route exact path="src/components/projects.js" element={<Projects/>}/>
                    <Route exact path="src/components/aboutme.js" element={<Aboutme/>}/>
                    <Route exact path="src/components/accredations.js" element={<View data={_pdf}/>}/>
                </Routes>
            </AnimatePresence>

        </div>
    )

}