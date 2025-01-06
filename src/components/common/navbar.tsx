import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import "../../css/navBar.css";
export const NavBar: React.FC = () => {
  const [navOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const github = process.env.PUBLIC_URL + '/fast_imgs/github.webp';
  const instagram = process.env.PUBLIC_URL + '/fast_imgs/Instagram.webp';
  const linkedin = process.env.PUBLIC_URL + '/fast_imgs/LinkedIn.webp';
  const facebook = process.env.PUBLIC_URL + '/fast_imgs/Facebook.webp';
  const handshake = process.env.PUBLIC_URL + '/fast_imgs/handshake.webp';
  const home = process.env.PUBLIC_URL + '/fast_imgs/home.webp';
  const about = process.env.PUBLIC_URL + '/fast_imgs/About.webp';
  const projects = process.env.PUBLIC_URL + '/fast_imgs/Circuit.webp';
  const resume = process.env.PUBLIC_URL + '/fast_imgs/Resume.webp';
  const clickme = process.env.PUBLIC_URL + '/fast_imgs/giphy.webp';
  const microChip = process.env.PUBLIC_URL + '/fast_imgs/microchip.webp';

  const icon_height = '27svh';
  const icon_width = 'auto';
const btnStyles = {
  backgroundImage: "url('/fast_imgs/border.webp')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
  const toggle = () => {
    setIsOpen(!navOpen);
  }
  type CustomNavbarTogglerProps = {
    onClick: () => void; // Define the onClick prop as a function that doesn't return anything
    navOpen: boolean; // Add the isOpen prop

  };

  const CustomNavbarToggler: React.FC<CustomNavbarTogglerProps> = ({ onClick, isOpen }) => (
    <button className="custom-navbar-toggler" onClick={onClick}>
     <div 
  id="line1" 
  className={`line ${navOpen ? 'line-open' : 'line-close'}`} 
/>
<div 
  id="line2" 
  className={`line ${navOpen ? 'line-open' : 'line-close'}`} 
/>
<div 
  id="line3" 
  className={`line ${navOpen ? 'line-open' : 'line-close'}`} 
/>
    </button>
  );
  return (
    <div>
    <Navbar className="custom-navbar">
      <div className="navbar-header ">
        <NavbarBrand className="navBrand" id="name">Austin Hutchen</NavbarBrand>
        <img className="clickIcon" height="66px" width="auto" src={clickme} />
        <CustomNavbarToggler onClick={toggle} isOpen={navOpen} />
      </div>
      <div className='collapse-container'>
      <Collapse isOpen={navOpen} navbar >
        <Nav >
          <NavItem className="nav-item  justify-center items-center">
            <Button style={btnStyles} style={{ border: '1px solid gold' }} onClick={() => nav('/')}>
              <img  src={home} width={icon_width} height={icon_height} alt="home" />
              <h3>Home</h3>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={btnStyles} style={{ border: '1px solid gold' }} onClick={() => nav('/AboutMe')}>
              <img src={about} width={icon_width} height={icon_height} alt="about" />
              <h3>About</h3>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={btnStyles} style={{ border: '1px solid gold' }} onClick={() => nav('/Resume')}>
              <img src={resume} width={icon_width} height={icon_height} alt="resume" />
              <h3>Resume</h3>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={btnStyles}  style={{ border: '1px solid gold' }} onClick={() => nav('/Projects')}>
              <img  src={projects} width={icon_width} height={icon_height} alt="projects" />
              <h3>Software</h3>
            </Button>
          </NavItem>
          <NavItem lassName="nav-item  justify-center items-center">
            <Button style={btnStyles} style={{ border: '1px solid gold' }} onClick={() => nav('/Gallery')}>
              <img src={microChip} width={icon_width} height={icon_height} alt="cube" />
              <h3>Electronics</h3>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button  style={{ border: '1px solid white' }}>
                <a href="https://www.linkedin.com/in/austin-hutchen-15440a1b2/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} width={icon_width} height={icon_height}  alt="LinkedIn" />
                  <h3>
                  LinkedIn
                  </h3>
                </a>
              </Button>
            </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ border: '1px solid white' }}>
              <a href="https://github.com/austinhutchen" target="_blank" rel="noopener noreferrer">
                <img src={github} width={icon_width} height={icon_height} alt="GitHub" />
                <h3>Github</h3>
              </a>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ border: '1px solid white' }}>
              <a href="https://www.instagram.com/austinscode/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} width={icon_width} height={icon_height} alt="instagram" />
                <h3>Instagram</h3>
              </a>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ border: '1px solid white' }}>
              <a href="https://www.facebook.com/austinhutchen/reels/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} width={icon_width} height={icon_height} alt="facebook" />
                <h3>Facebook</h3>
              </a>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ border: '1px solid white' }}>
              <a href="https://boulder.joinhandshake.com/profiles/tr9eud" target="_blank" rel="noopener noreferrer">
                <img src={handshake} width={icon_width} height={icon_height} alt="handshake" />
                <h3>Handshake</h3>
              </a>
            </Button>
          </NavItem>
          
          </Nav>
        </Collapse>
      </div>
     
      </Navbar>
    </div>
  );
}

export default NavBar;
