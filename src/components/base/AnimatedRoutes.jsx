import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "../pages/landing"
import { Resume } from "../pages/resume"
import { Projects } from "../pages/projects"
import { View } from "../pages/accredations"
import { Aboutme } from "../pages/aboutme"
import { AnimatePresence } from "framer-motion"; 
import _pdf from "../pages/images/REC_LETTER.png"
import _pdf2 from "../pages/images/RESUME_SWE.png"
import me from "./fast_imgs/me4.webp";
import coding from "./fast_imgs/coding.webp";

import systems from "./fast_imgs/systems.webp";


import math from "./fast_imgs/IMG_0913.webp";
import family from './fast_imgs/family.webp';
import mimi from "./fast_imgs/mimi.webp";
import nature from "./fast_imgs/nature.webp";



import React  from 'react';
export let AnimatedRoutes = () => {
  const aboutme_props = [me,coding,systems,math,family,mimi,nature]
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
                        <Route exact path="src/components/aboutme.js" element={<Aboutme data={aboutme_props} />} />
                        <Route exact path="src/components/accredations.js" element={<View data={_pdf} />} />
                    </Routes>
                </AnimatePresence>

            </div>
        </div>

    )

}
