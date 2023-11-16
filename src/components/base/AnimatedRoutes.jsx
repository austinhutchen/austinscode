import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "../pages/landing"
import { Resume } from "../pages/resume"
import { Projects } from "../pages/projects"
import { View } from "../pages/accredations"
import { Aboutme } from "../pages/aboutme"
import { AnimatePresence } from "framer-motion"; 
import _pdf from "./fast_imgs/REC_LETTER.png"
import _pdf2 from "../pages/images/RESUME_SWE.png"
import me from "./fast_imgs/me4.webp";
import coding from "./fast_imgs/coding.webp";

import systems from "./fast_imgs/systems.webp";

import stat1 from "./fast_imgs/stat1.png"
import stat2 from "./fast_imgs/stat2.png"
import inclusion from "./fast_imgs/inclusion.png"

import math from "./fast_imgs/IMG_0913.webp";
import family from './fast_imgs/family.webp';
import mimi from "./fast_imgs/mimi.webp";
import nature from "./fast_imgs/nature.webp";

import shell from './fast_imgs/shell.webp'
import encryptc from './fast_imgs/encryptc.webp'
import PLANT_WATERER from './fast_imgs/PLANT_WATERER.webp'

import calculator from './fast_imgs/calculator.webp'
import maps from './fast_imgs/maps.webp'

import gesture from './fast_imgs/gesture.mp4'

import my_interface from './fast_imgs/interface.webp'
import butterfly from './fast_imgs/animate.mp4'

import notable from './fast_imgs/journalapp.webp'

import weather from './fast_imgs/WEATHER.webp'
import graph from './fast_imgs/graph.mp4'

import React  from 'react';
export let AnimatedRoutes = () => {
  const ABOUTME_PAYLOAD = [me,coding,systems,math,family,mimi,nature]
  const PROJECTS_PAYLOAD = [shell,encryptc,PLANT_WATERER, calculator, maps, gesture, my_interface, butterfly, notable, weather, graph]
  const PDF_PAYLOAD = [ _pdf, stat1,stat2,inclusion ]
    const location = useLocation();
    return (
        <div className="main-wrapper">
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route exact path="" element={<Landing />} />
                        <Route exact path="src/components/landing.js" element={<Landing />} />
                        <Route exact path="src/components/resume.js" element={<Resume data={_pdf2} />} />
                        <Route exact path="src/components/projects.js" element={<Projects data ={PROJECTS_PAYLOAD} />} />
                        <Route exact path="src/components/aboutme.js" element={<Aboutme data={ABOUTME_PAYLOAD} />} />
                        <Route exact path="src/components/accredations.js" element={<View data={PDF_PAYLOAD} />} />
                    </Routes>
                </AnimatePresence>

            </div>
        </div>

    )

}
