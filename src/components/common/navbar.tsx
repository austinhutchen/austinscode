import { useNavigate } from "react-router-dom";
import "../../App.css";

import React  from 'react';
export const Nav = () => {
    const nav = useNavigate();
  // <div class="collapse navbar-collapse" id="navbarNav">
   // <ul class="navbar-nav">
    //<li class="nav-item d-none d-md-block">
      //  <a href="#" class="nav-link">Visible on Medium and larger</a>
    //</li>
    //<li class="nav-item d-md-none">
      //  <a href="#" class="nav-link">Visible when smaller than Medium</a>
    //</li> 
    //</ul>
//</div>
    return (
        <div>
            <nav
                class="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-sm justify-content-center "
            >
                <ul class="navbar-nav" >
                <li>
                    <button
                        class="btn btn-outline-success me-1"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/');
                        }}
                    >
                        Home
                    </button>
                    </li>
                    <li>
                    <button
                        class="btn btn-md btn-outline-primary me-1"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/AboutMe');
                        }}
                    >
                        About
                    </button>
                    </li>
        <button
                        class="btn btn-md btn-outline-primary me-1"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/Projects');
                        }}
                    >
                        Projects
                    </button>
                    <li>
                    <button
                        class="btn btn-md btn-outline-primary me-1"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/Resume');
                        }}
                    >
                        Resume
                    </button>
                  </li>
                  <li>
                    <button
                        class="btn btn-md btn-outline-primary me-1"
                        type="button"
                        id="navbar"
                        onClick={() => {
                            nav('/Accredidations');
                        }}
                    >
                        Accredidations
                    </button>
                    </li>
  <a class="navbar-brand">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
                        alt="icon"
                        width="30vh"
                        height="30vh"
                        className="nav-icon"
                    />
                </a>
                </ul>
              
            </nav>
            <div className="banner" >
                <h3 id="name">Austin  Hutchen</h3>
            </div>
        </div>

    );
};
