import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "../pages/landing"
import { Resume } from "../pages/resume"
import { Projects } from "../pages/projects"
import { View } from "../pages/accredations"
import { Aboutme } from "../pages/aboutme"
import { AnimatePresence } from "framer-motion"; 
import _pdf from "../pages/images/REC_LETTER.png"
import _pdf2 from "../pages/images/RESUME_SWE.png"
import React  from 'react';
export let AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div className="main-wrapper">
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route exact path="" element={<Landing />} />
                        <Route exact path="src/components/landing.js" element={<Landing />} />
                        <Route exact path="src/components/resume.js" element={<Resume data={_pdf2} />} />
                        <Route exact path="src/components/projects.js" element={<Projects />} />
                        <Route exact path="src/components/aboutme.js" element={<Aboutme />} />
                        <Route exact path="src/components/accredations.js" element={<View data={_pdf} />} />
                    </Routes>
                </AnimatePresence>

            </div>
        </div>

    )

}
