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
import shell from '../../fast_imgs/shell.webp'
import encryptc from '../../fast_imgs/encryptc.webp'
import PLANT_WATERER from "../../fast_imgs/PLANT_KERNEL.mp4"
import PLANT_WATERER_2 from "../../fast_imgs/PLANT_KERNEL.jpg"
import calculator from '../../fast_imgs/calculator.webp'
import maps from '../../fast_imgs/maps.webp'
import gesture from '../../fast_imgs/gesture.mp4'
import my_interface from '../../fast_imgs/interface.webp'
import butterfly from '../../fast_imgs/animate.mp4'
import notable from '../../fast_imgs/journalapp.webp'
import weather from '../../fast_imgs/WEATHER.webp'
import WEATHER_SENSOR from '../../fast_imgs/ESP_WEATHER.webp'
import search from '../../fast_imgs/PYCLI.webp'
import actix from "../../fast_imgs/concurrency-model.webp"
import graph from '../../fast_imgs/graph.mp4'
import bash from "../../fast_imgs/BASH.webp"
import liv from"../../fast_imgs/liv.webp"
import php from "../../fast_imgs/PHP.webp"
import pdf from "../../fast_imgs/Resume.webp";
import solder from "../../fast_imgs/SOLDER.mp4";
import algos from "../../fast_imgs/ALGOS.PNG";
import wled from "../../fast_imgs/WLED.mp4";
import wled2 from "../../fast_imgs/WLED2.mp4";
import github from "../../fast_imgs/GITHUBME.webp";
import hole2 from "../../fast_imgs/hole2.mp4";
import game from "../../fast_imgs/game1.webp";
export const AnimatedRoutes = () => {
  const ABOUTME_PAYLOAD = [me,coding,systems,math,family,mimi,nature,solder,liv,github]
  const PROJECTS_PAYLOAD = [shell,encryptc,PLANT_WATERER, calculator, maps, gesture, my_interface, butterfly, notable, weather, graph,PLANT_WATERER_2, WEATHER_SENSOR, search,actix,bash,php, algos,wled,wled2,hole2,game]
  const PDF_PAYLOAD = [ rec_letter, "",comments3, inclusion,support ]
  const RESUME_PAYLOAD = [pdf]
    const location = useLocation();
    return (
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route  path="" element={<Landing />} />
                        <Route   path="/Resume" element={<Resume data={RESUME_PAYLOAD} />} />
                        <Route   path="/Projects" element={<Projects data ={PROJECTS_PAYLOAD} />} />
                        <Route  path="/AboutMe" element={<Aboutme data={ABOUTME_PAYLOAD} />} />
                        <Route   path="/Accredidations" element={<View data={PDF_PAYLOAD} />} />
                    </Routes>
                </AnimatePresence>

            </div>

    )

}
