import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.scss"
const github = process.env.PUBLIC_URL + '/fast_imgs/github.png';
const instructables = process.env.PUBLIC_URL + '/fast_imgs/instructables.png';
const upwork = process.env.PUBLIC_URL + '/fast_imgs/upwork.png';
const instagram = process.env.PUBLIC_URL + '/fast_imgs/Instagram.png';
const leetcode = process.env.PUBLIC_URL + '/fast_imgs/leetcode.jpg';
const linkedin = process.env.PUBLIC_URL + '/fast_imgs/LinkedIn.png';
const medium = process.env.PUBLIC_URL + '/fast_imgs/Medium.png';
const home = process.env.PUBLIC_URL + '/fast_imgs/home.png';
export const Nav: React.FC = () => {
  const nav = useNavigate();

  const navigateTo = (path: string) => {
    nav(path);
  };
  const icon_size = '38vh';
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-sm justify-content-center">
        <div>
          <button className="btn btn-outline-success px-2" type="button" onClick={() => navigateTo('/')}>
            <img
              src={home}
  width={'27vh' }
              height={'27vh'}

            />
          </button>
          <button className="btn btn-md btn-outline-primary px-2" type="button" onClick={() => navigateTo('/AboutMe')}>
            About
          </button>
          <button className="btn btn-md btn-outline-primary px-2" type="button" onClick={() => navigateTo('/Projects')}>
            Projects
          </button>
          <button className="btn btn-md btn-outline-primary px-2" type="button" onClick={() => navigateTo('/Resume')}>
            Resume
          </button>
          <button
            className="btn btn-md btn-outline-primary me-1"
            type="button"
            onClick={() => navigateTo('/Accredidations')}
          >
            Accredidations
          </button>
          <a className="navbar-brand" href="https://github.com/austinhutchen" target="_blank" >
            <img
              src={github}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://www.instagram.com/austinscode/" target="_blank"  >
            <img
              src={instagram}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>

          <a className="navbar-brand" href="https://www.upwork.com/freelancers/~01df5eabf2773916cc" target="_blank"  >
            <img
              src={upwork}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>

          <a className="navbar-brand" href="https://www.linkedin.com/in/austin-hutchen-15440a1b2/" target="_blank"  >
            <img
              src={linkedin}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://leetcode.com/austinhutchen/" target="_blank"  >
            <img
              src={leetcode}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://mobiusblogr.medium.com/" target="_blank"  >
            <img
              src={medium}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://www.instructables.com/member/hutchencodes/" target="_blank"  >
            <img
              src={instructables}

              width={icon_size}
              height={icon_size}
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


