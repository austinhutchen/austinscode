import { motion } from 'framer-motion'
import { Nav } from "./landing";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Display = () => {
    // use carousel slide to display hobbies with images
    return (
        <section className="App">
            <h1 className="hlight" >
                More about me!
            </h1>
            <Carousel>

                <div>
                    <img src={img} height="520" width="auto" style={{ marginTop: 20 }} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </section>


    )
}



export const Projects = () => {

    return (
        <section>
            <Nav></Nav>
            <motion.div className="App" initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>

                <h2 className="hlight" style={{ paddingTop: 20 }}>
                    <b>PERSONAL PROJECTS:</b>
                </h2>
                <section>
                    <div className="lead">
                        <b>
                            <a href="https://github.com/austinhutchen/IOS-calculator-app" target="_blank"
                                rel="noreferrer">
                                Functional calculator App (FLUTTER/DART)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/shell.git" target="_blank" rel="noreferrer">
                                Kernel Shell (VANILLA C)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/austinscode" target="_blank" rel="noreferrer">
                                This Webpage (REACT/JS)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/weather-native.git" target="_blank"
                                rel="noreferrer">
                                Weather app (REACT NATIVE)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/redditsearch" target="_blank" rel="noreferrer">
                                Reddit search/statistics engine (PYTHON)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/ArtificalSP.git" target="_blank" rel="noreferrer">
                                Artifical Intelligence Environmental Audio Analyzer (C+Tensorflow)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/cmalloc.git" target="_blank" rel="noreferrer">
                                Fully functional malloc() implementation (VANILLA C)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/encrypt.C.git" target="_blank" rel="noreferrer">
                                FILE TEXT I/O PARSER AND COMPRESSION ALGORITHM (C++)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/2d-walk.git " target="_blank" rel="noreferrer">
                                Portable Breadboard gaming computer (C)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/notable.git" target="_blank" rel="noreferrer">
                                Journalling app (REACT NATIVE/JAVA)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/GAMMA.JS.git" target="_blank" rel="noreferrer">
                                Graphing calculator in 2-3 dimensions (JAVASCRIPT)
                            </a>
                            <br></br>
                            <a href="https://github.com/austinhutchen/map-app.git" target="_blank" rel="noreferrer">
                                Map APP (Flutter/C++)
                            </a>
                        </b>
                    </div>
                    <br></br>


                </section>
                <hr></hr>

            </motion.div>
        </section>

    )
}