    import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

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
        <a className="navbar-brand">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png"
            alt="icon"
            width="30vh"
            height="30vh"
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


