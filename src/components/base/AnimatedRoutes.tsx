import { Landing } from "../pages/landing.tsx"
import { AnimatePresence } from "framer-motion"; 
import {Resume} from '../pages/resume.tsx'
import {Projects} from '../pages/projects.tsx'
import {Aboutme} from '../pages/aboutme.tsx'
import {Feedback} from '../pages/feedback.tsx'
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import {Visualizer} from '../pages/gallery.tsx';
 

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
            <div className="App">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route  path="" element={<Landing />} />
                        <Route   path="/Resume" element={<Resume  />} />
                        <Route   path="/Projects" element={<Projects />} />
                        <Route  path="/AboutMe" element={<Aboutme />} />
                        <Route   path="/Feedback" element={<Feedback />} />
			<Route path ="/Gallery" element={<Visualizer /> } />
                    </Routes>
                </AnimatePresence>

            </div>

    )

}
