import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
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
  const home = process.env.PUBLIC_URL + '/fast_imgs/home.webp';
  const about = process.env.PUBLIC_URL + '/fast_imgs/About.webp';
  const projects = process.env.PUBLIC_URL + '/fast_imgs/Circuit.webp';
  const resume = process.env.PUBLIC_URL + '/fast_imgs/Resume.webp';
  const feedback = process.env.PUBLIC_URL + '/fast_imgs/feedback.webp';
  const clickme = process.env.PUBLIC_URL + '/fast_imgs/giphy.webp';
  const cube = process.env.PUBLIC_URL + '/fast_imgs/cube.webp';
  const icon_height = '26vh';
  const icon_width = 'auto';
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

          <img className="clickIcon" width={"55vw"} height={"70vh"} src={clickme} />

          <CustomNavbarToggler onClick={toggle} isOpen={isOpen} isToggled={isToggled} />        </div>
        <Collapse isOpen={isOpen} navbar className="navFlex">
          <Nav className="mr-auto d-flex justify-content-center align-items-center nav-horizontal" navbar>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/')}>
                <img src={home} width={icon_width} height={icon_height} alt="home" />
                <h3>
                  Home
                </h3>
              </Button>
            </NavItem >
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/AboutMe')}>
                <img src={about} width={icon_width} height={icon_height} alt="about" />
                <h3>
                About
                </h3>

              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Projects')}>
                <img src={projects} width={icon_width} height={icon_height} alt="projects" />
                <h3>
                Software
                </h3>

              </Button>
            </NavItem>

            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Resume')}>
                <img src={resume} width={icon_width} height={icon_height} alt="resume" />
                <h3>
                Resume
                </h3>
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Gallery')}>
                <img src={cube} width={icon_width} height={icon_height} alt="cube" />
                <h3>
                Embedded
                </h3>
                
              </Button>
            </NavItem>
            <NavItem className="nav-item">
              <Button style={{ border: '1px solid white' }} onClick={() => nav('/Feedback')}>
                <img src={feedback} width={icon_width} height={icon_height} alt="feedback" />
                <h3>
                Feedback
                </h3>
              </Button>
            </NavItem>
            <NavItem className="nav-item" >
            <Button style={{ border: '1px solid white' }} >
              <a href="https://github.com/austinhutchen" target="_blank" rel="noopener noreferrer">
                <img src={github} width={icon_width} height={icon_height} alt="GitHub" />
                <h3>
                Github
                </h3>
              </a>
              </Button>
            </NavItem>
            <NavItem className="nav-item">
            <Button style={{ border: '1px solid white' }} >
              <a href="https://www.instagram.com/austinscode/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} width={icon_width} height={icon_height} className="nav-icon" alt="instagram" />
                <h3>
                Instagram
                </h3>

              </a>
              </Button>
            </NavItem>
            <NavItem className="nav-item" >
            <Button style={{ border: '1px solid white' }} >
              <a href="https://www.facebook.com/austinhutchen/reels/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} width={icon_width} height={icon_height} className="nav-icon" alt="facebook" />
                Facebook
              </a>
              </Button>
            </NavItem>
            <NavItem className="nav-item" >
            <Button style={{ border: '1px solid white' }} >
              <a href="https://leetcode.com/austinhutchen/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} width={icon_width} height={icon_height} className="nav-icon" alt="leetcode" />
                Leetcode
              </a>
              </Button>
            </NavItem>
            <NavItem className="nav-item" >
            <Button style={{ border: '1px solid white' }} >
              <a href="https://www.linkedin.com/in/austin-hutchen-15440a1b2/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} width={icon_width} height={icon_height} className="nav-icon" alt="LinkedIn" />
                LinkedIn
              </a>
              </Button>
            </NavItem>    
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;