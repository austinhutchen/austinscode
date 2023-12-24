    import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import insta from "../../fast_imgs/Me.png"
import gh from "../../fast_imgs/github.png"
export const Nav: React.FC = () => {
  const nav = useNavigate();

  const navigateTo = (path: string) => {
    nav(path);
  };

  return (
        <>
    <nav className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-md justify-content-center">
      <div>
        <button className="btn btn-outline-success me-1" type="button" onClick={() => navigateTo('/')}>
          Home
        </button>
        <button className="btn btn-md btn-outline-primary me-1" type="button" onClick={() => navigateTo('/AboutMe')}>
          About
        </button>
        <button className="btn btn-md btn-outline-primary me-1" type="button" onClick={() => navigateTo('/Projects')}>
          Projects
        </button>
        <button className="btn btn-md btn-outline-primary me-1" type="button" onClick={() => navigateTo('/Resume')}>
          Resume
        </button>
        <button
          className="btn btn-md btn-outline-primary me-1"
          type="button"
          onClick={() => navigateTo('/Accredidations')}
        >
          Accredidations
        </button>

                <a className="navbar-brand" href="https://github.com/austinhutchen">
          <img
            src={gh}
            alt="icon"
            width="auto"
            height="40vh"
            className="nav-icon"
          />
        </a>
        <a className="navbar-brand" href="https://www.instagram.com/austinscode/">
          <img
            src= {insta}
            alt="icon"
            width="auto"
            height="40vh"
            className="nav-icon"
          />
        </a>
              

      </div>
    </nav>
           <div className="banner" >
                <h3 id="name">Austin  Hutchen</h3>
            </div>
              </>
  );
};


