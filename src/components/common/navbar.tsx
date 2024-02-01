import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.scss"
import "../../css/navBar.scss"
const github = process.env.PUBLIC_URL + '/fast_imgs/github.png';
const instagram = process.env.PUBLIC_URL + '/fast_imgs/Instagram.png';
const leetcode = process.env.PUBLIC_URL + '/fast_imgs/leetcode.png';
const linkedin = process.env.PUBLIC_URL + '/fast_imgs/LinkedIn.png';
const medium = process.env.PUBLIC_URL + '/fast_imgs/Medium.png';
const home = process.env.PUBLIC_URL + '/fast_imgs/home.png';
export const Nav: React.FC = () => {
  const nav = useNavigate();

  const navigateTo = (path: string) => {
    nav(path);
  };
  const icon_size = '40svh';
  const button_styles="btn btn-outline-success btn-sm";
  return (
    <>

      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark justify-content-center " >
        <div >
  <button className= "btn btn-outline-warning btn-sm 2px" type="button" onClick={() => navigateTo('/')}>
            <a>
              <img
                src={home}
                width={icon_size}
                height={icon_size}
              />
            </a>
          </button>
                  <button className={button_styles} type="button" onClick={() => navigateTo('/AboutMe')}>
            About
          </button>
          <button className={ button_styles} type="button" onClick={() => navigateTo('/Projects')}>
            Projects
          </button>
          <button className= {button_styles} type="button" onClick={() => navigateTo('/Resume')}>
            Resume
          </button>


          <button
            className={button_styles}
            type="button"
            onClick={() => navigateTo('/Feedback')}
          >
            Feedback
          </button>
          <button className={button_styles} type="button" onClick={() => navigateTo('/Gallery')}>
            Tutorials
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
        </div>
      </nav>
      <div className="banner" >
        <h3 id="name">Austin  Hutchen</h3>
      </div>
    </>
  );
};


