import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.scss"
export const Nav: React.FC = () => {
  const nav = useNavigate();

  const navigateTo = (path: string) => {
    nav(path);
  };
const icon_size = '40em';
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-fixed-top navbar-expand-sm justify-content-center">
        <div>
          <button className="btn btn-outline-success px-2" type="button" onClick={() => navigateTo('/')}>
            Home
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
              src={"https://fs.buttercms.com/resize=width:940/I351RMgSjC6YAj1Ra8pE"}
              width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://www.instagram.com/austinscode/" target="_blank"  >
            <img
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/768px-Instagram-Icon.png"}
               width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>

          <a className="navbar-brand" href="https://www.upwork.com/freelancers/~01df5eabf2773916cc" target="_blank"  >
            <img
              src={"https://static-00.iconduck.com/assets.00/upwork-icon-2048x2048-rrxq98us.png"}
                   width={icon_size}
              height={icon_size}
              className="nav-icon"
            />
          </a>

          <a className="navbar-brand" href="https://www.linkedin.com/in/austin-hutchen-15440a1b2/" target="_blank"  >
            <img
              src={"https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"}
                width={icon_size}
              height= {icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://leetcode.com/austinhutchen/" target="_blank"  >
            <img
              src={"https://upload.wikimedia.org/wikipedia/commons/3/33/LeetCode_Logo_3.png"}
               width= {icon_size}
              height= {icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://mobiusblogr.medium.com/" target="_blank"  >
            <img
              src={"https://cdn.iconscout.com/icon/free/png-256/free-medium-52-461817.png"}
              width= {icon_size}
              height= {icon_size}
              className="nav-icon"
            />
          </a>
          <a className="navbar-brand" href="https://www.instructables.com/member/hutchencodes/" target="_blank"  >
            <img
              src={"https://www.librarieslearn.org/wp-content/uploads/instructables-logo.png"}
              
              width= {icon_size}
              height= {icon_size}
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


