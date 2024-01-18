import { Landing } from "../pages/landing.tsx"
import { AnimatePresence } from "framer-motion"; 
import {Resume} from '../pages/resume.tsx'
import {Projects} from '../pages/projects.tsx'
import {Aboutme} from '../pages/aboutme.tsx'
import {View} from '../pages/accredations.tsx'
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";


const rec_letter = process.env.PUBLIC_URL + '/fast_imgs/REC_LETTER.png';
const me = process.env.PUBLIC_URL + '/fast_imgs/me4.webp';
const coding = process.env.PUBLIC_URL + '/fast_imgs/coding.webp';
const systems = process.env.PUBLIC_URL + '/fast_imgs/coding.webp';
const comments3 = process.env.PUBLIC_URL + '/fast_imgs/comments(3).png';
const inclusion = process.env.PUBLIC_URL + '/fast_imgs/inclusion.webp';
const support = process.env.PUBLIC_URL + '/fast_imgs/support.webp';
const math = process.env.PUBLIC_URL + '/fast_imgs/IMG_0913.webp';
const family = process.env.PUBLIC_URL + '/fast_imgs/family.webp';
const mimi = process.env.PUBLIC_URL + '/fast_imgs/mimi.webp';
const nature = process.env.PUBLIC_URL + '/fast_imgs/nature.webp';
const liv = process.env.PUBLIC_URL + '/fast_imgs/liv.webp';
const pdf = process.env.PUBLIC_URL + '/fast_imgs/Resume.webp';
const solder = process.env.PUBLIC_URL + '/fast_imgs/SOLDER.mp4';
const github = process.env.PUBLIC_URL + '/fast_imgs/GITHUBME.mp4';
const tinker = process.env.PUBLIC_URL + '/fast_imgs/tinker.webp';

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
