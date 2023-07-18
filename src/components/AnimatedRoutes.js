

import { Routes, Route, useLocation } from "react-router-dom";



export let AnimatedRoutes=()=>{
 const location = useLocation();
return(
 <div className="App">
    <HashRouter >
          <Routes>
            <Route exact path="" element={<Landing />} />
            <Route exact path="src/components/landing.js" element={<Landing />} />
            <Route exact path="src/components/resume.js" element={<Resume />} />
            <Route exact path="src/components/projects.js" element={<Projects />} />
            <Route exact path="src/components/hobbies.js" element={<Hobbies />} />
            <Route exact path="src/components/accredations.js" element={<Reader />} />
          </Routes>
        </HashRouter>

 </div>
)

}