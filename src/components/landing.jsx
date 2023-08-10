import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import "../App.css";
import "../css/spinner.css"
import "../css/spotify.css";
import "../css/nav-bar.css";
import "../css/search.css";
import "../css/square.css";
import "../css/wave.css";

export const Nav = () => {

    const nav = useNavigate();
    return (
        <div>
            <nav
                class="navbar navbar-dark bg-dark fixed-top"
                href="../views/hobbies.html"
            >
                <div>
                    <button
                        class="btn btn-outline-success me-2"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/src/components/landing.js');
                        }}
                    >
                        Home
                    </button>
                    <button
                        class="btn btn-md btn-outline-secondary"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/src/components/resume.js');
                        }}
                    >
                        Resume
                    </button>
                    <button
                        class="btn btn-md btn-outline-secondary"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/src/components/aboutme.js');
                        }}
                    >
                        About
                    </button>
                    <button
                        class="btn btn-md btn-outline-secondary"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/src/components/projects.js');
                        }}
                    >
                        Projects
                    </button>
                    <button
                        class="btn btn-md btn-outline-secondary"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/src/components/accredations.js');
                        }}
                    >
                        Accredations
                    </button>
                </div>
                <a class="navbar-brand">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
                        alt="icon"
                        width="30"
                        height="30"
                    />
                </a>
            </nav>
            <div className="banner" style={{ marginTop: 40 }}>
                <h1 id="name">Austin Hutchen</h1>
            </div>
        </div>

    );
};

const Head = () => {
    return (
        <motion.div
        >
            <Nav />
        </motion.div >
    )
}
// components
const Player = () => {
    // uses spotify.css to render
    return (
        <div class="card" className="App">


            <div class="controls">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="24"
                    class="volume_button">
                    <path clip-rule="evenodd"
                        d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Zm-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.178 7.178 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.782 4.782 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698Z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="volume">
                    <div class="slider">
                        <div class="green"></div>
                    </div>
                    <div class="circle"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path clip-rule="evenodd"
                        d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z"
                        fill-rule="evenodd"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path clip-rule="evenodd"
                        d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z"
                        fill-rule="evenodd"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
                    <path clip-rule="evenodd"
                        d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="air"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round"
                    stroke-linecap="round" stroke="currentColor" fill="none" height="20" width="24">
                    <path
                        d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                </svg>
            </div>
            <div class="time">
                <div class="elapsed"></div>
            </div>

            <p class="timetext time_now">1:31</p>
            <p class="timetext time_full">3:46</p>
        </div>
    )
}
const Spinner = () => {
    return (
        <div class="spinner-container">
            <div class="spinner">
                <div class="spinner">
                    <div class="spinner">
                        <div class="spinner">
                            <div class="spinner">
                                <div class="spinner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div class="container">
            <div class="search-container">
                <input class="input" type="text" />
                <svg viewBox="0 0 24 24" class="search__icon">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    )
}
const Square = () => {
    return (
        <div class="loader">
            <div class="box box0">
                <div></div>
            </div>
            <div class="box box1">
                <div></div>
            </div>
            <div class="box box2">
                <div></div>
            </div>
            <div class="box box3">
                <div></div>
            </div>
            <div class="box box4">
                <div></div>
            </div>
            <div class="box box5">
                <div></div>
            </div>
            <div class="box box6">
                <div></div>
            </div>
            <div class="box box7">
                <div></div>
            </div>
            <div class="ground">
                <div></div>
            </div>
        </div>
    )
}
const Wave = () => {
    return (
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export const Landing = () => {

    // add Player and Spinner, get css animations working
    return (
        <section className="App">
            <Head />
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0 } }}>
                <i
                    id="desc"
                    className="App"
                >
                    <b>
                        Full-Stack Software Engineer with passion for development and
                        experience working with startups!
                    </b>
                </i>
            </motion.div>
            <Player />
            <Spinner />
        </section>
    )
}