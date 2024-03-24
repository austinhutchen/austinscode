import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Collapse, Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Button } from 'reactstrap';
import "../../css/navBar.css";
export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const github = process.env.PUBLIC_URL + '/fast_imgs/github.png';
  const instagram = process.env.PUBLIC_URL + '/fast_imgs/Instagram.png';
  const leetcode = process.env.PUBLIC_URL + '/fast_imgs/leetcode.png';
  const linkedin = process.env.PUBLIC_URL + '/fast_imgs/LinkedIn.png';
  const medium = process.env.PUBLIC_URL + '/fast_imgs/Medium.png';
  const home = process.env.PUBLIC_URL + '/fast_imgs/home.png';
  const about = process.env.PUBLIC_URL + '/fast_imgs/About.png';
  const projects = process.env.PUBLIC_URL + '/fast_imgs/Circuit.png';
  const resume = process.env.PUBLIC_URL + '/fast_imgs/resume.png';
  const feedback = process.env.PUBLIC_URL + '/fast_imgs/feedback.png';
  const icon_size = '30svh';

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="custom-navbar" >
        <div className="navbar-header">

          <NavbarBrand className='navBrand' id="name" >Austin Hutchen </NavbarBrand>

          <NavbarToggler className="navbar-toggler" onClick={toggle} />
        </div>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex justify-content-center align-items-center" navbar>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/')}>
                <img src={home} width={icon_size} height={icon_size} />
                Home
              </Button>
            </NavItem >
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/AboutMe')}>
                <img src={about} width={icon_size} height={icon_size}  />
                About
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Projects')}>
                <img src={projects} width={icon_size} height={icon_size}  />
                Projects
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Resume')}>
                <img src={resume} width={icon_size} height={icon_size}  />
                Resume
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Feedback')}>
                <img src={feedback} width={icon_size} height={icon_size}  />
                Feedback
              </Button>
            </NavItem>
              <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Gallery')}>
                <img src={feedback} width={icon_size} height={icon_size}  />
                Gallery
              </Button>
            </NavItem>
            <NavItem className="nav-item" style={{ border: '1px solid white' }}>
              <a  href="https://github.com/austinhutchen" target="_blank" rel="noopener noreferrer">
                <img src={github} width={icon_size} height={icon_size}  />
                Github
              </a>
            </NavItem>
            <NavItem style={{ border: '1px solid white' }} className="nav-item">
              <a  href="https://www.instagram.com/austinscode/" target="_blank">
                <img src={instagram} width={icon_size} height={icon_size} className="nav-icon" />
                Instagram
              </a>
            </NavItem>
            <NavItem className="nav-item" style={{ border: '1px solid white' }}>
              <a href="https://leetcode.com/austinhutchen/" target="_blank">
                <img src={leetcode} width={icon_size} height={icon_size} className="nav-icon" />
                Leetcode
              </a>
            </NavItem>
            <NavItem className="nav-item" style={{ border: '1px solid white' }} >
              <a href="https://www.linkedin.com/in/austin-hutchen-4b5b181a6/" target="_blank">
                <img src={linkedin} width={icon_size} height={icon_size} className="nav-icon" />
                Linkedin
              </a>
            </NavItem>
            <NavItem className="nav-item" style={{ border: '1px solid white' }}>
              <a  href="https://austinhutchen.medium.com/" target="_blank">
                <img src={medium} width={icon_size} height={icon_size} className="nav-icon" />
                Blog
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;