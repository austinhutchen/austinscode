import { Landing } from "../pages/landing.tsx"
import { AnimatePresence } from "framer-motion"; 
import {Resume} from '../pages/resume.tsx'
import {Projects} from '../pages/projects.tsx'
import {Aboutme} from '../pages/aboutme.tsx'
import {View} from '../pages/accredations.tsx'
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import rec_letter from "../../fast_imgs/REC_LETTER.png"
import me from "../../fast_imgs/me4.webp";
import coding from "../../fast_imgs/coding.webp";
import systems from "../../fast_imgs/systems.webp";
import comments3 from "../../fast_imgs/comments(3).png"
import inclusion from "../../fast_imgs/inclusion.webp"
import support from "../../fast_imgs/support.webp"
import math from "../../fast_imgs/IMG_0913.webp";
import family from '../../fast_imgs/family.webp';
import mimi from "../../fast_imgs/mimi.webp";
import nature from "../../fast_imgs/nature.webp";
import liv from"../../fast_imgs/liv.webp"
import pdf from "../../fast_imgs/Resume.webp";
import solder from "../../fast_imgs/SOLDER.mp4";
import github from "../../fast_imgs/GITHUBME.webp";
import tinker from "../../fast_imgs/tinker.webp";
export const AnimatedRoutes = () => {
  const ABOUTME_PAYLOAD = [me,coding,systems,math,family,mimi,nature,solder,liv,github,tinker]
  const PDF_PAYLOAD = [ rec_letter, "",comments3, inclusion,support ]
  const RESUME_PAYLOAD = [pdf]
    const location = useLocation();
    return (
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route  path="" element={<Landing />} />
                        <Route   path="/Resume" element={<Resume data={RESUME_PAYLOAD} />} />
                        <Route   path="/Projects" element={<Projects />} />
                        <Route  path="/AboutMe" element={<Aboutme data={ABOUTME_PAYLOAD} />} />
                        <Route   path="/Accredidations" element={<View data={PDF_PAYLOAD} />} />
                    </Routes>
                </AnimatePresence>

            </div>

    )

}
