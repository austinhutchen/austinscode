import { Landing } from "../pages/landing"
import { AnimatePresence } from "framer-motion"; 
import {Resume} from '../pages/resume'
import {Projects} from '../pages/projects'
import {Aboutme} from '../pages/aboutme'
import {Feedback} from '../pages/feedback'
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import {Visualizer} from '../pages/gallery';
 

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
