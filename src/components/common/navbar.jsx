import { useNavigate } from "react-router-dom";
import "../../App.css";

import React  from 'react';
export const Nav = () => {
    const nav = useNavigate();
    return (
        <div>
            <nav
                class="navbar navbar-dark bg-dark fixed"
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
                        width="40vh"
                        height="40vh"
                    />
                </a>
            </nav>
            <div className="banner" >
                <h3 id="name">Austin Hutchen</h3>
            </div>
        </div>

    );
};
