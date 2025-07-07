import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Collapse, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import "../../css/navBar.css";
export const NavBar: React.FC = () => {
  const [navOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const url = process.env.PUBLIC_URL;
  const github = `${url}/fast_imgs/github.webp`;
  const linkedin = `${url}/fast_imgs/LinkedIn.webp`;
  const facebook = `${url}/fast_imgs/Facebook.webp`;
  const handshake = `${url}/fast_imgs/handshake.webp`;
  const home = `${url}/fast_imgs/tme.jpg`;
  const about = `${url}/fast_imgs/horus.gif`;
  const resume = `${url}/fast_imgs/Resume.webp`;
  const clickme = `${url}/fast_imgs/giphy.webp`;
  const transistor = `${url}/fast_imgs/transistor.webp`;
  const ebay = `${url}/fast_imgs/ebay.webp`;
  const pinterest = `${url}/fast_imgs/pinterest.webp`;
  const youtube = `${url}/fast_imgs/youtube.webp`;
  const software = `${url}/fast_imgs/webDev.png`;
  const icon_height = '27svh';
  const icon_width = 'auto';
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
        <NavbarBrand className="navBrand" id="name">Austin Morozane</NavbarBrand>
        <img className="clickIcon" height="66px" width="auto" src={clickme} />
        <CustomNavbarToggler onClick={toggle} isOpen={navOpen} />
      </div>
      <div className='collapse-container'>
      <Collapse isOpen={navOpen} navbar >
        <Nav >
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ backgroundColor:'rgba(255, 0, 0, 0.5)',border: '1px solid gold', borderRadius:'1.3svw'  }} onClick={() => nav('/')}>
              <img  src={home} width={icon_width} height={icon_height} alt="home" />
              <h3>Home</h3>
            </Button>
          </NavItem>
        
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ backgroundColor:'rgba(255, 0, 0, 0.5)',border: '1px solid gold', borderRadius:'1.3svw'  }} onClick={() => nav('/AboutMe')}>
              <img src={about} width={icon_width} height={icon_height} alt="about" />
              <h3>About</h3>
            </Button>
          </NavItem>
                      <NavItem className="nav-item  justify-center items-center">
            <Button  style={{ backgroundColor:'rgba(255, 0, 0, 0.5)',border: '1px solid gold', borderRadius:'1.3svw'  }} onClick={() => nav('/Resume')}>
              <img src={resume} width={icon_width} height={icon_height} alt="resume" />
              <h3>Resume</h3>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ backgroundColor:'rgba(255, 0, 0, 0.5)',border: '1px solid gold', borderRadius:'1.3svw'  }} onClick={() => nav('/Projects')}>
              <img  src={software} width={icon_width} height={icon_height} alt="projects" />
              <h3>Software</h3>
            </Button>
          </NavItem>
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{backgroundColor:'rgba(255, 0, 0, 0.5)', border: '1px solid gold', borderRadius:'1.3svw'  }} onClick={() => nav('/Gallery')}>
              <img src={transistor} width={icon_width} height={icon_height} alt="cube" />
              <h3>Digital</h3>
            </Button>
          </NavItem>
        
          <NavItem className="nav-item  justify-center items-center">
            <Button  style={{ backgroundColor:'rgba(255,0,0,0.4)',border: '1px solid white', borderRadius:'1.3svw'  }}>
                <a href="https://www.linkedin.com/in/austin-h-15440a1b2/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} width={icon_width} height={icon_height}  alt="LinkedIn" />
                  <h3>
                  LinkedIn
                  </h3>
                </a>
              </Button>
            </NavItem>
            
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{ backgroundColor:'rgba(255,0,0,0.4)',border: '1px solid white' , borderRadius:'1.3svw' }}>
              <a href="https://github.com/austinmorozane" target="_blank" rel="noopener noreferrer">
                <img src={github} width={icon_width} height={icon_height} alt="GitHub" />
                <h3>Source</h3>
              </a>
            </Button>
          </NavItem>
        
          <NavItem className="nav-item  justify-center items-center">
            <Button style={{backgroundColor:'rgba(255,0,0,0.4)', border: '1px solid white' , borderRadius:'1.3svw' }}>
              <a href="https://www.facebook.com/austinhutchen/reels/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} width={icon_width} style={{borderRadius:'1.3svw' }} height={icon_height} alt="facebook" />
                <h3>Facebook</h3>
              </a>
            </Button>
          </NavItem>

                  <NavItem className="nav-item  justify-center items-center">
            <Button style={{ backgroundColor:'rgba(255,0,0,0.4)',border: '1px solid white' , borderRadius:'1.3svw' }}>
              <a href="https://www.ebay.com/usr/gadgetsllcc" target="_blank" rel="noopener noreferrer">
                <img src={ebay} width={icon_width} style={{borderRadius:'1.3svw' }}  height={icon_height} alt="ebay" />
                <h3>Business</h3>
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
