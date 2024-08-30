import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Collapse, Navbar, Nav, NavItem, NavbarBrand, Button } from 'reactstrap';
import "../../css/navBar.css";
export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false); // Add this line
  const nav = useNavigate();
  const github = process.env.PUBLIC_URL + '/fast_imgs/github.webp';
  const instagram = process.env.PUBLIC_URL + '/fast_imgs/Instagram.webp';
  const leetcode = process.env.PUBLIC_URL + '/fast_imgs/leetcode.webp';
  const linkedin = process.env.PUBLIC_URL + '/fast_imgs/LinkedIn.webp';
  const facebook = process.env.PUBLIC_URL + '/fast_imgs/Facebook.webp';
  const medium = process.env.PUBLIC_URL + '/fast_imgs/Medium.webp';
  const home = process.env.PUBLIC_URL + '/fast_imgs/home.webp';
  const about = process.env.PUBLIC_URL + '/fast_imgs/About.webp';
  const projects = process.env.PUBLIC_URL + '/fast_imgs/Circuit.webp';
  const resume = process.env.PUBLIC_URL + '/fast_imgs/Resume.webp';
  const feedback = process.env.PUBLIC_URL + '/fast_imgs/feedback.webp';
  const clickme = process.env.PUBLIC_URL + '/fast_imgs/giphy.webp';
  const cube = process.env.PUBLIC_URL + '/fast_imgs/cube.webp';
  const icon_size = '31vw';

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsToggled(true); // Set isToggled to true when the navbar is toggled
  }
  type CustomNavbarTogglerProps = {
    onClick: () => void; // Define the onClick prop as a function that doesn't return anything
    isOpen: boolean; // Add the isOpen prop
    isToggled: boolean; // Add the isToggled prop

  };

  const CustomNavbarToggler: React.FC<CustomNavbarTogglerProps> = ({ onClick, isOpen }) => (
    <button className="custom-navbar-toggler" onClick={onClick}>
      <div id="line1" className={`line ${isOpen && isToggled ? 'line-open' : 'line-close'}`} />
      <div id="line2" className={`line ${isOpen && isToggled ? 'line-open' : 'line-close'}`} />
      <div id="line3" className={`line ${isOpen && isToggled ? 'line-open' : 'line-close'}`} />
    </button>
  );
  return (
    <div >
      <Navbar className="custom-navbar" >
        <div className="navbar-header">
          <NavbarBrand className='navBrand' id="name" >Austin Hutchen </NavbarBrand>

          <img className="clickIcon"  width={"55vw"} height={"63vh"} src={clickme}/>

          <CustomNavbarToggler onClick={toggle} isOpen={isOpen} isToggled={isToggled} />        </div>
        <Collapse isOpen={isOpen} navbar className="navFlex">
          <Nav className="mr-auto d-flex justify-content-center align-items-center nav-horizontal" navbar>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/')}>
                <img src={home} width={icon_size} height={icon_size} alt="home" />
                <h3>
                  Home
                </h3>
              </Button>
            </NavItem >
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/AboutMe')}>
                <img src={about} width={icon_size} height={icon_size} alt="about" />
                About
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Projects')}>
                <img src={projects} width={icon_size} height={icon_size} alt="projects" />
                Projects
              </Button>
            </NavItem>

            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Resume')}>
                <img src={resume} width={icon_size} height={icon_size} alt="resume" />
                Resume
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Gallery')}>
                <img src={cube} width={icon_size} height={icon_size} alt="cube" />
                Fun
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Feedback')}>
                <img src={feedback} width={icon_size} height={icon_size} alt="feedback" />
                Feedback
              </Button>
            </NavItem>
            <NavItem className="nav-item" >
              <a href="https://github.com/austinhutchen" target="_blank" rel="noopener noreferrer">
                <img src={github} width={icon_size} height={icon_size} alt="GitHub" />
                Github
              </a>
            </NavItem>
            <NavItem className="nav-item">
              <a href="https://www.instagram.com/austinscode/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} width={icon_size} height={icon_size} className="nav-icon" alt="instagram" />
                Instagram
              </a>
            </NavItem>
            <NavItem className="nav-item" >
              <a href="https://www.facebook.com/austinhutchen/reels/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} width={icon_size} height={icon_size} className="nav-icon" alt="facebook" />
                Facebook
              </a>
            </NavItem>
            <NavItem className="nav-item" >
              <a href="https://leetcode.com/austinhutchen/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} width={icon_size} height={icon_size} className="nav-icon" alt="leetcode" />
                Leetcode
              </a>
            </NavItem>
            <NavItem className="nav-item" >
              <a href="https://www.linkedin.com/in/austin-hutchen-4b5b181a6/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} width={icon_size} height={icon_size} className="nav-icon" alt="LinkedIn" />
                LinkedIn
              </a>
            </NavItem>
            <NavItem className="nav-item" >
              <a href="https://austinhutchen.medium.com/" target="_blank" rel="noopener noreferrer">
                <img src={medium} width={icon_size} height={icon_size} className="nav-icon" alt="Blog" />
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